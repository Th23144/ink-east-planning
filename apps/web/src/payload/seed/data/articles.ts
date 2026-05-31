type SeedArticle = {
  title: string;
  slug: string;
  subtitle: string;
  deck: string;
  excerpt: string;
  body: string;
  body_format: "plain_text";
  authorSlug: string;
  issueSlug: string;
  collectionSlugs: string[];
  topicSlugs: string[];
  status: "published" | "draft";
  visibility: "public" | "private";
  source_type: "original" | "legacy_import";
  legacyId?: string;
  published_at: string;
  reading_time_minutes: number;
  seo: {
    seo_title: string;
    seo_description: string;
    noindex?: boolean;
  };
};

export const articles: SeedArticle[] = [
  {
    title: "The Art of Doing Less",
    slug: "the-art-of-doing-less",
    subtitle: "A prototype note on Wu Wei and practical restraint",
    deck: "Sample editorial content for Issue 001 relationship testing.",
    excerpt: "A short seed essay about doing less with more attention.",
    body:
      "This prototype article sketches a quiet reading of Wu Wei for the Level 1 seed. It is intentionally brief and exists only to verify Payload relationships.",
    body_format: "plain_text",
    authorSlug: "ink-east-editorial-desk",
    issueSlug: "issue-001-wu-wei",
    collectionSlugs: ["reading-the-old-texts", "quiet-modern-questions"],
    topicSlugs: ["eastern-thought", "modern-questions"],
    status: "published",
    visibility: "public",
    source_type: "original",
    published_at: "2026-01-16T09:00:00.000Z",
    reading_time_minutes: 4,
    seo: {
      seo_title: "The Art of Doing Less | Ink & East",
      seo_description: "Prototype article for Issue 001 and topic relationship testing."
    }
  },
  {
    title: "A Room That Lets You Return",
    slug: "a-room-that-lets-you-return",
    subtitle: "Space, ritual, and the feeling of coming back",
    deck: "A short sample piece for testing topic and collection references.",
    excerpt: "A prototype article about rooms that make attention easier.",
    body:
      "This seed article uses a room as a small test case for ritual, return, and editorial grouping. It is not production copy.",
    body_format: "plain_text",
    authorSlug: "guest-reader",
    issueSlug: "issue-001-wu-wei",
    collectionSlugs: ["quiet-modern-questions"],
    topicSlugs: ["space-and-ritual", "quiet-stories"],
    status: "published",
    visibility: "public",
    source_type: "original",
    published_at: "2026-01-17T09:00:00.000Z",
    reading_time_minutes: 3,
    seo: {
      seo_title: "A Room That Lets You Return | Ink & East",
      seo_description: "Prototype article for space and ritual relationship testing."
    }
  },
  {
    title: "Notes on Quiet Attention",
    slug: "notes-on-quiet-attention",
    subtitle: "Attention as a small daily practice",
    deck: "A sample essay for Mind & Emotion and Quiet Stories topics.",
    excerpt: "A brief seed note about attention and emotional pacing.",
    body:
      "Quiet attention here is only a prototype theme. The text is short by design so the seed verifies fields without becoming a formal article.",
    body_format: "plain_text",
    authorSlug: "ink-east-editorial-desk",
    issueSlug: "issue-001-wu-wei",
    collectionSlugs: ["quiet-modern-questions"],
    topicSlugs: ["mind-and-emotion", "quiet-stories"],
    status: "published",
    visibility: "public",
    source_type: "original",
    published_at: "2026-01-18T09:00:00.000Z",
    reading_time_minutes: 3,
    seo: {
      seo_title: "Notes on Quiet Attention | Ink & East",
      seo_description: "Prototype article for attention and public access testing."
    }
  },
  {
    title: "Objects That Hold a Room Together",
    slug: "objects-that-hold-a-room-together",
    subtitle: "A sample note on placement and meaning",
    deck: "A short relationship test for Objects & Meaning.",
    excerpt: "A prototype article about objects, rooms, and editorial context.",
    body:
      "This seed text uses a few imagined objects to test the Objects & Meaning topic and collection relationships in Payload.",
    body_format: "plain_text",
    authorSlug: "guest-reader",
    issueSlug: "issue-001-wu-wei",
    collectionSlugs: ["quiet-modern-questions"],
    topicSlugs: ["objects-and-meaning", "space-and-ritual"],
    status: "published",
    visibility: "public",
    source_type: "original",
    published_at: "2026-01-19T09:00:00.000Z",
    reading_time_minutes: 3,
    seo: {
      seo_title: "Objects That Hold a Room Together | Ink & East",
      seo_description: "Prototype article for object and room topic testing."
    }
  },
  {
    title: "Why Old Texts Still Ask Modern Questions",
    slug: "why-old-texts-still-ask-modern-questions",
    subtitle: "A legacy-import placeholder for source-type validation",
    deck: "A controlled legacy_import sample that does not copy an old article.",
    excerpt: "A short seed record connecting legacy migration planning to a new article.",
    body:
      "This is a newly written placeholder for testing legacy_import relationships. It does not import or reproduce any legacy article body.",
    body_format: "plain_text",
    authorSlug: "ink-east-editorial-desk",
    issueSlug: "issue-001-wu-wei",
    collectionSlugs: ["reading-the-old-texts"],
    topicSlugs: ["old-texts", "modern-questions"],
    status: "published",
    visibility: "public",
    source_type: "legacy_import",
    legacyId: "legacy-sample-001",
    published_at: "2026-01-20T09:00:00.000Z",
    reading_time_minutes: 4,
    seo: {
      seo_title: "Why Old Texts Still Ask Modern Questions | Ink & East",
      seo_description: "Prototype legacy import article for migration relationship testing."
    }
  },
  {
    title: "Draft: A Private Editorial Note",
    slug: "draft-a-private-editorial-note",
    subtitle: "Private prototype content for access-rule checks",
    deck: "A draft/private sample that should not behave like public published content.",
    excerpt: "A private draft used to verify admin/editor visibility and public access rules.",
    body:
      "This private draft is seed-only content for access-rule validation. It is intentionally not a public article.",
    body_format: "plain_text",
    authorSlug: "ink-east-editorial-desk",
    issueSlug: "issue-001-wu-wei",
    collectionSlugs: [],
    topicSlugs: ["mind-and-emotion"],
    status: "draft",
    visibility: "private",
    source_type: "original",
    published_at: "2026-01-21T09:00:00.000Z",
    reading_time_minutes: 2,
    seo: {
      seo_title: "Draft Private Editorial Note | Ink & East",
      seo_description: "Private prototype article for access-rule checks.",
      noindex: true
    }
  }
];
