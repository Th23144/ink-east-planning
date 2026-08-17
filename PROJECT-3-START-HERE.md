# Project 3 · Start Here

> Status: current Project 3 entry-point and precedence note. Read this before older handoff / roadmap documents.

## Current authoritative architecture

Project 3 is the long-term source-native platform for **both**:

- **Ink & East** — future editorial / journal main site.
- **Spatial Flow** — ecommerce / shop area under that main-site system.

Project 2 is a separate WordPress / WooCommerce visual-reskin track. It does not own Project 3's long-term source-native ecommerce implementation.

However, Project 2 currently has substantially broader and more mature ecommerce page/state/flow coverage than Project 3. Project 3 may reuse Project 2 as a **product-truth, page-coverage, state, interaction and operational-flow reference**, while reimplementing those capabilities source-natively rather than transplanting WordPress/WooCommerce implementation details.

## Current development mode

The authoritative development rule is defined in:

`docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`

The current posture is:

```text
Function-complete + page-complete + structurally production-ready + visually provisional.
```

This means:

- page / route / state coverage must be completed now;
- real workflows, data, CMS/admin editability, permissions, payments, forms, cart/checkout, search, account and other functional systems must be completed now;
- information architecture and reusable structural contracts must be established now;
- current Ink & East and Spatial Flow visuals are only **V0 / initial test visuals**;
- V0 visuals should remain coherent, responsive and testable, but must not consume launch-level polish effort;
- the user intends to perform a systematic visual redesign before final public launch;
- shared shells/components, stable route/data contracts and business/UI separation must be preserved so the launch redesign is a presentation-layer replacement rather than a functional rewrite.

## Ecommerce completeness rule

Before treating the Spatial Flow source-native ecommerce surface as complete, create and maintain a **Project 2 → Project 3 parity / migration matrix** covering all relevant pages, states and workflows.

The current authoritative matrix is:

`docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`

It records the Project 2 page/reference inventory, accepted Cart / Checkout / Packaging / Crypto / result-state product truth, Project 3's current source-native gaps, explicit non-port rules, and the compressed implementation batches.

## Current commerce milestone

**Commerce Batch A — source-native commerce domain + core Shop/Product/Bag routes — is accepted.**

Read the durable acceptance record before continuing commerce work:

`docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`

Batch A established, among other contracts:

- Payload-owned Product Categories, Products, Carts and Commerce Settings;
- canonical `/shop` and `/shop/[slug]` source routes;
- permanent `/product/[slug]` compatibility redirect;
- source-native `/cart`;
- anonymous server-owned Bag session and HttpOnly SameSite cookie;
- server-authoritative variant / price / stock / quantity resolution;
- persisted Add / quantity update / remove Bag mutations;
- cross-origin cart-mutation protection compatible with proxy host reconstruction;
- representative commerce seed data;
- Ink & East → Spatial Flow source-native shop bridge;
- provisional V0 presentation only.

Batch A did **not** fabricate Checkout, Orders, shipping, Product Packaging, payment, Crypto, account or support completeness.

The current locked next implementation tranche is:

```text
Batch B — Full Cart parity + Checkout/order core
```

Do not restart Shop/Product/Cart as another static visual exercise. Build Batch B on the accepted Batch A source domain and transaction boundary.

Classify each Project 2 item as:

- already exists in Project 3;
- must be source-native in Project 3;
- reusable product/interaction decision;
- intentionally deferred;
- obsolete / WordPress-only and should not be ported;
- requires a new source-native replacement.

The purpose is to prevent Project 3 from appearing complete merely because its current static preview set is smaller than Project 2.

## Precedence over older documents

Older files may still contain stale wording such as "Project 3 = Ink & East only", an Ink & East-centric scope, an older Project 2 completion score, or an older next-step sequence. Those statements are superseded where they conflict with this file, `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`, the current ecommerce parity matrix, or a later accepted milestone record.

When opening a new project window, read in this order:

1. `PROJECT-3-START-HERE.md`
2. `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`
3. `docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`
4. `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`
5. `docs/PROJECT-3-CURRENT-HANDOFF.md`
6. current merged PR history / latest progress records
7. older planning documents only as historical/product references

Do not restart visual-finalization work merely because an older roadmap says a static page is incomplete. First determine whether the missing work affects product coverage, functional testing, shared architecture, accessibility or V0 coherence; launch-level visual refinement belongs to the final visual pass.
