import { isAdmin, type Level1User } from "./isAdmin";
import { isEditor } from "./isEditor";

export type AccessArgs = {
  req: {
    user?: Level1User | null;
  };
};

const isActive = ({ status }: Level1User): boolean => status == null || status === "active";

export const canAccessAdmin = ({ req }: AccessArgs): boolean => {
  const { user } = req;

  return Boolean(user && isActive(user) && (isAdmin(user) || isEditor(user)));
};
