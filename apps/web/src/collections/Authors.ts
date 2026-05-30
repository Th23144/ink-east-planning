import type { CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    group: "Editorial",
    useAsTitle: "name"
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "bio", type: "textarea" },
    { name: "avatar", type: "relationship", relationTo: "media" },
    { name: "role_label", type: "text" },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Hidden", value: "hidden" }
      ]
    }
  ]
};
