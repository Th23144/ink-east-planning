# Level 1 Task 6: Seed Initial Content

Task 6 adds a controlled seed workflow for the Level 1 Architecture Prototype. It creates a small amount of sample content so the Payload Admin can verify relationships between editorial collections, issues, articles, topics, authors, migration planning records, redirect planning records, and the System Settings Global.

This seed is prototype sample content only. It is not production editorial content, not a formal migration, and not a legacy import of the old article archive.

## Scope

Included in Task 6:

- Seed script under `apps/web/src/payload/seed/seedInitialContent.ts`.
- Seed data modules under `apps/web/src/payload/seed/data/`.
- A `pnpm --filter web seed` command wired through `apps/web/package.json`.
- Payload Local API writes for Level 1 sample records.
- Idempotent upsert-style behavior using stable identifiers:
  - `slug` for Authors, Topics, Editorial Collections, Issues, and Articles.
  - `legacy_id` for Legacy Article Records.
  - `from_url` for Redirect Rules.
  - Payload Global update for System Settings.

Out of scope for Task 6:

- No frontend routes are created.
- No `/articles/[slug]`, `/issues`, `/collections`, `/topics`, archive, or search routes are created.
- No redirect middleware is created.
- No SEO metadata output is created.
- No old 123 articles are imported.
- No WordPress connection is made.
- No scraping, crawling, or fetching of old site content is performed.
- No membership, payment, Reader Notes, Community, Letters, service system, or shop integration is created.
- No Task 7 work is started.
- No files under `preview/` are modified.

## Seed Data Inventory

The Task 6 seed creates a small sample dataset:

- Authors: 2 sample authors.
  - Ink & East Editorial Desk.
  - Guest Reader.
- Topics: 7 active topics.
  - Old Texts.
  - Quiet Stories.
  - Space & Ritual.
  - Mind & Emotion.
  - Eastern Thought.
  - Objects & Meaning.
  - Modern Questions.
- Editorial Collections: 2 published public collections.
  - Reading the Old Texts.
  - Quiet Modern Questions.
- Issues: 1 published public issue.
  - Issue 001.
  - Number: `001`.
  - Slug: `issue-001-wu-wei`.
  - Theme: Wu Wei.
- Articles: 6 sample articles.
  - At least 4 are public and published.
  - 1 is a draft/private article for access-rule checks.
  - 1 uses `source_type = legacy_import`.
  - Published articles are connected to Issue 001, topics, and selected editorial collections.
- Legacy Article Records: 5 migration-planning records.
  - Decisions include keep, rewrite, archive, and discard.
  - Migration statuses include pending, reviewed, cleaned, article_created, and redirect_created.
  - Placeholder summaries are used instead of old article bodies.
- Redirect Rules: 4 planning records.
  - Includes 301, 302, and 410 examples.
  - These are data records only and do not implement redirect behavior.
- System Settings: updates the `system-settings` Global with Level 1 brand, SEO default, and shop bridge placeholder values.

## How to Run

From the repository root, install dependencies:

```bash
pnpm install
```

Start the local PostgreSQL service:

```bash
docker compose up -d postgres
```

Ensure local environment values exist before running the seed. Copy `.env.example` to `.env` or provide equivalent values in `.env.local`:

```bash
cp .env.example .env
```

Required variables:

```bash
DATABASE_URI=postgresql://ink_east:ink_east_dev_password@localhost:5432/ink_east_dev
PAYLOAD_SECRET=replace-with-a-local-development-secret
```

Run the seed:

```bash
pnpm --filter web seed
```

Run it a second time to verify the upsert behavior:

```bash
pnpm --filter web seed
```

The second run should update existing records by `slug`, `legacy_id`, or `from_url` rather than creating endless duplicates.

The seed script intentionally loads local environment values before dynamically importing `payload.config.ts`, so `DATABASE_URI` and `PAYLOAD_SECRET` are available when the Payload config is evaluated.

## Local Admin Verification

After seeding, start the app:

```bash
pnpm --filter web dev
```

Then verify:

- The placeholder homepage remains available at `/`.
- Payload Admin remains available at `/admin`.
- The local admin user is not locked out.
- Payload Admin can show the seeded Authors, Topics, Issues, Articles, Legacy Article Records, Redirect Rules, Editorial Collections, and System Settings.

If a browser translation extension changes page language attributes, use an incognito window or disable browser translation before treating hydration warnings as application failures.

## Boundary Confirmation

Task 6 does not change `preview/`. It does not connect to WordPress, does not import the old 123 articles, does not create frontend content routes, does not create middleware redirects, and does not create membership, payment, Reader Notes, Community, or service systems.

Task 6 stops after the seed script, seed data, and seed documentation. Task 7 is not started.
