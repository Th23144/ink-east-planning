# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Workshop E（工作坊 E）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Privacy, Retention & Interest-Data Lifecycle（隐私、保留与兴趣数据生命周期） — define what personalization data may exist, how long raw/derived data may live, how deletion/reset propagates, and how purpose boundaries are preserved.

Inputs: Workshops A–D（工作坊 A–D） + project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Standing principle: **Personalization value does not justify unlimited behavioral surveillance. Collect the minimum useful evidence, keep purposes distinct, and make derived state deletable/recomputable.**

---

## R9-E1 — Raw behavior and derived personalization state are different data classes / 原始行为与派生个性化状态属于不同数据类别

**HARD INVARIANT（硬边界）.**

Raw Events（原始事件） such as opens/searches/saves and Derived State（派生状态） such as interest edges, clusters, embeddings or recommendation features must remain distinguishable for retention, deletion, audit and migration.

---

## R9-E2 — Data collection must be purpose-limited / 数据采集必须用途受限

**HARD INVARIANT（硬边界）.**

Project 3 should collect behavioral data only for explicit product purposes such as personalization, analytics, continuity, anti-abuse or research where separately justified.

A useful event for one purpose does not automatically become eligible for every other purpose.

---

## R9-E3 — Personalization data must not silently become governance/trust data / 个性化数据不能静默变成治理或信任数据

**HARD INVARIANT inherited from earlier rounds（继承前轮次硬边界）.**

Interest and consumption history must not automatically grant or remove governance power, Contributor Qualification（贡献者资格）, Recognition（作品认可） or source authority.

If some raw event legitimately supports Account Maturity（账户成熟度） as well, that is a separate evaluation/purpose with separate policy.

---

## R9-E4 — Private Reader Notes and private messages are not recommendation fuel by default / 私人读者笔记与私信默认不作为推荐燃料

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Private Reader Notes（私人读者笔记）, Direct / Private Messages（私信 / 直接消息） and similarly private content must not be silently mined for recommendation interests merely because they are technically accessible to the platform.

Any future use would require an explicit product/privacy decision and appropriate user expectation/controls.

---

## R9-E5 — Moderation/report evidence is not personalization fuel by default / 审核与举报证据默认不作为个性化推荐信号

**HARD INVARIANT（硬边界）.**

Reporting content, participating in an appeal or being involved in a moderation case must not automatically be interpreted as topic affinity or dislike.

Governance evidence and interest evidence remain purpose-separated.

---

## R9-E6 — Retention should differ by data class / 不同数据类别可以有不同保留周期

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

Raw events, aggregated analytics, explicit follows/preferences, derived interests, model features and audit records need not share one retention period.

Exact periods remain policy/legal/operational calibration, not architecture constants.

---

## R9-E7 — Raw event retention should be bounded where full fidelity is no longer necessary / 当完整明细不再必要时，应限制原始事件长期保留

**HARDENING（架构加固）.**

Older low-value raw events may be aggregated, summarized or deleted when their product/audit purpose can be satisfied by less detailed data.

“Future ML may need it” is not by itself a permanent-retention justification.

---

## R9-E8 — Derived state may outlive individual raw events only with explainable bounded provenance / 派生状态可比单条原始事件保留更久，但必须有受控溯源

**HARDENING（架构加固）.**

A durable interest may remain after old raw events are aggregated/deleted if the platform retains sufficient lawful provenance/evidence summary to explain and update that state proportionately.

---

## R9-E9 — Recommendation Reset and data deletion remain separate operations / 推荐重置与数据删除继续分离

**HARD INVARIANT（硬边界）.**

Recommendation Reset（推荐重置） changes current personalization state. Privacy/data deletion changes retained data according to applicable policy/law.

One must not be falsely presented as the other.

---

## R9-E10 — Deletion must propagate to dependent derived data where required / 删除要求必须能传播到依赖的派生数据

**HARD INVARIANT（硬边界）.**

When source data must be deleted or excluded, dependent Interest Features（兴趣特征）, embeddings, clusters, caches, search/retrieval profiles and experimentation datasets must have a defined invalidation/recomputation/deletion path as applicable.

---

## R9-E11 — Reset/correction must propagate even when raw events remain / 即使原始行为仍依法保留，推荐纠错也必须影响派生状态

**HARD INVARIANT（硬边界）.**

The system must not keep using stale derived state merely because historical events still exist for analytics or lawful retention.

Current personalization policy/state controls present recommendation behavior.

---

## R9-E12 — Anonymous/session data remains separate from durable account data until explicitly linked / 匿名或会话数据在明确关联前与长期账户数据分离

**HARD INVARIANT（硬边界）.**

Pre-login/session-local interest state must not automatically become durable account history merely because the user later signs in.

Any linking/migration requires an explicit product/privacy rule.

---

## R9-E13 — Cross-device identity linking is not assumed / 不默认跨设备自动拼接兴趣画像

**HARDENING（架构加固）.**

Cross-device personalization may be useful, but device/account/session linkage must follow explicit identity/privacy policy rather than hidden probabilistic merging by default.

---

## R9-E14 — Organization/representative activity remains purpose-separated from personal interest / 机构代表活动与个人兴趣用途分离

**HARD INVARIANT inherited from Round 6（继承第六轮硬边界）.**

Actions taken in Organization / Platform Staff Acting Context（组织 / 平台员工行动情境） should not silently train the user's personal recommendation profile, or vice versa.

---

## R9-E15 — Sensitive-category interest inference requires extra restraint / 敏感类别兴趣推断需要更严格约束

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Consumption of content touching religion, politics, health, sexuality, ethnicity or similarly sensitive areas must not be casually converted into sensitive personal-identity labels.

Detailed jurisdiction/category policy remains for later privacy/governance work.

---

## R9-E16 — Precise location is not required for Place interest / 地点兴趣不要求使用精确位置

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Interest in a Place（地点） can arise from explicit follows, searches, reading/travel planning and other content interactions. Precise device/location tracking must not be treated as a prerequisite for Place personalization.

If location is ever used, it requires its own product/privacy basis.

---

## R9-E17 — Search history may be highly revealing and deserves stronger treatment / 搜索历史可能高度敏感，应采用更严格的数据治理

**HARDENING（架构加固）.**

Search Query（搜索查询） can be strong current-intent evidence but may reveal highly sensitive or one-off needs. Retention, access, use and long-term-profile promotion should be more conservative than generic low-sensitivity impressions where appropriate.

---

## R9-E18 — User-facing controls should not require exposure of every raw event / 用户控制推荐不需要暴露全部原始行为明细

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

The platform may offer high-level controls over interests, history influence, follows, negative preferences or reset without requiring a complete internal event/debug ledger in ordinary UX.

Separate data-access/export rights may exist under later privacy policy.

---

## R9-E19 — Personalization opt-out/pause must remain architecturally possible / 架构上必须保留暂停或退出个性化的可能性

**HARD PRODUCT REQUIREMENT at architecture level（架构级硬要求）.**

Project 3 must not make personalized ranking so structurally mandatory that a user cannot later choose reduced/non-personalized discovery where product/legal policy requires it.

Exact early-V1 UX is deferred.

---

## R9-E20 — Non-personalized mode still may use non-user-specific product rules / 非个性化模式仍可使用非个人化产品规则

**HARDENING（架构加固）.**

Opting out of behavioral personalization does not require a literally random feed. Editorial curation, freshness, general popularity, eligibility, language and broad product rules may still order content without a private behavioral profile.

---

## R9-E21 — Experimentation datasets require purpose/retention boundaries / 实验数据集也需要用途与保留边界

**HARD INVARIANT（硬边界）.**

A/B tests, offline evaluation, shadow models and model-training snapshots must not become an unlimited second archive that bypasses normal retention/deletion rules.

Dataset lineage and deletion/refresh strategy are required where applicable.

---

## R9-E22 — Model training and online personalization are distinct processing purposes / 模型训练与在线个性化是不同处理用途

**HARDENING（架构加固）.**

Using events to serve a current recommendation and using them to train future models are not automatically identical product/privacy purposes.

Architecture must allow policy to distinguish them.

---

## R9-E23 — Aggregated/anonymized analytics should be preferred where individual history is unnecessary / 不需要个体历史时优先使用聚合或匿名化分析

**ADAPTIVE DATA-MINIMIZATION RULE（弹性数据最小化规则）.**

Where product decisions can be made from aggregate statistics, the platform should avoid retaining unnecessary user-level detail solely for convenience.

---

## R9-E24 — Access to detailed personalization data should be scoped / 详细个性化数据的内部访问应受范围限制

**HARD INVARIANT（硬边界）.**

Raw behavior, inferred interests and sensitive personalization features must not become broadly visible to unrelated staff/admin roles merely because an internal admin interface can display them.

Access follows scoped Permission / Acting Context（权限 / 行动情境） principles.

---

## R9-E25 — Retention/deletion policies are versioned rules / 保留与删除策略属于可版本化规则

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Retention periods, aggregation thresholds, reset semantics and deletion propagation must be governed Policy / Workflow / Configuration（策略 / 工作流 / 配置） rather than scattered hard-coded cron behavior.

---

## R9-E26 — Historical policy changes must preserve lawful interpretability / 历史策略变化需要保留合法的可解释性

**HARDENING（架构加固）.**

When retention/personalization policy changes, the platform should be able to explain which policy version controlled a material derived state or deletion workflow where needed, without preserving prohibited data merely for audit convenience.

---

## R9-E27 — Privacy obligations override recommendation convenience / 隐私义务优先于推荐便利

**HARD INVARIANT（硬边界）.**

If privacy/legal policy requires deletion, minimization, purpose limitation or reduced processing, the recommendation system must adapt. Historical continuity or model quality cannot be used as a blanket reason to ignore those requirements.

---

## R9-E28 — No permanent data-hoarding requirement is authorized by Round 9 / 第九轮不授权永久囤积行为数据

**SCOPE GUARD（范围护栏）.**

Round 9 establishes semantics and lifecycle capability, not indefinite storage. Exact retention schedules and jurisdiction-specific compliance remain deferred to implementation/privacy governance.

---

# Current visible product picture / 当前可见产品形态

Project 3 personalization data should behave as a managed lifecycle rather than a permanent behavioral dossier:

1. raw events and derived interests are separate;
2. uses are purpose-limited;
3. private notes/messages and moderation cases are not recommendation fuel by default;
4. old raw behavior may be aggregated/deleted when full fidelity is unnecessary;
5. recommendation reset and legal/privacy deletion are different operations;
6. corrections/deletions propagate to dependent derived state;
7. anonymous/session, personal account and organizational acting contexts remain separated;
8. sensitive-category inference receives extra restraint;
9. personalization opt-out/pause remains architecturally possible;
10. experimentation/model-training datasets cannot bypass lifecycle rules.

# Product choices intentionally still open / 仍明确开放的产品选择

No major product fork blocks Workshop E. Deferred:
- exact raw-event retention periods;
- exact aggregation/anonymization schedule;
- exact personalization opt-out/pause UX;
- exact account-login migration/consent behavior for anonymous history;
- model-training consent/legal-basis details by jurisdiction;
- user data export/history-management UI;
- precise internal access-role design.

# Next review area / 下一审查区域

Next Round 9 work should consolidate Workshops A–E into an Interest Graph Object Matrix & End-to-End Flows（兴趣图谱对象矩阵与端到端流程） covering signal capture → contextual interpretation → temporary/durable interest derivation → correction/reset → downstream recommendation consumption → decay/retention/deletion, then run a cross-workshop consistency/completeness audit before any Round 9 Current Truth（当前有效真相） consolidation.