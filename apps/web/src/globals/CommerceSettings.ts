import type { GlobalConfig } from "payload";

import { canDeleteContent } from "../payload/access";

export const CommerceSettings: GlobalConfig = {
  slug: "commerce-settings",
  label: "Commerce Settings",
  admin: {
    group: "Commerce"
  },
  access: {
    read: () => true,
    update: canDeleteContent
  },
  fields: [
    {
      name: "currency",
      type: "select",
      required: true,
      defaultValue: "USD",
      options: [{ label: "USD", value: "USD" }]
    },
    {
      name: "shop",
      type: "group",
      label: "Shop V0 Copy",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "title_lead", type: "text" },
        { name: "title_emphasis", type: "text" },
        { name: "lede", type: "textarea" },
        { name: "body", type: "textarea" },
        { name: "signoff", type: "text" },
        { name: "products_per_page", type: "number", defaultValue: 24, min: 4, max: 96 }
      ]
    },
    {
      name: "cart",
      type: "group",
      label: "Cart Runtime",
      fields: [
        { name: "bag_label", type: "text", defaultValue: "Bag" },
        { name: "session_ttl_days", type: "number", defaultValue: 30, min: 1, max: 90 },
        { name: "max_quantity_per_line", type: "number", defaultValue: 24, min: 1, max: 99 }
      ]
    },
    {
      name: "inventory",
      type: "group",
      label: "Inventory Presentation",
      fields: [
        { name: "low_stock_threshold", type: "number", defaultValue: 3, min: 1, max: 99 }
      ]
    }
  ]
};
