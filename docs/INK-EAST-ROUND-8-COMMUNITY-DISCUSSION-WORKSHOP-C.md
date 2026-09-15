# Round 8 — Community & Discussion System / 社区与讨论系统 — Workshop C / 工作坊 C

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Community Surface & Participation Structure（社区表面与参与结构） — unified community topology, official Domain / Topic / Place surfaces, Home / For You, Following / Explore projections, classification, participation entry points, and the V1 treatment of user-created independent communities.

This workshop incorporates an already-confirmed PR #53 user decision from issue comment `5558644919`: one unified Community system across the whole platform; cross-domain Home / For You as a platform-level core surface; Primary Content Type required with user confirmation plus system assistance; user-created independent communities/groups deferred for early-stage V1 and treated as a lower-level future social layer rather than peers of first-party Domain / Topic / Place structure by default.

Standing project-wide constraint: all material community rules must remain compatible with the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

---

## R8-C1 — One unified Community system across the platform / 全平台采用统一社区系统

**Rule class: HARD INVARIANT / 硬边界.**

Project 3 must not create separate disconnected forum systems for each Domain（领域）, Topic（主题）, Place（地点） or content lane.

Domain / Topic / Place / Home / Following / Explore are different projections or entry surfaces over one underlying content/community network, not separate community databases or isolated social products.

This is an already-confirmed user direction from PR #53 and is carried forward rather than reopened.

---

## R8-C2 — First-party Domain / Topic / Place surfaces are official platform structure, not user-created peer communities / 官方领域、主题、地点空间属于平台结构，不等同于用户自建社群

**Rule class: HARD INVARIANT for structural distinction; exact taxonomy ADAPTIVE / 结构区分为硬边界，具体分类弹性.**

First-party Domain / Topic / Place surfaces are platform-managed discovery/knowledge/community views built from the shared network.

Their existence does not mean the platform endorses every publication or discussion appearing within them, and their official structural status must not be confused with source authority, Work Recognition（作品认可） or user reputation.

---

## R8-C3 — Home / For You is cross-domain by design / 首页与“为你推荐”默认跨领域

**Rule class: HARD INVARIANT for cross-domain capability; ranking policy DEFERRED / 跨领域能力为硬边界，排序策略延后决定.**

Home / For You（首页 / 为你推荐） is a platform-level surface that may mix relevant content across Domains, Topics and Places.

The architecture must preserve exploration / serendipity（探索 / 偶然发现） and must not structurally force users into one subject silo merely because they previously consumed one category heavily.

Exact ranking signals and recommendation weights belong to later Reader Behavior / Interest Graph（读者行为 / 兴趣图谱） and Discovery / Recommendation（发现 / 推荐） rounds.

---

## R8-C4 — Domain / Topic / Place views are projections, not duplicated content copies / 领域、主题、地点视图是同一对象的不同投影，不复制内容身份

**Rule class: HARD INVARIANT / 硬边界.**

The same Community Publication（社区发布） or Discussion Thread（讨论线程） may legitimately appear in multiple relevant surfaces without becoming multiple independent copies.

Stable object identity, authorship, revision history, moderation state and provenance remain attached to the original object.

---

## R8-C5 — Primary Content Type is required, with user confirmation plus system assistance / 主要内容类型必须存在，由用户确认、系统辅助

**Rule class: HARD INVARIANT for explicit primary type; taxonomy/assistance ADAPTIVE / 明确主要类型为硬边界，分类表与辅助机制弹性.**

Durable public content should carry a Primary Content Type（主要内容类型） from a controlled platform taxonomy so search, presentation, governance and discovery can understand what kind of object it is.

Normal flow: the system may recommend/classify, but the user makes the final explicit confirmation. The platform should not silently overwrite the user's declared type in ordinary operation.

Integrity/moderation cases may justify correction or internal classification divergence, with appropriate provenance where consequential.

This carries forward the prior PR #53 decision.

---

## R8-C6 — Internal classification may be richer than user-visible hashtags / 内部分类可以比用户标签更丰富

**Rule class: HARD INVARIANT for separation; exact classifier DEFERRED / 分离为硬边界，具体分类算法延后.**

User-added Hashtags（标签） remain expressive/discovery metadata under product policy. They are not the platform's only semantic classification mechanism.

The system may separately maintain Topic（主题）, Knowledge Entity（知识实体）, Place（地点）, Domain（领域） or other internal relations for search, recommendation, governance and knowledge linkage.

User hashtags must not silently become authoritative ontology.

---

## R8-C7 — Multi-topic relevance does not erase primary object type / 多主题关联不改变对象本身的主要类型

**Rule class: HARD INVARIANT / 硬边界.**

A publication may relate to multiple Topics, Places, Works or Knowledge Entities while retaining one current Primary Content Type appropriate to its product behavior.

Content type answers “what kind of object is this”; Topic/Place/entity relations answer “what is it about / connected to”. These dimensions must not be collapsed.

---

## R8-C8 — Participation entry points may be distributed across the product, but create/link the same community objects / 参与入口可以分布在全站，但必须指向同一套社区对象

**Rule class: HARD INVARIANT / 硬边界.**

Users may enter discussion from a canonical passage, editorial publication, Topic page, Place page, Community Publication, Home or another legitimate surface.

Those entry points must create or open the appropriate shared Discussion / Community object rather than spawning page-local comment systems that cannot later be searched, moderated, linked or governed consistently.

---

## R8-C9 — Canonical/source-backed pages remain clean even when community participation is one click away / 权威来源页面可紧密连接社区，但不把社交内容混入权威记录

**Rule class: HARD INVARIANT inherited from Workshop A / 继承自工作坊 A 的硬边界.**

A canonical passage may expose “discuss this passage”, discussion counts or related community content, but ordinary social discussion remains a companion object.

Convenient participation must not collapse canonical/source-backed content and community conversation into one authority lane.

---

## R8-C10 — Following / Subscription is a discovery relationship, not endorsement or authority / 关注与订阅属于发现关系，不代表背书或权威

**Rule class: HARD INVARIANT / 硬边界.**

If users can Follow / Subscribe（关注 / 订阅） to people, Topics, Places, publications or other supported targets, the relation primarily expresses delivery/discovery preference.

Following does not by itself certify expertise, identity, truth, recognition or source reliability.

Exact followable object set, notification behavior and ranking effect remain adaptive/deferred.

---

## R8-C11 — Following does not create a separate content universe / “关注”视图不能成为与主社区割裂的第二套内容系统

**Rule class: HARDENING / 架构加固.**

Following（关注） is a filtered projection of the same underlying network. It must not create duplicated publication identities, separate moderation state or a parallel authority system.

---

## R8-C12 — Explore is structurally broader than personalized ranking / 探索页必须保留超出个性化画像的发现能力

**Rule class: HARD INVARIANT for broad-discovery capability; exact UX/ranking DEFERRED / 广泛发现能力为硬边界，具体界面与排序延后.**

Explore（探索） must be able to surface material outside a user's immediate follow graph and strongest inferred interests.

This preserves the platform's anti-filter-bubble / discovery objective without defining exact ranking mathematics in Round 8.

---

## R8-C13 — User-created independent Communities / Groups / Spaces are deferred from early-stage V1 / 用户自建独立社群、群组、空间暂不进入早期 V1

**Rule class: CONFIRMED PRODUCT DIRECTION / 已确认产品方向.**

Early-stage V1 should not launch unlimited Reddit-like user-created autonomous communities because that would add significant fragmentation, moderation, ownership and governance burden before the core network is mature.

This is not a permanent ban. It is a deliberate deferral already recorded in PR #53.

---

## R8-C14 — If user-created spaces are introduced later, they are a distinct lower-level social object by default / 未来若开放用户自建空间，默认属于独立的较低层社交对象

**Rule class: HARD INVARIANT for distinction unless explicitly amended later / 默认结构区分为硬边界，未来可正式修订.**

Future user-created Communities / Groups / Spaces（社群 / 群组 / 空间） must not automatically become peers of first-party official Domain / Topic / Place structure merely because they have a name and members.

They require their own governance, ownership/control, moderation, lifecycle, naming/dispute and migration rules before launch.

Future scale or product evidence may justify changing their hierarchy through an explicit architecture amendment; it must not happen accidentally through implementation convenience.

---

## R8-C15 — Joining/following a future user space would not automatically grant governance authority / 加入或关注未来用户空间不自动获得治理权限

**Rule class: HARDENING from Round 6 / 来自第六轮的架构加固.**

Membership, following, participation, moderation authority, ownership/control and representative authority are different relationships/capabilities.

If user-created spaces are introduced later, these powers must remain scoped rather than inferred from a generic “member” label.

---

## R8-C16 — Community object visibility remains policy/state driven, not surface driven / 社区对象可见性由策略与状态决定，不由某个页面偶然决定

**Rule class: HARD INVARIANT / 硬边界.**

An object appearing in Home, Topic, Place, Following, Explore or Search must not acquire a stronger visibility entitlement merely because one projection indexed or cached it.

Underlying privacy, moderation, lifecycle and legal state remains authoritative, and derived surfaces must invalidate/re-evaluate when that state changes.

---

## R8-C17 — Surface placement is not recognition / 被放到某个社区页面不等于作品被认可

**Rule class: HARD INVARIANT / 硬边界.**

Appearing prominently in a Topic, Place, Home or Explore surface must not automatically create Work Recognition（作品认可）, Contributor Qualification（贡献者资格）, source authority or factual endorsement.

Editorial curation, algorithmic ranking, social popularity and formal Recognition remain separate systems.

---

## R8-C18 — Public community participation and private notes/messages remain separate systems / 公开社区参与与私人笔记、私信继续分离

**Rule class: HARD INVARIANT / 硬边界.**

Private Reader Notes（读者私人笔记） remain outside public Community by default, and Direct Message / Private Message（私信） remains outside current Round 8 architecture entirely.

No page-level implementation may merge these merely because they reference the same Work, Topic or Person.

---

## R8-C19 — Feed/ranking mechanics are intentionally deferred / 信息流与排序机制明确延后

**Rule class: SCOPE GUARD / 范围护栏.**

Round 8 defines which community objects/surfaces exist and how they relate. It does not define final feed ranking, recommendation weights, cold-start formulas, exploration percentages, engagement scoring or interest-model decay.

Those belong to Reader Behavior / Interest Graph（读者行为 / 兴趣图谱） and Discovery / Recommendation（发现 / 推荐） rounds.

---

## R8-C20 — Participation mechanics must remain evolvable / 社区参与机制必须保持可演进

**Rule class: HARDENING from Rule Evolvability Architecture / 来自规则可演进架构的加固规则.**

Before implementation, rules such as followability, content-type taxonomy, participation permissions, visibility routing, surface eligibility and future space creation must be classified as Core Invariant（核心不变量）, Policy（策略）, Configuration（配置）, Workflow（工作流） or Algorithm（算法） where material.

Material changes must define versioning, Migration（迁移）, Compatibility（兼容）, Rollout（灰度发布）, Rollback（回滚） and Decision Provenance（决策溯源） as appropriate.

---

# Product forks still open after Workshop C / 工作坊 C 后仍未决定的产品分叉

Workshop C closes the previously mistaken C1 fork because PR #53 already contains the user's decision: unified platform community, official Domain / Topic / Place projections, cross-domain Home / For You, and deferral of user-created independent communities in early V1.

The following remain open for a later explicit product choice because they change interaction behavior rather than core community topology:

1. Reply presentation / 回复展示：flat（扁平）, shallow-threaded（浅层线程）, deep nested（深层嵌套） or hybrid（混合）.
2. Native Question / Answer / Accepted Answer（原生问答 / 采纳答案） as a first-class product mode versus an ordinary Discussion subtype（讨论子类型）.
3. Repost / Quote-post（转发 / 引用转发） social mechanics versus Reference / Share only（仅引用 / 分享）.

These choices are intentionally not smuggled into Workshop C. The stable identities and provenance rules from Workshops A/B keep all three options open.

---

# Cross-round and project-wide compatibility / 跨轮次与项目级兼容

Workshop C preserves:
- the earlier PR #53 Community Topology（社区拓扑） decisions;
- Round 6 Identity / Role / Permission（身份 / 角色 / 权限）;
- Round 7 Knowledge Graph / Provenance（知识图谱 / 来源溯源）;
- Round 8 Workshops A/B separation and conversation identity rules;
- Rule Evolvability & Change Architecture（规则可演进与变更架构） E1–E27;
- official platform structure != factual/source authority;
- surface placement != recognition;
- following != endorsement;
- user-created independent spaces remain deferred, not permanently prohibited.

# Next review area / 下一审查区域

Next Round 8 work should examine Interaction Modes & Participation Semantics（互动模式与参与语义） in plain product terms, especially the three still-open forks above. Before asking for a user choice, each option must be explained concretely with familiar product behavior examples rather than architecture jargon.
