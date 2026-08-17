import type { Access, Where } from "payload";

import { canAccessAdmin, type AccessArgs } from "./canAccessAdmin";

export type AccessResult = boolean | Where;

const publicPublishedFilter: Where = {
  and: [{ status: { equals: "published" } }, { visibility: { equals: "public" } }]
};

export const canReadPublished: Access = (args: AccessArgs): AccessResult => {
  if (canAccessAdmin(args)) {
    return true;
  }

  return publicPublishedFilter;
};
