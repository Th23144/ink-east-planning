import type { Field } from "payload";

type StatusFieldOptions = {
  type: "publication" | "active";
};

export const statusField = ({ type }: StatusFieldOptions): Field => {
  if (type === "active") {
    return {
      name: "status",
      type: "select",
      defaultValue: "active",
      admin: {
        description: "Active records can appear in public topic or author surfaces; hidden records stay out of public reads."
      },
      options: [
        { label: "Active", value: "active" },
        { label: "Hidden", value: "hidden" }
      ]
    };
  }

  return {
    name: "status",
    type: "select",
    defaultValue: "draft",
    admin: {
      description: "Only published records are available through the public reading layer. Draft, review, scheduled, and archived records stay private to the admin."
    },
    options: [
      { label: "Draft", value: "draft" },
      { label: "Review", value: "review" },
      { label: "Scheduled", value: "scheduled" },
      { label: "Published", value: "published" },
      { label: "Archived", value: "archived" }
    ]
  };
};
