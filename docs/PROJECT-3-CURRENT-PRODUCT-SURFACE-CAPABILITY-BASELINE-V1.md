# Project 3 — Current Product Surface & Capability Baseline V1
# 项目三——当前产品面与能力基线 V1

> **Status:** CURRENT PRODUCT BASELINE / PRODUCT ARCHITECTURE ONLY（当前产品基线 / 仅产品架构）  
> **Purpose:** provide one safe product-level handoff that says what Project 3 currently has, what is only a capability, what is deferred, and what must not be inherited from legacy planning.  
> **Sources:** Rounds 1–5 Product Planning Reconstruction V2 + source audit; Product Concept Provenance Matrix V2 + audit; sealed Round 6–11 current truth.  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

# 0. Core rule / 核心规则

This baseline separates four layers:

1. **Confirmed Product Surface（已确认产品面）** — a user-facing surface/product function is actually supported by post-reset architecture.
2. **Confirmed Capability（已确认能力）** — the user/product need exists, but no specific page/container is implied.
3. **Deferred Product Subject（延后产品主题）** — domain is legitimate but exact model remains undecided.
4. **Legacy / Prototype Only（旧方案 / 原型仅参考）** — must not steer new design without revalidation.

A page name, route, component or old preview is never promoted simply because it already exists.

---

# 1. Confirmed user-facing product surfaces / 已确认的用户产品面

## S1 — Home / For You（首页 / 为你推荐）
Role:
- cross-domain default discovery;
- value visible without first choosing a category;
- mixed content families;
- recommendation + exploration / serendipity;
- later Round 10 uses provisional Hybrid Homepage（混合式首页） composition.

Status: **CONFIRMED**.

## S2 — Explore（探索）
Role:
- broader discovery beyond strongest inferred interests;
- distinct from Home;
- may use interest/context signals without collapsing into Home.

Status: **CONFIRMED**.

## S3 — Following（关注）
Role:
- explicit relationship surface;
- shows eligible updates from followed objects;
- later Round 10 keeps Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新） as provisional direction.

Status: **CONFIRMED**.

## S4 — Search（搜索）
Role:
- query-led retrieval;
- exact/direct results retain a clear route;
- result classes preserve content/provenance distinctions.

Status: **CONFIRMED**.

## S5 — Topic Surface（主题页面 / 主题视图）
Role:
- entity-anchored browsing/discovery around a Topic;
- may personalize ordering while remaining anchored to the opened Topic.

Status: **CONFIRMED**.

## S6 — Place Surface（地点页面 / 地点视图）
Role:
- place-anchored cultural/travel/local discovery;
- may personalize ordering while remaining anchored to the opened Place.

Status: **CONFIRMED**.

## S7 — Canonical Classical Text Reader / Research Surface（古籍原典阅读 / 研究界面）
Role:
- read canonical works/chapters/passages;
- preserve source/edition/provenance integrity;
- support related interpretation/discussion through companion objects;
- no ordinary social thread directly embedded as canonical content.

Status: **CONFIRMED / REVALIDATED**.

## S8 — Publication Reading Surface（作品 / 文章阅读面）
Supports distinct content classes:
- Editorial / Teaching（编辑 / 教学）;
- Contributor（贡献者）;
- Community / User Publication（社区 / 用户作品）.

Status: **CONFIRMED**.

## S9 — Unified Community（统一社区）
Role:
- Community Publications（社区发布物）;
- Discussion Threads（讨论线程）;
- Replies / Comments（回复 / 评论）;
- provisional First-class Question Mode（一级问答模式）;
- Domain / Topic / Place / Home / Following / Explore projections over one network.

Status: **CONFIRMED**.

Important:
exact old `/community` aggregate page/layout is **not** frozen by this confirmation.

## S10 — Candidate Review Surface（候选评议面）
Role:
- publicly observable Candidate（候选作品） stage;
- structured review;
- same underlying Work remains identifiable;
- formal nomination environment is bias-reduced/semi-blind where applicable.

Status: **CONFIRMED**.

## S11 — Recognized Works destination/function（高认可作品目的地 / 功能）
Role:
- surface/route(s) for work-level Recognized（已认可） works;
- separate from canonical-source authority.

Status: **CONFIRMED FUNCTION**.

Open:
- final public name;
- one destination vs multiple projections;
- exact IA/layout.

## S12 — Issue（议题） publication/curation surface
Role:
- editorial curation container;
- versioned publication;
- stable historical snapshots;
- mixed source/content classes while preserving original identity/authority;
- latest-valid-first remains provisional current direction.

Status: **CONFIRMED / REVALIDATED**.

## S13 — Profile / Identity Detail（个人资料 / 身份详情）
Role:
- explain identity / qualification / scoped expertise / representation;
- preserve “Profile explains identity; Content is judged as work.”

Status: **CONFIRMED**.

## S14 — Contributor Application / Qualification Experience（贡献者申请 / 资格体验）
Role:
- self application / invitation / legitimate onboarding;
- claim-proportional evidence;
- scoped Expertise;
- pseudonym/privacy-aware flow.

Status: **CONFIRMED**.

## S15 — Material Capability Status / Recovery Surface（重大能力状态 / 恢复面）
Role:
- explain consequential capability loss/protection state;
- broad reason category;
- available review/recovery path;
- never expose a farmable global trust score.

Status: **CONFIRMED, EXACT UX DEFERRED**.

## S16 — Domain Surface / Scoped Domain View（领域页面 / 领域范围视图）
Role:
- domain-anchored projection over the same underlying content/community network;
- coexists with Home / Topic / Place / Following / Explore rather than creating an isolated forum/content universe;
- exact domain taxonomy, naming and final UX remain evolvable.

Status: **CONFIRMED / EXACT TAXONOMY & UX EVOLVABLE**.

---

# 2. Confirmed capabilities without a fixed product container / 已确认但不绑定具体容器的能力

## C1 — Save / Bookmark（收藏 / 书签）
Meaning:
personal reading intent by default, not public endorsement.

## C2 — Follow / Subscribe relationship（关注 / 订阅关系）
Meaning:
explicit discovery/delivery relationship, not authority/endorsement.

## C3 — Reading History（阅读历史）
Meaning:
personal/behavioral state; later Interest Graph may use it under privacy/purpose rules.

No dedicated page is implied.

## C4 — Related Reading / Related Next（相关阅读 / 相关推荐）
Meaning:
typed relation/current-task anchored discovery.

## C5 — Private Notes（私人笔记）
Meaning:
private user thinking/annotation state, separate from public discussion.

Exact UX/container remains open.

## C6 — Saved Passages（保存段落）
Meaning:
personal reference to canonical text/passage without editing canonical content.

Exact UX/container remains open.

## C7 — Public Browse / Archive capability（公开浏览 / 归档能力）
Meaning:
users need ways to browse/find durable published content over time.

No single `/articles` archive container is currently mandatory.

## C8 — Collections / Reading Paths / Exhibitions / Dossiers（合集 / 阅读路径 / 展览 / 专题档案）
Meaning:
Issue is not the only curation form.

Exact product model remains open.

## C9 — Reader Letter editorial intake（读者来信编辑入口）
Meaning:
reader letters/questions may be editorial acquisition/submission sources.

No standalone old Letters product/page is implied.

## C10 — Question / Answer participation（问答参与）
Meaning:
First-class Question Mode exists provisionally inside unified Community.

It is not automatically the old Ask the Ancient Text（问古书） page.

## C11 — Notification artifact（通知）
Meaning:
derived delivery artifact based on authoritative underlying object state.

Full Notifications / Delivery product remains deferred.

## C12 — Create / Publish / Submit（创建 / 发布 / 投稿）
Meaning:
Project 3 has confirmed multi-lane creation/publishing capability across Editorial / Teaching, Contributor and Community/User contexts. Community Create Post / Start Discussion / Ask Question may share composer infrastructure without collapsing object semantics.

Exact editor/composer/container remains open and content-class-specific rules continue to control.

## C13 — Identity / Claim Verification flow（身份 / 主张验证流程）
Meaning:
verification exists as a scoped, claim-specific product capability separate from Contributor Qualification, Work Recognition, ranking and governance standing.

Exact UX/vendor/evidence collection remains deferred and claim-proportional.

## C14 — Report / Appeal / Correction / Restoration workflow（举报 / 申诉 / 纠错 / 恢复流程）
Meaning:
user-facing governance workflows exist as confirmed capabilities; Report is an input rather than proof, and moderation/correction/appeal outcomes remain distinct.

Exact cross-platform governance UX and policy remain for the dedicated governance round.

## C15 — Editorial submission / open call / commission intake（编辑投稿 / 公开征稿 / 约稿入口）
Meaning:
Round 11 confirms multiple editorial acquisition routes including submission, open call, commission, reader letter/question and collaboration.

No single standalone page or one universal workflow is implied.

---

# 3. Deferred product domains / 延后产品领域

## D1 — Membership（会员）
Confirmed:
- a future paid/support/product relationship subject exists;
- payment cannot buy authority/trust/Recognition/organic reach;
- normal published content baseline remains public.

Not decided:
- value proposition;
- benefits;
- public page/container;
- tiers;
- names;
- prices;
- cadence;
- supporter identity presentation;
- service relationship.

## D2 — Services / Monetization（服务 / 商业化）
Confirmed:
the domain remains a later Product Architecture subject.

Removed from current architecture（已从当前架构删除）:
- Custom Reading（定制解读）;
- Custom Ebook Studio（定制电子书工作室）;
- their old forms/routes/flows（旧表单 / 路由 / 流程）.

These remain historical provenance（历史溯源）only and are not candidates for Round 13（第十三轮）revalidation.

## D3 — Notifications / Delivery（通知 / 投递）
Confirmed:
notification semantics exist.

Deferred:
- eligibility;
- channels;
- urgency;
- batching;
- quiet hours;
- fatigue;
- notification-specific ranking;
- digest/product packaging.

## D4 — User-created Groups / independent communities（用户自建群组 / 独立社群）
Deferred by Round 8.

## D5 — Private Messaging（私信）
Deferred by Round 8.

## D6 — Full Repost Graph（完整转发关系图）
Deferred by Round 8.

## D7 — Paid / Sponsored discovery（付费 / 赞助发现）
Not authorized by Round 10; future commercial module only if explicitly designed.

## D8 — Platform-wide Governance / Moderation / Corrections consolidation（平台级治理 / 审核 / 纠错整合）
Confirmed:
- governance/moderation/correction capabilities already exist across Recognition, Identity/Permission, Community and Issue architecture;
- the remaining dedicated round is a platform-wide reconciliation/completeness subject, not permission to erase or redesign sealed domain semantics from scratch.

Deferred:
- unresolved cross-domain policy/UX boundaries;
- full moderation/correction/appeal integration where later architecture has intentionally deferred detail.

---

# 4. Legacy concepts not allowed to steer current design / 不得继续主导当前设计的旧概念

## L1 — Reading Room（阅读室）
Status:
**EXISTENCE UNRESOLVED**.

The reading need is real; the old named container is not confirmed.

## L2 — VIP Library（会员内容库）
Status:
**HISTORICAL ONLY**.

## L3 — Reader / Patron fixed tiers（Reader / Patron 固定档位）
Status:
**HISTORICAL AS FIXED MODEL**.

## L4 — Member-only article / Issue / Archive content
Status:
**HISTORICAL / NOT AUTHORIZED**.

## L5 — old public Reader Notes component
Status:
**SEMANTICALLY ABSORBED** into broader Community/Reply/Discussion semantics.

Private Reader Notes remain a separate current capability class.

## L6 — old standalone Letters page
Status:
**EXISTENCE UNRESOLVED**.

The reader-letter editorial route survives; the page does not automatically survive.

## L7 — Ask the Ancient Text（问古书） old standalone form/page
Status:
**EXISTENCE UNRESOLVED**.

Current Question Mode exists independently.

## L8 — old `/community` quiet-front-porch aggregate page
Status:
**EXACT CONTAINER/LAYOUT UNRESOLVED**.

Unified Community itself is confirmed.

## L9 — old standalone Membership join/sales page
Status:
**CONTAINER EXISTENCE/SHAPE UNRESOLVED**.

Membership subject itself is confirmed.

## L10 — Custom Reading old page/form（定制解读旧页面 / 表单）
Status（状态）:
**REJECTED PRODUCT / HISTORICAL PROVENANCE ONLY（产品已淘汰 / 仅历史溯源）**.

## L11 — Custom Ebook Studio old page/form（定制电子书工作室旧页面 / 表单）
Status（状态）:
**REJECTED PRODUCT / HISTORICAL PROVENANCE ONLY（产品已淘汰 / 仅历史溯源）**.

## L12 — Patron Vote / paid governance
Status:
**HISTORICAL AS GOVERNANCE PRODUCT**.

## L13 — annual physical journal / supporter gift as promised Membership entitlement
Status:
**NOT CURRENT TRUTH**.

---

# 5. Prototype routes: useful code, not final architecture / 原型路由：代码可用，但不是最终架构

Existing source validation routes include:

- `/`;
- `/articles`;
- `/articles/[slug]`;
- `/issues`;
- `/issues/[slug]`;
- `/topics`;
- `/topics/[slug]`;
- `/collections`;
- `/collections/[slug]`;
- `/search`.

Interpretation:

- `/` maps to a confirmed Home need, but final composition evolves.
- article detail maps to confirmed publication reading.
- Issue routes map to confirmed Issue product.
- Topic routes map to confirmed Topic surface.
- Search maps to confirmed Search product.
- `/articles` as one archive/browse page is **not final IA by existence alone**.
- `/collections` as one curation product is **not final IA by existence alone**.

No route is deleted or frozen merely because of this baseline.

---

# 6. Current product journeys / 当前用户路径

## J1 — Discover → Read
```text
Home / For You
or Explore / Search / Topic / Place / Following
→ open canonical / editorial / contributor / community work
→ Related / Next
→ optional Save / Follow / Discussion
```

## J2 — Read canonical text → discuss without contaminating source
```text
Canonical Work / Passage
→ read source / edition / notes
→ open companion Discussion / Question
→ social contribution remains separate from canonical record
```

## J3 — Community participant
```text
ordinary account
→ publish / discuss / ask / reply
→ appear on eligible Community/discovery projections
→ durable strong Work may later enter Recognition opportunity
```

## J4 — Work Recognition
```text
Normal Work
→ eligible nomination opportunity
→ Candidate
→ Candidate Review
→ Recognized / Revision / Governance outcome
```

## J5 — Contributor
```text
user / invited expert / legitimate onboarding
→ Contributor Application
→ scoped evidence
→ Contributor Qualification + Expertise Scope
→ richer profile/tools/opportunities
```

## J6 — Future Membership
```text
ordinary public product remains viable
→ optional Membership relationship/value
→ details not yet defined
```

No Reading Room is implied.

---

# 7. Current product-planning gap map / 当前产品规划缺口

The following product questions remain open and legitimate:

1. How should confirmed private reading capabilities (notes, saved passages, history, Save) be organized in UX, if at all?
2. Does Project 3 need any distinct personal workspace/container?
3. What exact public browse/archive IA should complement Search / Topic / Place / Issue / Explore?
4. What is the final Collections/reading-path product model?
5. What should the reader-letter submission experience be?
6. Does the old Ask the Ancient Text idea survive as a distinct editorial product, merge into Question Mode, or disappear?
7. Does unified Community need one dedicated aggregate page, and if yes what job does it perform?
8. What is Membership actually for?
9. What service / monetization products should Ink & East（墨与东方）actually have after removing the rejected Custom Reading（定制解读） / Custom Ebook Studio（定制电子书工作室） legacy concepts?
10. What is the full Notifications / Delivery product?
11. What public form/name should Recognized Works use?
12. What is the future cooperation relationship（未来合作关系）between the independent products Ink & East（墨与东方）and Spatial Flow（空间流）?

These are product questions, not errors to fill from legacy documents.

---

# 8. Mandatory use / 强制使用方式

Future product work should begin here, then consult the provenance matrix for any legacy term.

If a requested feature is absent from this baseline:

- do not assume it exists;
- find its source;
- classify it;
- discover the need;
- only then create a new product decision.

This baseline must not be used as implementation authorization.
