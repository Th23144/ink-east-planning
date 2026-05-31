export type Level1User = {
  id?: string | number;
  email?: string | null;
  role?: "admin" | "editor" | null;
  status?: "active" | "suspended" | null;
};

export const isAdmin = (user?: Level1User | null): boolean => {
  if (!user) {
    return false;
  }

  if (user.role === "admin") {
    return true;
  }

  // Level 1 prototype compatibility fallback:
  // Task 3/4 local first users may exist before the role field was added.
  // Treat an authenticated user with no role as admin temporarily so existing
  // local admins are not locked out. A later formal permissions task should
  // backfill roles and remove this fallback.
  return user.role == null && Boolean(user.email);
};
