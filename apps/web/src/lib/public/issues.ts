import type { Where } from "payload";

import { getPayloadClient } from "../payload/getPayloadClient";
import { mapIssueDetail, mapIssueListItem } from "./mappers";
import type { PublicIssueDetail, PublicIssueListItem } from "./types";

type PublicIssueOptions = {
  limit?: number;
};

const publicPublicationConditions: Where[] = [
  { status: { equals: "published" } },
  { visibility: { equals: "public" } }
];

const publicIssueWhere: Where = {
  and: publicPublicationConditions
};

export const getPublicIssues = async (
  options: PublicIssueOptions = {}
): Promise<PublicIssueListItem[]> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "issues",
    where: publicIssueWhere,
    limit: options.limit ?? 20,
    depth: 2,
    sort: "-published_at",
    overrideAccess: false
  });

  return result.docs.map(mapIssueListItem).filter((issue): issue is PublicIssueListItem => Boolean(issue));
};

export const getPublicIssueBySlug = async (slug: string): Promise<PublicIssueDetail | null> => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "issues",
    where: {
      and: [...publicPublicationConditions, { slug: { equals: slug } }]
    },
    limit: 1,
    depth: 3,
    overrideAccess: false
  });

  const issue = mapIssueDetail(result.docs[0]);
  return issue ?? null;
};
