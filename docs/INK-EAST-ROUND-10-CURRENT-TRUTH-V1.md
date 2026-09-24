# Round 10 — Discovery & Recommendation（发现与推荐） — Current Truth V1（当前有效真相 V1）

> **Status:** CURRENT TRUTH / PRODUCT ARCHITECTURE ONLY（当前有效真相 / 仅产品架构）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Rule inventory:** 318 controlling rule slots = A37 + B39 + C44 + D47 + E47 + F46 + G52 + X6

---

## 0. Controlling source hierarchy / 控制性来源层级

This file consolidates Round 10 after Workshops A–G, all local Adversarial Audits（对抗性审计）, all local Hardening Addenda（加固补充）, the Cross-Workshop Consistency & Completeness Audit（跨工作坊一致性与完整性审计）, and the user-confirmed product choices.

Where wording conflicts, precedence is:

1. this Current Truth V1（当前有效真相 V1）;
2. `docs/ROUND-10-CROSS-WORKSHOP-HARDENING-ADDENDUM.md`;
3. user decision records:
   - `docs/ROUND-10-WORKSHOP-C-FOLLOWING-ORDER-DECISION.md`;
   - `docs/ROUND-10-WORKSHOP-G-ANONYMOUS-HANDOFF-DECISION.md`;
   - Hybrid Homepage（混合式首页） decision recorded in Workshop B / PR #53;
4. local Workshop Hardening Addenda（工作坊加固补充）;
5. Workshops A–G（工作坊 A–G）;
6. benchmark research as Research Input（研究输入） only, never architecture truth.

Historical files remain Decision Provenance（决策溯源） and are not deleted merely because consolidation exists.

---

# 1. Standing architecture / 当前总体架构

Project 3 treats Recommendation（推荐） as a controlled discovery process over eligible platform objects, not as one universal engagement score or one feed algorithm.

The conceptual pipeline is:

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
Exposure Context + Feedback（曝光情境 + 反馈）
        ↓
Measurement / Evaluation / Learning（测量 / 评估 / 学习）
```

This is a semantic contract, not an instruction to build industrial-scale infrastructure in early V1（第一版）.

Recommendation must preserve four separations throughout the pipeline:

- **interest != identity / expertise / trust（兴趣 != 身份 / 专业 / 信任）**;
- **popularity / ranking != authority / truth / Work Recognition（热门 / 排名 != 权威 / 真理 / 作品认可）**;
- **candidate source != final rank（候选来源 != 最终排序）**;
- **presentation != object identity / provenance（展示 != 对象身份 / 来源溯源）**.

---

# 2. User-confirmed provisional product directions / 用户确认的暂定产品方向

The following directions are confirmed by the user but remain **PROVISIONAL（暂定）**, not immutable invariants:

| Area（领域） | Current direction（当前方向） | Status（状态） |
|---|---|---|
| Home / For You（首页 / 为你推荐） | Hybrid Homepage（混合式首页） = semantic Modules / Shelves（模块 / 内容货架） + Personalized Discovery Stream（个性化发现流） | PROVISIONAL（暂定） |
| Following（关注） | Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新） | PROVISIONAL（暂定） |
| Anonymous → Account（匿名 → 账户） | Scoped / transparent handoff（有限范围、透明衔接） | PROVISIONAL（暂定） |

Seal（封存） of Round 10 will make these the current controlling baseline, not permanently irreversible choices.

---

# 3. A — Discovery surfaces & candidate supply / 发现页面与候选供给

**Controlling range: R10-A1…R10-A37（37 rules / 37 条）.**

All A rules remain incorporated. Their controlling meaning is:

- Discovery & Recommendation（发现与推荐） is multi-surface; Home, Following, Explore, Topic, Place, Search, Related / Next and future specialized surfaces may share infrastructure while preserving different product tasks.
- Surface objective is defined before ranking math/model selection.
- Candidate supply is intentionally multi-source: Follow（关注）, Interest Graph（兴趣图谱）, Knowledge Graph（知识图谱）, Topic / Place（主题 / 地点）, continuation, editorial curation, quality/Recognition, freshness, trending, long-tail/new-content, collaborative and session/context sources may coexist.
- Candidate source identity remains observable and explainable.
- Eligibility / privacy / rights / moderation / access constraints dominate relevance score.
- Recommendation cannot manufacture authority, factual truth, source reliability, contributor standing or Work Recognition（作品认可）.
- Popularity/trending/editorial/Recognition may contribute as distinct evidence but cannot become universal discovery gates.
- Follow（关注） is explicit relationship evidence, not merely inferred affinity.
- Home blends multiple candidate families and multiple interests; Explore remains structurally broader; Search remains query-led; Related remains anchored to current object/task; continuation remains distinct from general discovery.
- Knowledge Graph adjacency may retrieve but does not dictate rank; Interest Graph is one input, not the recommender itself.
- Retrieval, optional Pre-ranking（预排序）, Ranking（排序）, Re-ranking / Blending（重排序 / 混排） and Presentation（展示） remain conceptually distinct.
- New/low-exposure content retains viable discovery paths; creator opportunity and predicted user relevance remain separate objectives.
- Candidate-source quotas/caps are Policy / Configuration / Algorithm（策略 / 配置 / 算法）, not ontology.
- Recommendation explanation, exposure context, content-type calibration, source dominance observability and personalization-off fallback are architecture concerns.
- Freshness / staleness semantics depend on object type; old durable knowledge must not be penalized merely for age, while time-sensitive practical information must be able to expire.

Local A Adversarial Audit（对抗性审计） and R10-A31…A37 hardening remain controlling.

---

# 4. B — Home / For You composition / 首页 / 为你推荐组合

**Controlling range: R10-B1…R10-B39（39 rules / 39 条）.**

All B rules remain incorporated. Their controlling meaning is:

- Home / For You adopts the provisional Hybrid Homepage（混合式首页） direction.
- Modules / Shelves（模块 / 内容货架） express distinct intents; the Personalized Discovery Stream（个性化发现流） provides continuous mixed discovery. Neither is a decorative copy of the other.
- Semantic module identity remains separate from final visual layout; no fixed row count/order/layout is architecture truth.
- Multiple Interest Clusters（兴趣簇） may appear in the same visit; one recent high-engagement cluster must not automatically monopolize the page.
- Strong Session Intent（会话意图） may temporarily concentrate recommendations without rewriting Durable Interest（长期兴趣）.
- Continuation, explicit follows, editorial curation, quality/Recognition, exploration, freshness and long-tail/new-content may all have legitimate Home routes.
- Home is multi-objective; CTR / dwell（点击率 / 停留时长） are not sufficient product objectives.
- Module selection, module ordering, in-module ranking and stream composition are distinct recommendation decisions.
- Mixed object types require type-aware treatment; visual unification must not erase canonical/editorial/community semantics.
- Cross-module/stream duplicate exposure is controllable; candidate-source composition is observable without equal quotas.
- Exposure Context（曝光情境） retains module/position/source meaning where proportionate; recommendation-created feedback loops remain diagnosable.
- Negative controls retain their declared scope; hiding a module does not automatically mean disliking all contained Topics/creators/items.
- Home modules supplement but do not replace dedicated Following / Explore / Search surfaces.
- Hybrid behavior must remain operationally observable so it does not silently collapse into pure shelves or pure endless feed.
- Paid / sponsored / commerce placement is not authorized to masquerade as organic recommendation.

---

# 5. C — Following / Explore / Search / Related surface semantics / 关注 / 探索 / 搜索 / 相关推荐页面语义

**Controlling range: R10-C1…R10-C44（44 rules / 44 条）.**

All C rules remain incorporated.

## Following（关注）

- Following is an explicit-relationship surface, not a generic affinity feed.
- Unrelated recommendations cannot silently displace core followed inventory.
- Weak engagement never silently converts Follow（关注） into Unfollow（取消关注）.
- Ranked ordering may use recency, unread state, relevance, update importance, deduplication and fatigue control without redefining the relationship.
- **User-confirmed provisional direction:** Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）.
- Latest / All Updates provides a transparent route to eligible followed inventory.
- Ranked-following starvation must be observable; equal exposure is not required.

## Explore（探索）

- Explore deliberately reaches beyond strongest inferred interests and cannot become low-confidence Home.
- Exploration is reasoned, not random noise.
- Interest Graph may assist relevance/suppression but cannot own the entire Explore supply.
- New, niche and low-exposure content retains genuine routes without guaranteed impressions.
- Candidate-source composition remains observable.

## Search（搜索）

- Explicit Query Intent（查询意图） is primary.
- Search relevance and recommendation may share infrastructure/signals but are not the same task.
- Personalization is secondary/scoped; semantic expansion must remain query-grounded.
- Exact/direct matches retain a clear route; zero-result fallbacks and related discovery must be labeled/separated.
- Search behavior may be strong Session Intent（会话意图） but does not automatically become durable identity/interest.
- Show Less / Unfollow（少看 / 取消关注） normally does not erase direct search visibility; stronger Block/global controls retain their own scope.
- Popularity and publisher-controlled metadata do not create authority or absolute relevance.

## Related / Next（相关推荐 / 下一项）

- Related is anchored to the current object/task and typed relations.
- Structural/canonical Next（下一项） remains available where sequence is authoritative.
- Relatedness does not imply agreement, truth, editorial endorsement, Recognition or source authority.
- Derived candidates/indexes/caches must support invalidation when lifecycle, rights, access or material freshness changes.

---

# 6. D — Candidate retrieval & multi-stage ranking / 候选召回与多阶段排序

**Controlling range: R10-D1…R10-D47（47 rules / 47 条）.**

All D rules remain incorporated.

- Recommendation begins from surface/context-specific eligible inventory; one global `recommendable` flag is insufficient where product meaning differs.
- Retrieval is multi-source and preserves retrieval provenance; one object may arrive through several routes without becoming duplicate objects or fake independent endorsements.
- Candidate breadth and per-source budgets remain evolvable.
- Follow retrieval preserves explicit relationship meaning; Interest Graph retrieval remains a relevance hypothesis; Knowledge Graph retrieval preserves typed relation; editorial remains attributable; popularity/trending remains collective evidence, not quality truth.
- Pre-ranking（预排序） is optional and scale-driven. If present, it reduces cost without redefining product truth.
- Pre-ranking recall loss must be observable by meaningful candidate cohorts, not only overall recall.
- Ranking objective is surface-specific and may be multi-objective. Engagement prediction is evidence, not the product objective.
- Different object types may require separate calibration; ranking uncertainty remains representable.
- Exact model families and ranking formulas remain deferred.
- Re-ranking / Blending（重排序 / 混排） controls whole-slate/page concentration, diversity, fatigue, repetition, source balance and exploration without falsifying object/source meaning.
- Exposure/position/treatment context remains available for diagnosing self-created feedback loops.
- Cold-start fallback and personalization-off modes remain valid product experiences.
- Observability must allow diagnosing whether failure comes from retrieval, pre-ranking, ranking, re-ranking, composition or downstream exposure.
- Material model/policy changes support versioning, shadow evaluation, rollout, rollback and calibration-drift monitoring where proportionate.
- Retrieval inputs remain purpose-limited; private notes/DM/moderation data do not become features by default.
- Long-horizon recommendation value must remain evaluable; immediate labels cannot be the only optimization horizon.
- Fallback / degraded operation and A/B experimentation cannot suspend hard eligibility, privacy, Block, Search-intent, Follow-relationship or provenance/authority boundaries.

---

# 7. E — Exploration, diversity, freshness, trending & long-tail / 探索、多样性、新鲜度、趋势与长尾

**Controlling range: R10-E1…R10-E47（47 rules / 47 条）.**

All E rules remain incorporated.

- Relevance, Exploration / Serendipity（探索 / 偶然发现）, Freshness（新鲜度）, Trending（趋势） and Long-tail / New-content Opportunity（长尾 / 新内容机会） are distinct distribution roles and must not collapse into one opaque discovery score.
- Exploration is deliberate and reasoned; adjacent and broad exploration may use different confidence/policies.
- Exploration-origin behavior retains origin context and receives cautious promotion into durable interest.
- Explicit negative preference constrains exploration; direct-intent surfaces do not need identical exploration budgets.
- Diversity is evaluated across slate/page/session and may include Topic, Domain, Place, creator/source, content type, format, interest cluster and provenance/origin dimensions.
- Diversity prevents pathological concentration but does not mean equal distribution.
- Freshness is content-type/context dependent; publication time, material update time, event/effective time and verification time are distinct where relevant.
- “Recently published/updated” is not factual verification.
- Trending is scoped to a defined population/time window and remains collective attention evidence, not authority or long-term quality.
- Trend aggregation must be privacy-safe and must distinguish platform-induced/editorial/experiment/future-paid attention from more organic attention change where material.
- Long-tail/new-content opportunity means real candidate/exposure opportunity, not guaranteed traffic or equal outcomes.
- New-content identity/lineage must prevent translation/edition/repost/version tricks from endlessly resetting “newness”.
- High-volume publishers must not consume all new/long-tail opportunity simply through quantity.
- User Cold Start（用户冷启动） and Item Cold Start（内容冷启动） are different problems.
- Exploration Fatigue（探索疲劳） remains separate from durable disinterest.

---

# 8. F — Explanation, user control, measurement & evaluation / 推荐解释、用户控制、测量与评估

**Controlling range: R10-F1…R10-F46（46 rules / 46 条）.**

All F rules remain incorporated.

## Explanation（解释）

- User-facing Why this?（为什么推荐这个） must reflect actual recommendation provenance and remain materially truthful.
- User explanation is not the same as full internal Decision Provenance（决策溯源） and must remain privacy-safe.
- Inferred relevance must preserve uncertainty and must not become identity fact.
- Recommendation reasons remain separate from authority/Recognition/truth.
- Multi-reason recommendations may expose a simplified dominant reason if it remains truthful.
- Paid/editorial/organic origins cannot be relabeled as one another; Search/structural navigation need not pretend to be personalization.
- Explanation provenance must align with the actual exposure decision and not stale/unrelated current profile state.

## User Control（用户控制）

- User correction is first-class product infrastructure; exact V1 control set remains UX（用户体验） work.
- Control scope is explicit: item / creator / Topic / Place / module / surface / global are not interchangeable.
- Explicit negative feedback is stronger than silence.
- Unfollow != Block（取消关注 != 屏蔽）.
- Persistent controls must propagate beyond the current screen to relevant derived states/caches/features and propagation must be testable.
- Recommendation Reset（推荐重置） differs from account deletion/privacy deletion and may be scoped.
- Explicit preference/correction has stronger authority than inference within its declared scope unless safety/legal constraints override.
- Conflicting controls require coherent precedence based on scope and semantic strength rather than naive “last event wins”.

## Measurement & Evaluation（测量与评估）

- No single universal KPI（关键绩效指标） defines recommendation success across surfaces.
- Immediate engagement is only one outcome family; satisfaction, completion, future return, discovery breadth, fatigue and long-horizon value may matter.
- Metrics must be interpreted by content type/format and surface objective.
- Candidate entry, stage survival, exposure opportunity, impression, interaction and downstream outcome are distinct measurements.
- Offline metrics do not alone prove product improvement; online experiments are useful but not absolute truth.
- Experiment assignment/treatment context should remain attributable where proportionate.
- Long-horizon/filter-bubble/source-starvation harm remains observable.
- Overall improvement cannot hide material cohort harm; KPI design must resist Goodhart Effect（古德哈特效应）.

---

# 9. G — Cold start, personalization modes & operational lifecycle / 冷启动、个性化模式与运行生命周期

**Controlling range: R10-G1…R10-G52（52 rules / 52 条）.**

All G rules remain incorporated.

- Cold Start（冷启动） is typed: New User（新用户）, Anonymous Session（匿名会话）, New Item（新内容）, Post-reset State（重置后状态）, Sparse Inventory（候选稀疏） and other materially different states are not one universal flag.
- Cold-start strategies preserve breadth and do not fabricate Durable Interest（长期兴趣）.
- Onboarding choices may help bootstrap discovery but are not permanent identity labels; skipping onboarding must not block product use.
- Anonymous Session state may support session-level adaptation without pretending to know a durable person/account.
- Anonymous identifiers/cookies/device state are not identity truth and need governed retention/expiry.
- **User-confirmed provisional direction:** Anonymous → Account uses Scoped / transparent handoff（有限范围、透明衔接）, not default full-history fusion.
- Login / Logout / Account Switch（登录 / 退出 / 切换账户） and shared-device boundaries require session isolation.
- Cross-device/session fusion requires explicit identity/reconciliation policy; IP/device fingerprint/behavioral similarity alone is insufficient.
- New Item（新内容） receives legitimate discovery opportunity without guaranteed exposure; exposure-created feedback bias remains diagnosable.
- Recommendation Reset preserves explicit relationship/account semantics while invalidating relevant derived personalization state; generation/version semantics prevent stale asynchronous state resurrection.
- Personalization Opt-out（退出个性化） must still provide a useful non-behavioral experience and must affect future personal derivation/consumption, not only presentation.
- Model/policy rollout/rollback must preserve newer explicit user controls and handle derived-state compatibility.
- Raw behavior retention is purpose-limited; derived features know model/version/staleness and may be recomputed/invalidated.
- Sensitive content consumption must not become permanent sensitive identity inference.
- Sparse inventory and degraded/fallback modes preserve surface semantics and hard controls.
- Mode transitions invalidate incompatible derived state.

---

# 10. X — Cross-workshop hardening / 跨工作坊加固

**Controlling range: R10-X1…R10-X6（6 rules / 6 条）.**

### R10-X1 — Topic / Place dedicated surfaces remain anchored / 主题 / 地点专页保持实体锚定

Topic / Place（主题 / 地点） pages may personalize ordering/discovery but remain anchored to the entity intentionally opened. Related/adjacent discovery may supplement without turning the page into generic For You（为你推荐）.

### R10-X2 — Notifications recommendation explicitly deferred / 通知推荐明确延后

Round 10 does not claim a complete Notifications / Delivery（通知 / 投递） architecture. Notification eligibility, urgency, channels, batching, fatigue, quiet hours and notification-specific ranking require a future dedicated module.

### R10-X3 — Anonymous handoff is subordinate to explicit controls / 匿名衔接服从明确用户控制

Scoped handoff cannot bypass Recommendation Reset（推荐重置）, Personalization Opt-out（退出个性化）, Block（屏蔽）, applicable negative preference, login/logout/account-switch isolation, shared-device boundaries or privacy/retention policy.

### R10-X4 — Recommendation operating mode/context is representable / 推荐运行模式与情境可表达

Where material, the pipeline can distinguish normal authenticated personalization, anonymous session, cold start, post-reset, opt-out, experiment/exploration and degraded/fallback operation for explanation, evaluation and invalidation purposes. Mode is not a permanent user label.

### R10-X5 — No paid ranking / commerce insertion is authorized / 不授权付费排序或商业插入

Round 10 does not authorize paid rank boosts, sponsored recommendation, partner-priority ranking, Spatial Flow（空间流） merchandising boosts or commerce content disguised as organic personalization.

### R10-X6 — Rule status taxonomy survives consolidation / 整合必须保留规则状态分类

HARD INVARIANT（硬边界）, HARD PRODUCT DIRECTION / REQUIREMENT（产品级硬方向 / 要求）, ADAPTIVE RULE（弹性规则）, HARDENING（架构加固）, DEFERRED CALIBRATION（延后校准）, SCOPE GUARD（范围护栏） and PROVISIONAL PRODUCT DIRECTION（暂定产品方向） remain distinct.

---

# 11. Explicit deferrals / 明确延后项

Round 10 does **not** freeze:

- exact ranking formula / coefficient / weight table;
- exploration/diversity/trending/long-tail percentages or quotas;
- fixed candidate budgets;
- freshness half-lives / trend windows;
- exact metric targets / survey cadence;
- exact user-control UI / onboarding questionnaire;
- anonymous/session retention duration;
- specific ML（机器学习） model family;
- vector database / graph database / feature store / event bus / search engine / experimentation vendor;
- final homepage visual layout;
- final Topic / Place browse UI;
- notification delivery/ranking architecture;
- paid/sponsored/commerce recommendation rules.

These are later Policy / Configuration / Algorithm / UX / Implementation（策略 / 配置 / 算法 / 用户体验 / 实现） decisions subject to the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

---

# 12. Non-negotiable implementation warnings / 实现阶段不可违反的核心警告

Any future implementation must not:

- collapse all surfaces into one universal feed score;
- treat inferred interest as permanent identity or expertise;
- let popularity/rank create authority or Work Recognition（作品认可）;
- let high relevance bypass rights/privacy/moderation/access eligibility;
- silently merge anonymous/shared-device/cross-device history into a durable account profile;
- let Recommendation Reset（推荐重置） be defeated by stale caches or rollback;
- let Personalization Opt-out（退出个性化） be presentation-only;
- mislabel editorial/sponsored/trending/structural paths as organic personalized preference;
- use experiments/fallback to bypass hard boundaries;
- hard-code adaptive ratios/weights as immutable business truth.

---

# 13. Current status / 当前状态

Round 10 Current Truth V1 is ready for:

1. Source Parity Pass（来源完整性检查） across all 318 controlling rule slots;
2. full Round 10 Adversarial Audit（第十轮整轮对抗性审计） against this consolidated truth;
3. Seal（封存） if those checks pass with no unresolved material blocker.

No product implementation is authorized by this document.