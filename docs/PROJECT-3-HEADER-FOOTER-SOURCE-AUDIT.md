# Project 3 · Static Header / Footer Source Audit

Status: Step 6 audit baseline

Repository: `Th23144/ink-east-planning`

Scope: independent files under `preview/`

This document starts the header/footer source-normalization pass defined in `docs/PROJECT-3-STATIC-PREVIEW-INTERLINK-PLAN.md`.

It is an audit and implementation boundary document. It does not change any preview page.

---

## 1. Why this pass exists

The current preview pages are independent HTML files. Several pages look visually related while using different header or footer source structures.

That creates two problems:

1. static review navigation can drift between pages;
2. later shared-component work cannot identify one authoritative static source for each site area.

The goal is not to redesign the pages. The goal is to identify canonical source blocks and normalize only pages that are meant to share those blocks.

---

## 2. Audit scope

### Ink & East current static pages

Public / editorial:

- `preview/ink-east-v1.html`
- `preview/ink-east-issue-001-v1.html`
- `preview/ink-east-article-001-v1.html`
- `preview/ink-east-article-002-vip-v1.html`
- `preview/ink-east-articles-archive-v1.html`

Reading, membership, service, and studio family:

- `preview/ink-east-vip-library-v1.html`
- `preview/ink-east-reading-room-v1.html`
- `preview/ink-east-membership-v1.html`
- `preview/ink-east-custom-reading-v1.html`
- `preview/ink-east-custom-ebook-v1.html`
- `preview/ink-east-letters-form-v1.html`
- `preview/ink-east-reader-notes-component-v1.html`
- `preview/ink-east-community-v1.html`

### Spatial Flow current ecommerce preview pages

- `preview/spatial-flow-v1.html`
- `preview/spatial-flow-shop-v1.html`
- `preview/spatial-flow-product-v1.html`
- `preview/spatial-flow-cart-v1.html`

### Explicitly excluded from normalization

- `preview/add-to-cart-concept-d-lift-settle.html` — archived interaction reference, not a canonical site shell
- `preview/spatial-flow-journal-v1.html` — legacy redirect/fallback page
- `preview/full-bleed/*` — diagnostic review helpers
- `preview/style-*.html` and other early visual-direction experiments
- `preview/index.html` — review/index utility, not a canonical public page shell
- `apps/web/**` — source implementation is outside this pass

No standalone `preview/spatial-flow-checkout-v1.html` was identified in the current active preview set. References to a future checkout preview do not create a canonical checkout page for this audit.

---

## 3. Important classification rule

Ink & East currently contains three legitimate top-of-page modes:

1. cover mode;
2. reading-context mode;
3. full site-navigation mode.

These modes should not be flattened into one identical visual header.

Normalization must separate:

- the shared site-navigation source;
- page-specific context strips such as issue bars or cover folios.

A page-specific issue bar may remain, but it must not become a competing version of the shared site navigation.

---

## 4. Canonical source decisions

## 4.1 Ink & East public journal navigation

### Canonical full public site-navigation source

Use the `.topnav` structure from:

`preview/ink-east-articles-archive-v1.html`

Reason:

- it is the current accepted public archive page;
- it contains a real brand block and explicit public navigation links;
- it is the first public editorial preview with a complete reusable site-navigation structure rather than only a contextual backbar;
- its Articles destination already points to the canonical public archive;
- placeholders are explicitly marked rather than represented as false live routes.

### Allowed public-page context variants

The following are not competing full headers and may remain as page-level context UI:

- `preview/ink-east-v1.html`: cover-specific `.cover-top` and cover folio structure;
- `preview/ink-east-issue-001-v1.html`: issue-specific `.backbar`;
- `preview/ink-east-article-001-v1.html`: article-specific `.issue-bar`;
- `preview/ink-east-article-002-vip-v1.html`: article/VIP-specific `.issue-bar`.

Implementation rule:

- preserve the cover and reading-context structures;
- normalize their destination set and naming against the canonical public navigation;
- do not force the archive `.topnav` visual block into the journal cover or reading column if it damages the accepted editorial composition;
- where a full public navigation is required on an inner public page, use the archive `.topnav` source, changing only active state and valid relative links.

---

## 4.2 Ink & East reading / membership / service / studio navigation

### Canonical source

Use the `.backbar` plus `.nav-strip > .site-nav` structure from:

`preview/ink-east-reading-room-v1.html`

Reason:

- Reading Room is a primary top-level destination in this family;
- later service pages explicitly describe their navigation as copied from Reading Room / VIP Library;
- this source already establishes the three-column layout, central Chinese masthead, curated destination set, mobile collapse, and active-state convention;
- it is generic enough to support Reading Room, VIP Library, Membership, Letters, Reader Notes, Community, Custom Reading, and Custom Ebook.

Pages in this normalization family:

- `preview/ink-east-vip-library-v1.html`
- `preview/ink-east-reading-room-v1.html`
- `preview/ink-east-membership-v1.html`
- `preview/ink-east-custom-reading-v1.html`
- `preview/ink-east-custom-ebook-v1.html`
- `preview/ink-east-letters-form-v1.html`
- `preview/ink-east-reader-notes-component-v1.html`
- `preview/ink-east-community-v1.html`

Implementation rule:

- use one identical structural block and one identical destination order;
- adjust only the page-specific active state, contextual backbar text, and links that are intentionally placeholders;
- do not redesign hero sections or service disambiguation strips;
- Custom Reading and Custom Ebook may remain neutral in the curated top-level nav if neither is a top-level active destination, but their underlying nav source must still match the canonical structure.

---

## 4.3 Ink & East footer

### Canonical source

Use the current footer block from:

`preview/ink-east-v1.html`

Canonical structure:

- `.foot-mark`
- four `.foot-cols` columns in this order:
  1. The Journal
  2. Read
  3. Speak
  4. Studio
- `.colophon-final`

Required current link behavior:

- This Issue → `./ink-east-issue-001-v1.html`
- Public Archive → `./ink-east-articles-archive-v1.html`
- Reading Room → `./ink-east-reading-room-v1.html`
- Membership → `./ink-east-membership-v1.html`
- Custom Reading → `./ink-east-custom-reading-v1.html`
- Custom Ebook Studio → `./ink-east-custom-ebook-v1.html`
- Spatial Flow → `./spatial-flow-v1.html`
- non-existent destinations remain clearly marked placeholders

Apply this canonical footer source to all 13 active Ink & East static pages listed in Section 2.

Only active-state-independent footer content should be used. Do not create separate public and service footer variants unless a later user decision explicitly requires that split.

---

## 4.4 Spatial Flow ecommerce header

### Canonical source

Use the generic V1-aligned shell from:

`preview/spatial-flow-shop-v1.html`

Canonical structure:

- `.masthead-strip-v1`
- `.site-header-v1`
- primary navigation
- centered Spatial Flow wordmark
- utilities block with Search, Account, and Bag

Reason:

- Shop is the generic ecommerce browsing page;
- the V1-aligned shell is already shared with the canonical product-detail page;
- the product page contains product-specific Bag IDs and interaction hooks, so it should not be copied verbatim as the generic source;
- the Shop source is safer as the structural baseline, while Product may retain behavior-specific attributes required by Add to Cart feedback.

Pages to normalize:

- `preview/spatial-flow-v1.html`
- `preview/spatial-flow-shop-v1.html`
- `preview/spatial-flow-product-v1.html`
- `preview/spatial-flow-cart-v1.html`

Implementation rule:

- Shop provides the generic source block;
- Product retains only the additional IDs / ARIA hooks required by the accepted Add to Cart feedback;
- active nav state may differ by page;
- Bag count may differ when required by the current static interaction story;
- The Journal must continue to point to `./ink-east-v1.html`;
- do not change page-body layout in this pass.

---

## 4.5 Spatial Flow ecommerce footer

### Canonical source

Use `.site-footer-v1` from:

`preview/spatial-flow-shop-v1.html`

Reason:

- it is the generic ecommerce footer source;
- the product page already uses the same V1-aligned family;
- the home and cart previews contain older or divergent shell structures;
- the Shop footer does not contain product-specific interaction logic.

Apply the canonical source to the four active Spatial Flow ecommerce pages, changing only valid relative links where page context requires it.

The Journal column must continue to route into Ink & East, not the retired Spatial Flow Journal page.

---

## 5. Old PR #4 assessment

PR #4, `fix(ink-east): canonicalize footer links across preview pages`, must not be merged.

Reasons:

1. it was created against an early `main` baseline;
2. it predates the accepted Articles Archive interlink work;
3. its proposed footer changes replace the now-valid Public Archive route with `#`;
4. its diff includes Custom Ebook CSS and layout changes beyond a strict footer-block replacement;
5. later accepted changes to Membership, Custom Ebook, Articles Archive, and public interlinks are not safely represented by that branch.

PR #4 may be used only as historical evidence that footer normalization was already identified as necessary.

Recommended disposition after this audit is accepted:

- close PR #4 without merge;
- implement the new normalization from current `main` in new, narrowly scoped PRs.

---

## 6. Implementation sequence

Do not normalize every header and footer in one large PR.

### PR A — Ink & East footer normalization

Scope:

- all 13 active Ink & East pages;
- footer CSS and final footer HTML block only;
- no header or body changes.

Expected title:

`preview(ink-east): normalize static footer source`

### PR B — Ink & East service/studio header normalization

Scope:

- the eight `.nav-strip` family pages;
- canonical `.backbar + .nav-strip > .site-nav` source;
- active state and contextual text only.

Expected title:

`preview(ink-east): normalize service navigation source`

### PR C — Ink & East public navigation normalization

Scope:

- Home, Issue 001, Article 001, VIP Article 002, Articles Archive;
- preserve cover and reading-context modes;
- normalize destination names and shared full-nav source without flattening editorial layouts.

Expected title:

`preview(ink-east): normalize public navigation sources`

### PR D — Spatial Flow ecommerce shell normalization

Scope:

- Home, Shop, Product, Cart;
- canonical V1-aligned header and footer source;
- preserve product Add to Cart hooks;
- no body redesign.

Expected title:

`preview(spatial-flow): normalize ecommerce header footer sources`

---

## 7. Validation requirements for every implementation PR

Each PR must confirm:

- only the declared files changed;
- no `apps/web` changes;
- no body section redesign;
- no accepted Add to Cart behavior regression;
- no RawGitHack or GitHub blob links embedded in preview HTML;
- The Journal routes to `./ink-east-v1.html` from Spatial Flow;
- Public Archive routes to `./ink-east-articles-archive-v1.html` from Ink & East;
- non-existent pages remain explicit placeholders;
- active-state differences are intentional and page-specific;
- desktop, tablet, and mobile header/footer structures have no horizontal overflow;
- reduced-motion handling and existing page-specific scripts remain intact.

---

## 8. Out of scope

This pass does not include:

- new visual design;
- wide-screen composition fixes;
- body-layout changes;
- creation of Topics, Collections, Search, or About pages;
- React / Next.js shared components;
- Payload CMS work;
- WooCommerce production integration;
- payment, order, membership backend, account, or login behavior;
- deletion of archived concept or diagnostic files.

---

## 9. Current decision

Step 6 begins with this audit baseline.

The first implementation task after acceptance is:

`PR A — Ink & East footer normalization`

No Codex task is required for this audit. The implementation may also be performed directly through controlled GitHub file updates, provided each PR remains narrowly scoped and validated before merge.
