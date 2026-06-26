# Level 2 Task 1: Search / Archive / Browse

Task 1 begins the Level 2 feature phase by adding a small, source-native browse baseline for Ink & East.

This task keeps the Level 1 architecture boundaries intact. It does not add a public HTTP API, external search service, client-side data fetching, membership, payment, comments, Reader Notes, Community, or final visual design.

## Scope

Task 1 includes:

- A public article archive route at `/articles`.
- A public search route at `/search`.
- A public query helper for searching published/public articles.
- Search coverage for article title, subtitle, deck, excerpt, and body fields.
- A public read check that confirms search does not expose the private draft fixture.
- Minimal styling for the search form, search results, article archive cards, and home links.
- Home navigation links to Articles and Search.

## Public routes added

- `/articles`
- `/search`
- `/search?q=Wu+Wei`

## Public boundary

Search and archive results are constrained to:

- `status = published`
- `visibility = public`

The private draft fixture remains excluded:

- `/articles/draft-a-private-editorial-note`

The public read check now verifies that a search for `private draft` does not return the private draft article.

## Architecture boundary

Task 1 uses the existing source-native flow:

```text
Payload CMS
→ public query layer
→ Next.js server-rendered pages
→ public frontend
```

Task 1 does not create:

- `route.ts` public API handlers
- `/api/public`
- external search indexes
- Algolia
- Meilisearch
- client-side fetch logic
- authentication flows
- account systems
- membership or payment systems

## Local verification checklist

Start from the PR branch:

```bash
git checkout main
git pull
git fetch origin pull/22/head:pr-22 -f
git checkout pr-22
pnpm install
docker compose up -d postgres
pnpm --filter web seed
pnpm --filter web check:public-reads
cd apps/web
pnpm dev -- -p 3010
```

Then verify:

- `/` opens and shows Articles / Search links.
- `/articles` opens and lists only public published articles.
- `/search` opens with an empty search form state.
- `/search?q=Wu+Wei` returns public results.
- `/search?q=private+draft` does not expose `/articles/draft-a-private-editorial-note`.
- `/search?q=unlikely-no-result-query` shows the empty result state.
- `/articles/draft-a-private-editorial-note` still shows the no-public-information / not-found experience.
- Existing routes still open:
  - `/issues`
  - `/issues/issue-001-wu-wei`
  - `/topics`
  - `/topics/old-texts`
  - `/collections`
  - `/collections/reading-the-old-texts`
- `/admin` remains accessible.
- No red application error is shown.

## Expected result

The site should now have a basic public browsing layer: users can open an article archive, search the public article corpus, and continue browsing by issue, topic, and collection without exposing draft/private content.
