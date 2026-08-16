import fs from "fs";
import path from "path";
import { getPayload } from "payload";
import { fileURLToPath, pathToFileURL } from "url";

import { commerceSettings } from "./data/commerceSettings";
import { productCategories } from "./data/productCategories";
import { products } from "./data/products";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const repoRoot = path.resolve(dirname, "../../../../..");

type PayloadClient = Awaited<ReturnType<typeof getPayload>>;
type Id = string | number;

const loadEnvFile = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
};

const loadLocalEnv = () => {
  loadEnvFile(path.join(repoRoot, ".env.local"));
  loadEnvFile(path.join(repoRoot, ".env"));
  loadEnvFile(path.join(repoRoot, ".env.example"));
};

const requireEnv = (key: string) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
};

const findExisting = async (
  payload: PayloadClient,
  collection: string,
  field: string,
  value: string
) => {
  const result = await payload.find({
    collection: collection as never,
    where: {
      [field]: {
        equals: value
      }
    },
    limit: 1,
    depth: 0,
    overrideAccess: true
  });

  return result.docs[0];
};

const upsertByField = async <T extends Record<string, unknown>>(
  payload: PayloadClient,
  collection: string,
  field: string,
  value: string,
  data: T
) => {
  const existing = await findExisting(payload, collection, field, value);

  if (existing) {
    const updated = await payload.update({
      collection: collection as never,
      id: existing.id,
      data: data as never,
      depth: 0,
      overrideAccess: true
    });

    console.log(`Updated ${collection}: ${value}`);
    return updated;
  }

  const created = await payload.create({
    collection: collection as never,
    data: data as never,
    depth: 0,
    overrideAccess: true
  });

  console.log(`Created ${collection}: ${value}`);
  return created;
};

const seedCommerce = async () => {
  loadLocalEnv();
  requireEnv("DATABASE_URI");
  requireEnv("PAYLOAD_SECRET");

  const { default: config } = await import("../../payload.config");
  const payload = await getPayload({ config });
  const categoryIds = new Map<string, Id>();

  console.log("Starting Project 3 Commerce Batch A seed...");

  for (const category of productCategories) {
    const doc = await upsertByField(payload, "product-categories", "slug", category.slug, {
      ...category
    });
    categoryIds.set(category.slug, doc.id);
  }

  for (const product of products) {
    const { categorySlugs, ...data } = product;
    const categories = categorySlugs.map((slug) => {
      const id = categoryIds.get(slug);
      if (!id) {
        throw new Error(`Missing seeded product category: ${slug}`);
      }
      return id;
    });

    await upsertByField(payload, "products", "slug", product.slug, {
      ...data,
      categories
    });
  }

  await payload.updateGlobal({
    slug: "commerce-settings" as never,
    data: commerceSettings as never,
    depth: 0,
    overrideAccess: true
  });
  console.log("Updated commerce-settings global.");

  await payload.updateGlobal({
    slug: "system-settings" as never,
    data: {
      shop_bridge: {
        shop_bridge_url: "/shop",
        shop_bridge_label: "Shop Spatial Flow"
      }
    } as never,
    depth: 0,
    overrideAccess: true
  });
  console.log("Updated Ink & East shop bridge to the source-native /shop route.");

  console.log("Project 3 Commerce Batch A seed complete.");
};

const isDirectRun = Boolean(process.argv[1]) && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectRun) {
  seedCommerce()
    .then(() => process.exit(0))
    .catch((error: unknown) => {
      console.error("Project 3 Commerce Batch A seed failed.");
      console.error(error);
      process.exit(1);
    });
}

export { seedCommerce };
