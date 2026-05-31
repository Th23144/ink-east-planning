import { canAccessAdmin, type AccessArgs } from "./canAccessAdmin";

export const canEditContent = (args: AccessArgs): boolean => canAccessAdmin(args);
