import type { GlobalConfig } from "payload";

import { canDeleteContent } from "../payload/access";

export const SystemSettings: GlobalConfig = {
  slug: "system-settings",
  label: "System Settings",
  admin: {
    group: "System"
  },
  access: {
    read: () => true,
    update: canDeleteContent
  },
  fields: [
    {
      name: "brand",
      type: "group",
      label: "Brand",
      fields: [
        { name: "site_name", type: "text" },
        { name: "site_subtitle", type: "text" },
        { name: "brand_statement", type: "textarea" }
      ]
    },
    {
      name: "seo_defaults",
      type: "group",
      label: "SEO Defaults",
      fields: [
        { name: "default_seo_title", type: "text" },
        { name: "default_seo_description", type: "textarea" },
        { name: "default_og_image", type: "relationship", relationTo: "media" }
      ]
    },
    {
      name: "shop_bridge",
      type: "group",
      label: "Shop Bridge",
      fields: [
        { name: "shop_bridge_url", type: "text" },
        { name: "shop_bridge_label", type: "text" }
      ]
    }
  ]
};
