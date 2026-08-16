import { calculateCartTotals, resolvePurchase } from "./pricing";
import type { CommerceProduct } from "./types";

const assert = (condition: unknown, message: string) => {
  if (!condition) {
    throw new Error(`Commerce contract check failed: ${message}`);
  }
};

const variantProduct: CommerceProduct = {
  id: "fixture-1",
  title: "Fixture Throw",
  slug: "fixture-throw",
  product_type: "variant",
  currency: "USD",
  base_price_minor: 19000,
  inventory_policy: "track",
  stock_quantity: 0,
  variants: [
    {
      key: "natural",
      label: "Natural",
      sku: "FIX-NAT",
      price_minor: 19000,
      stock_quantity: 3,
      enabled: true
    },
    {
      key: "clay",
      label: "Clay",
      sku: "FIX-CLAY",
      price_minor: 20500,
      stock_quantity: 0,
      enabled: true
    }
  ],
  categories: [],
  gallery: [],
  artwork_tone: "linen",
  badge: "none",
  attributes: [],
  featured: false,
  sort_order: 10,
  min_price_minor: 19000,
  max_price_minor: 20500,
  available: true
};

const natural = resolvePurchase(variantProduct, "natural", 2, 24);
assert(natural.ok, "available variant should resolve");
if (natural.ok) {
  assert(natural.unit_price_minor === 19000, "variant price must be server authoritative");
  assert(natural.max_quantity === 3, "tracked stock must cap quantity");
}

const missingVariant = resolvePurchase(variantProduct, "missing", 1, 24);
assert(!missingVariant.ok && missingVariant.code === "INVALID_VARIANT", "unknown variants must fail");

const outOfStock = resolvePurchase(variantProduct, "clay", 1, 24);
assert(!outOfStock.ok && outOfStock.code === "OUT_OF_STOCK", "zero-stock variants must fail");

const totals = calculateCartTotals([
  { quantity: 2, unit_price_minor: 19000 },
  { quantity: 1, unit_price_minor: 48000 }
]);
assert(totals.item_count === 3, "cart item count must sum quantities");
assert(totals.subtotal_minor === 86000, "cart subtotal must use integer minor-unit arithmetic");

console.log("PASS: Commerce Batch A pricing, variant, stock and cart-total contracts.");
