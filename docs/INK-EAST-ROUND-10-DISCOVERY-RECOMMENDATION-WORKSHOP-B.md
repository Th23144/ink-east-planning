# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop B（工作坊 B）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Home / For You Composition & Ranking Objectives（首页 / 为你推荐的页面组合与排序目标）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **User decision carried forward:** **C — Hybrid Homepage（混合式首页）**, accepted as a **PROVISIONAL PRODUCT DIRECTION（暂定产品方向）**, not a frozen visual layout.

---

## 0. Decision at a glance / 本步结论一览

Project 3 adopts a **Hybrid Homepage（混合式首页）** direction for Home / For You（首页 / 为你推荐）:

```text
Home / For You
├─ intent-specific Modules / Shelves（意图型模块 / 内容货架）
│  ├─ continuation / unfinished reading
│  ├─ explicit follows / updates
│  ├─ established + recent interests
│  ├─ Topic / Place / Knowledge discovery
│  ├─ editorial / recognized-quality discovery
│  └─ deliberate exploration / new & unexpected material
│
└─ Personalized Discovery Stream（个性化发现流）
   └─ continuous mixed discovery after / around modules
```

This is **product architecture**, not a visual wireframe. The number, order, size, orientation and exact appearance of modules remain DEFERRED CALIBRATION（延后校准） / later UX（用户体验） work.

The Home / For You surface must represent **multiple user intents and multiple Interest Clusters（兴趣簇） at the same time**, rather than forcing one dominant interest into one endless homogeneous stream.

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop B inherits and must not weaken:

- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源） distinctions;
- Round 8 Community & Discussion（社区与讨论） object/action semantics;
- Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱） — especially multi-interest, Session / Recent / Durable（会话 / 近期 / 长期） separation, user correction, exploration and privacy boundaries;
- Round 10 Workshop A R10-A1…R10-A30;
- Round 10 Workshop A Hardening Addendum R10-A31…R10-A37;
- Mature-platform benchmark as **Research Input（研究输入）**, not architecture truth;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Standing rule:

> **Home / For You is a page-composition system over eligible recommendation candidates, not one scalar ranking list with decorative sections. / 首页推荐是对合格候选进行页面级组合的系统，不是一条单一排序列表外面套几个装饰模块。**

---

# 2. Hybrid Homepage structure / 混合式首页结构

## R10-B1 — Hybrid Homepage is the current product direction / 混合式首页作为当前产品方向

**PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.**

Home / For You（首页 / 为你推荐） should combine:

1. **Modules / Shelves（模块 / 内容货架）** for distinct intents or content groupings; and
2. **Personalized Discovery Stream（个性化发现流）** for continuous mixed discovery.

This direction may later be revised through explicit product-architecture change; it is not an immutable invariant.

---

## R10-B2 — Hybrid does not mean a permanently fixed set of homepage rows / 混合式不等于永久固定的一组首页栏目

**HARDENING（架构加固）.**

The architecture must not assume every user/session always receives the same module set. Module availability may depend on actual inventory, current task, follows, unfinished reading, recent interests, editorial campaigns, Place / Topic context or exploration need.

Empty or irrelevant modules should be omittable rather than rendered as dead placeholders.

---

## R10-B3 — Module identity and visual layout are separate / 模块语义与视觉布局分离

**HARD INVARIANT（硬边界）.**

A semantic module such as Continue Reading（继续阅读） or From Your Follows（来自你的关注） may later appear as a row, grid, stack, carousel, compact block or another UI form.

Product architecture defines **what the module means**, not its final visual treatment.

---

## R10-B4 — The discovery stream is not allowed to erase module semantics / 连续发现流不能抹掉模块语义

**HARD PRODUCT BOUNDARY（产品边界）.**

The continuous stream may reuse candidates from shared inventory, but it must not make intent-specific modules meaningless by simply repeating the identical ranked list in a different visual container.

---

## R10-B5 — Modules and stream may use different ranking contexts / 模块与连续流可以使用不同排序情境

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

A Continue Reading（继续阅读） module, Following Updates（关注更新） module, Place Discovery（地点发现） module and the mixed discovery stream may consume shared signals while applying different objectives and constraints.

No universal homepage score is required.

---

# 3. Multi-interest expression / 多兴趣表达

## R10-B6 — Home must be capable of representing several Interest Clusters in one visit / 一次首页访问中应能体现多个兴趣簇

**HARD PRODUCT DIRECTION（产品级硬方向）.**

A user may simultaneously care about ancient books, architecture, travel, food, craft, philosophy, places and contemporary culture. Home / For You must retain room for several active/durable interests instead of selecting one global winner.

Exact number of represented clusters per page/session remains DEFERRED CALIBRATION（延后校准）.

---

## R10-B7 — Strong short-term intent may temporarily concentrate the page without rewriting durable interests / 强烈短期意图可以暂时提高页面集中度，但不能改写长期兴趣

**ADAPTIVE RULE（弹性规则）.**

If the user is clearly deep-diving into one Topic / Place / Work（主题 / 地点 / 作品）, the current Home session may temporarily show more related content.

This concentration is a Recommendation Context（推荐情境） decision and must not automatically collapse the user's long-term Interest Graph（兴趣图谱）.

---

## R10-B8 — Durable interests need not all receive equal homepage share / 长期兴趣不要求平均分配首页曝光

**HARDENING（架构加固）.**

Multi-interest support means preserving viable representation and discovery, not forcing mathematically equal exposure among all interests.

Relevance, recency, current task, fatigue, inventory quality and explicit preference may legitimately shift representation.

---

## R10-B9 — One dominant cluster cannot monopolize Home by default / 单一高强度兴趣簇默认不能垄断首页

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

High recent engagement with one cluster must not automatically remove all other established interests and exploration opportunity from the Home experience.

Exact concentration caps or blend budgets remain configurable and data-driven.

---

# 4. Homepage candidate roles / 首页候选角色

## R10-B10 — Continuation is a first-class homepage intent / 连续阅读是一等首页意图

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Unfinished reading, next chapter/segment, followed-thread updates, series continuation and other legitimate continuity candidates may receive dedicated placement or module treatment.

Continuation is not the same as general preference prediction.

---

## R10-B11 — Explicit follows retain a visible path into Home / 明确关注必须保留进入首页的清晰路径

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Content or updates from explicitly followed creators, Topics, Places or other supported targets should have a meaningful Home candidate route.

A learned ranker must not make explicit Follow（关注） semantically invisible.

---

## R10-B12 — Editorial curation may appear as editorial curation / 编辑策展可以作为明确的编辑策展出现

**HARD INVARIANT（硬边界）.**

Editorial Picks（编辑精选） or curated discovery may be intentionally surfaced on Home, but its source/reason must remain distinguishable from machine-inferred personalization.

Editorial inclusion does not claim that the user already likes the item.

---

## R10-B13 — Recognized / quality-layer content can contribute without prestige takeover / 高认可或质量层内容可以参与推荐，但不能形成声望垄断

**HARD PRODUCT BOUNDARY（产品边界）.**

Existing Work Recognition（作品认可）, source quality/provenance or editorial quality features may help retrieval/ranking where relevant, but they cannot automatically outrank current intent or occupy the page merely because they carry prestige.

---

## R10-B14 — Exploration has dedicated homepage space in principle / 首页原则上必须保留探索空间

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Home should retain a deliberate path for adjacent and broader Exploration / Serendipity（探索 / 偶然发现）, rather than relying only on high-confidence inferred interests.

Exact placement, frequency and whether exploration is labeled remain DEFERRED CALIBRATION（延后校准）.

---

## R10-B15 — New / low-exposure content may enter Home through exploration, topical fit, editorial or quality routes / 新内容与低曝光内容可以通过多种路径进入首页

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Eligible content must not require existing popularity before it can be surfaced. Home may allocate discovery opportunity through exploration, Topic / Place fit, editorial curation, recognized quality or other legitimate candidate routes.

Opportunity does not mean guaranteed rank or equal exposure.

---

# 5. Ranking objective model / 排序目标模型

## R10-B16 — Home does not optimize one universal engagement objective / 首页不采用单一互动最大化目标

**HARD INVARIANT（硬边界）.**

The Home / For You objective must remain multi-objective. Depending on context, relevant objectives may include:

- current relevance;
- continuation / task completion;
- durable value / satisfaction;
- explicit relationship fidelity;
- exploration / serendipity;
- diversity;
- freshness where appropriate;
- fatigue reduction;
- long-tail / new-content opportunity;
- eligible quality/provenance signals;
- user correction / negative preference;
- privacy / purpose limits.

No single permanent weight vector is approved.

---

## R10-B17 — Click-through and dwell are not the sole success metrics / 点击率与停留时长不能成为唯一成功指标

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Immediate clicks, dwell, likes or replies may be useful measurements but cannot alone define homepage quality.

Later evaluation should be capable of considering satisfaction, return value, useful continuation, breadth of discovery, fatigue, explicit negative feedback and longer-term outcomes.

---

## R10-B18 — Module selection itself is a recommendation decision / 选择展示哪些模块本身就是推荐决策

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Home personalization operates at more than item rank. The system may decide:

1. which semantic modules are eligible;
2. which modules appear;
3. their relative placement/prominence;
4. what candidates appear inside them;
5. how the continuous discovery stream is composed.

Module-selection logic must remain observable and evolvable rather than hidden as static page code.

---

## R10-B19 — Module priority and item ranking are distinct decisions / 模块优先级与模块内内容排序是不同决策

**HARDENING（架构加固）.**

A highly valuable module does not imply every item inside it is highly ranked, and a strong item does not automatically justify creating or promoting its entire module.

The architecture must permit separate policies/models where scale later requires them.

---

## R10-B20 — Page-level composition happens after individual candidate relevance / 整页组合不能只看单条候选相关度

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Even individually strong recommendations can produce a repetitive or incoherent page. Re-ranking / Blending（重排序 / 混排） must be able to reason across the whole page/session, including repeated creator, Topic, Place, content type, Interest Cluster, source family and format.

---

# 6. Cross-type & cross-module composition / 跨内容类型与跨模块组合

## R10-B21 — Different content types must not be treated as numerically identical / 不同内容类型不能因为都有分数就被当作可直接比较

**HARD INVARIANT inherited from R10-A32（继承 A32 的硬边界）.**

Long essays, canonical passages, Place guides（地点指南）, community discussions, Questions（问题）, image/source objects and short media may require type-aware calibration, separate candidate lanes or other normalization before mixed Home composition.

---

## R10-B22 — Home may mix content classes without erasing object identity / 首页可以混合不同内容类别，但不能抹掉对象身份

**HARD INVARIANT（硬边界）.**

Canonical/source-backed objects, editorial publications, contributor/community publications, discussions, Questions and Place/Topic discovery may coexist on Home while preserving their object class, provenance, authority/Recognition labels and interaction semantics.

Visual unification must not become semantic flattening.

---

## R10-B23 — Cross-module duplicate exposure must be controllable / 跨模块重复曝光必须可控制

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The same underlying object may enter Home through Follow, Topic, Interest, editorial, continuation or exploration routes. Page composition must support cross-module / module-to-stream deduplication and repetition control while preserving legitimate version/edition distinctions.

---

## R10-B24 — Candidate-source diversity is observable, not necessarily equal / 候选来源多样性需要可观察，但不要求平均

**HARDENING inherited from R10-A35（继承 A35 的架构加固）.**

The system should be able to observe whether Home effectively depends on only one source family even when many candidate sources exist in architecture.

This supports detecting accidental source monoculture; it does not impose fixed equal quotas.

---

# 7. Exposure feedback & user control / 曝光反馈与用户控制

## R10-B25 — Homepage behavior must retain placement/module context / 首页行为必须保留展示位置与模块情境

**HARDENING（架构加固）.**

An interaction with an item in Continue Reading（继续阅读）, an Exploration（探索） shelf or deep in the continuous stream may carry different meaning.

Where technically proportionate, Exposure Context（曝光情境） should preserve module/surface/position/source reason so later learning does not treat all clicks/non-clicks as identically generated evidence.

---

## R10-B26 — Recommendation-created exposure loops must remain diagnosable / 推荐自己制造的曝光循环必须可诊断

**HARD ARCHITECTURAL REQUIREMENT inherited from R10-A31（继承 A31）.**

Content may become popular partly because the recommender repeatedly exposed it. Home evaluation must therefore preserve enough candidate/exposure context to detect self-reinforcing distribution loops and avoid treating exposure-created popularity as unbiased quality or preference evidence.

---

## R10-B27 — Explicit correction constrains Home composition / 用户明确纠错必须约束首页组合

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Not Interested / Show Less / Unfollow / scoped suppression（不感兴趣 / 少看 / 取消关注 / 范围性降低） must be capable of affecting module eligibility, candidate retrieval, ranking and final page composition according to their scope.

The product must not repeatedly reintroduce explicitly suppressed material merely through a different homepage module.

---

## R10-B28 — Non-personalized Home remains viable / 非个性化首页必须可正常运行

**HARD INVARIANT inherited from R10-A36（继承 A36）.**

When behavioral personalization is paused/unavailable, Home may still compose eligible content using editorial curation, explicit context, freshness, broad popularity, language, Topic / Place context and controlled exploration.

The hybrid homepage must not structurally require a private behavioral profile.

---

# 8. Cold start, freshness & fatigue / 冷启动、新鲜度与疲劳

## R10-B29 — Cold-start composition samples breadth without fabricating interest / 冷启动首页应提供一定广度，但不能伪造兴趣

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

Low-history users may receive a controlled mix of declared interests, editorially useful material, broadly valuable/popular items, fresh content and cross-domain exploration.

Showing such content does not mean the platform has already inferred a Durable Interest（长期兴趣）.

---

## R10-B30 — Freshness is task/content-type specific / 首页新鲜度必须按任务与内容类型解释

**HARDENING inherited from R10-A37（继承 A37）.**

A new community discussion may benefit from recency, a travel/event guide may become stale quickly, while an old canonical work may remain indefinitely relevant.

Home must not use one global age penalty or freshness boost across all object types.

---

## R10-B31 — Fatigue control must not erase genuine interest / 疲劳控制不能抹掉真实兴趣

**HARD INVARIANT（硬边界）.**

Repeated exposure to the same creator, Topic, format or cluster may justify temporary suppression or diversification without rewriting Durable Interest（长期兴趣） as if it disappeared.

Fatigue is a composition state, not identity truth.

---

## R10-B32 — Continuity and discovery can trade prominence by context / 连续阅读与探索内容的首页权重可以随情境变化

**ADAPTIVE RULE（弹性规则）.**

A user returning to an unfinished Work（作品） may reasonably receive strong continuation prominence; another session may prioritize discovery. The architecture must support this contextual shift without one permanent layout order.

---

# 9. Evolvability & evaluation / 可演进性与评估

## R10-B33 — Homepage composition policy is versionable / 首页组合策略必须可版本化

**HARDENING under Rule Evolvability（规则可演进架构加固）.**

Material changes to module eligibility, module priority, candidate-source blends, ranking objectives, exploration treatment, fatigue controls or stream/module relationships should support Model / Policy Version（模型 / 策略版本）, impact analysis, shadow/offline evaluation where proportionate, staged rollout and rollback.

---

## R10-B34 — Exact module counts, order, ratios and weights are deferred / 模块数量、顺序、比例与权重延后校准

**DEFERRED CALIBRATION（延后校准）.**

Workshop B does not approve fixed rules such as:

- exactly N homepage modules;
- exactly X% exploration;
- a permanent first module;
- a permanent module-vs-stream ratio;
- fixed candidate-source quotas;
- universal ranking weights;
- a mandatory infinite-scroll depth.

These require UX testing, real inventory and behavioral evidence.

---

## R10-B35 — No homepage ML architecture is mandated / 本工作坊不强制指定首页机器学习架构

**SCOPE GUARD（范围护栏）.**

The Hybrid Homepage（混合式首页） direction does not require a particular Two-Tower（双塔模型）, Transformer（变换器模型）, bandit, reinforcement-learning, graph, vector or LLM（大语言模型） implementation.

Early V1 may use simpler rules/curation while preserving the same semantic boundaries.

---

# 10. Current visible product picture / 当前可见产品形态

| Area（区域） | Current direction（当前方向） | Not frozen yet（尚未写死） |
|---|---|---|
| Home / For You（首页 / 为你推荐） | **Hybrid Homepage（混合式首页）** | exact layout / module count / order |
| Modules（模块） | intent-specific semantic modules | final visual form |
| Continuous discovery（连续发现） | Personalized Discovery Stream（个性化发现流） | scroll depth / exact density |
| Interest representation（兴趣表达） | several clusters can coexist | exact blend ratio |
| Continuation（连续阅读） | first-class intent | exact prominence |
| Following（关注） | explicit candidate path preserved | exact Home share |
| Editorial / Recognition（编辑 / 认可） | attributable candidate source/features | exact weight |
| Exploration（探索） | deliberate Home objective | exact budget / label |
| New / long-tail（新内容 / 长尾） | real discovery path | exact opportunity budget |
| Ranking objective（排序目标） | multi-objective | exact metrics/weights |
| Personalization off（关闭个性化） | Home still works | exact UX |

---

# 11. Product choices intentionally still open / 仍明确开放的产品选择

Workshop B intentionally does **not** decide:

- exact homepage visual design;
- exact semantic module inventory for V1;
- exact default module order;
- exact proportion between modules and continuous stream;
- whether a specific module uses row/grid/carousel/list form;
- exact exploration/diversity/freshness budgets;
- exact satisfaction/value metrics;
- exact ranking model families;
- exact user-facing explanation labels;
- exact behavior when inventory is very sparse;
- whether later users can explicitly customize/reorder homepage modules.

These remain later calibration / scope / UX decisions unless a future workshop exposes a genuine product fork.

---

# 12. Next step / 下一步

Run a dedicated **Workshop B Adversarial Audit（工作坊 B 对抗性审计）** before treating this document as the stable basis for Workshop C.

If that audit passes, Workshop C should examine **Following / Explore / Search / Related Surface Semantics（关注 / 探索 / 搜索 / 相关推荐的页面语义）**, especially where ranking may and may not override explicit user intent.