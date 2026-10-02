# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop E（工作坊 E）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Exploration, Diversity, Freshness, Trending & Long-tail Allocation（探索、多样性、新鲜度、趋势与长尾分配）  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 0. Decision at a glance / 本步结论一览

Workshop E 决定的不是“探索占 20% 还是 30%”，而是先定义五种经常被混在一起的分发目标到底各自是什么意思：

| Distribution role（分发角色） | 主要作用 | 不能被误解为 |
|---|---|---|
| Relevance（相关性） | 满足当前任务、兴趣与关系 | 唯一产品目标 |
| Exploration / Serendipity（探索 / 偶然发现） | 主动扩大用户已知范围 | 随机噪音 |
| Freshness（新鲜度） | 在“时效确实重要”的内容上反映时间价值 | 所有新内容都比旧内容好 |
| Trending（趋势） | 反映某个范围与时间窗口内正在快速升温的公共关注 | 权威、真理、长期质量 |
| Long-tail / New-content Opportunity（长尾 / 新内容机会） | 给低历史曝光但仍合格的内容真实进入候选和曝光的机会 | 平均主义或保证流量 |

推荐系统必须允许这些目标**共同参与但保持来源语义分离**。它们可以在 Candidate Retrieval（候选召回）、Ranking（排序）和 Re-ranking / Blending（重排序 / 混排）不同阶段发挥作用，但不能最终被压成一个无法解释的 `discovery_score（发现分数）`。

> **The product allocates opportunity, not guaranteed outcomes. / 平台分配的是被发现的机会，不是保证某类内容获得固定结果。**

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop E inherits:

- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱）, especially Exploration / Diversity / Anti-Filter-Bubble（探索 / 多样性 / 反信息茧房）;
- Round 10 Workshops A–D and all local Hardening Addenda（加固补充）;
- Following（关注） provisional direction: Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）;
- Hybrid Homepage（混合式首页） provisional direction;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Workshop E does **not** authorize fixed percentages, quota formulas, trend equations, freshness half-lives, model families or specific experimentation infrastructure.

---

# 2. Exploration semantics / 探索语义

## R10-E1 — Exploration is an independent product objective / 探索是一项独立产品目标

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Exploration / Serendipity（探索 / 偶然发现） must not exist only as “whatever remains after relevance ranking”. The platform should deliberately preserve room for eligible material outside the user's highest-confidence current interests.

---

## R10-E2 — Exploration is reasoned, not random / 探索必须有理由，不是随机

**HARD INVARIANT（硬边界）.**

Exploration candidates may be justified through adjacent Topic / Place / Knowledge relations（主题 / 地点 / 知识关系）, editorial curation, cultural bridges, emerging trends, long-tail opportunity, new-content discovery, broad-interest value or other defensible routes.

Random low-value injection is not a substitute for exploration architecture.

---

## R10-E3 — Adjacent and broad exploration remain distinguishable / 邻近探索与广域探索必须可区分

**HARDENING（架构加固）.**

Adjacent Exploration（邻近探索） expands near known interests; Broad / Far Exploration（广域 / 远距离探索） deliberately tests more distant but still eligible content.

Their candidate sources, confidence expectations, frequency and feedback interpretation may differ.

---

## R10-E4 — Exploration origin remains attached to exposure / 探索来源必须保留到曝光阶段

**HARDENING inherited from Round 9 / Workshop D（继承第九轮 / 工作坊 D）.**

A candidate shown because of exploration should retain that origin so its click/save/skip is not interpreted as if it came from an established durable-interest lane.

---

## R10-E5 — Exploration does not create durable interest immediately / 探索曝光不能立即制造长期兴趣

**HARD SAFEGUARD（硬保护）.**

One or a few interactions with exploratory content may create new evidence but must not automatically promote the underlying topic/creator/place into strong Durable Interest（长期兴趣）.

---

## R10-E6 — Explicit negative feedback constrains exploration / 明确负反馈同样约束探索

**HARD INVARIANT（硬边界）.**

Not Interested / Show Less / Block（不感兴趣 / 少看 / 屏蔽） and other scoped controls apply to exploration according to their original scope. “探索需要惊喜” cannot be used to ignore explicit user correction.

---

## R10-E7 — Exploration intensity is surface-specific / 探索强度按页面任务定义

**HARD PRODUCT BOUNDARY（产品边界）.**

Explore（探索） may support stronger broad discovery than Home / For You（首页 / 为你推荐）; Search（搜索） must protect Query Intent（查询意图）; Following（关注） remains primarily explicit-relationship delivery; Related / Next（相关推荐 / 下一项） remains anchored to the current object/task.

No one global exploration ratio controls every surface.

---

# 3. Diversity & concentration control / 多样性与集中度控制

## R10-E8 — Diversity is a slate/page/session property / 多样性属于整组、整页与会话层属性

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Even if every item is individually relevant, the final page may still be pathologically repetitive. Diversity must therefore be evaluable beyond per-item score.

---

## R10-E9 — Diversity is multidimensional / 多样性是多维的

**HARD INVARIANT inherited from Round 9（继承第九轮硬边界）.**

Relevant dimensions may include Topic（主题）, Domain（领域）, Place（地点）, creator/source, content/object type, media format, Interest Cluster（兴趣簇）, candidate-source family, freshness state, provenance/authority class and discovery origin.

No one diversity dimension is universally sufficient.

---

## R10-E10 — Diversity is not equal exposure / 多样性不等于平均曝光

**HARD PRODUCT BOUNDARY（产品边界）.**

The system may reduce pathological concentration without assigning mathematically equal page share to every Topic, creator, content type or candidate source.

---

## R10-E11 — Repetition and fatigue remain separate from durable dislike / 重复与疲劳不等于长期不喜欢

**HARD INVARIANT（硬边界）.**

A user may strongly like a Topic（主题） but temporarily not want ten consecutive items from it. Fatigue controls may reduce near-term repetition without rewriting the user's durable interest state.

---

## R10-E12 — Creator/source concentration is distinct from topic concentration / 创作者 / 来源集中与主题集中必须分别处理

**HARDENING（架构加固）.**

Ten items about architecture from ten sources are different from ten items from one creator. Concentration diagnostics and later controls must be able to distinguish these cases.

---

## R10-E13 — Diversity constraints must preserve explicit deep-dive intent / 多样性约束不能破坏用户明确深挖意图

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

If current Session Intent（会话意图） clearly indicates a deliberate deep dive into one Work / Topic / Place（作品 / 主题 / 地点）, anti-filter-bubble diversity must not mechanically scatter the experience merely to hit a diversity target.

---

# 4. Freshness & staleness / 新鲜度与过时性

## R10-E14 — Freshness is content-type and task specific / 新鲜度必须按内容类型与任务解释

**HARD INVARIANT inherited from R10-A37（继承 A37 的硬边界）.**

Freshness may be critical for events, opening hours, local/travel guidance, policy changes or live discussion, while historical/canonical texts and durable scholarship may remain valuable for years or centuries.

No global “newer = better” rule is allowed.

---

## R10-E15 — Publication time, update time and event time are different / 发布时间、更新时间与事件时间必须区分

**HARDENING（架构加固）.**

A recently edited old article is not automatically a newly created work, and a newly published article about an old event is not a current event.

Where material, freshness logic should be able to distinguish at least the relevant temporal semantics rather than rely on one timestamp.

---

## R10-E16 — Material update freshness must reflect real change / 更新带来的新鲜度必须建立在实质变化上

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Minor metadata edits, punctuation changes or superficial republishing must not automatically reset an item's freshness status as if the underlying content had materially changed.

Exact materiality rules remain DEFERRED CALIBRATION（延后校准） / Governance（治理） input where abuse is involved.

---

## R10-E17 — Staleness can reduce recommendation eligibility without deleting historical value / 过时可以影响推荐资格，但不能抹掉历史价值

**HARD PRODUCT BOUNDARY（产品边界）.**

A stale practical guide may be poor proactive-recommendation material while remaining historically searchable, citable or archivable.

Recommendation freshness state must not overwrite object identity or provenance.

---

## R10-E18 — Freshness state must support invalidation/recompute / 新鲜度状态必须可失效与重算

**HARDENING（架构加固）.**

When time-sensitive facts, rights, lifecycle or material updates change, cached freshness/staleness features and downstream candidate eligibility/ranking must be able to update.

---

# 5. Trending / 趋势

## R10-E19 — Trending is scoped collective attention, not universal popularity / 趋势是有范围的群体关注变化，不是全局热门

**HARD INVARIANT（硬边界）.**

Trending（趋势） should be understood relative to a defined time window and scope such as platform-wide, Topic（主题）, Place（地点）, language, content type or another legitimate product context.

One global trend list is not assumed to be sufficient.

---

## R10-E20 — Trend velocity and absolute popularity are different / 趋势增速与绝对热门必须区分

**HARDENING（架构加固）.**

A newly emerging object can be trending without having the largest total audience, while a permanently popular object may have high volume without currently accelerating.

The architecture must not require one metric to represent both concepts.

---

## R10-E21 — Trending never creates authority or truth / 趋势不能制造权威或真理

**HARD INVARIANT（硬边界）.**

Trend status does not create Work Recognition（作品认可）, canonical/source authority, factual reliability, editorial endorsement or Account Trust（账户信任）.

---

## R10-E22 — Trend scope/reason should remain attributable / 趋势范围与原因应可归因

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Where a product surface labels an item as Trending（趋势）, the system should know the relevant scope/time horizon/source reason well enough not to present an opaque universal claim such as “everyone is talking about this” when only a narrow cohort or Topic is involved.

---

## R10-E23 — Trend signals are manipulation-sensitive / 趋势信号天然容易被操纵

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Trend computation and distribution must be compatible with later anti-spam / anti-coordination / abuse controls. Raw volume alone cannot be treated as self-authenticating evidence of genuine public interest.

Exact anti-manipulation methods are deferred to Governance / Moderation（治理 / 审核） and implementation.

---

## R10-E24 — Trending contribution must decay / 趋势贡献必须随时间衰减

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Trend status is temporally bounded by definition. A former trend cannot remain indefinitely boosted solely because it was once trending.

Exact windows and decay functions remain DEFERRED CALIBRATION（延后校准）.

---

## R10-E25 — Trend exposure does not automatically become personal interest / 趋势曝光不能自动变成个人兴趣

**HARD INVARIANT inherited from Round 9（继承第九轮硬边界）.**

A user may click trending content to understand public discussion, controversy or current events without endorsing it or developing a durable personal interest.

Trend-origin exposure context should remain available where proportionate.

---

# 6. Long-tail & new-content opportunity / 长尾与新内容机会

## R10-E26 — Low exposure is not low quality / 低曝光不等于低质量

**HARD INVARIANT（硬边界）.**

Historical exposure volume is partly produced by prior recommendation decisions, follower networks, publication timing and chance. Low traffic must not be treated as proof of low value.

---

## R10-E27 — New content needs candidate access before it has interaction history / 新内容在没有互动历史前也必须拥有候选入口

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Eligible new content should be able to enter recommendation through Topic / Place fit（主题 / 地点匹配）, explicit follows, editorial paths, provenance/quality evidence, exploration or other legitimate cold-start routes.

---

## R10-E28 — Long-tail opportunity is not guaranteed distribution / 长尾机会不等于保证分发

**HARD PRODUCT BOUNDARY（产品边界）.**

Project 3 should preserve real opportunity for niche / low-exposure content to be evaluated and surfaced. It does not promise equal impressions, creator parity or automatic promotion.

---

## R10-E29 — Creator fairness and item relevance remain separate objectives / 创作者机会与单条内容相关性仍是不同目标

**HARD INVARIANT inherited from Workshop A（继承工作坊 A）.**

A new creator may deserve discovery opportunity, but creator-opportunity allocation must not be falsely described as predicted personal relevance.

---

## R10-E30 — Long-tail opportunity must be resistant to reset gaming / 长尾机会必须防止“反复重置成新内容”的利用

**HARDENING（架构加固）.**

Duplicate reposting, trivial edits, delete-and-republish behavior or other attempts to repeatedly regain “new / low-exposure” treatment must be compatible with future duplicate/version identity and abuse controls.

The architecture must not define newness solely from a newly minted row ID or timestamp.

---

## R10-E31 — Exploration opportunity can end without declaring content bad / 探索机会结束不代表内容质量差

**HARDENING（架构加固）.**

A candidate may receive bounded exploration and later lose exploration allocation because evidence is insufficient, inventory changes or policy shifts. That outcome does not itself become a permanent negative quality label on the content or creator.

---

# 7. Allocation & blending semantics / 分配与混排语义

## R10-E32 — Allocation budgets are Policy / Algorithm / Configuration, not ontology / 分配预算属于策略 / 算法 / 配置，不属于本体

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Future exploration budgets, freshness boosts, trend caps, long-tail lanes, creator repetition caps or source-family limits must remain versionable and adjustable.

No permanent percentage is encoded as a property of the content object.

---

## R10-E33 — Multiple objectives may receive separate candidate lanes before blending / 多目标可以先保持独立候选通道再混排

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Where useful, relevance, exploration, trend, freshness, editorial and long-tail supply may remain distinguishable through retrieval/ranking before page-level blending.

This preserves diagnosability and prevents one dominant score from erasing source purpose.

---

## R10-E34 — Allocation must be observable at source and exposure levels / 分配必须在候选来源与最终曝光层可观察

**HARDENING（架构加固）.**

The platform should be able to detect whether a nominal exploration / long-tail / freshness / trend path contributes candidates but almost never survives to final exposure, or whether one lane unexpectedly dominates the page.

Observability does not imply fixed quotas.

---

## R10-E35 — Scarce inventory may legitimately change composition / 候选稀缺时页面组合可以合理变化

**ADAPTIVE RULE（弹性规则）.**

If a surface lacks enough eligible high-quality candidates for one lane, the product may reduce or omit that lane rather than fill it with low-value or ineligible material merely to satisfy a target ratio.

---

## R10-E36 — Allocation reasons remain distinct from user-interest inference / 分配原因必须与用户兴趣推断分离

**HARD INVARIANT（硬边界）.**

An item may be shown because it is trending, new, editorially selected, long-tail, exploratory or freshness-sensitive. The system must not rewrite those reasons into “the user likes this Topic” unless separate interest evidence supports that conclusion.

---

# 8. Evaluation & learning / 评估与学习

## R10-E37 — Exploration success is not click-only / 探索成功不能只看点击

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Useful exploration may manifest as Save（收藏）, later return, Follow（关注）, extended reading, cross-topic navigation, durable discovery breadth or explicit positive/negative feedback. Immediate click rate alone is insufficient.

---

## R10-E38 — Trend and novelty metrics must not become self-fulfilling popularity loops / 趋势与新颖度指标不能形成自我实现的热门循环

**HARD SAFEGUARD（硬保护）.**

Extra exposure caused by trend/newness allocation must remain distinguishable from organic baseline evidence where proportionate so “推荐更多 → 互动更多 → 因互动更多继续推荐更多” does not become an unobservable feedback loop.

---

## R10-E39 — Long-tail evaluation needs opportunity context / 长尾评估需要理解实际曝光机会

**HARDENING（架构加固）.**

Low interaction after almost no meaningful exposure is not equivalent to poor performance after adequate opportunity. Evaluation should retain enough exposure context to distinguish these cases where material.

---

## R10-E40 — Exact allocation math remains deferred / 精确分配数学模型延后决定

**SCOPE GUARD（范围护栏）.**

Workshop E does not set fixed exploration percentage, diversity target, trend window, long-tail quota, freshness decay, creator cap, novelty bonus or one universal optimization formula.

Those are future Algorithm / Policy / Calibration（算法 / 策略 / 校准） choices that must be versionable, measurable and reversible.

---

# 9. Current visible product picture / 当前可见产品形态

After Workshop E, Project 3's recommendation allocation should be understood as:

1. strong relevance remains important but does not monopolize the product;
2. exploration is deliberate and reasoned, not random;
3. adjacent and broad exploration are distinguishable;
4. diversity is page/session-level and multidimensional;
5. fatigue control does not rewrite durable interest;
6. freshness is task/content-type specific and cannot be hacked by trivial edits;
7. Trending（趋势） is scoped, temporary collective attention, not authority;
8. new / low-exposure content has genuine candidate and exposure opportunity before historical engagement exists;
9. long-tail opportunity is not equal-exposure entitlement;
10. relevance / exploration / trend / freshness / editorial / long-tail roles may stay distinguishable until blending;
11. allocation budgets remain evolvable rather than fixed percentages;
12. exposure-created feedback loops must be diagnosable;
13. exact formulas remain deferred.

---

# 10. Explicitly deferred / 明确延后

- exact exploration percentage / budget;
- exact adjacent-vs-broad exploration mix;
- exact diversity objective or constraint function;
- exact Topic / creator / source repetition caps;
- exact freshness half-life / boost / stale threshold by content type;
- exact trend detection algorithm, window, velocity formula and scope taxonomy;
- exact long-tail / new-content exposure allocation;
- exact manipulation-detection method;
- exact online/offline evaluation metrics;
- final UX（用户体验） labels and visual placement.

No implementation is authorized by Workshop E.
