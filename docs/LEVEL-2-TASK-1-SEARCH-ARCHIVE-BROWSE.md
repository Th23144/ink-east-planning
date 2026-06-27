# Level 2 Task 1: Search / Archive / Browse

Task 1 starts Level 2 feature work by adding a minimal public browse layer to the existing Ink & East source-native baseline.

## Scope

Included:

- Public article archive at `/articles`.
- Public article search at `/search`.
- Search support in the existing public article query function.
- Shared public navigation component.
- Shared article list component.
- Homepage links to the article archive and search page.
- Article detail links to related issue, collections, and topics.
- Public read checks for basic search behavior.
- Baseline CSS for archive, browse, and search pages.

## Public data boundary

Archive and search continue to use the public query layer.

Article results must still require:

- `status = published`
- `visibility = public`

Draft or private records must not appear in archive results, search results, or public detail pages.

## Routes

Added:

- `/articles`
- `/search`

Existing routes remain in place:

- `/`
- `/articles/[slug]`
- `/issues`
- `/issues/[slug]`
- `/topics`
- `/topics/[slug]`
- `/collections`
- `/collections/[slug]`

## Not included

Not included in this task:

- New HTTP API endpoints.
- Client-side data fetching.
- External search services.
- Pagination.
- Accounts, membership, payment, comments, notes, community, or service systems.
- Final visual design.
- Preview migration.

## Local verification checklist

From the PR branch:

```bash
pnpm install
docker compose up -d postgres
pnpm --filter web seed
pnpm --filter web check:public-reads
cd apps/web
pnpm dev -- -p 3010
```

Then verify:

- `/`
- `/articles`
- `/search`
- `/search?q=Wu%20Wei`
- `/search?q=Private%20Editorial%20Note`
- `/issues`
- `/issues/issue-001-wu-wei`
- `/topics`
- `/topics/old-texts`
- `/collections`
- `/collections/reading-the-old-texts`
- `/articles/the-art-of-doing-less`
- `/articles/draft-a-private-editorial-note`
- `/admin`

Expected result:

- Archive shows public articles.
- Search form works.
- A normal public query returns public articles.
- A query matching private-only content does not expose private content.
- Existing issue, topic, collection, article, and admin routes still work.
- No red application error is shown.

## Local Runtime Verification Passed

- The user verified PR #22 in a local Windows development environment.
- The public article archive at `/articles` opened successfully.
- The public search route at `/search` opened successfully.
- `/search?q=Wu%20Wei` returned public article results.
- `/search?q=Private%20Editorial%20Note` did not expose the private draft article.
- `/articles/draft-a-private-editorial-note` did not expose private draft content.
- Existing issue, topic, collection, article, and admin routes continued to work.
- `check:public-reads` passed after seed.
- No red application error was reported.
- This verification did not add schema changes, access helper changes, database adapter changes, auth changes, HTTP API endpoints, external search services, accounts, membership, payment, comments, notes, community, service systems, final visual design, or preview migration.
