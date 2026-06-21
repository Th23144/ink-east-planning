# Level 1 Task 10: Minimal Reading UX Baseline

Task 10 lightly refines the Level 1 frontend reading experience created in Task 8.

This is still a validation-oriented frontend. It is not the final Ink & East visual system, not a preview migration, and not a production design pass.

## Scope

Task 10 includes:

- A minimal site-level not-found page for unpublished, private, hidden, or missing public content.
- Small global CSS refinements for reading width, navigation, cards, tag links, article body spacing, and empty states.
- A small article page breadcrumb improvement.

## Safety boundary

Task 10 does not change the public data boundary. Pages still rely on the Task 7 public query layer.

Task 10 does not call Payload directly from frontend pages and does not use `overrideAccess: true`.

Draft, private, hidden, migration, planning, and user data remain unavailable to public frontend pages.

## Verification checklist

Before local route verification, ensure the database and seed data are available:

```bash
pnpm install
docker compose up -d postgres
pnpm --filter web seed
pnpm --filter web check:public-reads
```

Start the dev server:

```bash
cd apps/web
pnpm dev -- -p 3010
```

Check these URLs:

- `/`
- `/issues`
- `/issues/issue-001-wu-wei`
- `/topics`
- `/topics/old-texts`
- `/collections`
- `/collections/reading-the-old-texts`
- `/articles/the-art-of-doing-less`
- `/articles/draft-a-private-editorial-note`
- `/admin`

Expected results:

- Public pages remain readable.
- Public article pages still render public content.
- `/articles/draft-a-private-editorial-note` still does not expose private draft content and shows the not-found experience.
- `/admin` remains accessible.
- Payload Admin seed data remains visible.
- No red application error is shown.

## Local Runtime Verification Passed

- The user verified PR #18 in a local Windows development environment.
- Public pages opened successfully, including home, issues, Issue 001, topics, Old Texts, collections, Reading the Old Texts, and the public article page.
- `/articles/draft-a-private-editorial-note` displayed the not-found / no-public-information experience and did not expose private draft content.
- `/admin` remained accessible.
- Payload Admin seed data remained visible.
- No red application error was reported.
- This verification did not add route handlers, API endpoints, final visual design, preview migration, search, redirect middleware, membership, payment, Reader Notes, Community, service systems, or Task 11 work.

## Boundary confirmation

`preview/` was not modified, deleted, moved, or copied into `apps/web`.

Task 10 does not create `route.ts` HTTP API endpoints, `/api/public`, search, archive, redirect middleware, membership, payment, Reader Notes, Community, service systems, or Task 11 work.
