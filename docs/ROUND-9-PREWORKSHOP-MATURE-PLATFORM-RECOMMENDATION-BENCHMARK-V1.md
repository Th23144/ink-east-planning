# Round 9 — Pre-Workshop Mature-Platform Recommendation Benchmark V1

Status: **RESEARCH INPUT / NOT ARCHITECTURE TRUTH（研究输入 / 非架构定论）**  
Scope: mature recommendation/discovery systems that may inform Round 9 — Reader Behavior & Interest Graph（第九轮——读者行为与兴趣图谱） and the later Discovery & Recommendation（发现与推荐） round.  
Implementation authorization: **NO（否）**.

## Research discipline / 研究纪律

This document is not a copy plan. It extracts reusable principles from mature systems and then tests whether those principles fit Project 3.

Project 3 must not copy:
- another platform's exact weights, thresholds, business objectives or engagement targets;
- another platform's content assumptions when the inventory, user intent or risk model differs;
- engagement-maximization logic that conflicts with Project 3's knowledge/discovery goals;
- opaque ranking behavior merely because it performs well elsewhere.

The correct method is:

`observe mature system → identify underlying problem → extract transferable principle → test against Project 3 product goals → adopt/adapt/reject → keep policy evolvable`.

## Platform reference matrix / 平台参考矩阵

### 1. X — open recommendation architecture reference / 开放推荐架构参考

Public source:
- https://github.com/twitter/the-algorithm
- https://github.com/twitter/the-algorithm-ml

What is useful:
- real-time Unified User Actions（统一用户行为流）;
- User Signal Service（用户信号服务） separating explicit signals such as likes/replies from implicit signals such as profile visits/clicks;
- graph/community representations such as SimClusters（相似兴趣社区表示） and TwHIN（图嵌入）;
- multiple stages rather than one giant formula: candidate generation → light ranking → heavier ranking / downstream processing;
- multi-task prediction rather than collapsing every action into one label.

Important limitation:
The public repositories expose substantial components and some ML models, but should not be treated as a complete, current, end-to-end mirror of X production. Project 3 should use them as an architecture/reference corpus, not as a codebase to copy.

Project 3 takeaway:
- strongly relevant for signal plumbing, graph-based interest representation, candidate-stage separation and action-specific modeling;
- do **not** inherit X's social/viral objective or repost-centric assumptions by default.

### 2. Pinterest — strongest reference for multi-interest discovery / 多兴趣发现的重点参考

Public engineering sources:
- https://medium.com/pinterest-engineering/pinnersage-multi-modal-user-embedding-framework-for-recommendations-at-pinterest-bfd116b49475
- https://medium.com/pinterest-engineering/how-pinterest-leverages-realtime-user-actions-in-recommendation-to-boost-homefeed-engagement-volume-165ae2e8cde8
- https://medium.com/pinterest-engineering/pinner-progression-better-use-case-representation-driving-weekly-active-user-growth-at-pinterest-bd2131ab238a
- https://medium.com/pinterest-engineering/evolution-of-multi-objective-optimization-at-pinterest-home-feed-06657e33cd10

What is useful:
- one user should not be represented by one single interest vector;
- multiple Interest Clusters（兴趣簇） can coexist and have different maturity/lifecycle states;
- long-term interest representation and real-time recent actions can coexist;
- retrieval → pre-ranking → ranking → re-ranking/blending is a mature multi-stage pipeline;
- diversity is not decorative: Pinterest reports that removing feed diversity can improve immediate actions but hurt longer-term outcomes;
- later positions in a feed can deliberately create room for under-represented interests rather than letting one dominant interest consume the whole page.

Project 3 takeaway:
This is one of the closest conceptual matches because Project 3 expects users to have multiple unrelated or weakly related interests at once: ancient books, architecture, food, travel, philosophy, crafts, places, history, etc. A single global user embedding or one dominant category would be structurally dangerous.

### 3. YouTube — satisfaction must be different from raw engagement / 满意度不能等同于原始互动

Official sources:
- https://support.google.com/youtube/answer/16089387
- https://support.google.com/youtube/answer/16559650
- https://blog.youtube/inside-youtube/on-youtubes-recommendation-system/

What is useful:
- separate Appeal（吸引/选择观看）, Engagement（参与/持续观看） and Satisfaction（满意）;
- explicit positive and negative signals coexist: likes, dislikes, Not Interested（不感兴趣）, Don't Recommend Channel（不要推荐此频道）;
- satisfaction surveys are used because watch time alone does not prove satisfaction;
- different surfaces use different signal mixes: homepage and next-item recommendation do not need the same objective;
- context such as device/time can matter without redefining long-term identity.

Project 3 takeaway:
Round 9 must not assume `long dwell time = strong interest` or `click = satisfaction`. Cultural/knowledge material may be long, difficult, controversial or opened for verification rather than enjoyment.

### 4. TikTok — real-time preference learning plus deliberate diversification / 实时偏好学习 + 主动多样化

Official source:
- https://newsroom.tiktok.com/an-update-on-our-work-to-safeguard-and-diversify-recommendations?lang=en

What is useful:
- recent interactions can rapidly influence the next set of recommendations;
- recommendation systems need explicit mechanisms to interrupt repetitive patterns;
- diversified content is deliberately interspersed with familiar content rather than relying on relevance alone.

Project 3 takeaway:
Useful for session-level / short-term intent and exploration, but Project 3 should not copy a short-video engagement objective or hyper-react to one transient session.

### 5. LinkedIn — relevance + trust + evolving long-term context / 相关性 + 信任 + 长期情境变化

Official engineering sources:
- https://www.linkedin.com/blog/engineering/feed/engineering-the-next-generation-of-linkedins-feed
- https://www.linkedin.com/blog/engineering/feed/community-focused-feed-optimization
- https://www.linkedin.com/help/linkedin/answer/a9554004

What is useful:
- retrieval and ranking are separate stages;
- multiple candidate sources can be combined;
- user history is sequential and interests evolve over time;
- repeated skips are meaningful and should be modeled separately from engagement;
- valuable content may come from outside the immediate social graph;
- recent feed work explicitly emphasizes useful/relevant content rather than a popularity contest;
- cold-start can use explicit interest declaration before rich behavioral history exists.

Project 3 takeaway:
Useful because Project 3 also combines trusted/known sources, official content, user-generated content and broader discovery. Popularity must not dominate quality or topical fit.

### 6. Spotify — exploitation vs exploration and experiment discipline / 熟悉内容利用 vs 新内容探索 + 实验纪律

Official engineering sources:
- https://engineering.atspotify.com/2020/01/for-your-ears-only-personalizing-spotify-home-with-machine-learning
- https://engineering.atspotify.com/2021/11/the-rise-and-lessons-learned-of-ml-models-to-personalize-content-on-home-part-i
- https://engineering.atspotify.com/2026/1/why-we-use-separate-tech-stacks-for-personalization-and-experimentation

What is useful:
- candidate generation and ranking are distinct stages;
- familiar content and discovery content have different product roles;
- exploration/exploitation is an explicit product tradeoff rather than an accidental side effect;
- personalization serving and experimentation/evaluation should be separate concerns;
- contextual-bandit / reinforcement-learning techniques are optional tools, not product architecture requirements.

Project 3 takeaway:
Useful for balancing “give me what I already love” with “show me something I did not know I wanted”, and for keeping experimentation infrastructure separate from the recommender's live decision logic.

### 7. Netflix — page-level composition and intent diversity / 页面级组合与多意图

Official sources:
- https://help.netflix.com/en/node/100639
- https://netflixtechblog.com/learning-a-personalized-homepage-aa8ec670359a

What is useful:
- recency can outweigh older interactions without erasing them;
- cold-start can use explicit selection, then allow observed behavior to supersede initial declarations;
- homepage personalization can operate at several levels: which groups/rows appear, what items are inside them, and ordering;
- a good page must cover multiple interests/intents and also allow exploration;
- continuation behavior and discovery behavior are different intents and should not be forced through one identical objective.

Project 3 takeaway:
Very relevant to a future Project 3 homepage where the system may compose multiple modules/shelves across Domains/Topics/Places/content classes rather than one endless homogeneous feed.

### 8. Instagram / Meta — user agency over recommendation state / 用户对推荐画像的控制权

Official source:
- https://about.fb.com/news/2024/11/introducing-recommendations-reset-instagram/

What is useful:
- users need tools to reshape recommendations;
- a Recommendation Reset（推荐重置） concept recognizes that inferred interests can become stale or wrong;
- explicit feedback should be able to correct machine inference rather than the system treating its own history as permanent truth.

Project 3 takeaway:
Interest Graph（兴趣图谱） must be correctable. Users should eventually be able to reduce, remove, reset or explicitly shape some inferred interests without deleting their entire account history.

### 9. Reddit — multi-stage recommendation plus product-rule re-ranking / 多阶段推荐 + 产品规则重排序

Engineering reference:
- https://www.reddit.com/r/RedditEng/comments/1kqjhwf/an_indepth_look_at_the_notifications_recommender/

What is useful:
- Budget / Retrieval / Ranking / Re-ranking（预算 / 召回 / 排序 / 重排序） can be separate stages;
- multi-task models can predict clicks, upvotes and comments independently;
- final re-ranking may apply product constraints after ML ranking;
- user fatigue / notification volume is a separate optimization problem from relevance.

Project 3 takeaway:
Useful for future notifications and multi-action prediction. Avoid turning community vote mechanics into universal recommendation truth.

### 10. Bluesky — algorithmic choice / 算法选择权

Official source:
- https://bsky.social/about/blog/7-27-2023-custom-feeds

What is useful:
- a platform can let users choose between different feed algorithms or curated feed definitions;
- one “For You” algorithm does not have to be the only legitimate way to browse.

Project 3 takeaway:
Not necessarily an early-V1 feature, but it is a strong long-term reminder: personalized ranking should not make Topic / Place / Following / Explore / chronological or curated surfaces disappear. User choice between discovery modes may be strategically valuable.

## Cross-platform principles worth borrowing / 值得借鉴的跨平台共同原则

### P1 — Multi-stage recommendation is the norm / 多阶段推荐是常态

Mature systems commonly separate:

`candidate retrieval（候选召回） → lightweight scoring / pre-ranking（轻量评分 / 预排序） → ranking（排序） → re-ranking / blending（重排序 / 混排）`

Project 3 should preserve these conceptual layers even if early V1 uses simpler implementations.

### P2 — Signals must retain semantics / 信号必须保留各自语义

A click, dwell, save, follow, reply, answer, share, search, hide, skip and explicit “not interested” action should not be collapsed at data-model level into one engagement number.

### P3 — Short-term and long-term interest must coexist / 短期兴趣与长期兴趣必须并存

One intense session should not permanently redefine a user. Long-term taste, emerging interests, session intent and temporary curiosity are different signals.

### P4 — One user can have many unrelated interests / 一个用户可以同时拥有多个彼此无关的兴趣

Do not force all behavior into one global interest vector/category. Multi-interest representation is especially important for Project 3.

### P5 — Negative and corrective signals are first-class / 负反馈与纠错信号是一等公民

Skip, dismiss, “not interested”, “show less”, topic suppression and future recommendation reset are not secondary UX details; they are required to correct inference.

### P6 — Satisfaction is not identical to engagement / 满意度不等于互动

Long watch/read time, comments or controversy may indicate effort, confusion, anger or verification rather than positive preference. Round 9 must preserve uncertainty around behavioral interpretation.

### P7 — Exploration is an explicit objective / 探索必须是明确目标

If the model optimizes only predicted immediate relevance, it can create a feedback loop that narrows the user's world. Project 3 already requires cross-domain exploration / serendipity.

### P8 — Diversity must be enforced at composition level, not only item level / 多样性需要在最终组合层控制

A feed can contain individually relevant items and still be globally repetitive. Re-ranking/blending should eventually reason about repeated topics, creators, content types, places and interest clusters across the whole page/session.

### P9 — Popularity and quality must remain distinct / 热度与质量必须分离

High engagement can be useful for retrieval or social relevance, but it must not automatically become source authority, Recognition（作品认可）, contributor standing or universal recommendation priority.

### P10 — Different surfaces need different objectives / 不同页面需要不同目标

Home / For You（首页 / 为你推荐）, Following（关注）, Explore（探索）, Topic（主题）, Place（地点）, Search（搜索）, Notifications（通知） and Next / Related（下一项 / 相关推荐） should not be assumed to use one identical ranking objective.

### P11 — Personalization and experimentation should be separable / 个性化服务与实验评估应分离

The system should support testing new ranking policies/models without making the experimental framework itself the recommendation engine.

### P12 — User agency matters / 用户应有推荐控制权

The platform should eventually support explicit interest shaping, negative feedback, recommendation correction/reset and alternate discovery surfaces.

## Project 3-specific adaptation / Project 3 专属适配

Project 3 should not define success as “maximum engagement”. The later recommender should balance at least:
- relevance to current intent;
- durable user value / satisfaction;
- discovery and serendipity;
- diversity across interests/content classes/creators/places;
- content eligibility and governance state;
- source/provenance/Recognition distinctions where relevant;
- freshness when freshness matters;
- continuation when a user is intentionally following a series/thread/topic;
- avoidance of repetitive/low-information feed loops;
- explicit user control and negative feedback;
- privacy/data-minimization constraints.

Exact optimization metrics and weights remain deferred. This benchmark does not authorize a single universal objective function.

## Anti-copy rule / 防照抄规则

Before adopting any mature-platform mechanism, Round 9 must ask:
1. What problem was that platform solving?
2. Is Project 3 solving the same problem?
3. Does the source platform optimize entertainment, social virality, retention, commerce, professional utility or discovery?
4. Which principle transfers, and which business objective must be rejected?
5. What data volume does the mechanism assume?
6. Can Project 3 support a simpler V1 form while preserving the future architecture?
7. Does the mechanism create filter-bubble, popularity, manipulation, privacy or governance risk?
8. Can the rule/model later be changed under the Rule Evolvability & Change Architecture（规则可演进与变更架构）?

## Recommended Round 9 research posture / 第九轮建议研究姿态

Use **Pinterest + YouTube + X + LinkedIn + Spotify** as primary architecture/signal references; use **TikTok** for session-level responsiveness/diversification; **Netflix** for page/module composition and multiple intents; **Instagram / Meta** for user correction/reset; **Reddit** for community-action multi-task modeling and downstream re-ranking; **Bluesky** as a long-term reference for algorithmic/user choice.

Do not select one platform as “the template”. Project 3 should be a synthesis constrained by its own goals.

## Next step / 下一步

Round 9 Workshop A（第九轮工作坊 A） should now define the **Reader Behavior Signal Model（读者行为信号模型）**, beginning with semantic signal classes rather than numerical weights:
- Explicit Positive（显式正反馈）;
- Explicit Negative / Correction（显式负反馈 / 纠错）;
- Implicit Consumption（隐式消费行为）;
- Intent / Search（意图 / 搜索）;
- Relationship / Follow（关系 / 关注）;
- Contribution / Participation（贡献 / 参与）;
- Context / Session（情境 / 会话）;
- Exposure / Non-action（曝光 / 未行动）;
- Derived Interest State（派生兴趣状态）.

Numerical weights, model architecture, embeddings, vector databases, reinforcement learning and final ranking equations remain out of scope until the semantic signal model is stable.