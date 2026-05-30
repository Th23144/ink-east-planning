# Ink & East Level 1 · Task 4 · Core Payload Collections

## Scope

Task 4 adds the Level 1 backend data model for the Ink & East source-native journal system. The work is limited to Payload CMS collections and one Payload Global inside `apps/web`.

This task does not add frontend pages, seed data, permissions, migration jobs, redirects, commerce, membership, reader features, or service workflows. It also does not continue into Task 5.

## Created Collections and Global

### Existing: Users

`Users` was created in Task 3 as the Payload auth collection. Task 4 keeps it registered and does not redesign it.

### Articles

`articles` stores long-form editorial content for the Level 1 journal prototype. It includes title, slug, subtitle, deck, excerpt, body, body format, author, issue, collection, topic, visibility, VIP marker, teaser, status, source type, publish date, SEO, legacy record, and reading time fields.

Relationships:

- `author` → `authors`
- `issue` → `issues`
- `collections` → `editorial-collections`
- `topics` → `topics`
- `legacy_record` → `legacy-article-records`

### Issues

`issues` stores magazine-style issue records. It includes issue number, slug, title, subtitle, theme, editor note, cover image, cover symbol, featured article, ordered article list, status, visibility, publish date, and SEO fields.

Relationships:

- `cover_image` → `media`
- `featured_article` → `articles`
- `ordered_articles.article` → `articles`

### Collections

`editorial-collections` stores curated editorial groupings and appears in the Payload Admin as `Collections`. It includes title, slug, subtitle, description, cover image, ordered article list, status, visibility, sort order, and SEO fields.

Relationships:

- `cover_image` → `media`
- `articles.article` → `articles`

### Topics

`topics` stores editorial taxonomy records. It includes name, slug, description, symbol, parent topic, sort order, status, and SEO fields.

Relationships:

- `parent` → `topics`

### Authors

`authors` stores contributor profiles. It includes name, slug, bio, avatar, role label, and status fields.

Relationships:

- `avatar` → `media`

### Media

`media` is the Level 1 upload collection for editorial assets. It includes alt text, caption, credit, and usage rights fields. It is intended for issue covers, article Open Graph images, collection covers, author avatars, and future media needs.

Task 4 does not add private file permissions and does not connect S3 or R2.

### Legacy Article Records

`legacy-article-records` stores migration planning records for old content assets. It includes legacy ID, URL, slug, title, raw body, category, tags, builder-markup flag, content quality, migration status, editorial decision, new article relationship, redirect rule relationship, and editor notes.

Relationships:

- `new_article` → `articles`
- `redirect_rule` → `redirect-rules`

This is only a migration record structure. Task 4 does not import the old 123 blog posts.

### Redirect Rules

`redirect-rules` stores planned redirect records for migration work. It includes from URL, to URL, status code, reason, status, and linked legacy article fields.

Relationships:

- `linked_legacy_article` → `legacy-article-records`

Task 4 does not implement Next.js redirect middleware.

### System Settings Global

`system-settings` is a Payload Global, not a collection. It appears under the Payload Admin `System` group and contains grouped fields for:

- Brand: site name, site subtitle, and brand statement.
- SEO Defaults: default SEO title, default SEO description, and default Open Graph image.
- Shop Bridge: shop bridge URL and label.

Relationships:

- `seo_defaults.default_og_image` → `media`

## SEO Fields

Articles, Issues, Collections, and Topics each include a local `seo` group with:

- `seo_title`
- `seo_description`
- `canonical_url`
- `og_title`
- `og_description`
- `og_image`
- `noindex`

Task 4 intentionally keeps these fields local to each collection. Shared field abstractions are deferred to a later task.

## Explicit Non-Goals

Task 4 does not include:

- Seed data.
- Frontend routes or public pages.
- Access rules or a full permissions system.
- Public read filtering.
- SEO metadata rendering.
- Redirect middleware.
- Old article imports.
- WordPress, PHP, WooCommerce, Shopify, CartFlows, Elementor, or another CMS stack.
- Membership, payment, reader notes, community, or service systems.
- Task 5 work.

## Preview Directory Confirmation

Task 4 does not modify, delete, move, or copy anything from `preview/`. The `preview/` directory remains a static visual preview area only.
