# Project 3 · Static Preview Interlinking Plan

> Repository: `Th23144/ink-east-planning`  
> Scope: `preview/*.html` static-preview navigation, review-flow links, and ecommerce interaction reference wiring  
> Status: planning only  
> Does not modify `apps/web`  
> Does not implement production WooCommerce / Next.js behavior

---

## 0. Why this plan exists

The current `preview/*.html` pages are mostly independent static files.

That means each preview page can have its own:

- HTML shell;
- CSS;
- header;
- footer;
- placeholder links;
- local interaction script;
- incomplete or outdated navigation decisions.

This is why the project has already seen issues such as:

- a footer structure mismatch in `preview/ink-east-custom-ebook-v1.html`;
- generated archive-page footer details that did not match the existing Ink & East static footer source;
- static Add to Cart feedback working only inside its own concept page, not when navigating through another product page;
- Spatial Flow's `The Journal` header link pointing to an old `spatial-flow-journal-v1.html` page instead of the Ink & East journal surface.

The goal of this pass is **not** to merge all static pages into one real app yet.

The goal is narrower:

```text
Make the static previews reviewable like a connected website, so the user can click through them without manually editing URLs.
```

---

## 1. Important distinction: static preview vs production integration

### Static preview pages

These are visual and interaction references.

They can simulate navigation and simple interactions, but they are not the real source app and not real WooCommerce.

Examples:

```text
preview/ink-east-v1.html
preview/ink-east-issue-001-v1.html
preview/ink-east-article-001-v1.html
preview/ink-east-articles-archive-v1.html
preview/add-to-cart-concept-d-lift-settle.html
```

### Production/source implementation

This belongs later in source code, especially:

```text
apps/web
shared components
real routes
real cart state
real CMS data
real WooCommerce or future commerce logic
```

The Add to Cart concept is a good example:

```text
The concept page can show product thumbnail flight, cart bump, popover, subtotal, and CTA states.
But it does not automatically make another product page, WooCommerce template, or future source route behave that way.
```

So the immediate action should be:

```text
Wire the concept into the static-preview review path first.
Implement it in real product/source code later.
```

---

## 2. Link policy for preview files

Use relative preview links whenever possible.

Good:

```html
<a href="./ink-east-v1.html">Home</a>
<a href="./ink-east-articles-archive-v1.html">Public Archive</a>
<a href="./ink-east-issue-001-v1.html">Issue 001</a>
```

Avoid raw branch-specific links inside static files:

```text
https://raw.githack.com/...
```

RawGitHack URLs are for user review, not for internal page-to-page links.

Avoid raw `href="#"` unless the element is explicitly treated as a non-navigation placeholder.

Preferred placeholder forms:

```html
<span data-placeholder="true">Topics</span>
<a data-placeholder="true" aria-disabled="true">Future route</a>
```

For a future page that does not exist yet, do not create a misleading active link.

---

## 3. Required correction: Spatial Flow `The Journal` link

Problem:

```text
Spatial Flow preview header has a `The Journal` link that currently points to:
preview/spatial-flow-journal-v1.html
```

That page is an old Kiro-generated Spatial Flow Journal page and should not be the journal destination for the current Project 3 direction.

Correct direction:

```text
The Journal should point to Ink & East.
```

Preferred preview link:

```html
<a href="./ink-east-v1.html">The Journal</a>
```

The old page should be treated as legacy / deprecated unless the user explicitly wants to preserve it as historical reference.

Do not keep using it as the active journal destination.

---

## 4. Add to Cart feedback reference wiring

Existing accepted concept:

```text
preview/add-to-cart-concept-d-lift-settle.html
preview/spatial-flow-add-to-cart-concept-d-lift-settle.README.md
```

Current problem:

```text
The static concept works inside its own file only.
If the user starts from another Spatial Flow preview page and opens a product page, the Add to Cart feedback does not appear unless that actual product preview file has the concept wired into it.
```

There are two different levels of action:

### Level 1 — Preview review wiring

Goal:

```text
From Spatial Flow preview pages, clicking the relevant product/detail link should be able to land on the Add to Cart feedback concept page for review.
```

This only connects the static preview journey.

It does not implement production cart behavior.

### Level 2 — Static product page integration

Goal:

```text
Take the accepted feedback behavior and apply it into the actual Spatial Flow product-detail preview page, if such a canonical product preview exists in this repository.
```

Before doing this, first identify the current canonical product detail preview file.

Possible candidates need audit, not guessing.

### Level 3 — Production implementation

Goal:

```text
Rebuild the accepted behavior as a real component / WooCommerce template behavior / future source commerce component.
```

This is later and should not be mixed into the static interlink pass.

---

## 5. Work order

### Pass 0 — Finish current static reference intake

Status now:

```text
PR #34 Articles Archive static reference has been accepted and merged.
```

Still pending from external frontend AI:

```text
1. Custom Ebook redesign
2. Membership right-side empty-space refinement
```

These should be processed as separate PRs, not mixed with the interlinking pass.

Recommended order:

```text
1. Process Custom Ebook file.
2. Process Membership file.
3. Then run the interlinking/link-audit pass once the new files are in main.
```

Reason:

```text
If links are cleaned before Custom Ebook and Membership are replaced, the same links may need to be fixed twice.
```

---

### Pass 1 — Preview link audit

Scan `preview/*.html` for:

```text
href="#"
spatial-flow-journal-v1.html
raw.githack absolute links inside files
github.com blob links inside files
missing links to newly accepted pages
header/footer inconsistencies that break review flow
```

Target output:

```text
docs/PROJECT-3-STATIC-PREVIEW-LINK-AUDIT.md
```

This should be a report first, not an immediate mass edit.

---

### Pass 2 — Ink & East public preview interlinking

Goal:

```text
Make the core Ink & East public previews click through like a small static site.
```

Core public links:

```text
Home          -> ./ink-east-v1.html
Issues        -> ./ink-east-issue-001-v1.html or future issue index placeholder
Articles      -> ./ink-east-articles-archive-v1.html
Article 001   -> ./ink-east-article-001-v1.html
Topics        -> placeholder until topic page exists
Collections   -> placeholder until collection page exists
Search        -> placeholder until search page exists
About         -> placeholder until about page exists
```

Rules:

```text
Do not expose VIP / Reading Room / Membership / Ask / Community as primary public nav unless the specific page is intentionally being reviewed.
Do not create raw # links.
Do not redesign the pages during link cleanup.
```

Expected PR:

```text
preview(ink-east): interlink public static references
```

---

### Pass 3 — Spatial Flow preview interlinking

Goal:

```text
Make Spatial Flow static previews click through correctly for review.
```

Specific required fix:

```text
The Journal link must point to ./ink-east-v1.html, not ./spatial-flow-journal-v1.html.
```

Additional checks:

```text
Home -> Shop / Product / Cart / Checkout preview routes
Product links -> current product preview or accepted Add to Cart feedback concept path
Cart / Checkout links -> correct preview pages if available
Ink & East journal link -> ./ink-east-v1.html
```

Expected PR:

```text
preview(spatial-flow): fix static review navigation
```

---

### Pass 4 — Add to Cart feedback static integration decision

Before editing product previews, determine which of these the user wants:

#### Option A — Link-only review path

```text
Product CTAs in Spatial Flow preview link to:
./add-to-cart-concept-d-lift-settle.html
```

This is fastest and safest for visual review.

#### Option B — Apply feedback to canonical product-detail preview

```text
Copy the accepted feedback behavior into the real product-detail static preview file.
```

This is closer to real page behavior, but requires identifying the canonical product static file first.

#### Option C — Defer until source implementation

```text
Keep the concept archived only and implement the feedback later as a proper shared commerce component.
```

Recommended immediate choice:

```text
Option B if the user wants the product page itself to behave correctly during preview.
Option A if the user only wants quick click-through review.
```

---

## 6. Timing recommendation

### Now

```text
Merge PR #34 if visual review is accepted.
Receive the two external AI files whenever ready.
```

### Next

```text
Process Custom Ebook redesign as its own PR.
Process Membership refinement as its own PR.
```

### Then

```text
Run Pass 1 link audit.
Run Pass 2 Ink & East public interlinking.
Run Pass 3 Spatial Flow static navigation fix, including The Journal link.
```

### After that

```text
Handle Add to Cart feedback integration as either a link-only static review path or a product-detail static preview integration.
```

---

## 7. External AI file intake rule

When the user sends external AI files, process them as follows:

```text
1. Review the file first.
2. Check footer/header/link behavior.
3. Check mobile responsiveness.
4. Check no raw href="#" leakage.
5. Check no wrong modules are introduced.
6. Commit to a separate branch.
7. Open a separate PR.
```

Do not mix multiple page replacements with navigation cleanup unless explicitly requested.

---

## 8. Final summary

```text
Project 3 static previews are still independent files, not a shared app. The next practical goal is to make them reviewable as a connected static site: correct internal links, correct Journal destination, no legacy Spatial Flow Journal routing, no raw placeholder anchors, and a clear decision on how the Add to Cart feedback concept should appear in the product-preview journey. Full source/component integration comes later.
```
