# Level 1 Task 12: Editorial Seed / Demo Content Cleanup

Task 12 refines the controlled Level 1 seed copy so the source-native Ink & East prototype reads more like a real editorial system during future frontend and visual work.

This is not a feature task. It does not add new routes, collections, permissions, payments, membership, search, or final visual design.

## Scope

Task 12 includes:

- Refined seed copy for the first issue, topics, collections, authors, system settings, and public seed articles.
- Longer but still controlled plain-text article bodies for public reading-route testing.
- Cleaner seed relationship notes for Issue ordered articles and Collection article relationships.
- Preserved stable slugs so existing Level 1 verification URLs continue to work.
- Preserved the private draft article as an access-rule test fixture.

## Stable URLs preserved

These existing public test URLs remain stable:

- `/`
- `/issues/issue-001-wu-wei`
- `/topics/old-texts`
- `/collections/reading-the-old-texts`
- `/articles/the-art-of-doing-less`

This private draft access test URL also remains stable:

- `/articles/draft-a-private-editorial-note`

## Safety boundary

Task 12 does not change access helpers, public query functions, Next.js routes, Payload collection schemas, database adapter, auth setup, or frontend styling.

Task 12 does not modify, delete, move, or copy `preview/`.

Task 12 does not create `route.ts` HTTP API endpoints, `/api/public`, search, archive, redirect middleware, final visual design, membership, payment, Reader Notes, Community, service systems, or Task 13 work.

## Local verification checklist

Start from the Task 12 PR branch:

```bash
pnpm install
docker compose up -d postgres
pnpm --filter web seed
pnpm --filter web check:public-reads
cd apps/web
pnpm dev -- -p 3010
```

Then verify:

- `/` opens and shows the refined site statement / article excerpts.
- `/issues/issue-001-wu-wei` opens and still shows Issue 001 / Wu Wei.
- `/topics/old-texts` opens and shows refined topic copy.
- `/collections/reading-the-old-texts` opens and shows refined collection copy.
- `/articles/the-art-of-doing-less` opens and shows the refined public article body.
- `/articles/draft-a-private-editorial-note` still does not expose private draft content.
- `/admin` opens and seed data is visible.
- No red application error is shown.

## Expected result

The prototype should still behave exactly like the Level 1 source-native reading prototype, but the demo content should feel less like placeholder test data and more like stable Ink & East editorial seed content.
