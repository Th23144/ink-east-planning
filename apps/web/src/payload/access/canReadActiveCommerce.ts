import type { Access } from "payload";

import { canAccessAdmin } from "./canAccessAdmin";
import type { Level1User } from "./isAdmin";

export const canReadActiveCommerce: Access = ({ req }) => {
  if (canAccessAdmin({ req: { user: req.user as Level1User | null | undefined } })) {
    return true;
  }

  return {
    and: [{ status: { equals: "active" } }, { visibility: { equals: "public" } }]
  };
};
