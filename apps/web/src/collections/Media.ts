import type { CollectionConfig } from "payload";

import { canDeleteContent, canEditContent } from "../payload/access";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Editorial"
  },
  access: {
    create: canEditContent,
    read: () => true,
    update: canEditContent,
    delete: canDeleteContent
  },
  upload: true,
  fields: [
    { name: "alt", type: "text", required: true },
    { name: "caption", type: "textarea" },
    { name: "credit", type: "text" },
    { name: "usage_rights", type: "textarea" }
  ]
};
