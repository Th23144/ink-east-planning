# Level 1 Task 3 · Payload CMS Wiring

This document records the Task 3 implementation for the Ink & East Level 1 Architecture Prototype.

## Scope

Task 3 only installs and wires Payload CMS into the existing `apps/web` Next.js application. It does not create business content models and does not continue to Task 4.

Implemented in this task:

- Payload CMS dependencies are added to `apps/web`.
- Payload is connected through the Next.js App Router.
- Payload uses the PostgreSQL adapter.
- Payload reads `DATABASE_URI` for the local PostgreSQL connection.
- Payload reads `PAYLOAD_SECRET` for local admin/API signing.
- A minimum `Users` auth collection is configured.
- Payload Admin is mounted at `/admin`.
- Payload REST API is mounted under `/api/[...slug]`.
- The existing frontend placeholder page remains mounted at `/`.

Explicitly not implemented in this task:

- No Articles, Issues, Collections, Topics, Authors, Media, legacy import, redirect, or system settings models.
- No membership, reader, patron, notes, community, custom reading, custom ebook, payment, email, object storage, or shop integrations.
- No WordPress, PHP, WooCommerce, Shopify, CartFlows, or Elementor.
- No modifications to `preview/`.

## Files

Payload configuration lives in:

- `apps/web/src/payload.config.ts`

The only collection files are:

- `apps/web/src/collections/Users.ts`
- `apps/web/src/collections/index.ts`

Payload routes live in:

- `apps/web/src/app/(payload)/admin/[[...segments]]/page.tsx`
- `apps/web/src/app/(payload)/api/[...slug]/route.ts`
- `apps/web/src/app/(payload)/layout.tsx`
- `apps/web/src/app/(payload)/admin/importMap.js`

## Local setup

Copy local environment placeholders if needed:

```bash
cp .env.example .env
```

Start PostgreSQL:

```bash
docker compose up -d postgres
```

Install dependencies:

```bash
pnpm install
```

Start the web app:

```bash
pnpm dev
```

Or explicitly filter to the app:

```bash
pnpm --filter web dev
```

Then open:

- Frontend placeholder: <http://localhost:3000/>
- Payload Admin: <http://localhost:3000/admin>

On first local access, Payload should show its admin first-user setup/login flow backed by the `Users` auth collection.

## Environment variables

Task 3 uses the existing placeholders from `.env.example`:

```bash
DATABASE_URI=postgresql://ink_east:ink_east_dev_password@localhost:5432/ink_east_dev
PAYLOAD_SECRET=replace-with-a-local-development-secret
```

Do not commit real secrets.

## Runtime Verification Status

- `pnpm install` did not complete successfully because the current environment's Corepack / npm registry proxy returned HTTP 403 while fetching pnpm.
- `docker compose up -d postgres` did not complete successfully because Docker is not available in the current environment.
- `pnpm dev` did not complete successfully, so the frontend homepage `/` and Payload Admin `/admin` have not yet been verified by real browser access.
- Current Task 3 work completes only the code-level Payload wiring layer.
- Before merging, run the following in a local environment or another environment with npm registry access and Docker available:
  1. `pnpm install`
  2. `docker compose up -d postgres`
  3. `pnpm --filter web dev`
  4. Open <http://localhost:3000>
  5. Open <http://localhost:3000/admin>
- Task 3 runtime verification should only be considered complete after both `/` and `/admin` are accessible.
