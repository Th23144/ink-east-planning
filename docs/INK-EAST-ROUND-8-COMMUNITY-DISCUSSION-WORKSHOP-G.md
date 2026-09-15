# Round 8 — Community & Discussion System（社区与讨论系统） — Workshop G（工作坊 G）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Community Object Matrix & End-to-End Flows（社区对象矩阵与端到端流程） — consolidate Workshops A–F into one coherent product model before Round 8 current-truth consolidation.

## 1. Core object matrix / 核心对象矩阵

| Object（对象） | Primary purpose（主要用途） | Durable identity（稳定身份） | Typical relations（典型关系） |
|---|---|---|---|
| Community Publication（社区发布物） | durable user-authored publication / essay / guide | yes where durable | Topic / Place / Work / Knowledge Entity / Discussion |
| Discussion Thread（讨论线程） | conversation around a subject/object | yes where durable | target object / replies / quotes / mentions |
| Question（问题） | first-class request for answers | yes | Topic / Place / Work / Passage / Answers / Discussion |
| Answer（回答） | substantive response to a Question | yes where durable | Question / replies / acceptance state |
| Reply / Comment（回复 / 评论） | conversational contribution | yes where durable | parent message / quote / mention |
| Reaction（互动反应） | lightweight social feedback | relationship/event | target object |
| Save / Bookmark（收藏 / 书签） | personal reading intent | user-private relation by default | target object |
| Follow / Subscribe（关注 / 订阅） | discovery/delivery preference | relationship | Person / Topic / Place / supported target |
| Share / Reference（分享 / 引用） | circulate or reference existing object | event/relation; new object only when substantive commentary is durable | original object / derivative context |
| Moderation Case（审核案件） | governance review workflow | yes where consequential | target / reports / decisions / appeals |

## R8-G1 — Object identity follows product meaning, not page layout / 对象身份由产品语义决定，不由页面布局决定
**HARD INVARIANT（硬边界）.** A card, page, feed item or modal is presentation. It must not become the identity model for Publication（发布物）, Discussion（讨论）, Question（问题）, Answer（回答） or Reply（回复）.

## R8-G2 — One object may appear on many surfaces without duplication / 同一对象可以出现在多个页面而不复制身份
**HARD INVARIANT（硬边界）.** Home / For You / Topic / Place / Following / Explore / Search（首页 / 为你推荐 / 主题 / 地点 / 关注 / 探索 / 搜索） may all surface the same object while preserving one authorship, lifecycle and provenance record.

## R8-G3 — Publication-to-discussion flow preserves two object classes / 发布物到讨论的流程保留两个对象类别
**HARD INVARIANT（硬边界）.** A Community Publication（社区发布物） may open, link to or collect one or more Discussion Thread（讨论线程） objects. Discussion does not become the publication body, and publication does not become merely the first comment.

## R8-G4 — Canonical/source-backed object-to-discussion flow remains companion-based / 权威来源对象到讨论仍采用伴随讨论结构
**HARD INVARIANT（硬边界）.** Work / Edition / Passage（作品 / 版本 / 段落） may expose nearby discussion entry points while the actual social conversation remains a separate linked community object.

## R8-G5 — Question flow is Question → Answer plus optional Reply / 问答流程是“问题 → 回答 + 可选回复”
**PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.** A Question（问题） receives substantive Answer（回答） objects; Answers and the Question may also have conversational Reply / Comment（回复 / 评论）. Accepted Answer（采纳回答） and Resolved（已解决） remain workflow metadata rather than truth authority.

## R8-G6 — Reply lineage is preserved independently from shallow presentation / 回复血缘独立于浅层展示
**PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.** V1 presents Hybrid / Shallow Threading（混合式 / 浅层线程） while preserving full reply-to relationships underneath.

## R8-G7 — Share-only and authored derivative flows are distinguishable / 单纯分享与形成新作者作品的流程可区分
**HARD INVARIANT（硬边界）.** Simple Share（分享） can remain an event/reference. Durable substantive commentary around another object may create a new attributable Community Publication（社区发布物） or Discussion object（讨论对象） linked to the original.

## R8-G8 — Social actions do not collapse into one engagement object / 社交行为不能合并成一个“互动值”对象
**HARD INVARIANT（硬边界）.** Reaction（互动反应）, Save（收藏）, Follow（关注）, Reply（回复）, Answer（回答） and Share（分享） retain distinct semantics even if later recommendation systems consume several of them as signals.

## R8-G9 — Lifecycle state belongs to the underlying object / 生命周期状态属于底层对象
**HARD INVARIANT（硬边界）.** Closed / Locked / Archived / Resolved / Removed（关闭 / 锁定 / 归档 / 已解决 / 移除） state is attached to the relevant object/workflow and inherited by derived surfaces; it is not separately reinvented by each page.

## R8-G10 — Governance case flow is external to ordinary content editing / 治理案件流程独立于普通内容编辑
**HARD INVARIANT（硬边界）.** Report（举报） → Moderation Case（审核案件） → review/decision → possible Correction / Restoration / Appeal（纠正 / 恢复 / 申诉） is a governance workflow, not an ordinary post-editing workflow.

## R8-G11 — Removal and withdrawal do not reassign object identity / 移除与撤回不重新分配对象身份
**HARD INVARIANT（硬边界）.** When content becomes unavailable, its stable identity must not be reused for a different object. Lawful Tombstone（占位记录）, unavailable state or provenance may preserve continuity where appropriate.

## R8-G12 — Cross-object navigation does not create authority transfer / 跨对象跳转不产生权威转移
**HARD INVARIANT（硬边界）.** Linking a Discussion（讨论） to a canonical Passage（段落）, featuring a Question（问题） on Home（首页）, or placing a Publication（发布物） in a Topic（主题） does not change authorship, source authority, Work Recognition（作品认可） or governance standing.

## R8-G13 — Product flows must preserve Acting Context / 产品流程必须保留行为情境
**HARD INVARIANT inherited from Round 6（继承自第六轮）.** Creating, replying, answering, sharing or moderating as a personal identity, Organization（组织） representative or Platform Staff（平台员工） must retain the appropriate Actor / Acting Context（行为主体 / 行为情境） rather than silently swapping identity.

## R8-G14 — End-to-end flows remain compatible with future policy evolution / 端到端流程必须兼容未来策略演进
**HARDENING（架构加固）.** Exact posting permissions, visible reply depth, accepted-answer policy, sharing destinations, edit windows, lifecycle transitions and governance routing may evolve without redefining stable object identity. Versioning/Migration/Rollout/Rollback（版本 / 迁移 / 灰度发布 / 回滚） requirements apply where material.

# Representative end-to-end flows / 代表性端到端流程

### Flow A — Durable community publication / 持久社区发布
Create Publication（创建发布物） → confirm Primary Content Type（确认主要内容类型） → link Topics / Places / Knowledge targets（关联主题 / 地点 / 知识目标） → publish → appear across eligible projections → optionally open/link Discussion（讨论） → later edit/withdraw/archive under lifecycle policy.

### Flow B — Canonical passage discussion / 古籍段落讨论
Open Passage（打开段落） → choose Discuss（讨论） → create/open linked Discussion Thread（讨论线程） with stable passage/version anchor → replies/quotes/mentions occur in community layer → canonical passage remains unchanged.

### Flow C — Question / Answer / 问答
Ask Question（提出问题） → classify/link targets → receive Answers（回答） + Replies（回复） → owner may Accept Answer（采纳回答） / Resolve（标记已解决） under policy → future evidence may reopen discussion without rewriting historical acceptance.

### Flow D — Share with commentary / 带评论分享
Open existing object → Share（分享） as link/reference OR add substantive durable commentary → create new attributable derivative community object linked to original → original authorship/provenance preserved.

### Flow E — Governance interface / 治理接口
Report（举报） → case creation/consolidation → authorized review → visible/lifecycle action where justified → reason/provenance retained → correction/restoration/appeal path where applicable. Recommendation ranking remains a separate system.

# Round 8 consolidation readiness / 第八轮整合准备度

Workshops A–G now cover: object boundaries, conversation topology, unified community surfaces, interaction modes, lifecycle, governance interfaces and end-to-end product flows.

No additional major product fork is required before a formal Round 8 consistency/completeness audit. The provisional directions for Hybrid / Shallow Threading（混合式 / 浅层线程）, First-class Question Mode（一级问答模式） and Reference / Share first（引用 / 分享优先） remain explicitly provisional rather than immutable.

# Next step / 下一步

Run a Round 8 Cross-Workshop Consistency & Completeness Audit（第八轮跨工作坊一致性与完整性审计） across Workshops A–G and the project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）. Do not seal Round 8 until the audit identifies no unresolved material blocker and the user has had a concise review of the resulting current product direction.
