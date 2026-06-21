# Level 1 Task 11: Source-native Content Model Hardening

Task 11 is a small Payload Admin and editorial data model cleanup pass.

It does not change public routing, public query rules, seed content meaning, or the frontend visual direction.

## Scope

Task 11 includes:

- Better Payload Admin list columns for Articles, Issues, Collections, Topics, and Authors.
- Better Payload Admin search fields for editorial records.
- Clearer status field descriptions for publication records and active/hidden records.
- Clearer visibility field descriptions for the current Level 1 public reading boundary.

## Why this exists

The Level 1 prototype now has editable content, public query functions, frontend routes, and local editorial workflow verification.

Before larger visual, search, archive, or product work begins, the Admin surface needs to make the most important editorial states visible:

- `status`
- `visibility`
- publication date
- sort order
- role label
- updated timestamp

This reduces the chance that future content work accidentally hides or leaks records.

## Safety boundary

Task 11 does not change the access helpers, frontend routes, public query layer, seed records, database adapter, Payload auth setup, or Next.js routing.

Task 11 does not create public API endpoints and does not call Payload directly from frontend pages.

Task 11 does not add search, archive, redirect middleware, final visual design, preview migration, membership, payment, Reader Notes, Community, service systems, or Task 12 work.

## Local verification checklist

Start from latest code on the Task 11 PR branch:

```bash
pnpm install
docker compose up -d postgres
pnpm --filter web seed
pnpm --filter web check:public-reads
cd apps/web
pnpm dev -- -p 3010
```

Then verify:

- `/admin` opens successfully.
- Articles list shows useful editorial columns, including title, status, visibility, published date, and updated timestamp.
- Issues list shows useful editorial columns, including number, title, status, visibility, published date, and updated timestamp.
- Collections list shows useful editorial columns, including title, status, visibility, sort order, and updated timestamp.
- Topics list shows useful editorial columns, including name, status, sort order, and updated timestamp.
- Authors list shows useful editorial columns, including name, status, role label, and updated timestamp.
- Status fields show explanatory descriptions.
- Visibility fields show explanatory descriptions.
- Public pages still open:
  - `/`
  - `/issues/issue-001-wu-wei`
  - `/topics/old-texts`
  - `/collections/reading-the-old-texts`
  - `/articles/the-art-of-doing-less`
- `/articles/draft-a-private-editorial-note` still does not expose private draft content.

## Expected result

The Admin should be easier to scan and safer to edit without changing public behavior.

## Boundary confirmation

`preview/` was not modified, deleted, moved, or copied into `apps/web`.

No public routes, route handlers, API endpoints, final visual design, search, archive, redirect middleware, membership, payment, Reader Notes, Community, service systems, or Task 12 work were added.
