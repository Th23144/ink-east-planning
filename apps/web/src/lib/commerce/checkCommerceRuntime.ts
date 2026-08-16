import { getPayload } from "payload";

import config from "../../payload.config";
import { seedCommerce } from "../../payload/seed/seedCommerce";
import { addCartItem, getCartSnapshot, removeCartLine, updateCartLine } from "./cart";
import { getCatalog, getProductBySlug } from "./products";

const assert = (condition: unknown, message: string) => {
  if (!condition) {
    throw new Error(`Commerce runtime check failed: ${message}`);
  }
};

const main = async () => {
  await seedCommerce();

  const catalog = await getCatalog({ limit: 24 });
  assert(catalog.totalProducts === 7, "seeded public catalog must expose exactly seven Batch A products");

  const throwProduct = await getProductBySlug("linen-throw");
  assert(throwProduct?.product_type === "variant", "variant product must resolve from Payload");
  assert(throwProduct?.min_price_minor === 19000, "variant minimum price must come from server data");
  assert(throwProduct?.max_price_minor === 20500, "variant maximum price must come from server data");

  const firstAdd = await addCartItem({
    productSlug: "linen-throw",
    variantKey: "natural",
    quantity: 2
  });
  assert(firstAdd.ok, "first add-to-Bag must create a server-owned cart");
  if (!firstAdd.ok) return;

  const sessionKey = firstAdd.result.sessionKey;
  assert(firstAdd.result.createdSession, "first add must create a new anonymous cart session");
  assert(firstAdd.result.cart.item_count === 2, "first add must persist quantity two");
  assert(firstAdd.result.cart.subtotal_minor === 38000, "first add subtotal must use server price");

  const mergedAdd = await addCartItem({
    sessionKey,
    productSlug: "linen-throw",
    variantKey: "natural",
    quantity: 1
  });
  assert(mergedAdd.ok, "same product and variant must merge into the existing line");
  if (!mergedAdd.ok) return;
  assert(!mergedAdd.result.createdSession, "same valid session must be reused");
  assert(mergedAdd.result.cart.lines.length === 1, "merged product/variant must remain one line");
  assert(mergedAdd.result.cart.item_count === 3, "merged quantity must become three");
  assert(mergedAdd.result.cart.subtotal_minor === 57000, "merged subtotal must remain integer server arithmetic");

  const overStock = await addCartItem({
    sessionKey,
    productSlug: "linen-throw",
    variantKey: "natural",
    quantity: 1
  });
  assert(!overStock.ok && overStock.code === "OUT_OF_STOCK", "cumulative add must not exceed live variant stock");

  const lineKey = mergedAdd.result.cart.lines[0]?.line_key;
  assert(lineKey, "merged cart line must have an opaque line key");
  if (!lineKey) return;

  const updated = await updateCartLine({ sessionKey, lineKey, quantity: 2 });
  assert(updated.ok, "quantity update must persist through the cart service");
  if (!updated.ok) return;
  assert(updated.result.cart.item_count === 2, "quantity update must recalculate item count");
  assert(updated.result.cart.subtotal_minor === 38000, "quantity update must recalculate subtotal");

  const snapshot = await getCartSnapshot(sessionKey);
  assert(snapshot.item_count === 2 && snapshot.subtotal_minor === 38000, "fresh cart read must match persisted state");

  const removed = await removeCartLine({ sessionKey, lineKey });
  assert(removed.ok, "remove must persist through the cart service");
  if (!removed.ok) return;
  assert(removed.result.cart.item_count === 0, "remove must clear item count");
  assert(removed.result.cart.subtotal_minor === 0, "remove must clear subtotal");

  const invalidVariant = await addCartItem({
    sessionKey,
    productSlug: "linen-throw",
    variantKey: "not-a-real-variant",
    quantity: 1
  });
  assert(!invalidVariant.ok && invalidVariant.code === "INVALID_VARIANT", "unknown variant keys must be rejected server-side");

  const missingProduct = await addCartItem({
    sessionKey,
    productSlug: "not-a-real-product",
    quantity: 1
  });
  assert(!missingProduct.ok && missingProduct.code === "product_not_found", "unknown products must be rejected server-side");

  const payload = await getPayload({ config });
  await payload.delete({
    collection: "carts",
    where: { session_key: { equals: sessionKey } },
    overrideAccess: true
  });

  console.log("PASS: Commerce Batch A Payload catalog and server-owned Cart runtime smoke test.");
};

main()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
