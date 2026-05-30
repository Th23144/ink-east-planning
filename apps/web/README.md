# Ink & East Web App

This directory contains the Level 1 source scaffold for the future Ink & East source-native journal system.

## Current Scope

- Next.js + TypeScript application scaffold.
- Payload CMS is wired into this app for Level 1 Task 3.
- Payload uses the PostgreSQL adapter and reads `DATABASE_URI` from the repository root environment.
- Payload reads `PAYLOAD_SECRET` for local admin/API signing.
- The only Payload collection is the minimum `Users` auth collection required for the admin.
- The frontend placeholder page remains available at `/`.
- Payload Admin is mounted at `/admin`.
- Payload REST API is mounted through the App Router at `/api/[...slug]`.
- No business collections, content migration, membership, payments, shop, email, storage, or community features are included in Task 3.
- `preview/` remains the legacy static visual preview area and is not used as source for this app.

## Commands

From the repository root:

```bash
pnpm install
docker compose up -d postgres
pnpm dev
```

Or run the app directly:

```bash
pnpm --filter web dev
```

Then check:

- Frontend placeholder: <http://localhost:3000/>
- Payload Admin: <http://localhost:3000/admin>

## Environment

Copy the root `.env.example` to `.env` for local development values:

```bash
cp .env.example .env
```

Required local variables for Task 3:

```bash
DATABASE_URI=postgresql://ink_east:ink_east_dev_password@localhost:5432/ink_east_dev
PAYLOAD_SECRET=replace-with-a-local-development-secret
```

See the repository root `.env.example`, `docs/LEVEL-1-TASK-2-DATABASE-ENVIRONMENT.md`, and `docs/LEVEL-1-TASK-3-PAYLOAD-CMS.md` for the local PostgreSQL and Payload setup notes.

## Level 1 Task 4 Payload model

This app now registers the Level 1 Payload CMS backend model:

- Editorial: Articles, Issues, Collections, Topics, Authors, and Media.
- Migration: Legacy Article Records and Redirect Rules.
- System: System Settings as a Payload Global.

The Task 4 implementation is data-model only. It keeps the existing Users auth collection and does not add seed data, frontend routes, access rules, redirect middleware, or business workflows.
