# Level 1 Task 13: Stabilization / Final Smoke Test

Task 13 is the final stabilization check for the Ink & East Level 1 source-native architecture prototype.

No code, schema, route, access, public query, seed content, frontend styling, payment, membership, search, archive, or preview migration work was added in this task. This document records the final local runtime verification result.

## Verification environment

- Local Windows development environment.
- Latest `main` was pulled before testing.
- PostgreSQL was started through Docker Compose.
- Seed data was rebuilt from the current Level 1 seed files.
- Public read checks were run after seeding.
- Next.js dev server was started locally on the existing development port flow.

## Commands verified

```bash
git checkout main
git pull
pnpm install
docker compose up -d postgres
pnpm --filter web seed
pnpm --filter web check:public-reads
cd apps/web
pnpm dev -- -p 3010
```

The final recovery pass also ran:

```bash
cd C:\Projects\ink-east-planning
pnpm --filter web seed
pnpm --filter web check:public-reads
```

## Public frontend pages verified

The user verified these public routes:

- `/`
- `/issues`
- `/issues/issue-001-wu-wei`
- `/topics`
- `/topics/old-texts`
- `/collections`
- `/collections/reading-the-old-texts`
- `/articles/the-art-of-doing-less`
- `/articles/a-room-that-lets-you-return`
- `/articles/notes-on-quiet-attention`
- `/articles/objects-that-hold-a-room-together`
- `/articles/why-old-texts-still-ask-modern-questions`
- `/articles/draft-a-private-editorial-note`

Expected and verified behavior:

- Public routes opened successfully.
- Public articles displayed the refined Level 1 seed content.
- The private draft route displayed the no-public-information / not-found experience and did not expose private draft content.
- No red application error was reported.

## Payload Admin verified

The user verified these admin areas:

- `/admin`
- Articles
- Issues
- Collections
- Topics
- Authors
- System Settings

Expected and verified behavior:

- Payload Admin opened successfully.
- Seed data was visible.
- Editorial list pages loaded without red errors.
- Admin list columns remained usable after Task 11.
- `status` and `visibility` field descriptions remained available.

## Editorial workflow verified

The user verified a minimal edit-sync path:

- Edited `Articles → The Art of Doing Less` title to a temporary final smoke test title.
- Confirmed the article detail page reflected the changed title.
- Confirmed the home page article list reflected the changed title.
- Restored the title to `The Art of Doing Less`.

Expected and verified behavior:

- Admin edits were saved to PostgreSQL.
- Public frontend routes read the updated data through the public query layer.
- Restoring the original title worked correctly.

## Permission boundary verified

The user verified the public/private article boundary:

- Temporarily changed `The Art of Doing Less` from `visibility = public` to `visibility = private` while keeping `status = published`.
- Confirmed the public article route no longer exposed the article and showed the no-public-information / not-found experience.
- Restored `visibility = public`.
- Confirmed the public article route recovered.

Expected and verified behavior:

- Published/private content did not leak through public frontend pages.
- Restoring public visibility returned the article to public routes.

## Final seed recovery verified

After all manual edit and permission checks, the user ran the seed command again and then ran the public read check again.

Expected and verified behavior:

- Seed recovery completed successfully.
- `check:public-reads` passed.
- The local database returned to the stable Level 1 seed baseline.

## Final Level 1 status

Level 1 is now stable as a source-native architecture baseline:

- Next.js app scaffold is working.
- Payload CMS is wired.
- PostgreSQL persistence is working.
- Core editorial collections exist.
- Shared fields and access boundaries exist.
- Seed data is stable and recoverable.
- Public query layer works.
- Minimal frontend reading routes work.
- Payload Admin editing syncs to frontend pages.
- Draft/private/hidden boundaries are verified.
- Basic reading UX baseline is present.
- Editorial seed content is cleaned up.
- Final smoke test passed.

## Boundary confirmation

Task 13 did not modify, delete, move, or copy `preview/`.

Task 13 did not add frontend routes, route handlers, API endpoints, schema changes, public query changes, access helper changes, database adapter changes, auth changes, final visual design, search, archive, redirect middleware, membership, payment, Reader Notes, Community, service systems, or Level 2 feature work.
