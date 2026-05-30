# Ink & East Web App

This directory contains the Level 1 source scaffold for the future Ink & East source-native journal system.

## Current Scope

- Next.js + TypeScript minimal application scaffold.
- Single `apps/web` app inside a pnpm workspace.
- Placeholder page only.
- Local PostgreSQL environment variables are prepared at the repository root for future Payload integration.
- No CMS installation, database client, Payload configuration, content models, membership, payment, shop, email, storage, or community features.
- `preview/` remains the legacy static visual preview area and is not used as source for this app.

## Commands

From the repository root:

```bash
pnpm install
pnpm dev
```

Or run the app directly:

```bash
pnpm --filter web dev
```

## Environment

See the repository root `.env.example` and `docs/LEVEL-1-TASK-2-DATABASE-ENVIRONMENT.md` for local PostgreSQL placeholders and Docker Compose commands.

Task 2 prepares environment configuration only. Payload CMS installation and database connection verification are reserved for Task 3.
