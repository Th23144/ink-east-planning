# Level 1 Task 7: Public Read API / Query Layer

Task 7 adds a server-side, reusable, read-only public query layer for future Ink & East frontend pages. It is an internal query layer built on the Payload Local API; it is not a frontend page task, not a route task, and not Task 8.

## Scope

This task adds:

- `src/lib/payload/getPayloadClient.ts` as a server-only Payload client helper that imports the app's Payload config and caches initialization.
- `src/lib/public/*` as public-facing query functions, DTO types, and DTO mappers.
- `check:public-reads` as a read-only verification script for the Task 6 seed data.

The layer is intended for future server-side page code to import later. Task 7 does not expose these functions over HTTP.

## Public query functions

Articles:

- `getPublicArticles(options?)`
  - Returns `status = published` and `visibility = public` articles only.
  - Sorts by `published_at` descending by default.
  - Supports `limit`, optional `topicSlug`, and optional `issueSlug` filters.
- `getPublicArticleBySlug(slug)`
  - Returns one published/public article detail DTO or `null`.

Issues:

- `getPublicIssues(options?)`
  - Returns `status = published` and `visibility = public` issues only.
  - Sorts by `published_at` descending by default.
- `getPublicIssueBySlug(slug)`
  - Returns one published/public issue detail DTO or `null`, with safe article DTOs for populated article relationships when available.

Editorial collections:

- `getPublicEditorialCollections(options?)`
  - Returns `status = published` and `visibility = public` editorial collections only.
- `getPublicEditorialCollectionBySlug(slug)`
  - Returns one published/public editorial collection detail DTO or `null`, with safe article DTOs when available.

Topics:

- `getPublicTopics()`
  - Returns active topics only, sorted by `sort_order` ascending.
- `getPublicTopicBySlug(slug)`
  - Returns one active topic DTO or `null`.

Authors:

- `getPublicAuthors()`
  - Returns active authors only.
- `getPublicAuthorBySlug(slug)`
  - Returns one active author DTO or `null`.

System settings:

- `getPublicSystemSettings()`
  - Reads the `system-settings` Payload Global and maps it to a public DTO.

## DTO types

The public layer does not return raw Payload documents. It maps records to lightweight DTOs:

- `PublicSeo`
- `PublicAuthor`
- `PublicTopic`
- `PublicArticleListItem`
- `PublicArticleDetail`
- `PublicIssueListItem`
- `PublicIssueDetail`
- `PublicIssueArticle`
- `PublicEditorialCollectionListItem`
- `PublicEditorialCollectionDetail`
- `PublicEditorialCollectionArticle`
- `PublicSystemSettings`

Relationship fields are mapped to compact public summaries. Missing or unpopulated relationships are handled safely and do not cause public query functions to throw.

## Security and read-only rules

Every public query function is read-only and uses Payload Local API read calls only (`find` / `findGlobal`). No public query function creates, updates, deletes, seeds, imports, crawls, or mutates data.

The query layer uses explicit filters as the primary public data boundary:

- Articles: `status = published` and `visibility = public`.
- Issues: `status = published` and `visibility = public`.
- Editorial Collections: `status = published` and `visibility = public`.
- Topics: `status = active`.
- Authors: `status = active`.
- System Settings: uses the existing public-read global access rule.

Public query calls also set `overrideAccess: false` so they do not bypass the collection/global access rules. DTO mappers include a second safety check and refuse to map non-public publication records or inactive topic/author records.

The public DTOs intentionally do not expose:

- Draft, private, editor-only, patron, or reader-only content.
- `legacy_record` raw relationships.
- Migration records or redirect-planning internals.
- User records or access internals.
- Private editor notes or backend-only migration data.

## Verification script

Run the read-only check after Task 6 seed data is present:

```bash
pnpm --filter web check:public-reads
```

The check verifies that:

- Public published articles are readable.
- `draft-a-private-editorial-note` returns `null`.
- The 7 active Task 6 topics are readable.
- `issue-001-wu-wei` is readable.
- `check:public-reads` validates Issue 001 using the Task 6 seed title `Issue 001` and Wu Wei subtitle/theme.
- `system-settings` returns the `Ink & East` site name.

If the seed data is missing, run:

```bash
pnpm --filter web seed
```

The check script does not automatically seed and does not write to the database.

## Local Runtime Verification Passed

- The user verified PR #16 in a local Windows development environment.
- Task 6 seed data was present and refreshed with `pnpm --filter web seed`.
- `pnpm --filter web check:public-reads` completed successfully.
- The check output confirmed: `Public read checks passed.`
- The check output confirmed that the public query layer read 5 public articles, 7 active topics, and Issue 001.
- The private draft article check passed because `draft-a-private-editorial-note` was not returned by the public article query.
- The homepage opened successfully on the local dev server.
- Payload Admin opened successfully on the local dev server.
- Seeded Payload Admin data remained visible after Task 7 verification.
- No red application error was reported.
- This verification did not add frontend routes, route handlers, API endpoints, UI components, SEO metadata output, redirect middleware, membership, payment, Reader Notes, Community, service systems, or Task 8 work.

## Explicit non-goals

Task 7 did not create frontend routes, route handlers, or UI. In particular, it did not add:

- `/articles/[slug]`, `/issues`, `/collections`, `/topics`, archive, or search routes.
- `route.ts` HTTP API endpoints or `/api/public`.
- Frontend UI components.
- SEO metadata output.
- Redirect middleware.
- Full-text search.
- Old article imports or WordPress connections.
- Membership, payment, Reader Notes, Community, Letters, service systems, shop integrations, email, S3/R2, or Stripe.

`preview/` was not modified, deleted, moved, or copied into `apps/web`.

Task 7 stops at the public query layer and does not enter Task 8.
