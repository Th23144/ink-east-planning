import type { Where } from "payload";

import { getPayloadClient } from "../payload/getPayloadClient";
import { mapMediaAsset } from "../public/mappers";
import type {
  ArtworkTone,
  CatalogResult,
  CatalogSort,
  CommerceProduct,
  CommerceSettings,
  ProductAttribute,
  ProductBadge,
  ProductCategory,
  ProductVariant
} from "./types";

type UnknownRecord = Record<string, unknown>;

type CatalogOptions = {
  categorySlug?: string;
  sort?: CatalogSort;
  page?: number;
  limit?: number;
};

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asString = (value: unknown): string | undefined => (typeof value === "string" ? value : undefined);
const asNumber = (value: unknown): number | undefined => (typeof value === "number" ? value : undefined);
const asBoolean = (value: unknown): boolean | undefined => (typeof value === "boolean" ? value : undefined);
const requiredString = (value: unknown, fallback = ""): string => asString(value) ?? String(value ?? fallback);
const isDefined = <T>(value: T | undefined): value is T => value !== undefined;

const publicCommerceConditions: Where[] = [
  { status: { equals: "active" } },
  { visibility: { equals: "public" } }
];

const productSort = (sort: CatalogSort): string => {
  switch (sort) {
    case "price_asc":
      return "base_price_minor";
    case "price_desc":
      return "-base_price_minor";
    case "newest":
      return "-createdAt";
    case "editorial":
    default:
      return "sort_order";
  }
};

const mapProductCategory = (category: unknown): ProductCategory | undefined => {
  if (!isRecord(category) || category.status !== "active" || category.visibility !== "public") {
    return undefined;
  }

  return {
    id: requiredString(category.id),
    name: requiredString(category.name),
    slug: requiredString(category.slug),
    description: asString(category.description),
    sort_order: asNumber(category.sort_order)
  };
};

const mapProductVariant = (variant: unknown): ProductVariant | undefined => {
  if (!isRecord(variant)) {
    return undefined;
  }

  const key = asString(variant.key);
  const label = asString(variant.label);
  const sku = asString(variant.sku);
  const price = asNumber(variant.price_minor);
  const stock = asNumber(variant.stock_quantity);

  if (!key || !label || !sku || price == null || stock == null) {
    return undefined;
  }

  return {
    key,
    label,
    sku,
    price_minor: Math.max(0, Math.trunc(price)),
    stock_quantity: Math.max(0, Math.trunc(stock)),
    enabled: asBoolean(variant.enabled) ?? true
  };
};

const mapProductAttribute = (attribute: unknown): ProductAttribute | undefined => {
  if (!isRecord(attribute)) {
    return undefined;
  }

  const label = asString(attribute.label);
  const value = asString(attribute.value);
  return label && value ? { label, value } : undefined;
};

const validArtworkTones = new Set<ArtworkTone>([
  "sand",
  "bluestone",
  "terracotta",
  "linen",
  "oak",
  "lamp",
  "graphite"
]);

const validProductBadges = new Set<ProductBadge>([
  "none",
  "new",
  "editors_pick",
  "one_of_one",
  "last_one"
]);

const mapArtworkTone = (value: unknown): ArtworkTone => {
  const tone = asString(value) as ArtworkTone | undefined;
  return tone && validArtworkTones.has(tone) ? tone : "sand";
};

const mapProductBadge = (value: unknown): ProductBadge => {
  const badge = asString(value) as ProductBadge | undefined;
  return badge && validProductBadges.has(badge) ? badge : "none";
};

export const mapCommerceProduct = (product: unknown): CommerceProduct | undefined => {
  if (!isRecord(product) || product.status !== "active" || product.visibility !== "public") {
    return undefined;
  }

  const productType = product.product_type === "variant" ? "variant" : "simple";
  const basePrice = asNumber(product.base_price_minor);
  if (basePrice == null) {
    return undefined;
  }

  const variants = Array.isArray(product.variants)
    ? product.variants.map(mapProductVariant).filter(isDefined)
    : [];
  const enabledVariants = variants.filter((variant) => variant.enabled);
  const prices = productType === "variant" && enabledVariants.length > 0
    ? enabledVariants.map((variant) => variant.price_minor)
    : [Math.max(0, Math.trunc(basePrice))];
  const inventoryPolicy = product.inventory_policy === "untracked" ? "untracked" : "track";
  const simpleStock = Math.max(0, Math.trunc(asNumber(product.stock_quantity) ?? 0));
  const available = productType === "variant"
    ? enabledVariants.some((variant) => variant.stock_quantity > 0)
    : inventoryPolicy === "untracked" || simpleStock > 0;
  const categories = Array.isArray(product.categories)
    ? product.categories.map(mapProductCategory).filter(isDefined)
    : [];
  const attributes = Array.isArray(product.attributes)
    ? product.attributes.map(mapProductAttribute).filter(isDefined)
    : [];
  const gallery = Array.isArray(product.gallery)
    ? product.gallery.map(mapMediaAsset).filter(isDefined)
    : [];

  return {
    id: requiredString(product.id),
    title: requiredString(product.title),
    slug: requiredString(product.slug),
    subtitle: asString(product.subtitle),
    product_type: productType,
    currency: "USD",
    base_price_minor: Math.max(0, Math.trunc(basePrice)),
    compare_at_price_minor: asNumber(product.compare_at_price_minor),
    sku: asString(product.sku),
    inventory_policy: inventoryPolicy,
    stock_quantity: simpleStock,
    variants,
    categories,
    card_image: mapMediaAsset(product.card_image),
    gallery,
    artwork_tone: mapArtworkTone(product.artwork_tone),
    badge: mapProductBadge(product.badge),
    short_description: asString(product.short_description),
    place_note: asString(product.place_note),
    maker: asString(product.maker),
    origin: asString(product.origin),
    material: asString(product.material),
    dimensions: asString(product.dimensions),
    attributes,
    editorial_body: asString(product.editorial_body),
    featured: asBoolean(product.featured) ?? false,
    sort_order: asNumber(product.sort_order) ?? 100,
    legacy_path: asString(product.legacy_path),
    min_price_minor: Math.min(...prices),
    max_price_minor: Math.max(...prices),
    available
  };
};

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "product-categories" as never,
    where: { and: publicCommerceConditions },
    limit: 100,
    depth: 0,
    sort: "sort_order",
    overrideAccess: false
  });

  return result.docs.map(mapProductCategory).filter(isDefined);
};

const getCategoryIdBySlug = async (slug: string) => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "product-categories" as never,
    where: {
      and: [...publicCommerceConditions, { slug: { equals: slug } }]
    },
    limit: 1,
    depth: 0,
    overrideAccess: false
  });

  return mapProductCategory(result.docs[0])?.id;
};

export const getCatalog = async (options: CatalogOptions = {}): Promise<CatalogResult> => {
  const payload = await getPayloadClient();
  const and: Where[] = [...publicCommerceConditions];
  const categorySlug = options.categorySlug?.trim();

  if (categorySlug) {
    const categoryId = await getCategoryIdBySlug(categorySlug);
    if (!categoryId) {
      return {
        products: [],
        page: 1,
        totalPages: 0,
        totalProducts: 0,
        hasNextPage: false,
        hasPrevPage: false
      };
    }

    and.push({ categories: { in: [categoryId] } });
  }

  const page = Math.max(1, Math.trunc(options.page ?? 1));
  const limit = Math.min(48, Math.max(1, Math.trunc(options.limit ?? 24)));
  const result = await payload.find({
    collection: "products" as never,
    where: { and },
    page,
    limit,
    depth: 2,
    sort: productSort(options.sort ?? "editorial"),
    overrideAccess: false
  });

  return {
    products: result.docs.map(mapCommerceProduct).filter(isDefined),
    page: result.page ?? page,
    totalPages: result.totalPages ?? 1,
    totalProducts: result.totalDocs ?? 0,
    hasNextPage: Boolean(result.hasNextPage),
    hasPrevPage: Boolean(result.hasPrevPage)
  };
};

export const getProductBySlug = async (slug: string): Promise<CommerceProduct | null> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "products" as never,
    where: {
      and: [...publicCommerceConditions, { slug: { equals: slug } }]
    },
    limit: 1,
    depth: 2,
    overrideAccess: false
  });

  return mapCommerceProduct(result.docs[0]) ?? null;
};

export const getRelatedProducts = async (product: CommerceProduct, limit = 4): Promise<CommerceProduct[]> => {
  const payload = await getPayloadClient();
  const categoryId = product.categories[0]?.id;
  const and: Where[] = [
    ...publicCommerceConditions,
    { slug: { not_equals: product.slug } }
  ];

  if (categoryId) {
    and.push({ categories: { in: [categoryId] } });
  }

  const result = await payload.find({
    collection: "products" as never,
    where: { and },
    limit: Math.min(12, Math.max(1, limit)),
    depth: 2,
    sort: "sort_order",
    overrideAccess: false
  });

  return result.docs.map(mapCommerceProduct).filter(isDefined);
};

const mapCommerceSettings = (settings: unknown): CommerceSettings => {
  const doc = isRecord(settings) ? settings : {};
  const shop = isRecord(doc.shop) ? doc.shop : {};
  const cart = isRecord(doc.cart) ? doc.cart : {};
  const inventory = isRecord(doc.inventory) ? doc.inventory : {};

  return {
    currency: "USD",
    shop: {
      eyebrow: asString(shop.eyebrow) ?? "Spatial Flow / Shop",
      title_lead: asString(shop.title_lead) ?? "Objects for the",
      title_emphasis: asString(shop.title_emphasis) ?? "Quiet Room",
      lede: asString(shop.lede),
      body: asString(shop.body),
      signoff: asString(shop.signoff),
      products_per_page: Math.min(48, Math.max(1, Math.trunc(asNumber(shop.products_per_page) ?? 24)))
    },
    cart: {
      bag_label: asString(cart.bag_label) ?? "Bag",
      session_ttl_days: Math.min(365, Math.max(1, Math.trunc(asNumber(cart.session_ttl_days) ?? 30))),
      max_quantity_per_line: Math.min(99, Math.max(1, Math.trunc(asNumber(cart.max_quantity_per_line) ?? 24)))
    },
    inventory: {
      low_stock_threshold: Math.max(0, Math.trunc(asNumber(inventory.low_stock_threshold) ?? 3))
    }
  };
};

export const getCommerceSettings = async (): Promise<CommerceSettings> => {
  const payload = await getPayloadClient();
  const settings = await payload.findGlobal({
    slug: "commerce-settings" as never,
    depth: 0,
    overrideAccess: false
  });

  return mapCommerceSettings(settings);
};
