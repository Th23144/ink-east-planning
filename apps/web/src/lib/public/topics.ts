import { getPayloadClient } from "../payload/getPayloadClient";
import { mapTopic } from "./mappers";
import type { PublicTopic } from "./types";

const activeTopicWhere = { status: { equals: "active" } } as const;

export const getPublicTopics = async (): Promise<PublicTopic[]> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "topics",
    where: activeTopicWhere,
    limit: 100,
    depth: 1,
    sort: "sort_order",
    overrideAccess: false
  });

  return result.docs.map(mapTopic).filter((topic): topic is PublicTopic => Boolean(topic));
};

export const getPublicTopicBySlug = async (slug: string): Promise<PublicTopic | null> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "topics",
    where: {
      and: [{ slug: { equals: slug } }, activeTopicWhere]
    },
    limit: 1,
    depth: 1,
    overrideAccess: false
  });

  const topic = mapTopic(result.docs[0]);
  return topic ?? null;
};
