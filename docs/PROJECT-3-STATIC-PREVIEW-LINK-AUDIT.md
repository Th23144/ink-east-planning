# Project 3 · Static Preview Link Audit

> Repository: `Th23144/ink-east-planning`  
> Scope: `preview/*.html` review-flow links only  
> Status: audit/report only  
> Does not modify preview HTML  
> Does not modify `apps/web`

---

## 0. Current status checkpoint

The Membership hero-card work has moved from helper preview into the real static preview file.

```text
PR #37: merged
preview/ink-east-membership-v1.html: updated on main
PR #33: closed, not merged
```

This audit starts the next phase: static-preview navigation and interlink review.

---

## 1. Purpose

The current `preview/*.html` files are still independent static pages.

The immediate goal is not to build shared source components yet.

The immediate goal is:

```text
Make static previews easier to review like a connected website, without manually editing URLs.
```

This audit identifies link issues first. Actual link edits should happen in follow-up PRs.

---

## 2. Confirmed high-priority issue: Spatial Flow `The Journal`

Search result shows the legacy Spatial Flow Journal destination appears in active Spatial Flow preview pages.

Problem target:

```text
./spatial-flow-journal-v1.html
```

This is the old Kiro-generated Spatial Flow Journal page and should not be the active destination for `The Journal`.

Correct target:

```text
./ink-east-v1.html
```

Known affected files from search:

```text
preview/spatial-flow-v1.html
preview/spatial-flow-shop-v1.html
preview/spatial-flow-product-v1.html
preview/spatial-flow-cart-v1.html
preview/index.html
```

Required follow-up:

```text
Create a Spatial Flow navigation cleanup PR that replaces the active `The Journal` link target with ./ink-east-v1.html.
```

Do not delete `preview/spatial-flow-journal-v1.html` yet. Treat it as a legacy reference until the user explicitly approves removal or archival labeling.

---

## 3. Placeholder `href="#"` findings

Search result shows active `href="#"` patterns in several preview files.

Known affected preview files from search:

```text
preview/ink-east-membership-v1.html
preview/ink-east-v1.html
preview/ink-east-article-002-vip-v1.html
```

Interpretation:

Some of these are acceptable temporary placeholders when marked with attributes such as:

```text
data-pending-link
aria-disabled="true"
data-placeholder="true"
```

But raw footer/nav links such as:

```html
<a href="#">Suggest an Issue Theme</a>
<a href="#">Vote · Patrons only</a>
<a href="#">Past Manuscripts</a>
```

should be converted to inert placeholder elements or properly marked disabled placeholders.

Recommended placeholder pattern:

```html
<span class="foot-link" data-placeholder="true">Suggest an Issue Theme</span>
```

or, if it must remain an anchor for visual reasons:

```html
<a href="#" data-placeholder="true" aria-disabled="true">Future route</a>
```

Recommended follow-up:

```text
Do not blindly replace every href="#".
Classify each one first:
1. payment / account pending link;
2. future editorial route;
3. accidental raw placeholder;
4. actual in-page anchor.
```

---

## 4. Articles Archive link adoption

The Articles Archive page is now merged:

```text
preview/ink-east-articles-archive-v1.html
```

Current search did not show many active static pages linking to it yet.

Required follow-up:

```text
Add Articles / Public Archive links into relevant Ink & East static headers, footers, and archive-adjacent page sections.
```

Likely target areas:

```text
preview/ink-east-v1.html
preview/ink-east-issue-001-v1.html
preview/ink-east-article-001-v1.html
preview/ink-east-article-002-vip-v1.html
preview/ink-east-membership-v1.html
preview/ink-east-custom-ebook-v1.html
```

Important:

```text
Do not expose future Topics / Collections / Search as real links unless those pages exist.
```

---

## 5. Add to Cart feedback audit note

Accepted concept page:

```text
preview/add-to-cart-concept-d-lift-settle.html
```

Search result indicates the concept is documented, but not actively wired into the product-preview journey.

Current issue from user testing:

```text
When starting from Spatial Flow preview/home and navigating to the product page, Add to Cart feedback does not appear because the concept is isolated in its own file.
```

Required follow-up:

```text
Identify the canonical Spatial Flow product detail preview file first.
Then choose one integration route:
A. link-only review path;
B. apply the accepted Add to Cart feedback behavior into the product detail static preview page;
C. defer real implementation until source/component work.
```

Recommended next action:

```text
Use Option B after confirming canonical product preview file, because the user expects the product page itself to show feedback during static review.
```

Likely file to inspect first:

```text
preview/spatial-flow-product-v1.html
```

Do not implement this inside the link-audit PR.

---

## 6. RawGitHack / GitHub blob links inside preview files

Search for RawGitHack absolute links inside preview files returned no obvious active matches in current search.

Still, follow-up cleanup should keep this rule:

```text
Inside static HTML files, use relative links such as ./ink-east-v1.html.
Use RawGitHack URLs only in PR descriptions and chat responses.
```

GitHub blob-link search timed out once, so this should be retried during the actual cleanup pass if needed.

---

## 7. Header/Footer source consistency note

This audit is about links, not source normalization.

However, link cleanup will expose header/footer divergence. For example, a page may visually look aligned but have different source structures, different footer lists, or different placeholder handling.

Do not solve all of that inside the link cleanup PR.

Keep the later dedicated pass:

```text
Header/Footer source normalization
```

Goal of that later pass:

```text
Use one canonical header/footer source block per site area, with only active state and valid link differences.
```

---

## 8. Recommended follow-up PR sequence

### PR A — Spatial Flow navigation correction

Scope:

```text
preview/spatial-flow-v1.html
preview/spatial-flow-shop-v1.html
preview/spatial-flow-product-v1.html
preview/spatial-flow-cart-v1.html
preview/index.html, if it exposes the same legacy route
```

Main correction:

```text
The Journal: ./spatial-flow-journal-v1.html → ./ink-east-v1.html
```

Do not touch product Add to Cart behavior in this PR.

---

### PR B — Ink & East public interlink cleanup

Scope:

```text
Core Ink & East public preview pages only.
```

Add or correct links for:

```text
Home
Issues / Issue 001
Articles / Public Archive
Article 001
Membership
Custom Ebook Studio
```

Convert accidental raw placeholder footer links to inert placeholders.

---

### PR C — Spatial Flow product Add to Cart static integration

Scope:

```text
Product detail static preview only, after canonical file is confirmed.
```

Likely target:

```text
preview/spatial-flow-product-v1.html
```

Goal:

```text
Make the product page itself demonstrate the accepted Add to Cart feedback, not only the isolated concept page.
```

---

### PR D — Header/Footer source normalization

Scope:

```text
Static source consistency, not visual redesign.
```

Goal:

```text
Reduce future ambiguity before shared React/Next.js components are created.
```

---

### PR E — Wide-screen layout / composition audit and fixes

Scope:

```text
Pages or sections that are too boxed by max-width, and pages that are wide enough but compositionally empty.
```

This is the later pass for the user's combined concern:

```text
1. width-constrained pages not filling screen;
2. awkward empty zones needing editorial anchors.
```

---

## 9. Final summary

```text
The next executable cleanup should start with Spatial Flow's wrong The Journal destination because it is a concrete, high-confidence error across multiple active commerce preview pages. After that, Ink & East public interlinking should adopt the newly merged Articles Archive page. Add to Cart feedback should be handled after the canonical product detail preview is confirmed, and header/footer source normalization plus wide-screen layout cleanup should remain separate later passes.
```
