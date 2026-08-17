import type { PublicMediaAsset } from "../public";

export type CommerceId = string | number;
export type CommerceCurrency = "USD";

export type ProductCategory = {
  id: CommerceId;
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
};

export type ArtworkTone =
  | "sand"
  | "bluestone"
  | "terracotta"
  | "linen"
  | "oak"
  | "lamp"
  | "graphite";

export type ProductBadge = "none" | "new" | "editors_pick" | "one_of_one" | "last_one";

export type ProductVariant = {
  key: string;
  label: string;
  sku: string;
  price_minor: number;
  stock_quantity: number;
  enabled: boolean;
};

export type ProductAttribute = {
  label: string;
  value: string;
};

export type CommerceProduct = {
  id: CommerceId;
  title: string;
  slug: string;
  subtitle?: string;
  product_type: "simple" | "variant";
  currency: CommerceCurrency;
  base_price_minor: number;
  compare_at_price_minor?: number;
  sku?: string;
  inventory_policy: "track" | "untracked";
  stock_quantity: number;
  variants: ProductVariant[];
  categories: ProductCategory[];
  card_image?: PublicMediaAsset;
  gallery: PublicMediaAsset[];
  artwork_tone: ArtworkTone;
  badge: ProductBadge;
  short_description?: string;
  place_note?: string;
  maker?: string;
  origin?: string;
  material?: string;
  dimensions?: string;
  attributes: ProductAttribute[];
  editorial_body?: string;
  featured: boolean;
  sort_order: number;
  legacy_path?: string;
  min_price_minor: number;
  max_price_minor: number;
  available: boolean;
};

export type CatalogSort = "editorial" | "price_asc" | "price_desc" | "newest";

export type CatalogResult = {
  products: CommerceProduct[];
  page: number;
  totalPages: number;
  totalProducts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type CommerceSettings = {
  currency: CommerceCurrency;
  shop: {
    eyebrow: string;
    title_lead: string;
    title_emphasis: string;
    lede?: string;
    body?: string;
    signoff?: string;
    products_per_page: number;
  };
  cart: {
    bag_label: string;
    session_ttl_days: number;
    max_quantity_per_line: number;
  };
  inventory: {
    low_stock_threshold: number;
  };
};

export type PurchaseOption = {
  key: string;
  label: string;
  sku?: string;
  price_minor: number;
  stock_quantity?: number;
  available: boolean;
};

export type PurchaseResolution =
  | {
      ok: true;
      variant_key?: string;
      variant_label?: string;
      sku?: string;
      unit_price_minor: number;
      max_quantity: number;
    }
  | {
      ok: false;
      code: "INVALID_QUANTITY" | "INVALID_VARIANT" | "OUT_OF_STOCK";
      message: string;
    };

export type CartLine = {
  line_key: string;
  product_id: CommerceId | null;
  product_slug: string;
  product_title: string;
  variant_key?: string;
  variant_label?: string;
  sku?: string;
  quantity: number;
  unit_price_minor: number;
  line_total_minor: number;
  artwork_tone: ArtworkTone;
  image?: PublicMediaAsset;
  available: boolean;
  max_quantity: number;
};

export type CartSnapshot = {
  id: CommerceId | null;
  currency: CommerceCurrency;
  lines: CartLine[];
  item_count: number;
  subtotal_minor: number;
};
