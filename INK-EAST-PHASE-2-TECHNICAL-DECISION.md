# Ink & East · Phase 2 Technical Decision Plan

- 本文件是 Project 3 / Ink & East 长期主站级项目的 Phase 2 技术决策规划。
- 本文件延续：
  - `INK-EAST-SOURCE-ARCHITECTURE.md`
  - `INK-EAST-PHASE-1-SOURCE-PLAN.md`
- Project 3 不考虑 WordPress。
- Project 3 不使用 WordPress 作为过渡方案。
- Project 3 是源码站 / 独立内容产品 / 主站级数字期刊系统。
- 旧博客 123 篇文章只是 legacy content assets。
- Phase 2 的目标不是写代码，而是把 Phase 1 的架构转成 Level 1 Architecture Prototype 的可执行技术蓝图。
- 本文件覆盖 Phase 2A–2G。
- Phase 2H 是本文档入库 PR。

## 0. Scope

This document covers:

- Phase 2A · Technical Stack Final Decision
- Phase 2B · Level 1 Architecture Prototype Scope Lock
- Phase 2C · Repo / Monorepo / Project Structure Plan
- Phase 2D · Data Model Implementation Blueprint
- Phase 2E · Payload CMS / Admin Collections Blueprint
- Phase 2F · Auth / Permission / Access Control Prototype Plan
- Phase 2G · Level 1 Development Task Breakdown

This document does not start development.
This document does not create a source project.
This document does not install dependencies.
This document does not modify preview pages.
This document does not introduce WordPress.

## 1. Phase 2A · Technical Stack Final Decision

Main stack:

- Next.js
- Payload CMS
- PostgreSQL

Supporting directions:

- S3-compatible object storage later
- simple search first, PostgreSQL full-text / Meilisearch / Typesense later
- Resend / Postmark / Amazon SES later for email
- Stripe first for future payments
- crypto payment later as independent service
- shop remains separate on shop.inkandeast.com or equivalent

Next.js + Payload CMS + PostgreSQL is the formal main route for Project 3 because it best supports:

- source-native architecture
- real Editorial CMS
- content models
- admin collections
- access control
- private content protection
- service status workflows
- legacy article migration
- SEO / redirect management
- long-term data ownership
- not depending on WordPress

Candidate route review:

Astro + Payload + PostgreSQL:

- strong for content reading
- kept as a backup
- not main route because Ink & East needs membership, private pages, service status, permissions, and admin integration

Directus + Next.js:

- useful backup
- not main route because business logic may become split between frontend and external backend

Strapi + Next.js / Astro:

- mature headless CMS
- not main route because Ink & East needs deeper source-native business workflows

Supabase + Next.js + custom admin:

- strong for database/auth/storage
- not main route because editorial CMS and admin workflows would require too much custom work at Level 1

Laravel full-stack:

- powerful business backend
- not main route because current project direction better fits TypeScript / Next.js / Payload and AI-assisted development

Pure Markdown / MDX static site:

- not suitable as full architecture
- can be a content format later, but not the full system

Level 1 stack:

- Next.js
- Payload CMS
- PostgreSQL
- local development storage
- basic admin login
- basic SEO fields
- LegacyArticleRecord
- RedirectRule
- 3–5 legacy article samples

Level 1 must not include:

- full membership
- full payment
- Reader Notes
- Community
- Patron Vote
- Custom Reading payment
- Custom Ebook project management
- 123 article full migration
- real shop connection

## 2. Phase 2B · Level 1 Architecture Prototype Scope Lock

Level 1 only verifies architecture. It is not a public launch, not final visual design, and not a commercial product.

Level 1 verifies:

1. Next.js + Payload + PostgreSQL can support Ink & East.
2. Payload Admin can manage core content.
3. Frontend routes can read and display content.
4. Issue / Article / Collection / Topic relationships work.
5. SEO / Redirect / LegacyArticleRecord are first-class structures.
6. 3–5 legacy article samples can be tracked and mapped.

Required frontend pages:

- `/`
- `/issues`
- `/issues/001`
- `/articles/:slug`
- `/archive`
- `/collections/:slug`
- `/topics/:slug`

Optional:

- `/search` as placeholder only

Required admin capabilities:

- Articles
- Issues
- Collections
- Topics
- Authors
- Media
- SEO fields
- Legacy Article Records
- Redirect Rules
- System Settings

Required sample data:

- 1 Issue
- 5–8 Articles
- 2–3 Collections
- 5–7 Topics
- 1–2 Authors
- 3–5 LegacyArticleRecords
- 3–5 RedirectRules
- Media samples
- SystemSettings

Legacy article samples must cover:

- keep
- rewrite
- archive
- discard
- optional builder markup cleaning sample

Level 1 explicitly does not do:

- final visual design
- full mobile refinement
- full membership
- Reader / Patron payment
- Reading Room
- full VIP Library
- Reader Notes
- Community
- Patron Vote
- Custom Reading payment
- Custom Ebook project management
- Quote system
- PaymentRecord full implementation
- email automation
- real shop connection
- product checkout
- full 123 article migration
- complex search
- multilingual system
- analytics dashboard

Level 1 success means:

- architecture route is viable
- content model works
- admin is usable enough
- legacy migration structure works
- project can continue to Level 2 Content Alpha

## 3. Phase 2C · Repo / Monorepo / Project Structure Plan

Project 3 future source project should use a monorepo-lite structure.

Recommended root structure:

```text
ink-east/
- apps/
  - web/
- scripts/
- docs/
- package.json
- pnpm-workspace.yaml
- .env.example
- README.md
```

`apps/web` is the only main app in Level 1.

`apps/web` should contain:

- Next.js frontend
- Payload CMS
- Payload Admin
- Payload API
- Payload collections
- basic frontend routes
- basic query utilities
- basic components

Recommended `apps/web` structure:

```text
apps/web/
- src/
  - app/
  - collections/
  - components/
  - fields/
  - lib/
  - payload/
  - styles/
  - types/
- public/
- payload.config.ts
- next.config.ts
- package.json
- tsconfig.json
```

Recommended app route groups:

```text
src/app/
- (site)/
  - page.tsx
  - issues/
  - articles/
  - archive/
  - collections/
  - topics/
  - search/
- (payload)/
  - admin/
  - api/
- layout.tsx
- globals.css
```

Payload collections:

```text
src/collections/
- Articles.ts
- Issues.ts
- Collections.ts
- Topics.ts
- Authors.ts
- Media.ts
- LegacyArticleRecords.ts
- RedirectRules.ts
- SystemSettings.ts
- index.ts
```

Shared fields:

```text
src/fields/
- seoFields.ts
- slugField.ts
- statusField.ts
- visibilityField.ts
- richTextField.ts
- index.ts
```

Payload utilities:

```text
src/payload/
- access/
- hooks/
- seed/
- utilities/
```

Scripts:

```text
scripts/legacy/
- sample-legacy-articles.json
- normalize-legacy-article.ts
- import-legacy-samples.ts
```

Important engineering rules:

- one main app first
- do not split into frontend/cms/api/admin repos at Level 1
- do not create microservices
- do not copy preview HTML as source code
- do not introduce WordPress/PHP/WooCommerce/Shopify directories
- do not over-engineer packages too early
- pnpm workspace is enough
- Turborepo is not required for Level 1

## 4. Phase 2D · Data Model Implementation Blueprint

Required Level 1 collections:

- Articles
- Issues
- Collections
- Topics
- Authors
- Media
- LegacyArticleRecords
- RedirectRules
- SystemSettings

Do not implement in Level 1:

- MembershipPlans
- MembershipSubscriptions
- ReaderNotes
- Letters full version
- EditorialResponses
- VoteCampaigns
- ServiceBriefs full version
- CustomReadingRequests
- CustomEbookProjects
- Quotes
- PaymentRecords
- DeliveryRecords
- AuditLogs full version
- EmailTemplates

Articles fields:

- title
- slug
- subtitle
- deck
- excerpt
- body
- body_format
- author
- issue
- collections
- topics
- visibility
- is_vip
- teaser
- status
- source_type
- published_at
- seo
- legacy_record
- reading_time_minutes

Article visibility options:

- public
- reader
- patron
- private
- editor_only

Level 1 only actually supports:

- public
- private / draft not public

Article status options:

- draft
- review
- scheduled
- published
- archived

Article source_type:

- original
- legacy_import
- letter_response
- custom_reading_output

Issues fields:

- number
- slug
- title
- subtitle
- theme
- editor_note
- cover_image
- cover_symbol
- featured_article
- ordered_articles
- status
- visibility
- published_at
- seo

`ordered_articles` should support:

- article
- label
- note
- sort_order

Collections fields:

- title
- slug
- subtitle
- description
- cover_image
- articles
- status
- visibility
- sort_order
- seo

Collection articles should support:

- article
- note
- sort_order

Topics fields:

- name
- slug
- description
- symbol
- parent
- sort_order
- status
- seo

Initial Topics:

- Old Texts
- Quiet Stories
- Space & Ritual
- Mind & Emotion
- Eastern Thought
- Objects & Meaning
- Modern Questions

Authors fields:

- name
- slug
- bio
- avatar
- role_label
- status

Media fields:

- alt
- caption
- credit
- usage_rights

LegacyArticleRecords fields:

- legacy_id
- legacy_url
- legacy_slug
- legacy_title
- legacy_body_raw
- legacy_category
- legacy_tags
- has_builder_markup
- content_quality
- migration_status
- decision
- new_article
- redirect_rule
- editor_notes

Legacy decision options:

- undecided
- keep
- rewrite
- archive
- discard

Legacy migration_status options:

- pending
- imported
- reviewed
- cleaned
- article_created
- redirect_created
- published
- redirected
- discarded

RedirectRules fields:

- from_url
- to_url
- status_code
- reason
- status
- linked_legacy_article

Redirect status_code:

- 301
- 302
- 410

Redirect status:

- draft
- active
- disabled

SystemSettings should be a Payload Global if possible.

SystemSettings fields:

- site_name
- site_subtitle
- brand_statement
- default_seo_title
- default_seo_description
- default_og_image
- shop_bridge_url

Shared SEO group:

- seo_title
- seo_description
- canonical_url
- og_title
- og_description
- og_image
- noindex

Seed data:

- 1 Author
- 7 Topics
- 2 Collections
- 1 Issue
- 5–8 Articles
- 3–5 LegacyArticleRecords
- 3–5 RedirectRules
- SystemSettings

## 5. Phase 2E · Payload CMS / Admin Collections Blueprint

Payload Admin Level 1 groups:

Editorial:

- Articles
- Issues
- Collections
- Topics
- Authors
- Media

Migration:

- Legacy Article Records
- Redirect Rules

System:

- System Settings

Do not show admin groups for:

- Membership
- Reader Notes
- Letters
- Services
- Payments
- Community
- Votes

Articles admin:

- group: Editorial
- title: title
- default columns: title, status, visibility, source_type, author, published_at, updatedAt
- search: title, slug, deck, excerpt
- tabs:
  - Main
  - Body
  - Relations
  - SEO
  - Publishing / Internal

Articles Main:

- title
- slug
- subtitle
- deck
- excerpt

Articles Body:

- body_format
- body
- teaser

Articles Relations:

- author
- issue
- collections
- topics
- legacy_record

Articles SEO:

- shared SEO group

Articles Publishing / Internal:

- status
- visibility
- is_vip
- source_type
- published_at
- reading_time_minutes

Issues admin:

- group: Editorial
- title: title
- columns: number, title, theme, status, published_at, updatedAt
- tabs:
  - Main
  - Issue Contents
  - SEO
  - Publishing

Issue Contents:

- featured_article
- ordered_articles with article / label / note / sort_order

Collections admin:

- group: Editorial
- title: title
- columns: title, status, visibility, sort_order, updatedAt
- tabs:
  - Main
  - Collection Contents
  - SEO
  - Publishing

Topics admin:

- group: Editorial
- title: name
- fields: name, slug, description, symbol, parent, sort_order, status, seo

Authors admin:

- group: Editorial
- title: name
- fields: name, slug, bio, avatar, role_label, status

Media admin:

- group: Editorial
- upload collection
- fields: alt, caption, credit, usage_rights

LegacyArticleRecords admin:

- group: Migration
- title: legacy_title
- columns: legacy_title, decision, migration_status, content_quality, has_builder_markup, new_article, updatedAt
- search: legacy_title, legacy_slug, legacy_url, legacy_category
- tabs:
  - Legacy Source
  - Review
  - Mapping
  - Internal Notes

RedirectRules admin:

- group: Migration
- title: from_url
- columns: from_url, to_url, status_code, status, linked_legacy_article, updatedAt

SystemSettings:

- use Payload Global if possible
- groups:
  - Brand
  - SEO Defaults
  - Shop Bridge

Level 1 admin rule:
The admin proves content, migration, SEO, and settings can be operated. It must not become membership/payment/community admin yet.

## 6. Phase 2F · Auth / Permission / Access Control Prototype Plan

Level 1 only needs:

1. Protect Payload Admin.
2. Separate admin and editor.
3. Public frontend reads only published + public content.
4. Reserve future VIP / Reader / Patron permission fields.

Level 1 roles:

- admin
- editor

Admin can:

- access Payload Admin
- create / read / update / delete all Level 1 content
- manage SystemSettings
- manage backend users

Editor can:

- access Payload Admin
- create / read / update Articles, Issues, Collections, Topics, Authors, Media
- create / read / update LegacyArticleRecords and RedirectRules
- not delete key records
- not freely modify SystemSettings unless explicitly allowed

Level 1 Users fields:

- email
- password
- name
- role
- status

Do not add at Level 1:

- membership_plan
- subscription_status
- reader_profile
- patron_profile
- linked_shop_account_id
- service_client_profile

Frontend public read rule:

- status = published
- visibility = public

Article frontend rule:

- only published + public returns full body
- draft / review / scheduled / archived / private / editor_only / reader / patron returns 404 in Level 1

Issue frontend rule:

- only published + public Issue visible
- ordered_articles must filter to published + public Articles

Collection frontend rule:

- only published + public Collection visible
- Collection articles must filter to published + public Articles

Topic frontend rule:

- active Topic visible
- Article list filters to published + public Articles

VIP future rule:

- unauthorized users must never receive full body
- they may only receive title / deck / teaser / metadata in future phases
- Level 1 does not implement full VIP, but must not make future VIP impossible

Access helper concepts:

- `isAdmin(user)`
- `isEditor(user)`
- `canAccessAdmin(user)`
- `canReadPublished(resource)`
- `canReadFullArticle(user, article)`
- `canEditContent(user)`
- `canDeleteContent(user)`
- `canManageSystemSettings(user)`

Level 1 security bottom line:

- draft not public
- private not public
- LegacyArticleRecords not public
- RedirectRules not exposed as a public list
- Admin requires login
- Editor cannot freely delete key content
- SystemSettings restricted
- VIP full body must be protected server-side in future, not hidden by CSS

## 7. Phase 2G · Level 1 Development Task Breakdown

Level 1 development task table:

1. Task 1 · Initialize Source Project
2. Task 2 · Configure Database / Environment
3. Task 3 · Install and Wire Payload CMS
4. Task 4 · Build Level 1 Collections
5. Task 5 · Build Shared Fields and Access Rules
6. Task 6 · Seed Initial Content
7. Task 7 · Build Frontend Route Skeleton
8. Task 8 · Connect Frontend to Payload Data
9. Task 9 · Implement Basic SEO / Metadata
10. Task 10 · Implement Legacy Migration Sample Flow
11. Task 11 · Implement Basic Public Access Filtering
12. Task 12 · Final Level 1 Verification Report

### Task 1 · Initialize Source Project

- goal: create the minimal future source project shell for Level 1.
- allowed: create the approved monorepo-lite structure, one `apps/web` app, workspace files, environment example, and README.
- forbidden: create multiple apps, microservices, packages, WordPress/PHP/WooCommerce/Shopify directories, or copy preview HTML as source code.
- acceptance criteria: the scaffold matches the approved structure and contains no product features yet.
- stop point: stop immediately after the scaffold PR is ready and report changed files.

### Task 2 · Configure Database / Environment

- goal: prepare local PostgreSQL and environment configuration for Payload.
- allowed: add local database configuration, documented environment variables, and safe development defaults.
- forbidden: connect production databases, payment services, email services, shop services, or analytics services.
- acceptance criteria: local environment requirements are documented and the app can target a local PostgreSQL database.
- stop point: stop after configuration verification and wait for approval.

### Task 3 · Install and Wire Payload CMS

- goal: install Payload CMS into the single Next.js app and expose Payload Admin/API in the approved route group.
- allowed: Payload setup, admin route, API route, base config, and development storage.
- forbidden: add membership, payments, community modules, full services, or alternate CMS routes.
- acceptance criteria: Payload Admin requires login and the app can boot with the base CMS wiring.
- stop point: stop after Payload wiring works locally.

### Task 4 · Build Level 1 Collections

- goal: implement the approved Level 1 collections and SystemSettings global.
- allowed: Articles, Issues, Collections, Topics, Authors, Media, LegacyArticleRecords, RedirectRules, and SystemSettings.
- forbidden: implement membership, payments, Reader Notes, Community, Votes, full service systems, or all 123 legacy articles.
- acceptance criteria: required collections exist with approved fields and admin grouping.
- stop point: stop after collection schemas are reviewed.

### Task 5 · Build Shared Fields and Access Rules

- goal: centralize shared SEO, slug, status, visibility, rich text, and access helper concepts.
- allowed: shared field utilities and Level 1 access rules for admin/editor/public reads.
- forbidden: implement full VIP access, paid access, shop account linking, or CSS-only content protection.
- acceptance criteria: public reads are limited to published + public content and admin access is role-aware.
- stop point: stop after access rules are testable.

### Task 6 · Seed Initial Content

- goal: create the approved Level 1 seed dataset.
- allowed: 1 Author, 7 Topics, 2 Collections, 1 Issue, 5–8 Articles, 3–5 LegacyArticleRecords, 3–5 RedirectRules, media samples, and SystemSettings.
- forbidden: migrate all 123 legacy articles or import production customer/order/payment data.
- acceptance criteria: seed data covers keep, rewrite, archive, discard, and optional builder markup cleaning samples.
- stop point: stop after seed import can be run locally and verified.

### Task 7 · Build Frontend Route Skeleton

- goal: create the required public route skeletons without final visual design.
- allowed: `/`, `/issues`, `/issues/001`, `/articles/:slug`, `/archive`, `/collections/:slug`, `/topics/:slug`, and optional `/search` placeholder.
- forbidden: final visual design, full mobile refinement, product checkout, Reading Room, VIP Library, or copied preview HTML.
- acceptance criteria: routes render simple structured pages and clearly show placeholder status where needed.
- stop point: stop after route skeleton review.

### Task 8 · Connect Frontend to Payload Data

- goal: read approved content from Payload into the public route skeletons.
- allowed: basic query utilities and frontend data display for Issues, Articles, Collections, Topics, Authors, and Media.
- forbidden: expose drafts, private content, LegacyArticleRecords public lists, RedirectRules public lists, or future paid content bodies.
- acceptance criteria: frontend displays only approved published + public content.
- stop point: stop after data connection verification.

### Task 9 · Implement Basic SEO / Metadata

- goal: use shared SEO fields for basic metadata on Level 1 routes.
- allowed: title, description, canonical, OG metadata, noindex handling, and default settings fallback.
- forbidden: complex SEO automation, analytics dashboards, multilingual SEO, or full redirect engine scope creep.
- acceptance criteria: routes can resolve per-entry SEO with SystemSettings fallback.
- stop point: stop after metadata verification.

### Task 10 · Implement Legacy Migration Sample Flow

- goal: prove the legacy sample tracking and redirect mapping workflow.
- allowed: 3–5 sample legacy records, mapping to new articles, redirect rules, and review statuses.
- forbidden: migrate all 123 old articles or treat old WordPress structure as the new architecture.
- acceptance criteria: sample records show decision, migration status, new article mapping, and redirect mapping.
- stop point: stop after sample flow report.

### Task 11 · Implement Basic Public Access Filtering

- goal: verify server-side filtering for public frontend reads.
- allowed: route-level and query-level filters for published + public content.
- forbidden: full membership, paid content unlocks, Reader/Patron logic, or client-side-only content hiding.
- acceptance criteria: draft, review, scheduled, archived, private, editor_only, reader, and patron content does not return full body publicly.
- stop point: stop after access filtering verification.

### Task 12 · Final Level 1 Verification Report

- goal: document whether Level 1 proves the architecture route.
- allowed: verification report, screenshots if useful, known gaps, and Level 2 recommendations.
- forbidden: new feature development, stack switching, production launch, or public commercial activation.
- acceptance criteria: report covers architecture viability, content model, admin usability, legacy migration structure, and recommended next step.
- stop point: stop after the report PR is ready.

Strictly forbidden during Level 1:

1. Do not introduce WordPress / PHP / WooCommerce / Shopify.
2. Do not modify preview HTML into production source.
3. Do not develop full membership.
4. Do not develop Reader / Patron payment.
5. Do not develop Reading Room.
6. Do not develop full VIP Library.
7. Do not develop Reader Notes.
8. Do not develop Community.
9. Do not develop Patron Vote.
10. Do not develop Custom Reading payment.
11. Do not develop Custom Ebook project management.
12. Do not connect Stripe.
13. Do not connect real email service.
14. Do not connect real shop.
15. Do not migrate all 123 old articles.
16. Do not create complex microservices.
17. Do not freely change the chosen stack.
18. Do not bypass PR and modify main directly.

Codex execution rule:

- One task at a time.
- Stop after each task.
- Output changed files, diff summary, verification, and next recommended task.
- Do not execute Task 1–12 in one continuous run.

Level 1 PR strategy:

- PR 1: Project scaffold
- PR 2: Payload CMS + database
- PR 3: Level 1 collections
- PR 4: Seed data
- PR 5: Frontend routes
- PR 6: Payload data connection
- PR 7: SEO + access filtering
- PR 8: Legacy migration sample
- PR 9: Verification report

## 8. Phase 2 Conclusion

Phase 2 is complete when this document is merged.

Phase 2 establishes:

- official tech stack
- Level 1 architecture prototype scope
- repo structure
- Level 1 data model
- Payload admin blueprint
- access control prototype
- development task breakdown

Next possible step after Phase 2:

- Decide whether to start Level 1 Architecture Prototype
- If yes, begin with Task 1 only
- Do not let Codex execute all tasks at once
- Do not start coding until the user explicitly approves
