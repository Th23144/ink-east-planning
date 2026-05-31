import { canAccessAdmin, type AccessArgs } from "./canAccessAdmin";

export type AccessResult = boolean | Record<string, unknown>;

export const canReadPublished = (args: AccessArgs): AccessResult => {
  if (canAccessAdmin(args)) {
    return true;
  }

  return {
    and: [{ status: { equals: "published" } }, { visibility: { equals: "public" } }]
  };
};
