# Round 8 — Community & Discussion System（社区与讨论系统） — Current Truth V1（当前有效真相 V1）

Status: **CURRENT TRUTH / PRODUCT ARCHITECTURE ONLY（当前有效真相 / 仅产品架构）**  
Implementation: **NOT AUTHORIZED（未授权实现）**  
Source set: Workshops A–G（工作坊 A–G） + `ROUND-8-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md` + sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

This file consolidates the currently accepted Round 8 direction after user review. Where an earlier Round 8 workshop wording conflicts with this file, this file wins. Historical workshop files remain provenance.

## Standing product direction / 当前产品方向

Project 3 uses one unified Community System（统一社区系统） across the platform. Home / For You / Domain / Topic / Place / Following / Explore（首页 / 为你推荐 / 领域 / 主题 / 地点 / 关注 / 探索） are projections over the same underlying community/content network, not separate forum products. Community Publication（社区发布物）, Discussion Thread（讨论线程）, Question（问题）, Answer（回答） and Reply / Comment（回复 / 评论） remain distinct object classes with explicit relations.

Three interaction choices are **PROVISIONAL PRODUCT DIRECTION（暂定产品方向）**, not immutable invariants:
- Hybrid / Shallow Threading（混合式 / 浅层线程） for reply presentation;
- First-class Question Mode（一级问答模式） inside the unified Community System（统一社区系统）;
- V1 Reference / Share first（引用 / 分享优先） with a full Repost Graph（转发关系图） deferred.

## A — Object and authority boundaries / 对象与权威边界

- **R8-A1** Community Publication（社区发布物） and Discussion Thread（讨论线程） are different object classes.
- **R8-A2** Reply / Comment（回复 / 评论） is a social contribution first and is not automatically a Publication（发布物） or first-class Claim（知识主张）.
- **R8-A3** Canonical/source-backed surfaces use companion Discussion / Community（讨论 / 社区） objects rather than embedding ordinary social conversation into the canonical record.
- **R8-A4** Discussion targets use typed references to Work / Edition / Passage / Publication / Issue / Topic / Knowledge Entity（作品 / 版本 / 段落 / 发布物 / 期刊单元 / 主题 / 知识实体） as applicable, not one generic unstructured target.
- **R8-A5** Passage-level discussion anchors preserve relevant version/provenance context where material.
- **R8-A6** Discussion linkage does not transfer authority between the discussion and the linked object.
- **R8-A7** Public discussion and private Reader Notes（读者私人笔记） are separate privacy/product classes.
- **R8-A8** Thread/reply authorship preserves Actor / Display Identity / Acting Context（行为主体 / 展示身份 / 行为情境）.
- **R8-A9** Conversation structure and knowledge structure remain separate.
- **R8-A10** Community objects may be durable without every message becoming permanently immutable; exact retention/edit rules remain adaptive.
- **R8-A11** Thread lifecycle state is separate from truth, Recognition（作品认可） and source authority.
- **R8-A12** Likes/reactions/replies/saves/follows do not create a universal quality, truth, expertise or Recognition score.
- **R8-A13** Durable community content may connect to Topics / Knowledge Entities（主题 / 知识实体） without freezing one permanent subject taxonomy.
- **R8-A14** Cross-linking between discussion and publication preserves object identity; derivation creates linked objects rather than silent type mutation.
- **R8-A15** Mixed discovery/search must preserve content-class and authority/provenance distinctions.
- **R8-A16** Groups/spaces, exact nesting, reaction vocabulary, following mechanics, ranking, moderation thresholds and sensitive-topic governance are not decided by implication.

## B — Conversation topology and mechanics / 对话拓扑与机制

- **R8-B1** Durable Discussion Thread（讨论线程） identity is independent from title, URL and current placement.
- **R8-B2** Durable Message（消息） identity is independent from rendered position, page number and sort order.
- **R8-B3** Reply relation and display topology are separate; underlying reply-to relations survive UI redesign.
- **R8-B4** Quote（引用） is a reference action; bounded snapshots/excerpts may preserve material quoted context without replacing original provenance.
- **R8-B5** Mention（提及） is social addressing, not authority, endorsement, consent or delegated permission.
- **R8-B6** Deep links preserve the intended conversational target; unavailable content may resolve to lawful privacy-safe Tombstone（占位记录） states.
- **R8-B7** Canonical passage references reuse the stable Round 7 source-aware addressing model.
- **R8-B8** Material edits preserve meaningful conversation history; typo-level edits may receive lighter treatment.
- **R8-B9** Deletion, withdrawal, hiding, legal removal, privacy action, moderation removal and spam cleanup remain distinct operations.
- **R8-B10** Conversation integrity does not override privacy or legal deletion requirements.
- **R8-B11** Open / Closed / Locked / Archived / Resolved（开放 / 关闭 / 锁定 / 归档 / 已解决） remain distinct lifecycle semantics.
- **R8-B12** Resolution/accepted-answer workflow does not constitute epistemic settlement.
- **R8-B13** Report / Flag（举报 / 标记） is moderation input, not proof of wrongdoing.
- **R8-B14** Consequential moderation actions preserve Decision Provenance（决策溯源） where appropriate.
- **R8-B15** Moving a thread does not rewrite its identity, authorship or original context.
- **R8-B16** Merge / Split（合并 / 拆分） are explicit conversation corrections with preserved provenance/references.
- **R8-B17** Cross-post / Repost / Quote-post（跨发 / 转发 / 引用转发） must preserve original identity/provenance if later introduced; V1 full repost mechanics are deferred.
- **R8-B18** Similarity or duplicate detection does not authorize automatic identity collapse.
- **R8-B19** Direct / Private Messaging（私信 / 直接消息） is outside current Round 8 scope and requires separate architecture if introduced.
- **R8-B20** Search/index/cache/notification/recommendation derivatives must respect current visibility/lifecycle state.
- **R8-B21** Notification（通知） is a derived delivery artifact, not the authoritative conversation record.
- **R8-B22** Realistically mutable conversation mechanics must be classified and versioned under the project-wide Evolvability Architecture（可演进架构）.

## C — Community surfaces and participation structure / 社区表面与参与结构

- **R8-C1** One unified Community System（统一社区系统） serves the platform; Domain / Topic / Place / Home / Following / Explore are projections, not disconnected forums.
- **R8-C2** First-party Domain / Topic / Place（领域 / 主题 / 地点） surfaces are official platform structure and are distinct from future user-created peer communities.
- **R8-C3** Home / For You（首页 / 为你推荐） is cross-domain by design and must preserve exploration / serendipity（探索 / 偶然发现） capability.
- **R8-C4** Domain / Topic / Place views do not duplicate content identity.
- **R8-C5** Durable public content has a Primary Content Type（主要内容类型） from a controlled taxonomy; system assistance is allowed, user confirmation is the normal path.
- **R8-C6** Internal classification may be richer than user hashtags; hashtags do not become authoritative ontology.
- **R8-C7** Multi-topic relevance does not erase Primary Content Type（主要内容类型）.
- **R8-C8** Participation entry points may appear across the product but create/open the same shared community objects.
- **R8-C9** Canonical/source-backed pages may be one click from discussion without embedding ordinary social conversation into the canonical lane.
- **R8-C10** Follow / Subscribe（关注 / 订阅） is a discovery/delivery relation, not authority or endorsement.
- **R8-C11** Following（关注） is a projection of the same network, not a second content universe.
- **R8-C12** Explore（探索） retains structurally broad discovery beyond strongest inferred interests.
- **R8-C13** User-created independent Communities / Groups / Spaces（社群 / 群组 / 空间） are deferred from early-stage V1.
- **R8-C14** If user-created spaces are introduced later, they are a distinct lower-level social object by default rather than automatic peers of first-party structure.
- **R8-C15** Joining/following a future user-created space does not automatically grant moderation, ownership or governance authority.
- **R8-C16** Community object visibility is policy/state driven, not surface driven.
- **R8-C17** Surface placement is not Recognition（作品认可）, qualification or factual/source endorsement.
- **R8-C18** Public community participation remains separate from private notes and private messaging.
- **R8-C19** Feed/ranking mechanics are deferred to Reader Behavior / Interest Graph（读者行为 / 兴趣图谱） and Discovery / Recommendation（发现 / 推荐）.
- **R8-C20** Participation mechanics must remain evolvable under versioning/migration/rollout/rollback requirements where material.

## D — Interaction modes and participation semantics / 互动模式与参与语义

- **R8-D1 — PROVISIONAL（暂定）** V1 uses Hybrid / Shallow Threading（混合式 / 浅层线程） while preserving full reply-to relations underneath.
- **R8-D2** Deep reply chains remain navigable through reply-to context/jump/expand mechanisms without requiring unlimited visual indentation.
- **R8-D3 — PROVISIONAL（暂定）** Question（问题） is a first-class participation mode inside the unified Community System（统一社区系统）.
- **R8-D4** Answer（回答） and Reply / Comment（回复 / 评论） remain distinguishable in Question Mode（问答模式）.
- **R8-D5** Accepted Answer（采纳回答） is attributable workflow metadata, not Canonical Claim（规范知识主张）, Recognition（作品认可） or platform truth.
- **R8-D6** Resolved Question（已解决问题） may coexist with unresolved factual/scholarly disagreement.
- **R8-D7 — PROVISIONAL（暂定）** V1 prioritizes Reference / Share（引用 / 分享） rather than launching a full social Repost Graph（转发关系图）.
- **R8-D8** Durable substantive commentary around shared content becomes a distinct attributable derivative object where appropriate; simple sharing need not create a new publication.
- **R8-D9** Future Repost / Quote-post（转发 / 引用转发） remains architecturally possible and must preserve original identity/provenance if introduced.
- **R8-D10** Like / Reaction（点赞 / 互动反应） is lightweight social feedback, not governance voting by default.
- **R8-D11** Save / Bookmark（收藏 / 书签） is personal reading intent by default, not public endorsement.
- **R8-D12** Follow / Subscribe（关注 / 订阅） is distinct from direct participation and governance relationships.
- **R8-D13** Create Post / Start Discussion / Ask Question（发布内容 / 发起讨论 / 提出问题） may share Composer（编辑器 / 发布器） infrastructure without collapsing object semantics.
- **R8-D14** Participation permissions remain Account × Capability × Context（账户 × 能力 × 情境） based, not one global user rank.
- **R8-D15** Interaction meaning is defined in Round 8; recommendation impact is deferred.
- **R8-D16** Mutable interaction rules such as visible reply depth, acceptance policy, reactions, edit windows and notification behavior remain evolvable rather than hard-coded as permanent constants.

## E — Lifecycle and participation boundaries / 生命周期与参与边界

- **R8-E1** Creation authority and later control are separate.
- **R8-E2** A thread creator is not automatically moderator of other participants.
- **R8-E3** Author control over own content does not erase or absorb others' authorship.
- **R8-E4** Withdrawal, deletion, hiding, legal removal, privacy deletion/minimization and moderation removal remain separate.
- **R8-E5** Withdrawal is not historical erasure by default; lawful/privacy exceptions may require stronger deletion/minimization.
- **R8-E6** Stable references may survive unavailability through lawful privacy-safe Tombstone（占位记录） states.
- **R8-E7** Close / Lock / Archive / Resolve / Remove（关闭 / 锁定 / 归档 / 已解决 / 移除） remain distinct lifecycle meanings.
- **R8-E8** Lifecycle state does not determine truth, Recognition（作品认可） or source authority.
- **R8-E9 — PROVISIONAL（暂定）** Question owners may ordinarily use question-specific workflow controls such as Accept Answer / Resolve（采纳回答 / 标记已解决） where policy permits, without owning truth authority.
- **R8-E10** Reopening/reactivation preserves prior lifecycle history.
- **R8-E11** Participation restriction is scoped and separate from historical content removal.
- **R8-E12** Community restrictions follow Account × Capability × Context（账户 × 能力 × 情境）.
- **R8-E13** Capability Restriction / Community Suspension / Account Suspension / Closure / Deletion（能力限制 / 社区暂停 / 账户暂停 / 关闭 / 删除） are different states.
- **R8-E14** Moderator Authority（审核权限） and author preference/request remain distinct.
- **R8-E15** Report / Block / Mute（举报 / 屏蔽 / 静音） do not silently become global moderation verdicts.
- **R8-E16** Move / Merge / Split（移动 / 合并 / 拆分） preserve authorship, lifecycle meaning, references and provenance.
- **R8-E17** Derived surfaces follow the authoritative underlying visibility state.
- **R8-E18** Lifecycle/participation rules that realistically change remain versionable and migration-aware.

## F — Safety hooks and governance interfaces / 安全挂钩与治理接口

- **R8-F1** Report / Flag（举报 / 标记） is a case-opening signal, not a verdict.
- **R8-F2** Moderation Case（审核案件） is distinct from the ordinary content object.
- **R8-F3** Multiple reports may consolidate into one case without mechanically becoming multiple punishments or severity proof.
- **R8-F4** Consequential moderation actions preserve Decision Provenance（决策溯源）.
- **R8-F5** User-facing reason and internal evidence depth may differ where privacy/security/legal needs require, but public wording must not misrepresent the basis.
- **R8-F6** Moderation visibility, Recommendation ranking（推荐排序） and user preference remain separate causes.
- **R8-F7** Material visibility interventions are attributable and reviewable where appropriate.
- **R8-F8** Personal Block / Mute / Hide for me（屏蔽 / 静音 / 对我隐藏） does not equal platform-wide enforcement.
- **R8-F9** Creator tools and Moderator（审核者） tools are different capability sets.
- **R8-F10** Escalation（升级处理） is workflow routing, not automatic proof of severity.
- **R8-F11** Conflict of Interest（利益冲突） controls apply to consequential community cases.
- **R8-F12** Appeal / Correction / Restoration（申诉 / 纠正 / 恢复） remain distinct.
- **R8-F13** Community enforcement history must not become a universal social/prestige/trust score.
- **R8-F14** Automated detection may assist prioritization/routing but must not become opaque unreviewable authority for consequential outcomes.
- **R8-F15** Anti-abuse signals remain purpose-limited and do not automatically flow into Recognition（作品认可）, Contributor Qualification（贡献者资格） or unrelated commercial/recommendation prestige.
- **R8-F16** Governance interface rules remain versionable so historical cases remain interpretable after policy change.

## G — Object matrix and end-to-end flow invariants / 对象矩阵与端到端流程边界

- **R8-G1** Object identity follows product meaning, not page/card/feed/modal layout.
- **R8-G2** One object may appear on many surfaces without duplicating identity, authorship, lifecycle or provenance.
- **R8-G3** Publication-to-discussion flow preserves Community Publication（社区发布物） and Discussion Thread（讨论线程） as separate classes.
- **R8-G4** Canonical/source-backed object-to-discussion flow remains companion-based.
- **R8-G5 — PROVISIONAL（暂定）** Question flow is Question → Answer（问题 → 回答） plus optional Reply（回复）, with acceptance/resolution as workflow metadata.
- **R8-G6 — PROVISIONAL（暂定）** Reply lineage remains complete underneath shallow presentation.
- **R8-G7** Share-only and authored derivative flows are distinguishable.
- **R8-G8** Reaction / Save / Follow / Reply / Answer / Share（互动反应 / 收藏 / 关注 / 回复 / 回答 / 分享） retain distinct semantics rather than becoming one generic engagement object.
- **R8-G9** Lifecycle state belongs to the underlying object, not separately to each projection page.
- **R8-G10** Report → Moderation Case → decision → possible Correction / Restoration / Appeal（举报 → 审核案件 → 决策 → 可能的纠正 / 恢复 / 申诉） is a governance workflow, not ordinary content editing.
- **R8-G11** Removal/withdrawal never reassigns an object's stable identity to unrelated content.
- **R8-G12** Cross-object navigation or featuring does not transfer authorship, source authority, Recognition（作品认可） or governance standing.
- **R8-G13** End-to-end community flows preserve Acting Context（行为情境） for personal, organization-representative and platform-staff actions.
- **R8-G14** End-to-end flows remain compatible with future Policy / Configuration / Workflow（策略 / 配置 / 工作流） evolution without redefining stable object identity.

## Representative product flows / 代表性产品流程

1. **Durable Community Publication（持久社区发布）**: create → confirm Primary Content Type（主要内容类型） → link Topics / Places / Knowledge targets（主题 / 地点 / 知识目标） → publish → appear on eligible projections → optionally open/link Discussion（讨论） → later edit/withdraw/archive under lifecycle policy.
2. **Canonical Passage Discussion（古籍段落讨论）**: open Passage（段落） → Discuss（讨论） → create/open companion Discussion Thread（讨论线程） with stable passage/version anchor → community replies/quotes/mentions occur separately → canonical passage remains unchanged.
3. **Question / Answer（问答）**: Ask Question（提问） → classify/link → Answers（回答） + Replies（回复） → owner may Accept / Resolve（采纳 / 标记已解决） under policy → later evidence may reopen discussion without rewriting history.
4. **Share with Commentary（带评论分享）**: simple Share（分享） remains a reference/event; substantive durable commentary may create a new attributable community object linked to the original.
5. **Governance Interface（治理接口）**: Report（举报） → case creation/consolidation → authorized review → justified visibility/lifecycle action → reason/provenance retained → Correction / Restoration / Appeal（纠正 / 恢复 / 申诉） where applicable.

## Explicitly deferred / 明确延后

The following are not blockers and must not be silently promoted into hard rules: exact visible reply depth; mobile expansion UX（用户体验）; one vs multiple accepted answers in special contexts; exact reaction vocabulary; exact edit/withdraw windows; archive/close/reopen timing; detailed block/mute behavior; moderation categories/thresholds/restriction durations; feed/recommendation weights; notification frequency/channels; user-created independent communities/groups; private messaging; and any future full Repost Graph（转发关系图）.

## Cross-round invariants preserved / 保留的跨轮次边界

- Round 6 Identity / Role / Permission（身份 / 角色 / 权限） and Acting Context（行为情境） remain controlling.
- Round 7 Claim / Relationship / Provenance / Citation（知识主张 / 关系 / 来源溯源 / 引用） remain controlling.
- canonical/source authority != Work Recognition（作品认可）.
- publishing capability != recommendation ranking.
- discussion != canonical/source content.
- moderation state != truth.
- report != guilt.
- surface placement != Recognition（作品认可）.
- Follow（关注） != endorsement.
- private Reader Notes（读者私人笔记） != public community content.
- all materially mutable policies remain subject to Rule Versioning / Migration / Rollout / Rollback / Decision Provenance（规则版本 / 迁移 / 灰度发布 / 回滚 / 决策溯源） where consequence warrants.

## Rule count / 规则数量

A1–A16 = 16  
B1–B22 = 22  
C1–C20 = 20  
D1–D16 = 16  
E1–E18 = 18  
F1–F16 = 16  
G1–G14 = 14  

**Total: 122 rules / 共 122 条规则.**
