# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop C（工作坊 C）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Following / Explore / Search / Related Surface Semantics（关注 / 探索 / 搜索 / 相关推荐页面语义）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Open product decision:** Following（关注）默认排序模式仍待用户确认；本文件给出推荐，不先锁死。

---

## 0. Decision at a glance / 本步结论一览

Round 10 到这里不再把 Discovery（发现）理解成“一套算法控制所有页面”。

四个专门页面的核心任务应保持不同：

| Surface（页面） | Primary task（主要任务） | Personalization role（个性化作用） |
|---|---|---|
| Following（关注） | 忠实交付用户明确关注对象的内容与更新 | 可排序、去重、疲劳控制，但不能把明确关注关系抹掉 |
| Explore（探索） | 主动扩大用户已知世界之外的发现范围 | 可以辅助，但不能退化成低置信度 For You（为你推荐） |
| Search（搜索） | 满足明确 Query Intent（查询意图） | 主要用于消歧、语言/格式、轻量 tie-break（并列打破），不能覆盖查询本身 |
| Related / Next（相关推荐 / 下一项） | 延续当前对象、阅读路径或任务 | 以当前对象/结构关系为主，个人兴趣只能作为辅助 |

共同边界：

> **Dedicated surfaces must preserve the user's explicit task. / 专门页面必须忠实于用户主动进入该页面时表达的任务。**

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop C inherits:

- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱）;
- Round 10 Workshop A + A31…A37 hardening;
- Round 10 Workshop B + B36…B39 hardening;
- user-selected C — Hybrid Homepage（混合式首页） as a provisional direction;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Workshop C does not authorize exact ranking weights, ML（机器学习） models, search engine technology, vector infrastructure or UI（用户界面） layout.

---

# 2. Following / 关注

## R10-C1 — Following is an explicit-relationship surface / 关注页是明确关系页面

**HARD INVARIANT（硬边界）.**

Following（关注） exists primarily to deliver eligible content, updates or activity from targets the user explicitly chose to follow.

It must not be treated as another generic affinity feed.

---

## R10-C2 — Unrelated recommendations cannot silently occupy the core Following inventory / 无关推荐不能静默占据关注页核心内容

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The main Following inventory should come from explicit Follow（关注） relationships and their legitimately associated updates.

If future UX includes discovery suggestions inside Following, they must be clearly secondary/separate rather than indistinguishable from followed-source content.

---

## R10-C3 — Follow relationship survives weak engagement / 关注关系不能因为低互动被模型抹掉

**HARD INVARIANT（硬边界）.**

Low click, low dwell or temporary inactivity must not silently convert an explicit Follow（关注） into an inferred Unfollow（取消关注）.

The user controls whether the relationship still exists.

---

## R10-C4 — Eligibility, privacy and lifecycle rules still apply to followed content / 被关注内容仍需经过资格、隐私与生命周期规则

**HARD INVARIANT（硬边界）.**

Following（关注） does not bypass audience, moderation, legal/rights, lifecycle, membership/access or other applicable visibility constraints.

Explicit follow is a delivery relationship, not an entitlement to prohibited/private content.

---

## R10-C5 — Following may rank, deduplicate and reduce fatigue without redefining the relationship / 关注页可以排序、去重与降疲劳，但不能重定义关注关系

**HARD PRODUCT BOUNDARY（产品边界）.**

A ranked Following mode may use recency, unread state, current relevance, update importance, duplicate suppression or fatigue control.

Those decisions affect presentation/order, not whether the user follows the source.

---

## R10-C6 — Following default ordering is a genuine product choice / 关注页默认排序属于真实产品选择

**PENDING USER DECISION（等待用户决定）.**

Three reasonable models remain:

### Option A — Latest-first default（默认最新优先）
- strongest transparency;
- easy to understand;
- can become noisy once users follow many targets.

### Option B — Ranked default + visible Latest mode（默认相关排序 + 明确的最新模式）
- ranked view helps high-volume follow graphs;
- Latest（最新） preserves a transparent exhaustive route;
- requires strong safeguards so ranking does not quietly hide low-engagement followed sources.

### Option C — User-selected persistent default（由用户选择并记住默认模式）
- strongest user agency;
- adds product complexity and initial-choice friction.

**Current recommendation:** **Option B（方案 B）** — Ranked default + visible Latest mode（默认相关排序 + 明确的最新模式）, with rules below preventing ranking from becoming a second For You（为你推荐）.

---

## R10-C7 — Ranked Following must preserve access to followed inventory / 排序型关注页必须保留访问完整关注内容的路径

**HARD SAFEGUARD（硬保护）.**

If ranked Following is used, low predicted relevance must not make eligible followed content structurally unreachable.

A Latest / All Updates（最新 / 全部更新） route or equivalent transparent inventory path should remain available.

---

## R10-C8 — Following mode must be legible to the user / 关注页排序模式必须可理解

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

If more than one ordering mode exists, the user should be able to understand which mode is active.

The system must not label a heavily ranked view as purely chronological.

---

# 3. Explore / 探索

## R10-C9 — Explore is broader discovery, not low-confidence Home / 探索页是更广的发现，不是低置信度首页

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Explore（探索） should deliberately reach beyond the user's strongest Interest Clusters（兴趣簇） and recent behavior.

It must preserve meaningful cross-domain, long-tail, Topic / Place, editorial, new-content and serendipitous discovery paths.

---

## R10-C10 — Explore remains reasoned rather than random / 探索不是随机噪音

**HARD INVARIANT（硬边界）.**

Exploration candidates still require eligibility and a defensible discovery reason such as topical adjacency, editorial curation, cultural/place relation, freshness, long-tail opportunity, trend relevance or broad-interest value.

Explore is not a random-content dump.

---

## R10-C11 — Personalization may assist Explore without owning it / 个性化可以辅助探索，但不能控制探索全部逻辑

**HARD PRODUCT BOUNDARY（产品边界）.**

Interest Graph（兴趣图谱） may help avoid obviously irrelevant or explicitly suppressed material, but Explore must retain supply outside high-confidence inferred preference.

---

## R10-C12 — Explore may support discovery lenses without freezing one navigation design / 探索页可以支持发现视角，但不提前写死导航

**ADAPTIVE RULE（弹性规则）.**

Future Explore may expose lenses such as Topic（主题）, Place（地点）, New（新内容）, Trending（趋势）, Editorial（编辑策展）, Long-tail（长尾） or media/content-type views.

The existence, naming and layout of these lenses remain later UX / calibration decisions.

---

## R10-C13 — Explore-origin behavior retains exploration context / 探索页行为必须保留探索来源情境

**HARDENING（架构加固） inherited from Round 9（继承第九轮）.**

A click/save on broad Explore content should not be interpreted identically to repeatedly sought-out content from an established Interest Cluster（兴趣簇）.

Exposure Context（曝光情境） must remain available where proportionate.

---

## R10-C14 — Sensitive or risky discovery is not automatically broadened for serendipity / 敏感或高风险内容不能因为“探索”而被主动扩散

**HARD SAFEGUARD（硬保护）.**

Exploration goals remain subordinate to applicable governance, legal, privacy, safety and eligibility constraints.

Engagement or novelty does not authorize aggressive exploration of sensitive/risky material.

---

## R10-C15 — Explore preserves opportunity without promising equal exposure / 探索保留机会，但不承诺平均曝光

**HARD PRODUCT BOUNDARY（产品边界）.**

New, niche and low-exposure content should have genuine Explore candidate routes.

This creates discoverability opportunity, not equal distribution or guaranteed impressions.

---

# 4. Search / 搜索

## R10-C16 — Search is query-led / 搜索以查询意图为主

**HARD INVARIANT（硬边界）.**

The user's explicit Query（查询） is the primary contract of Search（搜索）.

Personalization, exploration, popularity or editorial preference must not override a direct query merely because another result is predicted to generate more engagement.

---

## R10-C17 — Search relevance and recommendation are related but not identical systems / 搜索相关性与推荐不是同一套逻辑

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Search may reuse Knowledge Graph（知识图谱）, Interest Graph（兴趣图谱）, content features and ranking infrastructure, but explicit query matching/relevance remains a distinct task.

One universal feed score must not control Search.

---

## R10-C18 — Personalization in Search is secondary and scoped / 搜索中的个性化必须是次要且有范围的

**HARD PRODUCT BOUNDARY（产品边界）.**

Personalization may assist language preference, format preference, ambiguity resolution, local/context relevance where appropriate, and tie-breaking among similarly relevant results.

It must not silently rewrite an unambiguous query into what the recommender thinks the user "usually likes".

---

## R10-C19 — Semantic expansion is allowed but must remain query-grounded / 语义扩展可以使用，但必须锚定查询

**HARDENING（架构加固）.**

Semantic Search（语义搜索）, synonym expansion, entity resolution and Knowledge Graph（知识图谱） expansion may retrieve conceptually related results.

Expansion must still be defensibly connected to the query; semantic similarity alone is not permission to flood the result set with loosely related content.

---

## R10-C20 — Exact/direct matches retain a clear path / 精确与直接匹配必须有清晰路径

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

When an exact title, Work（作品）, Person（人物）, Place（地点）, Topic（主题）, account or other stable object clearly matches the query, Search should not bury it beneath unrelated personalized discovery purely for engagement reasons.

---

## R10-C21 — Zero-result fallback must be labeled as fallback / 零结果回退不能伪装成命中结果

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

If Search cannot find direct results and offers related/expanded discovery, that content should be distinguishable from actual query matches.

The platform must not create the impression that a weakly related item directly answered the query.

---

## R10-C22 — Related discovery modules may supplement, not contaminate, core Search results / 相关推荐模块可以补充搜索，但不能污染核心结果

**HARD PRODUCT BOUNDARY（产品边界）.**

Search may later include clearly separated modules such as Related Topics（相关主题）, Related Places（相关地点） or Explore More（更多探索） after/beside core results.

These modules must not silently displace direct relevance.

---

## R10-C23 — Search behavior remains intent evidence, not automatic durable identity / 搜索行为是意图证据，不是永久画像

**HARD inherited from Round 9（继承第九轮硬边界）.**

A query may be strong Session Intent（会话意图） evidence while still representing one-off research, verification, travel planning, disagreement or curiosity.

One search must not automatically become Durable Interest（长期兴趣）.

---

## R10-C24 — Search personalization remains purpose-limited / 搜索个性化必须遵守用途限制

**HARD PRIVACY BOUNDARY（隐私硬边界）.**

Private notes, Direct Messages（私信）, Moderation Case（审核案件） data or unrelated sensitive data must not silently become Search-personalization inputs merely because they might improve prediction.

---

## R10-C25 — Mixed-type Search ranking requires type-aware treatment / 混合内容类型搜索需要按类型处理

**HARDENING（架构加固）.**

A Work（作品）, Place（地点）, canonical passage（典籍段落）, account, editorial article and community discussion may have different relevance evidence and interaction distributions.

Raw numeric scores must not be assumed directly comparable without appropriate calibration or lane-aware treatment.

---

# 5. Related / Next / 相关推荐与下一项

## R10-C26 — Related is anchored to the current object or task / 相关推荐必须锚定当前对象或任务

**HARD INVARIANT（硬边界）.**

Related（相关推荐） should primarily derive from the object currently being viewed/read and its meaningful relations: Work（作品）, Topic（主题）, Place（地点）, series, collection, thread, passage, author, cited/citing relation or other supported context.

It must not simply reuse Home / For You（首页 / 为你推荐） ranking.

---

## R10-C27 — Structural Next precedes personalized Next where sequence is authoritative / 存在明确顺序时，结构性“下一项”优先于个性化“下一项”

**HARD PRODUCT BOUNDARY（产品边界）.**

For ordered works, chapters, issues, series or other explicit sequences, the canonical/structural Next（下一项） should remain available and understandable.

Personalized alternatives may supplement but must not silently replace an authoritative sequence relation.

---

## R10-C28 — Related reasons remain typed / 相关推荐关系原因必须保留类型

**HARDENING（架构加固）.**

The system should know whether an item is related because it is:

- same Work / Edition / Series（同作品 / 版本 / 系列）;
- same or adjacent Topic / Place（同主题 / 地点或相邻关系）;
- citation / reference relation（引用 / 参考关系）;
- Knowledge Graph adjacency（知识图谱邻接）;
- continuation（连续阅读）;
- editorial relation（编辑关联）;
- community discussion linked to the object（关联社区讨论）;
- personalized secondary relevance（个性化辅助相关）.

Typed reason supports explanation, debugging and safer ranking.

---

## R10-C29 — Personal interest is secondary to object relation on Related surfaces / 相关推荐中个人兴趣不能压过对象关系

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Interest Graph（兴趣图谱） may help order similarly related candidates or add a secondary recommendation lane, but cannot make unrelated personalized content appear as if it were directly related to the current object.

---

## R10-C30 — Canonical/source surfaces preserve authority separation when linking social discussion / 典籍与来源页面链接社区内容时继续保持权威分离

**HARD inherited from Rounds 7–8（继承第七至第八轮硬边界）.**

A canonical passage may link to Discussion / Question / Community Publication（讨论 / 问题 / 社区发布物） as companion objects.

Those social objects must not be visually or semantically reclassified as canonical source content merely because they appear in Related.

---

## R10-C31 — Related loops and repetition must be controllable / 相关推荐循环与重复必须可控制

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Related / Next composition should be able to avoid trivial loops, repeated near-duplicates and repeatedly bouncing among the same small set of objects unless the structure legitimately requires it.

---

## R10-C32 — Freshness on Related is relation/task specific / 相关推荐中的新鲜度按关系与任务解释

**HARDENING（架构加固）.**

A centuries-old source may remain perfectly related forever, while a local guide, event or policy update may become stale.

Related ranking must not apply one global age penalty.

---

# 6. Cross-surface rules / 跨页面规则

## R10-C33 — Negative feedback retains scope across surfaces / 负反馈跨页面时仍要保留作用范围

**HARD INVARIANT（硬边界）.**

Not Interested / Show Less / Hide / Unfollow（不感兴趣 / 少看 / 隐藏 / 取消关注） may affect multiple surfaces when the target scope justifies it, but a surface-specific action must not automatically become a global dislike.

---

## R10-C34 — Object identity, provenance and authority labels survive every surface / 对象身份、来源与权威标签必须跨页面保留

**HARD INVARIANT（硬边界）.**

Following, Explore, Search and Related may display the same underlying object differently, but must not alter its authorship, object type, Work Recognition（作品认可）, canonical/source authority, provenance or moderation/lifecycle state.

---

## R10-C35 — Paid / sponsored / commerce placement remains distinct / 付费、赞助与商业内容继续保持独立语义

**HARD inherited from R10-B39（继承 B39）.**

If future monetization introduces paid placement into any dedicated surface, it cannot masquerade as ordinary organic Follow, Search relevance, Explore discovery or Related relation.

Exact monetization treatment belongs to the later Services / Monetization / Spatial Flow（服务 / 商业化 / Spatial Flow） round.

---

## R10-C36 — Surface context is part of recommendation observability / 页面情境属于推荐可观察性的一部分

**HARDENING（架构加固）.**

Exposure and behavior should retain which surface/mode generated them where proportionate: ranked Following vs Latest, broad Explore, direct Search, Related from a Work, etc.

This supports correct signal interpretation and auditability.

---

## R10-C37 — Dedicated-surface policies remain evolvable / 专门页面策略必须可演进

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Material changes to Following ordering, Explore candidate breadth, Search personalization scope or Related relation/ranking policy should be versionable and support impact analysis, staged rollout, rollback and derived-state invalidation where relevant.

Exact thresholds/weights remain configuration/algorithm decisions rather than permanent ontology.

---

## R10-C38 — No universal algorithm is approved across these surfaces / 不批准一套通用算法控制四个页面

**SCOPE GUARD（范围护栏）.**

Workshop C does not require one ranker/model for Following, Explore, Search and Related.

Shared infrastructure is allowed; shared product meaning is not assumed.

---

# 7. Decision checkpoint / 用户决策检查点

Only one material product fork is intentionally left for user confirmation in this workshop:

### Following（关注）默认排序模式

| Option（方案） | Default（默认） | Secondary mode（次级模式） | Main trade-off（主要取舍） |
|---|---|---|---|
| A | Latest-first（最新优先） | optional Ranked（可选相关排序） | 最透明，但关注量大后容易信息过载 |
| **B — Recommended（推荐）** | **Ranked（相关排序）** | **visible Latest / All Updates（明确的最新 / 全部更新）** | 平衡规模与忠实度，但必须防止模型把低互动关注对象长期藏掉 |
| C | user-selected remembered mode（用户自选并记住） | other mode | 用户控制最强，但产品复杂度和初始摩擦更高 |

Recommendation: **B（方案 B）**.

Reason: Project 3 expects users eventually to follow creators, Topics（主题）, Places（地点）, Works（作品） and discussions across a broad knowledge/culture network. A purely chronological default will degrade as follow volume grows, while a purely ranked opaque feed would violate the explicit Follow relationship. Ranked-by-default + a real Latest / All Updates route preserves both scalability and trust.

This remains **PENDING USER DECISION（等待用户决定）** until explicitly accepted.

---

# 8. Deferred items / 延后项

Workshop C intentionally does not decide:

- exact Following ranking formula, time window or unread logic;
- exact Explore tabs/lenses and page layout;
- exact Trending（趋势） definition;
- exact Search engine / hybrid lexical-semantic architecture;
- autocomplete / query suggestions UI;
- exact personalized Search feature weights;
- exact Related candidate count, carousel/grid/list treatment;
- exact knowledge-graph edge weights;
- exact treatment of sponsored placement;
- exact model family, index technology, vector store or serving stack.

---

# 9. Next review area / 下一审查区域

After the Following default-order decision is resolved and Workshop C passes its local Adversarial Audit（对抗性审计）, Workshop D should examine:

**Candidate Retrieval & Multi-Stage Ranking Semantics（候选召回与多阶段排序语义）**

including:
- retrieval-source architecture;
- candidate merging;
- pre-ranking necessity at scale;
- multi-task prediction vs one engagement score;
- type-aware calibration;
- final Re-ranking / Blending（重排序 / 混排）;
- offline / online evaluation boundaries;
- cold-start and long-tail serving paths;
- observability of candidate survival across stages.
