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

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    group: "Editorial",
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "subtitle", type: "text" },
    { name: "deck", type: "textarea" },
    { name: "excerpt", type: "textarea" },
    { name: "body", type: "textarea" },
    {
      name: "body_format",
      type: "select",
      defaultValue: "plain_text",
      options: [
        { label: "Plain text", value: "plain_text" },
        { label: "Markdown", value: "markdown" },
        { label: "HTML", value: "html" }
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
    {
      name: "visibility",
      type: "select",
      defaultValue: "public",
      options: [
        { label: "Public", value: "public" },
        { label: "Reader", value: "reader" },
        { label: "Patron", value: "patron" },
        { label: "Private", value: "private" },
        { label: "Editor only", value: "editor_only" }
      ]
    },
    { name: "is_vip", type: "checkbox", defaultValue: false },
    { name: "teaser", type: "textarea" },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Review", value: "review" },
        { label: "Scheduled", value: "scheduled" },
        { label: "Published", value: "published" },
        { label: "Archived", value: "archived" }
      ]
    },
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
