import type { Field } from "payload";

export const slugField = (): Field => ({
  name: "slug",
  type: "text",
  required: true,
  unique: true,
  admin: {
    description: "Stable URL slug for this content record."
  }
});
