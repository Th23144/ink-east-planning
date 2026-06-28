# Project 3 · Core Static Completion Pass 1

> Repository: `Th23144/ink-east-planning`  
> Scope: Ink & East public editorial static completion plan, with Spatial Flow ecommerce-side note preserved  
> Status: planning document only  
> Previous documents:  
> - `docs/PROJECT-3-CURRENT-HANDOFF.md`  
> - `docs/PROJECT-3-STATIC-DRAFT-GAP-AUDIT.md`  
> - `preview/spatial-flow-add-to-cart-concept-d-lift-settle.README.md`

---

## 0. Purpose

This document defines the next controlled step after the Project 3 handoff reset and static draft gap audit.

The immediate goal is:

```text
Complete the missing public editorial static references needed before the current source-native app can be visibly reconstructed.
```

This is not a source implementation plan yet. It is a static completion plan.

No `apps/web` source page should be rebuilt from static preview until the minimum core static set is complete and reviewed.

---

## 1. Business direction

The long-term site weighting is:

```text
Ink & East = future main site / publication-led brand center.
Spatial Flow = ecommerce subsite / commerce-side support system.
```

Therefore, the core Project 3 sequence should prioritize Ink & East as the main editorial/publication experience.

However, Spatial Flow cannot be ignored. Ecommerce-side defects that affect product conversion and customer feedback should be preserved and scheduled instead of forgotten.

The Spatial Flow Add to Cart feedback concept has now been captured in this repository as a reference:

```text
preview/add-to-cart-concept-d-lift-settle.html
preview/spatial-flow-add-to-cart-concept-d-lift-settle.README.md
```

That preview records a product-detail Add to Cart interaction concept, including desktop and responsive/mobile feedback behavior. It remains a static reference only and should not be wired into WooCommerce from this repository without a separate implementation task.

---

## 2. Current baseline from the static gap audit

The static gap audit concluded:

```text
Static preview = useful visual/product blueprint.
Static preview != complete frozen design system.
Static preview != production implementation.
Static preview != directly copyable source code.
```

The strongest current Ink & East static references are:

1. `preview/ink-east-v1.html` — Home / journal cover;
2. `preview/ink-east-article-001-v1.html` — public article reading page;
3. `preview/ink-east-issue-001-v1.html` — Issue 001 page.

The biggest missing static pieces for the current source-native app are:

1. Articles / Archive;
2. Search;
3. Topics;
4. Collections.

The current source-native app already has routes for these areas, but the static visual references for them are missing or incomplete.

---

## 3. Scope for Core Static Completion Pass 1

This pass includes only the public editorial browsing path.

Included:

- Home review/freeze;
- Article review/freeze;
- Issue review/freeze;
- Articles / Archive static page;
- Search static page;
- Topics static reference;
- Collections static reference;
- shared public nav/footer decision for this editorial phase.

Excluded:

- VIP Library implementation;
- Reading Room implementation;
- Membership implementation;
- Reader Notes implementation;
- Letters / Ask workflow implementation;
- Custom Reading implementation;
- Custom Ebook implementation;
- Community implementation;
- Stripe / payment / account work;
- newsletter / dispatch work;
- Payload schema work;
- `apps/web` source implementation;
- production deployment.

These excluded modules already have useful preview references, but they should not drive this public editorial static pass.

---

## 4. Working order

Use this order:

```text
1. Home review/freeze
2. Article review/freeze
3. Issue review/freeze
4. Articles / Archive static reference
5. Search static reference
6. Topics static reference
7. Collections static reference
8. Public nav/footer static decision
```

Reason:

- Home, Article, and Issue already exist and define the visual language.
- Articles / Search / Topics / Collections are missing and are required by the current source-native routes.
- Nav/footer must be resolved as one shared system, not copied per static file.

---

## 5. Existing pages to review and freeze

### 5.1 Home

Reference:

```text
preview/ink-east-v1.html
```

Decision needed:

- Is this still the accepted homepage / journal cover direction?
- Does the page structure still match the intended future main site?
- Should any sections be removed before source mapping?
- Which links should be visible in the public editorial phase?

Freeze requirement:

```text
The homepage can be used as a source-facing reference only after the user accepts it or records specific revision notes.
```

---

### 5.2 Public Article

Reference:

```text
preview/ink-east-article-001-v1.html
```

Decision needed:

- Is the reading layout accepted?
- Which article blocks must be present in the first source pass?
- Should Reader Notes be omitted, stubbed, or visually reserved for later?
- How much of the support band should survive before membership exists?

Freeze requirement:

```text
The article page can be used as a source-facing reference only after the reading experience is accepted or revised.
```

---

### 5.3 Issue

Reference:

```text
preview/ink-east-issue-001-v1.html
```

Decision needed:

- Is the Issue 001 page direction accepted?
- Should Issue TOC remain free/public-only for now?
- Should discussion/Community CTAs be hidden until later?
- How should the Issue page point into Articles, Topics, or Collections?

Freeze requirement:

```text
The Issue page can be used as a source-facing reference only after issue structure and visible CTAs are confirmed.
```

---

## 6. Missing static references to create

### 6.1 Articles / Archive

Suggested file:

```text
preview/ink-east-articles-archive-v1.html
```

Purpose:

- public article browsing page;
- not a generic blog list;
- should feel like an editorial archive / reading shelf;
- should support current source route `/articles`.

Required sections:

- quiet page hero / archive intro;
- featured article or latest issue anchor;
- article list/grid with editorial metadata;
- filters or soft groupings by issue/topic/collection;
- pagination or load-more visual placeholder;
- empty-state reference;
- shared nav/footer reference.

Do not include:

- membership paywall;
- ecommerce product cards;
- social feed density;
- aggressive newsletter modal;
- dashboard-like filter UI.

---

### 6.2 Search

Suggested file:

```text
preview/ink-east-search-v1.html
```

Purpose:

- public search page;
- should support current source route `/search`;
- should feel like searching an archive, not searching a shopping site.

Required states:

- initial empty query state;
- populated result state;
- no-result state;
- search input and result item visual contract;
- optional topic/collection suggestions.

Do not include:

- instant autocomplete unless explicitly planned;
- account-only content;
- paywall logic;
- heavy app-like filter panels.

---

### 6.3 Topics

Suggested file:

```text
preview/ink-east-topic-v1.html
```

or, if a single file should cover both index and detail:

```text
preview/ink-east-topics-v1.html
```

Purpose:

- topic browsing reference;
- should support `/topics` and `/topics/[slug]` in the current source app.

Required decisions:

- whether Topics are conceptual labels, reading paths, or lightweight tags;
- whether Topic detail pages show articles only or also related issues/collections;
- whether a topic page needs a poetic/editorial intro.

Recommended direction:

```text
Topics should feel like thematic doors into the journal, not SEO tag pages.
```

---

### 6.4 Collections

Suggested file:

```text
preview/ink-east-collection-v1.html
```

or, if a single file should cover both index and detail:

```text
preview/ink-east-collections-v1.html
```

Purpose:

- curated collection reference;
- should support `/collections` and `/collections/[slug]` in the current source app.

Required decisions:

- whether Collections are curated editorial shelves;
- how Collections differ from Topics;
- whether collections can include issues, articles, and editorial notes;
- whether a collection has a sequence/order.

Recommended distinction:

```text
Topics = thematic labels / conceptual doors.
Collections = editor-curated shelves / ordered reading sets.
```

---

## 7. Public nav/footer decision

The static gap audit showed that existing static pages repeat their own nav/footer blocks. This is not safe for source mapping.

For Core Static Completion Pass 1, use a conservative public editorial nav.

Recommended public editorial phase nav:

```text
Home
Issues
Articles
Topics
Collections
Search
About
```

Defer these nav items until the corresponding systems exist:

```text
VIP Library
Reading Room
Ask
Studio
Membership
Community
```

Footer should include only links that are either:

1. real public editorial destinations;
2. intentionally placeholder legal/editorial pages scheduled for later;
3. hidden until ready.

No dead footer link should be carried into source implementation as if it were live.

---

## 8. Use of external frontend AI-generated previews

The user may use a visually stronger frontend AI to generate static preview HTML for this phase.

Allowed process:

1. ChatGPT defines the page purpose, constraints, information architecture, forbidden elements, and acceptance criteria.
2. User may ask another frontend-focused AI to generate the static HTML preview.
3. User provides the generated HTML back into this project window.
4. ChatGPT reviews the source for scope, naming, placeholder risk, mobile coverage, and consistency with the repository plan.
5. The preview is committed only as static reference under `preview/`, not as production code.
6. A small README or audit note should be added when the preview has important caveats.

Rules:

- Do not let external AI decide product strategy.
- Do not accept frontend code that introduces new product modules outside the current scope.
- Do not accept visual pages that conflict with Ink & East's quiet editorial identity.
- Do not accept pages that turn the publication into SaaS, social feed, ecommerce, or dashboard UI.
- Do not map any external static HTML directly into `apps/web` without a later mapping task.

---

## 9. Mobile and responsive requirement

Every new static preview created in this pass must include mobile/responsive consideration.

Minimum requirement:

- desktop layout;
- tablet breakpoint or equivalent layout behavior;
- mobile breakpoint;
- readable typography on mobile;
- no horizontal overflow;
- nav/footer behavior defined;
- reduced-motion fallback where interaction or animation is used.

The Spatial Flow Add to Cart reference is explicitly recorded as desktop plus responsive/mobile coverage. The same standard should apply to future Ink & East previews.

---

## 10. Acceptance criteria for this pass

This pass is complete only when:

1. Home review status is recorded.
2. Article review status is recorded.
3. Issue review status is recorded.
4. Articles / Archive static preview exists or a reason for deferral is recorded.
5. Search static preview exists or a reason for deferral is recorded.
6. Topics static preview exists or a reason for combining/deferring is recorded.
7. Collections static preview exists or a reason for combining/deferring is recorded.
8. Public editorial nav is confirmed.
9. Footer direction is confirmed.
10. Mobile/responsive coverage is present or explicitly noted as missing.
11. No new membership/payment/service/community implementation is introduced.
12. The next task can move to Static-to-Source Mapping without guessing visual direction.

---

## 11. Next recommended task after this plan

After this plan is accepted, start with:

```text
Core Static Completion Pass 1A · Review Existing Core References
```

Review these files visually:

```text
preview/ink-east-v1.html
preview/ink-east-article-001-v1.html
preview/ink-east-issue-001-v1.html
```

Output can be a short review document:

```text
docs/PROJECT-3-CORE-STATIC-REVIEW-NOTES.md
```

or direct user comments in the chat that are later recorded into that document.

Only after those three references are accepted or revised should the missing pages be created.

---

## 12. Final working summary

```text
Project 3 should continue with Ink & East as the future main editorial site while preserving Spatial Flow ecommerce-side preview references when important defects are discovered. The immediate static work is not VIP, membership, services, or community. It is the public editorial browsing foundation: Home, Article, Issue, Articles Archive, Search, Topics, Collections, plus one shared nav/footer direction. The existing Home/Article/Issue references must be reviewed, and the missing browse pages must be created with responsive/mobile coverage before any source-native frontend reconstruction begins.
```
