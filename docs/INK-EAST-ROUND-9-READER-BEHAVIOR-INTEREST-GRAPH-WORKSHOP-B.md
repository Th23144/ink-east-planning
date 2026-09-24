# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Workshop B（工作坊 B）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Interest Graph Structure & Temporal Model（兴趣图谱结构与时间模型） — define how user-interest relations are represented across targets, time horizons, confidence, lifecycle and context before final ranking/model implementation.

Research input:
- `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`
- `docs/INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-A.md`

Standing principle: **Interest Graph（兴趣图谱） is a private, evolving relevance layer over the platform's existing object graph. It is not identity truth, expertise, authority, trust, Recognition（作品认可） or a permanent psychological profile.**

---

## R9-B1 — Interest Graph is a relation layer, not a replacement ontology / 兴趣图谱是关系层，不替代平台本体

**HARD INVARIANT（硬边界）.**

Interest relations connect a user/account context to existing discovery targets such as Topic（主题）, Place（地点）, Knowledge Entity（知识实体）, Work（作品）, creator/account, collection/series, content type or other supported targets.

The Interest Graph must not redefine those targets' canonical identity or become the master taxonomy of the platform.

---

## R9-B2 — A user may have multiple concurrent interest clusters / 一个用户可以同时存在多个兴趣簇

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Project 3 must support multiple concurrent Interest Clusters（兴趣簇） rather than forcing one dominant category or one global profile label.

Clusters may overlap, conflict, emerge, cool, reactivate or remain weakly connected. Exact ML/storage representation remains deferred.

---

## R9-B3 — Interest cluster and platform Topic are not the same object / 兴趣簇与平台主题不是同一种对象

**HARD INVARIANT（硬边界）.**

An Interest Cluster（兴趣簇） is a user-specific derived grouping of related interests/signals. Topic（主题） is a shared platform content/knowledge concept.

A cluster may contain several Topics, Places, Works, creators or content types, and the same Topic may participate in several user-specific clusters.

---

## R9-B4 — Explicit and inferred interest edges remain distinguishable / 明确兴趣边与推断兴趣边保持可区分

**HARD INVARIANT（硬边界）.**

Follow（关注）, explicit interest selection, Show More/Less（多看 / 少看）, Not Interested（不感兴趣） and similar user actions must not be flattened into the same provenance state as machine-inferred interest.

A derived edge must not masquerade as user-declared preference.

---

## R9-B5 — Positive affinity and negative preference are not one signed scalar / 正向兴趣与负向偏好不能只做成一个正负分数

**HARD INVARIANT（硬边界）.**

Interest/Affinity（兴趣 / 亲和） and Avoidance / Suppression Preference（规避 / 减少偏好） should remain distinguishable.

A user may broadly like a Topic but dislike one creator, one subtopic or one content format; one negative action must not erase the entire positive relationship unless policy explicitly says so.

---

## R9-B6 — Long-term interest, short-term intent and current-session state are separate layers / 长期兴趣、短期意图与当前会话状态分层

**HARD INVARIANT（硬边界）.**

The system must be able to represent at least:
- Durable Interest（长期兴趣）;
- Recent / Short-term Interest（近期 / 短期兴趣）;
- Session Intent（会话意图）.

These layers may interact but must not overwrite one another by default.

---

## R9-B7 — Session overlays are fast and disposable / 会话层应快速响应且可快速消退

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

A session-level profile may respond quickly to recent searches, opens, filters or navigation while remaining explicitly temporary.

A one-off session spike must not automatically promote itself into a durable interest without additional evidence.

---

## R9-B8 — Durable interests require persistence, not merely intensity / 长期兴趣需要持续性，不只看单次强度

**ADAPTIVE RULE（弹性规则）.**

Durable Interest（长期兴趣） should generally require repeated, voluntary, temporally distributed evidence or explicit user declaration.

Exact counts, windows and thresholds remain DEFERRED CALIBRATION（延后校准） and may vary by content type and target type.

---

## R9-B9 — Interest lifecycle may include emerging, active, cooling, dormant and revived states / 兴趣生命周期可包含新兴、活跃、降温、休眠、恢复

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

The architecture must support an interest becoming stronger, weaker, dormant and later reactivated without pretending the user's history never existed.

Exact labels/state machine may evolve; the lifecycle concept is the requirement.

---

## R9-B10 — Decay changes current influence, not historical truth / 衰减改变当前影响，不改写历史

**HARDENING（架构加固）.**

Time decay may reduce an old interest edge's current recommendation influence while lawful historical evidence remains available under retention/privacy policy.

Decay must not silently rewrite prior actions or declared preferences.

---

## R9-B11 — Different signal families may decay differently / 不同信号类型可以采用不同衰减逻辑

**ADAPTIVE RULE（弹性规则）.**

A Follow（关注）, one search, repeated reading, a Save（收藏） and an explicit Not Interested（不感兴趣） action need not share one half-life.

Decay policy is task/signal/context dependent and must remain versionable rather than hard-coded globally.

---

## R9-B12 — Interest confidence is not a universal user score / 兴趣置信度不是通用用户评分

**HARD INVARIANT（硬边界）.**

The system may maintain confidence/uncertainty around a particular derived interest or cluster, but this must remain relation-specific/context-specific.

No single Interest Confidence（兴趣置信度） number may become a universal measure of the user.

---

## R9-B13 — Familiarity/knowledge depth is separate from interest / 熟悉度或知识深度与兴趣分离

**HARD INVARIANT（硬边界）.**

Frequent engagement with a subject does not prove expertise, and expertise does not prove personal interest.

If future product features infer Familiarity / Knowledge Depth（熟悉度 / 知识深度）, that must be a separate model with its own evidence and uncertainty, not an attribute smuggled into Interest Graph（兴趣图谱）.

---

## R9-B14 — Interest propagation across the knowledge graph must be bounded / 沿知识图谱传播兴趣必须受限

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Interest in one Work（作品）, Person（人物）, Place（地点） or Topic（主题） may justify exploring related candidates, but the system must not automatically convert graph adjacency into durable user interest.

Example: reading one text by a philosopher may justify testing nearby philosophical content, but must not permanently mark every related school, period or person as a strong interest.

---

## R9-B15 — Derived related-interest expansion remains probabilistic and reversible / 关联兴趣扩展必须是概率性的且可撤销

**ADAPTIVE RULE（弹性规则）.**

Related-interest inference should preserve uncertainty and be demotable when subsequent behavior does not support it.

Graph expansion is a discovery mechanism, not a truth assertion about the user.

---

## R9-B16 — Cross-domain bridges are allowed without collapsing domains / 允许跨领域兴趣桥接，但不能把领域合并

**HARDENING（架构加固）.**

Project 3 may discover useful bridges such as architecture ↔ travel, tea ↔ history, classical texts ↔ philosophy, food ↔ place or craft ↔ material culture.

These bridges support discovery but do not change the underlying Domain / Topic / Place identities or force permanent user-profile fusion.

---

## R9-B17 — Contradictory interests and negative preferences may coexist / 相互冲突的兴趣与负偏好可以同时存在

**HARD INVARIANT（硬边界）.**

The model must tolerate cases such as strong interest in a broad Topic while repeatedly hiding one subtopic/creator/content format.

Do not force all signals into one consistent scalar when real behavior is multi-dimensional.

---

## R9-B18 — Surface-specific interest views are permitted / 可以存在面向不同页面的兴趣视图

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

Home / For You（首页 / 为你推荐）, Search（搜索）, Following（关注）, Topic（主题）, Place（地点）, Notifications（通知） and Related / Next（相关推荐 / 下一项） may consume different projections of the same underlying interest evidence.

They do not require one universal ranking profile.

---

## R9-B19 — Context does not become permanent identity by default / 情境信息默认不能固化成永久身份

**HARD INVARIANT（硬边界）.**

Device, time of day, entry route, language, coarse location/context where lawfully used, and current session may affect relevance but must not silently become durable identity claims.

Context is contextual.

---

## R9-B20 — Personal reading interest and representative/organizational Acting Context remain separated / 个人阅读兴趣与机构代表行动情境分离

**HARD INVARIANT inherited from Round 6（继承第六轮的硬边界）.**

A user acting for an Organization（组织） or Platform Staff（平台员工） must not automatically cause that representative activity to rewrite the user's personal recommendation profile, or vice versa, without an explicit product rule.

Operational/representative actions and personal preference data remain separate purposes by default.

---

## R9-B21 — Anonymous/session personalization may exist without pretending to know a durable person / 可以支持匿名或会话个性化，但不能冒充长期个人画像

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

Before sign-in, Project 3 may use ephemeral/session-local behavior for relevance and exploration where privacy policy permits.

Anonymous/session state must not be represented as durable account interest until an explicit, lawful linking rule exists.

---

## R9-B22 — Account linking/migration of interest requires explicit policy / 兴趣画像跨账户或合并迁移必须有明确策略

**HARDENING（架构加固）.**

Login, account merge, device migration, organization membership or identity reconciliation must not silently merge all interest histories.

If future products support migration/merge, scope, consent, privacy, provenance and conflict resolution must be explicit.

---

## R9-B23 — User correction can override or damp inferred state without erasing all history / 用户纠错可以覆盖或减弱系统推断，但无需抹掉所有历史

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Explicit Not Interested / Show Less / interest editing / Recommendation Reset（不感兴趣 / 少看 / 兴趣编辑 / 推荐重置） must be able to alter future personalization even when older behavioral evidence exists.

The product may retain lawful historical events while marking current inference as suppressed/reset/invalidated.

---

## R9-B24 — Reset may be scoped rather than all-or-nothing / 推荐重置可以按范围进行，不必只能全量清空

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

Future controls may support resetting or weakening one Topic, Place, creator, content type, interest cluster, surface or the broader inferred profile.

Exact V1 UX is deferred, but the architecture must not assume only an irreversible global profile exists.

---

## R9-B25 — Interest state must retain derivation provenance at an appropriate level / 兴趣状态需要保留适度的推导溯源

**HARDENING（架构加固）.**

Material derived state should be explainable by signal families, time horizon, target/cluster, context and Model / Policy Version（模型 / 策略版本） at an appropriate level.

This is for auditability and future change management, not for exposing raw sensitive logs publicly.

---

## R9-B26 — Derived interest features must know when they are stale / 派生兴趣特征必须知道何时过期

**HARD INVARIANT under Rule Evolvability（规则可演进硬要求）.**

Cached Interest Features（兴趣特征）, embeddings, cluster assignments, retrieval profiles or downstream recommendation features must support invalidation/recomputation when source behavior, user correction, lifecycle policy or model version materially changes.

---

## R9-B27 — Historical model changes must not make old decisions uninterpretable / 模型升级不能让过去的推荐逻辑无法解释

**HARDENING（架构加固）.**

Where consequential, the platform should be able to distinguish which interest/model/policy version produced a derived state or recommendation-era feature.

This does not require storing every ephemeral score forever; retention depth should be proportionate to product, privacy and audit needs.

---

## R9-B28 — Interest model change requires migration/rollout/rollback strategy / 兴趣模型变更必须考虑迁移、灰度与回滚

**HARD INVARIANT for material changes（重大变更的硬边界）.**

A major change to interest derivation, clustering, decay or propagation should define whether existing derived state is retained, recomputed, shadow-evaluated, gradually migrated or invalidated.

The platform must not assume a model swap is operationally equivalent to changing a UI label.

---

## R9-B29 — Core data, policy and algorithm remain separate / 核心数据、策略与算法保持分层

**HARD INVARIANT（硬边界）.**

Round 9 distinguishes:
- Data（数据）: source behavior/events and explicit preference actions;
- Policy（策略）: interpretation/retention/decay/reset constraints;
- Algorithm（算法）: inference, clustering, prediction and representation;
- Derived State（派生状态）: current interest edges/clusters/features;
- Presentation（展示）: what the user is shown or allowed to edit.

These layers may interact but must not be collapsed into one opaque personalization field.

---

## R9-B30 — No storage technology is mandated by the Interest Graph product model / 兴趣图谱产品模型不强制指定存储技术

**SCOPE GUARD（范围护栏）.**

The term Interest Graph（兴趣图谱） does not require a Graph Database（图数据库）. Relational tables, event stores, feature stores, vector indexes, graph systems or hybrid approaches remain implementation choices.

Choose technology later based on scale, query pattern, cost, latency and operational maturity.

---

# Current visible product picture / 当前可见产品形态

At this checkpoint, Project 3 personalization should be understood as:

1. many semantically distinct behavior signals;
2. explicit preferences separated from inferred preferences;
3. multiple simultaneous Interest Clusters（兴趣簇） rather than one user category;
4. separate Session / Recent / Durable（会话 / 近期 / 长期） interest layers;
5. lifecycle states that may emerge, cool, go dormant and revive;
6. bounded/reversible propagation across related Topics / Places / Knowledge objects;
7. explicit negative feedback and recommendation-reset capability;
8. privacy/purpose separation from identity, trust, governance and authority;
9. model/feature state that can be invalidated, migrated, shadow-tested and rolled back;
10. no commitment yet to a specific ML model, vector database or graph database.

# Product choices intentionally still open / 仍明确开放的产品选择

No major user-level product fork blocks Workshop B. The following remain adaptive/deferred:
- exact lifecycle labels and transition thresholds;
- exact decay curves by signal/target/content type;
- whether the UI exposes named interest clusters directly;
- exact scope and UX of Recommendation Reset（推荐重置）;
- whether anonymous/session personalization persists beyond a browser/session and under what consent model;
- exact interest-propagation depth across Knowledge Graph（知识图谱） relations;
- storage/model technology.

# Next review area / 下一审查区域

Next Round 9 work should examine Interest Derivation, Confidence & User Correction（兴趣推导、置信与用户纠错）: how multiple signals combine without fake precision, how explicit declarations interact with inferred state, how contradictory evidence is handled, how users can inspect/correct recommendations, and what explanation/audit requirements exist before the later Discovery & Recommendation（发现与推荐） round.