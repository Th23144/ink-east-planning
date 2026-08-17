# Project 3 · Commerce Batch A Accepted

> Accepted implementation baseline: 2026-08-16 / 2026-08-17 CI run  
> Repository: `Th23144/ink-east-planning`  
> PR: #51 — `feat(commerce): Batch A source-native shop foundation`  
> Status: implementation and automated acceptance complete; V0 presentation remains provisional by project policy.

## 1. What Batch A changed

Batch A is the first real source-native Spatial Flow commerce implementation inside Project 3. It converts the previous static-only commerce references into a live Next.js + Payload + PostgreSQL commerce foundation.

The implementation deliberately reuses Project 2 **product truth** without copying WordPress/WooCommerce mechanisms.

### Canonical source routes

- `/shop` — source-native product catalog.
- `/shop/[slug]` — canonical source-native product detail route.
- `/cart` — source-native anonymous Bag.
- `/product/[slug]` — permanent compatibility redirect to `/shop/[slug]`.

The `/shop/[slug]` canonical contract is now the Project 3 first-party route. The compatibility route exists so future migration/SEO work has a stable bridge for the common WooCommerce `/product/...` shape; final legacy redirect coverage still belongs to migration closure.

## 2. Source-owned commerce domain now present

Payload now owns the first commerce domain layer:

- `Product Categories`
- `Products`
- `Carts`
- `Commerce Settings`

Products support the Batch A contracts needed by later transaction work:

- stable slug and optional legacy mapping fields;
- simple and variant products;
- USD integer minor-unit prices;
- SKU;
- tracked or untracked inventory;
- per-variant key / label / SKU / price / stock / enabled state;
- product categories;
- card media and gallery media;
- provisional V0 artwork fallback only when real media is absent;
- merchandising badge / featured / sort order;
- maker / origin / material / dimensions / attributes;
- editorial product body;
- SEO fields.

Representative seeded products are test/working data only. They are not the final production product migration.

## 3. Catalog / product behavior accepted

The source-native Shop supports:

- real Payload product records rather than hardcoded card truth;
- active/public product filtering;
- category filtering;
- editorial, price ascending, price descending and newest sorting;
- pagination contract;
- server-derived displayed prices;
- product availability derived from current product/variant inventory;
- product detail lookup by canonical slug;
- simple/variant purchase options;
- real attributes and editorial fields;
- related products from source data;
- real Payload media when assigned, with explicit V0 fallback when absent.

The current layout is intentionally V0. This acceptance does **not** promote the current visual treatment to launch-final design.

## 4. Anonymous Bag / Cart foundation accepted

Batch A establishes a server-owned anonymous Bag session.

Important contracts:

- anonymous session key is generated server-side;
- session is carried by the `sf_cart_session` cookie;
- cookie is HttpOnly and SameSite=Lax;
- customer browser does not submit authoritative price or stock values;
- Add to Bag submits product slug, variant key where applicable, and quantity only;
- product/variant availability, unit price, SKU and quantity limit are resolved on the server;
- Cart persists line snapshots for product slug/title, variant label, SKU and unit price;
- same product + same variant consolidates into the existing line;
- quantity update and line removal are real persisted mutations;
- subtotal and item count use integer minor-unit arithmetic;
- SSR `/cart` reflects persisted Bag state after mutation;
- unavailable product/variant states are represented without inventing checkout success.

Cart direct Payload CRUD is not exposed as the customer API. Customer mutations go through the source-native commerce service/API boundary.

## 5. Cart mutation request-security fix

During final acceptance, production HTTP validation exposed a legitimate proxy/runtime mismatch in the first origin check. The initial implementation compared `Origin` directly with `Request.url`, which can contain an internal Next.js host even when the browser-facing Host/Origin is valid.

The final shared mutation-security boundary now:

- explicitly rejects `Sec-Fetch-Site: cross-site`;
- validates an Origin, when supplied, against effective host candidates from HTTP Host / forwarded host / request URL;
- validates effective protocol using forwarded protocol / request URL;
- remains compatible with production reverse-proxy host reconstruction;
- preserves rejection of real cross-origin cart mutations.

This helper is shared by Add, quantity-update and remove endpoints rather than copied per route.

## 6. Client failure recovery

Final review also found that browser-network failures were not caught by the first client implementation.

Batch A now ensures:

- Add to Bag does not remain stuck in `Adding…` when fetch throws;
- Bag quantity/remove controls always clear their busy state;
- customer receives a retryable connection message rather than an unhandled promise failure.

## 7. Ink & East regression boundary

Batch A required a small typing adaptation to existing Payload access helpers so new commerce collections can use Payload-native `Access` signatures.

This must not change Ink & East editorial visibility rules.

A dedicated final regression gate therefore reran the existing public-read checks after editorial + commerce seed. It confirms, among other existing contracts:

- published public articles remain readable;
- private draft articles remain excluded;
- public search does not expose private drafts;
- active topics and Issue 001 remain readable;
- Ink & East system settings remain intact;
- existing markdown/plain-text and media mapping contracts remain readable.

The old public-read verifier was also changed to exit cleanly after a successful run so it can be used as an automated CI gate. This is test-harness cleanup, not editorial behavior change.

## 8. Final automated acceptance

Final authoritative temporary verifier run:

- Workflow: `Commerce Batch A Verify`
- Run ID: `31989123187`
- Job ID: `95269283523`
- Head under test: `952203cf5d686ef6e3186e5db7fb1db5a083eedf`
- Result: **PASS**

The run passed all of the following in one clean PostgreSQL-backed production-style validation:

1. dependency install;
2. Payload type generation;
3. TypeScript typecheck;
4. commerce pricing / variant / stock / cart-total contracts;
5. editorial + commerce seed;
6. Ink & East editorial public-read regression;
7. Payload/PostgreSQL commerce runtime smoke test;
8. Next.js production build;
9. production HTTP commerce runtime:
   - `/shop`;
   - `/shop/[slug]`;
   - permanent `/product/[slug]` compatibility redirect;
   - empty Bag;
   - same-origin Add to Bag;
   - server-authoritative variant price snapshot;
   - HttpOnly SameSite cart cookie;
   - persisted SSR Bag;
   - cross-origin mutation rejection;
   - quantity PATCH and subtotal recomputation;
   - DELETE and return to empty state.

The temporary GitHub Actions workflow used for Batch A acceptance is removed before merge. The run IDs above are the durable evidence.

## 9. Explicitly NOT completed in Batch A

Batch A must not be mistaken for full Project 2 Cart/Checkout parity.

Still deferred to later batches:

- full Cart parity such as coupon lifecycle, remove/undo, shipping lifecycle, notices and other Project 2-accepted states;
- Contact / Address checkout Step 01;
- Shipping Step 02;
- Product Packaging transaction model and fulfillment metadata;
- Checkout Step 03 payment host;
- Orders / Order Items / status history;
- one-order / idempotent checkout commitment boundary;
- Step 04 confirmed/pending result system;
- normal card/wallet provider;
- Crypto payment workspace and settlement state machine;
- account/order history, Track Order, Wishlist/Saved and support/utility completeness;
- production product data migration and complete legacy redirect audit;
- final launch visual redesign.

No fake Checkout or fake payment success was introduced simply to make the V0 site look complete.

## 10. Next locked tranche

The next implementation tranche is:

```text
Batch B — Full Cart parity + Checkout/order core
```

Batch B should be executed as a compressed dependency-aware batch, not split into unnecessary page-by-page micro-steps.

Its source-of-truth requirements remain in:

`docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`

Batch A is now the foundation that Batch B must build on; do not restart Shop/Product/Cart as another static visual exercise.
