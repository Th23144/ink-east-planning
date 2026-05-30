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

export const EditorialCollections: CollectionConfig = {
  slug: "editorial-collections",
  labels: {
    singular: "Collection",
    plural: "Collections"
  },
  admin: {
    group: "Editorial",
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "subtitle", type: "text" },
    { name: "description", type: "textarea" },
    { name: "cover_image", type: "relationship", relationTo: "media" },
    {
      name: "articles",
      type: "array",
      fields: [
        { name: "article", type: "relationship", relationTo: "articles" },
        { name: "note", type: "textarea" },
        { name: "sort_order", type: "number", defaultValue: 0 }
      ]
    },
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
    { name: "sort_order", type: "number", defaultValue: 0 },
    seoFields
  ]
};
