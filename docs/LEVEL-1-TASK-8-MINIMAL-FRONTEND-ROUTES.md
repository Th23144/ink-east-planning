# Level 1 Task 8: Minimal Frontend Reading Routes

Task 8 adds minimal server-rendered frontend reading routes for the Ink & East Level 1 Architecture Prototype.

These routes are validation routes. They are not the final visual design, not a preview migration, and not a production frontend.

## Scope

Task 8 adds a home route, article detail route, issue list and detail routes, topic list and detail routes, and editorial collection list and detail routes. It also adds minimal global CSS for readability.

All pages use the Task 7 public query layer from `apps/web/src/lib/public`.

## Route inventory

- `/` reads public System Settings, latest public articles, public issues, active topics, and public editorial collections.
- `/articles/[slug]` reads `getPublicArticleBySlug(slug)` and calls `notFound()` when the article is not public.
- `/issues` reads `getPublicIssues()`.
- `/issues/[slug]` reads `getPublicIssueBySlug(slug)` and calls `notFound()` when the issue is not public.
- `/topics` reads `getPublicTopics()`.
- `/topics/[slug]` reads `getPublicTopicBySlug(slug)` and `getPublicArticles({ topicSlug: slug })`.
- `/collections` reads `getPublicEditorialCollections()`.
- `/collections/[slug]` reads `getPublicEditorialCollectionBySlug(slug)` and calls `notFound()` when the collection is not public.

## Safety boundary

Task 8 pages do not call Payload directly. They rely on the Task 7 public query layer for all reads.

Draft, private, migration, planning, and user data are not rendered by these pages.

The private draft seed slug `/articles/draft-a-private-editorial-note` should not render article content and should resolve to the app's not-found behavior.

## Styling boundary

Task 8 adds only minimal CSS for readability: simple navigation, readable width, basic panels and lists, and basic article body spacing.

It does not copy `preview/`, does not migrate static preview HTML, and does not add a design system.

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
pnpm --filter web dev
```

If another local project already uses port 3000, run from `apps/web`:

```bash
pnpm dev -- -p 3010
```

Check these URLs: `/`, `/issues`, `/issues/issue-001-wu-wei`, `/topics`, `/topics/old-texts`, `/collections`, `/collections/reading-the-old-texts`, `/articles/the-art-of-doing-less`, `/articles/draft-a-private-editorial-note`, and `/admin`.

Expected results: public pages render the Task 6 public seed data; the private draft article does not show private content; `/admin` remains accessible; Payload Admin seed data remains visible; and no red application error is shown.

## Local Runtime Verification Passed

- The user verified PR #17 in a local Windows development environment.
- Task 6 seed data was present and Task 7 `check:public-reads` had already passed.
- The local dev server was run on port 3010 because another local project can use port 3000.
- The following public pages opened successfully: `/`, `/issues`, `/issues/issue-001-wu-wei`, `/topics`, `/topics/old-texts`, `/collections`, `/collections/reading-the-old-texts`, and `/articles/the-art-of-doing-less`.
- `/articles/draft-a-private-editorial-note` returned the expected not-found behavior and did not display private draft content.
- `/admin` opened successfully.
- Payload Admin seed data remained visible.
- No red application error was reported.
- This verification did not add route handlers, API endpoints, final visual design, preview migration, search, redirect middleware, membership, payment, Reader Notes, Community, service systems, or Task 9 work.

## Boundary confirmation

`preview/` was not modified, deleted, moved, or copied into `apps/web`.

Task 8 stops at minimal frontend reading routes and does not enter Task 9.
