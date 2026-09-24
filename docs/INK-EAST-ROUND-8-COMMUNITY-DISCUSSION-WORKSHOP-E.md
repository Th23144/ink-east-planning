# Round 8 — Community & Discussion System（社区与讨论系统） — Workshop E（工作坊 E）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Community Lifecycle & Participation Boundaries（社区生命周期与参与边界） — creation, closure, withdrawal, editing, archive/removal states, creator control versus moderation authority, participation restriction, and continuity of historical discussion.

This workshop builds on Round 6 Identity / Role / Permission（身份 / 角色 / 权限）, Round 7 Provenance（来源溯源）, Round 8 Workshops A–D（第八轮工作坊 A–D）, cross-round amendments A40–A45, and the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Standing principle: a community object may change lifecycle state without silently changing authorship, truth, recognition, moderation basis or historical provenance.

## R8-E1 — Creation authority and later control are separate / 创建权限与后续控制权分离
**HARD INVARIANT（硬边界）.** The ability to create a Community Publication（社区发布）, Discussion Thread（讨论线程） or Question（问题） does not automatically grant unrestricted power over every later reply, participant or moderation outcome. Creation establishes authorship/initiator provenance; ongoing control remains scoped.

## R8-E2 — Thread creator is not automatically moderator of other participants / 线程创建者默认不是其他参与者的审核者
**HARD INVARIANT（硬边界）.** A creator may receive object-specific controls over their own post or Question workflow, but must not automatically gain power to rewrite, delete or suppress other users' contributions merely because they started the thread.

## R8-E3 — Author control over own content does not erase others' authorship / 作者控制自己的内容不能抹除他人内容归属
**HARD INVARIANT（硬边界）.** Editing, withdrawing or deleting one's own root post must not silently rewrite replies or absorb them into another object. Where lawful and appropriate, replies may remain attached to a minimal Tombstone（占位记录） or structural reference.

## R8-E4 — Withdrawal, deletion, hiding, legal removal and moderation removal remain separate / 撤回、删除、隐藏、法律移除与审核移除继续分离
**HARD INVARIANT（硬边界） inherited from A40.** Author Withdrawal（作者撤回）, User Deletion Request（用户删除请求）, Moderator Removal（审核移除）, Visibility Restriction（可见性限制）, Legal Removal（法律移除） and privacy-driven deletion/minimization must remain distinguishable operations. No one generic deleted state may collapse them.

## R8-E5 — Withdrawal is not historical erasure by default / 撤回默认不等于历史抹除
**HARD INVARIANT with lawful exceptions（带法律例外的硬边界）.** Withdrawal may stop substantive presentation while preserving lawful minimum provenance, citation continuity or discussion structure where needed. Privacy/legal obligations may require stronger deletion or minimization.

## R8-E6 — Stable references may survive unavailability where lawful / 在法律允许时，内容不可用后稳定引用仍可保留
**HARDENING（架构加固） inherited from A41.** A permalink, Message Identity（消息身份） or citation target may resolve to an unavailable/Tombstone（占位记录） state rather than being reassigned to unrelated content. The placeholder must not expose removed data.

## R8-E7 — Close, Lock, Archive, Resolve and Remove are different lifecycle meanings / 关闭、锁定、归档、已解决与移除具有不同生命周期含义
**HARD INVARIANT（硬边界）.** Close（关闭）, Lock（锁定）, Archive（归档）, Resolve（已解决） and Remove（移除） must remain semantically distinct even if exact labels evolve.

## R8-E8 — Lifecycle states do not decide truth or recognition / 生命周期状态不决定真理或认可
**HARD INVARIANT（硬边界）.** Active（活跃）, Closed（关闭）, Archived（归档）, Resolved（已解决） or Removed（移除） state does not itself determine factual truth, Work Recognition（作品认可） or source authority.

## R8-E9 — Question owner may control question workflow without owning truth / 提问者可以控制问答流程，但不拥有真理裁决权
**CONFIRMED PROVISIONAL DIRECTION（已暂定方向）.** The Question owner may ordinarily use actions such as Accept Answer（采纳回答） or mark Resolved（已解决） where policy allows. These are attributable workflow states, not platform truth.

## R8-E10 — Reopening preserves prior lifecycle history / 重新开放保留此前生命周期历史
**HARDENING（架构加固）.** A Closed / Resolved / Archived（关闭 / 已解决 / 已归档） object may later be Reopened（重新开放） or Reactivated（重新激活） where policy permits, without rewriting history as if it had always remained open.

## R8-E11 — Participation restriction is scoped and separate from content removal / 参与限制必须有范围，并与内容移除分离
**HARD INVARIANT（硬边界）.** Restricting an Account（账户） from a capability affects future action in the relevant Scope（范围）. It does not automatically delete historical lawful contributions, and historical content does not preserve future participation rights.

## R8-E12 — Community restrictions follow Account × Capability × Context / 社区限制继续遵循“账户 × 能力 × 情境”
**HARD INVARIANT（硬边界） inherited from Round 6.** The platform may restrict a specific capability in a specific context without treating the user as globally restricted from every community action. Exact enforcement logic belongs to Governance / Moderation（治理 / 审核）.

## R8-E13 — Capability restriction, community suspension and account lifecycle are different states / 能力限制、社区暂停与账户生命周期不是一个状态
**HARD INVARIANT（硬边界）.** Capability Restriction（能力限制）, Community Suspension（社区暂停）, Account Suspension（账户暂停）, Account Closure（账户关闭） and Account Deletion（账户删除） have different scope and consequences and must not be collapsed into one destructive field.

## R8-E14 — Moderation authority and author preference remain distinct / 审核权与作者偏好必须区分
**HARD INVARIANT（硬边界）.** An author may prefer that a discussion close or a reply be reviewed. That preference may be a product input, but it is not automatically equivalent to Moderator Authority（审核权限）. Limited creator controls must be explicit and scoped.

## R8-E15 — Report, Block and Mute do not silently become global moderation decisions / 举报、屏蔽与静音不能静默升级为全局审核结论
**HARD INVARIANT（硬边界）.** Report（举报） is a moderation input. Block / Mute（屏蔽 / 静音） may represent user-level preference or safety behavior. Neither automatically proves wrongdoing or requires global removal.

## R8-E16 — Move, Merge and Split preserve lifecycle meaning / 移动、合并与拆分必须保留生命周期语义
**HARDENING（架构加固）.** Authorized Move / Merge / Split（移动 / 合并 / 拆分） operations must preserve authorship, relevant state, references and provenance rather than resetting the discussion into an apparently new history.

## R8-E17 — Derived surfaces must follow authoritative visibility state / 派生页面必须服从权威可见性状态
**HARD INVARIANT（硬边界）.** Home / For You / Topic / Place / Following / Explore / Search / Notification（首页 / 为你推荐 / 主题 / 地点 / 关注 / 探索 / 搜索 / 通知） are derived surfaces. Stale caches/indexes must not keep serving content beyond the underlying object's current lawful visibility state.

## R8-E18 — Lifecycle and participation rules remain versionable where change is realistic / 现实中可能变化的生命周期与参与规则必须可版本化
**HARDENING（架构加固） from Rule Evolvability（规则可演进架构）.** Creator-close capability, reopening conditions, edit/withdrawal behavior, retention, participation restriction and archive treatment must be classified as Core Invariant（核心不变量）, Policy（策略）, Configuration（配置） or Workflow（工作流） as appropriate before implementation. Material changes require Migration（迁移）, Compatibility（兼容）, Rollout（灰度发布）, Rollback（回滚） and Decision Provenance（决策溯源） where relevant.

# Boundary with later Governance / Moderation（治理 / 审核）

Workshop E defines lifecycle and authority boundaries but does not decide the full enforcement policy. Exact violation categories, report taxonomy, evidence standards, restriction durations, escalation, appeals, staffing, block/mute UX details and jurisdiction-specific legal procedures remain deferred to the dedicated Governance / Moderation（治理 / 审核） round.

# Current visible product picture / 当前可见产品形态

1. creators author objects but do not automatically become moderators of everyone else;
2. discussion/question state can move through open/closed/locked/archived/resolved/removed-like semantics without collapsing those states;
3. author withdrawal, moderation removal, legal removal and privacy deletion remain separate;
4. lawful structural continuity may remain when a root object becomes unavailable;
5. participation restrictions are scoped by capability/context and do not automatically erase history;
6. Question owners can use question-specific workflow controls without becoming truth arbiters;
7. lifecycle changes remain versionable, attributable and compatible with future rule changes.

# Product choices still intentionally open / 仍明确开放的产品选择

No new major product fork is required from the user in Workshop E. The following remain adaptive: whether ordinary creators may directly Close（关闭） their own discussion or only request closure; exact reopen rights; exact edit/withdraw windows; block/mute behavior; archive timing; restriction durations and escalation.

# Next review area / 下一审查区域

Next Round 8 work should examine Community Safety Hooks & Governance Interfaces（社区安全挂钩与治理接口） at the architecture boundary: reporting, moderation cases, enforcement provenance, creator/user safety controls, escalation hooks, correction/appeal integration and anti-abuse interfaces — while leaving actual moderation thresholds for the later dedicated Governance / Moderation（治理 / 审核） round.
