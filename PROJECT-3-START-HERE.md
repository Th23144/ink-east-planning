# Project 3 · Start Here

> Status: current Project 3 entry-point and precedence note. Read this before older handoff / roadmap documents.

## Current authoritative architecture

Project 3 is the long-term source-native platform for **both**:

- **Ink & East** — current working editorial / cultural-platform identity; not assumed to be the final umbrella brand.
- **Spatial Flow** — ecommerce / shop area under that main-site system.

The Product Architecture workshop has expanded the long-term platform model beyond a permanently East-only content boundary. Eastern/Chinese culture remains an important initial wedge/vertical and existing engineering identifiers remain for continuity, but the future umbrella may support broader culture, knowledge, place, travel, real-world experience, society, community and social/discovery domains. Do not rename repos/routes during the workshop merely because umbrella naming remains unresolved.

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

### Highest current workshop precedence

The accepted Rounds 1–6 architecture/audit chain is currently recorded through:

1. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md` — Pass 1 / A1–A24;
2. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md` — Pass 2 / A25–A36;
3. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-3.md` — Pass 3 / A37–A47 plus the project-wide flexibility/process correction;
4. `docs/INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md` — accepted final cross-audit F1–F10;
5. `docs/INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md` — current clean Round 6 truth, frozen blob `bf32db1e213194ab95701e66cf1dc55138a01035`;
6. `docs/ROUND-6-V6-SOURCE-PARITY-PASS.md` — PASS against that exact V6 blob;
7. `docs/ROUND-6-V6-FROZEN-COMPREHENSIVE-AUDIT.md` — PASS / zero unresolved material blockers against that exact V6 blob;
8. `docs/INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md` — current replacement / revalidated Round 6 seal.

`docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-FINAL.md` and `docs/INK-EAST-ROUND-6-SEAL-RECORD.md` are now **historical provenance only** where superseded by the reopened/revalidated Round 6 chain above. They must not be used as the current Round 6 construction truth.

Historical Round records and earlier consolidations remain decision provenance. Where they conflict with a later explicit amendment/revalidation/current-truth record, **the later applicable current-truth record wins**. Do not silently rewrite history merely to make old decisions look as if they were always correct.

### Mandatory flexibility rule for all future architecture work

The user's standing requirement `灵活 / flexible` is a formal architecture rule, not a soft preference:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Future Product Architecture proposals must explicitly distinguish:

- `HARD INVARIANT / 硬边界` — must remain true across contexts;
- `ADAPTIVE RULE / 弹性规则` — context-aware decision logic;
- `DEFERRED CALIBRATION / 延后校准` — thresholds/timing/formulas require data or later policy work;
- `EXAMPLE / 示例` — explanatory only, never silently promoted into a universal rule.

Do not turn one example, threshold, sequence, cooldown, document requirement, reviewer count, appeal count, or risk treatment into a universal rule merely because it is easier to specify. Use hard rules only when a real invariant is intended. Where circumstances matter, define decision dimensions, allowed outcomes, safeguards and escalation paths while leaving calibration adaptive.

Before sealing any major Round, explicitly test whether apparently precise wording has accidentally frozen something the user intended to remain flexible.

### Audit classification rule

Every future adversarial-audit finding must be labeled as one of:

- `CORRECTION / 真正修正` — a prior accepted rule was materially wrong or too broad and is being changed;
- `HARDENING / 架构加固` — the intended direction remains correct but loopholes/edge conditions are being closed;
- `CLARIFICATION / 澄清` — the intended direction remains unchanged but ambiguous wording is being made explicit;
- `NEW SAFEGUARD / 新增保护` — a previously uncovered risk needs an additional protective mechanism;
- `DOCUMENTATION REPAIR / 文档修复` — already-accepted current truth was omitted/weakened in a later summary or consolidation and is being restored without creating a new product decision.

This prevents ordinary hardening or documentation repair from being misrepresented as a change in product direction.

### Current round status

- **Round 3 — SEALED / product architecture only / no implementation authorization, subject to later explicit cross-round amendments.**
- **Round 4 — SEALED / product architecture only / no implementation authorization, subject to later explicit cross-round amendments.**
- **Round 5 — SEALED / product architecture only / no implementation authorization.** The final seal is recorded in PR #53; a durable standalone consolidation file may still be added later if useful.
- **Round 6 — REVALIDATED / REPLACEMENT-SEALED / product architecture only / no implementation authorization.** The current truth is `docs/INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md`, supported by `docs/ROUND-6-V6-SOURCE-PARITY-PASS.md`, `docs/ROUND-6-V6-FROZEN-COMPREHENSIVE-AUDIT.md`, and sealed by `docs/INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md`. The old Final/Seal pair is historical only.
- **Rounds 1–6 retrospective adversarial audit + Round 6 post-seal revalidation — COMPLETE for this checkpoint.** Later architecture may still explicitly amend these rounds if a genuine contradiction or better architecture is discovered; `SEALED` means durable canonical record with zero known unresolved material blockers at this checkpoint, not immunity from evidence-based correction.
- **Current next workshop subject: Round 7 — Knowledge Graph & Provenance / 知识图谱与来源溯源.** Round 7 may begin only from the V6/replacement-seal baseline; no product-code implementation is authorized by this transition.

Important audit rule:

> Previous user acceptance such as `全部采用 / adopt all` records product direction, but it is **not itself evidence that the architecture was deeply validated**. Later cross-round audits may explicitly amend earlier accepted/sealed wording when contradictions, unsafe assumptions, over-broad rules, privacy risks, governance capture, excessive rigidity, or implementation-dangerous ambiguity are discovered. Such changes must be recorded explicitly rather than silently rewriting history.

## Current content / knowledge direction

The current content/knowledge direction is authoritatively supplemented by:

`docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`

Key correction from that document:

```text
Platform content != one generic Article/blog system.
```

The long-term content domain contains different authority/interaction lanes, including canonical classical texts, editorial/teaching publishing, contributor publishing, and user/community publishing. Canonical classical-text reading must preserve source integrity; ordinary social discussion belongs in linked companion community/discussion objects rather than contaminating the canonical text surface.

Pass 3 amendments A42–A43 clarify that canonical/source-backed authority means provenance/edition/source integrity and does **not** certify every factual or interpretive claim inside a historical text as true; canonical/source authority and Work Recognition are separate systems.

`识典古籍 / Shidianguji` is a functional reference for the canonical classical-text reading/research lane only; it is not the total platform template.

Round 7 must build on this separation while preserving the revalidated Round 6 distinctions among Knowledge Entity, Authority-bearing Subject, Claim, Relationship, authorship, publisher, operator, representation and historical attribution. Round 7 must not collapse knowledge/source authority into Work Recognition, operational permission, identity verification or popularity.

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

Older files may still contain stale wording such as "Project 3 = Ink & East only", a permanently East-only scope, a generic article/blog interpretation, WordPress implementation hints, an older Project 2 completion score, an older next-step sequence, an implicit user-level ladder, `Verified Contributor` as a canonical architecture term, Institution as the universal organization entity, Contributor-only guaranteed organic launch support, a blanket new-account restriction model, overly broad `Authoritative Classical Text` semantics, one-Acting-Entity-only assumptions, fixed appeal-count assumptions, rigid examples that were never intended as universal rules, or the superseded pre-revalidation Round 6 Final/Seal. Those statements are superseded where they conflict with this file, the accepted audit/amendment records, the Round 6 V6 current truth and replacement seal, `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`, `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`, later accepted Product Architecture decisions, the current ecommerce parity matrix, or a later accepted milestone record.

When opening a new project window, read in this order:

1. `PROJECT-3-START-HERE.md`
2. `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`
3. `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`
4. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md`
5. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md`
6. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-3.md`
7. `docs/INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md`
8. `docs/INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md`
9. `docs/ROUND-6-R38-R40-ACCEPTED.md`
10. `docs/ROUND-6-V6-SOURCE-PARITY-PASS.md`
11. `docs/ROUND-6-V6-FROZEN-COMPREHENSIVE-AUDIT.md`
12. `docs/INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md`
13. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md`
14. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md`
15. `docs/INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md`
16. `docs/INK-EAST-ROUND-3-SEAL-RECORD.md`
17. `docs/INK-EAST-ROUND-4-CONTRIBUTOR-IDENTITY-CONSOLIDATION.md`
18. `docs/INK-EAST-ROUND-4-SEAL-RECORD.md`
19. PR #53 latest conversation / decision history while the workshop PR remains open
20. `INK-EAST-BRIEF.md` for already-decided product history, while ignoring superseded scope/WordPress assumptions
21. `docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`
22. `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`
23. `docs/PROJECT-3-CURRENT-HANDOFF.md`
24. `docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-FINAL.md` and `docs/INK-EAST-ROUND-6-SEAL-RECORD.md` only as historical provenance when needed
25. older planning documents only as historical/product references

Do not restart visual-finalization work merely because an older roadmap says a static page is incomplete. First determine whether the missing work affects product coverage, functional testing, shared architecture, accessibility or V0 coherence; launch-level visual refinement belongs to the final visual pass.
