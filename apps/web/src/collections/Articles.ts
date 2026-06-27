import type { CollectionConfig } from "payload";

import { bodyField, seoFields, slugField, statusField, visibilityField } from "../fields";
import { canDeleteContent, canEditContent, canReadPublished } from "../payload/access";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    group: "Editorial",
    useAsTitle: "title",
    defaultColumns: ["title", "status", "visibility", "published_at", "updatedAt"],
    listSearchableFields: ["title", "subtitle", "deck", "excerpt"]
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
    {
      name: "hero_image",
      type: "relationship",
      relationTo: "media",
      admin: {
        description: "Optional lead image for article detail and archive cards."
      }
    },
    {
      name: "hero_image_caption_override",
      type: "textarea",
      admin: {
        description: "Optional article-specific caption. Falls back to the media caption when empty."
      }
    },
    ...bodyField(),
    {
      name: "inline_images",
      type: "array",
      admin: {
        description: "Optional images displayed after the article body in the current Level 2 baseline."
      },
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo: "media",
          required: true
        },
        {
          name: "caption_override",
          type: "textarea",
          admin: {
            description: "Optional article-specific caption for this inline image."
          }
        },
        {
          name: "display_label",
          type: "text",
          admin: {
            description: "Optional label such as Fig. 1 or Studio note."
          }
        }
      ]
    },
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
