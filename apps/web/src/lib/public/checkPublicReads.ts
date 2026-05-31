import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const repoRoot = path.resolve(dirname, "../../../../..");

const loadEnvFile = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
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

const assertCheck = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};

const runPublicReadChecks = async () => {
  loadLocalEnv();

  const {
    getPublicArticleBySlug,
    getPublicArticles,
    getPublicIssueBySlug,
    getPublicSystemSettings,
    getPublicTopics
  } = await import(".");

  const articles = await getPublicArticles();
  assertCheck(
    articles.length > 0,
    "Expected at least one published public article. Run pnpm --filter web seed first."
  );

  const privateDraft = await getPublicArticleBySlug("draft-a-private-editorial-note");
  assertCheck(privateDraft === null, "Private draft article should not be returned by public reads.");

  const topics = await getPublicTopics();
  assertCheck(topics.length === 7, "Expected 7 active topics. Run pnpm --filter web seed first.");

  const issue = await getPublicIssueBySlug("issue-001-wu-wei");
  assertCheck(Boolean(issue), "Expected Issue 001 to be readable. Run pnpm --filter web seed first.");
  assertCheck(issue?.title === "Wu Wei", "Expected issue-001-wu-wei to be Issue 001 / Wu Wei.");

  const settings = await getPublicSystemSettings();
  assertCheck(
    settings.brand.site_name === "Ink & East",
    "Expected system settings site name to be Ink & East. Run pnpm --filter web seed first."
  );

  console.log("Public read checks passed.");
  console.log(`Read ${articles.length} public articles, ${topics.length} active topics, and ${issue?.title}.`);
};

runPublicReadChecks().catch((error: unknown) => {
  console.error("Public read checks failed.");
  console.error("Run pnpm --filter web seed first if the Level 1 seed data is missing.");
  console.error(error);
  process.exit(1);
});
