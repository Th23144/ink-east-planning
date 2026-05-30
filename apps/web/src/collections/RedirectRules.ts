import type { CollectionConfig } from "payload";

export const RedirectRules: CollectionConfig = {
  slug: "redirect-rules",
  labels: {
    singular: "Redirect Rule",
    plural: "Redirect Rules"
  },
  admin: {
    group: "Migration",
    useAsTitle: "from_url"
  },
  fields: [
    { name: "from_url", type: "text", required: true },
    { name: "to_url", type: "text" },
    {
      name: "status_code",
      type: "select",
      defaultValue: "301",
      options: [
        { label: "301", value: "301" },
        { label: "302", value: "302" },
        { label: "410", value: "410" }
      ]
    },
    { name: "reason", type: "textarea" },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Active", value: "active" },
        { label: "Disabled", value: "disabled" }
      ]
    },
    {
      name: "linked_legacy_article",
      type: "relationship",
      relationTo: "legacy-article-records"
    }
  ]
};
