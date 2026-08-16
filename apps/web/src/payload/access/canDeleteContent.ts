import type { Access } from "payload";

import { isAdmin, type Level1User } from "./isAdmin";

export const canDeleteContent: Access = ({ req }) => {
  const user = req.user as Level1User | null | undefined;
  return Boolean(user && (user.status == null || user.status === "active") && isAdmin(user));
};
