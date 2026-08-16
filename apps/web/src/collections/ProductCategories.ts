import type { CollectionConfig } from "payload";

import { seoFields, slugField, statusField, visibilityField } from "../fields";
import { canDeleteContent, canEditContent } from "../payload/access";
import { canReadActiveCommerce } from "../payload/access/canReadActiveCommerce";

export const ProductCategories: CollectionConfig = {
  slug: "product-categories",
  labels: {
    singular: "Product Category",
    plural: "Product Categories"
  },
  admin: {
    group: "Commerce",
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "status", "visibility", "sort_order", "updatedAt"],
    listSearchableFields: ["name", "description"]
  },
  access: {
    create: canEditContent,
    read: canReadActiveCommerce,
    update: canEditContent,
    delete: canDeleteContent
  },
  fields: [
    { name: "name", type: "text", required: true },
    slugField(),
    { name: "description", type: "textarea" },
    { name: "sort_order", type: "number", defaultValue: 100, min: 0 },
    statusField({ type: "active" }),
    visibilityField(),
    seoFields
  ]
};
