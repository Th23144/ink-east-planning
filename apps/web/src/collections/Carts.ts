import type { CollectionConfig } from "payload";

import { canAccessAdmin, canDeleteContent, canEditContent } from "../payload/access";

export const Carts: CollectionConfig = {
  slug: "carts",
  labels: {
    singular: "Cart",
    plural: "Carts"
  },
  admin: {
    group: "Commerce",
    useAsTitle: "session_key",
    defaultColumns: ["session_key", "status", "item_count", "subtotal_minor", "currency", "updatedAt"],
    description: "Server-owned anonymous cart sessions. Customer access is only through the source-native cart service, never direct Payload CRUD."
  },
  access: {
    create: canEditContent,
    read: canAccessAdmin,
    update: canEditContent,
    delete: canDeleteContent
  },
  fields: [
    {
      name: "session_key",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        readOnly: true
      }
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Converted", value: "converted" },
        { label: "Abandoned", value: "abandoned" }
      ]
    },
    {
      name: "currency",
      type: "select",
      required: true,
      defaultValue: "USD",
      options: [{ label: "USD", value: "USD" }]
    },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "line_key", type: "text", required: true },
        { name: "product", type: "relationship", relationTo: "products", required: true },
        { name: "product_slug_snapshot", type: "text", required: true },
        { name: "product_title_snapshot", type: "text", required: true },
        { name: "variant_key", type: "text" },
        { name: "variant_label_snapshot", type: "text" },
        { name: "sku_snapshot", type: "text" },
        { name: "quantity", type: "number", required: true, min: 1 },
        { name: "unit_price_minor", type: "number", required: true, min: 0 }
      ]
    },
    { name: "item_count", type: "number", required: true, defaultValue: 0, min: 0 },
    { name: "subtotal_minor", type: "number", required: true, defaultValue: 0, min: 0 },
    { name: "expires_at", type: "date" }
  ]
};
