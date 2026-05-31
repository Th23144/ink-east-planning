import type { CollectionConfig } from "payload";

import { canAccessAdmin, canDeleteContent } from "../payload/access";
import { isAdmin } from "../payload/access/isAdmin";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email"
  },
  auth: true,
  access: {
    create: ({ req }) => !req.user || isAdmin(req.user),
    read: ({ req }) => Boolean(req.user && isAdmin(req.user)),
    update: ({ req }) => Boolean(req.user && isAdmin(req.user)),
    delete: canDeleteContent,
    admin: canAccessAdmin
  },
  fields: [
    { name: "name", type: "text" },
    {
      name: "role",
      type: "select",
      defaultValue: "admin",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" }
      ],
      admin: {
        description:
          "Level 1 prototype roles only. Reader, Patron, and Member accounts are intentionally not created."
      }
    },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Suspended", value: "suspended" }
      ]
    }
  ]
};
