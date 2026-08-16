# Project 2 → Project 3 Ecommerce Parity / Migration Matrix

> Audit date: 2026-08-15  
> Project 2 reference repository: `Th23144/spatial-flow-v2-preview-lab`  
> Project 3 implementation repository: `Th23144/ink-east-planning`  
> Status: authoritative ecommerce completeness baseline for Project 3 unless explicitly superseded by the user.

## 0. Why this document exists

Project 3 currently has a much smaller visible Spatial Flow surface than Project 2. That does **not** mean Project 3 should inherit only the four current static commerce previews.

Project 2 already contains a broader ecommerce product surface and many accepted page/state/workflow decisions. Project 3 should reuse that product truth while rebuilding the long-term ecommerce system source-natively.

This document prevents two opposite errors:

1. treating a Project 3 static HTML preview as if the source-native function already exists;
2. blindly copying WordPress/WooCommerce implementation details instead of carrying forward the proven product behavior.

The governing Project 3 mode remains:

```text
Function-complete + page-complete + structurally production-ready + visually provisional.
```

Current V0 visuals are working test visuals, not launch-final design.

---

## 1. Evidence and freshness rule

This audit uses three evidence classes.

### A. Project 2 accepted runtime/product truth

Later acceptance records override older status matrices where they conflict. Important examples include:

- `project2-progress/STEP_4E_B2_R5_E6_FINAL_CART_1_TO_1_ACCEPTANCE_AND_CLOSURE.md`
- `STEP_4F_PRODUCT_PACKAGING_FINAL_ACCEPTED_20260814.md`
- `project2-progress/STEP_4F_R1_BATCH6_FINAL_END_TO_END_ACCEPTED_20260814.md`
- `project2-progress/STEP_4F_CRYPTO_BIG_BATCH_A_V029_FINAL_ACCEPTED_20260815.md`
- `project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_ACCEPTANCE.md`
- `project2-progress/STEP_4F_S7_STEP04_RESULT_PAGE_ACCEPTANCE_AND_CLOSURE.md`

Older files such as `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` remain useful for page inventory but are not a reliable final completion score after later August work.

### B. Project 2 static/product reference surface

The Project 2 repository contains static references for the core commerce, checkout, support and utility page families. A static reference proves product/page intent; it does not by itself prove live production completion.

### C. Project 3 current source truth

At this audit point Project 3 has four active Spatial Flow static V0 previews:

- `preview/spatial-flow-v1.html`
- `preview/spatial-flow-shop-v1.html`
- `preview/spatial-flow-product-v1.html`
- `preview/spatial-flow-cart-v1.html`

They share the V0 ecommerce shell introduced in Step 6.5.

However, current `apps/web` source routes are editorial routes such as `/`, `/articles`, `/issues`, `/topics`, `/collections`, and `/search`. The source tree currently contains no source-native `/shop`, product-detail, cart or checkout route and no Product commerce collection/domain model.

Therefore:

```text
P3 static V0 exists != P3 source-native commerce exists.
```

---

## 2. Matrix vocabulary

| Term | Meaning |
|---|---|
| `P3 V0 STATIC` | A current Project 3 static preview exists; no source-native completion claim. |
| `MUST SOURCE-NATIVE` | Required long-term Project 3 capability. |
| `REUSE P2 PRODUCT TRUTH` | Carry forward the proven behavior/IA/contract, not the WP/Woo implementation. |
| `IA REVIEW` | Product capability is valid but final route/location under the Ink & East main-site architecture must be decided before implementation. |
| `DEFERRED` | Intentionally not part of the current first production-capable commerce tranche. |
| `REPLACE WITH INK & EAST` | Do not create a parallel Spatial Flow editorial system; Ink & East owns that function. |
| `WP/WOO ONLY — DO NOT PORT` | Implementation mechanism is Project 2-specific and must not become Project 3 architecture. |

---

# Part A — Page / route surface

## 3. Core commerce pages

| Product surface | Project 2 reference/truth | Project 3 today | Project 3 action |
|---|---|---|---|
| Spatial Flow commerce landing | `spatial-flow-v1.html` | `P3 V0 STATIC` | `IA REVIEW` — do not make it a second site root. Decide whether this becomes a shop/brand landing inside the Ink & East main-site architecture. |
| Shop / product archive | `spatial-flow-shop-v1.html`; Project 2 accepted real catalog/filter/sort/pagination behavior | `P3 V0 STATIC`; no source route | `MUST SOURCE-NATIVE` + `REUSE P2 PRODUCT TRUTH` |
| Product detail | `spatial-flow-product-v1.html`; accepted real product gallery/summary/options/attributes/related-product behavior | `P3 V0 STATIC`; no source route/model | `MUST SOURCE-NATIVE` + `REUSE P2 PRODUCT TRUTH` |
| Cart / Bag | `spatial-flow-cart-v1.html`; full native Cart regression accepted | `P3 V0 STATIC`; no source cart domain | `MUST SOURCE-NATIVE` + `REUSE P2 PRODUCT TRUTH` |
| Checkout Step 01 — Contact / Address | `spatial-flow-checkout-v1.html` + accepted live flow | Missing | `MUST SOURCE-NATIVE` |
| Checkout Step 02 — Shipping | `spatial-flow-checkout-shipping-v1.html` + accepted live flow | Missing | `MUST SOURCE-NATIVE` |
| Product Packaging inside Step 02 | accepted final Product Packaging system | Missing | `MUST SOURCE-NATIVE` + `REUSE P2 PRODUCT TRUTH` |
| Checkout Step 03 — Payment host | `spatial-flow-checkout-payment-v1.html`; provider/gateway-host semantics | Missing | `MUST SOURCE-NATIVE`; provider abstraction must not be tied to WooCommerce |
| Crypto Step-03 Workspace | `spatial-flow-checkout-crypto-invoice-v1.html` + accepted backend/state contracts | Missing | `MUST SOURCE-NATIVE` for fixed first-phase USDT/TRON capability; see crypto section |
| Step 04 — Order result / Thank You | `spatial-flow-thank-you-v1.html`; confirmed/pending semantics accepted | Missing | `MUST SOURCE-NATIVE`; server/order state is authority |

### Route rule to settle in the first commerce implementation batch

The permanent source route contract must be decided before large-scale implementation. Current preferred IA is a shop area beneath the Ink & East main site, but legacy SEO/migration compatibility must be checked before locking product-detail URLs.

At minimum Project 3 needs stable conceptual routes for:

```text
shop
product detail
cart
checkout
payment continuation / crypto workspace
order result
```

Do not let static filenames become production URLs by accident.

---

## 4. Customer, support and utility pages

Project 2 contains reference pages for all of the following. They are part of the completeness benchmark even where their final Project 3 route may change.

| Surface | P2 reference | P3 today | P3 action |
|---|---|---|---|
| Account / customer center | `spatial-flow-account-v1.html` | Missing as commerce account | `MUST SOURCE-NATIVE` — account/auth/order history design required |
| Wishlist / Saved | `spatial-flow-wishlist-v1.html` and Project 2 Saved/Wishlist behavior | Missing | `MUST SOURCE-NATIVE` if Saved remains a current product promise; current assumption is retain |
| Track Order | `spatial-flow-track-order-v1.html` | Missing | `MUST SOURCE-NATIVE` |
| Product search | `spatial-flow-search-v1.html` | Current P3 `/search` is editorial article search, not commerce product search | `MUST SOURCE-NATIVE`; decide unified search vs scoped product search without conflating data types |
| About | `spatial-flow-about-v1.html` | Ink & East/product architecture has separate editorial identity | `IA REVIEW` — likely preserve Spatial Flow brand/about content without creating duplicate global About logic |
| Services / Consult | `spatial-flow-services-v1.html` | Missing commerce/service route | `IA REVIEW` + likely `MUST SOURCE-NATIVE`; preserve service truth, decide location under combined architecture |
| FAQ / Help | `spatial-flow-faq-v1.html` | Missing commerce support page | `MUST SOURCE-NATIVE`; can be shared global support system |
| Contact | `spatial-flow-contact-v1.html` | Missing commerce support page | `MUST SOURCE-NATIVE`; can be shared global support system |
| Policies / utility legal | `spatial-flow-utility-policy-v1.html` | No complete commerce policy system | `MUST SOURCE-NATIVE`, preferably split/structured Shipping, Returns/Refunds, Terms, Privacy rather than copying one static utility page |
| 404 | `spatial-flow-404-v1.html` | Framework-level handling not treated as finished product surface | `MUST SOURCE-NATIVE` once for the combined site, not a duplicate shop-only 404 |

---

## 5. Explicit editorial non-port

Project 2 contains:

- `spatial-flow-blog-home-v1.html`
- `spatial-flow-blog-issue-v1.html`
- `spatial-flow-blog-article-v1.html`

These are **not** to become a second source-native journal inside Spatial Flow.

Classification:

```text
REPLACE WITH INK & EAST
```

Ink & East owns the editorial/journal architecture in Project 3. Spatial Flow commerce may link into relevant Ink & East content, but Project 3 must not recreate the old parallel Spatial Flow blog architecture merely because Project 2 has reference files.

---

# Part B — Functional/state parity

## 6. Shop / catalog contracts to preserve

Project 3 source-native commerce must support the product truths already proven or required in Project 2:

- real catalog data rather than hardcoded cards;
- categories/taxonomies and filterable product attributes;
- sorting;
- pagination or an intentionally selected replacement browse contract;
- product-count/context information where useful;
- Editor's Pick / curated merchandising using backend-selectable products rather than fixed fixtures;
- product links, images, titles and live prices;
- wishlist/Saved integration if retained;
- responsive product grid with no horizontal overflow;
- backend-editable merchandising/editorial copy.

The exact V0 composition is provisional. These functional/data contracts are not.

---

## 7. Product-detail contracts to preserve

Required source-native capability:

- gallery/media;
- title, price, SKU where applicable;
- simple and variant/option products;
- stock/availability truth;
- quantity selection;
- Add to Bag;
- Add-to-Bag success feedback and live Bag-count synchronization;
- product attributes/specifications;
- long-form editorial product body (`The Piece` equivalent);
- related/recommended products from real product data;
- product-level fields needed for contextual copy/placement/care/operational merchandising;
- backend editability for product content and operational attributes.

Project 2 explicitly left some content areas such as Story Behind, Care Ritual and Reviews deferred rather than fabricating them. Project 3 should preserve schema/extensibility for such sections but must not invent production content simply to fill V0 layout.

---

## 8. Cart contracts — accepted Project 2 truth

The Project 2 Cart final acceptance established these behaviors as real commerce requirements:

- multiple line items;
- quantity minus/plus;
- Header Bag count synchronization;
- Bag item/piece count;
- Subtotal and Total synchronization;
- valid coupon apply;
- coupon remove lifecycle;
- invalid coupon feedback;
- remove line item;
- undo/restore removed item;
- shipping/change-address lifecycle;
- checkout navigation;
- direct empty-cart state;
- notices for cart/shipping/validation operations;
- responsive/AJAX updates without overflow;
- recommendations based on real products;
- backend-editable non-transactional copy.

Project 3 must reimplement these behaviors source-natively. It must not copy WooCommerce nonce/template/hook mechanics.

---

## 9. Checkout contract

The accepted flow is:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Locked product rules:

- no extra Review fifth step;
- only one final order commitment action;
- malformed email must be rejected;
- Terms acceptance must be enforced;
- exactly one order is created per successful commitment attempt;
- order totals/payment/status are server-authoritative;
- Order Summary remains synchronized with cart, shipping, packaging, coupon and payment context;
- mobile/tablet/desktop remain usable;
- operational copy should be admin-editable rather than embedded in decorative UI.

Project 2's later August 14 end-to-end acceptance confirmed the normal Address → Shipping → Payment → Place Order path and one-order behavior, including persisted packaging truth.

---

## 10. Shipping contract

Project 3 must not hardcode a single shipping fixture merely because a V0 sample uses one.

Source-native shipping requires:

- shipping address/contact data;
- country/region-aware validation as required;
- one or more eligible shipping methods;
- method selection and pricing;
- totals recomputation;
- shipping-address changes reflected in eligibility/totals;
- admin-configurable operational copy/method settings;
- clear future boundary for taxes/duties policy.

The concrete carrier/rate-provider implementation remains an architecture decision; the customer-facing contract is required now.

---

## 11. Product Packaging contract — accepted Project 2 truth

Product Packaging is not decorative checkout UI. It changes price and fulfillment metadata and therefore belongs in the transaction model.

Project 2 final acceptance established:

- Standard packaging is free;
- Gift fee applies per non-empty Gift package;
- Keep together / Package separately / Custom grouping behavior;
- quantity-unit splitting when cart quantity > 1;
- item assignment uniqueness;
- item-centric Custom allocation;
- package grouping and package details;
- personalized name / gift-message association where enabled;
- packaging fee enters real order total;
- packaging choice and line-item assignment persist with the order;
- fulfillment-facing metadata/note survives checkout;
- responsive operation at desktop, phone and intermediate tablet widths.

Project 3 must model this as durable order data. Do not reimplement it as front-end-only state.

Rejected/experimental packaging candidates from Project 2 are not authority; the final accepted Product Packaging behavior wins.

---

## 12. Payment architecture contract

Project 2's useful long-term product truth is **not WooCommerce's gateway registry itself**. The reusable contract is:

- one payment host inside Step 03;
- eligible payment methods supplied by the transaction/payment layer;
- provider-specific fields remain provider-controlled where appropriate;
- one order commitment action;
- payment UI must not manufacture settlement success;
- the normal payment provider can change without redesigning checkout state semantics;
- Crypto can continue into a dedicated secure Step-03 payment workspace without adding Step 05.

Project 3 should therefore introduce a source-native payment-provider interface rather than hardcoding today's provider into page components.

The final normal card/wallet provider for Project 3 is **TBD** and must not be invented by this audit.

---

## 13. Crypto first-phase parity

### Current reusable first-phase product boundary

```text
Asset: USDT
Network: TRON / TRC20
Customer network selector: none
Multi-asset selector: none
```

### Project 2 backend/security truth already accepted in BIG BATCH A / V0.2.9

The following concepts are strong reuse candidates for Project 3 source-native design:

- authorized order-payment workspace boundary;
- short-lived opaque workspace token rather than exposing raw order credentials;
- order/actor/payment-method authorization;
- same-origin mutation protection;
- Create-or-Reuse Invoice;
- server-authoritative amount/network/receiver fields;
- order-scoped lock around invoice/settlement operations;
- transaction-hash format and chain verification service;
- duplicate-transaction protection;
- transaction-hash rate limiting;
- at-most-once paid transition;
- success/order-note idempotency;
- refresh/reopen/multi-tab recovery;
- manager-only Sandbox/test action;
- legacy rollback behavior is Project 2-specific, not a P3 requirement.

### Accepted customer-visible state semantics

- Preparing Invoice;
- Waiting for Payment;
- verification_failed;
- retryable temporary verification error;
- manual_review;
- cancelled / terminal;
- paid_confirmed transition;
- unfinished-payment recovery restoring the same order/invoice.

Important rules:

- verification failure does not create a new order or replacement invoice;
- retryable provider failure is not described as payment rejection;
- manual review suppresses further customer payment actions;
- cancelled orders expose no active payment controls;
- browser state never becomes payment authority;
- paid confirmation transitions to the canonical Step-04 result rather than creating a fake success URL.

### Do not overstate Project 2 production readiness

Project 2 BIG BATCH A V0.2.9 was accepted for backend/security/local regression, but its test record explicitly retained limitations:

- no real-time fiat → USDT quote/rate lock;
- no unrestricted production approval where shop currency may differ from USDT denomination policy;
- no QR;
- no operational countdown/expiry/replacement-invoice lifecycle;
- no automatic chain/address monitoring worker;
- multi-asset/network selection deferred;
- BIG BATCH B customer-facing Step-03 integration was still active/not-final in the audited record.

Project 3 must therefore treat P2 Crypto as a valuable validated contract, not a finished production subsystem to copy blindly.

---

## 14. Step-04 result/order-state contract

Project 2's accepted static result family has two core states that Project 3 must preserve semantically:

### Confirmed

- payment is server confirmed;
- payment received;
- fulfillment may begin according to real order status;
- no further Pay/Confirm/Place Order action.

### Pending

- order exists;
- payment is not confirmed;
- fulfillment has not started;
- customer may safely resume the same payment context or seek support;
- no false success claim.

Project 3 should extend this into a real order-status/result matrix rather than relying on a visual query parameter or browser state.

---

# Part C — Source-native data/admin capability

## 15. Minimum commerce domain to create in Project 3

The exact storage implementation may use Payload collections, dedicated transaction tables/services, or a combination, but the source-owned domain contracts must exist.

### Catalog/content

- Products;
- Product variants/options;
- product categories/collections/tags/attributes;
- product media;
- pricing;
- availability/inventory status;
- merchandising/editorial product fields;
- product SEO/legacy identifiers.

### Cart/pricing

- cart/session identity;
- cart line items and selected variants;
- quantity;
- coupon/promotion state;
- shipping selection;
- packaging selection/grouping/fees;
- computed totals and pricing snapshots.

### Orders

- Orders;
- Order items;
- immutable/snapshotted product/price/variant data needed for historical orders;
- shipping/billing/contact data;
- packaging and fulfillment metadata;
- coupon/discount data;
- payment status and order status;
- status history/audit trail;
- customer-visible order reference and secure lookup/recovery contract.

### Payment

- payment provider abstraction;
- payment attempts;
- Crypto invoice / transaction-hash / verification state when Crypto is enabled;
- idempotency keys / duplicate-order and duplicate-payment guards;
- server-authoritative transition rules.

### Operations/admin

- backend-editable checkout/support copy;
- shipping methods/settings;
- packaging settings/fees/copy;
- product management;
- order/customer-support visibility;
- coupon/promotion management or an explicit external owner;
- payment/crypto operational visibility;
- support/legal page content;
- email templates/content/settings where appropriate.

Do not force transaction-critical data into a CMS presentation schema merely for convenience. The domain/storage boundary should be decided explicitly in the implementation plan.

---

# Part D — What must NOT be ported

## 16. WordPress/WooCommerce implementation details

Do not carry the following into Project 3 architecture merely because Project 2 uses them:

- Astra child-theme structure;
- WooCommerce PHP template hooks/filters;
- `woocommerce_checkout_payment()` and native Woo DOM ownership;
- WordPress Customizer/theme_mod wiring as the new admin model;
- YITH implementation details;
- CartFlows configuration;
- WPCode behavior;
- WordPress menu/theme-template ownership;
- Woo nonces/AJAX replacement mechanics;
- page-specific historical CSS patch stacks;
- 1:1 visual hacks created solely to skin Woo markup;
- plugin-specific compatibility bridges that only exist to keep the old WordPress system running.

Reuse the customer/business contract, not the legacy mechanism.

---

## 17. Rejected or future-only P2 references

Do not accidentally promote these into current Project 3 requirements:

- rejected Product Packaging candidate variants such as the rejected B2 direction;
- future multi-asset Crypto Workspace UI;
- customer-selectable chain/network routing;
- QR/countdown/expiry/replacement-invoice behavior that was explicitly deferred;
- abandoned static state switchers/demo fixtures;
- any final-visual assumption from Project 2 that conflicts with Project 3's V0-now / redesign-later policy.

---

# Part E — Project 3 execution plan

## 18. Priority conclusion

The main gap is **not visual page count**.

The actual gap is:

```text
P3 has four Spatial Flow static V0 references,
but its source-native commerce domain/route/transaction layer is essentially not started.
```

Project 2 proves that the eventual commerce surface includes many more routes plus a much larger state/workflow graph than those four previews.

Therefore the correct next work is source-native commerce foundation, not another static visual expansion campaign.

---

## 19. Compressed implementation batches

The user has explicitly requested that unnecessary micro-steps be compressed. The following batches are deliberately larger, but they preserve real architectural dependencies.

### Batch A — Commerce domain + real core source routes

Deliver together where practical:

- decide stable shop/product route contract;
- create source-native Product / Variant / Category-Collection / commerce settings domain;
- seed/migrate a representative product dataset;
- source-native Shop route;
- source-native Product Detail route;
- source-native Cart route and cart/session domain;
- variant selection, quantity, pricing, Add to Bag, Bag count;
- basic availability/stock contract;
- shared Spatial Flow V0 presentation components/shell;
- CMS/admin editability for product/merchandising fields;
- tests for cart identity, pricing/quantity and route/data contracts.

**This is the next implementation batch.**

The objective is to convert today's four static V0 commerce references into the beginning of a real source-native commerce system, not to polish their final appearance.

### Batch B — Full Cart parity + Checkout/order core

After Batch A domain contracts are stable:

- complete Cart states: multi-item, quantity, remove/undo, coupon, empty, notices, totals;
- shipping/address domain;
- Checkout Steps 01 / 02 / 03;
- Product Packaging with persisted grouping/fee/fulfillment metadata;
- Orders / Order Items / status history;
- one-order/idempotent commitment boundary;
- Order Summary synchronization;
- Terms/email validation;
- Step 04 confirmed/pending result states;
- backend-editable operational copy;
- desktop/tablet/mobile functional regression.

### Batch C — Payment architecture + Crypto first phase

- provider-agnostic payment interface;
- selected normal card/wallet provider after explicit decision;
- fixed USDT/TRON first-phase provider/workspace;
- invoice create/reuse;
- secure workspace authorization;
- tx-hash verification and duplicate protection;
- verification/retry/manual-review/cancel/recovery/confirmed state machine;
- server-authoritative order paid transition;
- Sandbox/test path;
- quote/currency policy resolution before production;
- real-chain positive-path production-readiness test before launch.

Do not implement multi-asset Crypto merely because a future Project 2 static reference exists.

### Batch D — Customer/support/utility completeness

Compress the support surface into one coordinated tranche:

- Account/auth/customer order history;
- Track Order;
- Wishlist/Saved;
- product/global search integration;
- FAQ/Help;
- Contact;
- About/Spatial Flow brand page after IA decision;
- Services/Consult after IA decision;
- Shipping / Returns-Refunds / Terms / Privacy;
- unified 404;
- customer emails/notifications required by the order lifecycle.

### Batch E — Migration/operations/completeness closure

- Project 2/Woo product-field mapping and import strategy;
- legacy product/order/SEO/redirect decisions as applicable;
- admin operational review;
- email/payment/shipping/packaging end-to-end acceptance;
- update this parity matrix row-by-row from gap to completed;
- only after functional/page completeness is stable: begin the final launch visual redesign.

---

## 20. What may be combined and what should not be artificially combined

To save time, work within each batch should be implemented and validated together where the dependency graph allows it.

Do **not** split every route/component/state into separate approval steps.

But do not merge architectural dependencies merely to claim fewer steps:

```text
Commerce domain/cart foundation
must exist before
transactional Checkout/order/payment can be trustworthy.
```

Likewise payment-provider/crypto settlement should not be built before a real Order/Payment state contract exists.

This is dependency compression, not arbitrary task inflation.

---

## 21. Definition of ecommerce completeness for Project 3

Spatial Flow ecommerce must not be called page-complete or function-complete until:

- every retained matrix surface has a real source-native route/component/system owner;
- core commerce data is backend manageable;
- product/cart/checkout/order/payment states are server-authoritative where required;
- checkout cannot create duplicate orders through repeated actions;
- packaging/shipping/coupon/payment truth persists into the order;
- account/order recovery/support flows exist;
- responsive operation is testable;
- WP/Woo-only mechanisms are no longer dependencies;
- the Project 2 → Project 3 matrix is explicitly closed or every remaining row is intentionally deferred.

Final launch visual redesign is **not** a prerequisite for this functional completeness definition.

---

## 22. Next action locked by this audit

Proceed with:

```text
Batch A — Commerce domain + real core source routes
```

Before writing large amounts of page JSX, first lock the route/data/domain contracts inside that same batch. Then implement Shop + Product + Cart against those contracts using the current Spatial Flow V0 visual system as a provisional presentation layer.

Do not return to a visual-finalization pass first.
