import { getPayloadClient } from "../payload/getPayloadClient";
import { mapAuthor } from "./mappers";
import type { PublicAuthor } from "./types";

const activeAuthorWhere = { status: { equals: "active" } } as const;

export const getPublicAuthors = async (): Promise<PublicAuthor[]> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "authors",
    where: activeAuthorWhere,
    limit: 100,
    depth: 0,
    sort: "name",
    overrideAccess: false
  });

  return result.docs.map(mapAuthor).filter((author): author is PublicAuthor => Boolean(author));
};

export const getPublicAuthorBySlug = async (slug: string): Promise<PublicAuthor | null> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "authors",
    where: {
      and: [{ slug: { equals: slug } }, activeAuthorWhere]
    },
    limit: 1,
    depth: 0,
    overrideAccess: false
  });

  const author = mapAuthor(result.docs[0]);
  return author ?? null;
};
