import type { Access, Where } from "payload";

import { canAccessAdmin } from "./canAccessAdmin";

const publicCommerceFilter: Where = {
  and: [{ status: { equals: "active" } }, { visibility: { equals: "public" } }]
};

export const canReadActiveCommerce: Access = (args) => {
  if (canAccessAdmin(args)) {
    return true;
  }

  return publicCommerceFilter;
};
