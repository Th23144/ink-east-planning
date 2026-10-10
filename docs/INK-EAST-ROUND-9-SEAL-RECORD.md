# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Seal Record（封存记录）

Status: **SEALED — PRODUCT ARCHITECTURE ONLY（已封存——仅产品架构）**  
Implementation authorization: **NO（否）**.

## Sealed record set / 封存记录集

1. Current Truth（当前有效真相）  
   `docs/INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md`  
   blob: `deaf01ce9368f55b014ca56e5ff6bb9416f3a1e5`

2. Source Parity（来源完整性）  
   `docs/ROUND-9-V1-SOURCE-PARITY-PASS.md`  
   result: **PASS / 162 of 162 rules carried forward**

3. Adversarial Audit（对抗性审计）  
   `docs/ROUND-9-V1-ADVERSARIAL-AUDIT.md`  
   result: **PASS / zero unresolved material blockers**

4. Historical provenance repair（历史溯源修复）  
   `docs/ROUND-9-PREEXISTING-INTEREST-DIRECTION-PROVENANCE-NOTE.md`

5. Research input（研究输入）  
   `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`  
   remains research/reference input, not independent architecture truth.

## What is sealed / 封存内容

Round 9 seals the product/data semantics for Reader Behavior & Interest Graph（读者行为与兴趣图谱）, including:
- distinct behavior-signal semantics;
- explicit vs inferred preference;
- multi-interest representation rather than one rigid user label;
- Session / Recent / Durable（会话 / 近期 / 长期） temporal layers;
- lifecycle, decay, dormancy and reactivation;
- bounded Knowledge Graph（知识图谱） interest propagation;
- confidence/uncertainty and contradictory evidence;
- user correction, explanation and Recommendation Reset（推荐重置）;
- exploration, diversity, serendipity and anti-filter-bubble safeguards;
- privacy, purpose limitation, retention and deletion propagation;
- raw/derived data separation;
- model/feature invalidation, migration and rollback capability;
- compatibility with both simple early personalization and future large-scale multi-stage recommendation.

The seal also records historical continuity: **Interest Graph（兴趣图谱） != permanent User Profile Label（永久用户画像标签）** is a formalized continuation of earlier PR #53 direction, not a newly invented Round 9 principle.

## What is not sealed as a permanent implementation choice / 未被永久写死的实现选择

This seal does not freeze:
- exact numerical weights, thresholds or confidence formulas;
- lifecycle transition counts/windows;
- decay curves/half-lives;
- exploration/diversity percentages or repetition caps;
- exact interest-management/reset UX（用户体验）;
- any specific ML/AI model family;
- Graph / Vector / Relational / Event / Feature-store technology;
- exact retrieval/ranking/re-ranking implementation;
- exact optimization metrics;
- exact raw-event retention periods;
- jurisdiction-specific privacy implementation.

These remain evolvable later decisions under the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

## Cross-round authority / 跨轮约束

Round 9 does not supersede Round 6–8 boundaries. In particular:
- Interest != Account Trust / Reviewer Trust / Contributor Qualification / authority;
- personalized affinity != Work Recognition / canonical-source authority / factual truth;
- community action semantics remain distinct as sealed in Round 8;
- Knowledge Graph object identity/provenance remains governed by Round 7;
- Acting Context / Permission separation remains governed by Round 6;
- material future rule/model changes remain versionable, migratable, testable and rollback-capable under the project-wide evolvability architecture.

## Seal meaning / 封存含义

`SEALED（已封存）` means this is the durable current Product Architecture checkpoint with no known unresolved material blocker. It does not mean the system can never change. Later evidence-based amendments must be explicit, versioned and provenance-preserving rather than silently rewriting this checkpoint.

## Next architecture subject / 下一架构主题

Proceed to **Round 10 — Discovery & Recommendation（第十轮——发现与推荐）**.

Round 10 may consume Round 9 behavior/interest evidence, but it must not collapse those semantics into a universal engagement score or rewrite Round 9's multi-interest, user-control, privacy and anti-filter-bubble boundaries.
