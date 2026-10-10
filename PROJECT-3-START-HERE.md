# Project 3 · Start Here

> Status: current Project 3 entry-point and precedence note. Read this before older handoff / roadmap documents.

## Current authoritative architecture

Project 3（项目三）is the current shared development / planning context（共同开发 / 规划上下文）for **Ink & East（墨与东方）** and **Spatial Flow（空间流）**, but the two are **independent products/projects（独立产品 / 项目）**, not one unified user-facing platform. They are developed in the same context because this is convenient during the current engineering/planning phase. Their product-level relationship is now resolved as a Standing Strategic Relationship（持续战略关系）with Spatial Flow（空间流）as a non-exclusive Preferred Strategic Partner（优先战略合作伙伴）; public brand/legal wording and several infrastructure axes remain intentionally deferred. Shared account/search/payment/data infrastructure must not be assumed. Ink & East（墨与东方）remains the editorial / cultural / knowledge product line（编辑 / 文化 / 知识产品线）and may itself expand beyond its initial Eastern/Chinese culture wedge（东方 / 中国文化切入口）according to later product decisions.

Project 2（项目二）remains a separate WordPress / WooCommerce（WordPress / WooCommerce 电商）visual-reskin track（视觉换皮工程）for Spatial Flow（空间流）. It may remain a product-truth / page / state / flow reference（产品事实 / 页面 / 状态 / 流程参考）for Spatial Flow（空间流）source-native ecommerce（源码原生电商）, but it does not define Ink & East（墨与东方）product architecture（产品架构）or the future cooperation relationship（未来合作关系）between the two independent products.

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
20. `docs/INK-EAST-ROUND-8-SEAL-RECORD.md` — current Round 8 seal;
21. `docs/INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md` — Round 9 Reader Behavior & Interest Graph current truth, blob `deaf01ce9368f55b014ca56e5ff6bb9416f3a1e5`;
22. `docs/ROUND-9-V1-SOURCE-PARITY-PASS.md` — PASS / 162 of 162 Round 9 rules carried forward;
23. `docs/ROUND-9-V1-ADVERSARIAL-AUDIT.md` — PASS / zero unresolved material blockers;
24. `docs/INK-EAST-ROUND-9-SEAL-RECORD.md` — current Round 9 seal;
25. `docs/ROUND-9-PREEXISTING-INTEREST-DIRECTION-PROVENANCE-NOTE.md` — documentation repair showing that the non-label / multi-interest / cross-topic-exploration direction predates Round 9 and is continued, not reinvented;
26. `docs/INK-EAST-ROUND-10-CURRENT-TRUTH-V1.md` — Round 10 Discovery & Recommendation（发现与推荐） current truth, 318 controlling rules;
27. `docs/ROUND-10-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md` — PASS AFTER HARDENING;
28. `docs/ROUND-10-CROSS-WORKSHOP-HARDENING-ADDENDUM.md` — R10-X1…R10-X6;
29. `docs/ROUND-10-V1-SOURCE-PARITY-PASS.md` — PASS / 318 of 318 Round 10 controlling rule slots carried forward;
30. `docs/ROUND-10-V1-ADVERSARIAL-AUDIT.md` — PASS / 158 explicit failure modes / zero unresolved material blockers;
31. `docs/INK-EAST-ROUND-10-SEAL-RECORD.md` — current Round 10 seal;
32. `docs/ROUND-10-CHECKPOINT-READ-ME.md` — human-review checkpoint for PR #53.
33. `docs/INK-EAST-ROUND-11-CURRENT-TRUTH-V1.md` — Round 11 Issues / Editorial Curation（议题 / 编辑策展） current truth, 273 controlling rules;
34. `docs/ROUND-11-V1-SOURCE-PARITY-PASS.md` — PASS / 273 of 273 Round 11 controlling rule slots carried forward;
35. `docs/ROUND-11-V1-ADVERSARIAL-AUDIT.md` — PASS / 120 explicit failure modes / zero unresolved material blockers;
36. `docs/INK-EAST-ROUND-11-SEAL-RECORD.md` — current Round 11 seal;
37. `docs/ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md` — controlling for the public-content / non-paywall Membership boundary; its older procedural next-step wording does **not** outrank the later Reading Room provenance audit, current Product Baseline or Rounds 12–16 sequence reconciliation;
38. `docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V1.md` — cross-round regression audit against superseded product directions; mandatory regression gate for remaining workshops.
39. `docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V2.md` — deep regression pass across all accepted A1–A47 / F1–F10 correction vectors + sealed Round 6–11 current truth; current preferred regression report.
40. `docs/PROJECT-3-SUPERSEDED-DIRECTION-REGISTRY-V1.md` — explicit registry of superseded/rejected directions and their current replacements; mandatory guard against legacy-plan revival.
41. `docs/INK-EAST-ROUNDS-1-5-CURRENT-TRUTH-SAFETY-CONSOLIDATION-V1.md` — safe modern reading layer for Rounds 1–5 after supersession corrections; not a substitute for detailed provenance.
42. `docs/PR-53-SUPERSESSION-REGRESSION-HARDENING-RECORD.md` — verified hardening record: legacy/current-looking files quarantined, current-truth repairs applied, legacy source-schema debt recorded.
43. `docs/ROUNDS-1-5-SAFETY-CONSOLIDATION-SOURCE-PARITY-PASS.md` — PASS AFTER HARDENING; material accepted Round 1–5 directions are present in the safe current-reading layer.
44. `docs/PR-53-PRE-RESUME-FULL-CHECKPOINT-AUDIT-V1.md` — **INVALIDATED / HISTORICAL** after the later Reading Room provenance defect.
45. `docs/ROUND-12-READING-ROOM-CONCEPT-PROVENANCE-AUDIT.md` — proves Reading Room was legacy-inherited and never independently revalidated after reset.
46. `docs/ROUNDS-1-5-PRODUCT-PLANNING-RECONSTRUCTION-V1.md` — historical first reconstruction; superseded by V2 for current product-planning use.
47. `docs/PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V1.md` — historical first provenance matrix; superseded by V2 for current use.
48. `docs/ROUNDS-1-5-PRODUCT-PLANNING-RECONSTRUCTION-V2.md` — preferred reconstructed product-planning layer for Rounds 1–5.
49. `docs/ROUNDS-1-5-PRODUCT-PLANNING-RECONSTRUCTION-SOURCE-AUDIT-V1.md` — PASS AFTER HARDENING / source-supported product-planning reconstruction.
50. `docs/PR-53-PRE-RESUME-AUDIT-SURVIVING-FINDINGS-MAP-V1.md` — preserves valid findings from the invalidated pre-resume audit while revoking its global clearance verdict.
51. `docs/PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2.md` — expanded current product/page/module provenance matrix; separates product need from container/route/name existence.
52. `docs/PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2-AUDIT.md` — PASS AFTER HARDENING / 74 provenance attacks.
53. `docs/PROJECT-3-CURRENT-PRODUCT-SURFACE-CAPABILITY-BASELINE-V1.md` — preferred product-level handoff: confirmed surfaces, confirmed capabilities, deferred domains and legacy-only concepts.
54. `docs/PROJECT-3-CURRENT-PRODUCT-SURFACE-CAPABILITY-BASELINE-V1-AUDIT.md` — PASS AFTER HARDENING / zero material internal contradictions.
55. `docs/PROJECT-3-CURRENT-PRODUCT-BASELINE-CROSS-SOURCE-RECONCILIATION-V1.md` — Task 1 cross-source reconciliation; PASS AFTER DOCUMENTATION REPAIR.
56. `docs/PROJECT-3-ROUNDS-12-16-SEQUENCE-PROVENANCE-RECONCILIATION-V1.md` — Task 2 remaining-sequence provenance review; PASS WITH ROUND-12 LABEL CORRECTION / NO REORDERING REQUIRED.
57. `docs/ROUND-12-MEMBERSHIP-PURPOSE-ROLE-DISCOVERY-STEP-1-FREE-BASELINE-GAP-MAP.md` — SUPERSEDED / NON-CONTROLLING; historical record of the rejected paid-value-first restart framing.
58. `docs/ROUND-12-MEMBERSHIP-OPEN-CORE-ECONOMIC-FRICTION-BASELINE-V1.md` — REVALIDATED / current controlling Round 12 restart baseline: Open Core + contextual payment-as-economic-friction.
59. `docs/ROUND-12-MEMBERSHIP-EXTERNAL-PREMIUM-PATTERN-BENCHMARK-V1.md` — current external benchmark / NON-CONTROLLING research.

The older `docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-FINAL.md` and `docs/INK-EAST-ROUND-6-SEAL-RECORD.md` are historical provenance only where superseded by the Round 6 revalidation chain.

Historical Round records and earlier consolidations remain decision provenance. Where they conflict with a later explicit amendment/revalidation/current-truth record, **the later applicable current-truth record wins**. Do not silently rewrite history merely to make old decisions look as if they were always correct.

### Mandatory flexibility rule for all future architecture work

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Future Product Architecture proposals must explicitly distinguish:

- `HARD INVARIANT / 硬边界` — must remain true across contexts;
- `HARD PRODUCT DIRECTION / REQUIREMENT / 产品级硬方向 / 要求` — current product-level architecture direction that should remain true unless explicitly amended;
- `ADAPTIVE RULE / 弹性规则` — context-aware decision logic;
- `DEFERRED CALIBRATION / 延后校准` — thresholds/timing/formulas require data or later policy work;
- `SCOPE GUARD / 范围护栏` — explicit limit on what the current Round is and is not deciding;
- `PROVISIONAL PRODUCT DIRECTION / 暂定产品方向` — user-confirmed current direction that remains intentionally revisable;
- `EXAMPLE / 示例` — explanatory only, never silently promoted into a universal rule.

Do not turn an example, threshold, sequence, cooldown, document requirement, reviewer count, appeal count, exploration ratio, ranking weight or risk treatment into a universal rule merely because it is easier to specify. Before sealing any major Round, test whether apparently precise wording has accidentally frozen something intended to remain flexible.

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
- **Round 9 — SEALED / product architecture only.** Current truth: `docs/INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md`, source parity 162/162 PASS, adversarial audit PASS, sealed by `docs/INK-EAST-ROUND-9-SEAL-RECORD.md`.
- **Round 10 — SEALED / product architecture only.** Current truth: `docs/INK-EAST-ROUND-10-CURRENT-TRUTH-V1.md`, source parity 318/318 PASS, full adversarial audit PASS, sealed by `docs/INK-EAST-ROUND-10-SEAL-RECORD.md`.
- **Round 11 — SEALED / product architecture only.** Current truth: `docs/INK-EAST-ROUND-11-CURRENT-TRUTH-V1.md`, source parity 273/273 PASS, full adversarial audit PASS, sealed by `docs/INK-EAST-ROUND-11-SEAL-RECORD.md`.
- **Round 12 — FOUNDATION RESOLVED / MEMBERSHIP PRODUCT DEFINITION DEFERRED（基础边界已解决 / 会员产品定义暂缓）.** Current foundation truth: `docs/INK-EAST-ROUND-12-CURRENT-TRUTH-V1.md`; foundation source parity PASS 20/20; foundation adversarial audit PASS with 50 explicit failure modes. The previous full-round seal record is superseded. Re-entry checkpoints: immediately after Round 13, and mandatory before Round 15.
- **Previous Pre-Resume blanket clearance — INVALIDATED / HISTORICAL（已失效 / 仅历史）.** `docs/PR-53-PRE-RESUME-FULL-CHECKPOINT-AUDIT-V1.md` must not be used as a current “zero blockers / mainline cleared” certificate. Surviving correct findings are mapped by `docs/PR-53-PRE-RESUME-AUDIT-SURVIVING-FINDINGS-MAP-V1.md`; future work must pass both semantic-supersession and product-concept-existence provenance checks.
- **Product-planning reconstruction / concept-provenance pass — COMPLETE FOR CURRENT CHECKPOINT（当前检查点完成）.** Rounds 1–5 Product Planning Reconstruction V2 passed source/provenance audit; Product Concept Provenance Matrix V2 passed 74 adversarial provenance attacks; Current Product Surface & Capability Baseline V1 passed its own audit.
- **Previous Pre-Resume Full Checkpoint PASS remains INVALIDATED（此前主线恢复前全盘检查仍失效）**; its surviving correct findings are mapped forward instead of restoring the old blanket clearance.
- **Reading Room（阅读室） existence: UNRESOLVED（未决定）**; exact old Letters / Ask / Membership-page / Community-aggregate / service-page containers are likewise not inherited automatically.
- **Current Product Baseline cross-source reconciliation — COMPLETE / PASS AFTER DOCUMENTATION REPAIR（已完成 / 文档修复后通过）.** Confirmed omissions restored include Domain projection, Create/Publish/Submit, scoped Identity/Claim Verification, governance user workflows and editorial acquisition capabilities; none creates a mandatory legacy container.
- **Rounds 12–16 sequence provenance reconciliation — COMPLETE / ORDER RETAINED（已完成 / 顺序保留）.** Membership（会员）remains a valid Round 12（第十二轮）subject with product definition deferred; Reading Room（阅读室）is removed from controlling title/scope assumptions; Round 13（第十三轮）has since been corrected so Custom Reading（定制解读）and Custom Ebook Studio（定制电子书工作室）are rejected; Commission（约稿）has been removed from Current Product Architecture（当前产品架构）and retained only as historical provenance（历史溯源）; Open Cultural Recovery（开放文化寻回）is confirmed and cross-round reconciled; the Ink & East ↔ Spatial Flow（墨与东方 ↔ 空间流）product-level relationship has since been resolved at current architecture depth (see the Round 13 current relationship baseline below); Round 14（第十四轮）is the current governance reconciliation subject for Ink & East（墨与东方）architecture; Rounds 15–16（第十五至十六轮）remain downstream demo/business-narrative deliverables.
- **Round 12 foundation decision:** Economic Commitment Signal（经济承诺信号） is an independent contextual anti-abuse/capability concept. Membership may become one source of that signal but is not the mechanism itself. Standalone recurring Membership is **DEFERRED / PRODUCT EXISTENCE NOT YET JUSTIFIED**; Reading Room remains unresolved/not required; no VIP feature bundle is invented merely to justify subscription economics.
- **Non-paying path preserved:** ordinary durable/long-form publishing must retain a legitimate non-paying path; payment may only reduce selected friction where payment genuinely mitigates the relevant zero-cost/Sybil risk.
- **External benchmark:** `docs/ROUND-12-MEMBERSHIP-EXTERNAL-PREMIUM-PATTERN-BENCHMARK-V1.md` remains NON-CONTROLLING research only.
- **Round 13（第十三轮）— CULTURAL RECOVERY & RELATIONSHIP RESOLVED AT CURRENT ARCHITECTURE DEPTH（文化寻回及双项目关系在当前产品架构深度已解决）.** Use `docs/ROUND-13-INK-EAST-SPATIAL-FLOW-CURRENT-RELATIONSHIP-BASELINE-V1.md` for the current relationship; retained earlier discussions are historical only（以前讨论仅用于决策溯源）.
- B-C1…B-C6 remain DEFERRED（暂缓）. The old 80-item Membership list remains a Capability / Value Candidate Pool（能力 / 价值候选池） only.

`SEALED` means durable canonical record with no known unresolved material blocker at that checkpoint, not immunity from later evidence-based correction.

Previous user acceptance such as `全部采用 / adopt all` records product direction but is not itself evidence of deep validation. Later audits may explicitly amend earlier accepted/sealed wording when genuine contradictions, unsafe assumptions, privacy risks, governance capture, rigidity or implementation-dangerous ambiguity are discovered. Such changes must be recorded explicitly rather than silently rewriting history.

For ordinary hardening, consistency checks, consolidation and audits that do not change product direction, continue autonomously. Stop for user confirmation when there is a genuine product choice, material policy change or multiple reasonable directions with meaningfully different outcomes.

After the complete Product Architecture sequence 1–16 is finished, PR #53 must receive a new **Full Comprehensive Adversarial Audit（全量综合对抗性审计）** across the complete architecture. That final audit is not replaced by individual Round or Workshop audits.

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

### Round 9 sealed reader-behavior / interest model

Round 9 now supplies the durable Reader Behavior & Interest Graph（读者行为与兴趣图谱） baseline. It preserves, among other things:

- Interest Graph（兴趣图谱） != permanent User Profile Label（永久用户画像标签）; this continues an earlier PR #53 direction rather than inventing a new principle;
- behavior signals preserve distinct semantics instead of collapsing into one engagement score;
- Explicit Preference（明确偏好） != Inferred Interest（推断兴趣）;
- Session / Recent / Durable（会话 / 近期 / 长期） interest layers are distinguishable;
- one user may hold multiple concurrent Interest Clusters（兴趣簇） rather than one rigid specialization identity;
- Interest != expertise / identity / belief / Account Trust / governance standing / Work Recognition / source authority;
- interest propagation across Knowledge Graph relations is bounded, uncertain and reversible;
- user correction, negative feedback and Recommendation Reset（推荐重置） have real downstream effect;
- Relevance（相关性） and Exploration / Serendipity（探索 / 偶然发现） are separate product objectives;
- one dominant interest cannot monopolize Home / For You by default, while explicit deep-dive/search intent may temporarily justify concentration;
- Diversity（多样性） is page/session-level and multi-dimensional, not one universal score;
- private notes/messages and moderation evidence are not recommendation fuel by default;
- raw events, explicit preferences and derived personalization states/features remain separate data classes;
- privacy/deletion/reset/model migration propagates to dependent derived state as required;
- exact model family, data infrastructure, weights, decay curves and exploration ratios remain deferred and evolvable;
- early V1 may use simple rules/curation while preserving future Candidate Retrieval → Pre-ranking → Ranking → Re-ranking / Blending（候选召回 → 预排序 → 排序 → 重排序 / 混排） boundaries.

### Round 10 sealed discovery / recommendation model

Round 10 now supplies the durable Discovery & Recommendation（发现与推荐） baseline. It preserves, among other things:

- recommendation is a multi-surface, task-specific system rather than one universal feed score;
- Eligibility（资格） precedes ranking and cannot be bypassed by high relevance;
- Candidate Retrieval（候选召回）, optional Pre-ranking（可选预排序）, Ranking（排序）, Re-ranking / Blending（重排序 / 混排） and Surface Composition（页面组合） remain conceptually distinct;
- Interest Graph（兴趣图谱） is one relevance input, not the recommendation system itself;
- Home / For You（首页 / 为你推荐） uses the provisional Hybrid Homepage（混合式首页） direction;
- Following（关注） uses the provisional Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新） direction;
- Explore（探索）, Search（搜索）, Related / Next（相关推荐 / 下一项） and Topic / Place（主题 / 地点） preserve their own explicit task semantics;
- Exploration / Diversity / Freshness / Trending / Long-tail（探索 / 多样性 / 新鲜度 / 趋势 / 长尾） remain distinct product/distribution concepts;
- recommendation rank, popularity, trend and exposure do not create authority, factual truth or Work Recognition（作品认可）;
- Recommendation Explanation（推荐解释） must be materially truthful and aligned with actual exposure provenance;
- User Control（用户控制） is scoped, persistent where declared, testable, and survives model rollback;
- Recommendation Reset（推荐重置）, Personalization Opt-out（退出个性化）, Anonymous Session（匿名会话） and degraded/fallback modes have explicit lifecycle semantics;
- Anonymous → Account（匿名 → 账户） uses the provisional Scoped / transparent handoff（有限范围、透明衔接） direction rather than default full-history fusion;
- material model/policy changes remain versionable, observable, shadow-testable, staged-rollout capable and rollback-aware where proportionate;
- paid / sponsored / commerce recommendation is not authorized;
- full Notifications / Delivery（通知 / 投递） ranking/eligibility/fatigue architecture is explicitly deferred.

## Legacy source-schema migration warning / 旧源码字段迁移警告

The existing Level 1 source scaffold predates PR #53 Product Architecture and still contains legacy access placeholders, including:

- `apps/web/src/fields/visibilityField.ts` values `reader` / `patron`;
- `apps/web/src/collections/Articles.ts` field `is_vip`.

These fields are **implementation debt / historical placeholders**, not current Membership product truth. They must not be used to infer article/Issue/Archive paywalls or fixed Reader/Patron tiers. Do not delete/migrate them until implementation is separately authorized; when implementation resumes, reconcile them against final Round 12 Membership/public-content architecture.

## Ecommerce completeness rule

Before treating the Spatial Flow source-native ecommerce surface as complete, maintain the Project 2 → Project 3 parity/migration matrix:

`docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`

It records Project 2 page/reference inventory, accepted Cart/Checkout/Packaging/Crypto/result-state product truth, Project 3 source-native gaps, explicit non-port rules and compressed implementation batches.

## Current commerce milestone

**Commerce Batch A — source-native commerce domain + core Shop/Product/Bag routes — is accepted.**

Read: `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`.

Batch A（批次 A）established Payload-owned（由 Payload 管理的）Product Categories（商品分类）, Products（商品）, Carts（购物车）and Commerce Settings（电商设置）; canonical（规范）`/shop` and `/shop/[slug]`; `/product/[slug]` compatibility redirect（兼容重定向）; source-native（源码原生）`/cart`; anonymous server-owned Bag session（匿名服务端购物袋会话）; server-authoritative variant/price/stock/quantity resolution（服务端权威的规格 / 价格 / 库存 / 数量解析）; persisted cart mutations（持久化购物车变更）; cross-origin mutation protection（跨源变更保护）; representative seed data（代表性种子数据）; a provisional Ink & East → Spatial Flow bridge（临时的墨与东方 → 空间流桥接）created during co-development（共同开发）; and provisional V0 presentation（暂定 V0 展示）. The bridge is not evidence of one Shared Platform（共享平台）or a final cooperation model（最终合作模型）.

Batch A did not fabricate Checkout, Orders, shipping, Product Packaging, payment, Crypto, account or support completeness.

Next commerce tranche remains:

```text
Batch B — Full Cart parity + Checkout/order core
```

Batch B remains deferred while Product Architecture / investor-track work is prioritized.

## Project 2 reuse rule

Classify each Project 2 item as already exists in Project 3; must be source-native; reusable product/interaction decision; intentionally deferred; obsolete/WordPress-only; or requires a new source-native replacement. Do not let a smaller static preview set masquerade as completeness, and do not blindly port legacy WooCommerce mechanisms.

## Precedence over older documents

Older files may contain stale wording such as Project 3 = Ink & East only, permanent East-only scope, generic article/blog interpretation, WordPress implementation hints, older completion scores or next-step sequences, user-level ladders, `Verified Contributor` as canonical architecture, Institution as the universal organization entity, Contributor-only guaranteed organic launch support, blanket new-account restrictions, overly broad `Authoritative Classical Text` semantics, one-Acting-Entity-only assumptions, fixed appeal counts, rigid examples, the superseded pre-revalidation Round 6 Final/Seal, pre-seal Round 7 workshop proposals, pre-consolidation Round 8 proposals, pre-consolidation Round 9 recommendation/interest hypotheses, or pre-consolidation Round 10 discovery/recommendation proposals.

**Legacy-document quarantine rule / 旧文档隔离规则:** `INK-EAST-BRIEF.md`, `INK-EAST-ROADMAP.md`, `.kiro/steering/ink-east-handoff.md`, `PROJECT-CONTROL-MASTER.md`, early Workshop/Decision Log and historical Round 3/4 consolidations now carry explicit warning banners. They remain Decision Provenance（决策溯源） only where superseded. Always consult `docs/PROJECT-3-SUPERSEDED-DIRECTION-REGISTRY-V1.md` before reusing detailed old product behavior.

**Membership legacy trap / 会员旧方案污染警告:** `INK-EAST-BRIEF.md`, `INK-EAST-ROADMAP.md`, `PROJECT-CONTROL-MASTER.md` and old static-preview records contain superseded 30% paywall, VIP Library, VIP Long Read, fixed Reader/Patron packaging/pricing, `99% free + rare VIP content` and membership-gated participation assumptions. These remain historical provenance only. Current Round 12 direction is: normal published platform content and ordinary core product loops remain available without Membership; Membership is not a paywall/content-unlock product; payment may only relax selected capability restrictions where it genuinely supplies anti-Sybil/economic friction. Do not turn payment into universal trust/authority/distribution or invent paid-only core features merely to create subscription value.

Those statements are superseded where they conflict with this file, accepted amendment/audit records, Round 6 V6 current truth + replacement seal, Round 7 V1 current truth + validation + seal, the project-wide Rule Evolvability & Change Architecture, Round 8 V1 current truth + validation + seal, Round 9 V1 current truth + validation + seal, Round 10 V1 current truth + validation + seal, `docs/PROJECT-3-FUNCTION-FIRST-VISUAL-BASELINE.md`, `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`, later accepted Product Architecture decisions, the ecommerce parity matrix, or later accepted milestone records.

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
25. `docs/INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md`
26. `docs/ROUND-9-V1-SOURCE-PARITY-PASS.md`
27. `docs/ROUND-9-V1-ADVERSARIAL-AUDIT.md`
28. `docs/INK-EAST-ROUND-9-SEAL-RECORD.md`
29. `docs/ROUND-9-PREEXISTING-INTEREST-DIRECTION-PROVENANCE-NOTE.md`
30. `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md` when recommendation-reference provenance is needed
31. `docs/INK-EAST-ROUND-10-CURRENT-TRUTH-V1.md`
32. `docs/ROUND-10-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`
33. `docs/ROUND-10-CROSS-WORKSHOP-HARDENING-ADDENDUM.md`
34. `docs/ROUND-10-V1-SOURCE-PARITY-PASS.md`
35. `docs/ROUND-10-V1-ADVERSARIAL-AUDIT.md`
36. `docs/INK-EAST-ROUND-10-SEAL-RECORD.md`
37. `docs/ROUND-10-CHECKPOINT-READ-ME.md` for a compressed human-review path
38. `docs/INK-EAST-ROUND-11-CURRENT-TRUTH-V1.md`
39. `docs/ROUND-11-V1-SOURCE-PARITY-PASS.md`
40. `docs/ROUND-11-V1-ADVERSARIAL-AUDIT.md`
41. `docs/INK-EAST-ROUND-11-SEAL-RECORD.md`
42. `docs/ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`
43. `docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V2.md` — preferred deep regression report
44. `docs/PROJECT-3-SUPERSEDED-DIRECTION-REGISTRY-V1.md`
45. `docs/INK-EAST-ROUNDS-1-5-CURRENT-TRUTH-SAFETY-CONSOLIDATION-V1.md`
46. `docs/ROUNDS-1-5-SAFETY-CONSOLIDATION-SOURCE-PARITY-PASS.md`
47. `docs/ROUNDS-1-5-PRODUCT-PLANNING-RECONSTRUCTION-V2.md` — preferred early product-planning reconstruction
48. `docs/ROUNDS-1-5-PRODUCT-PLANNING-RECONSTRUCTION-SOURCE-AUDIT-V1.md` — source/provenance PASS
49. `docs/PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2.md` — current concept-existence provenance guard
50. `docs/PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2-AUDIT.md` — provenance adversarial audit
51. `docs/PROJECT-3-CURRENT-PRODUCT-SURFACE-CAPABILITY-BASELINE-V1.md` — preferred product-level handoff
52. `docs/PROJECT-3-CURRENT-PRODUCT-SURFACE-CAPABILITY-BASELINE-V1-AUDIT.md` — baseline audit
53. `docs/ROUND-12-READING-ROOM-CONCEPT-PROVENANCE-AUDIT.md` — Reading Room existence correction
54. `docs/PR-53-PRE-RESUME-AUDIT-SURVIVING-FINDINGS-MAP-V1.md` — surviving findings from the invalidated audit
55. `docs/PROJECT-3-CURRENT-PRODUCT-BASELINE-CROSS-SOURCE-RECONCILIATION-V1.md` — Task 1 final cross-source baseline check
56. `docs/PROJECT-3-ROUNDS-12-16-SEQUENCE-PROVENANCE-RECONCILIATION-V1.md` — Task 2 remaining-sequence provenance check
57. `docs/ROUND-12-MEMBERSHIP-OPEN-CORE-ECONOMIC-FRICTION-BASELINE-V1.md` — Round 12 restart baseline.
58. `docs/ROUND-12-ECONOMIC-COMMITMENT-SIGNAL-MEMBERSHIP-DEFERRED-DECISION.md` — user-confirmed Round 12 decision.
59. `docs/INK-EAST-ROUND-12-CURRENT-TRUTH-V1.md` — Round 12 current truth.
60. `docs/ROUND-12-V1-SOURCE-PARITY-PASS.md` — PASS 20 / 20.
61. `docs/ROUND-12-V1-ADVERSARIAL-AUDIT.md` — PASS / 50 explicit failure modes / zero unresolved material blockers.
62. `docs/ROUND-12-FOUNDATION-CHECKPOINT-MEMBERSHIP-REENTRY-SCHEDULE.md` — current Round 12 status and mandatory re-entry schedule.
63. `docs/INK-EAST-ROUND-12-SEAL-RECORD.md` — SUPERSEDED as a full-round seal / historical provenance only.
64. `docs/ROUND-12-MEMBERSHIP-EXTERNAL-PREMIUM-PATTERN-BENCHMARK-V1.md` — external pattern research / non-controlling.
65. `docs/ROUND-12-MEMBERSHIP-PRODUCT-EXISTENCE-ROLE-STEP-2-DISCUSSION-V1.md` — resolved historical decision provenance.
66. `docs/ROUND-13-FOUNDATION-CORRECTION-INDEPENDENT-PRODUCTS-LEGACY-SERVICES-V2.md` — current controlling Round 13（第十三轮）foundation correction（基础纠正）.
67. `docs/ROUND-13-SERVICES-MONETIZATION-SPATIAL-FLOW-RESTART-SCOPE-V1.md` — earlier restart scope（早期重启范围）; superseded where it assumes a shared platform or legacy-service revalidation.
68. `docs/ROUND-13-BLOCK-1-COMMERCIAL-ROLE-INVENTORY-DISCUSSION-V1.md` — superseded discussion provenance（已取代讨论溯源）.
69. `docs/ROUND-13-COMPLETE-DISCUSSION-FRAMEWORK-V1.md` — superseded discussion provenance（已取代讨论溯源）.
70. `docs/COMMISSION-TARGETED-PROVENANCE-NECESSITY-REVIEW-V1.md` — resolved Commission（约稿）targeted provenance / necessity review（已解决的定向来源 / 必要性复核）.
71. `docs/ROUND-13-OPEN-CULTURAL-RECOVERY-FOUNDATION-V2.md` — current controlling Open Cultural Recovery（开放文化寻回）foundation（当前控制基础）.
72. `docs/ROUND-13-CULTURAL-RECOVERY-CROSS-ROUND-RECONCILIATION-V1.md` — current cross-round reconciliation（当前跨轮一致性复核）.
73. `docs/ROUND-4-RECOVERY-PARTICIPATION-ATTRIBUTION-AMENDMENT-V2.md` — Round 4（第四轮）Recovery Participant / Recovery Role / Recovery Attribution（寻回参与者 / 寻回角色 / 寻回归因）amendment（修订）, explicitly reserving Contributor（贡献者）for the qualified identity system.
74. `docs/ROUND-7-CULTURAL-RECOVERY-PROVENANCE-EXTENSION-V1.md` — Round 7（第七轮）Recovery Provenance（寻回过程溯源）extension（扩展）.
75. `docs/ROUND-11-CULTURAL-RECOVERY-ACQUISITION-AMENDMENT-V1.md` — Round 11（第十一轮）acquisition amendment（内容获取修订）.
76. `docs/ROUND-13-CULTURAL-RECOVERY-HARDENING-ADDENDUM-V1.md` — cultural recovery hardening（文化寻回加固）.
77. `docs/ROUND-13-CULTURAL-RECOVERY-ADVERSARIAL-AUDIT-V1.md` — PASS AFTER HARDENING（加固后通过） / 50 explicit failure modes（50 个明确失效场景）.
78. `docs/ROUND-13-PRE-RELATIONSHIP-CONCEPT-INTEGRITY-AUDIT-V1.md` — PASS AFTER DOCUMENTATION REPAIR（文档修复后通过）; verifies Contributor（贡献者）, cultural recovery（文化寻回）, historical Commission terminology（历史“约稿”术语）, rejected legacy services（已淘汰旧服务）and product independence（产品独立性） before relationship work.
79. `docs/ROUND-13-INK-EAST-SPATIAL-FLOW-RELATIONSHIP-DISCUSSION-V1.md` — relationship discussion framework（两者关系讨论框架）.
80. `docs/ROUND-13-CONTRIBUTOR-VS-CULTURAL-RECOVERY-TERMINOLOGY-LOCK-V1.md` — controlling terminology lock（控制性术语锁定）: Contributor（贡献者）is reserved for Round 4 qualification identity; cultural recovery uses Open Cultural Recovery / Recovery Participant / Recovery Role / Recovery Attribution（开放文化寻回 / 寻回参与者 / 寻回角色 / 寻回归因）.
81. `docs/ROUND-13-RELATIONSHIP-Q1-WHY-RELATIONSHIP-DISCUSSION-V1.md` — historical Q1 discussion（历史 Q1 讨论）.
82. `docs/ROUND-13-RELATIONSHIP-Q1-RESOLUTION-V1.md` — **Q1 RESOLVED（Q1 已解决）**: relationship has real bidirectional value; Spatial Flow（空间流）may participate in Ink & East（墨与东方）as its own actor without platform privilege.
83. `docs/ROUND-13-RELATIONSHIP-Q2-SPECIAL-RELATIONSHIP-DEPTH-DISCUSSION-V1.md` — historical Q2 discussion（历史 Q2 讨论）.
84. `docs/ROUND-13-RELATIONSHIP-Q2-RESOLUTION-STANDING-STRATEGIC-RELATIONSHIP-V1.md` — **Q2 RESOLVED（Q2 已解决）**: Standing Strategic Relationship（持续战略关系）confirmed.
85. `docs/ROUND-13-RELATIONSHIP-Q3-STANDING-RELATIONSHIP-SCOPE-BOUNDARIES-DISCUSSION-V1.md` — historical Q3 discussion（历史 Q3 讨论）.
86. `docs/ROUND-13-RELATIONSHIP-Q3-RESOLUTION-SCOPE-BOUNDARIES-V1.md` — **Q3 RESOLVED（Q3 已解决）**: Persistent cooperation, explicit crossover, independent authority（合作长期存在；跨界显式；权威与责任保持独立）.
87. `docs/ROUND-13-RELATIONSHIP-Q4-DEFAULT-EXPLICIT-NONTRANSFERABLE-BOUNDARIES-DISCUSSION-V1.md` — historical Q4 discussion（历史 Q4 讨论）.
88. `docs/ROUND-13-RELATIONSHIP-Q4-RESOLUTION-PREFERRED-PARTNER-CROSSREF-HARD-BOUNDARIES-V1.md` — **Q4 RESOLVED（Q4 已解决）**: Preferred Strategic Partner（优先战略合作伙伴）, normal cross-product references（正常跨产品引用）, personal-data independence（个人数据独立）, hard editorial/source/recognition/governance boundaries（编辑 / 来源 / 认可 / 治理硬边界）.
89. `docs/ROUND-13-RELATIONSHIP-PUBLIC-VISIBILITY-DEFERRED-V1.md` — general public visibility of the standing relationship（持续战略关系的一般公开可见性） **DEFERRED（暂缓）**.
90. `docs/ROUND-13-RELATIONSHIP-EDITORIAL-INDEPENDENCE-COMMERCIAL-CONFLICT-DISCUSSION-V1.md` — superseded discussion provenance（已取代讨论溯源）; prior conflict framing was too broad（旧“冲突”框架过宽）.
91. `docs/ROUND-13-RELATIONSHIP-EDITORIAL-INDEPENDENCE-RELATIONSHIP-INTEGRITY-RESOLUTION-V1.md` — **RESOLVED（已解决）**: editorial independence / role separation / attribution integrity / platform neutrality（编辑独立性 / 角色分离 / 归因完整性 / 平台中立性）confirmed without defining the relationship itself as a conflict.
92. `docs/ROUND-13-RELATIONSHIP-COOPERATION-MODES-DISCUSSION-V1.md` — supporting detailed inventory（支持性详细清单）.
93. `docs/ROUND-13-RELATIONSHIP-COOPERATION-MODES-SIMPLIFIED-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
94. `docs/ROUND-13-RELATIONSHIP-COOPERATION-MODES-RESOLUTION-V1.md` — **RESOLVED（已解决）**: three-layer cooperation model（三层合作模型） confirmed.
95. `docs/ROUND-13-INK-EAST-SPATIAL-FLOW-CURRENT-RELATIONSHIP-BASELINE-V1.md` — **CURRENT CONTROLLING RELATIONSHIP BASELINE（当前控制关系基线）**.
96. `docs/ROUND-13-REMAINING-SERVICES-MONETIZATION-CLEAN-RESTART-DISCUSSION-V1.md` — Round 13（第十三轮） remaining Services / Monetization（服务 / 商业化） clean restart.
97. `docs/ROUND-13-MONETIZATION-EARLY-HYPOTHESES-INTAKE-V1.md` — **USER EARLY HYPOTHESES / NON-FINAL（用户早期想法 / 非最终）**: advertising/traffic, high-intent vertical partnerships, Education / Teaching（教育 / 教学） examples.
98. `docs/ROUND-13-MONETIZATION-LAYER-MODEL-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
99. `docs/ROUND-13-COMMERCIAL-ACTOR-CONTENT-DISTRIBUTION-SEPARATION-V1.md` — current commercial actor/content/distribution separation（当前商业主体 / 内容 / 分发分离）.
100. `docs/ROUND-13-COMMERCIAL-CONVERSION-DEPTH-RESOLUTION-V1.md` — **RESOLVED（已解决）**: commercial conversion depth is vertical-specific（商业转化深度按垂直领域决定）.
101. `docs/ROUND-13-MONETIZATION-CURRENT-DIRECTION-V1.md` — **CURRENT CONTROLLING MONETIZATION DIRECTION（当前控制商业化方向）**.
102. `docs/ROUND-13-CURRENT-CHECKPOINT-V1.md` — **ROUND 13 RESOLVED AT CURRENT PRODUCT-ARCHITECTURE DEPTH（第十三轮当前产品架构深度已解决）**.
103. `docs/MEMBERSHIP-REENTRY-REVIEW-1-DISCUSSION-V1.md` — Membership Re-entry Review #1（会员重启检查 #1） current review.
104. `docs/MEMBERSHIP-REENTRY-REVIEW-1-VALUE-DISCOVERY-DISCUSSION-V1.md` — focused Membership Value Discovery（会员价值发现）.
105. `docs/MEMBERSHIP-REENTRY-REVIEW-1-USER-REACTION-VALUE-FAMILIES-V1.md` — **USER-SUPPLIED DIRECTION（用户提供方向）**: supporter strongly positive; utility cautious; participation positive but use cases unclear; ad-free later; economic commitment supporting only; partner courtesy future-positive.
106. `docs/MEMBERSHIP-REENTRY-REVIEW-1-PHASED-SUPPORTER-FIRST-MODEL-DISCUSSION-V1.md` — phased Supporter-first Membership（分阶段支持者优先会员） discussion provenance（讨论溯源）.
107. `docs/MEMBERSHIP-REENTRY-REVIEW-1-EARLY-COBUILDER-RELATIONSHIP-RESOLUTION-V1.md` — **RESOLVED（已解决）**: Early Co-builder Relationship（早期共建者关系） confirmed; broader than financial support, no universal score, special relationship treatment allowed, economic rewards tied to actual value creation.
108. `docs/MEMBERSHIP-REENTRY-REVIEW-1-EARLY-COBUILDER-BENEFITS-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
109. `docs/MEMBERSHIP-REENTRY-REVIEW-1-EARLY-COBUILDER-BENEFITS-RESOLUTION-V1.md` — **RESOLVED（已解决）**: common historical recognition + typed/relevant opportunity model（共同历史承认 + 按真实共建类型匹配机会）.
110. `docs/MEMBERSHIP-REENTRY-REVIEW-1-MEMBERSHIP-VS-EARLY-COBUILDER-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
111. `docs/MEMBERSHIP-REENTRY-REVIEW-1-MEMBERSHIP-VS-EARLY-COBUILDER-RESOLUTION-V1.md` — **RESOLVED（已解决）**: Membership / Supporter Relationship（会员 / 支持者关系） and Early Co-builder Relationship（早期共建者关系） formally separated.
112. `docs/MEMBERSHIP-REENTRY-REVIEW-1-FORMATIVE-STAGE-BOUNDARY-RESOLUTION-V1.md` — **RESOLVED（已解决）**: formative stage（形成阶段） is milestone-based; Early Presence（早期在场） != full Early Co-building（完整早期共建）.
113. `docs/MEMBERSHIP-REENTRY-REVIEW-1-EARLY-COBUILDER-HISTORICAL-EVIDENCE-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
114. `docs/MEMBERSHIP-REENTRY-REVIEW-1-EARLY-COBUILDER-HISTORICAL-EVIDENCE-RESOLUTION-V1.md` — **RESOLVED（已解决）**: evidence-backed, typed and explainable early co-builder history（有证据、按类型、可解释的早期共建历史）.
115. `docs/MEMBERSHIP-REENTRY-REVIEW-1-EARLY-COBUILDER-VISIBILITY-PRESENTATION-RESOLUTION-V1.md` — **RESOLVED（已解决）**: private-first history, optional public acknowledgment, sensitive evidence internal（个人私有优先、公开致谢可选、敏感证据内部保存）.
116. `docs/MEMBERSHIP-REENTRY-REVIEW-1-CORE-THESIS-SYNTHESIS-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
71. `docs/PR-53-PRE-RESUME-FULL-CHECKPOINT-AUDIT-V1.md` — historical/invalidated certificate（历史 / 已失效证明）; provenance only（仅溯源）.
72. `docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V1.md` — earlier regression record（早期回归记录） / provenance（溯源）.
73. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md`
69. `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md`
70. historical Round 3/4 and Round 7–11 Workshop records when provenance is needed
71. PR #53 latest conversation/decision history while the workshop remains open
72. `INK-EAST-BRIEF.md` for product history only; ignore superseded paywall/VIP assumptions
73. `INK-EAST-ROADMAP.md`, `.kiro/steering/ink-east-handoff.md` and `PROJECT-CONTROL-MASTER.md` for historical provenance only where later current truth does not supersede them
74. `docs/PROJECT-2-TO-PROJECT-3-ECOMMERCE-PARITY-MATRIX.md`
75. `docs/PROJECT-3-COMMERCE-BATCH-A-ACCEPTED.md`
76. `docs/PROJECT-3-CURRENT-HANDOFF.md` — historical handoff name; warning banner controls
77. superseded Round 6 Final/Seal and older planning documents only as historical references

Do not restart visual-finalization work merely because an older roadmap says a static page is incomplete. First determine whether missing work affects product coverage, functional testing, shared architecture, accessibility or V0 coherence; launch-level visual refinement belongs to the final visual pass.
117. `docs/MEMBERSHIP-REENTRY-REVIEW-1-CORE-RELATIONSHIP-THESIS-RESOLUTION-V1.md` — **CORE RELATIONSHIP THESIS CONFIRMED / PRODUCT LAUNCH & PACKAGING DEFERRED（核心关系主张确认 / 产品上线与包装暂缓）**: Membership Re-entry Review #1（会员重启检查 #1） directional resolution（方向性结论）.
118. `docs/ROUND-14-GOVERNANCE-MODERATION-CORRECTIONS-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
119. `docs/ROUND-14-GOVERNANCE-MODERATION-CORRECTIONS-FOUNDATION-RESOLUTION-V1.md` — **RESOLVED（已解决）**: separates moderation, correction, recognition review, and qualification/capability review; Correction（纠错） != Punishment（惩罚）; scoped enforcement（范围受限处理）.
120. `docs/ROUND-14-APPEAL-REVIEW-RESTORATION-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
121. `docs/ROUND-14-APPEAL-REVIEW-RESTORATION-RESOLUTION-V1.md` — **RESOLVED（已解决）**: appeal intensity by impact, independent review for consequential cases, mandatory Human Review（人工复核） for defined high-impact cases, evidence-based reopening, real restoration.
122. `docs/ROUND-14-MODERATION-ACTION-SCOPE-SEVERITY-DISCUSSION-V1.md` — resolved discussion provenance（已解决讨论溯源）.
123. `docs/ROUND-14-MODERATION-ACTION-SCOPE-SEVERITY-RESOLUTION-V1.md` — **USER-CONFIRMED / RESOLVED（用户确认 / 已解决）**: scoped effective enforcement, context-based severity, proportionate duration, explainable escalation（最窄有效处理 / 情境化严重程度 / 比例期限 / 可解释升级）.
124. `docs/ROUND-14-KNOWLEDGE-CORRECTION-SOURCE-DISPUTE-REVISION-LIFECYCLE-DISCUSSION-V1.md` — resolved historical discussion（已解决历史讨论）.
125. `docs/ROUND-14-KNOWLEDGE-CORRECTION-SOURCE-DISPUTE-REVISION-LIFECYCLE-RESOLUTION-V1.md` — USER-CONFIRMED（用户确认）, **scope superseded/clarified（适用范围受后续结论限制）**.
126. `docs/ROUND-14-KNOWLEDGE-CORRECTION-APPLICABILITY-SCOPE-RESOLUTION-V1.md` — USER-CONFIRMED / RESOLVED（用户确认 / 已解决）.
127. `docs/ROUND-14-CORRECTION-OWNERSHIP-CONTESTED-DECISIONS-RESOLUTION-V1.md` — USER-CONFIRMED / RESOLVED（用户确认 / 已解决）.
128. `docs/PR-53-COMPREHENSIVE-CROSS-ROUND-CONFLICT-REAUDIT-V2.md` — AUDIT REPORT / NOT DIRECT POLICY（审计报告 / 不直接构成政策）.
129. `docs/ROUND-14-OPEN-COMMUNITY-STRICT-RECOGNITION-GOVERNANCE-SCOPE-RESOLUTION-V1.md` — **CURRENT CONTROLLING SCOPE / USER-CONFIRMED（当前控制性范围 / 用户确认）**：普通社区开放、正式作品认可严格、原典来源忠实、基础安全独立.
130. `docs/ROUND-14-OPEN-COMMUNITY-TARGETED-RULE-REPAIR-PLAN-V1.md` — SIX DIRECTIONS CONFIRMED（六项修订方向已确认；具体范围由正式补充结论控制）.
131. `docs/ROUND-14-ADULT-MATURE-CONTENT-OPENNESS-OPTIONS-DISCUSSION-V1.md` — **HISTORICAL / PARTIALLY SUPERSEDED（历史选项 / 部分被取代）**：具体真实性行为影像的专项原则由第137项正式结论控制，执行细节仍待议。
132. `docs/ROUND-14-CURRENT-CHECKPOINT-V1.md` — current authoritative navigation checkpoint（当前导航断点）.
133. `docs/ROUND-14-SIX-TARGETED-RULE-REPAIRS-APPROVAL-V1.md` — USER-CONFIRMED（六项最小修订方向已获用户确认）.
134. `docs/ROUND-14-TARGETED-CROSS-ROUND-RECONCILIATION-ADDENDUM-V1.md` — **CONTROLLING AMENDMENT（控制性补充结论）**：普通发表、文献来源、正式认可及纠错复核适用范围定向修订.
135. `docs/ROUND-14-MATURE-CULTURAL-EXPRESSION-ADULT-COMMERCE-BOUNDARY-RESOLUTION-V1.md` — **USER-CONFIRMED（用户确认）**：允许成人表达存在的文化平台；原则上长期排除专门成人付费订阅 / 私密影像商业生态.
136. `docs/ROUND-14-ADULT-CONTENT-DISCOVERY-ARTISTIC-NUDITY-BOUNDARY-RESOLUTION-V1.md` — **USER-CONFIRMED（用户确认）**：普通首页 / 推荐不得突然推送成人内容；长期浏览仍须克制；《大卫》等经典艺术作品按文化语境区别分类.
137. `docs/ROUND-14-EXPLICIT-SEX-ACT-MEDIA-EXCEPTION-BOUNDARY-RESOLUTION-V1.md` — **USER-CONFIRMED TARGETED OPTION B / DETAILS DEFERRED（真实性行为影像方案 B 原则已确认，执行细节未定）**：不开放普通娱乐性行为影像一般上传；特殊文化用途保留受限发表可能；原成人文学／人体艺术／性暗示但无性行为摄影规则继续有效。
138. `docs/ROUND-14-KNOWLEDGE-CORRECTION-OUTCOME-TAXONOMY-RESOLUTION-V1.md` — **USER-CONFIRMED / CONTROLLING KNOWLEDGE CORRECTION OUTCOMES（已确认／知识纠错结案现行规则）**：正式 A 确认错误、B 重要事实未定、C 纠错请求不成立；按独立主张分别处理。 
139. `docs/ROUND-14-RECOGNITION-INTERIM-PROTECTION-AND-EDITORIAL-SCOPE-RESOLUTION-V1.md` — **USER-CONFIRMED / CONTROLLING INTERIM PROTECTION SCOPE（正式认可临时保护与编辑责任边界已确认）**：仅正式 Candidate／Recognized 适用专项调查保护；普通推举／社区不自动学术核验；独立编辑精选责任仅限特定当前官方推广；Work Recognition 沿用，`Authoritative Content` 已淘汰。第十四轮仍 ACTIVE，未授权开发／合并。
140. `docs/ROUND-14-REMAINING-GOVERNANCE-GAPS-TRIAGE-AND-SOURCE-RECONCILIATION-V1.md` — **AUDIT TRIAGE / NO NEW POLICY（剩余规则审查分流／非新政策）**：逐项核对旧跨轮审计 22 项与后来已确认规则，区分已解决原则、实施细则及仍待决的作者参与／退出正式认可、成人内容访问范围；第十四轮未封存。
141. `docs/ROUND-14-AUTHOR-CONSENT-BEFORE-CANDIDATE-ENTRY-RESOLUTION-V1.md` — USER-CONFIRMED：普通推举可自然进行，正式 Candidate 入池前必须获得作者同意。
142. `docs/ROUND-14-CANDIDATE-VOLUNTARY-WITHDRAWAL-RESOLUTION-V1.md` — USER-CONFIRMED：作者可在 Candidate 正式评审中自愿退出，不算评审失败或处罚。
143. `docs/ROUND-14-POST-RECOGNITION-AUTHOR-VOLUNTARY-WITHDRAWAL-RESOLUTION-V1.md` — USER-CONFIRMED：已认可作者可终止当前认可展示／参与，保留准确的历史授予事实，不与违规或证据失效混淆。
144. `docs/ROUND-14-READER-ACCESS-NOTICES-DIRECTION-V1.md` — USER-CONFIRMED DIRECTION：适当阅读提示、敏感影像预览保护及必要年龄核验；类别与技术细节暂缓。
145. `docs/ROUND-14-POST-TRIAGE-DECISION-POINTER-V1.md` — CURRENT DECISION POINTER：以上已确认事项与当前下一步。Round 14 未整体封存；PR #53 不合并、不实施。
146. `docs/ROUND-14-TARGETED-SOURCE-COVERAGE-PARITY-V1.md` — **TARGETED PARITY PASS ONLY（定向来源覆盖核查通过）**：清点 32 份 Round-14 文档及 18 份正式规则，完整冻结整轮来源核验尚未完成。
147. `docs/ROUND-14-TARGETED-CROSS-ROUND-ADVERSARIAL-AUDIT-V1.md` — **40-CASE TARGETED AUDIT COMPLETED / ROUND NOT SEALED（40 场景定向对抗审计已完成／第十四轮未封存）**：35 条原则通过、2 执行待定、2 文档导航问题、1 特殊文化影像公开审核时点需要新的产品决策；当前主线见 `docs/ROUND-14-CURRENT-CHECKPOINT-V1.md`。
148. `docs/ROUND-14-FIVE-FINDINGS-SCOPE-AND-SEAL-GATE-REAUDIT-V1.md` — **CURRENT FIVE-FINDING REAUDIT / NO NEW POLICY（当前五项问题审查／不新增规则）**：E06、C08、E07 可按既有决议保留实施前条件；F01、F02 已处理；不得把 E06 自动视为第十四轮必须重议的封存硬阻碍。下一步是整合 Round 14 Current Truth V1 候选并开展完整 Source Parity、对抗审计。
149. `docs/ROUND-14-FIVE-FINDINGS-INDEPENDENT-SECOND-PASS-REVIEW-V1.md` — **SECOND-PASS AUDIT, NO NEW USER POLICY（第二轮五项独立复核／建议尚未批准）**：旧聊天记录双份对照；F01 由封存优先级解决、原冻结状态抬头不修改；F02 旧讨论状态头修正；E06/C08 可讨论限域产品原则，E07 细则暂缓；先与用户确认或明确继续暂缓，再编写第十四轮统一 Current Truth。
150. `docs/ROUND-14-E06-SPECIAL-MEDIA-PREPUBLICATION-REVIEW-RESOLUTION-V1.md` — **USER-CONFIRMED E06（用户确认的特殊影像审核时点）**：仅受限真实性行为影像申请特殊文化资格才须公开前通过审核，普通文章不全面预审；可先发表合法正常正文、待审媒体后开放。下一项 C08 多作者退出权／整件作品授权；E07 在其后。第十四轮未封存。
151. `docs/ROUND-14-C08-MULTI-AUTHOR-PARTICIPATION-WORK-AUTHORITY-RESOLUTION-V1.md` — **USER-CONFIRMED C08（共同作者认可参与／作品操作权限的区别）**：个人可自主参与或退出；共同作品认可状态变更需有效限域授权或正当争议程序；关键授权及认可证据变化独立复核。下一步仍需讨论共同作品初次进入 Candidate 的同意基础，然后 E07；第十四轮未封存。
152. `docs/ROUND-14-C08-JOINT-WORK-CANDIDATE-ENTRY-CONSENT-RESOLUTION-V1.md` — **USER-CONFIRMED C08 JOINT WORK CANDIDATE OPT-IN（共同作品正式候选参与同意已确认）**：A/B 赞成、真实共同作者 C 明确反对且未授权时，不能携整件合作作品进入 Candidate，先解决 C 的同意／权限问题；不限制普通发表，也不推出认可后单人否决权。下一步 E07 审核执行细则审查，Round 14 未封存。
153. `docs/ROUND-14-E07-SPECIAL-MEDIA-REVIEW-IMPLEMENTATION-DEFERRAL-V1.md` — **E07 LIMITED ACCEPTANCE / FIVE FINDINGS TARGETED DISPOSITION（E07 有保留的阶段化认可／五项定向问题处理完毕）**：E07 使用既有资格、安全、权利、E06 先审再公开和复核保护原则；人员、申请材料、时限、证明方式与 UI 待实施前设计。接下来准备第十四轮 Current Truth V1 候选及全量来源／冻结对抗审计，仍不封存、不开发。
154. `docs/ROUND-14-CURRENT-TRUTH-V1-CANDIDATE.md` — **ROUND 14 CURRENT TRUTH V1 CANDIDATE（统一规则候选／未封存）**：整合 22 份正式控制来源／有保留后置处置，含 S01–S22 源文件与读取 SHA；Round-14 前缀文件因新增候选成为 41 份。下一步完整 Source Parity 及冻结版对抗审计，不直接 Seal，不开发，不合并。
155. `docs/ROUND-14-CURRENT-TRUTH-V1-CANDIDATE-INVENTORY-ENTRY-QA-V1.md` — **ROUND 14 CANDIDATE ENTRY QA / NOT FULL PARITY（统一候选初步核对／尚非完整来源审计）**：22 份来源索引与 22 个主题核对通过，当前 Round-14 前缀文件合计 42 份（22 controlling + 18 history/audit/navigation + 1 candidate + 1 entry QA）；下一步逐条来源核对与冻结对抗审计，不封存、不合并、不开发。

156. `docs/ROUND-14-CURRENT-TRUTH-V1-SOURCE-PARITY-REVIEW-V1.md` — Round 14 22-source parity review of pre-P09 blob (historical baseline), 8 document fixes.
157. `docs/ROUND-14-CURRENT-TRUTH-V1-SOURCE-PARITY-ADDENDUM-P09-V1.md` — S17/S20/S21 recheck for post-Recognition coauthor opt-out, candidate blob a06c84268d406876c53feba652d2f37ca9375e27.
158. `docs/ROUND-14-CURRENT-TRUTH-V1-FROZEN-ADVERSARIAL-AUDIT-V1.md` — 106 frozen-document attack cases, 100 PASS and 6 deferred; product architecture only, NOT SEALED, PR #53 Draft/Unmerged. Next: seal-readiness verification and explicit approval.
