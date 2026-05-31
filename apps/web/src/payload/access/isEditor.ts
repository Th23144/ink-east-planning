import type { Level1User } from "./isAdmin";

export const isEditor = (user?: Level1User | null): boolean => user?.role === "editor";
