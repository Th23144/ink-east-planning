# Ink & East Planning

This repository is the planning, preview, and future source home for Ink & East / Spatial Flow.

## Current source scaffold

Level 1 Task 1 initializes a minimal source project under `apps/web`:

- pnpm workspace at the repository root.
- Next.js + TypeScript app in `apps/web`.
- Minimal placeholder page for the Level 1 Architecture Prototype.

Level 1 Task 2 adds local PostgreSQL environment preparation:

- `docker-compose.yml` defines a local PostgreSQL service for development.
- `.env.example` contains safe local placeholder variables.
- `docs/LEVEL-1-TASK-2-DATABASE-ENVIRONMENT.md` documents the setup.

Level 1 Task 3 installs and wires Payload CMS into `apps/web`:

- Payload Admin is mounted at `/admin`.
- Payload API is mounted under `/api/[...slug]`.
- Payload uses the PostgreSQL adapter with `DATABASE_URI`.
- Payload reads `PAYLOAD_SECRET`.
- The only collection is the minimum `Users` auth collection.
- No business collections or Task 4 content models are included.

## Directory boundaries

- `preview/` is the legacy Kiro/static HTML/RawGitHack visual preview area. Do not modify, delete, move, or copy these files into the source app.
- `apps/web/` is the future source-native Ink & East web application area.

## Development

Install dependencies:

```bash
pnpm install
```

Start PostgreSQL and the web app:

```bash
docker compose up -d postgres
pnpm dev
```

Validate the local PostgreSQL compose file:

```bash
docker compose config
```

Start local PostgreSQL:

```bash
docker compose up -d postgres
```

This scaffold is not the production site and does not include business content models, membership, payment, shop, storage, email, community functionality, or production database configuration.

## Level 1 Task 4: Core Payload Collections

Level 1 Task 4 adds the backend Payload CMS data model for Ink & East inside `apps/web`. It registers editorial collections for articles, issues, curated collections, topics, authors, media, migration records, redirect planning records, and the `system-settings` Payload Global.

Task 4 is limited to backend modeling. It does not add seed data, frontend routes, access rules, migration jobs, middleware redirects, membership, payment, reader notes, community, or service systems. The `preview/` directory remains untouched.

See `docs/LEVEL-1-TASK-4-COLLECTIONS.md` for the Task 4 collection and Global inventory.

## Level 1 Task 5: Shared Fields and Access Rules

Level 1 Task 5 adds shared Payload field modules and minimum access rules for the existing Level 1 collections/global. It introduces admin/editor staff roles, public read filters for published/public or active content, and keeps migration records private.

Task 5 does not add seed data, frontend routes, membership, payment, reader features, community features, service systems, redirect middleware, or Task 6 work. The `preview/` directory remains untouched.

See `docs/LEVEL-1-TASK-5-SHARED-FIELDS-ACCESS.md` for the Task 5 shared field and access-rule inventory.

## Level 1 Task 6: Seed Initial Content

Level 1 Task 6 adds a controlled Payload seed workflow for prototype-only content under `apps/web/src/payload/seed`. The seed creates a small relationship-testing dataset for Authors, Topics, Editorial Collections, Issue 001, Articles, Legacy Article Records, Redirect Rules, and System Settings.

Run it after installing dependencies and starting local PostgreSQL:

```bash
pnpm install
docker compose up -d postgres
pnpm --filter web seed
```

The Task 6 seed is designed to update existing sample records by stable identifiers instead of endlessly creating duplicates. It does not modify `preview/`, import the old 123 articles, connect to WordPress, create frontend routes, or add membership, payment, Reader Notes, Community, or service systems.

See `docs/LEVEL-1-TASK-6-SEED-INITIAL-CONTENT.md` for the full Task 6 scope and verification notes.

## Level 1 Task 7: Public Query Layer

Level 1 Task 7 adds a server-side, read-only public query layer under `apps/web/src/lib/public` plus a cached Payload Local API helper under `apps/web/src/lib/payload/getPayloadClient.ts`. The public query functions map Payload records to safe DTOs and explicitly filter for published/public articles, issues, editorial collections, active topics, active authors, and public System Settings.

Run the Task 7 read-only check after Task 6 seed data exists:

```bash
pnpm --filter web check:public-reads
```

Task 7 does not create frontend routes, `route.ts` HTTP API endpoints, UI components, search/archive pages, membership/payment/community/service systems, WordPress integrations, or Task 8 work. The `preview/` directory remains untouched.

See `docs/LEVEL-1-TASK-7-PUBLIC-QUERY-LAYER.md` for the full Task 7 query inventory, DTO list, security rules, and verification steps.

## Level 1 Task 8: Minimal Frontend Reading Routes

Level 1 Task 8 adds minimal App Router pages under `apps/web/src/app/(site)` for the home page, article details, issues, topics, and editorial collections. These pages use the Task 7 public query layer only.

Local verification after seed data exists:

```bash
pnpm --filter web check:public-reads
pnpm --filter web dev
```

Task 8 does not copy `preview/`, does not implement final visual design, does not create `route.ts` HTTP API endpoints, does not directly use Payload Local API from pages, and does not add membership, payment, Reader Notes, Community, service systems, search, redirect middleware, or Task 9 work.

See `docs/LEVEL-1-TASK-8-MINIMAL-FRONTEND-ROUTES.md` for the route inventory and verification checklist.
