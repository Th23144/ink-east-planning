import type { CollectionConfig } from "payload";

import { seoFields, slugField, statusField, visibilityField } from "../fields";
import { canDeleteContent, canEditContent, canReadPublished } from "../payload/access";

export const Issues: CollectionConfig = {
  slug: "issues",
  admin: {
    group: "Editorial",
    useAsTitle: "title"
  },
  access: {
    create: canEditContent,
    read: canReadPublished,
    update: canEditContent,
    delete: canDeleteContent
  },
  fields: [
    { name: "number", type: "text", required: true, unique: true },
    slugField(),
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "text" },
    { name: "theme", type: "text" },
    { name: "editor_note", type: "textarea" },
    { name: "cover_image", type: "relationship", relationTo: "media" },
    { name: "cover_symbol", type: "text" },
    { name: "featured_article", type: "relationship", relationTo: "articles" },
    {
      name: "ordered_articles",
      type: "array",
      fields: [
        { name: "article", type: "relationship", relationTo: "articles" },
        { name: "label", type: "text" },
        { name: "note", type: "textarea" },
        { name: "sort_order", type: "number", defaultValue: 0 }
      ]
    },
    statusField({ type: "publication" }),
    visibilityField(),
    { name: "published_at", type: "date" },
    seoFields
  ]
};
