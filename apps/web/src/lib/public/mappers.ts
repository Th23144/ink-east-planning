import type {
  PublicArticleDetail,
  PublicArticleListItem,
  PublicAuthor,
  PublicEditorialCollectionArticle,
  PublicEditorialCollectionDetail,
  PublicEditorialCollectionListItem,
  PublicEditorialCollectionSummary,
  PublicIssueArticle,
  PublicIssueDetail,
  PublicIssueListItem,
  PublicIssueSummary,
  PublicSeo,
  PublicSystemSettings,
  PublicTopic
} from "./types";

type UnknownRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asString = (value: unknown): string | undefined => (typeof value === "string" ? value : undefined);
const isDefined = <T>(value: T | undefined): value is T => value !== undefined;
const asNumber = (value: unknown): number | undefined => (typeof value === "number" ? value : undefined);
const asBoolean = (value: unknown): boolean | undefined => (typeof value === "boolean" ? value : undefined);

const requiredString = (value: unknown, fallback = ""): string => asString(value) ?? String(value ?? fallback);

const mapSeo = (seo: unknown): PublicSeo | undefined => {
  if (!isRecord(seo)) {
    return undefined;
  }

  return {
    title: asString(seo.seo_title),
    description: asString(seo.seo_description),
    noindex: asBoolean(seo.noindex)
  };
};

const isPublicPublication = (doc: UnknownRecord): boolean =>
  doc.status === "published" && doc.visibility === "public";

const isActive = (doc: UnknownRecord): boolean => doc.status === "active";

export const mapAuthor = (author: unknown): PublicAuthor | undefined => {
  if (!isRecord(author) || !isActive(author)) {
    return undefined;
  }

  return {
    id: requiredString(author.id),
    name: requiredString(author.name),
    slug: requiredString(author.slug),
    bio: asString(author.bio),
    role_label: asString(author.role_label)
  };
};

export const mapTopic = (topic: unknown): PublicTopic | undefined => {
  if (!isRecord(topic) || !isActive(topic)) {
    return undefined;
  }

  const parent = isRecord(topic.parent) && isActive(topic.parent)
    ? {
        id: requiredString(topic.parent.id),
        name: requiredString(topic.parent.name),
        slug: requiredString(topic.parent.slug)
      }
    : undefined;

  return {
    id: requiredString(topic.id),
    name: requiredString(topic.name),
    slug: requiredString(topic.slug),
    description: asString(topic.description),
    symbol: asString(topic.symbol),
    sort_order: asNumber(topic.sort_order),
    parent,
    seo: mapSeo(topic.seo)
  };
};

export const mapIssueSummary = (issue: unknown): PublicIssueSummary | undefined => {
  if (!isRecord(issue) || !isPublicPublication(issue)) {
    return undefined;
  }

  return {
    id: requiredString(issue.id),
    number: asString(issue.number),
    title: requiredString(issue.title),
    slug: requiredString(issue.slug),
    subtitle: asString(issue.subtitle),
    theme: asString(issue.theme),
    cover_symbol: asString(issue.cover_symbol),
    published_at: asString(issue.published_at)
  };
};

export const mapEditorialCollectionSummary = (
  collection: unknown
): PublicEditorialCollectionSummary | undefined => {
  if (!isRecord(collection) || !isPublicPublication(collection)) {
    return undefined;
  }

  return {
    id: requiredString(collection.id),
    title: requiredString(collection.title),
    slug: requiredString(collection.slug),
    subtitle: asString(collection.subtitle),
    description: asString(collection.description)
  };
};

export const mapArticleListItem = (article: unknown): PublicArticleListItem | undefined => {
  if (!isRecord(article) || !isPublicPublication(article)) {
    return undefined;
  }

  const topics = Array.isArray(article.topics) ? article.topics.map(mapTopic).filter(isDefined) : [];
  const collections = Array.isArray(article.collections)
    ? article.collections.map(mapEditorialCollectionSummary).filter(isDefined)
    : [];

  return {
    id: requiredString(article.id),
    title: requiredString(article.title),
    slug: requiredString(article.slug),
    subtitle: asString(article.subtitle),
    deck: asString(article.deck),
    excerpt: asString(article.excerpt),
    published_at: asString(article.published_at),
    reading_time_minutes: asNumber(article.reading_time_minutes),
    author: mapAuthor(article.author),
    topics,
    issue: mapIssueSummary(article.issue),
    collections,
    seo: mapSeo(article.seo)
  };
};

export const mapArticleDetail = (article: unknown): PublicArticleDetail | undefined => {
  const item = mapArticleListItem(article);

  if (!item || !isRecord(article)) {
    return undefined;
  }

  return {
    ...item,
    body: asString(article.body),
    body_format: asString(article.body_format)
  };
};

export const mapIssueListItem = (issue: unknown): PublicIssueListItem | undefined => {
  const summary = mapIssueSummary(issue);

  if (!summary || !isRecord(issue)) {
    return undefined;
  }

  return {
    ...summary,
    editor_note: asString(issue.editor_note),
    featured_article: mapArticleListItem(issue.featured_article),
    seo: mapSeo(issue.seo)
  };
};

const mapIssueArticle = (entry: unknown): PublicIssueArticle | undefined => {
  if (!isRecord(entry)) {
    return undefined;
  }

  const article = mapArticleListItem(entry.article);

  if (!article) {
    return undefined;
  }

  return {
    article,
    label: asString(entry.label),
    note: asString(entry.note),
    sort_order: asNumber(entry.sort_order)
  };
};

export const mapIssueDetail = (issue: unknown): PublicIssueDetail | undefined => {
  const item = mapIssueListItem(issue);

  if (!item || !isRecord(issue)) {
    return undefined;
  }

  const ordered_articles = Array.isArray(issue.ordered_articles)
    ? issue.ordered_articles.map(mapIssueArticle).filter(isDefined)
    : [];

  return {
    ...item,
    ordered_articles
  };
};

export const mapEditorialCollectionListItem = (
  collection: unknown
): PublicEditorialCollectionListItem | undefined => {
  const summary = mapEditorialCollectionSummary(collection);

  if (!summary || !isRecord(collection)) {
    return undefined;
  }

  return {
    ...summary,
    sort_order: asNumber(collection.sort_order),
    seo: mapSeo(collection.seo)
  };
};

const mapEditorialCollectionArticle = (entry: unknown): PublicEditorialCollectionArticle | undefined => {
  if (!isRecord(entry)) {
    return undefined;
  }

  const article = mapArticleListItem(entry.article);

  if (!article) {
    return undefined;
  }

  return {
    article,
    note: asString(entry.note),
    sort_order: asNumber(entry.sort_order)
  };
};

export const mapEditorialCollectionDetail = (
  collection: unknown
): PublicEditorialCollectionDetail | undefined => {
  const item = mapEditorialCollectionListItem(collection);

  if (!item || !isRecord(collection)) {
    return undefined;
  }

  const articles = Array.isArray(collection.articles)
    ? collection.articles.map(mapEditorialCollectionArticle).filter(isDefined)
    : [];

  return {
    ...item,
    articles
  };
};

export const mapSystemSettings = (settings: unknown): PublicSystemSettings => {
  const record = isRecord(settings) ? settings : {};
  const brand = isRecord(record.brand) ? record.brand : {};
  const seoDefaults = isRecord(record.seo_defaults) ? record.seo_defaults : {};
  const shopBridge = isRecord(record.shop_bridge) ? record.shop_bridge : {};

  return {
    brand: {
      site_name: asString(brand.site_name),
      site_subtitle: asString(brand.site_subtitle),
      brand_statement: asString(brand.brand_statement)
    },
    seo_defaults: {
      default_seo_title: asString(seoDefaults.default_seo_title),
      default_seo_description: asString(seoDefaults.default_seo_description)
    },
    shop_bridge: {
      shop_bridge_url: asString(shopBridge.shop_bridge_url),
      shop_bridge_label: asString(shopBridge.shop_bridge_label)
    }
  };
};
