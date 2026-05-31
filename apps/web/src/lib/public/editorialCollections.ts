import type { Where } from "payload";

import { getPayloadClient } from "../payload/getPayloadClient";
import { mapEditorialCollectionDetail, mapEditorialCollectionListItem } from "./mappers";
import type {
  PublicEditorialCollectionDetail,
  PublicEditorialCollectionListItem
} from "./types";

type PublicEditorialCollectionOptions = {
  limit?: number;
};

const publicPublicationConditions: Where[] = [
  { status: { equals: "published" } },
  { visibility: { equals: "public" } }
];

const publicCollectionWhere: Where = {
  and: publicPublicationConditions
};

export const getPublicEditorialCollections = async (
  options: PublicEditorialCollectionOptions = {}
): Promise<PublicEditorialCollectionListItem[]> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "editorial-collections",
    where: publicCollectionWhere,
    limit: options.limit ?? 20,
    depth: 2,
    sort: "sort_order",
    overrideAccess: false
  });

  return result.docs
    .map(mapEditorialCollectionListItem)
    .filter((collection): collection is PublicEditorialCollectionListItem => Boolean(collection));
};

export const getPublicEditorialCollectionBySlug = async (
  slug: string
): Promise<PublicEditorialCollectionDetail | null> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "editorial-collections",
    where: {
      and: [...publicPublicationConditions, { slug: { equals: slug } }]
    },
    limit: 1,
    depth: 3,
    overrideAccess: false
  });

  const collection = mapEditorialCollectionDetail(result.docs[0]);
  return collection ?? null;
};
