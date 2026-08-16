import { canAccessAdmin, type AccessArgs } from "./canAccessAdmin";
import type { AccessResult } from "./canReadPublished";

export const canReadActiveCommerce = (args: AccessArgs): AccessResult => {
  if (canAccessAdmin(args)) {
    return true;
  }

  return {
    and: [{ status: { equals: "active" } }, { visibility: { equals: "public" } }]
  };
};
