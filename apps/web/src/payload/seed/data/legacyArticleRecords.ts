type SeedLegacyArticleRecord = {
  legacy_id: string;
  legacy_url: string;
  legacy_slug: string;
  legacy_title: string;
  legacy_body_raw: string;
  legacy_category: string;
  legacy_tags: string;
  has_builder_markup: boolean;
  content_quality: "high" | "medium" | "low" | "risky";
  migration_status: "pending" | "reviewed" | "cleaned" | "article_created" | "redirect_created";
  decision: "keep" | "rewrite" | "archive" | "discard";
  newArticleSlug?: string;
  redirectFromUrl?: string;
  editor_notes: string;
};

export const legacyArticleRecords: SeedLegacyArticleRecord[] = [
  {
    legacy_id: "legacy-sample-001",
    legacy_url: "https://legacy.example/why-old-texts-still-ask-modern-questions",
    legacy_slug: "why-old-texts-still-ask-modern-questions",
    legacy_title: "Why Old Texts Still Ask Modern Questions",
    legacy_body_raw:
      "Short placeholder summary for a legacy asset. This is not a copied legacy article body.",
    legacy_category: "Essays",
    legacy_tags: "old texts, modern questions",
    has_builder_markup: false,
    content_quality: "high",
    migration_status: "article_created",
    decision: "keep",
    newArticleSlug: "why-old-texts-still-ask-modern-questions",
    redirectFromUrl: "/old/why-old-texts-still-ask-modern-questions",
    editor_notes: "Seed record connected to the sample legacy_import article."
  },
  {
    legacy_id: "legacy-sample-002",
    legacy_url: "https://legacy.example/room-and-ritual-notes",
    legacy_slug: "room-and-ritual-notes",
    legacy_title: "Room and Ritual Notes",
    legacy_body_raw:
      "Short placeholder summary for evaluating whether this legacy asset should be rewritten.",
    legacy_category: "Interior Notes",
    legacy_tags: "rooms, ritual",
    has_builder_markup: true,
    content_quality: "medium",
    migration_status: "reviewed",
    decision: "rewrite",
    redirectFromUrl: "/old/room-and-ritual-notes",
    editor_notes: "Seed record for rewrite workflow validation only."
  },
  {
    legacy_id: "legacy-sample-003",
    legacy_url: "https://legacy.example/seasonal-reading-list",
    legacy_slug: "seasonal-reading-list",
    legacy_title: "Seasonal Reading List",
    legacy_body_raw:
      "Short placeholder summary for an archive candidate in the migration planning collection.",
    legacy_category: "Reading Lists",
    legacy_tags: "seasonal, list",
    has_builder_markup: false,
    content_quality: "low",
    migration_status: "redirect_created",
    decision: "archive",
    redirectFromUrl: "/old/seasonal-reading-list",
    editor_notes: "Seed record for archive and redirect planning validation."
  },
  {
    legacy_id: "legacy-sample-004",
    legacy_url: "https://legacy.example/outdated-announcement",
    legacy_slug: "outdated-announcement",
    legacy_title: "Outdated Announcement",
    legacy_body_raw:
      "Short placeholder summary for a discarded legacy asset. No old article content is imported.",
    legacy_category: "Announcements",
    legacy_tags: "outdated",
    has_builder_markup: true,
    content_quality: "risky",
    migration_status: "pending",
    decision: "discard",
    redirectFromUrl: "/old/outdated-announcement",
    editor_notes: "Seed record for discard decision validation."
  },
  {
    legacy_id: "legacy-sample-005",
    legacy_url: "https://legacy.example/cleaned-object-note",
    legacy_slug: "cleaned-object-note",
    legacy_title: "Cleaned Object Note",
    legacy_body_raw:
      "Short placeholder summary for a cleaned but unpublished migration planning record.",
    legacy_category: "Objects",
    legacy_tags: "objects, meaning",
    has_builder_markup: false,
    content_quality: "medium",
    migration_status: "cleaned",
    decision: "rewrite",
    editor_notes: "Seed record for cleaned migration_status validation."
  }
];
