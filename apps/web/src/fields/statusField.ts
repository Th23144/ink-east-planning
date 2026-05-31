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
    options: [
      { label: "Draft", value: "draft" },
      { label: "Review", value: "review" },
      { label: "Scheduled", value: "scheduled" },
      { label: "Published", value: "published" },
      { label: "Archived", value: "archived" }
    ]
  };
};
