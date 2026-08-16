export const commerceSettings = {
  currency: "USD",
  shop: {
    eyebrow: "Spatial Flow · Source-native commerce V0",
    title_lead: "Objects for the",
    title_emphasis: "Quiet Room",
    lede: "A small assembly of vessels, textiles, lights and useful forms chosen for the way they soften a room rather than fill it.",
    body: "Batch A keeps the current Spatial Flow visual language provisional while moving catalog, inventory, pricing and Cart truth into the source-native system.",
    signoff: "— The Spatial Flow editors",
    products_per_page: 24
  },
  cart: {
    bag_label: "Bag",
    session_ttl_days: 30,
    max_quantity_per_line: 24
  },
  inventory: {
    low_stock_threshold: 3
  }
} as const;
