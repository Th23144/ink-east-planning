# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Workshop A（工作坊 A）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Reader Behavior Signal Model（读者行为信号模型） — define what observable user actions may mean before deciding ranking weights, ML models, embeddings, vector stores, large-scale infrastructure or final recommendation equations.

Research input: `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`.

Standing principle: **Project 3 may learn from mature recommender systems, but must not copy their engagement objectives, exact weights or product assumptions.** The interest model exists to understand evolving user intent and interests; it is not a universal engagement/trust/quality score.

---

## R9-A1 — Behavioral signals retain their own semantics / 行为信号必须保留各自语义

**HARD INVARIANT（硬边界）.**

Click / Open（点击 / 打开）, Dwell（停留）, Completion（完成阅读/观看）, Save（收藏）, Follow（关注）, Search（搜索）, Reply（回复）, Answer（回答）, Share（分享）, Hide / Not Interested（隐藏 / 不感兴趣）, Skip（跳过） and other signals must not be collapsed at source into one universal engagement number.

A later model may combine signals for a specific task, but the source semantics remain separately observable and auditable.

---

## R9-A2 — Interest is not quality, truth, authority or trust / 兴趣不等于质量、真理、权威或信任

**HARD INVARIANT（硬边界）.**

Interest Graph（兴趣图谱） answers questions such as “what may this user want to see or explore?” It does not determine Work Recognition（作品认可）, source authority（来源权威）, factual truth, Contributor Qualification（贡献者资格）, Account Trust（账户信任） or governance credibility.

Popularity/interest signals may inform discovery but cannot silently cross these authority boundaries.

---

## R9-A3 — Explicit preference and inferred preference are different / 用户明确偏好与系统推断偏好必须区分

**HARD INVARIANT（硬边界）.**

Declared Interests（用户明确选择的兴趣）, followed Topics/Places/People（关注的主题 / 地点 / 人物） and explicit negative feedback are attributable user actions.

Inferred Interest（推断兴趣） is a model/system conclusion derived from behavior. The platform must preserve the distinction so an inference never masquerades as something the user explicitly declared.

---

## R9-A4 — Positive signals have different strengths and meanings / 正反馈之间也不是同一种信号

**HARD INVARIANT for semantic separation; weights DEFERRED（语义分离为硬边界，权重延后）.**

Like / Reaction（点赞 / 互动反应）, Save（收藏）, Follow（关注）, repeated return（重复回访）, long-form completion（长内容完成阅读）, share/reference（分享 / 引用） and sustained topic exploration may all indicate positive interest, but they express different intents.

Round 9 does not assign universal numeric weights to them.

---

## R9-A5 — Negative/corrective feedback is first-class / 负反馈与纠错反馈是一等公民

**HARD INVARIANT（硬边界）.**

Not Interested（不感兴趣）, Show Less（减少此类内容）, Hide（隐藏）, Unfollow（取消关注）, Mute（静音） and future Recommendation Reset（推荐重置） or interest-edit controls must be structurally representable as user corrections.

Negative feedback may target different scopes such as one item, creator, Topic（主题）, Place（地点）, content type or recommendation surface; these scopes must not be silently conflated.

---

## R9-A6 — Non-action is not automatically negative feedback / 未行动不自动等于负反馈

**HARD INVARIANT（硬边界）.**

An Impression（曝光） without click, a partial scroll, a skipped card or an unread notification can have many explanations: lack of time, position, UI visibility, already-known information, competing content or genuine disinterest.

Non-action can become useful evidence only with context and confidence; it is not equivalent to an explicit “Not Interested（不感兴趣）”.

---

## R9-A7 — Exposure must be known before interpreting non-action / 解释“没点”之前必须知道用户是否真正看见

**HARDENING（架构加固）.**

The system should distinguish content that was eligible, delivered, actually visible/meaningfully exposed, briefly passed and deliberately engaged with where technically proportionate.

A recommendation system must not treat unseen inventory as rejected content.

---

## R9-A8 — Dwell time is ambiguous and context-dependent / 停留时长具有歧义，必须结合情境

**HARD INVARIANT（硬边界）.**

Long Dwell（长停留） may indicate strong interest, careful study, confusion, controversy, comparison, background idling or interruption. Short dwell may indicate disinterest, quick confirmation or content already understood.

Dwell must not be interpreted as a universal positive score without content length, format, activity/context and companion signals.

---

## R9-A9 — Search is strong intent evidence but may be temporary / 搜索通常是强意图，但可能只是临时需求

**HARD INVARIANT（硬边界）.**

Search Query（搜索查询）, applied filters, query reformulation and clicks after search can reveal high-current intent.

However, a one-time search for a destination, person, health topic, controversy or practical problem must not permanently redefine the user's long-term interest profile without additional evidence.

---

## R9-A10 — Participation does not always mean positive preference / 参与讨论不一定代表喜欢

**HARD INVARIANT（硬边界）.**

Reply（回复）, Comment（评论）, Answer（回答） or Quote/Reference（引用） can indicate expertise, disagreement, correction, criticism or moderation concern as well as affinity.

The system may infer relevance/engagement from participation while remaining uncertain about sentiment or satisfaction unless other evidence supports it.

---

## R9-A11 — Session intent and durable interest are separate / 会话意图与长期兴趣分离

**HARD INVARIANT（硬边界）.**

A Session Interest（会话兴趣） may react quickly to recent searches/opens/consumption. Durable Interest（长期兴趣） requires broader temporal evidence.

A highly concentrated single session must not automatically overwrite a user's long-term profile.

---

## R9-A12 — Emerging, established and dormant interests may coexist / 新兴、稳定与休眠兴趣可以同时存在

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

Interest state should be able to represent lifecycle/maturity rather than only a static yes/no membership. Examples include emerging, active, durable, cooling or dormant interest states, but exact public/internal labels and transition thresholds remain DEFERRED CALIBRATION（延后校准）.

Historical interest evidence need not be erased merely because its current recommendation influence decays.

---

## R9-A13 — One user can have many independent interest clusters / 一个用户可以同时存在多个独立兴趣簇

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Project 3 must not assume one global interest category or one single user vector is sufficient for all future recommendation tasks.

A user may simultaneously maintain unrelated or weakly related interests such as ancient books, architecture, travel, food, crafts, philosophy, places and contemporary culture. Storage/model implementation is deferred, but the product model must preserve multi-interest representation.

---

## R9-A14 — Interest edges should be targetable to more than Topics / 兴趣关系不能只指向“主题”

**HARD INVARIANT（硬边界）.**

Where useful, interest may relate to Topic（主题）, Place（地点）, Knowledge Entity（知识实体）, Work（作品）, content type, creator/account, collection/series or other future supported discovery targets.

These targets retain their own identity; the Interest Graph（兴趣图谱） is a user-to-target relevance layer, not a replacement ontology.

---

## R9-A15 — Interest derivation should retain provenance / 兴趣推断应保留必要的推导来源

**HARDENING（架构加固）.**

Material Derived Interest State（派生兴趣状态） should be explainable from signal families, relevant time/context and model/policy version at an appropriate level rather than existing as an unexplained permanent label.

This does not require exposing sensitive raw behavioral logs publicly.

---

## R9-A16 — Recency and frequency are distinct / 最近发生与重复发生不是同一维度

**HARD INVARIANT（硬边界）.**

A recent single action and repeated behavior over months can both matter, but they represent different evidence. The architecture must permit downstream logic to distinguish Recency（近期性）, Frequency（频率）, Persistence（持续性） and Breadth（广度） rather than forcing them into one irreversible score.

---

## R9-A17 — Repeated return can be stronger evidence of durable interest than one long session / 重复回访可比单次超长停留更能说明持续兴趣

**ADAPTIVE RULE（弹性规则）.**

Repeated voluntary returns across sessions/days may support durable interest inference. Exact time windows, counts and thresholds must be calibrated later and may differ by content type.

This is a principle, not a fixed formula.

---

## R9-A18 — Surface context changes signal meaning / 不同页面情境会改变行为信号的含义

**HARD INVARIANT（硬边界）.**

The same action in Search（搜索）, Home / For You（首页 / 为你推荐）, Following（关注）, Topic（主题）, Place（地点）, canonical reading, notification or deep-link context may carry different intent.

Round 9 must preserve Surface / Entry Context（页面 / 入口情境） so later recommendation systems can learn surface-specific behavior rather than assuming one global meaning.

---

## R9-A19 — Content type changes signal interpretation / 内容类型会改变行为信号的解释方式

**HARD INVARIANT（硬边界）.**

Reading a long scholarly essay, scanning a place guide, opening a primary-source image, watching short media and reading a community reply are different consumption patterns.

Completion, dwell and repetition must be interpreted relative to Primary Content Type（主要内容类型） and format rather than using one universal behavioral threshold.

---

## R9-A20 — Cold start may combine declared interest, context and broad exploration / 冷启动可结合明确兴趣、情境与广泛探索

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

Before sufficient behavior exists, Project 3 may use explicit interest selection, language/context, broadly valuable/popular material, editorial curation and deliberate exploration.

Cold start must not permanently lock the user to initial choices. Later evidence may refine or supersede inferred assumptions while preserving explicit user controls.

---

## R9-A21 — User control can correct stale or wrong inferences / 用户可以纠正陈旧或错误的兴趣推断

**HARD PRODUCT REQUIREMENT at architecture level（架构级硬要求）.**

The future product must preserve the possibility of user-facing controls such as Not Interested（不感兴趣）, Show More/Less（多看 / 少看）, interest editing, unfollow, history-aware correction or Recommendation Reset（推荐重置）.

Exact V1 control set and UX（用户体验） remain deferred, but inferred interest may not be architected as unchangeable hidden truth.

---

## R9-A22 — Interest decay must be possible without deleting history / 兴趣影响可以衰减，但不等于删除历史

**HARDENING（架构加固）.**

A system may reduce the current recommendation influence of old signals or dormant interests while retaining lawful historical evidence needed for analytics, explanation, user history or future reactivation under privacy/retention policy.

Decay policy must remain versionable rather than hard-coded as one permanent half-life.

---

## R9-A23 — Exploration feedback must not immediately self-reinforce into a filter bubble / 探索内容的偶发互动不能立刻自我强化成信息茧房

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

When the platform deliberately introduces exploratory content outside established interests, one incidental click/open must not automatically be treated as enough evidence to flood subsequent recommendations with that subject.

Emerging-interest promotion should require context-aware evidence and remain reversible.

---

## R9-A24 — Interest modeling must support serendipity rather than eliminate it / 兴趣建模必须支持偶然发现，而不是消灭偶然发现

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Interest Graph（兴趣图谱） exists to improve relevance, not to reduce the entire platform to predicted past preferences. The later recommendation layer must be able to select candidates outside high-confidence interests for exploration/diversity.

Exact exploration ratios and algorithms are deferred to Discovery & Recommendation（发现与推荐）.

---

## R9-A25 — Interest data should be privacy-minimized and purpose-limited / 兴趣数据必须遵循隐私最小化与用途限制

**HARD INVARIANT（硬边界）.**

Collect/retain only behavior reasonably necessary for the product purposes actually adopted. Interest/behavior data must not automatically become identity proof, governance authority, sensitive-profile inference, advertising entitlement or unrelated commercial scoring.

Sensitive categories and jurisdiction-specific obligations require later privacy/governance policy.

---

## R9-A26 — Interest signals and Account Trust evidence may overlap in raw events but not in meaning / 兴趣信号与账户信任可能使用同一原始事件，但语义不能混合

**HARD INVARIANT inherited from earlier rounds（继承前轮次的硬边界）.**

For example, sustained healthy reading may contribute limited Account Maturity（账户成熟度） evidence while also providing interest evidence. These are separate evaluations with separate purposes, policies and outputs.

The platform must not create a single hidden score that simultaneously determines recommendation taste, account trust and governance power.

---

## R9-A27 — No universal numerical weights are locked in Round 9A / 第九轮 A 不锁定统一数值权重

**SCOPE GUARD（范围护栏）.**

Round 9A does not decide rules such as `save = +10`, `dwell 30s = +5`, `share = +20`, fixed decay half-lives or one global confidence threshold.

Weights/models must later be task-specific, content-type-aware, empirically calibrated and changeable under the Rule Evolvability & Change Architecture（规则可演进与变更架构）.

---

## R9-A28 — Model architecture is deferred until semantics are stable / 信号语义稳定前不决定模型架构

**SCOPE GUARD（范围护栏）.**

This workshop does not require Neural Network（神经网络）, Embedding（嵌入）, Vector Database（向量数据库）, Graph Database（图数据库）, Reinforcement Learning（强化学习）, Contextual Bandit（上下文多臂老虎机） or LLM（大语言模型）.

Those are implementation/model choices. A simple V1 may use explicit relations + rules + basic statistical features while preserving the same semantic contracts for future scale.

---

## R9-A29 — “Big data recommendation” is a scale state, not a prerequisite for correct architecture / “大数据推流”是规模阶段，不是正确架构的前置条件

**HARDENING（架构加固）.**

Project 3 should design signal contracts, event semantics, provenance and interest-state boundaries so they can scale into industrial recommendation systems later, without requiring industrial-scale ML infrastructure before traffic/data justify it.

The system should be able to evolve from low-data heuristics and editorial/exploration blends toward richer learned models without redefining what historical user actions meant.

---

## R9-A30 — Reader-interest interpretation remains evolvable / 读者兴趣解释规则必须可演进

**HARDENING from Rule Evolvability & Change Architecture（来自规则可演进与变更架构的加固）.**

Signal interpretation, decay, confidence, interest lifecycle transitions and correction/reset behavior may change as evidence accumulates. Material changes require appropriate Rule/Model Version（规则 / 模型版本）, impact analysis, staged rollout, rollback/compatibility and historical interpretability where consequential.

---

# Current semantic signal families / 当前语义信号族

Round 9A currently recognizes the following broad families without assigning universal weights:

1. Explicit Positive（显式正反馈） — follow, save, like/reaction, deliberate subscription and future explicit “show more” actions.
2. Explicit Negative / Correction（显式负反馈 / 纠错） — not interested, hide, show less, unfollow, mute, reset/edit controls.
3. Implicit Consumption（隐式消费行为） — impression/exposure, open, dwell, scroll/progress, completion, repeat view/return.
4. Intent / Search（意图 / 搜索） — query, filter, reformulation, result selection and navigation from high-intent surfaces.
5. Relationship / Follow（关系 / 关注） — creator/topic/place/other follow relations while preserving that follow != authority.
6. Contribution / Participation（贡献 / 参与） — reply, answer, discussion, reference/share and other active participation with sentiment uncertainty.
7. Context / Session（情境 / 会话） — recent sequence, session topic, device/surface/entry context and short-term intent.
8. Exposure / Non-action（曝光 / 未行动） — delivered/visible/skipped/non-action evidence with uncertainty.
9. Derived Interest State（派生兴趣状态） — multi-target, multi-interest, temporal interest representation derived from the above with provenance/confidence.

# Mature-platform borrow/not-copy checkpoint / 成熟平台“借鉴而非照抄”检查点

This Workshop A adopts cross-platform principles from the benchmark only where they match Project 3:
- X: preserve action-specific signals and multi-stage future architecture, reject viral/social objective as default;
- Pinterest: preserve multi-interest + long/short-term coexistence + diversity need, reject exact embedding/cluster implementation as an architecture mandate;
- YouTube: preserve satisfaction != engagement and explicit negative feedback, reject watch-time-centric assumptions for reading/knowledge content;
- TikTok: preserve rapid session adaptation and deliberate diversification, reject hyper-reactive short-video dynamics as universal behavior;
- LinkedIn: preserve evolving interests, skips/context and beyond-network discovery, reject professional-profile assumptions outside relevant surfaces;
- Spotify: preserve exploration/exploitation distinction and experiment separation, reject RL/bandit as required technology;
- Netflix: preserve multi-intent/page-composition thinking, reject entertainment-consumption assumptions where not transferable;
- Instagram / Meta: preserve user correction/reset capability;
- Reddit: preserve multi-action semantics and final product-rule re-ranking idea, reject vote/community popularity as truth;
- Bluesky: preserve long-term possibility of algorithmic/user choice without making custom-feed marketplaces an early-V1 requirement.

# Open questions intentionally deferred / 明确延后的问题

Not blockers for Workshop A:
- exact numerical weights/confidence thresholds;
- exact Interest Lifecycle（兴趣生命周期） state names;
- exact event retention windows;
- exact recommendation-reset UX;
- content-length normalization formulas;
- graph vs vector vs relational storage;
- user embedding architecture;
- retrieval/ranking/re-ranking model choices;
- cold-start ratios;
- diversity/exploration percentages;
- final optimization metrics;
- notification recommendation logic.

# Next review area / 下一审查区域

Next Round 9 work should examine **Interest Graph Structure & Temporal Model（兴趣图谱结构与时间模型）**: what an interest edge/state actually connects, how explicit and inferred interests coexist, multi-interest clusters, short-term/session vs durable interest, decay/reactivation, confidence/uncertainty, correction/reset, and how interests connect to Topic / Place / Knowledge Entity / Work / content type / creator without becoming a second ontology.
