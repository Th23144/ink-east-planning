import type { Field } from "payload";

export const visibilityField = (): Field => ({
  name: "visibility",
  type: "select",
  defaultValue: "public",
  options: [
    { label: "Public", value: "public" },
    { label: "Reader", value: "reader" },
    { label: "Patron", value: "patron" },
    { label: "Private", value: "private" },
    { label: "Editor only", value: "editor_only" }
  ]
});
