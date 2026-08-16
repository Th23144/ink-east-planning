import type { Access } from "payload";

import { isAdmin, type Level1User } from "./isAdmin";
import { isEditor } from "./isEditor";

export type AccessArgs = Parameters<Access>[0];

const isActive = ({ status }: Level1User): boolean => status == null || status === "active";

export const canAccessAdmin = ({ req }: AccessArgs): boolean => {
  const user = req.user as Level1User | null | undefined;

  return Boolean(user && isActive(user) && (isAdmin(user) || isEditor(user)));
};
