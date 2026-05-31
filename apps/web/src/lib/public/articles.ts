import type { Where } from "payload";

import { getPayloadClient } from "../payload/getPayloadClient";
import { mapArticleDetail, mapArticleListItem } from "./mappers";
import type { PublicArticleDetail, PublicArticleListItem } from "./types";

type PublicArticleOptions = {
  limit?: number;
  topicSlug?: string;
  issueSlug?: string;
};

const publicArticleConditions: Where[] = [
  { status: { equals: "published" } },
  { visibility: { equals: "public" } }
];

const activeSlugWhere = (slug: string): Where => ({
  and: [{ slug: { equals: slug } }, { status: { equals: "active" } }]
});

const publicIssueSlugWhere = (slug: string): Where => ({
  and: [
    { slug: { equals: slug } },
    { status: { equals: "published" } },
    { visibility: { equals: "public" } }
  ]
});

const getRelatedId = async (collection: "topics" | "issues", slug: string) => {
  const payload = await getPayloadClient();
  const where = collection === "topics" ? activeSlugWhere(slug) : publicIssueSlugWhere(slug);
  const result = await payload.find({
    collection,
    where,
    limit: 1,
    depth: 0,
    overrideAccess: false
  });

  return result.docs[0]?.id;
};

export const getPublicArticles = async (
  options: PublicArticleOptions = {}
): Promise<PublicArticleListItem[]> => {
  const payload = await getPayloadClient();
  const and: Where[] = [...publicArticleConditions];

  if (options.topicSlug) {
    const topicId = await getRelatedId("topics", options.topicSlug);

    if (!topicId) {
      return [];
    }

    and.push({ topics: { in: [topicId] } });
  }

  if (options.issueSlug) {
    const issueId = await getRelatedId("issues", options.issueSlug);

    if (!issueId) {
      return [];
    }

    and.push({ issue: { equals: issueId } });
  }

  const result = await payload.find({
    collection: "articles",
    where: { and },
    limit: options.limit ?? 20,
    depth: 2,
    sort: "-published_at",
    overrideAccess: false
  });

  return result.docs.map(mapArticleListItem).filter((article): article is PublicArticleListItem => Boolean(article));
};

export const getPublicArticleBySlug = async (slug: string): Promise<PublicArticleDetail | null> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "articles",
    where: {
      and: [...publicArticleConditions, { slug: { equals: slug } }]
    },
    limit: 1,
    depth: 2,
    overrideAccess: false
  });

  const article = mapArticleDetail(result.docs[0]);
  return article ?? null;
};
