# Project 3 · Ink & East Current Handoff Audit

> Repository: `Th23144/ink-east-planning`  
> Scope: Project 3 · Ink & East source-native main site  
> Status: handoff / reset document after static-preview and source-native work became disconnected  
> Purpose: make the project understandable to a new AI agent, developer, or future project window before any new development starts.

---

## 0. How to use this file

Read this file before starting any new Project 3 task.

This file is not a marketing page, not a design draft, and not a feature specification by itself. It is the current handoff ledger that explains:

1. why the project exists;
2. what the original Ink & East product goal was;
3. what the early static preview work completed;
4. what the later source-native codebase completed;
5. where the two tracks became disconnected;
6. what is still missing;
7. what the next correct sequence should be.

If this file conflicts with a future updated handoff file, the newer handoff file should win. If this file conflicts with older WordPress-oriented planning files, verify whether the task is still Project 3 source-native work before using the older file.

---

## 1. Repository context

This repository contains multiple historical layers:

1. early planning and static preview work for Spatial Flow and Ink & East;
2. Ink & East product specification documents;
3. WordPress-oriented field and implementation planning documents from an earlier engineering direction;
4. the later Project 3 source-native architecture plan;
5. the current `apps/web` Next.js + Payload CMS + PostgreSQL source-native prototype.

The most important correction is that the repository is not only a code repository. It is also a long-running planning and handoff repository. A new agent must not judge the project only from `apps/web`.

Important root documents include:

- `PROJECT-CONTROL-MASTER.md`
- `INK-EAST-BRIEF.md`
- `INK-EAST-ROADMAP.md`
- `.kiro/steering/ink-east-handoff.md`
- `DESIGN-CONSTRAINTS.md`
- `INK-EAST-SOURCE-ARCHITECTURE.md`
- `INK-EAST-PHASE-1-SOURCE-PLAN.md`
- `INK-EAST-PHASE-2-TECHNICAL-DECISION.md`
- `INK-EAST-LINK-FIELD-MAP.md`
- `INK-EAST-WP-FIELD-SCHEMA.md`
- `INK-EAST-WP-IMPLEMENTATION-PLAN.md`
- `apps/web/README.md`
- `docs/LEVEL-*` task documents

---

## 2. Project origin and purpose

Ink & East did not start as a simple blog redesign.

The original business context was:

- Spatial Flow is the commerce-side brand, focused on products, objects, crystals, accessories, spatial experience, and light commercial conversion.
- Ink & East is the content-side brand, focused on old texts, quiet stories, modern questions, eastern thought, reader trust, cultural expression, membership, reader interaction, and high-ticket editorial services.

The project exists because a pure e-commerce site is not enough to build long-term brand depth, trust, and cultural meaning. Ink & East is intended to become the content / spiritual / editorial main site that gives the overall brand system depth.

The short positioning:

```text
Spatial Flow = using objects to settle space.
Ink & East = using old texts to settle the mind.
```

The deeper mission of Ink & East is to use a restrained, literary, non-propaganda, non-mystical, independent editorial voice to open a deeper understanding of Chinese / Eastern culture for readers outside the usual shallow media frame.

It must not become:

- government-style propaganda;
- cheap national-style design;
- mysticism marketing;
- a course-selling funnel;
- a noisy forum;
- a generic blog template;
- a WooCommerce product site.

---

## 3. Brand and product identity

From `INK-EAST-BRIEF.md`, the locked brand identity is:

```text
English brand: Ink & East
Simplified Chinese: 墨与东方
Traditional Chinese: 墨與東方
Short seal mark: 墨東
Primary tagline: Ancient texts for modern confusion.
Chinese tagline: 古之答 · 今之問
```

Core tone:

- quiet;
- literary;
- modern eastern;
- restrained;
- publication-like;
- not temple / red-gold / metaphysical-sales style.

Core product definition:

```text
Ink & East is a journal-style digital reading membership community.
```

The original major product modules were:

1. Issues — the main public journal structure;
2. Reading Room / VIP — member reading area;
3. Ask the Ancient Text — reader letters / questions;
4. Custom Reading — custom interpretation service;
5. Custom Ebook Studio — high-ticket custom manuscript / private book service;
6. Reader Notes — article-level reader responses;
7. Community — quiet aggregation of notes, letters, issue discussions, and editor-selected responses;
8. Membership — supporter identity, not a loud SaaS pricing page.

---

## 4. Static preview / Kiro track status

The early static-preview track produced product and visual references under `preview/`.

According to `INK-EAST-ROADMAP.md`, the Ink & East roadmap main track recorded the following as completed at the preview/spec level:

1. `article-002-vip` sample VIP article;
2. VIP Library index page;
3. Reading Room VIP member center;
4. Custom Reading service page;
5. Membership page;
6. Reader Notes component stub;
7. Letters form + Thank You;
8. Custom Ebook Studio service page;
9. Community aggregation page.

Important: this does not mean the production site was completed.

It means the static visual / product blueprint track became relatively mature. It did not implement the real backend, membership, permissions, forms, payments, old content migration, or production deployment.

Also important: the user has now clarified that the static draft track should not be treated as fully complete or fully accepted. Some static work may still be incomplete, visually unapproved, or outdated.

Known static-track issue from `PROJECT-CONTROL-MASTER.md`:

- PR #4 remained open and unmerged because Custom Ebook footer visual consistency failed manual review.
- The correct future fix is a shared component / source implementation, not repeated static footer patching.

Therefore, the static preview track should be treated as:

```text
Strong product / visual reference, not finished production, not fully frozen, not automatically accepted.
```

---

## 5. WordPress-oriented planning track status

Some documents were created during a WordPress engineering planning phase:

- `INK-EAST-LINK-FIELD-MAP.md`
- `INK-EAST-WP-FIELD-SCHEMA.md`
- `INK-EAST-WP-IMPLEMENTATION-PLAN.md`

They are useful because they define:

- link and CTA launch blockers;
- backend-editable field requirements;
- global footer / nav / legal / membership / service fields;
- suggested CPTs and taxonomies;
- role / permission matrix;
- form and Stripe settings;
- implementation phases;
- testing and rollback strategy.

But for current Project 3 source-native work, they are no longer the direct implementation source of truth.

They should be treated as historical / conceptual references, especially for:

- what operational copy must not be hardcoded;
- what links must not remain dead;
- what fields must be editable in an admin system;
- what workflows must exist before production;
- what old WordPress content must eventually be mapped or migrated.

Do not blindly implement WordPress CPT / ACF / theme code inside Project 3 source-native work unless the user explicitly changes the direction back to WordPress.

---

## 6. Source-native direction and why it exists

Later, Project 3 was redefined as a source-native main site.

The source-native baseline says:

- Project 3 does not consider WordPress.
- WordPress belongs to Project 1 / Project 2, not Project 3.
- Old blog posts are legacy content assets, not the architecture foundation.
- Ink & East should be a future source-code site, independent content product, and main digital journal system.
- The source-native model should not be reduced just to fit WordPress.

The chosen technical stack is:

```text
Next.js + Payload CMS + PostgreSQL
```

The reason for this stack:

- real editorial CMS;
- source-controlled frontend;
- structured content models;
- admin collections;
- access control;
- future membership / private content support;
- service status workflows;
- legacy migration records;
- SEO / redirect management;
- long-term data ownership;
- independence from WordPress.

---

## 7. Current source-native code status

Current source app:

```text
apps/web
```

Current local routes:

```text
Frontend: http://localhost:3010
Admin:    http://localhost:3010/admin
```

The source-native app has completed the Level 1 architecture prototype and the first three Level 2 foundation tasks.

### 7.1 Level 1 completed

Level 1 completed:

- Next.js app scaffold;
- Payload CMS wired into the app;
- PostgreSQL adapter and local database;
- Payload Admin at `/admin`;
- Payload API under `/api/[...slug]`;
- core editorial collections;
- shared fields;
- access helpers;
- seed data;
- public query layer;
- minimal frontend reading routes;
- backend editing sync to frontend;
- draft/private/hidden public boundary checks;
- final local smoke test.

Core Payload collections / globals currently include:

- Articles;
- Issues;
- Editorial Collections;
- Topics;
- Authors;
- Media;
- Legacy Article Records;
- Redirect Rules;
- System Settings;
- Users.

### 7.2 Level 2 completed so far

Level 2 Task 1: Search / Archive / Browse

- added `/articles`;
- added `/search`;
- added `searchQuery` support in public article queries;
- kept public filters: `status = published` and `visibility = public`.

Level 2 Task 2: Article Rich Content Rendering

- added safe `ArticleBody` renderer;
- supports plain text;
- supports limited markdown-style headings, quotes, lists, and dividers;
- does not render raw HTML as HTML.

Level 2 Task 3: Media / Image Handling

- improved Media admin metadata;
- limited upload MIME types to common images;
- added article `hero_image`;
- added article `hero_image_caption_override`;
- added article `inline_images`;
- added public media DTO mapping;
- added article image components;
- article detail and article list can render images when present.

---

## 8. Current frontend route status in `apps/web`

The current source-native frontend has these baseline routes:

```text
/
/articles
/search
/articles/[slug]
/issues
/issues/[slug]
/topics
/topics/[slug]
/collections
/collections/[slug]
/admin
```

These routes are functional but not product-complete.

Status by area:

| Area | Current source status | Product status |
|---|---|---|
| Home | Reads settings/articles/issues/topics/collections | Not yet a true Ink & East journal homepage |
| Article archive | Lists public articles | Basic, not full archive/bookcase experience |
| Search | Searches public articles | Basic, not final search experience |
| Article detail | Shows article metadata/body/images/relations | Basic, not final editorial reading page |
| Issues | Basic routes exist | Not final magazine/issue experience |
| Topics | Basic routes exist | Not final topic/pathway experience |
| Collections | Basic routes exist | Not final curated collection experience |
| Admin | Payload works | Editorial Admin v1 not complete |

---

## 9. The actual project disconnect

The current disconnect is:

```text
The static preview / product blueprint track is ahead of the current source-native frontend experience.
The source-native app is ahead in data architecture, CMS, permissions, and code foundation.
The two tracks have not been reconciled.
```

This means:

- early static preview work contains many important product and visual decisions;
- the current `apps/web` app contains the new source-native architecture;
- but the current `apps/web` frontend does not yet look or behave like the intended Ink & East product;
- continuing to add small backend fields or technical features will make the project feel more disconnected.

This is why the user felt that PR #22-#24 had little visible value: those tasks added real source-native capability, but they did not restore the original product / visual continuity.

---

## 10. Static draft gap audit needed

Before mapping static preview into the source app, the static side must be audited.

Do not assume the old statement `ROADMAP 8/8 complete` means the static track is fully finished or fully approved.

A proper static draft audit should answer:

1. Which preview pages exist?
2. Which preview pages are visually accepted by the user?
3. Which preview pages are only product sketches?
4. Which preview pages have known issues?
5. Which links are still placeholders?
6. Which pages contradict newer product decisions?
7. Which pages are still missing entirely?
8. Which preview decisions should be carried into source-native work?
9. Which WordPress-only assumptions should be discarded?

Core static pages to audit first:

- Ink & East home;
- Issue 001;
- Article 001;
- VIP article / paywall state;
- VIP Library;
- Reading Room;
- Membership;
- Reader Notes component;
- Letters / Ask the Ancient Text;
- Custom Reading;
- Custom Ebook Studio;
- Community;
- Archive / search / topic or category pages if present;
- footer / navigation consistency.

---

## 11. Current missing work

### 11.1 Missing from source-native frontend

The source app still needs:

- real Ink & East homepage structure;
- real Issue page experience;
- real Article reading page with publication-level layout;
- archive / search / topic / collection experience;
- about / masthead page;
- legal pages;
- editorial standards page;
- final navigation and footer;
- editorial design tokens matching the locked brand;
- mobile reading pass;
- metadata / SEO rendering;
- old content mapping strategy;
- legacy redirect behavior;
- real image/content usage.

### 11.2 Missing from source-native product modules

Not implemented yet:

- VIP Library;
- Reading Room;
- Membership roles / subscriptions;
- Reader / Patron user types;
- server-side VIP access control;
- Reader Notes;
- Letters / Ask the Ancient Text submission workflow;
- Custom Reading brief workflow;
- Custom Ebook brief workflow;
- Community aggregation;
- Dispatch / newsletter;
- Stripe / billing portal;
- Wise / crypto manual payment support;
- service project statuses;
- vote workflows;
- email notifications;
- production deployment.

### 11.3 Missing from content

Not implemented yet:

- real Issue 001 content set;
- 10-20 old article migration samples;
- old 100+ / 123 article review and migration decision;
- final topic taxonomy;
- final collection taxonomy;
- real article images;
- real SEO titles / descriptions;
- legal and editorial copy.

---

## 12. What should not be done next

Do not continue with random small source tasks such as:

- more minor Payload fields;
- newsletter wiring;
- account system;
- membership payments;
- Shop Bridge;
- service workflows;
- more mapper-only PRs;
- more low-visibility technical PRs.

These are real future needs, but doing them now will worsen the disconnect.

Also do not directly copy static HTML into `apps/web` as production source. Static files are references, not the architecture.

---

## 13. Correct next sequence

The next sequence should be:

```text
1. Project 3 Current Handoff Audit
2. Static Draft Completion / Gap Audit
3. Core Static Completion Pass
4. Static-to-Source Mapping
5. Visible Editorial Frontend Reconstruction
6. Content and migration planning
7. Later product systems: Letters, Reader Notes, Membership, Services, Community
```

This document completes step 1.

### Step 2 — Static Draft Completion / Gap Audit

Create a clear inventory of every relevant static preview page and its status:

- exists / missing;
- accepted / not accepted / needs review;
- current links;
- known defects;
- whether it should influence source-native frontend;
- whether it contains obsolete WordPress-only assumptions.

### Step 3 — Core Static Completion Pass

Do not try to finish every possible page first. Freeze only the core editorial path first:

1. Home;
2. Issue;
3. Article;
4. Archive / Articles;
5. Search;
6. Topics / Collections baseline;
7. Footer / nav system.

VIP / Membership / Reader Notes / Letters / Services can remain planned unless they are needed for the core visible frontend.

### Step 4 — Static-to-Source Mapping

Map static sections into source-native data sources:

| Static concept | Source-native destination |
|---|---|
| Home hero / intro | System Settings or future Home Global |
| Featured issue | Issues collection |
| Issue TOC | Issues ordered articles |
| Article title/deck/body | Articles collection |
| Article hero image | Media + Article hero_image |
| Topics | Topics collection |
| Collections | Editorial Collections collection |
| Footer/nav links | future Global / Settings / config |
| Editorial standards | future legal/editorial page |
| Legacy article status | Legacy Article Records |
| Redirects | Redirect Rules |

### Step 5 — Visible Editorial Frontend Reconstruction

Use the current `apps/web` data architecture, but rebuild the front-facing UI so it visibly resembles the intended Ink & East product.

Priority:

1. homepage;
2. article detail;
3. articles/archive;
4. issue page;
5. topics/collections;
6. search;
7. footer/nav.

The acceptance standard should be product-facing, not only technical:

- feels like a quiet independent journal;
- not a generic app scaffold;
- not an e-commerce site;
- not a SaaS dashboard;
- not a cheap blog theme;
- uses the Ink & East brand system;
- supports real editorial reading.

---

## 14. Required reading order for future AI / developer

Before starting future Project 3 work, read in this order:

1. `docs/PROJECT-3-CURRENT-HANDOFF.md`
2. `PROJECT-CONTROL-MASTER.md` sections 1-8 and 14-15
3. `INK-EAST-BRIEF.md` brand/product sections and final execution principles
4. `.kiro/steering/ink-east-handoff.md`
5. `INK-EAST-SOURCE-ARCHITECTURE.md`
6. `INK-EAST-PHASE-1-SOURCE-PLAN.md`
7. `INK-EAST-PHASE-2-TECHNICAL-DECISION.md`
8. relevant `docs/LEVEL-*` task docs
9. current `apps/web` source files
10. relevant `preview/` static files only after the task scope is known

Do not read only `apps/web` and assume that is the whole project.

---

## 15. Current status summary for handoff

Use this summary when handing the project to another AI or developer:

```text
Ink & East is a long-term source-native digital journal / reading membership / reader interaction / custom cultural service project. It began as a WordPress blog-subsite visual and product blueprint, with significant static preview work produced by Kiro. That static track covers much of the product idea, including home, issue, VIP library, reading room, membership, reader notes, letters, custom reading, custom ebook, and community, but it is not production code and is not fully equivalent to a finished static system.

Project 3 later shifted to a source-native implementation with Next.js + Payload CMS + PostgreSQL. The current source app has completed Level 1 architecture prototype work and the first Level 2 foundation tasks: search/archive, article body rendering, and media/image handling. The current frontend routes are functional but still feel like an engineering prototype.

The active project gap is that the source-native frontend has not yet absorbed or reconstructed the stronger Ink & East static visual/product blueprint. The next correct work is not more low-visibility backend tasks. The next work is a static draft gap audit, core static completion pass, then static-to-source mapping and visible editorial frontend reconstruction.
```

---

## 16. Current completion estimate

This estimate separates tracks to avoid confusion.

| Track | Current estimate | Meaning |
|---|---:|---|
| Static product / visual blueprint | 50-75% | Many core previews exist, but they need audit and some are not accepted/frozen |
| Source-native architecture | 70-80% | Level 1 architecture is complete and verified |
| Source-native frontend product experience | 15-25% | Routes exist but do not yet match intended visual/product quality |
| Source-native CMS/content model | 55-65% | Core editorial model exists, but membership/services/letters/community are not built |
| Production readiness | 0-10% | No production deployment, real content, real payment, legal, migration, or final QA |
| Overall Project 3 readiness | 25-35% | Strong planning + source foundation, but not a finished product |

---

## 17. Immediate next task after this file

Recommended next task:

```text
Project 3 · Static Draft Gap Audit
```

Suggested output file:

```text
docs/PROJECT-3-STATIC-DRAFT-GAP-AUDIT.md
```

Purpose:

- inventory every relevant static preview page;
- determine accepted / incomplete / obsolete / missing status;
- identify which static pieces should be mapped into source-native frontend;
- define which static gaps must be solved before source reconstruction.

Do not proceed into another feature PR before this audit exists.
