import type {
  CartLine,
  CommerceCurrency,
  CommerceProduct,
  PurchaseOption,
  PurchaseResolution
} from "./types";

export const formatMoney = (minor: number, currency: CommerceCurrency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.max(0, minor) / 100);

export const buildPurchaseOptions = (product: CommerceProduct): PurchaseOption[] => {
  if (product.product_type === "simple") {
    const stock = product.inventory_policy === "track" ? product.stock_quantity : undefined;
    return [
      {
        key: "default",
        label: "Standard",
        sku: product.sku,
        price_minor: product.base_price_minor,
        stock_quantity: stock,
        available: product.inventory_policy === "untracked" || product.stock_quantity > 0
      }
    ];
  }

  return product.variants.map((variant) => ({
    key: variant.key,
    label: variant.label,
    sku: variant.sku,
    price_minor: variant.price_minor,
    stock_quantity: variant.stock_quantity,
    available: variant.enabled && variant.stock_quantity > 0
  }));
};

export const resolvePurchase = (
  product: CommerceProduct,
  variantKey: string | undefined,
  quantity: number,
  maxQuantityPerLine: number
): PurchaseResolution => {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > maxQuantityPerLine) {
    return {
      ok: false,
      code: "INVALID_QUANTITY",
      message: `Quantity must be between 1 and ${maxQuantityPerLine}.`
    };
  }

  if (product.product_type === "variant") {
    const variant = product.variants.find((candidate) => candidate.key === variantKey && candidate.enabled);

    if (!variant) {
      return {
        ok: false,
        code: "INVALID_VARIANT",
        message: "Choose an available product option before adding this piece to the Bag."
      };
    }

    if (variant.stock_quantity < quantity) {
      return {
        ok: false,
        code: "OUT_OF_STOCK",
        message: variant.stock_quantity > 0
          ? `Only ${variant.stock_quantity} remain in this option.`
          : "This option is currently out of stock."
      };
    }

    return {
      ok: true,
      variant_key: variant.key,
      variant_label: variant.label,
      sku: variant.sku,
      unit_price_minor: variant.price_minor,
      max_quantity: Math.min(maxQuantityPerLine, variant.stock_quantity)
    };
  }

  if (product.inventory_policy === "track" && product.stock_quantity < quantity) {
    return {
      ok: false,
      code: "OUT_OF_STOCK",
      message: product.stock_quantity > 0
        ? `Only ${product.stock_quantity} remain in stock.`
        : "This piece is currently out of stock."
    };
  }

  return {
    ok: true,
    sku: product.sku,
    unit_price_minor: product.base_price_minor,
    max_quantity:
      product.inventory_policy === "track"
        ? Math.min(maxQuantityPerLine, product.stock_quantity)
        : maxQuantityPerLine
  };
};

export const calculateCartTotals = (items: Pick<CartLine, "quantity" | "unit_price_minor">[]) => {
  const item_count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal_minor = items.reduce((sum, item) => sum + item.quantity * item.unit_price_minor, 0);

  return { item_count, subtotal_minor };
};
