type SeedArticle = {
  title: string;
  slug: string;
  subtitle: string;
  deck: string;
  excerpt: string;
  body: string;
  body_format: "plain_text" | "markdown" | "html";
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
    subtitle: "A note on Wu Wei and practical restraint",
    deck: "Issue 001 opens with a small question: what changes when effort stops trying to announce itself?",
    excerpt: "A quiet seed essay about restraint, attention, and the usefulness of leaving room around an action.",
    body:
      "## The pressure to act\n\nDoing less is not the same as caring less. In the older language around Wu Wei, the point is not absence or escape. It is the ability to notice when an action has become heavier than the situation requires.\n\n> A quiet action does not need to prove that it is action.\n\n## A room as teacher\n\nA room can teach this before a sentence can. Move one object too many and the room begins to explain itself too loudly. Remove one object with care and the remaining things become easier to see. The same is true for speech, work, and desire.\n\n- Notice what is already carrying the room.\n- Remove the gesture that only repeats itself.\n- Leave enough space for attention to return.\n\n---\n\nThis Level 2 seed essay is still controlled content. It now gives the article renderer headings, quotation, a list, and a divider without introducing raw HTML.",
    body_format: "markdown",
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
      seo_description: "An Ink & East seed essay on Wu Wei, practical restraint, and quiet attention."
    }
  },
  {
    title: "A Room That Lets You Return",
    slug: "a-room-that-lets-you-return",
    subtitle: "Space, ritual, and the feeling of coming back",
    deck: "A small room can become a daily argument for return, if it does not demand too much from the person entering it.",
    excerpt: "A reflective seed essay about rooms, rituals, and the way space can make attention easier.",
    body:
      "## The room that receives you\n\nSome rooms ask to be performed in. Others allow a person to return quietly. The second kind is harder to describe because it is built less from decoration than from permission.\n\nA chair near light, a surface without too much noise, and a path that does not catch the body at every turn can change the emotional weather of a day. Ritual does not have to be theatrical. Sometimes it is only the repeated proof that a place can receive you.\n\n1. Let the entrance stay simple.\n2. Keep one surface clear.\n3. Give the eye somewhere gentle to rest.\n\nThis article keeps the connection between space and ritual visible for the prototype while staying neutral enough for future visual design work.",
    body_format: "markdown",
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
      seo_description: "An Ink & East seed essay on rooms, ritual, and the feeling of return."
    }
  },
  {
    title: "Notes on Quiet Attention",
    slug: "notes-on-quiet-attention",
    subtitle: "Attention as a small daily practice",
    deck: "Attention is not only a mental skill; it is also a relationship with pace, mood, and what we allow to remain unfinished.",
    excerpt: "A short seed note about attention, emotional pacing, and the discipline of not rushing to conclude.",
    body:
      "Quiet attention begins before interpretation. It is the pause in which a thing is allowed to appear without immediately being used.\n\nThis kind of attention does not reject feeling. It gives feeling a slower room. A mood can be noticed without being turned into a final answer. A thought can arrive without closing the conversation. The practice is modest, but modest practices are often the ones that survive ordinary days.\n\nFor Level 2, this essay keeps a plain text body in the seed data so the renderer continues to support both plain text and markdown articles.",
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
      seo_description: "An Ink & East seed note on attention, mood, and emotional pacing."
    }
  },
  {
    title: "Objects That Hold a Room Together",
    slug: "objects-that-hold-a-room-together",
    subtitle: "Placement, care, and the meanings small things carry",
    deck: "The objects that matter in a room are not always the most expensive ones. Often they are the ones that help the room remember what it is for.",
    excerpt: "A seed essay about objects, care, placement, and the quiet meanings a room can hold.",
    body:
      "An object can be useful, decorative, sentimental, or all three at once. What changes a room is not only the object itself but the attention around it: where it rests, what it interrupts, and what kind of daily gesture it invites.\n\nA bowl by the door, a stone on a desk, a folded cloth on a shelf: each can become a small anchor. Objects have meaning, but meaning needs space to breathe.\n\nThis seed article keeps the Objects & Meaning pathway available for relationship testing and later reading-design work.",
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
      seo_description: "An Ink & East seed essay on objects, care, placement, and meaning."
    }
  },
  {
    title: "Why Old Texts Still Ask Modern Questions",
    slug: "why-old-texts-still-ask-modern-questions",
    subtitle: "A source-native placeholder for legacy relationship validation",
    deck: "Older writing does not become useful by being treated as decoration. It becomes useful when it is allowed to ask better questions of the present.",
    excerpt: "A controlled seed record connecting legacy planning to a new source-native article without copying old material.",
    body:
      "An old text is not a shortcut to authority. It is a conversation partner placed beside the present. If the reading is honest, the old sentence does not simply confirm what we already wanted to say. It slows the question down.\n\nThis article is marked as a legacy import source type for testing only. The body is newly written seed copy and does not reproduce any legacy article. Its purpose is to verify that future migration records, redirects, and new article relationships can coexist safely.\n\nFor now, it anchors the Old Texts topic and the Reading the Old Texts collection inside the Level 1 prototype.",
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
      seo_description: "An Ink & East seed article for old texts, modern questions, and legacy relationship validation."
    }
  },
  {
    title: "Draft: A Private Editorial Note",
    slug: "draft-a-private-editorial-note",
    subtitle: "Private prototype content for access-rule checks",
    deck: "A draft/private sample that should never behave like public published content.",
    excerpt: "A private draft used to verify admin/editor visibility and public access rules.",
    body:
      "This private draft is seed-only content for access-rule validation. It is intentionally not a public article and should remain unavailable through public reads.",
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
