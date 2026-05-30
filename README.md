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
