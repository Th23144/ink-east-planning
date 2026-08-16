import { randomBytes } from "crypto";
import { cookies } from "next/headers";

import { getPayloadClient } from "../payload/getPayloadClient";
import { calculateCartTotals, resolvePurchase } from "./pricing";
import { getCommerceSettings, getProductBySlug, mapCommerceProduct } from "./products";
import type { CartLine, CartSnapshot, CommerceProduct } from "./types";

const CART_COOKIE = "sf_cart_session";

type UnknownRecord = Record<string, unknown>;

type CartMutationResult = {
  cart: CartSnapshot;
  sessionKey: string;
  createdSession: boolean;
};

type AddCartInput = {
  sessionKey?: string;
  productSlug: string;
  variantKey?: string;
  quantity: number;
};

type UpdateCartLineInput = {
  sessionKey: string;
  lineKey: string;
  quantity: number;
};

type RemoveCartLineInput = {
  sessionKey: string;
  lineKey: string;
};

type CartMutationFailure = {
  ok: false;
  code: string;
  message: string;
};

type CartMutationSuccess = {
  ok: true;
  result: CartMutationResult;
};

export type CartMutation = CartMutationFailure | CartMutationSuccess;

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asString = (value: unknown): string | undefined => (typeof value === "string" ? value : undefined);
const asNumber = (value: unknown): number | undefined => (typeof value === "number" ? value : undefined);
const recordId = (doc: UnknownRecord): string | number => {
  if (typeof doc.id === "string" || typeof doc.id === "number") {
    return doc.id;
  }
  throw new Error("Cart document is missing a valid id.");
};

const emptyCart = (): CartSnapshot => ({
  id: null,
  currency: "USD",
  lines: [],
  item_count: 0,
  subtotal_minor: 0
});

const newSessionKey = () => randomBytes(32).toString("base64url");
const newLineKey = () => randomBytes(18).toString("base64url");

const getCartDocBySession = async (sessionKey: string, depth = 2): Promise<UnknownRecord | undefined> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "carts" as never,
    where: {
      and: [
        { session_key: { equals: sessionKey } },
        { status: { equals: "active" } }
      ]
    },
    limit: 1,
    depth,
    overrideAccess: true
  });

  const doc: unknown = result.docs[0];
  if (!isRecord(doc)) {
    return undefined;
  }

  const expiresAt = asString(doc.expires_at);
  if (expiresAt && Date.parse(expiresAt) <= Date.now()) {
    return undefined;
  }

  return doc;
};

const productFromCartEntry = async (entry: UnknownRecord): Promise<CommerceProduct | null> => {
  const populated = mapCommerceProduct(entry.product);
  if (populated) {
    return populated;
  }

  const slug = asString(entry.product_slug_snapshot);
  return slug ? getProductBySlug(slug) : null;
};

const mapCartLine = async (entry: unknown, maxQuantityPerLine: number): Promise<CartLine | undefined> => {
  if (!isRecord(entry)) {
    return undefined;
  }

  const lineKey = asString(entry.line_key);
  const quantity = Math.max(1, Math.trunc(asNumber(entry.quantity) ?? 1));
  const product = await productFromCartEntry(entry);
  const variantKey = asString(entry.variant_key);
  const productTitle = product?.title ?? asString(entry.product_title_snapshot) ?? "Unavailable item";
  const productSlug = product?.slug ?? asString(entry.product_slug_snapshot) ?? "";
  const resolution = product
    ? resolvePurchase(product, variantKey, quantity, maxQuantityPerLine)
    : { ok: false as const, code: "product_unavailable", message: "This item is no longer available." };
  const storedUnitPrice = Math.max(0, Math.trunc(asNumber(entry.unit_price_minor) ?? 0));
  const unitPrice = resolution.ok ? resolution.unit_price_minor : storedUnitPrice;
  const variantLabel = resolution.ok
    ? resolution.variant_label
    : asString(entry.variant_label_snapshot);
  const sku = resolution.ok ? resolution.sku : asString(entry.sku_snapshot);

  if (!lineKey) {
    return undefined;
  }

  return {
    line_key: lineKey,
    product_id: product?.id ?? null,
    product_slug: productSlug,
    product_title: productTitle,
    variant_key: variantKey,
    variant_label: variantLabel,
    sku,
    quantity,
    unit_price_minor: unitPrice,
    line_total_minor: unitPrice * quantity,
    available: resolution.ok,
    max_quantity: resolution.ok ? resolution.max_quantity : quantity,
    artwork_tone: product?.artwork_tone ?? "sand",
    image: product?.card_image
  };
};

const snapshotFromDoc = async (doc: unknown): Promise<CartSnapshot> => {
  if (!isRecord(doc)) {
    return emptyCart();
  }

  const entries = Array.isArray(doc.items) ? doc.items : [];
  const settings = await getCommerceSettings();
  const mapped = await Promise.all(entries.map((entry) => mapCartLine(entry, settings.cart.max_quantity_per_line)));
  const lines = mapped.filter((line): line is CartLine => Boolean(line));
  const totals = calculateCartTotals(lines);

  return {
    id: recordId(doc),
    currency: "USD",
    lines,
    item_count: totals.item_count,
    subtotal_minor: totals.subtotal_minor
  };
};

const mutationFailure = (code: string, message: string): CartMutationFailure => ({
  ok: false,
  code,
  message
});

export const getCartSessionFromCookies = async (): Promise<string | undefined> => {
  const store = await cookies();
  const value = store.get(CART_COOKIE)?.value;
  return value && /^[A-Za-z0-9_-]{43}$/.test(value) ? value : undefined;
};

export const getCurrentCart = async (): Promise<CartSnapshot> => {
  const sessionKey = await getCartSessionFromCookies();
  if (!sessionKey) {
    return emptyCart();
  }

  return getCartSnapshot(sessionKey);
};

export const getCartSnapshot = async (sessionKey: string): Promise<CartSnapshot> => {
  const doc = await getCartDocBySession(sessionKey, 2);
  return snapshotFromDoc(doc);
};

const storedItems = (doc: unknown): UnknownRecord[] => {
  if (!isRecord(doc) || !Array.isArray(doc.items)) {
    return [];
  }

  return doc.items.filter(isRecord).map((item) => ({
    ...item,
    product: isRecord(item.product) ? item.product.id : item.product
  }));
};

const persistCartItems = async (cartId: string | number, items: UnknownRecord[]) => {
  const payload = await getPayloadClient();
  const totals = calculateCartTotals(items.map((item) => ({
    quantity: Math.max(1, Math.trunc(asNumber(item.quantity) ?? 1)),
    unit_price_minor: Math.max(0, Math.trunc(asNumber(item.unit_price_minor) ?? 0))
  })));

  return payload.update({
    collection: "carts" as never,
    id: cartId,
    data: {
      items,
      item_count: totals.item_count,
      subtotal_minor: totals.subtotal_minor
    } as never,
    depth: 2,
    overrideAccess: true
  });
};

const createCart = async (sessionKey: string): Promise<UnknownRecord> => {
  const payload = await getPayloadClient();
  const settings = await getCommerceSettings();
  const expiresAt = new Date(Date.now() + settings.cart.session_ttl_days * 24 * 60 * 60 * 1000).toISOString();
  const created: unknown = await payload.create({
    collection: "carts" as never,
    data: {
      session_key: sessionKey,
      status: "active",
      currency: "USD",
      items: [],
      item_count: 0,
      subtotal_minor: 0,
      expires_at: expiresAt
    } as never,
    depth: 2,
    overrideAccess: true
  });

  if (!isRecord(created)) {
    throw new Error("Payload did not return a Cart document after creation.");
  }

  return created;
};

const relationId = (product: CommerceProduct): CommerceProduct["id"] => product.id;

export const addCartItem = async (input: AddCartInput): Promise<CartMutation> => {
  const product = await getProductBySlug(input.productSlug);
  if (!product) {
    return mutationFailure("product_not_found", "This product is not available.");
  }

  const settings = await getCommerceSettings();
  let sessionKey: string = input.sessionKey ?? newSessionKey();
  let cartDoc = input.sessionKey ? await getCartDocBySession(input.sessionKey, 0) : undefined;
  let createdSession = false;

  if (!cartDoc) {
    if (input.sessionKey) {
      sessionKey = newSessionKey();
    }
    cartDoc = await createCart(sessionKey);
    createdSession = true;
  }

  const items = storedItems(cartDoc);
  const normalizedVariant = input.variantKey?.trim() || undefined;
  const existingIndex = items.findIndex((item) =>
    asString(item.product_slug_snapshot) === product.slug &&
    (asString(item.variant_key) || undefined) === normalizedVariant
  );
  const existingQuantity = existingIndex >= 0
    ? Math.max(1, Math.trunc(asNumber(items[existingIndex]?.quantity) ?? 1))
    : 0;
  const targetQuantity = existingQuantity + input.quantity;
  const resolution = resolvePurchase(product, normalizedVariant, targetQuantity, settings.cart.max_quantity_per_line);

  if (!resolution.ok) {
    return mutationFailure(resolution.code, resolution.message);
  }

  const nextItem: UnknownRecord = {
    line_key: existingIndex >= 0 ? asString(items[existingIndex]?.line_key) ?? newLineKey() : newLineKey(),
    product: relationId(product),
    product_slug_snapshot: product.slug,
    product_title_snapshot: product.title,
    variant_key: resolution.variant_key,
    variant_label_snapshot: resolution.variant_label,
    sku_snapshot: resolution.sku,
    quantity: targetQuantity,
    unit_price_minor: resolution.unit_price_minor
  };

  if (existingIndex >= 0) {
    items[existingIndex] = nextItem;
  } else {
    items.push(nextItem);
  }

  const updated = await persistCartItems(recordId(cartDoc), items);
  return {
    ok: true,
    result: {
      cart: await snapshotFromDoc(updated),
      sessionKey,
      createdSession
    }
  };
};

export const updateCartLine = async (input: UpdateCartLineInput): Promise<CartMutation> => {
  const cartDoc = await getCartDocBySession(input.sessionKey, 2);
  if (!cartDoc) {
    return mutationFailure("cart_not_found", "This bag session is no longer available.");
  }

  const items = storedItems(cartDoc);
  const index = items.findIndex((item) => asString(item.line_key) === input.lineKey);
  if (index < 0) {
    return mutationFailure("line_not_found", "This bag item could not be found.");
  }

  const product = await productFromCartEntry(items[index]!);
  if (!product) {
    return mutationFailure("product_unavailable", "This item is no longer available. Remove it from the bag to continue.");
  }

  const settings = await getCommerceSettings();
  const variantKey = asString(items[index]!.variant_key);
  const resolution = resolvePurchase(product, variantKey, input.quantity, settings.cart.max_quantity_per_line);
  if (!resolution.ok) {
    return mutationFailure(resolution.code, resolution.message);
  }

  items[index] = {
    ...items[index],
    product: relationId(product),
    product_slug_snapshot: product.slug,
    product_title_snapshot: product.title,
    variant_label_snapshot: resolution.variant_label,
    sku_snapshot: resolution.sku,
    quantity: input.quantity,
    unit_price_minor: resolution.unit_price_minor
  };

  const updated = await persistCartItems(recordId(cartDoc), items);
  return {
    ok: true,
    result: {
      cart: await snapshotFromDoc(updated),
      sessionKey: input.sessionKey,
      createdSession: false
    }
  };
};

export const removeCartLine = async (input: RemoveCartLineInput): Promise<CartMutation> => {
  const cartDoc = await getCartDocBySession(input.sessionKey, 0);
  if (!cartDoc) {
    return mutationFailure("cart_not_found", "This bag session is no longer available.");
  }

  const items = storedItems(cartDoc);
  const nextItems = items.filter((item) => asString(item.line_key) !== input.lineKey);
  if (nextItems.length === items.length) {
    return mutationFailure("line_not_found", "This bag item could not be found.");
  }

  const updated = await persistCartItems(recordId(cartDoc), nextItems);
  return {
    ok: true,
    result: {
      cart: await snapshotFromDoc(updated),
      sessionKey: input.sessionKey,
      createdSession: false
    }
  };
};

export const cartCookie = {
  name: CART_COOKIE,
  maxAgeSeconds: (ttlDays: number) => ttlDays * 24 * 60 * 60
} as const;
