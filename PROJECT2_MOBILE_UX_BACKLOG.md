# Project 2 · Mobile UX Backlog

Last updated: 2026-06-21

## Purpose

This file records Project 2 mobile-specific issues that are intentionally preserved during the desktop-first / visual replacement phase. These items should not be forgotten, but they should also not block the current visual migration unless they break layout or core commerce functionality.

## Current rule

During the current phase, mobile issues are handled only when they cause:

```text
1. broken layout
2. horizontal page overflow
3. unusable navigation
4. unusable add-to-cart / checkout path
5. PHP / JS fatal error
```

Mobile experience refinements are deferred to dedicated mobile passes.

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

## Current blocking status

```text
None of these mobile UX items block the current Project 2 desktop-first visual replacement phase.
They must be revisited before final mobile QA / launch polish.
```
