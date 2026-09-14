# Project 3 · Start Here

> Status: current Project 3 entry-point and precedence note. Read this before older handoff / roadmap documents.

## Current authoritative architecture

Project 3 is the long-term source-native platform for both **Ink & East** and **Spatial Flow**. Ink & East is the current working editorial/cultural-platform identity, not assumed to be the final umbrella brand. Eastern/Chinese culture remains the initial wedge/vertical, while the future umbrella may support broader culture, knowledge, place, travel, real-world experience, society, community and discovery. Do not rename repos/routes during the workshop merely because umbrella naming remains unresolved.

Project 2 remains a separate WordPress/WooCommerce visual-reskin track. It does not own Project 3's long-term source-native implementation, but it may remain a product-truth/page/state/flow reference for ecommerce parity.

## Current development mode

Authoritative rule: `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`.

Current posture:

```text
Function-complete + page-complete + structurally production-ready + visually provisional.
```

Prioritize real workflows, data, CMS/admin editability, permissions, payments, forms, search, account and shared architecture. Current visuals are V0/provisional. Preserve shared shells, stable route/data contracts and business/UI separation so later visual redesign is a presentation-layer replacement rather than a functional rewrite.

## Current product-priority shift — investor / product-architecture track

Commerce Batch A is accepted and provides a safe pause point for Spatial Flow. Commerce Batch B is deferred, not cancelled.

Current priority:

```text
PAUSE before Commerce Batch B
↓
Refine Product Architecture / Business System V1
↓
Define the investor-demonstrable functional platform core
↓
Only then authorize the next implementation batch
```

Do not start new platform code merely because this priority changed. Product/business architecture comes first.

## Current Product Architecture Workshop — authoritative branch state

Draft PR #53 (`docs/ink-east-product-architecture-v1`) is the active documentation-only Product Architecture workshop. **Do not merge it until the workshop is explicitly approved for merge. Do not implement product code from workshop decisions unless separately authorized.**

### Highest current workshop precedence

Current accepted/revalidated architecture precedence is:

1. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md` — A1–A24;
2. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md` — A25–A36;
3. `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-3.md` — A37–A47 plus flexibility/process correction;
4. `docs/INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md` — F1–F10;
5. `docs/INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md` — Round 6 current truth, blob `bf32db1e213194ab95701e66cf1dc55138a01035`;
6. `docs/ROUND-6-V6-SOURCE-PARITY-PASS.md` — PASS;
7. `docs/ROUND-6-V6-FROZEN-COMPREHENSIVE-AUDIT.md` — PASS;
8. `docs/INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md` — current Round 6 seal;
9. `docs/INK-EAST-ROUND-7-CURRENT-TRUTH-V1.md` — Round 7 current truth, blob `6e7a049523e777a599c81188b9b1b5f2287da5af`;
10. `docs/ROUND-7-V1-SOURCE-PARITY-PASS.md` — PASS / 74 of 74 accepted Round 7 rules carried forward;
11. `docs/ROUND-7-V1-ADVERSARIAL-AUDIT.md` — PASS / no unresolved material blocker;
12. `docs/INK-EAST-ROUND-7-SEAL-RECORD.md` — current Round 7 seal;
13. `docs/PROJECT-3-PLATFORM-RULE-EVOLVABILITY-CHANGE-ARCHITECTURE-V1.md` — project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）, blob `14af8b560e1a609120a16e4fdb3233abad288ba8`;
14. `docs/PROJECT-3-RULE-EVOLVABILITY-CROSS-PROJECT-CONSISTENCY-PASS.md` — PASS;
15. `docs/PROJECT-3-RULE-EVOLVABILITY-ADVERSARIAL-AUDIT.md` — PASS;
16. `docs/PROJECT-3-RULE-EVOLVABILITY-SEAL-RECORD.md` — project-wide foundational architecture seal;
17. `docs/INK-EAST-ROUND-8-CURRENT-TRUTH-V1.md` — Round 8 Community & Discussion current truth, blob `0e7274c5bbd52abf0895090d86c8cecb72f96a6e`;
18. `docs/ROUND-8-V1-SOURCE-PARITY-PASS.md` — PASS / 122 of 122 Round 8 rules carried forward;
19. `docs/ROUND-8-V1-ADVERSARIAL-AUDIT.md` — PASS / zero unresolved material blockers;
20. `docs/INK-EAST-ROUND-8-SEAL-RECORD.md` — current Round 8 seal.

The older `docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-FINAL.md` and `docs/INK-EAST-ROUND-6-SEAL-RECORD.md` are historical provenance only where superseded by the Round 6 revalidation chain.

Historical Round records and earlier consolidations remain decision provenance. Where they conflict with a later explicit amendment/revalidation/current-truth record, **the later applicable current-truth record wins**. Do not silently rewrite history merely to make old decisions look as if they were always correct.

### Mandatory flexibility rule for all future architecture work

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Future Product Architecture proposals must explicitly distinguish:

- `HARD INVARIANT / 硬边界` — must remain true across contexts;
- `ADAPTIVE RULE / 弹性规则` — context-aware decision logic;
- `DEFERRED CALIBRATION / 延后校准` — thresholds/timing/formulas require data or later policy work;
- `EXAMPLE / 示例` — explanatory only, never silently promoted into a universal rule.

Do not turn an example, threshold, sequence, cooldown, document requirement, reviewer count, appeal count or risk treatment into a universal rule merely because it is easier to specify. Before sealing any major Round, test whether apparently precise wording has accidentally frozen something intended to remain flexible.

### Project-wide rule evolvability requirement

All future major modules must distinguish Core Invariant（核心不变量）, Policy（策略）, Configuration（配置）, Workflow（工作流）, Algorithm（算法） and Data（数据） where material. Rules that realistically change must not be irreversibly scattered through UI/code/data. Consequential future changes should preserve Rule Versioning（规则版本管理）, effective time, historical Decision Provenance（决策溯源）, Migration（迁移）, Backward Compatibility（向后兼容）, staged Rollout（灰度发布）, Rollback / Compensation（回滚 / 补偿）, dependency impact and auditability as appropriate.

Do not respond to this requirement by building one premature universal Rules Engine（通用规则引擎）. Stable domain invariants may remain code-level invariants; mutable policy must remain safely evolvable.

### Audit classification rule

Every future adversarial-audit finding must be labeled as one of:

- `CORRECTION / 真正修正`;
- `HARDENING / 架构加固`;
- `CLARIFICATION / 澄清`;
- `NEW SAFEGUARD / 新增保护`;
- `DOCUMENTATION REPAIR / 文档修复`.

This prevents ordinary hardening or documentation repair from being misrepresented as a change in product direction.

### Current round status

- **Round 3 — SEALED / product architecture only.**
- **Round 4 — SEALED / product architecture only.**
- **Round 5 — SEALED / product architecture only.**
- **Round 6 — REVALIDATED / REPLACEMENT-SEALED / product architecture only.** Current truth: `docs/INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md`.
- **Round 7 — SEALED / product architecture only.** Current truth: `docs/INK-EAST-ROUND-7-CURRENT-TRUTH-V1.md`, validated by source parity and adversarial audit, sealed by `docs/INK-EAST-ROUND-7-SEAL-RECORD.md`.
- **Project-wide Rule Evolvability & Change Architecture — SEALED / foundational architecture.**
- **Round 8 — SEALED / product architecture only.** Current truth: `docs/INK-EAST-ROUND-8-CURRENT-TRUTH-V1.md`, source parity 122/122 PASS, adversarial audit PASS, sealed by `docs/INK-EAST-ROUND-8-SEAL-RECORD.md`.
- **Current next workshop subject: Round 9 — Reader Behavior & Interest Graph / 读者行为与兴趣图谱.**

`SEALED` means durable canonical record with no known unresolved material blocker at that checkpoint, not immunity from later evidence-based correction.

Previous user acceptance such as `全部采用 / adopt all` records product direction but is not itself evidence of deep validation. Later audits may explicitly amend earlier accepted/sealed wording when genuine contradictions, unsafe assumptions, privacy risks, governance capture, rigidity or implementation-dangerous ambiguity are discovered. Such changes must be recorded explicitly rather than silently rewriting history.

For ordinary hardening, consistency checks, consolidation and audits that do not change product direction, continue autonomously. Stop for user confirmation when there is a genuine product choice, material policy change or multiple reasonable directions with meaningfully different outcomes.

## Current content / knowledge direction

Authoritative content/knowledge supplement: `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`.

```text
Platform content != one generic Article/blog system.
```

The long-term content domain contains distinct authority/interaction lanes, including canonical classical texts, editorial/teaching publishing, contributor publishing and user/community publishing. Canonical classical-text reading preserves source integrity; ordinary social discussion belongs in linked companion community/discussion objects rather than contaminating the canonical text surface.

A42–A43 remain controlling: canonical/source-backed authority means provenance/edition/source integrity and does not certify every factual or interpretive claim inside a historical text as true; canonical/source authority and Work Recognition are separate systems.

`识典古籍 / Shidianguji` remains a functional reference for the canonical classical-text reading/research lane only, not the total platform template.

### Round 7 sealed knowledge/provenance model

Round 7 supplies the durable Knowledge Graph & Provenance（知识图谱与来源溯源） baseline. It preserves, among other things:

- Knowledge Entity != Authority-bearing Subject != Work/Object != Claim != Relationship;
- stable internal identity != mutable names/URLs/external identifiers;
- Work / Edition-Version / Source Item-Witness / Digital Surrogate / Segment distinguishability where needed;
- provenance != truth certification;
- source provenance != rights basis != epistemic/source assessment;
- citation != proof;
- contested Claims and uncertainty may remain unresolved;
- canonical/source authority != Work Recognition;
- Rights Approval != Edition/Main Base Selection;
- knowledge reconciliation != operational authority migration;
- machine/AI-derived knowledge remains provenance-bearing and non-canonical by default.

The user-confirmed `Ink & East Ancient Books Image Rights & Source Policy v0.1` remains an operational rights/search-clearance policy input. The institution whitelist and A/B/C/D source classes are configurable operational policy, not permanent ontology. Round 7 preserves commercial-use clearance, `Item-level Rights > Collection-level Rights > Institution-level Policy`, original Rights wording/evidence, rights history/re-review, and the separation between reuse permission and technical access rules.

### Round 8 sealed community/discussion model

Round 8 now supplies the durable Community & Discussion（社区与讨论） baseline. It preserves, among other things:

- one unified Community System（统一社区系统） across the platform;
- Home / For You / Domain / Topic / Place / Following / Explore（首页 / 为你推荐 / 领域 / 主题 / 地点 / 关注 / 探索） as projections over the same network;
- Community Publication / Discussion Thread / Question / Answer / Reply（社区发布物 / 讨论线程 / 问题 / 回答 / 回复） as distinguishable objects;
- canonical/source-backed content and ordinary social discussion remain separate but precisely linkable;
- thread/message identity survives URL, sort, placement, editing and lifecycle changes;
- Reaction / Save / Follow / Reply / Answer / Share（互动反应 / 收藏 / 关注 / 回复 / 回答 / 分享） retain distinct meanings rather than collapsing into one engagement score;
- creators/authors do not automatically become moderators of other users;
- Close / Lock / Archive / Resolve / Remove（关闭 / 锁定 / 归档 / 已解决 / 移除） remain distinct;
- withdrawal / deletion / moderation removal / legal removal / privacy deletion remain distinct;
- Report（举报） is an input, not proof; Moderation Case（审核案件） is a separate governance workflow;
- moderation visibility != Recommendation ranking（推荐排序） != user preference;
- Hybrid / Shallow Threading（混合式 / 浅层线程）, First-class Question Mode（一级问答模式） and V1 Reference / Share first（引用 / 分享优先） remain provisional current product directions, not immutable hard invariants;
- user-created independent communities/groups, private messaging and full Repost Graph（转发关系图） remain deferred.

Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱） must build on these distinctions rather than retroactively redefining what community actions mean.

## Ecommerce completeness rule

Before treating the Spatial Flow source-native ecommerce surface as complete, maintain the Project 2 → Project 3 parity/migration matrix:

`docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`

It records Project 2 page/reference inventory, accepted Cart/Checkout/Packaging/Crypto/result-state product truth, Project 3 source-native gaps, explicit non-port rules and compressed implementation batches.

## Current commerce milestone

**Commerce Batch A — source-native commerce domain + core Shop/Product/Bag routes — is accepted.**

Read: `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`.

Batch A established Payload-owned Product Categories, Products, Carts and Commerce Settings; canonical `/shop` and `/shop/[slug]`; `/product/[slug]` compatibility redirect; source-native `/cart`; anonymous server-owned Bag session; server-authoritative variant/price/stock/quantity resolution; persisted cart mutations; cross-origin mutation protection; representative seed data; Ink & East → Spatial Flow bridge; and provisional V0 presentation.

Batch A did not fabricate Checkout, Orders, shipping, Product Packaging, payment, Crypto, account or support completeness.

Next commerce tranche remains:

```text
Batch B — Full Cart parity + Checkout/order core
```

Batch B remains deferred while Product Architecture / investor-track work is prioritized.

## Project 2 reuse rule

Classify each Project 2 item as already exists in Project 3; must be source-native; reusable product/interaction decision; intentionally deferred; obsolete/WordPress-only; or requires a new source-native replacement. Do not let a smaller static preview set masquerade as completeness, and do not blindly port legacy WooCommerce mechanisms.

## Precedence over older documents

Older files may contain stale wording such as Project 3 = Ink & East only, permanent East-only scope, generic article/blog interpretation, WordPress implementation hints, older completion scores or next-step sequences, user-level ladders, `Verified Contributor` as canonical architecture, Institution as the universal organization entity, Contributor-only guaranteed organic launch support, blanket new-account restrictions, overly broad `Authoritative Classical Text` semantics, one-Acting-Entity-only assumptions, fixed appeal counts, rigid examples, the superseded pre-revalidation Round 6 Final/Seal, pre-seal Round 7 workshop proposals, or pre-consolidation Round 8 proposals.

Those statements are superseded where they conflict with this file, accepted amendment/audit records, Round 6 V6 current truth + replacement seal, Round 7 V1 current truth + validation + seal, the project-wide Rule Evolvability & Change Architecture, Round 8 V1 current truth + validation + seal, `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`, `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`, later accepted Product Architecture decisions, the ecommerce parity matrix, or later accepted milestone records.

## Read order for a new project window

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
13. `docs/INK-EAST-ROUND-7-CURRENT-TRUTH-V1.md`
14. `docs/ROUND-7-V1-SOURCE-PARITY-PASS.md`
15. `docs/ROUND-7-V1-ADVERSARIAL-AUDIT.md`
16. `docs/INK-EAST-ROUND-7-SEAL-RECORD.md`
17. `docs/PROJECT-3-PLATFORM-RULE-EVOLVABILITY-CHANGE-ARCHITECTURE-V1.md`
18. `docs/PROJECT-3-RULE-EVOLVABILITY-CROSS-PROJECT-CONSISTENCY-PASS.md`
19. `docs/PROJECT-3-RULE-EVOLVABILITY-ADVERSARIAL-AUDIT.md`
20. `docs/PROJECT-3-RULE-EVOLVABILITY-SEAL-RECORD.md`
21. `docs/INK-EAST-ROUND-8-CURRENT-TRUTH-V1.md`
22. `docs/ROUND-8-V1-SOURCE-PARITY-PASS.md`
23. `docs/ROUND-8-V1-ADVERSARIAL-AUDIT.md`
24. `docs/INK-EAST-ROUND-8-SEAL-RECORD.md`
25. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md`
26. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md`
27. historical Round 3/4 and Workshop A–G records when provenance is needed
28. PR #53 latest conversation/decision history while the workshop remains open
29. `INK-EAST-BRIEF.md` for product history while ignoring superseded assumptions
30. `docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`
31. `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`
32. `docs/PROJECT-3-CURRENT-HANDOFF.md`
33. superseded Round 6 Final/Seal and older planning documents only as historical references

Do not restart visual-finalization work merely because an older roadmap says a static page is incomplete. First determine whether missing work affects product coverage, functional testing, shared architecture, accessibility or V0 coherence; launch-level visual refinement belongs to the final visual pass.
