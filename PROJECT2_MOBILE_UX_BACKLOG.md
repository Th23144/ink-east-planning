# Project 2 · Mobile / Commerce UX Backlog

Last updated: 2026-06-21

## Purpose

This file records Project 2 mobile-specific and commerce UX issues that are intentionally preserved during the desktop-first / visual replacement phase. These items should not be forgotten, but they should also not block the current visual migration unless they break layout or core commerce functionality.

## Current rule

During the current phase, mobile / commerce UX issues are handled immediately only when they cause:

```text
1. broken layout
2. horizontal page overflow
3. unusable navigation
4. unusable add-to-cart / checkout path
5. PHP / JS fatal error
```

Experience refinements are deferred to dedicated follow-up passes.

---

## Step 4C-MOBILE1 · Shop Mobile First Screen Product Exposure

Status:

```text
Backlog / preserved issue
```

Area:

```text
Shop archive
/shop/
Product archive pages
```

Issue:

```text
On mobile, the first screen is dominated by the editorial Hero, description, and meta cards. Product cards are not visible early enough.
```

Current assessment:

```text
The page does not break.
There is no confirmed horizontal overflow.
Filters, sorting, product grid, pagination, Editor's Pick behavior, Closing Note, and Product Guidance remain usable.
This is a UX / conversion refinement issue, not a current blocking bug.
```

Reason preserved:

```text
The V2 static reference was desktop/editorial-first and did not include a complete mobile commerce-optimized layout.
```

Future direction:

```text
1. Reduce Hero height on mobile.
2. Compress or collapse Hero meta cards.
3. Move product grid higher.
4. Optionally show a compact "Jump to products" affordance.
5. Keep filters accessible without consuming the first screen.
```

---

## Step 4D-MOBILE1 · Single Product Mobile Detail UX

Status:

```text
Backlog / preserved issue
```

Area:

```text
Single product page
WooCommerce product detail pages
woocommerce/single-product.php
```

Issue A — Breadcrumb is too long:

```text
Mobile breadcrumb does not force page-level horizontal overflow, but the breadcrumb itself is too long and requires manual horizontal scrolling to see the full path.
```

Current assessment:

```text
Not a layout-breaking issue.
The page itself is not horizontally blown out.
Gallery, thumbnails, summary, price, variations, add-to-cart, Placement Suggestion, Trust Strip, Product Story, and Related Products remain usable.
```

Future direction for breadcrumb:

```text
1. Show only Home / Shop / Current Product on mobile.
2. Hide intermediate category crumbs on mobile.
3. Truncate current product title with ellipsis.
4. Convert breadcrumb into compact horizontal chips.
```

Issue B — Product page is still a compressed desktop reference:

```text
The single product page is functional on mobile, but still feels like a desktop V2 layout compressed into mobile rather than a fully mobile-optimized commerce page.
```

Reason preserved:

```text
The V2 static reference did not include complete mobile optimization. Current phase prioritizes safe visual migration while preserving WooCommerce behavior.
```

Future direction:

```text
1. Rebalance gallery height and first-screen summary exposure.
2. Compress breadcrumb and meta.
3. Make add-to-cart path more immediately reachable.
4. Review whether Placement Note and Trust Strip should be collapsible or reduced on mobile.
5. Keep variable product selection and native WooCommerce add-to-cart intact.
```

---

## Step 4E-UX1 · Add-to-cart Success Feedback

Status:

```text
Backlog / preserved issue
```

Area:

```text
Single product page
Shop archive product cards if AJAX add-to-cart is used
Cart path / Bag count feedback
Desktop and mobile
```

Issue:

```text
After clicking Add to Cart, the product is added successfully, but there is no clear visual confirmation. During testing, the user could not immediately tell that the item had been added to the cart.
```

Current assessment:

```text
This is not a blocking bug because add-to-cart itself works.
It is a commerce feedback / conversion clarity issue.
It affects both desktop and mobile perception.
It should not interrupt the current Single Product visual migration sequence.
```

Future direction:

```text
1. Add a small success confirmation after add-to-cart.
2. Prefer a non-intrusive toast, inline notice, or mini-cart feedback state.
3. Ensure the Bag count updates visibly.
4. Avoid breaking WooCommerce native notices, AJAX add-to-cart, variation add-to-cart, cart fragments, or checkout flow.
5. Decide whether Shop archive add-to-cart and Single Product add-to-cart should share the same feedback pattern.
```

Recommended timing:

```text
Handle after Single Product visual structure is stable and before final cart/checkout smoke test.
Suggested future step: Step 4E-UX1 or Step 4D-G-FIX1, depending on whether the issue is handled as a global commerce UX pass or as a single-product follow-up.
```

---

## Current blocking status

```text
None of these mobile / commerce UX items block the current Project 2 desktop-first visual replacement phase.
They must be revisited before final mobile QA / launch polish and before the final commerce-path smoke test.
```
