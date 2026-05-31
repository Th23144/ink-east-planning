import type { Field } from "payload";

export const bodyField = (): Field[] => [
  { name: "body", type: "textarea" },
  {
    name: "body_format",
    type: "select",
    defaultValue: "plain_text",
    options: [
      { label: "Plain text", value: "plain_text" },
      { label: "Markdown", value: "markdown" },
      { label: "HTML", value: "html" }
    ]
  }
];
