import type { Field } from "payload";

export const visibilityField = (): Field => ({
  name: "visibility",
  type: "select",
  defaultValue: "public",
  admin: {
    description: "Only public records are available through the Level 1 public reading layer. Reader, patron, private, and editor-only records stay out of public reads until those systems exist."
  },
  options: [
    { label: "Public", value: "public" },
    { label: "Reader", value: "reader" },
    { label: "Patron", value: "patron" },
    { label: "Private", value: "private" },
    { label: "Editor only", value: "editor_only" }
  ]
});
