import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Editorial"
  },
  upload: true,
  fields: [
    { name: "alt", type: "text", required: true },
    { name: "caption", type: "textarea" },
    { name: "credit", type: "text" },
    { name: "usage_rights", type: "textarea" }
  ]
};
