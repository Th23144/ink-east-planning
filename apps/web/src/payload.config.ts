import { postgresAdapter } from "@payloadcms/db-postgres";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";

import {
  Articles,
  Authors,
  Carts,
  EditorialCollections,
  Issues,
  LegacyArticleRecords,
  Media,
  ProductCategories,
  Products,
  RedirectRules,
  Topics,
  Users
} from "./collections";
import { CommerceSettings, SystemSettings } from "./globals";
import { canAccessAdmin } from "./payload/access";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    canAccessAdmin,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [
    Users,
    Articles,
    Issues,
    EditorialCollections,
    Topics,
    Authors,
    Media,
    ProductCategories,
    Products,
    Carts,
    LegacyArticleRecords,
    RedirectRules
  ],
  globals: [SystemSettings, CommerceSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || ""
    }
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  }
});
