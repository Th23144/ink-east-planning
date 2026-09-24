# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop D（工作坊 D）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Candidate Retrieval & Multi-Stage Ranking Semantics（候选召回与多阶段排序语义）  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 0. Decision at a glance / 本步结论一览

Round 10 到这里正式把推荐过程拆成可扩展的多阶段语义，而不是提前绑定某种算法：

```text
Inventory / Eligibility（库存 / 资格）
        ↓
Candidate Retrieval（候选召回）
        ↓
Optional Pre-ranking（可选预排序）
        ↓
Task-specific Ranking（按任务排序）
        ↓
Re-ranking / Blending（重排序 / 混排）
        ↓
Surface Composition（页面组合）
        ↓
Exposure + Feedback Context（曝光 + 反馈情境）
```

核心结论：

| Stage（阶段） | Primary job（主要职责） | 不能做什么 |
|---|---|---|
| Eligibility（资格） | 决定对象是否允许进入该页面的推荐体系 | 不能被高相关分绕过 |
| Retrieval（召回） | 从多种来源找到“可能有用”的候选 | 不负责最终排序 |
| Pre-ranking（预排序） | 在规模需要时低成本缩小候选集 | 不能成为隐藏的最终裁决 |
| Ranking（排序） | 按页面任务估计候选价值 / 相关性 | 不能用一个全站通用分数控制所有页面 |
| Re-ranking / Blending（重排序 / 混排） | 处理整页多样性、疲劳、重复、探索与来源平衡 | 不能伪造候选原始语义 |
| Composition（页面组合） | 决定模块 / 流 / 区块如何共同出现 | 不能把 UI（用户界面）结构当成对象本体 |

> **The pipeline is a semantic contract, not an infrastructure mandate. / 这条流水线是产品与架构语义，不是要求第一版立刻建设工业级推荐基础设施。**

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop D inherits:

- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱）;
- Round 10 Workshop A + A31…A37 hardening;
- Round 10 Workshop B + B36…B39 hardening;
- Round 10 Workshop C + C39…C44 hardening;
- Following（关注） default direction: **Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）**;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

No exact ranking weight, model family, vector database, feature store, event bus or serving technology is authorized here.

---

# 2. Candidate inventory & eligibility / 候选库存与资格

## R10-D1 — Recommendation starts from eligible inventory / 推荐从合格库存开始

**HARD INVARIANT（硬边界）.**

An object must be eligible for the requested surface/context before ranking value matters.

Lifecycle, audience, privacy, moderation, rights/legal, membership/access, geographic/jurisdictional, freshness/staleness and other applicable constraints may participate in eligibility.

---

## R10-D2 — Eligibility is surface/context specific / 推荐资格按页面与情境解释

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The same object may be eligible for Search（搜索） but ineligible for proactive Home（首页） recommendation, or eligible inside a member-only surface but not public Explore（探索）.

Eligibility must not be modeled as one universal `recommendable=true/false` flag when product meaning is context-dependent.

---

## R10-D3 — Eligibility and ranking remain separate / 资格与排序必须分层

**HARD INVARIANT（硬边界）.**

Eligibility answers “may this object participate here?” Ranking answers “among eligible objects, how valuable/relevant is it?”

A high predicted score cannot override an ineligible state.

---

## R10-D4 — Derived eligibility state must be invalidatable / 派生资格状态必须可失效重算

**HARDENING（架构加固）.**

When rights, moderation, lifecycle, membership, visibility or material freshness state changes, cached candidate eligibility must be able to invalidate/recompute.

A stale cache is not an independent source of truth.

---

# 3. Multi-source candidate retrieval / 多来源候选召回

## R10-D5 — Retrieval is multi-source by design / 候选召回按设计就是多来源

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Different candidate-source families may coexist, including:

- explicit Follow（关注）;
- Interest Graph（兴趣图谱）;
- Knowledge Graph（知识图谱） adjacency;
- Topic / Place（主题 / 地点）;
- continuation / series / unfinished reading;
- editorial curation;
- Work Recognition（作品认可） / quality layer;
- freshness / new-content;
- trending / popular;
- long-tail / new-creator exploration;
- collaborative / similar-behavior retrieval;
- current session / direct context;
- future specialized retrieval families.

No one source family is architecture truth.

---

## R10-D6 — Retrieval source identity remains attached / 候选召回来源身份必须保留

**HARDENING（架构加固）.**

A candidate should retain enough provenance to know which source route(s) retrieved it and why.

This supports explanation, debugging, source balancing, causal/exposure analysis, duplicate merging and later policy changes.

---

## R10-D7 — The same object may arrive through several retrieval routes / 同一对象可以经多个召回路径进入

**HARD INVARIANT（硬边界）.**

Follow（关注）, Topic（主题）, Knowledge Graph（知识图谱）, editorial and Interest Graph（兴趣图谱） may all retrieve the same underlying object.

Multiple retrieval reasons do not create duplicate object identity or multiple copies of the content.

---

## R10-D8 — Multi-route evidence may enrich ranking but cannot fake independent popularity / 多召回路径可以增强证据，但不能伪造独立热门性

**HARD SAFEGUARD（硬保护）.**

If one object is found by several correlated retrieval systems, the system must not naively interpret route count as several independent endorsements.

The underlying reasons may be correlated or generated from the same prior exposure.

---

## R10-D9 — Retrieval breadth and source budgets are evolvable / 召回广度与来源预算必须可演进

**ADAPTIVE RULE（弹性规则）.**

Candidate count, per-source budget, minimum/maximum contribution and retrieval depth may evolve by surface, traffic, inventory and model capability.

No permanent numeric budget is locked in Product Architecture（产品架构）.

---

## R10-D10 — Candidate-source starvation must be observable / 候选来源被长期饿死必须可观察

**HARDENING（架构加固）.**

A multi-retriever system can still become operationally single-source if one retriever contributes nearly everything or other sources consistently die before exposure.

Source contribution and survival through stages should be observable at an appropriate level.

---

# 4. Retrieval semantics by source family / 不同召回来源的语义

## R10-D11 — Follow retrieval means explicit relationship, not inferred affinity / 关注召回代表明确关系，不是模型猜测

**HARD INVARIANT（硬边界）.**

Candidates retrieved from Follow（关注） must preserve that explicit relationship meaning even when ranking later reorders them.

---

## R10-D12 — Interest retrieval is a relevance hypothesis / 兴趣召回只是相关性假设

**HARD INVARIANT inherited from Round 9（继承第九轮硬边界）.**

Interest Graph（兴趣图谱） retrieval suggests the user may find an object relevant. It does not establish identity, belief, expertise, trust, authority or endorsement.

---

## R10-D13 — Knowledge Graph retrieval expresses typed relation, not generic similarity / 知识图谱召回表达有类型的关系，不是无类型相似

**HARD INVARIANT（硬边界）.**

A related object may be connected by citation, Person（人物）, Place（地点）, Topic（主题）, edition, collection, dispute, response or other typed relation.

The relation reason should not be collapsed into one opaque `similarity_score（相似度分数）` when the type materially affects meaning.

---

## R10-D14 — Editorial retrieval remains attributable / 编辑召回必须可归因

**HARD INVARIANT（硬边界）.**

Editorially selected candidates remain identifiable as editorial/curated supply and must not be re-described as algorithmically inferred personal preference.

---

## R10-D15 — Popular/trending retrieval remains collective evidence, not quality truth / 热门与趋势召回是群体证据，不是质量真理

**HARD INVARIANT（硬边界）.**

Popularity/trend may help temporal discovery and cold start, but it cannot create Work Recognition（作品认可）, source authority or factual reliability.

---

## R10-D16 — Exploration retrieval remains deliberate but uncertain / 探索召回是有目的但带不确定性的召回

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Long-tail, cross-domain, adjacent-interest, new-content and serendipitous candidates may be deliberately retrieved even when personalized confidence is lower.

Their exploration origin must remain observable so one exploratory exposure does not immediately self-reinforce as strong durable interest.

---

# 5. Optional Pre-ranking / 可选预排序

## R10-D17 — Pre-ranking exists only when scale justifies it / 预排序只在规模需要时存在

**ADAPTIVE ARCHITECTURAL RULE（弹性架构规则）.**

Early V1（第一版） may rank a modest candidate pool directly. A separate Pre-ranking（预排序） stage becomes useful when candidate volume or expensive ranking cost justifies it.

---

## R10-D18 — Pre-ranking may reduce cost, not redefine product truth / 预排序可以降低成本，但不能重定义产品语义

**HARD PRODUCT BOUNDARY（产品边界）.**

Pre-ranking may cheaply estimate plausibility/value and reduce candidate volume, but it must preserve required eligibility, explicit relationship semantics and critical candidate-source routes.

---

## R10-D19 — Pre-ranking recall failure must be diagnosable / 预排序召回损失必须可诊断

**HARDENING（架构加固）.**

If strong candidates never reach the expensive ranker because pre-ranking filters them out, the system should be able to detect this failure rather than blaming the final ranker.

---

# 6. Task-specific ranking / 按任务排序

## R10-D20 — Ranking objective is surface-specific / 排序目标按页面任务定义

**HARD INVARIANT（硬边界）.**

Home / For You（首页 / 为你推荐）, Following（关注）, Explore（探索）, Search（搜索） and Related / Next（相关推荐 / 下一项） must not silently share one universal objective merely because infrastructure is shared.

---

## R10-D21 — Ranking is multi-objective where the surface requires it / 需要时排序必须支持多目标

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Depending on surface/context, ranking may consider relevance, explicit relationship fidelity, continuation, usefulness/satisfaction, freshness, provenance/quality evidence, exploration, diversity needs, fatigue and negative preference.

No single universal weight vector is approved.

---

## R10-D22 — Engagement prediction is evidence, not the product objective / 互动预测只是证据，不等于产品目标

**HARD SAFEGUARD（硬保护）.**

Click probability, dwell, like, reply or share probability may be useful model outputs but must not automatically become the sole ranking objective.

Project 3 must retain room for long-term value, useful reading, deliberate exploration and knowledge quality/provenance without turning those into fake universal scores.

---

## R10-D23 — Different object types may need different calibration / 不同对象类型可能需要不同校准

**HARD INVARIANT（硬边界）.**

An essay, canonical passage, Place guide（地点指南）, Question（问题）, discussion reply, image/source object and short media object may produce different score distributions.

Mixed ranking cannot assume raw scores are directly comparable simply because they share numeric range.

---

## R10-D24 — Ranking uncertainty must remain representable / 排序不确定性必须能够表达

**HARDENING（架构加固）.**

The system should be able to distinguish high-confidence relevance from weak/uncertain hypotheses where material.

Uncertainty may affect exploration, fallback or page composition without being exposed as fake user-facing percentages.

---

## R10-D25 — Exact ranking math remains deferred / 精确排序数学模型延后决定

**SCOPE GUARD（范围护栏）.**

No fixed formula, permanent coefficients or mandatory Learning-to-Rank（学习排序）, Two-Tower（双塔模型）, Transformer（变换器模型）, Graph Neural Network（图神经网络）, Contextual Bandit（上下文多臂老虎机） or Reinforcement Learning（强化学习） architecture is approved here.

---

# 7. Re-ranking / blending / 重排序与混排

## R10-D26 — Re-ranking reasons across the whole slate/page / 重排序负责整组 / 整页约束

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

After item-level ranking, Re-ranking / Blending（重排序 / 混排） may control:

- repeated creator / Topic / Place（创作者 / 主题 / 地点）;
- content-type balance;
- source-family balance;
- Interest Cluster（兴趣簇） concentration;
- exploration allocation;
- fatigue;
- duplicate/near-duplicate suppression;
- continuation placement;
- paid/commercial separation if later authorized;
- module / page composition constraints.

---

## R10-D27 — Diversity is not equalization / 多样性不等于平均分配

**HARD PRODUCT BOUNDARY（产品边界）.**

Re-ranking may prevent pathological concentration without forcing every Topic, creator, source family or content type to receive mathematically equal exposure.

---

## R10-D28 — Re-ranking cannot falsify candidate meaning / 重排序不能伪造候选语义

**HARD INVARIANT（硬边界）.**

An exploration candidate remains exploration-origin; editorial remains editorial; Follow remains explicit Follow; Recognition remains existing Recognition.

Page balancing must not rewrite provenance merely to justify placement.

---

## R10-D29 — Deduplication preserves legitimate object/version distinctions / 去重必须保留合法对象与版本差异

**HARD INVARIANT inherited from Round 7（继承第七轮硬边界）.**

The same underlying object arriving through multiple candidate routes may be merged for exposure, but distinct Edition / Version / Source Item（版本 / 版本修订 / 来源实体） identities must not be destroyed by simplistic deduplication.

---

# 8. Exposure feedback loop / 曝光反馈循环

## R10-D30 — Exposure is part of the data-generating process / 曝光本身就是行为数据生成过程的一部分

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Observed clicks, saves, dwell and non-actions are influenced by what the previous recommender retrieved, ranked and displayed.

Exposure Context（曝光情境） should remain available at a proportionate level so future learning does not treat algorithm-created popularity as unbiased user preference.

---

## R10-D31 — Rank position and source context may matter to learning / 排名位置与候选来源可能影响后续学习

**HARDENING（架构加固）.**

Where proportionate, downstream analysis may need surface, module, rank/position, source reason and exploration origin to interpret user behavior correctly.

---

## R10-D32 — Recommendation feedback must not create authority loops / 推荐反馈不能制造权威闭环

**HARD SAFEGUARD（硬保护）.**

More exposure → more engagement → more exposure must not automatically become More authority / Work Recognition（更多权威 / 作品认可）.

Recommendation popularity and knowledge/recognition systems remain separate.

---

# 9. Cold start & degraded modes / 冷启动与降级模式

## R10-D33 — Cold start combines supply sources without fabricating personal history / 冷启动可以混合供给，但不能伪造个人历史

**HARDENING（架构加固）.**

New/low-history users may receive declared-interest, editorial, broad/popular, contextual, Topic / Place（主题 / 地点）, freshness and exploration candidates.

That supply reason does not mean a Durable Interest（长期兴趣） already exists.

---

## R10-D34 — Non-personalized serving remains first-class / 非个性化服务模式仍然是一等能力

**HARD INVARIANT（硬边界）.**

If behavioral personalization is paused/unavailable, recommendation can still operate through editorial, freshness, context, broad popularity, Topic / Place and exploration policies.

---

## R10-D35 — Partial subsystem failure must allow graceful degradation / 推荐子系统部分故障应支持降级

**HARDENING（架构加固）.**

Failure of one retriever/model should not require the whole discovery product to fail if other eligible sources can still provide a valid experience.

Exact availability/SLA（服务等级目标） engineering remains implementation work.

---

# 10. Evolvability, testing & observability / 可演进、测试与可观察性

## R10-D36 — Stage boundaries remain observable enough to diagnose failure / 各阶段需要足够可观察以定位失败

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Where technically proportionate, the system should distinguish:

- candidate source contribution;
- eligibility filtering;
- pre-ranking survival;
- ranking distribution;
- re-ranking/composition effects;
- final exposure.

Without this separation, a bad final result cannot be attributed correctly.

---

## R10-D37 — Material ranking/retrieval changes are versioned and controlled / 重大召回与排序变更必须版本化并受控

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Material changes to candidate sources, eligibility policy, ranking objectives, calibration, re-ranking constraints or exploration allocation should support impact analysis, Model / Policy Version（模型 / 策略版本）, offline/shadow evaluation where proportionate, staged rollout, monitoring and rollback.

---

## R10-D38 — Offline metrics cannot be the only acceptance criterion / 离线指标不能成为唯一验收标准

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Offline relevance/engagement improvement may not reflect user satisfaction, discovery breadth, fatigue, source diversity, long-term value or unintended feedback loops.

Later production evaluation should combine offline and online/product-level evidence as appropriate.

---

## R10-D39 — Early implementation may collapse stages physically while preserving semantics / 第一版可以物理合并阶段，但必须保留语义分层

**HARDENING（架构加固）.**

A small V1（第一版） may use one service/function for retrieval + ranking, but the code/data contracts should not erase conceptual boundaries so future scale requires redesigning product truth.

---

## R10-D40 — No infrastructure stack is approved / 本工作坊不批准基础设施技术栈

**SCOPE GUARD（范围护栏）.**

Workshop D does not mandate Elasticsearch（弹性搜索）, OpenSearch（开放搜索）, PostgreSQL vector（PostgreSQL 向量）, dedicated Vector Database（向量数据库）, Feature Store（特征存储）, Kafka（卡夫卡消息系统）, real-time stream processing（实时流处理） or any specific ML serving platform.

Implementation may evolve without changing these product semantics.

---

# 11. Visible product picture / 当前可见产品形态

After Workshop D, the recommendation system should be understood as:

1. **eligible inventory first（先资格，后相关性）**;
2. **multiple candidate sources（多来源候选召回）**;
3. **source/reason provenance retained（保留召回原因）**;
4. **optional scale-driven pre-ranking（按规模需要加入预排序）**;
5. **surface-specific, multi-objective ranking（按页面任务进行多目标排序）**;
6. **page/slate-level re-ranking and blending（整页级重排序与混排）**;
7. **exposure feedback treated as biased/caused data（把曝光反馈视为受系统影响的数据）**;
8. **cold-start and non-personalized modes remain valid（冷启动与非个性化模式都能运行）**;
9. **each major stage is evolvable and diagnosable（主要阶段可演进、可诊断）**;
10. **exact models and infrastructure remain deferred（具体模型与技术栈继续延后）**.

---

# 12. Intentionally deferred / 明确延后项

This workshop does **not** decide:

- exact retrieval algorithms;
- exact candidate counts / per-source budgets;
- exact ranking objective weights;
- exact calibration method across content types;
- exact exploration percentage;
- exact freshness curves;
- exact popularity/trend formula;
- exact online/offline metrics and thresholds;
- exact A/B testing platform;
- exact model family or serving stack.

These remain Algorithm / Configuration / Implementation（算法 / 配置 / 实现） concerns and must stay evolvable.

---

# 13. Next review area / 下一审查区域

Workshop E（工作坊 E） should examine **Exploration, Diversity, Freshness, Trending & Long-tail Allocation（探索、多样性、新鲜度、趋势与长尾分配）** at the recommendation-system level, including how those objectives coexist without becoming fixed quotas or allowing popularity to dominate discovery.