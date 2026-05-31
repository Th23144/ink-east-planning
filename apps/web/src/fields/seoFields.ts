import type { Field } from "payload";

export const seoFields: Field = {
  name: "seo",
  type: "group",
  label: "SEO",
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
