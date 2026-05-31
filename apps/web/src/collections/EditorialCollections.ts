import type { CollectionConfig } from "payload";

import { seoFields, slugField, statusField, visibilityField } from "../fields";
import { canDeleteContent, canEditContent, canReadPublished } from "../payload/access";

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
    statusField({ type: "publication" }),
    visibilityField(),
    { name: "sort_order", type: "number", defaultValue: 0 },
    seoFields
  ]
};
