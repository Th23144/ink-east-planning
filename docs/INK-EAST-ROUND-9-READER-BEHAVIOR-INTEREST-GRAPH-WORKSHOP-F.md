# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Workshop F（工作坊 F）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Interest Graph Object Matrix & End-to-End Flows（兴趣图谱对象矩阵与端到端流程） — consolidate Workshops A–E into one coherent product model before Round 9 audit/current-truth consolidation.

## 1. Core object/data matrix / 核心对象与数据矩阵

| Object / Data Class（对象 / 数据类别） | Purpose（用途） | Key boundary（关键边界） |
|---|---|---|
| Behavior Event（行为事件） | record a semantically specific action such as open/search/save/follow/reply/share | action semantics remain distinct; not one engagement score |
| Exposure Context（曝光情境） | describe whether/how content was actually shown, surface/position/context | unseen inventory is not rejection |
| Explicit Preference（明确偏好） | user-declared follow/interest/not-interested/show-more/less etc. | attributable user action; distinct from inference |
| Session Intent（会话意图） | fast, temporary representation of current task/interest | must not automatically overwrite durable interest |
| Interest Edge（兴趣关系） | current relevance relation from user/account context to Topic/Place/Work/creator/content type/etc. | not identity, authority or expertise |
| Interest Cluster（兴趣簇） | user-specific grouping of related interest edges/signals | not the same as shared Topic ontology |
| Negative / Suppression Preference（负向 / 降低偏好） | scoped correction/avoidance preference | not merely a negative number on positive affinity |
| Derived Personalization Feature（派生个性化特征） | model/retrieval/ranking feature such as embedding/cluster feature | recomputable/invalidateable; model-version aware where material |
| Recommendation Context（推荐情境） | surface/session/task context consuming interest evidence | different surfaces may use different objectives |
| Audit / Derivation Provenance（审计 / 推导溯源） | bounded evidence/version/context needed to explain material state | not a reason to retain all raw events forever |

---

## R9-F1 — Behavior Event identity preserves action type / 行为事件必须保留动作类型

**HARD INVARIANT（硬边界）.**

A Save（收藏）, Search（搜索）, Follow（关注）, Reply（回复）, Share（分享）, Dwell（停留）, Hide（隐藏） or Not Interested（不感兴趣） event must remain distinguishable at the semantic source layer.

---

## R9-F2 — Exposure context accompanies interpretation of weak/non-action signals / 弱信号与未行动的解释必须带曝光情境

**HARD INVARIANT（硬边界）.**

Position, surface, visibility/opportunity and entry context may be necessary before interpreting a skip/non-click. Exposure data supports interpretation but must remain proportionate to the product/privacy need.

---

## R9-F3 — Explicit Preference is not overwritten by inference / 明确偏好不能被系统推断静默覆盖

**HARD INVARIANT（硬边界）.**

Models may derive additional state, but the system must retain the fact and scope of an explicit user choice until policy/user action changes it.

---

## R9-F4 — Session Intent overlays durable state rather than replacing it / 会话意图覆盖在长期状态之上，而不是替换长期状态

**HARD INVARIANT（硬边界）.**

Current-session focus may temporarily dominate candidate selection for the current task while Durable Interest（长期兴趣） remains intact for other surfaces/times.

---

## R9-F5 — Interest Edge is target-specific and provenance-bearing where material / 兴趣关系面向具体目标，并在必要时保留推导溯源

**HARDENING（架构加固）.**

An interest relation should know its target/type, explicit-vs-inferred origin, relevant time horizon and current state/confidence at an appropriate level.

---

## R9-F6 — Interest Cluster groups relations without becoming platform ontology / 兴趣簇用于组织关系，但不成为平台本体

**HARD INVARIANT（硬边界）.**

Clusters support multi-interest personalization and may change with models. They must not silently create/rewrite canonical Topics（主题） or Knowledge Graph（知识图谱） entities.

---

## R9-F7 — Negative preference is independently targetable / 负向偏好可以独立定位目标与范围

**HARD INVARIANT（硬边界）.**

The product model must support “less of this item/creator/topic/content type/surface” without requiring the user to abandon all related positive interests.

---

## R9-F8 — Derived features are disposable/recomputable implementation artifacts / 派生特征应视为可失效、可重算的实现产物

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Embeddings（嵌入）, feature vectors, retrieval profiles and cluster assignments may be regenerated or replaced when models/policies change; they are not irreversible source truth.

---

## R9-F9 — Recommendation Context defines how interest evidence is consumed / 推荐情境决定兴趣证据如何被使用

**HARD INVARIANT（硬边界）.**

Home / For You（首页 / 为你推荐）, Explore（探索）, Search（搜索）, Following（关注）, Topic / Place（主题 / 地点）, Related / Next（相关推荐 / 下一项） and Notifications（通知） may consume different views of the same evidence.

---

## R9-F10 — Exploration composition happens after or alongside candidate retrieval, not by corrupting source signals / 探索混排不能通过篡改源信号实现

**HARD INVARIANT（硬边界）.**

The system must not fake user interest values merely to force diversity. Exploration/diversity belongs to candidate/composition policy, while source interest evidence remains what it is.

---

## R9-F11 — Corrections invalidate downstream state / 用户纠错必须使下游状态失效或重算

**HARD INVARIANT（硬边界）.**

Not Interested（不感兴趣）, Show Less（少看）, Unfollow（取消关注）, interest editing or Recommendation Reset（推荐重置） must trigger appropriate changes to derived interests/features/caches rather than only changing a UI flag.

---

## R9-F12 — Retention/deletion cascades are explicit / 保留与删除级联必须明确

**HARD INVARIANT（硬边界）.**

Raw event expiry/deletion, aggregate retention, derived-feature invalidation and audit retention are separate operations with explicit dependency rules.

---

## R9-F13 — Model migration cannot rewrite explicit user actions / 模型迁移不能改写用户明确操作

**HARD INVARIANT（硬边界）.**

A new clustering/embedding/inference model may recompute derived state, but it must not manufacture or erase historical Follow / Not Interested / explicit interest declarations as if the user had acted differently.

---

## R9-F14 — Personalization output never changes source/recognition authority / 个性化输出不能改变来源权威或作品认可

**HARD INVARIANT（硬边界）.**

A recommendation, high predicted affinity or repeated consumption does not create Work Recognition（作品认可）, canonical/source authority, Contributor Qualification（贡献者资格） or governance credibility.

---

## R9-F15 — Personalization output is not required to be one endless feed / 个性化输出不要求只有一条无限信息流

**HARD PRODUCT DIRECTION（产品级硬方向）.**

The same Interest Graph（兴趣图谱） may support feeds, shelves/modules, related-content blocks, topic/place suggestions, notifications, search assistance or curated discovery surfaces.

Page composition remains a later Discovery & Recommendation（发现与推荐） concern.

---

## R9-F16 — Early implementation may be simple while preserving future multi-stage architecture / 早期实现可以简单，但要保留未来多阶段推荐边界

**HARDENING（架构加固）.**

V1 may use explicit preferences, simple heuristics, curated pools and basic scoring. It must still preserve semantic data and module boundaries so later Candidate Retrieval（候选召回）, Pre-ranking（预排序）, Ranking（排序） and Re-ranking / Blending（重排序 / 混排） can replace/simple-grow without rewriting user history.

---

## R9-F17 — No big-data infrastructure is required to validate the product model / 验证产品模型不要求先建设大数据基础设施

**HARD SCOPE GUARD（硬范围护栏）.**

Round 9 defines product/data semantics that remain valid at small or large scale. Kafka-like streams, feature stores, vector indexes, GPU ranking or distributed graph systems are implementation choices for later scale needs.

---

## R9-F18 — End-to-end flows must remain evolvable / 端到端兴趣流程必须保持可演进

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Signal interpretation, interest lifecycle, decay, correction, exploration, retention and downstream consumption must support Policy / Model Versioning（策略 / 模型版本）, shadow evaluation, migration, staged rollout and rollback where material.

---

# 2. Representative end-to-end flows / 代表性端到端流程

### Flow A — Ordinary personalized reading / 普通个性化阅读
Eligible content is surfaced → Exposure Context（曝光情境） recorded proportionately → user opens/reads/saves/follows/etc. → semantically distinct Behavior Events（行为事件） remain separate → session/recent/durable interest inference updates as justified → downstream recommendation contexts consume current derived state → exploration/re-ranking may diversify final composition.

### Flow B — One-time search / 一次性搜索
User searches a destination/person/topic → strong Session Intent（会话意图） forms → search results prioritize explicit query → follow-up related recommendations may reflect temporary intent → durable interest is promoted only if broader evidence supports it → old session intent decays without deleting search history beyond retention policy.

### Flow C — Exploration discovery / 探索发现
Home/Explore injects an eligible adjacent/far exploration candidate → origin marked as exploration context → user opens once → emerging interest evidence remains weak/reversible → repeated voluntary behavior may strengthen it → one incidental action does not flood later feeds.

### Flow D — Explicit correction / 明确纠错
User selects Not Interested / Show Less / Unfollow（不感兴趣 / 少看 / 取消关注） → scoped Explicit Preference（明确偏好） stored → current inferred state/derived features invalidated or adjusted → stale caches/profiles refresh → future exploration respects the correction according to policy.

### Flow E — Recommendation Reset / 推荐重置
User requests Recommendation Reset（推荐重置） → current inferred profile/clusters/features are invalidated/suppressed according to scope → non-personalized/broad discovery or fresh cold-start behavior resumes → raw/history deletion is handled separately if requested/required.

### Flow F — Interest cooling and revival / 兴趣降温与恢复
Repeated interest becomes durable → later inactivity/competing interests reduce current influence → state becomes cooling/dormant under policy → future explicit search/follow/return may reactivate it → history is not rewritten as if interest never existed.

### Flow G — Model upgrade / 模型升级
New derivation/clustering model is developed → shadow/backtest against current behavior where appropriate → derived-state migration/recompute plan defined → staged rollout → monitoring for narrowing/quality/privacy regressions → rollback available → explicit user actions remain intact throughout.

### Flow H — Privacy deletion / 隐私删除
Applicable deletion/minimization request/policy triggers → raw source data removed/minimized as required → dependent features/embeddings/caches/training snapshots handled by defined lineage/deletion policy → lawful minimal audit/provenance retained only where permitted and necessary.

---

# Round 9 consolidation readiness / 第九轮整合准备度

Workshops A–F now cover:
- behavior-signal semantics;
- explicit vs inferred preference;
- multi-interest graph structure;
- session/recent/durable temporal layers;
- interest lifecycle/decay/reactivation;
- derivation confidence and contradictory evidence;
- user correction/reset/explanation;
- exploration/diversity/anti-filter-bubble safeguards;
- privacy, retention and data lifecycle;
- object/data classes and representative end-to-end flows;
- future large-scale/multi-stage recommendation compatibility without requiring it today.

No major product fork is required before a formal Round 9 Cross-Workshop Consistency & Completeness Audit（第九轮跨工作坊一致性与完整性审计）. Exact algorithm families, weights, storage technology and ranking formulas remain intentionally deferred to later Discovery & Recommendation（发现与推荐） architecture/implementation work.

# Next step / 下一步

Run a Round 9 Cross-Workshop Consistency & Completeness Audit（第九轮跨工作坊一致性与完整性审计） across Workshops A–F, the mature-platform benchmark, Round 8 Community signal semantics, Round 7 knowledge/provenance boundaries, Round 6 identity/authority separation and the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）. Do not seal Round 9 before the user has a concise review of the resulting direction.