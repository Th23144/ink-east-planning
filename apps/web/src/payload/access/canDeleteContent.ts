import { type AccessArgs } from "./canAccessAdmin";
import { isAdmin } from "./isAdmin";

export const canDeleteContent = ({ req }: AccessArgs): boolean =>
  Boolean(req.user && (req.user.status == null || req.user.status === "active") && isAdmin(req.user));
