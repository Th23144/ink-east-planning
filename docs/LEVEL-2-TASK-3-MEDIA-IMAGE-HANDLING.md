# Level 2 Task 3: Media / Image Handling

Task 3 adds the first safe media handling layer for the Ink & East source-native site.

The goal is to let editors upload images in Payload, attach images to articles, and allow public article pages and archive cards to display those images without weakening the public/private content boundary.

## Scope

Included:

- Hardened the existing `media` collection admin metadata.
- Restricted media uploads to common image MIME types.
- Added article-level `hero_image` relationship field.
- Added article-level `hero_image_caption_override` field.
- Added article-level `inline_images` array for optional body-adjacent article images.
- Added public media DTO mapping.
- Added public media fields to article list/detail DTOs.
- Added reusable article image display components.
- Article detail pages now render hero images and inline images when present.
- Article list cards now render hero images when present.
- Public read checks now confirm image DTO boundaries remain stable.
- CSS was extended for article images, captions, list-card images, and inline image blocks.

## Public data boundary

Task 3 does not change article access rules or public query filters.

Article pages and article archive/search results still depend on the public article query layer. Public article output still requires:

- `status = published`
- `visibility = public`

Media metadata is mapped into a controlled public DTO shape before it reaches frontend components.

## Media behavior

The public media DTO exposes only the display-safe fields needed by frontend pages:

- `id`
- `alt`
- `url`
- `filename`
- `mimeType`
- `width`
- `height`
- `caption`
- `credit`

A media item without `alt` is not mapped into the public DTO.

## Not included

Not included in this task:

- Cloud storage integration.
- CDN configuration.
- Image optimization service setup.
- Automatic image seed files.
- In-body markdown image parsing.
- Drag-and-drop article layout builder.
- Final visual design.
- Accounts, membership, payment, comments, notes, community, or service systems.
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
- `/articles`
- `/search?q=Wu%20Wei`
- `/articles/draft-a-private-editorial-note`
- `/admin`

In Payload Admin, verify:

- `Media` opens under Editorial.
- Media list columns show useful metadata such as alt, caption, credit, and updated time.
- `Articles → The Art of Doing Less` includes a `hero_image` field.
- `Articles → The Art of Doing Less` includes a `hero_image_caption_override` field.
- `Articles → The Art of Doing Less` includes an `inline_images` array.

Optional manual media check:

- Upload a small JPEG, PNG, WebP, or GIF in `Media`.
- Give it required `alt` text.
- Attach it as `hero_image` to a public article.
- Save the article.
- Confirm the article detail page renders the image.
- Confirm `/articles` renders the image in the article card.
- Remove the image relationship or run seed again to restore the baseline.

Expected result:

- Existing public article pages still work without images.
- Article image fields are available in admin.
- Uploaded images can be attached to articles and rendered publicly when present.
- Private draft content remains unavailable.
- `check:public-reads` passes.
- No red application error is shown.
