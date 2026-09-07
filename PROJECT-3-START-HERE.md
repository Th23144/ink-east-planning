# Project 3 · Start Here

> Status: current Project 3 entry-point and precedence note. Read this before older handoff / roadmap documents.

## Current authoritative architecture

Project 3 is the long-term source-native platform for **both**:

- **Ink & East** — current working editorial / cultural-platform identity; not assumed to be the final umbrella brand.
- **Spatial Flow** — ecommerce / shop area under that main-site system.

The Product Architecture workshop has expanded the long-term platform model beyond a permanently East-only content boundary. Eastern/Chinese culture remains an important initial wedge/vertical and existing engineering identifiers remain for continuity, but the future umbrella may support broader culture, knowledge, place, travel, real-world experience and social/discovery domains. Do not rename repos/routes during the workshop merely because umbrella naming remains unresolved.

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

- page / route / state coverage must eventually be complete;
- real workflows, data, CMS/admin editability, permissions, payments, forms, cart/checkout, search, account and other functional systems are the development priority;
- information architecture and reusable structural contracts must be established before large implementations depend on them;
- current Ink & East and Spatial Flow visuals are only **V0 / initial test visuals**;
- V0 visuals should remain coherent, responsive and testable, but must not consume launch-level polish effort;
- the user intends to perform a systematic visual redesign before final public launch;
- shared shells/components, stable route/data contracts and business/UI separation must be preserved so the launch redesign is a presentation-layer replacement rather than a functional rewrite.

## Current product-priority shift — investor / product-architecture track

Commerce Batch A is accepted and provides a safe pause point for Spatial Flow.

The user is preparing a business plan / seed-stage fundraising story and wants Project 3 to show real platform substance rather than only deeper ecommerce functionality.

Therefore the current priority is:

```text
PAUSE before Commerce Batch B
↓
Refine Product Architecture / Business System V1
↓
Define the investor-demonstrable functional platform core
↓
Only then authorize the next implementation batch
```

**Do not start new platform code merely because this priority changed.** The user explicitly wants to refine the product/business system first.

## Current Product Architecture Workshop — authoritative branch state

Draft PR #53 (`docs/ink-east-product-architecture-v1`) is the active documentation-only Product Architecture workshop. **Do not merge it until the workshop is explicitly sealed/approved. Do not implement product code from workshop decisions unless separately authorized.**

Read these workshop records together:

- `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md` — broad workshop frame;
- `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md` — earlier confirmed decisions/corrections;
- PR #53 conversation — authoritative incremental decision record where later comments supersede stale earlier wording;
- `docs/INK-EAST-ROUND-3-RECOGNITION-PIPELINE-WORKSHOP.md` — historical Round 3 workshop path;
- `docs/INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md` — **current Round 3 consolidated state machine and audit**.

Round 3 is currently **CONSOLIDATED / NOT YET SEALED**. The consolidated document records the locked Recognition/Governance architecture and the remaining lifecycle questions that must be resolved before Round 3 is sealed.

## Current content / knowledge direction

The current content/knowledge direction is authoritatively supplemented by:

`docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`

Key correction from that document:

```text
Platform content != one generic Article/blog system.
```

The long-term content domain contains different authority/interaction lanes, including canonical classical texts, editorial/teaching publishing, contributor publishing, and user/community publishing. Canonical classical-text reading must preserve source integrity; ordinary social discussion belongs in linked companion community/discussion objects rather than contaminating the canonical text surface.

`识典古籍 / Shidianguji` is a functional reference for the canonical classical-text reading/research lane only; it is not the total platform template.

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

The next commerce tranche remains defined as:

```text
Batch B — Full Cart parity + Checkout/order core
```

But **Batch B is currently deferred, not cancelled**, while the investor/product-architecture track is prioritized.

Do not restart Shop/Product/Cart as another static visual exercise when commerce resumes. Build Batch B on the accepted Batch A source domain and transaction boundary.

## Project 2 reuse rule

Classify each Project 2 item as:

- already exists in Project 3;
- must be source-native in Project 3;
- reusable product/interaction decision;
- intentionally deferred;
- obsolete / WordPress-only and should not be ported;
- requires a new source-native replacement.

The purpose is to prevent Project 3 from appearing complete merely because its current static preview set is smaller than Project 2, while also preventing blind copying of legacy WooCommerce mechanisms.

## Precedence over older documents

Older files may still contain stale wording such as "Project 3 = Ink & East only", a permanently East-only scope, a generic article/blog interpretation, WordPress implementation hints, an older Project 2 completion score, or an older next-step sequence. Those statements are superseded where they conflict with this file, `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`, `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`, the current Product Architecture workshop/decision records, the current ecommerce parity matrix, or a later accepted milestone record.

When opening a new project window, read in this order:

1. `PROJECT-3-START-HERE.md`
2. `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`
3. `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`
4. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md`
5. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md`
6. `docs/INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md`
7. PR #53 latest conversation / decision history while the workshop PR remains open
8. `INK-EAST-BRIEF.md` for already-decided product history, while ignoring superseded scope/WordPress assumptions
9. `docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`
10. `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`
11. `docs/PROJECT-3-CURRENT-HANDOFF.md`
12. older planning documents only as historical/product references

Do not restart visual-finalization work merely because an older roadmap says a static page is incomplete. First determine whether the missing work affects product coverage, functional testing, shared architecture, accessibility or V0 coherence; launch-level visual refinement belongs to the final visual pass.
