import type { CollectionConfig, Field } from "payload";

const seoFields: Field = {
  name: "seo",
  type: "group",
  fields: [
    { name: "seo_title", type: "text" },
    { name: "seo_description", type: "textarea" },
    { name: "canonical_url", type: "text" },
    { name: "og_title", type: "text" },
    { name: "og_description", type: "textarea" },
    { name: "og_image", type: "relationship", relationTo: "media" },
    { name: "noindex", type: "checkbox", defaultValue: false }
  ]
};

export const Topics: CollectionConfig = {
  slug: "topics",
  admin: {
    group: "Editorial",
    useAsTitle: "name"
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "description", type: "textarea" },
    { name: "symbol", type: "text" },
    { name: "parent", type: "relationship", relationTo: "topics" },
    { name: "sort_order", type: "number", defaultValue: 0 },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Hidden", value: "hidden" }
      ]
    },
    seoFields
  ]
};
