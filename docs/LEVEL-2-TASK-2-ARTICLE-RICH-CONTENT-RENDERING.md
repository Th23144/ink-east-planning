# Level 2 Task 2: Article Rich Content Rendering

Task 2 improves article body rendering while keeping the existing source-native architecture and public data boundary.

## Scope

Included:

- Added a safe `ArticleBody` renderer component.
- Article detail pages now render body content through `ArticleBody` instead of a raw text container.
- Markdown seed examples were added for selected public articles.
- Plain text body support remains in place.
- Public read checks now confirm both markdown and plain text body formats are still returned through the public query layer.
- CSS was extended for article headings, blockquotes, lists, dividers, and format notes.

## Supported body behavior

The renderer supports:

- Plain text paragraphs.
- Markdown-style headings.
- Markdown-style blockquotes.
- Ordered and unordered lists.
- Horizontal dividers.
- Safe display of HTML-format records as text.

Raw HTML is not rendered as HTML in this task. This avoids adding an unsafe rendering path before a sanitizer policy exists.

## Public data boundary

Task 2 does not change access rules or public query filters.

Article pages still depend on `getPublicArticleBySlug`, so article detail pages still require:

- `status = published`
- `visibility = public`

Private draft content must remain unavailable through public pages.

## Not included

Not included in this task:

- Schema changes.
- Payload rich text editor migration.
- New HTTP API endpoints.
- `/api/public`.
- Raw HTML rendering.
- Sanitizer integration.
- External markdown packages.
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

- `/articles/the-art-of-doing-less`
- `/articles/a-room-that-lets-you-return`
- `/articles/notes-on-quiet-attention`
- `/articles/draft-a-private-editorial-note`
- `/articles`
- `/search?q=Wu%20Wei`
- `/admin`

Expected result:

- `The Art of Doing Less` displays rendered headings, a quote, a list, and a divider.
- `A Room That Lets You Return` displays rendered headings and an ordered list.
- `Notes on Quiet Attention` still displays plain text paragraphs correctly.
- The private draft article still does not expose private content.
- Archive and search pages still work.
- Payload Admin still opens.
- `check:public-reads` passes.
- No red application error is shown.
