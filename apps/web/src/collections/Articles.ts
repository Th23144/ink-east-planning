import type { CollectionConfig } from "payload";

import { bodyField, seoFields, slugField, statusField, visibilityField } from "../fields";
import { canDeleteContent, canEditContent, canReadPublished } from "../payload/access";

export const Articles: CollectionConfig = {
  slug: "articles",
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
    { name: "title", type: "text", required: true },
    slugField(),
    { name: "subtitle", type: "text" },
    { name: "deck", type: "textarea" },
    { name: "excerpt", type: "textarea" },
    ...bodyField(),
    { name: "author", type: "relationship", relationTo: "authors" },
    { name: "issue", type: "relationship", relationTo: "issues" },
    {
      name: "collections",
      type: "relationship",
      relationTo: "editorial-collections",
      hasMany: true
    },
    { name: "topics", type: "relationship", relationTo: "topics", hasMany: true },
    visibilityField(),
    { name: "is_vip", type: "checkbox", defaultValue: false },
    { name: "teaser", type: "textarea" },
    statusField({ type: "publication" }),
    {
      name: "source_type",
      type: "select",
      defaultValue: "original",
      options: [
        { label: "Original", value: "original" },
        { label: "Legacy import", value: "legacy_import" },
        { label: "Letter response", value: "letter_response" },
        { label: "Custom reading output", value: "custom_reading_output" }
      ]
    },
    { name: "published_at", type: "date" },
    seoFields,
    { name: "legacy_record", type: "relationship", relationTo: "legacy-article-records" },
    { name: "reading_time_minutes", type: "number", min: 0 }
  ]
};
