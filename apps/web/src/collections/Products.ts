import type { CollectionConfig } from "payload";

import { seoFields, slugField, visibilityField } from "../fields";
import { canDeleteContent, canEditContent } from "../payload/access";
import { canReadActiveCommerce } from "../payload/access/canReadActiveCommerce";

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "Product",
    plural: "Products"
  },
  admin: {
    group: "Commerce",
    useAsTitle: "title",
    defaultColumns: ["title", "sku", "status", "visibility", "base_price_minor", "featured", "updatedAt"],
    listSearchableFields: ["title", "subtitle", "sku", "maker", "origin", "material"]
  },
  access: {
    create: canEditContent,
    read: canReadActiveCommerce,
    update: canEditContent,
    delete: canDeleteContent
  },
  fields: [
    { name: "title", type: "text", required: true },
    slugField(),
    { name: "subtitle", type: "text" },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Active", value: "active" },
        { label: "Archived", value: "archived" }
      ],
      admin: {
        description: "Only Active + Public products can be purchased from the source-native shop."
      }
    },
    visibilityField(),
    {
      name: "product_type",
      type: "select",
      required: true,
      defaultValue: "simple",
      options: [
        { label: "Simple", value: "simple" },
        { label: "Variant", value: "variant" }
      ]
    },
    {
      name: "currency",
      type: "select",
      required: true,
      defaultValue: "USD",
      options: [{ label: "USD", value: "USD" }],
      admin: {
        description: "Batch A deliberately locks the first transaction currency to USD."
      }
    },
    {
      name: "base_price_minor",
      label: "Base price (minor units)",
      type: "number",
      required: true,
      min: 0,
      admin: {
        description: "Store money as integer minor units. Example: 48000 = $480.00. For variant products, use the lowest public variant price here for archive sorting."
      }
    },
    {
      name: "compare_at_price_minor",
      label: "Compare-at price (minor units)",
      type: "number",
      min: 0
    },
    { name: "sku", type: "text", unique: true },
    {
      name: "inventory_policy",
      type: "select",
      required: true,
      defaultValue: "track",
      options: [
        { label: "Track stock", value: "track" },
        { label: "Do not track stock", value: "untracked" }
      ]
    },
    {
      name: "stock_quantity",
      type: "number",
      min: 0,
      defaultValue: 0,
      admin: {
        description: "Used by simple products. Variant products use the stock value on each enabled variant."
      }
    },
    {
      name: "variants",
      type: "array",
      admin: {
        condition: (_, siblingData) => siblingData?.product_type === "variant",
        description: "Variant keys are source contracts. Do not recycle a key for a different option after orders exist."
      },
      fields: [
        { name: "key", type: "text", required: true },
        { name: "label", type: "text", required: true },
        { name: "sku", type: "text", required: true },
        { name: "price_minor", type: "number", required: true, min: 0 },
        { name: "stock_quantity", type: "number", required: true, min: 0, defaultValue: 0 },
        { name: "enabled", type: "checkbox", defaultValue: true }
      ]
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "product-categories",
      hasMany: true
    },
    {
      name: "card_image",
      type: "relationship",
      relationTo: "media",
      admin: {
        description: "Optional real product image. Batch A falls back to a V0 artwork swatch when absent."
      }
    },
    {
      name: "gallery",
      type: "relationship",
      relationTo: "media",
      hasMany: true
    },
    {
      name: "artwork_tone",
      type: "select",
      defaultValue: "sand",
      options: [
        { label: "Sand", value: "sand" },
        { label: "Bluestone", value: "bluestone" },
        { label: "Terracotta", value: "terracotta" },
        { label: "Linen", value: "linen" },
        { label: "Oak", value: "oak" },
        { label: "Lamp", value: "lamp" },
        { label: "Graphite", value: "graphite" }
      ],
      admin: {
        description: "Provisional V0 fallback artwork only. It is not a permanent product-photo system."
      }
    },
    {
      name: "badge",
      type: "select",
      defaultValue: "none",
      options: [
        { label: "None", value: "none" },
        { label: "New", value: "new" },
        { label: "Editor's Pick", value: "editors_pick" },
        { label: "One of one", value: "one_of_one" },
        { label: "Last one", value: "last_one" }
      ]
    },
    { name: "short_description", type: "textarea" },
    { name: "place_note", type: "textarea" },
    { name: "maker", type: "text" },
    { name: "origin", type: "text" },
    { name: "material", type: "text" },
    { name: "dimensions", type: "text" },
    {
      name: "attributes",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true }
      ]
    },
    {
      name: "editorial_body",
      type: "textarea",
      admin: {
        description: "Source-native equivalent of the current product editorial body / The Piece baseline."
      }
    },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "sort_order", type: "number", defaultValue: 100, min: 0 },
    {
      name: "legacy_wp_product_id",
      type: "number",
      min: 1,
      unique: true,
      admin: {
        description: "Optional WooCommerce product ID retained for migration/audit mapping."
      }
    },
    {
      name: "legacy_path",
      type: "text",
      admin: {
        description: "Optional historical product path used later for migration/redirect planning."
      }
    },
    seoFields
  ]
};
