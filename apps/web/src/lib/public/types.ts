export type PublicSeo = {
  title?: string;
  description?: string;
  noindex?: boolean;
};

export type PublicAuthor = {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  role_label?: string;
};

export type PublicTopic = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  symbol?: string;
  sort_order?: number;
  parent?: Pick<PublicTopic, "id" | "name" | "slug">;
  seo?: PublicSeo;
};

export type PublicIssueSummary = {
  id: string;
  number?: string;
  title: string;
  slug: string;
  subtitle?: string;
  theme?: string;
  cover_symbol?: string;
  published_at?: string;
};

export type PublicEditorialCollectionSummary = {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
};

export type PublicArticleListItem = {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  deck?: string;
  excerpt?: string;
  published_at?: string;
  reading_time_minutes?: number;
  author?: PublicAuthor;
  topics: PublicTopic[];
  issue?: PublicIssueSummary;
  collections: PublicEditorialCollectionSummary[];
  seo?: PublicSeo;
};

export type PublicArticleDetail = PublicArticleListItem & {
  body?: string;
  body_format?: string;
};

export type PublicIssueListItem = PublicIssueSummary & {
  editor_note?: string;
  featured_article?: PublicArticleListItem;
  seo?: PublicSeo;
};

export type PublicIssueArticle = {
  article: PublicArticleListItem;
  label?: string;
  note?: string;
  sort_order?: number;
};

export type PublicIssueDetail = PublicIssueListItem & {
  ordered_articles: PublicIssueArticle[];
};

export type PublicEditorialCollectionListItem = PublicEditorialCollectionSummary & {
  sort_order?: number;
  seo?: PublicSeo;
};

export type PublicEditorialCollectionArticle = {
  article: PublicArticleListItem;
  note?: string;
  sort_order?: number;
};

export type PublicEditorialCollectionDetail = PublicEditorialCollectionListItem & {
  articles: PublicEditorialCollectionArticle[];
};

export type PublicSystemSettings = {
  brand: {
    site_name?: string;
    site_subtitle?: string;
    brand_statement?: string;
  };
  seo_defaults: {
    default_seo_title?: string;
    default_seo_description?: string;
  };
  shop_bridge: {
    shop_bridge_url?: string;
    shop_bridge_label?: string;
  };
};
