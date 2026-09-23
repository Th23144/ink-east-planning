# PR #53 — Cross-Round Regression Audit Against Superseded Directions
# PR #53 —— 针对已淘汰方向的跨轮回归审计

> **Status:** REGRESSION AUDIT COMPLETE / HARDENING REQUIRED（回归审计完成 / 需要文档加固）  
> **Scope:** Product Architecture Rounds 1–12 current chain + high-risk legacy planning sources（产品架构第 1–12 轮当前链 + 高风险旧规划来源）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Purpose:** detect whether later rules silently drifted back into previously superseded product directions.

---

## 0. Executive result / 结论一览

The audit found **one real active regression cluster** and **several documentation-contamination hazards**.

### Active regression / 真实回归

**Round 12 Workshop A（第十二轮工作坊 A） drifted back toward the old paywall/VIP-content model.**

It reintroduced assumptions such as premium-content access as a Membership entitlement example, Archive access as a Membership entitlement, Issue/object Membership access semantics, paywall teaser leakage, and a benefit model centered partly on gated content.

That direction conflicts with the restored public-content baseline and is now corrected by `docs/ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`.

Round 12 Workshop A is therefore **REOPENED / PARTIALLY SUPERSEDED（重新打开 / 部分被取代）**.

### No active regression found in sealed Round 6–11 current-truth documents / 第 6–11 轮当前真相未发现实质回退

The current-truth layers for Round 6–11 remain aligned on the major corrected architecture:

- no global user-level / universal trust-score system;
- identity / qualification / recognition / governance remain separate;
- one unified Community System（统一社区系统）;
- Interest Graph（兴趣图谱） is not a permanent user-profile label;
- Recommendation（推荐） is multi-surface and cannot manufacture authority;
- paid/sponsored placement cannot masquerade as organic recommendation;
- Issue（议题） is a curation/publication layer, not the whole platform;
- fixed eight-item/core-character Issue structure is not a platform invariant;
- published Issue history is versioned rather than silently rewritten.

### Documentation hazards / 文档污染风险

Several older documents still contain superseded wording. This is legitimate historical Decision Provenance（决策溯源）, but it is dangerous if a future assistant reads them as current truth.

High-risk examples:

1. `INK-EAST-BRIEF.md` — old 30% paywall, Reader/Patron fixed pricing, VIP Long Read, gated Reader Notes.
2. `INK-EAST-ROADMAP.md` — old VIP Library + paywall IA.
3. `PROJECT-CONTROL-MASTER.md` — later than the Brief, but still contains `99% free + rare VIP articles`, independent VIP Library and member-writing assumptions.
4. `INK-EAST-ROUND-4-CONTRIBUTOR-IDENTITY-CONSOLIDATION.md` — still contains superseded `Verified Contributor`, `Institution` / `Platform-owned Entity` ontology and Contributor-only launch-support wording.
5. early Decision Log / Workshop wording — still contains older Account Weight / VIP language.

These are not current truth where later amendment/current-truth layers supersede them, but they are a proven source of regression risk.

---

# 1. Regression baseline / 回归基线

This audit treats the following as current controlling direction, in descending relevance:

1. `PROJECT-3-START-HERE.md` precedence rules;
2. accepted Rounds 1–6 cross-round amendments + final cross-audit;
3. Round 6 V6 Current Truth + replacement seal;
4. Round 7–11 Current Truth + validation + seals;
5. sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）;
6. later explicit user decisions;
7. `ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md` for current Membership/public-content direction.

Older Brief/Roadmap/static-preview/control files remain historical evidence unless a later controlling document explicitly preserves a rule from them.

---

# 2. Regression matrix / 回归矩阵

Legend: **PASS** = current controlling architecture does not reintroduce the obsolete direction; **ACTIVE FAIL** = current draft drifted back; **DOC HAZARD** = obsolete wording remains in historical/superseded material; **SCOPING NOTE** = wording is not itself a regression but needs later truth to constrain its interpretation.

| # | Superseded / prohibited regression vector（已淘汰 / 禁止回退方向） | Current result（当前结果） | Notes（说明） |
|---:|---|---|---|
| 1 | Project 3 permanently East-only（项目三永久只做东方文化） | PASS | Rounds 1–6 amendment A1 supersedes permanent East-only scope. |
| 2 | Shidianguji as blueprint for the whole platform（识典古籍成为全平台模板） | PASS | It remains a reference for canonical-text lane only. |
| 3 | One generic Article/blog model（退回单一文章/博客模型） | PASS | Current content/object systems preserve canonical, editorial, contributor/community, discussion, Issue and graph distinctions. |
| 4 | User publications as disposable feed posts（用户作品只是一次性信息流帖子） | PASS | Durable identity, relations, search and provenance remain preserved. |
| 5 | Ordinary social comments embedded as canonical-source truth（普通社交评论污染典籍正文） | PASS | Round 8 keeps canonical surfaces and companion discussion separate. |
| 6 | Fixed eight-article / one-core-character Issue ontology（固定八篇 / 一字一期成为平台本体） | PASS | Round 11 explicitly rejects these as platform invariants. |
| 7 | Verified identity / contributor status = work authority（身份认证 / 贡献者身份自动等于作品权威） | PASS + DOC HAZARD | Current architecture rejects it. Round 4 retains stale terminology. |
| 8 | Membership/payment buys authority / Recognition / governance（付费购买权威 / 作品认可 / 治理权） | PASS | Explicitly prohibited. |
| 9 | Contributor-exclusive guaranteed organic launch boost（贡献者专属保证自然流量） | PASS + DOC HAZARD | Cross-round A7 replaces it with platform-wide fair exploration; Round 4 retains historical wording. |
| 10 | Global Lv1/Lv2/Lv3 or one universal Trust Score（全局等级 / 单一信任分） | PASS | Round 6 V6 explicitly rejects it. |
| 11 | One global Account Weight controls unrelated capabilities（单一账户权重控制所有能力） | PASS + DOC HAZARD | Current model is Account × Capability × Context（账户×能力×情境）; old docs retain historical wording. |
| 12 | Mandatory real-name resolution（普通用户强制实名） | PASS | Pseudonymous/unresolved real-person state remains legitimate. |
| 13 | Institution as universal organization type（Institution 作为所有组织的基础类型） | PASS + DOC HAZARD | Current base type is Organization; Round 4 retains stale ontology. |
| 14 | Platform-owned Entity as peer top-level type（平台所有实体作为顶级实体类型） | PASS + DOC HAZARD | Final cross-audit F4 + Round 6 supersede it. |
| 15 | Partner / Official / Editorial relationship automatically grants epistemic standing（合作 / 官方 / 编辑身份自动获得知识权威） | PASS | Current systems remain separate. |
| 16 | Fixed appeal count / rigid one-action-one-entity assumptions（固定申诉次数 / 一个行动只能一个主体） | PASS | Final cross-audit supersedes both. |
| 17 | Separate siloed forum products per domain（每个领域独立论坛孤岛） | PASS | Round 8 seals one unified Community System. |
| 18 | Collapse reactions/saves/follows/replies into one score（互动行为压成一个分） | PASS | Round 8/9 preserve distinct semantics. |
| 19 | Interest Graph = permanent user-profile label（兴趣图谱 = 永久用户标签） | PASS | Round 9 rejects this. |
| 20 | Cultural reading silently infers sensitive belief/identity（文化阅读推断敏感身份 / 信仰） | PASS | Round 9 prohibits it. |
| 21 | One universal recommendation/feed score（所有页面一个推荐分） | PASS | Round 10 is multi-surface/task-specific. |
| 22 | Popularity/trending = truth/authority/Recognition（热门 = 真实 / 权威 / 作品认可） | PASS | Kept separate. |
| 23 | Paid membership / commerce silently boosts organic ranking（付费会员 / 商业消费偷偷提高自然推荐） | PASS | Round 10 explicitly prohibits it. |
| 24 | Anonymous behavior silently bulk-merges into durable account profile（匿名历史静默并入长期账户画像） | PASS | Scoped/transparent handoff prevents this. |
| 25 | Issue clones included Works into a new content identity（议题复制作品形成新内容身份） | PASS | Inclusion/placement are relations. |
| 26 | Issue inclusion creates Work Recognition（进入议题自动变成高认可作品） | PASS | Round 11 separates curation from Recognition. |
| 27 | Issue is the whole content platform（Issue 就是整个平台内容系统） | PASS | Issue remains an editorial layer. |
| 28 | Published Issue silently rewrites as a living collection（已发布议题无痕持续改写） | PASS | Versioned publication + stable historical snapshot. |
| 29 | Personalization silently reorders canonical Issue composition（个性化偷偷改正式目录顺序） | PASS | Round 11 forbids it. |
| 30 | Membership value = paywall / paid article unlock（会员价值 = 付费墙 / 解锁文章） | **ACTIVE FAIL -> CORRECTED** | Round 12 Workshop A reintroduced this; current scope correction supersedes it. |
| 31 | Fixed Reader/Patron names, prices or tier count already decided（Reader/Patron 名称 / 价格 / 档位已锁定） | PASS | Packaging remains unresolved. |
| 32 | VIP Library/member-only content ontology is required（必须存在 VIP 专属内容体系） | **ACTIVE FAIL / LEGACY CONTAMINATION -> CORRECTED** | Legacy planning strongly carries this model; current Round 12 correction rejects it. |
| 33 | Source whitelist/A-B-C-D becomes permanent ontology/copyright truth（白名单 / A-B-C-D 成为永久本体或版权真理） | PASS | Round 7 keeps it evolvable operational policy. |
| 34 | Rules hard-coded and history overwritten on change（规则硬编码 / 改规则就覆盖历史） | PASS | Rule Evolvability architecture prevents this. |

---

# 3. Detailed findings by round / 分轮详细结果

## Rounds 1–5 / 第一至第五轮

Core later corrections are sound: platform scope is not permanently East-only; Recognition（作品认可） is work-level; popularity is not Recognition; Contributor Qualification（贡献者资格） is separate from verification; Account Trust / Reviewer Trust / Governance Authority / Membership are separate; fair exploration replaces contributor-exclusive organic boost.

Documentation risk is high because this area has the densest supersession chain. Round 3 and especially Round 4 retain terms that are no longer canonical. They must never be read alone as current architecture.

## Round 6 / 第六轮

**PASS.** No global levels / prestige ladder / universal trust score; Organization is the base organizational type; Platform-owned / Official / Editorial are capacities/relationships; pseudonymity remains legitimate; Claim != Relationship != Permission; Role != trust/status; Membership cannot purchase verification/expertise/reviewer-governance standing/Recognition.

## Round 7 / 第七轮

**PASS.** No return to a truth score, permanent whitelist ontology, `public-domain work = reusable modern scan`, or Institution-level rights overriding item-level evidence.

## Round 8 / 第八轮

**PASS.** No return to isolated forums, comments as canonical knowledge, engagement as one quality score, creator-as-moderator, or private notes as public social content.

## Round 9 / 第九轮

**PASS.** No return to permanent user labels, one interest score, first-click hard personalization, sensitive belief inference, private notes as recommendation fuel, or permanent behavior hoarding as a product requirement.

## Round 10 / 第十轮

**PASS.** No return to one feed/one score, popularity as authority, paid membership as organic boost, recommendation creating Recognition, anonymous bulk identity fusion, or hard-coded ranking ratios.

## Round 11 / 第十一轮

**PASS WITH SCOPING NOTE（通过，但需要范围解释）.** The Issue architecture does not require a paywall; Membership/Reading Room access was explicitly deferred. However, phrases such as `membership/access constraints`, `public/premium/identically gated`, and per-reader access filtering could be misread after the Round 12 public-content decision.

Current interpretation: Round 11 access/lifecycle machinery may handle rights, privacy, legal, private/unpublished resources, account-specific private state and future non-content member capabilities. It must not be cited as prior authorization for a Membership article/Issue/Archive paywall.

## Round 12 / 第十二轮

**REGRESSION CONFIRMED.** The separation architecture was mostly reasonable; the failure was the value-model assumption that Membership could center on premium content / Archive / Issue access and paywall semantics.

Correct direction is now: published platform content is public; Membership must derive value from supporter relationship, concrete participation capacity, Reading Room workspace/tools, editorial/community experiences, scarce-service courtesy/priority and narrowly justified capability acceleration. Exact benefits are not yet defined.

---

# 4. Proven regression sources / 已确认的回退污染源

## Source A — `INK-EAST-BRIEF.md`

Contains early 30% paywall, complete article/archive access sold through VIP, fixed Reader/Patron pricing, VIP Long Reads and member-only posting assumptions. Historically valuable, unsafe as current Membership truth.

## Source B — `INK-EAST-ROADMAP.md`

Contains old VIP article, VIP Library, Reading Room dependent on VIP content, paywall-band architecture and membership package-page assumptions. Historical preview roadmap only.

## Source C — `PROJECT-CONTROL-MASTER.md`

Represents a later intermediate correction and correctly moved toward Public Issues（免费期刊主线）, supporter-oriented Membership and removal of hard `unlock` sales language, but still retains `99% free + rare VIP articles`, independent VIP Library and membership-linked writing assumptions. It is therefore unsafe as the sole source for Round 12.

## Source D — old Round 3/4 terminology

Older sealed/consolidated files preserve historical `Verified Contributor`, `Institution`, `Platform-owned Entity` and contributor-specific launch-support wording. Later amendments and Round 6 current truth supersede those meanings.

---

# 5. Process failure / 导致回退的流程问题

The failure pattern was: later workshop enters a domain -> assistant reads a detailed old product document -> old document has more concrete feature detail than newer architecture -> concrete old feature language is mistaken for current unresolved truth -> new rules are built around the obsolete model.

The fix cannot rely on memory alone.

---

# 6. Mandatory Supersession Regression Gate / 强制取代关系回归闸

Before every remaining Product Architecture workshop:

1. identify the workshop domain;
2. search START-HERE + current-truth/seal/amendment layers for controlling decisions;
3. search legacy Brief/Roadmap/Control/static-preview documents for older versions of the same domain;
4. build a short CURRENT vs SUPERSEDED comparison;
5. do not draft new rules until contradictions are resolved;
6. if an old plan is being revived, require an explicit new user decision rather than silently reviving it;
7. at workshop closure, attack the new rules specifically for regression into previously rejected/superseded models.

This gate is additional to ordinary Adversarial Audit（对抗性审计） and Source Parity（来源完整性检查）.

---

# 7. Current status / 当前状态

- Rounds 6–11 Current Truth（当前有效真相）: **PASS**, with Round 11 Membership/access wording constrained by the new Round 12 public-content baseline.
- Rounds 1–5: semantic architecture remains usable through later amendments, but old standalone files are **high-risk historical sources**.
- Round 12 Workshop A: **REOPENED / PARTIALLY SUPERSEDED**.
- Round 12 packaging/tier decision: **DEFERRED**.
- Paywall/member-only editorial-content direction: **SUPERSEDED / NOT AUTHORIZED**.
- Next product workshop: **PAUSED** until documentation hardening from this regression audit is complete.
- Implementation authorization: **NO**.
- Merge authorization: **NO**.