export const redirectRules = [
  {
    from_url: "/old/why-old-texts-still-ask-modern-questions",
    to_url: "/articles/why-old-texts-still-ask-modern-questions",
    status_code: "301",
    reason: "Prototype permanent redirect record for a kept legacy asset. No middleware is implemented in Task 6.",
    status: "draft",
    legacyId: "legacy-sample-001"
  },
  {
    from_url: "/old/room-and-ritual-notes",
    to_url: "/articles/a-room-that-lets-you-return",
    status_code: "302",
    reason: "Prototype temporary redirect record while a rewrite decision is evaluated.",
    status: "draft",
    legacyId: "legacy-sample-002"
  },
  {
    from_url: "/old/seasonal-reading-list",
    to_url: "/collections/reading-the-old-texts",
    status_code: "301",
    reason: "Prototype archive redirect record for migration planning data only.",
    status: "active",
    legacyId: "legacy-sample-003"
  },
  {
    from_url: "/old/outdated-announcement",
    to_url: "",
    status_code: "410",
    reason: "Prototype gone record for a discarded legacy asset. No redirect middleware is created.",
    status: "draft",
    legacyId: "legacy-sample-004"
  }
] as const;
