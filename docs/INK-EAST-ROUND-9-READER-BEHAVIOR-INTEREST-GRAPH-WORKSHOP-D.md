# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Workshop D（工作坊 D）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Exploration, Diversity & Anti-Filter-Bubble Architecture（探索、多样性与反信息茧房架构） — define how Project 3 preserves discovery and serendipity while still learning user interests, before final ranking algorithms are designed.

Inputs:
- `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`
- `docs/INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-A.md`
- `docs/INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-B.md`
- `docs/INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-C.md`

Standing principle: **Personalization should improve relevance without reducing the user's world to predicted past behavior. Exploration（探索） is a deliberate product objective, not leftover randomness.**

---

## R9-D1 — Relevance and exploration are separate objectives / 相关性与探索是两个不同目标

**HARD PRODUCT DIRECTION（产品级硬方向）.**

A recommendation system that only maximizes predicted immediate relevance may create self-reinforcing narrowness. Project 3 must preserve the ability to deliberately surface material outside high-confidence interests.

---

## R9-D2 — Exploration is not random noise / 探索不等于随机塞内容

**HARD INVARIANT（硬边界）.**

Exploration candidates should still satisfy eligibility, quality/safety constraints and some reasonable discovery logic. Randomness may be one tool, but “not personalized” does not mean “unrelated or low-value”.

---

## R9-D3 — Adjacent discovery and far discovery are different / 邻近探索与远距离探索需要区分

**HARDENING（架构加固）.**

The platform may distinguish:
- Adjacent Exploration（邻近探索）: content related to established interests through credible Topic / Place / Knowledge relations;
- Broad / Far Exploration（广泛 / 远距离探索）: content from weakly related or unrelated domains intended to create serendipity.

These may use different policies and frequencies.

---

## R9-D4 — One dominant interest cluster must not monopolize Home / For You by default / 单一高强度兴趣簇默认不能垄断首页推荐

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Even when one Interest Cluster（兴趣簇） generates strong short-term engagement, Home / For You（首页 / 为你推荐） must retain architectural room for other established interests and exploration candidates.

Exact blend ratios remain DEFERRED CALIBRATION（延后校准）.

---

## R9-D5 — Deep-dive intent may temporarily justify concentration / 用户明确深挖某主题时可暂时提高集中度

**ADAPTIVE RULE（弹性规则）.**

Anti-filter-bubble design must not fight the user when current intent is clearly focused, such as repeated search/refinement within one Topic（主题）, Place（地点） or Work（作品）.

Session-level concentration may increase temporarily without rewriting durable interests.

---

## R9-D6 — Diversity must be evaluated across the slate/page/session, not only per item / 多样性需要看整页、整组、整次会话，而不是单条内容

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Individually relevant recommendations can still create a repetitive page. Later Re-ranking / Blending（重排序 / 混排） must be able to reason about the composition of a group/page/session.

---

## R9-D7 — Diversity has multiple dimensions / 多样性是多维度的

**HARD INVARIANT（硬边界）.**

Relevant dimensions may include Topic（主题）, Domain（领域）, Place（地点）, creator/source, content type, media format, interest cluster, freshness, authority/provenance class and social/publication origin.

These dimensions must not be collapsed into one universal diversity score at the product-model level.

---

## R9-D8 — Repetition/fatigue is separate from lack of interest / 重复疲劳与“不感兴趣”不同

**HARD INVARIANT（硬边界）.**

A user can strongly like a Topic but still become fatigued by repeated similar items, the same creator or the same content format.

Fatigue controls should be able to reduce near-term repetition without erasing durable interest.

---

## R9-D9 — Creator repetition and Topic repetition may need separate controls / 作者重复与主题重复需要可分别控制

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

The system should be able to limit excessive consecutive exposure from one creator while still showing the same Topic from other sources, or diversify Topics while preserving a followed creator when appropriate.

---

## R9-D10 — Exploration feedback keeps weaker promotion semantics at first / 探索内容产生的反馈初期应采用更谨慎的兴趣升级语义

**HARDENING inherited from Workshops A/C（继承前面工作坊的架构加固）.**

One click/open on deliberately exploratory content must not be treated identically to repeated self-directed searches, follows or returns.

Exploration-origin context must remain available to prevent immediate runaway self-reinforcement.

---

## R9-D11 — Popularity may help discovery but cannot monopolize candidate supply / 热度可以帮助发现，但不能垄断候选供给

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Trending/popular signals may contribute candidates, especially in cold start, but the architecture must allow lower-traffic eligible content to enter discovery pools through topical fit, quality, curation, freshness, long-tail exploration or other routes.

Popularity is not the only discovery gate.

---

## R9-D12 — Long-tail discovery is a product value, not guaranteed equal exposure / 长尾发现是产品价值，但不等于强制平均曝光

**HARDENING（架构加固）.**

Project 3 should preserve opportunity for niche/high-value content to be discovered. This does not create an entitlement that every creator receives identical impressions.

Discovery fairness and creator exposure equality are different concepts.

---

## R9-D13 — Eligibility and governance state constrain exploration / 探索推荐必须先服从内容资格与治理状态

**HARD INVARIANT（硬边界）.**

Diversity/exploration must not bypass moderation, privacy, legal, lifecycle or content-eligibility constraints merely to fill a diversity quota.

Exploration operates only over eligible inventory.

---

## R9-D14 — Diversity cannot manufacture authority / 多样性机制不能制造权威

**HARD INVARIANT（硬边界）.**

A content item included to diversify Home / For You（首页 / 为你推荐） does not become Recognized（被认可）, editorially endorsed, canonically authoritative or source-reliable merely because the system chose to expose it.

Authority/provenance labels remain intact.

---

## R9-D15 — Different surfaces may carry different exploration obligations / 不同页面可以有不同探索强度

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Home / For You（首页 / 为你推荐）, Explore（探索）, Following（关注）, Search（搜索）, Topic（主题）, Place（地点） and Related / Next（相关推荐 / 下一项） do not need the same exploration policy.

Examples of direction:
- Explore may be broadest;
- Following may prioritize explicit follows more strongly;
- Search should respect explicit query intent more strongly;
- Home / For You should blend relevance with broader discovery.

Exact policies remain adaptive.

---

## R9-D16 — Search intent should not be diluted by anti-filter-bubble rules / 搜索场景不能为了反茧房而强行稀释明确搜索意图

**HARD INVARIANT（硬边界）.**

When the user explicitly searches for a target, relevance to that query is the primary objective. Exploration may exist in secondary modules or related suggestions, but must not sabotage the user's explicit task.

---

## R9-D17 — Explore should remain structurally capable of surprising the user / 探索页必须保留真正“意外发现”的能力

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Explore（探索） must not become merely another copy of Home / For You with slightly weaker personalization. It should support broader cross-domain, editorial, trending, long-tail and serendipitous discovery modes.

---

## R9-D18 — Cold start should deliberately sample breadth / 冷启动阶段应主动提供一定广度

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

New users with little behavioral history may receive a controlled mix of declared interests, editorially useful material, broadly popular content and cross-domain exploration rather than a narrow guess from the first few clicks.

---

## R9-D19 — Explicit negative feedback constrains exploration too / 明确负反馈同样约束探索内容

**HARD INVARIANT（硬边界）.**

The system must not repeatedly reintroduce content the user explicitly asked to see less of under the excuse that it is “exploration”. Scope and duration remain policy-driven, but negative preference must remain meaningful.

---

## R9-D20 — Sensitive/risky discovery requires separate governance policy / 敏感或高风险内容的探索需要单独治理策略

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

The recommender must not aggressively explore into sensitive/risky categories solely because they are adjacent or engaging. Category-specific eligibility, age/jurisdiction/privacy/safety rules may further restrict exploration later.

Round 9 does not define those detailed policies.

---

## R9-D21 — Continuation intent and discovery intent are different / 连续阅读与探索新内容是不同意图

**HARD INVARIANT（硬边界）.**

Continuing a series, thread, course-like sequence, Work（作品） or reading path may justify high local continuity. This is different from broad homepage discovery and should not be forced through one identical diversity objective.

---

## R9-D22 — User-selected modes may later expose different discovery behavior / 未来可允许用户选择不同发现模式

**ADAPTIVE LONG-TERM DIRECTION（弹性长期方向）.**

Project 3 should not architect itself around one mandatory For You（为你推荐） feed. Following（关注）, Explore（探索）, Topic / Place（主题 / 地点）, chronological/curated modes or future user-selectable feed definitions may coexist.

Exact early-V1 surface set remains product-scope work.

---

## R9-D23 — Diversity optimization must not optimize only immediate engagement / 多样性优化不能只看即时互动

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Evaluation should eventually consider longer-term satisfaction, return behavior, discovery breadth, fatigue reduction and meaningful exploration rather than judging diversity only by immediate clicks/likes.

Exact metrics remain deferred.

---

## R9-D24 — No single universal “engagement maximization” objective / 不采用单一“互动最大化”总目标

**HARD INVARIANT（硬边界）.**

Project 3's later recommender must preserve multi-objective capability. Relevance, satisfaction, diversity, exploration, continuity, freshness, governance eligibility and user control may all matter depending on surface/context.

Weights and optimization method remain deferred.

---

## R9-D25 — Diversity constraints are policy/configuration, not ontology / 多样性约束属于策略或配置，不属于内容本体

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Topic repetition caps, creator exposure caps, exploration intensity, novelty budgets and blend rules must be treated as Policy / Configuration / Algorithm（策略 / 配置 / 算法） concerns that can evolve without redefining content identity.

---

## R9-D26 — Major exploration-policy changes should support shadow testing and staged rollout / 重大探索策略变化应支持影子测试与灰度发布

**ARCHITECTURAL REQUIREMENT（架构要求）.**

Changes that materially alter feed concentration/diversity should be testable against current behavior, measurable for unexpected narrowing or quality loss, and rollable out gradually where proportionate.

---

## R9-D27 — Re-ranking/blending remains conceptually separate from candidate retrieval / 重排序与混排在概念上与候选召回分离

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

A retrieval stage may find highly relevant candidates; a later composition stage may enforce diversity, fatigue control, eligibility and product constraints across the slate/page.

Even if early V1 implements both simply, the conceptual boundary should remain.

---

## R9-D28 — Anti-filter-bubble safeguards themselves remain adaptive / 反信息茧房保护本身也必须可演进

**HARDENING（架构加固）.**

There must not be one permanent fixed “20% exploration” rule. Exploration/diversity treatment should be calibrated by surface, maturity, user intent, inventory, content type and real outcomes, with versioning and rollback where material.

---

# Current visible product picture / 当前可见产品形态

At this checkpoint, Project 3 personalization is not meant to become a closed feedback loop:

1. relevance and exploration coexist;
2. exploration is purposeful, not random filler;
3. adjacent and far discovery are different mechanisms;
4. one strong interest cluster cannot automatically consume the whole Home / For You experience;
5. focused session intent may temporarily override broad-diversity pressure;
6. diversity is evaluated across the page/session and across multiple dimensions;
7. fatigue/repetition can be reduced without erasing genuine interest;
8. long-tail eligible content may receive discovery routes without guaranteeing equal exposure;
9. explicit negative feedback still constrains exploration;
10. different surfaces can use different exploration policies;
11. retrieval and final page composition remain conceptually separate;
12. exact exploration ratios/weights remain unsealed and data-driven.

# Product choices intentionally still open / 仍明确开放的产品选择

No major product fork blocks Workshop D. Deferred:
- exact exploration percentage/budget by surface;
- exact diversity dimensions/weights and repetition caps;
- whether users see an explicit “探索推荐” label;
- exact long-tail/new-creator sampling policy;
- exact user-selectable feed modes in early V1;
- specific online/offline evaluation metrics;
- exact re-ranking algorithm.

# Next review area / 下一审查区域

Next Round 9 work should examine Privacy, Retention & Interest-Data Lifecycle（隐私、保留与兴趣数据生命周期）: what raw behavior is actually necessary, what can be aggregated or discarded, how anonymous/session state is separated, how reset/deletion interacts with derived features, and how personalization data remains purpose-limited before Round 9 consolidation.