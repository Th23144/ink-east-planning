# Project 3 · Static Draft Gap Audit

> Repository: `Th23144/ink-east-planning`  
> Scope: Project 3 · Ink & East static preview / source-native reconciliation  
> Status: audit document, no code change  
> Previous handoff: `docs/PROJECT-3-CURRENT-HANDOFF.md`  
> Purpose: inventory the existing static preview drafts, identify missing / incomplete / obsolete parts, and define what should be frozen before mapping into the current Next.js + Payload source app.

---

## 0. What this audit is

This audit is the second reset step after `docs/PROJECT-3-CURRENT-HANDOFF.md`.

The current problem is not that Project 3 has no work. The problem is that Project 3 has two partially disconnected tracks:

1. the earlier static-preview / Kiro / product-spec track under `preview/`;
2. the later source-native track under `apps/web`.

This audit only evaluates the static-preview track and how it should affect the next source-native work.

This audit does not:

- modify static HTML;
- modify `apps/web`;
- create or change routes;
- implement UI in Next.js;
- implement membership, payment, Reader Notes, Letters, or services;
- replace the need for user visual review.

---

## 1. Files inspected for this audit

Root and planning files considered:

- `docs/PROJECT-3-CURRENT-HANDOFF.md`
- `PROJECT-CONTROL-MASTER.md`
- `INK-EAST-BRIEF.md`
- `INK-EAST-ROADMAP.md`
- `.kiro/steering/ink-east-handoff.md`
- `DESIGN-CONSTRAINTS.md`
- `INK-EAST-LINK-FIELD-MAP.md`
- `INK-EAST-WP-FIELD-SCHEMA.md`
- `INK-EAST-WP-IMPLEMENTATION-PLAN.md`
- `INK-EAST-SOURCE-ARCHITECTURE.md`
- `INK-EAST-PHASE-1-SOURCE-PLAN.md`
- `INK-EAST-PHASE-2-TECHNICAL-DECISION.md`

Static preview files found for Ink & East:

- `preview/ink-east-v1.html`
- `preview/ink-east-issue-001-v1.html`
- `preview/ink-east-article-001-v1.html`
- `preview/ink-east-article-002-vip-v1.html`
- `preview/ink-east-vip-library-v1.html`
- `preview/ink-east-reading-room-v1.html`
- `preview/ink-east-membership-v1.html`
- `preview/ink-east-custom-reading-v1.html`
- `preview/ink-east-custom-ebook-v1.html`
- `preview/ink-east-letters-form-v1.html`
- `preview/ink-east-reader-notes-component-v1.html`
- `preview/ink-east-community-v1.html`
- `preview/index.html`

Important note: `preview/index.html` exists, but it is not an Ink & East product page in the current Project 3 source-native plan. It should not be treated as a Project 3 route until inspected under a separate scope.

---

## 2. Static track top-level judgment

The static preview track is valuable but not fully finished.

It currently contains a strong Ink & East visual and product reference for:

- home / cover experience;
- Issue 001;
- public article reading style;
- VIP article guest/paywall state;
- VIP Library;
- Reading Room;
- Membership;
- Custom Reading;
- Custom Ebook;
- Letters / Ask the Ancient Text;
- Reader Notes component spec;
- Community aggregation page.

But it is not ready to be blindly mapped into `apps/web` because:

1. some files are visual references, not complete approved pages;
2. some files are component specs, not actual destination pages;
3. some files contain old WordPress-specific contracts;
4. some files contain placeholder links, `href="#"`, or staged / disabled CTAs;
5. some files contain TODO / future-state notes;
6. nav/footer consistency is not fully reliable;
7. PR #4 / Custom Ebook footer issue is explicitly unresolved in the historical project control document;
8. key source-native pages such as archive, search, topics, collections, about, legal, and editorial standards do not have dedicated Ink & East static pages yet.

Working conclusion:

```text
Static preview = useful visual/product blueprint.
Static preview != complete frozen design system.
Static preview != production implementation.
Static preview != directly copyable source code.
```

---

## 3. Page inventory and current audit status

| Static file | Intended page / component | Exists | Static maturity | Source-native relevance | Audit status |
|---|---|---:|---|---|---|
| `preview/ink-east-v1.html` | Home / cover / journal landing | Yes | Strong visual reference, not final source plan | High | Needs user review and source mapping |
| `preview/ink-east-issue-001-v1.html` | Issue 001 page | Yes | Strong issue reference | High | Needs user review and source mapping |
| `preview/ink-east-article-001-v1.html` | Public article page | Yes | Strong article reading reference, guest state only | High | Needs state / Reader Notes reconciliation |
| `preview/ink-east-article-002-vip-v1.html` | VIP article guest/paywall state | Yes | Useful VIP guest state, unlocked member states absent | Medium-later | Keep as future VIP reference, not immediate core |
| `preview/ink-east-vip-library-v1.html` | VIP Library index | Yes | Useful but contains placeholder cards / links | Later | Defer until membership/VIP phase |
| `preview/ink-east-reading-room-v1.html` | Reading Room | Yes | Patron default state reference | Later | Defer until account/member system phase |
| `preview/ink-east-membership-v1.html` | Membership invitation | Yes | Strong language constraints, checkout pending | Later | Defer until membership/payments phase |
| `preview/ink-east-custom-reading-v1.html` | Custom Reading service page | Yes | Strong service reference, static form only | Medium-later | Defer until service forms phase |
| `preview/ink-east-custom-ebook-v1.html` | Custom Ebook Studio | Yes | Service reference, known footer issue history | Medium-later | Needs footer/nav review before reuse |
| `preview/ink-east-letters-form-v1.html` | Ask the Ancient Text / Letters form | Yes | Static form + thank-you state | Medium-later | Defer until Letters workflow phase |
| `preview/ink-east-reader-notes-component-v1.html` | Reader Notes component spec | Yes | Component contract, not a public destination | Later | Use for future component, not core mapping now |
| `preview/ink-east-community-v1.html` | Community aggregator | Yes | Populated demo + empty-state notes | Later | Defer until Reader Notes / Letters data exists |
| `preview/index.html` | Unknown / preview index | Yes | Not audited as Ink & East route | Low | Do not map unless separately scoped |

---

## 4. Core static pages needed before source frontend reconstruction

For the next source-native visible frontend pass, do not try to finish every static page.

Freeze only the core editorial path first:

1. Home;
2. Issue 001;
3. Public Article reading page;
4. Articles / Archive page;
5. Search page;
6. Topics / Collections baseline pages;
7. shared nav / footer visual system.

Current static coverage against that core path:

| Core source page needed | Existing static reference | Status |
|---|---|---|
| Home | `preview/ink-east-v1.html` | Exists, strong, needs user freeze |
| Issue 001 | `preview/ink-east-issue-001-v1.html` | Exists, strong, needs user freeze |
| Article detail | `preview/ink-east-article-001-v1.html` | Exists, strong, needs article-component reconciliation |
| Articles / Archive | No dedicated static page found | Missing |
| Search | No dedicated static page found | Missing |
| Topics | No dedicated static page found | Missing |
| Collections | No dedicated static page found | Missing |
| Shared nav/footer | Repeated across many static pages | Exists but not safely frozen; should be componentized in source |

Therefore, the next static work should not be all membership/service/community pages. It should first fill the missing core browse pages:

- `preview/ink-east-articles-archive-v1.html` or equivalent;
- `preview/ink-east-search-v1.html`;
- `preview/ink-east-topic-v1.html` or `preview/ink-east-topics-v1.html`;
- `preview/ink-east-collection-v1.html` or `preview/ink-east-collections-v1.html`.

These names are suggestions only. The actual filenames should be confirmed before creation.

---

## 5. File-by-file audit

### 5.1 `preview/ink-east-v1.html` — Home / journal cover

Current role:

- main Ink & East static homepage / cover reference;
- establishes paper, ink, vermilion, EB Garamond, Noto Serif SC, mono metadata, cover structure, editor note, entries, pull quotes, and footer language.

Strengths:

- strong visual system;
- clear printed-journal feel;
- establishes Issue 001 mood;
- contains the core brand vocabulary and visual tokens;
- strong source for homepage visual reconstruction.

Known risks / gaps:

- contains old static assumptions and hardcoded content;
- `href="#"` / TODO search results indicate some placeholders may remain;
- needs review against the later source-native route model;
- needs confirmation that homepage content structure is still desired before mapping;
- should not be copied directly into Next.js.

Recommendation:

```text
Use as the primary visual reference for source-native homepage reconstruction after user visual freeze.
```

Immediate action:

- user should visually re-open this page and decide whether it is still the homepage direction;
- if accepted, map only its design language and editorial structure, not static code.

---

### 5.2 `preview/ink-east-issue-001-v1.html` — Issue 001

Current role:

- Issue 001 static page;
- title: `Issue 001 — Wu Wei is not laziness · Ink & East`;
- provides issue hero, editor note, table of contents, discussion strip, and footer.

Strengths:

- strong Issue identity;
- clear magazine / issue structure;
- useful source for `/issues/[slug]` or `/issues/issue-001-wu-wei` reconstruction;
- the TOC model maps well to Payload `issues.ordered_articles`.

Known risks / gaps:

- needs final review for whether VIP content is still excluded from public issue TOC;
- discussion strip may point to future Community / Reader Notes functions not yet implemented;
- issue content is sample content, not final Issue 001 editorial content;
- footer/nav should not be copied per page.

Recommendation:

```text
Use as the primary Issue page visual reference for the next source-native frontend pass.
```

Immediate action:

- freeze visual direction;
- decide exact route and slug strategy;
- map TOC to Payload issue ordered articles.

---

### 5.3 `preview/ink-east-article-001-v1.html` — Public article

Current role:

- single public article visual/spec reference;
- file comments identify it as both visual reference and product spec;
- includes WordPress-era contracts such as standard WP Post, post meta, taxonomy, and guest state.

Strengths:

- strongest article reading reference;
- contains reading column decisions;
- establishes issue bar, article header, longform body, pull quote, footnote, support band, author / related / notes areas;
- very useful for source-native article detail reconstruction.

Known risks / gaps:

- comments say other states are TODO: logged-in free, Reader, Patron;
- WordPress contracts must be translated to Payload fields;
- Reader Notes stubs in article pages pre-date the later Reader Notes component contract;
- body content and footnotes must be mapped to current `Articles` model or future richer body model;
- current source app only has safe markdown/plain text rendering, not full article layout features.

Recommendation:

```text
Use as the primary public article page visual reference.
Do not use its WordPress meta contract literally.
```

Immediate action:

- freeze article reading design;
- define source-native article component blocks: header, meta, body, pull quote, footnote, support band, related reading, Reader Notes placeholder;
- decide which article features are required in the first visible frontend pass.

---

### 5.4 `preview/ink-east-article-002-vip-v1.html` — VIP article guest/paywall state

Current role:

- guest/free user state for a VIP Library long read;
- body is replaced by an editorial paywall / invitation band;
- comments specify Reader/Patron unlocked states are TODO / separate preview.

Strengths:

- very useful for future VIP gating rules;
- correctly separates VIP Library from public Issues;
- contains strong copy rules: no prices, no tiers, no urgency, no unlock/upgrade language;
- clear source contract for server-side body replacement.

Known risks / gaps:

- only guest/free state is present;
- Reader and Patron unlocked states are not built as separate static pages;
- sidebar includes one active `href="#"` for current entry and placeholder entries;
- this is not required for the immediate source-native public editorial frontend pass;
- membership roles do not exist yet in `apps/web`.

Recommendation:

```text
Keep as future VIP/membership reference.
Do not prioritize until public editorial frontend is rebuilt.
```

Immediate action:

- no source work now;
- later, create source-native VIP model only after membership/access plan is resumed.

---

### 5.5 `preview/ink-east-vip-library-v1.html` — VIP Library index

Current role:

- public catalog of VIP Long Reads;
- comments explicitly say VIP Library and Issues are separate boards;
- no cross-linking from Issue TOC to VIP article.

Strengths:

- good future VIP index reference;
- clear visual distinction from Issue pages;
- strong information architecture correction.

Known risks / gaps:

- contains placeholder cards and placeholder/future links;
- about strip comments mention future links kept as `href="#"` until modules ship;
- not part of immediate public editorial core reconstruction;
- current source-native app has no membership/VIP access model.

Recommendation:

```text
Defer to VIP phase. Do not map into source-native app until membership/VIP library is scheduled.
```

Immediate action:

- keep as reference;
- do not build source route now unless the user explicitly prioritizes VIP.

---

### 5.6 `preview/ink-east-reading-room-v1.html` — Reading Room

Current role:

- private member reading room;
- default rendered state is Patron complete state;
- comments explicitly say it is not a SaaS dashboard.

Strengths:

- strong direction for future member home;
- defines what must stay out: billing date, upgrade CTA, account settings, payment forms;
- useful for future Reader/Patron experience.

Known risks / gaps:

- default state is Patron, not all states;
- source-native app has no user membership model yet;
- many sections depend on VIP Library, Reader Notes, Letters, Patron voting, Custom Reading queue;
- not needed for immediate public editorial frontend.

Recommendation:

```text
Defer until account/membership phase.
Keep the visual principle: private reading room, not dashboard.
```

---

### 5.7 `preview/ink-east-membership-v1.html` — Membership

Current role:

- quiet supporter invitation page;
- not a pricing surface;
- comments explicitly ban tier comparison cards, price-like numbers, unlock/premium/exclusive/upgrade language.

Strengths:

- strong copy and tone constraints;
- useful future membership invitation model;
- avoids SaaS pricing-table behavior.

Known risks / gaps:

- Stripe checkout is pending / not implemented;
- search found `data-pending-link` in this file;
- source-native app has no membership roles or payments;
- membership tier structure and prices were historically unstable / placeholder.

Recommendation:

```text
Defer until membership/payment phase.
Use copy rules later, not now.
```

---

### 5.8 `preview/ink-east-custom-reading-v1.html` — Custom Reading

Current role:

- custom interpretation service page;
- comments define it as the journal's real commercial core;
- open to everyone, not gated by membership;
- sister page is Custom Ebook.

Strengths:

- strong service positioning;
- clear difference from membership and paywall;
- useful future service-page model.

Known risks / gaps:

- static form only;
- comments are WordPress / Fluent Forms oriented;
- source-native service model is not implemented yet;
- not required for immediate public editorial frontend.

Recommendation:

```text
Defer until services phase, but keep product positioning as important.
```

---

### 5.9 `preview/ink-east-custom-ebook-v1.html` — Custom Ebook Studio

Current role:

- high-ticket custom manuscript / private book service page;
- open to everyone;
- not the same product as Custom Reading;
- comments include WordPress backend assumptions.

Strengths:

- clear distinction from Custom Reading;
- strong service-page direction;
- useful long-term commercial service reference.

Known risks / gaps:

- historical PR #4 footer issue was tied to Custom Ebook footer visual consistency;
- footer/nav consistency cannot be trusted until a shared component exists;
- static form/backend contract is WordPress-specific;
- not required for immediate public editorial frontend.

Recommendation:

```text
Do not prioritize source mapping now.
When service phase starts, rebuild through shared nav/footer, not copied static footer.
```

---

### 5.10 `preview/ink-east-letters-form-v1.html` — Letters / Ask the Ancient Text

Current role:

- Ask the Ancient Text / Letters static form and thank-you state;
- comments say it is open to all roles and uses form vs thanks CSS state.

Strengths:

- good future Letters/Ask visual reference;
- contains authorization and disclaimer direction from Brief;
- clear non-forum editorial intake model.

Known risks / gaps:

- static form only;
- no real endpoint;
- quota behavior not implemented;
- no moderation workflow;
- source-native app has no Letters collection or workflow yet.

Recommendation:

```text
Defer until Letters workflow phase.
Do not block public editorial frontend on Letters.
```

---

### 5.11 `preview/ink-east-reader-notes-component-v1.html` — Reader Notes component spec

Current role:

- visual contract for Reader Notes;
- not a destination page;
- meant to be embedded inside article pages and Community.

Strengths:

- clear rules: no upvote/downvote, no nested replies past depth 1, no Reddit/Disqus/wpDiscuz feel;
- defines read/write tier states conceptually;
- important for future Reader Notes implementation.

Known risks / gaps:

- not a public page to map directly;
- comments say article-level Reader Notes stubs pre-date this spec and need future sync;
- source-native app has no Reader Notes model, user roles, or moderation workflow.

Recommendation:

```text
Do not map as a route now.
Use later as a component contract when Reader Notes is scheduled.
```

---

### 5.12 `preview/ink-east-community-v1.html` — Community

Current role:

- station-level aggregator for Reader Notes, Issue Discussion, Editor's Choice, Letters;
- comments explicitly say it is not a forum, not a feed, not Reddit/贴吧/SNS;
- default rendered state is populated so engineers can see full visual contract, with empty variants for day-one reality.

Strengths:

- strong product boundary;
- good long-term aggregation reference;
- correctly avoids composer/submission UI on the page.

Known risks / gaps:

- depends on Reader Notes and Letters data that does not exist yet;
- current source-native app has no comments/notes/letters model;
- not useful until interaction data exists.

Recommendation:

```text
Defer until after Reader Notes and Letters exist.
```

---

## 6. Missing static pages

No dedicated Ink & East static pages were found for the following source-native routes / required product pages:

### Immediate core browse gaps

- Articles / Archive page;
- Search page;
- Topics index;
- Topic detail;
- Collections index;
- Collection detail.

These are the most important static gaps because the current `apps/web` already has `/articles`, `/search`, `/topics`, `/topics/[slug]`, `/collections`, and `/collections/[slug]`, but those source routes are visually basic.

### Editorial trust / information gaps

- About / Masthead;
- Editorial Standards;
- Contact;
- Privacy Policy;
- Terms;
- Refund Policy;
- Membership Terms;
- Copyright Notice.

### Account / system gaps

- Sign in / Register;
- Account page;
- Restore access;
- 404 page;
- sitemap / route index experience.

### Later product gaps

- Dispatch / Newsletter page or section;
- Patron Vote;
- User profile;
- Reader/Patron unlocked article states;
- service dashboard / status views;
- legacy article migration review UI.

---

## 7. Static links and placeholder risks

Known placeholder signals found during audit:

- `href="#"` appears in at least Home, Membership, VIP article, and Custom Ebook related search results.
- `TODO` appears in at least Home, Membership, VIP article, and Roadmap-related search results.
- `data-pending-link` appears in Membership.
- VIP article sidebar contains active/current `href="#"` and placeholder sibling entries.
- VIP Library contains placeholder cards / future links.
- Several static files contain WordPress-specific comments such as `wp-login.php`, Fluent Forms, CPT names, WP comments, or WP post meta.

Static placeholders are acceptable for preview, but they are not acceptable as source-native implementation.

Rule for source mapping:

```text
Never map a placeholder link as a real route.
Never map WordPress comments literally into Payload/Next.js.
Never map static forms as working forms.
Never map static paywall copy before membership/server-side access exists.
```

---

## 8. Navigation / footer audit

The static files repeatedly include their own nav/footer code.

Known status:

- Home, Issue, Article, VIP Library, Reading Room, Membership, Custom Reading, Custom Ebook, Letters, Reader Notes, and Community each carry local nav/footer styling or markup.
- VIP Library comments mention a seven-item canonical nav.
- Community comments mention an eight-item nav with Community added.
- Custom Reading comments say no item is active because it is not one of the curated main destinations.
- The historical PR #4 issue says Custom Ebook footer visual consistency failed manual review.

Therefore, nav/footer cannot be treated as fully frozen static code.

Source-native rule:

```text
Build one shared source nav and one shared source footer.
Use static pages as visual references only.
Do not copy repeated static footer blocks into each source page.
```

Required next decision before source reconstruction:

- confirm final public nav items for source-native public editorial phase;
- confirm which later destinations should be hidden until implemented;
- confirm footer columns and links;
- confirm legal/editorial links that can exist as placeholder pages vs hidden links.

Suggested public-editorial-phase nav:

```text
Home
Issues
Articles
Topics
Collections
Search
About
```

Suggested later-phase nav additions:

```text
VIP Library
Reading Room
Ask
Studio
Membership
Community
```

The final nav must be confirmed by the user before implementation.

---

## 9. Product decision conflicts / outdated assumptions

The static track contains some assumptions that must be handled carefully.

### 9.1 WordPress implementation assumptions

Many static files contain WordPress contract comments. Current Project 3 source-native direction uses Next.js + Payload + PostgreSQL. WordPress-specific notes are historical references only unless the user explicitly returns Project 3 to WordPress.

Translation examples:

| Static WordPress assumption | Source-native translation |
|---|---|
| WP Post | Payload `articles` |
| CPT `issue` | Payload `issues` |
| WP Comments | future Payload collection / custom comment model |
| Fluent Forms | future source-native form route / Payload collection / email workflow |
| ACF Options | Payload Global / System Settings / future globals |
| WP Menu | source nav config or Payload-managed nav later |
| `wp-login.php` | future source-native auth route |

### 9.2 Paywall assumptions

Older BRIEF sections discussed 30% paywall behavior, but later handoff notes revised VIP articles toward whole-body server-side protection for unauthorized users.

For current source-native work:

- do not implement paywall now;
- do not expose full VIP body to guests;
- do not design membership as selling individual article unlocks;
- treat VIP article static pages as future references only.

### 9.3 Static roadmap completion is not user acceptance

`INK-EAST-ROADMAP.md` records many preview tasks as complete. This only means the static task was produced and committed. It does not mean:

- user has visually accepted every page;
- all pages are ready for source implementation;
- all links are live;
- all states are covered;
- all pages should be prioritized now.

---

## 10. Recommended next work after this audit

The next work should be `Core Static Completion Pass`, not source coding yet.

### 10.1 Core static pages to confirm / freeze

Ask the user to visually review and freeze:

1. `preview/ink-east-v1.html` — Home;
2. `preview/ink-east-issue-001-v1.html` — Issue;
3. `preview/ink-east-article-001-v1.html` — Public Article.

These three are the minimum visual foundation for source-native frontend reconstruction.

### 10.2 Core static pages to create or refine

Before source reconstruction, create or refine static references for:

1. Articles / Archive;
2. Search;
3. Topics;
4. Collections;
5. shared public nav/footer state.

These should be simpler than the full membership/service pages. Their job is to guide the current existing source routes, not to launch new business modules.

### 10.3 Later static pages to defer

Defer unless the user explicitly prioritizes them:

- VIP Library;
- Reading Room;
- Membership;
- Reader Notes;
- Letters;
- Custom Reading;
- Custom Ebook;
- Community.

They already have useful references, but they should not drive the immediate source-native public editorial frontend.

---

## 11. Static-to-source priority map

Once the core static pages are frozen, map them into `apps/web` in this order:

| Priority | Source route | Static reference | Notes |
|---:|---|---|---|
| 1 | `/` | `ink-east-v1.html` | Rebuild as real journal homepage using Payload data |
| 2 | `/articles/[slug]` | `ink-east-article-001-v1.html` | Rebuild article reading experience |
| 3 | `/issues/[slug]` | `ink-east-issue-001-v1.html` | Rebuild Issue detail / TOC |
| 4 | `/articles` | Missing static | Create/refine archive static first |
| 5 | `/search` | Missing static | Create/refine search static first |
| 6 | `/topics`, `/topics/[slug]` | Missing static | Create/refine topic static first |
| 7 | `/collections`, `/collections/[slug]` | Missing static | Create/refine collection static first |
| 8 | shared nav/footer | repeated static blocks | Build one shared source component |

---

## 12. Acceptance criteria for the next static completion pass

The next static completion pass should be considered complete only when:

1. Home is user-reviewed and accepted or specific revision notes are recorded.
2. Issue page is user-reviewed and accepted or specific revision notes are recorded.
3. Article page is user-reviewed and accepted or specific revision notes are recorded.
4. Articles / Archive static reference exists.
5. Search static reference exists.
6. Topics / Collections static references exist or are intentionally combined.
7. Nav/footer public-editorial-phase structure is confirmed.
8. Placeholder links are either mapped, intentionally disabled, or hidden from the source phase.
9. WordPress-only assumptions are translated to source-native concepts.
10. The next source PR can produce visible page changes, not another low-visibility field/mapper change.

---

## 13. Immediate recommendation

Recommended next task:

```text
Project 3 · Core Static Completion Pass 1
```

Goal:

```text
Freeze the visual direction for Home / Issue / Article and create the missing static references for Articles Archive, Search, Topics, and Collections.
```

Suggested scope:

- no `apps/web` changes;
- no Payload changes;
- no membership/payment/service implementation;
- only static review / static draft completion documents or preview additions;
- user visual review required before source mapping.

Suggested output options:

Option A — document-only:

```text
docs/PROJECT-3-CORE-STATIC-COMPLETION-PLAN.md
```

Option B — static preview additions:

```text
preview/ink-east-articles-archive-v1.html
preview/ink-east-search-v1.html
preview/ink-east-topic-v1.html
preview/ink-east-collection-v1.html
```

The user should decide whether to do A first or create the missing static pages directly.

---

## 14. Final handoff summary

```text
The Ink & East static preview track contains many important product and visual references, but it is not fully finished or automatically accepted. The strongest immediate references are Home, Issue 001, and public Article. The biggest missing static pieces for the current source-native app are Articles Archive, Search, Topics, and Collections. VIP Library, Reading Room, Membership, Reader Notes, Letters, Custom Reading, Custom Ebook, and Community have preview references but should be deferred until after the public editorial frontend is reconstructed. Before writing more source code, complete a core static pass and freeze the source-facing visual references.
```
