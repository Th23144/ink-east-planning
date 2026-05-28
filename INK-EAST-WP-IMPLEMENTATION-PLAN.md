# Ink & East · WordPress Implementation Plan

> 版本：v0.1  
> 状态：Fix 2G 文档任务  
> 基线：`PROJECT-CONTROL-MASTER.md` + `INK-EAST-LINK-FIELD-MAP.md` + `INK-EAST-WP-FIELD-SCHEMA.md`  
> 目的：把 Fix 2D → 2E → 2F 这条“链接 / 字段 / 后台可编辑”路线收口为 WordPress 工程化前的实施顺序。  

---

## 0. Important Correction

This document does **not** mean WordPress engineering starts immediately.

Fix 2G is still a planning and sequencing step.

The project must not jump from static preview files directly into WordPress coding.

Before any real WordPress implementation, the current production/local WordPress site must be inspected in read-only mode, because the existing site already has:

- WordPress + WooCommerce;
- Astra parent theme;
- Spatial Flow Astra Child theme;
- Elementor / Header Footer Elementor;
- CartFlows;
- existing blog content;
- existing pages and menus;
- WooCommerce templates and hooks;
- possible plugin dependencies.

Therefore, the correct order is:

1. Static preview and product spec are completed.
2. Link and backend field map is created.
3. WordPress field schema is drafted.
4. Implementation plan is written.
5. Current WordPress site is scanned read-only.
6. Only then can engineering begin.

---

## 1. Current Baseline

Current source-of-truth documents:

- `PROJECT-CONTROL-MASTER.md`
- `INK-EAST-LINK-FIELD-MAP.md`
- `INK-EAST-WP-FIELD-SCHEMA.md`
- `INK-EAST-ROADMAP.md`
- `DESIGN-CONSTRAINTS.md`
- `.kiro/steering/ink-east-handoff.md`

Current PR state:

- PR #3: merged.
- PR #5: merged.
- PR #4: still open, not merged.

PR #4 reminder:

> Custom Ebook footer visual consistency failed manual review.  
> Do not merge PR #4.  
> Resolve footer through shared WordPress footer component later, not by repeatedly patching static HTML.

---

## 2. What This Plan Is / Is Not

### This plan is

- a bridge from static preview to real WordPress engineering;
- a build order;
- a dependency map;
- a checklist for what must be discovered before coding;
- a guide for Codex / Kiro / ChatGPT / human review.

### This plan is not

- final implementation code;
- plugin final selection;
- ACF export JSON;
- a migration script;
- a license/payment/legal decision;
- permission to start changing the real WordPress theme immediately.

---

## 3. Phase 0 — Read-only WordPress Discovery

This phase must happen before real implementation.

### 3.1 Goal

Understand the current WordPress site exactly before touching it.

### 3.2 Required read-only checks

Run only read-only commands / inspections, such as:

- active theme and child theme path;
- plugin list;
- page list;
- menu locations;
- existing blog post count;
- category / tag structure;
- Elementor usage;
- WooCommerce template overrides;
- CartFlows pages;
- current header/footer ownership;
- current blog subsite structure;
- current customizer settings;
- existing forms/plugins;
- existing user roles;
- current permalink structure.

### 3.3 Explicitly forbidden in Phase 0

- no file modification;
- no database write;
- no plugin install;
- no plugin activation/deactivation;
- no theme switch;
- no ACF field creation;
- no page edits;
- no menu edits;
- no code formatting;
- no cleanup deletion.

### 3.4 Output

Create a read-only report:

`INK-EAST-WP-CURRENT-STATE-AUDIT.md`

This report should answer:

- Is Ink & East currently a subsite, a blog area, or just existing blog pages?
- Are the 100+ articles native posts, Elementor pages, or mixed?
- What can be reused?
- What must be migrated?
- Which templates currently control the blog?
- Which plugin decisions are already constrained by the existing site?

---

## 4. Phase 1 — Engineering Decision Gate

After Phase 0, decide the minimum engineering approach.

### 4.1 Decisions required

| Decision | Options | Why it matters |
|---|---|---|
| Article storage | native posts vs `ink_article` CPT | Determines migration complexity. |
| Issue storage | `issue` CPT vs page hierarchy | Determines archive/query structure. |
| Reader Notes | WP comments vs custom CPT | Determines moderation and display. |
| Forms | Fluent Forms vs Gravity Forms vs custom | Determines data storage and workflow. |
| Membership | custom roles + Stripe vs membership plugin | Determines permissions and billing. |
| Login | native `/wp-login.php` vs branded account page | Determines UX and redirects. |
| Footer links | WP Menus vs ACF Options | Determines backend editability. |
| Existing posts | migrate now vs map later | Determines launch scope. |

### 4.2 Rule

Do not start code until these are decided or explicitly deferred.

---

## 5. Phase 2 — Shared Foundation

This is the first real engineering phase after discovery and decisions.

### 5.1 Files / structures to create

Possible child theme structure:

```text
assets/css/ink-east-global.css
assets/css/ink-east-footer.css
assets/css/ink-east-article.css
assets/css/ink-east-forms.css

template-parts/ink-east/header.php
template-parts/ink-east/footer.php
template-parts/ink-east/reader-notes.php
template-parts/ink-east/paywall-band.php
template-parts/ink-east/service-cta.php
template-parts/ink-east/vip-card.php
```

### 5.2 Goal

Create shared visual and template foundation before building individual pages.

### 5.3 Why this matters

PR #4 failed because static HTML repeated footer structures and CSS per page.

The correct fix is not more static patching.

The correct fix is:

- one shared footer template;
- one shared footer CSS file;
- footer links from WP Menu / ACF Options;
- no duplicate footer HTML per page.

### 5.4 Acceptance criteria

- Header is one shared template part.
- Footer is one shared template part.
- Footer links are backend editable.
- Custom Ebook footer issue is resolved by shared component.
- No per-page copied footer markup.

---

## 6. Phase 3 — Backend Editable Global Fields

### 6.1 Goal

Implement the minimum backend fields needed before page templates.

### 6.2 Priority fields

From `INK-EAST-WP-FIELD-SCHEMA.md`:

- identity fields;
- footer mission / colophon;
- legal links;
- login/account routes;
- membership checkout settings;
- service CTA links;
- reading room settings;
- community settings.

### 6.3 Acceptance criteria

- Operational footer text is editable.
- Navigation CTA labels are editable.
- Membership CTA links are not hardcoded.
- Custom Reading / Custom Ebook links are editable.
- Legal links are editable.

---

## 7. Phase 4 — Content Model

### 7.1 Goal

Create or map content models.

### 7.2 Minimum content models

- Issue;
- Article;
- VIP visibility;
- Reader Letter;
- Custom Reading request;
- Custom Ebook project;
- optional Field Note;
- optional Manuscript Sample.

### 7.3 Existing content migration question

The existing blog has 100+ articles.

Before building templates, decide:

- keep them as native posts and add taxonomies/fields;
- migrate them into `ink_article` CPT;
- keep old posts in archive and use CPT only for new Ink & East issues.

### 7.4 Recommended safe approach

Start with mapping native posts if possible, and avoid mass migration until the final content model is confirmed.

Mass migration should be a later controlled step with backup and rollback.

---

## 8. Phase 5 — Template Build Order

Build templates in this order:

### 5.1 Home

Template:

- `front-page-ink-east.php` or page template.

Purpose:

- central entry;
- selected issue;
- Reading Room invitation;
- Studio services;
- Community / Letters / Archive links.

### 5.2 Issue

Template:

- `single-issue.php`.

Purpose:

- issue title;
- issue intro;
- ordered article TOC;
- no VIP content mixed into public issue TOC.

### 5.3 Article

Template:

- `single-ink_article.php` or native post template variant.

Purpose:

- longform reading;
- sidebar anchors;
- Reader Notes;
- related reading.

### 5.4 VIP Article / Paywall State

Same template as article, but with visibility logic.

Rules:

- unauthorized users receive teaser only;
- full body is not sent to browser;
- no sales-heavy unlock language.

### 5.5 VIP Library

Template:

- VIP archive or page template querying VIP articles.

Purpose:

- independent VIP content index;
- not mixed with public issues.

### 5.6 Reading Room

Template:

- `page-reading-room.php`.

Purpose:

- member home;
- VIP Library entry;
- Reader Notes entry;
- Letters / vote / Custom Reading queue.

### 5.7 Membership

Template:

- `page-membership.php`.

Purpose:

- supporter invitation;
- Reader / Patron plans;
- Stripe checkout integration;
- no SaaS pricing-table tone.

### 5.8 Services

Templates:

- `page-custom-reading.php`
- `page-custom-ebook.php`

Purpose:

- commercial service pages;
- form endpoints;
- editable service copy;
- clear service boundary.

### 5.9 Letters

Template:

- `page-letters.php`.

Purpose:

- form;
- thank-you state;
- consent;
- editorial moderation.

### 5.10 Community

Template:

- `page-community.php`.

Purpose:

- quiet aggregation;
- Latest Reader Notes;
- Issue discussion;
- Editor’s Choice;
- Letters.

---

## 9. Phase 6 — Forms and Workflows

### 9.1 Letters

Build first if editorial interaction is prioritized.

Needs:

- real form endpoint;
- consent fields;
- moderation;
- email notifications;
- spam protection.

### 9.2 Custom Reading

Build early because it is a core commercial service and does not require membership to function.

Needs:

- form endpoint;
- quote workflow;
- publication consent;
- optional member status detection;
- notification to editor/admin.

### 9.3 Custom Ebook

Build after Custom Reading because it is a higher-touch service.

Needs:

- longer brief form;
- project review workflow;
- legal/service terms;
- optional manual quote/payment.

### 9.4 Patron Vote

Build after membership role logic is stable.

Needs:

- role gate;
- vote storage;
- editor view.

---

## 10. Phase 7 — Membership and Stripe

### 10.1 Do not start until

- plan labels are finalized;
- Stripe account / test mode available;
- Reader / Patron Price IDs exist;
- success / cancel URLs decided;
- membership terms and refund policy drafted.

### 10.2 Required flows

- Checkout Session creation;
- webhook handling;
- role assignment;
- subscription update;
- cancellation / billing portal;
- restore flow;
- failed payment handling.

### 10.3 Acceptance criteria

- Guest can join Reader / Patron in test mode.
- Role is assigned after payment.
- Reader / Patron can enter Reading Room.
- Unauthorized users cannot read full VIP article body.
- Billing portal works.
- Refund / terms links exist.

---

## 11. Phase 8 — Reader Notes and Community

### 11.1 Reader Notes

Preferred implementation:

- WP native comments;
- custom template;
- role-aware write permission;
- single-level reply;
- editor highlight.

Avoid:

- Reddit clone;
- wpDiscuz unless explicitly chosen;
- nested thread complexity;
- hot/top/trending sorting.

### 11.2 Community

Build after Reader Notes data exists.

Community should aggregate:

- latest Reader Notes;
- issue discussion;
- editor’s choice;
- letters;
- empty states.

It should not become a noisy forum feed.

---

## 12. Phase 9 — Existing Content Mapping

The existing blog has 100+ articles.

Before launch, map them into the new Ink & East structure:

| Current content | Future destination | Notes |
|---|---|---|
| Existing free blog articles | Public archive / ink_article / posts | Decide CPT vs native posts. |
| Strong older essays | Featured archive / Issue candidates | Curate manually. |
| Short notes | Field Notes | Optional. |
| User comments if any | Reader Notes? | Only if quality supports it. |
| Elementor-built posts | Manual review | May need cleanup before template migration. |

Do not bulk migrate without backup.

---

## 13. Phase 10 — Testing and Regression

### 13.1 Link tests

- no production `href="#"` for critical CTAs;
- login route works;
- membership checkout works;
- custom service forms work;
- legal links work;
- archive links work.

### 13.2 Permission tests

- guest;
- free logged-in user;
- Reader;
- Patron;
- Editor/Admin.

### 13.3 Template tests

- Home;
- Issue;
- Article;
- VIP Article;
- VIP Library;
- Reading Room;
- Membership;
- Custom Reading;
- Custom Ebook;
- Letters;
- Community.

### 13.4 Device tests

- desktop;
- tablet;
- mobile;
- Safari / Chrome / Edge.

### 13.5 Operational tests

- backend editability;
- menus;
- ACF fields;
- form submissions;
- email notifications;
- Stripe test payments;
- role changes;
- rollback.

---

## 14. Rollback Strategy

Before any production implementation:

- full file backup;
- database backup;
- export ACF fields;
- export menus if needed;
- record active plugin list;
- record active theme version;
- document changed files;
- use staging/local first.

Every engineering batch should be reversible.

Do not mix too many changes in one batch.

---

## 15. What Not To Do Yet

Do not yet:

- start coding template files without Phase 0 audit;
- create ACF fields blindly;
- install membership plugins blindly;
- migrate 100+ articles blindly;
- connect live Stripe before legal pages exist;
- close or merge PR #4 just to clean the PR list;
- hardcode footer links;
- hardcode service prices;
- hardcode Stripe Price IDs;
- replace the current WordPress blog before mapping existing content.

---

## 16. Next Immediate Task

The immediate next task after this document should be:

`Ink & East · Phase 0 · Current WordPress Read-only Audit`

This should produce:

`INK-EAST-WP-CURRENT-STATE-AUDIT.md`

It should be done only when the real/local WordPress project files and environment are available.

Until then, do not begin production implementation.

---

## 17. Fixed Reminder for Future Tasks

Every future task should begin with:

> Current baseline: `PROJECT-CONTROL-MASTER.md`, `INK-EAST-LINK-FIELD-MAP.md`, `INK-EAST-WP-FIELD-SCHEMA.md`, and `INK-EAST-WP-IMPLEMENTATION-PLAN.md`.  
> PR #4 remains open and unmerged because Custom Ebook footer visual consistency failed manual review.  
> Spatial Flow is a visual skin replacement project and must not alter backend logic.  
> Ink & East is visual + new feature engineering.  
> All operational content must eventually be backend-editable.  
> Do not start real WordPress implementation before a read-only current-state audit.
