import type { CollectionConfig } from "payload";

import { slugField, statusField } from "../fields";
import { canAccessAdmin, canDeleteContent, canEditContent } from "../payload/access";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    group: "Editorial",
    useAsTitle: "name",
    defaultColumns: ["name", "status", "role_label", "updatedAt"],
    listSearchableFields: ["name", "bio", "role_label"]
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
    { name: "bio", type: "textarea" },
    { name: "avatar", type: "relationship", relationTo: "media" },
    { name: "role_label", type: "text" },
    statusField({ type: "active" })
  ]
};
