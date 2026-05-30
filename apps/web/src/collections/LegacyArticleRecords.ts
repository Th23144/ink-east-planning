import type { CollectionConfig } from "payload";

export const LegacyArticleRecords: CollectionConfig = {
  slug: "legacy-article-records",
  labels: {
    singular: "Legacy Article Record",
    plural: "Legacy Article Records"
  },
  admin: {
    group: "Migration",
    useAsTitle: "legacy_title"
  },
  fields: [
    { name: "legacy_id", type: "text" },
    { name: "legacy_url", type: "text" },
    { name: "legacy_slug", type: "text" },
    { name: "legacy_title", type: "text", required: true },
    { name: "legacy_body_raw", type: "textarea" },
    { name: "legacy_category", type: "text" },
    { name: "legacy_tags", type: "text" },
    { name: "has_builder_markup", type: "checkbox", defaultValue: false },
    {
      name: "content_quality",
      type: "select",
      options: [
        { label: "High", value: "high" },
        { label: "Medium", value: "medium" },
        { label: "Low", value: "low" },
        { label: "Risky", value: "risky" }
      ]
    },
    {
      name: "migration_status",
      type: "select",
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Imported", value: "imported" },
        { label: "Reviewed", value: "reviewed" },
        { label: "Cleaned", value: "cleaned" },
        { label: "Article created", value: "article_created" },
        { label: "Redirect created", value: "redirect_created" },
        { label: "Published", value: "published" },
        { label: "Redirected", value: "redirected" },
        { label: "Discarded", value: "discarded" }
      ]
    },
    {
      name: "decision",
      type: "select",
      defaultValue: "undecided",
      options: [
        { label: "Undecided", value: "undecided" },
        { label: "Keep", value: "keep" },
        { label: "Rewrite", value: "rewrite" },
        { label: "Archive", value: "archive" },
        { label: "Discard", value: "discard" }
      ]
    },
    { name: "new_article", type: "relationship", relationTo: "articles" },
    { name: "redirect_rule", type: "relationship", relationTo: "redirect-rules" },
    { name: "editor_notes", type: "textarea" }
  ]
};
