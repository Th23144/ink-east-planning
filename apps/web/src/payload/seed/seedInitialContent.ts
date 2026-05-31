import fs from "fs";
import path from "path";
import { getPayload } from "payload";
import { fileURLToPath } from "url";

import {
  articles,
  authors,
  editorialCollections,
  issues,
  legacyArticleRecords,
  redirectRules,
  systemSettings
} from "./data";
import { topics } from "./data/topics";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const repoRoot = path.resolve(dirname, "../../../../..");

type PayloadClient = Awaited<ReturnType<typeof getPayload>>;
type Id = string | number;

type SeedMaps = {
  authors: Map<string, Id>;
  topics: Map<string, Id>;
  collections: Map<string, Id>;
  issues: Map<string, Id>;
  articles: Map<string, Id>;
  legacyRecords: Map<string, Id>;
  redirectRules: Map<string, Id>;
};

const loadEnvFile = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
};

const loadLocalEnv = () => {
  loadEnvFile(path.join(repoRoot, ".env.local"));
  loadEnvFile(path.join(repoRoot, ".env"));
  loadEnvFile(path.join(repoRoot, ".env.example"));
};

const requireEnv = (key: string) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
};

const findExisting = async (
  payload: PayloadClient,
  collection: string,
  field: string,
  value: string
) => {
  const result = await payload.find({
    collection: collection as never,
    where: {
      [field]: {
        equals: value
      }
    },
    limit: 1,
    depth: 0,
    overrideAccess: true
  });

  return result.docs[0];
};

const upsertByField = async <T extends Record<string, unknown>>(
  payload: PayloadClient,
  collection: string,
  field: string,
  value: string,
  data: T
) => {
  const existing = await findExisting(payload, collection, field, value);

  if (existing) {
    const updated = await payload.update({
      collection: collection as never,
      id: existing.id,
      data: data as never,
      depth: 0,
      overrideAccess: true
    });

    console.log(`Updated ${collection}: ${value}`);
    return updated;
  }

  const created = await payload.create({
    collection: collection as never,
    data: data as never,
    depth: 0,
    overrideAccess: true
  });

  console.log(`Created ${collection}: ${value}`);
  return created;
};

const idFor = (map: Map<string, Id>, key: string, label: string) => {
  const id = map.get(key);

  if (!id) {
    throw new Error(`Missing ${label} for seed key: ${key}`);
  }

  return id;
};

const withoutKeys = <T extends Record<string, unknown>>(data: T, keys: string[]) => {
  const next = { ...data };

  for (const key of keys) {
    delete next[key];
  }

  return next;
};

const seedAuthors = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const author of authors) {
    const doc = await upsertByField(payload, "authors", "slug", author.slug, { ...author });
    maps.authors.set(author.slug, doc.id);
  }
};

const seedTopics = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const topic of topics) {
    const doc = await upsertByField(payload, "topics", "slug", topic.slug, { ...topic });
    maps.topics.set(topic.slug, doc.id);
  }
};

const seedEditorialCollections = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const collection of editorialCollections) {
    const doc = await upsertByField(payload, "editorial-collections", "slug", collection.slug, {
      ...collection,
      articles: []
    });
    maps.collections.set(collection.slug, doc.id);
  }
};

const seedIssues = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const issue of issues) {
    const doc = await upsertByField(payload, "issues", "slug", issue.slug, {
      ...issue,
      ordered_articles: []
    });
    maps.issues.set(issue.slug, doc.id);
  }
};

const seedLegacyRecords = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const legacyRecord of legacyArticleRecords) {
    const data = withoutKeys(legacyRecord, ["newArticleSlug", "redirectFromUrl"]);
    const doc = await upsertByField(payload, "legacy-article-records", "legacy_id", legacyRecord.legacy_id, data);
    maps.legacyRecords.set(legacyRecord.legacy_id, doc.id);
  }
};

const seedArticles = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const article of articles) {
    const data = withoutKeys(article, [
      "authorSlug",
      "issueSlug",
      "collectionSlugs",
      "topicSlugs",
      "legacyId"
    ]);

    const doc = await upsertByField(payload, "articles", "slug", article.slug, {
      ...data,
      author: idFor(maps.authors, article.authorSlug, "author"),
      issue: idFor(maps.issues, article.issueSlug, "issue"),
      collections: article.collectionSlugs.map((slug) => idFor(maps.collections, slug, "collection")),
      topics: article.topicSlugs.map((slug) => idFor(maps.topics, slug, "topic")),
      legacy_record: article.legacyId ? idFor(maps.legacyRecords, article.legacyId, "legacy record") : undefined
    });

    maps.articles.set(article.slug, doc.id);
  }
};

const seedRedirectRules = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const redirectRule of redirectRules) {
    const data = withoutKeys(redirectRule, ["legacyId"]);
    const doc = await upsertByField(payload, "redirect-rules", "from_url", redirectRule.from_url, {
      ...data,
      linked_legacy_article: idFor(maps.legacyRecords, redirectRule.legacyId, "legacy record")
    });

    maps.redirectRules.set(redirectRule.from_url, doc.id);
  }
};

const updateLegacyRelationships = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const legacyRecord of legacyArticleRecords) {
    const id = idFor(maps.legacyRecords, legacyRecord.legacy_id, "legacy record");

    await payload.update({
      collection: "legacy-article-records" as never,
      id,
      data: {
        new_article: legacyRecord.newArticleSlug
          ? idFor(maps.articles, legacyRecord.newArticleSlug, "article")
          : undefined,
        redirect_rule: legacyRecord.redirectFromUrl
          ? idFor(maps.redirectRules, legacyRecord.redirectFromUrl, "redirect rule")
          : undefined
      } as never,
      depth: 0,
      overrideAccess: true
    });
  }

  console.log("Updated legacy article relationship backfills.");
};

const updateIssueRelationships = async (payload: PayloadClient, maps: SeedMaps) => {
  const issueId = idFor(maps.issues, "issue-001-wu-wei", "issue");
  const issueArticleSlugs = articles
    .filter((article) => article.issueSlug === "issue-001-wu-wei" && article.status === "published")
    .map((article) => article.slug);

  await payload.update({
    collection: "issues" as never,
    id: issueId,
    data: {
      featured_article: idFor(maps.articles, "the-art-of-doing-less", "article"),
      ordered_articles: issueArticleSlugs.map((slug, index) => ({
        article: idFor(maps.articles, slug, "article"),
        label: `Article ${index + 1}`,
        note: "Task 6 seed relationship backfill.",
        sort_order: (index + 1) * 10
      }))
    } as never,
    depth: 0,
    overrideAccess: true
  });

  console.log("Updated Issue 001 article relationships.");
};

const updateCollectionRelationships = async (payload: PayloadClient, maps: SeedMaps) => {
  for (const collection of editorialCollections) {
    const collectionArticleSlugs = articles
      .filter((article) => article.collectionSlugs.includes(collection.slug))
      .map((article) => article.slug);

    await payload.update({
      collection: "editorial-collections" as never,
      id: idFor(maps.collections, collection.slug, "collection"),
      data: {
        articles: collectionArticleSlugs.map((slug, index) => ({
          article: idFor(maps.articles, slug, "article"),
          note: "Task 6 seed relationship backfill.",
          sort_order: (index + 1) * 10
        }))
      } as never,
      depth: 0,
      overrideAccess: true
    });
  }

  console.log("Updated editorial collection article relationships.");
};

const updateSystemSettings = async (payload: PayloadClient) => {
  await payload.updateGlobal({
    slug: "system-settings" as never,
    data: systemSettings as never,
    depth: 0,
    overrideAccess: true
  });

  console.log("Updated system-settings global.");
};

export const seedInitialContent = async () => {
  loadLocalEnv();
  requireEnv("DATABASE_URI");
  requireEnv("PAYLOAD_SECRET");

  const { default: config } = await import("../../payload.config");
  const payload = await getPayload({ config });
  const maps: SeedMaps = {
    authors: new Map(),
    topics: new Map(),
    collections: new Map(),
    issues: new Map(),
    articles: new Map(),
    legacyRecords: new Map(),
    redirectRules: new Map()
  };

  console.log("Starting Level 1 Task 6 initial content seed...");

  await seedAuthors(payload, maps);
  await seedTopics(payload, maps);
  await seedEditorialCollections(payload, maps);
  await seedIssues(payload, maps);
  await seedLegacyRecords(payload, maps);
  await seedArticles(payload, maps);
  await seedRedirectRules(payload, maps);
  await updateLegacyRelationships(payload, maps);
  await updateIssueRelationships(payload, maps);
  await updateCollectionRelationships(payload, maps);
  await updateSystemSettings(payload);

  console.log("Level 1 Task 6 initial content seed complete.");
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedInitialContent()
    .then(() => process.exit(0))
    .catch((error: unknown) => {
      console.error("Level 1 Task 6 initial content seed failed.");
      console.error(error);
      process.exit(1);
    });
}
