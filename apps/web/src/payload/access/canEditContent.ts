import type { Access } from "payload";

import { canAccessAdmin } from "./canAccessAdmin";

export const canEditContent: Access = (args) => canAccessAdmin(args);
