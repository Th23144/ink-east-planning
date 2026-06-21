import type { CollectionConfig } from "payload";

import { seoFields, slugField, statusField } from "../fields";
import { canAccessAdmin, canDeleteContent, canEditContent } from "../payload/access";

export const Topics: CollectionConfig = {
  slug: "topics",
  admin: {
    group: "Editorial",
    useAsTitle: "name",
    defaultColumns: ["name", "status", "sort_order", "updatedAt"],
    listSearchableFields: ["name", "description", "symbol"]
  },
  access: {
    create: canEditContent,
    read: (args) => (canAccessAdmin(args) ? true : { status: { equals: "active" } }),
    update: canEditContent,
    delete: canDeleteContent
  },
  fields: [
    { name: "name", type: "text", required: true },
    slugField(),
    { name: "description", type: "textarea" },
    { name: "symbol", type: "text" },
    { name: "parent", type: "relationship", relationTo: "topics" },
    { name: "sort_order", type: "number", defaultValue: 0 },
    statusField({ type: "active" }),
    seoFields
  ]
};
