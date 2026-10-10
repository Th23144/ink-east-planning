# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop A（工作坊 A）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Discovery Surfaces & Candidate Supply Architecture（发现页面与候选供给架构） — define what recommendation surfaces are trying to do, where recommendation candidates may come from, and which boundaries must remain true before ranking formulas/models are designed.

Inputs:
- `docs/INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md`
- `docs/INK-EAST-ROUND-9-SEAL-RECORD.md`
- `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md` as Research Input（研究输入）, not Architecture Truth（架构定论）;
- Round 8 Community & Discussion（社区与讨论） current truth;
- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源） current truth;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Standing principle:

> **Recommendation is a controlled discovery process over eligible platform objects, not a single engagement score and not one universal feed algorithm. / 推荐是在合格平台对象上的受控发现过程，不是单一互动分，也不是一个全站通吃的算法。**

Round 10 inherits the prior anti-copy discipline: mature platforms are reference systems for problems and mechanisms, not templates for Project 3's objective function.

---

## R10-A1 — Discovery & Recommendation is a multi-surface system / 发现与推荐是多页面系统

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Home / For You（首页 / 为你推荐）, Following（关注）, Explore（探索）, Topic（主题）, Place（地点）, Search（搜索）, Related / Next（相关推荐 / 下一项）, Notifications（通知） and future curated/specialized surfaces may all consume shared platform objects while using different retrieval, ranking and composition policies.

One global score/order must not silently control all surfaces.

---

## R10-A2 — Surface objective is explicit before ranking is designed / 排序前必须先定义页面目标

**HARD INVARIANT（硬边界）.**

Each recommendation surface must declare its primary product task before models/weights are chosen.

Examples:
- Search（搜索）: satisfy explicit query intent;
- Following（关注）: deliver content/updates from explicit follows with understandable ordering;
- Home / For You（首页 / 为你推荐）: balance relevance, continuity and broader discovery;
- Explore（探索）: broaden discovery and serendipity;
- Related / Next（相关推荐 / 下一项）: continue from the current object/task;
- Notifications（通知）: surface sufficiently valuable/time-sensitive events while controlling fatigue.

Examples are directional and do not freeze exact algorithms.

---

## R10-A3 — Candidate supply is multi-source / 候选内容必须来自多种来源

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

A mature recommender should be able to combine candidates from several sources rather than depending on one retrieval mechanism.

Possible source families include:
- explicit-follow candidates;
- Interest Graph（兴趣图谱） candidates;
- Knowledge Graph（知识图谱） adjacency candidates;
- Topic / Place / content-type candidates;
- continuation/series/thread candidates;
- editorial/curated candidates;
- Recognized / selected quality-layer candidates;
- freshness/new-content candidates;
- popular/trending candidates;
- long-tail/new-creator exploration candidates;
- collaborative/similar-behavior candidates;
- direct context/session candidates.

No source family is guaranteed rank merely by being present.

---

## R10-A4 — Candidate source identity remains observable / 候选来源必须可识别

**HARDENING（架构加固）.**

Where material, downstream ranking/composition should know why a candidate entered the pool: Follow（关注）, Topic（主题）, Place（地点）, related Work（作品）, Interest Cluster（兴趣簇）, editorial selection, trending, exploration, continuation, etc.

Candidate-source provenance supports explanation, debugging, diversification, policy changes and future model evaluation.

---

## R10-A5 — Retrieval eligibility precedes relevance scoring / 候选资格先于相关性评分

**HARD INVARIANT（硬边界）.**

A high predicted relevance score cannot make an ineligible object recommendable.

Privacy, lifecycle, moderation, legal/rights, access/membership, audience, geographic/jurisdictional and other applicable eligibility constraints must be enforced before or as a hard gate around recommendation exposure.

---

## R10-A6 — Recommendation cannot manufacture authority / 推荐不能制造权威

**HARD INVARIANT inherited from Rounds 3/7/8/9（继承前轮硬边界）.**

High ranking, frequent recommendation, popularity or predicted affinity does not create Work Recognition（作品认可）, source authority, factual truth, Contributor Qualification（贡献者资格） or governance credibility.

Recommendation may display existing authority/provenance/Recognition state but cannot create it by exposure.

---

## R10-A7 — Recognized/quality-layer status may be a candidate signal, not an automatic winner / 高认可状态可以提供候选信号，但不能自动赢得排序

**HARD PRODUCT BOUNDARY（产品边界）.**

Recognized / selected works may legitimately receive candidate-supply or quality features appropriate to the surface, but they must not consume all recommendation opportunity or bypass user intent/context.

A user searching for a practical Place guide should not be forced into unrelated high-recognition essays merely because they carry prestige.

---

## R10-A8 — Editorial curation is a distinct candidate source / 编辑策展是独立候选来源

**HARD INVARIANT（硬边界）.**

Editorially curated content may enter recommendation/discovery pools as an attributable candidate source. It remains distinguishable from machine-personalized, socially popular, explicitly followed and Recognized content.

Editorial inclusion is not silently re-described as “the algorithm inferred you like this”.

---

## R10-A9 — Popular/trending supply is useful but bounded / 热门与趋势候选可用但必须受限

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Trending/popular content may help cold start, temporal relevance and collective discovery, but popularity must not become the universal discovery gate.

Long-tail, niche, high-value and new content must retain viable candidate paths.

---

## R10-A10 — Following is explicit relationship evidence, not merely another affinity score / 关注是明确关系，不只是普通兴趣分

**HARD INVARIANT（硬边界）.**

Explicit Follow（关注） relationships must remain observable and should have a dedicated route into relevant surfaces.

A learned model may order or filter within product policy, but it must not silently erase the distinction between “the user chose to follow this” and “the model inferred affinity”.

---

## R10-A11 — Following surface must remain meaningfully faithful to explicit follows / 关注页必须对用户明确关注保持实质忠实

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Following（关注） may use freshness, relevance, deduplication, fatigue control or other ordering logic, but it must not become an opaque duplicate of For You（为你推荐） where followed-source content can be routinely displaced by unrelated recommendations.

Exact chronological vs ranked behavior remains a later product calibration unless separately chosen.

---

## R10-A12 — Home / For You blends candidate families, not one interest lane / 首页推荐需要混合候选来源，不是单一兴趣通道

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Home / For You（首页 / 为你推荐） should be able to blend established interests, recent/session intent, explicit follows, continuation, editorial/quality candidates, freshness, long-tail opportunities and deliberate exploration.

One dominant Interest Cluster（兴趣簇） must not monopolize the surface by default.

---

## R10-A13 — Explore is structurally broader than Home / For You / 探索页结构上必须比首页推荐更开放

**HARD PRODUCT DIRECTION inherited from Round 9（继承第九轮产品方向）.**

Explore（探索） must preserve candidate sources that reach beyond high-confidence personalization, including editorial, cross-domain, long-tail, trending/new, Topic/Place discovery and other serendipitous supply.

It must not degrade into “For You with lower confidence”.

---

## R10-A14 — Search ranking remains query-led / 搜索排序以明确查询意图为主

**HARD INVARIANT（硬边界）.**

Search（搜索） personalization may assist tie-breaking, language/format/context or related modules, but explicit query relevance remains primary.

Anti-filter-bubble or exploration policy must not sabotage the direct search task.

---

## R10-A15 — Related / Next is anchored to the current object/task / 相关推荐与下一项必须锚定当前对象或任务

**HARD PRODUCT BOUNDARY（产品边界）.**

Related / Next（相关推荐 / 下一项） should primarily derive from the current Work（作品）, Topic（主题）, Place（地点）, thread, series, reading path or current task, then optionally incorporate user context.

It must not simply reuse the generic Home ranking result.

---

## R10-A16 — Continuation candidates are different from discovery candidates / 连续阅读候选与探索候选不同

**HARD INVARIANT（硬边界）.**

Next chapter, next item in a series, followed discussion updates, unfinished reading and other continuation candidates represent continuity intent, not general discovery.

They may receive special supply/placement treatment without being interpreted as durable topic preference.

---

## R10-A17 — Knowledge Graph adjacency can retrieve, but not dictate rank / 知识图谱邻接可用于召回，但不能直接决定排名

**HARD INVARIANT（硬边界）.**

Relations among Work / Person / Place / Topic / Claim / Collection and other Knowledge Graph（知识图谱） objects may generate related candidates.

Graph closeness is candidate evidence, not proof that the user wants every adjacent object or that adjacent objects are semantically equivalent.

---

## R10-A18 — Interest Graph is one retrieval/ranking input, not the recommender itself / 兴趣图谱是输入之一，不等于推荐系统本身

**HARD INVARIANT（硬边界）.**

Round 9 Interest Graph（兴趣图谱） provides relevance hypotheses and explicit/inferred preference state. Discovery & Recommendation（发现与推荐） combines that evidence with surface intent, eligibility, inventory, exploration, quality/provenance state, freshness and product composition constraints.

---

## R10-A19 — Candidate retrieval, ranking and page composition remain distinct conceptual stages / 候选召回、排序与页面组合保持概念分层

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Project 3 preserves the conceptual pipeline:

`Eligibility / Inventory（资格 / 内容库存） → Candidate Retrieval（候选召回） → optional Pre-ranking（可选预排序） → Ranking（排序） → Re-ranking / Blending（重排序 / 混排） → Presentation（展示）`

Early V1 may collapse implementation stages for simplicity, but must not collapse their semantics so future scale requires rewriting product truth.

---

## R10-A20 — Candidate retrieval maximizes useful coverage, not final order / 候选召回追求有用覆盖，不承担最终排序职责

**HARDENING（架构加固）.**

Retrieval should find a sufficiently broad, eligible set of plausible candidates from different sources. It need not perfectly order them.

Final relevance, diversity, fatigue, authority-label preservation and product constraints belong downstream.

---

## R10-A21 — Pre-ranking is optional and scale-driven / 预排序是可选的规模化阶段

**ADAPTIVE ARCHITECTURAL RULE（弹性架构规则）.**

Pre-ranking（预排序） may later reduce a large candidate set cheaply before expensive ranking. Small V1 traffic/inventory may not need a separate service/model.

The architecture preserves the stage without requiring premature infrastructure.

---

## R10-A22 — Ranking is task-specific and multi-objective / 排序必须按任务并支持多目标

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Ranking may consider relevance/current intent, explicit relationships, satisfaction/value proxies, freshness, continuation, quality/provenance features, exploration need and other surface-appropriate signals.

No universal `recommendation_score` is authorized as the sole truth across surfaces.

---

## R10-A23 — Re-ranking / blending enforces page-level product constraints / 重排序与混排负责整页产品约束

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Re-ranking / Blending（重排序 / 混排） may control repeated creators/topics/formats, exploration allocation, source balance, continuation placement, deduplication, fatigue, safety/eligibility changes and page/slate composition after individual relevance ranking.

This stage must not falsify source interest signals merely to achieve composition goals.

---

## R10-A24 — Duplicate/near-duplicate suppression is a product concern / 重复与近重复抑制属于推荐产品职责

**HARDENING（架构加固）.**

A candidate pool may contain the same underlying object through several retrieval routes or near-duplicate content from several sources. Recommendation composition must support deduplication and repetition control while preserving legitimate edition/version/object distinctions from Round 7.

---

## R10-A25 — New/low-exposure content needs a real discovery path / 新内容与低曝光内容必须拥有真实发现路径

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Newness, low traffic or low follower count must not make eligible content impossible to retrieve. Candidate-supply architecture must preserve exploration/quality/topic/editorial or other routes that can surface strong content before it already has engagement history.

This is opportunity, not guaranteed ranking.

---

## R10-A26 — Creator opportunity and user relevance remain different objectives / 创作者机会与用户相关性是不同目标

**HARD INVARIANT（硬边界）.**

Project 3 may allocate exploration opportunity to new/low-traffic creators or content, but must not pretend that creator-fairness allocation is identical to user predicted preference.

Where used, the candidate/source reason remains distinguishable and final composition balances both product goals.

---

## R10-A27 — Candidate-source quotas/caps are evolvable policy, not ontology / 候选来源配额与上限属于可演进策略，不属于本体

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Future rules such as maximum repeated creator items, exploration budgets, minimum candidate-source diversity, new-content budgets or editorial allocation are Policy / Configuration / Algorithm（策略 / 配置 / 算法） concerns.

They must not be hard-coded as permanent object properties.

---

## R10-A28 — Recommendation explanations should be able to name dominant candidate/relevance reasons / 推荐解释应能说明主要候选与相关原因

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The architecture should support truthful explanations such as “来自你关注的主题”, “与你正在阅读的作品相关”, “因为你关注了这个地点”, “编辑精选”, “探索内容”, “近期热门” or equivalent.

Explanation need not expose proprietary model internals or every contributing feature.

---

## R10-A29 — Recommendation decisions must remain versionable where material / 重大推荐决策逻辑必须可版本化

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Material changes to candidate sources, eligibility policy, ranking objective, exploration allocation, re-ranking constraints or surface behavior must support Model / Policy Version（模型 / 策略版本）, impact analysis, shadow/offline evaluation where proportionate, staged rollout, rollback and derived-state invalidation as applicable.

---

## R10-A30 — No ranking model or infrastructure stack is approved in Workshop A / 工作坊 A 不批准具体排序模型或基础设施

**SCOPE GUARD（范围护栏）.**

Workshop A does not mandate Two-Tower（双塔模型）, Transformer（变换器模型）, Graph Neural Network（图神经网络）, Learning-to-Rank（学习排序）, Contextual Bandit（上下文多臂老虎机）, Reinforcement Learning（强化学习）, LLM（大语言模型）, Vector Database（向量数据库）, Feature Store（特征存储） or event-stream technology.

The product architecture must survive algorithm and infrastructure replacement.

---

# Current visible product picture / 当前可见产品形态

At this checkpoint, Project 3 Discovery & Recommendation（发现与推荐） should be understood as:

1. several recommendation/discovery surfaces with distinct tasks;
2. one shared platform object network, not duplicated content silos;
3. multiple candidate-supply routes rather than one popularity/embedding source;
4. eligibility before relevance;
5. Interest Graph（兴趣图谱） as one input rather than the whole recommender;
6. explicit follows preserved as explicit relationships;
7. Home / For You（首页 / 为你推荐） as a blended discovery surface;
8. Explore（探索） as structurally broader discovery;
9. Search（搜索） as query-led;
10. Related / Next（相关推荐 / 下一项） as current-object/task-led;
11. Candidate Retrieval → optional Pre-ranking → Ranking → Re-ranking / Blending（候选召回 → 可选预排序 → 排序 → 重排序 / 混排） as the scalable conceptual pipeline;
12. long-tail/new content has candidate access without guaranteed rank;
13. recommendation does not manufacture authority/Recognition;
14. exact models, weights, quotas and infrastructure remain deferred.

# Product choices intentionally still open / 仍明确开放的产品选择

Workshop A does **not** yet decide:
- whether Home / For You（首页 / 为你推荐） is primarily an endless feed, a modular/shelf homepage, or a hybrid;
- whether Following（关注） defaults to chronological, ranked, or user-selectable modes;
- exact candidate-source budgets/quotas/caps;
- exact ranking objectives/weights per surface;
- exact Trending（趋势） product definition;
- exact long-tail/new-creator exploration budget;
- whether recommendation explanations show one reason or several;
- exact model families and serving infrastructure.

These are genuine product/calibration questions for later Round 10 workshops rather than hidden assumptions in Workshop A.

# Next review area / 下一审查区域

Workshop B（工作坊 B） should examine **Home / For You Composition & Ranking Objectives（首页推荐的页面组合与排序目标）**, including the genuine product choice between endless-feed, modular/shelf, and hybrid composition; how multi-interest clusters are represented on one page/session; how continuation, editorial/quality, following and exploration candidates are blended; and what the platform optimizes beyond immediate engagement.
