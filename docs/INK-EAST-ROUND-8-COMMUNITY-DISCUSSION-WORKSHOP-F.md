# Round 8 — Community & Discussion System（社区与讨论系统） — Workshop F（工作坊 F）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Community Safety Hooks & Governance Interfaces（社区安全挂钩与治理接口） — reporting, moderation-case boundaries, enforcement provenance, creator/user safety controls, escalation hooks, correction/appeal integration and anti-abuse interfaces, without deciding final Governance / Moderation（治理 / 审核） policy thresholds.

## R8-F1 — Report is a case-opening signal, not a verdict / 举报是触发审查的信号，不是裁决
**HARD INVARIANT（硬边界）.** A Report / Flag（举报 / 标记） may create or contribute to a Moderation Case（审核案件） but does not itself establish wrongdoing, truth, removal necessity or account guilt.

## R8-F2 — Moderation Case is distinct from the content object / 审核案件与内容对象分离
**HARD INVARIANT（硬边界）.** Review evidence, reporter identity where protected, internal notes, decisions and appeal history belong to a governance case record rather than being embedded as ordinary mutable fields on the post/thread itself.

## R8-F3 — Multiple reports may map to one case without becoming multiple punishments / 多个举报可以汇入同一案件，但不能自动变成多重处罚
**HARDENING（架构加固）.** Duplicate or related reports may be consolidated for review. Raw report count must not mechanically determine severity or outcome.

## R8-F4 — Consequential moderation actions preserve Decision Provenance / 重要审核动作保留决策溯源
**HARD INVARIANT（硬边界）.** Material actions should preserve the target, authorized Actor / Acting Context（行为主体 / 行为情境）, policy/rule version, basis category, time and outcome as appropriate. This continues Round 6 and Rule Evolvability（规则可演进架构） requirements.

## R8-F5 — User-facing reason and internal evidence depth may differ / 用户可见理由与内部证据深度可以不同
**HARD INVARIANT（硬边界）.** The platform may provide a concise public/user explanation while retaining more detailed internal evidence where privacy, reviewer safety, security or legal obligations require it. Public explanation must not misrepresent the underlying basis.

## R8-F6 — Moderation visibility, recommendation ranking and user preference remain separate causes / 审核可见性、推荐排序与用户偏好继续分离
**HARD INVARIANT inherited from A44（继承 A44 的硬边界）.** Content may be less visible because of moderation, ranking, user filtering or lifecycle state. These causes must remain distinguishable rather than collapsing into one hidden “downranked” state.

## R8-F7 — Material visibility interventions are attributable and reviewable / 重要可见性干预必须可归属、可复核
**HARDENING inherited from A45（继承 A45 的架构加固）.** Manual or policy-driven interventions that materially change access/distribution should retain appropriate provenance and reviewability. Ordinary recommendation variation is not automatically a moderation action.

## R8-F8 — Personal safety controls do not equal platform-wide enforcement / 个人安全控制不等于平台全局执行
**HARD INVARIANT（硬边界）.** Block / Mute / Hide for me（屏蔽 / 静音 / 对我隐藏） may change one user's experience without automatically deleting or globally suppressing the underlying object.

## R8-F9 — Creator tools and moderator tools remain different capability sets / 创作者工具与审核工具保持不同能力集合
**HARD INVARIANT（硬边界）.** A creator may manage their own publication/thread within product policy and request review of unwanted participation, but platform-wide removal, sanctions, case adjudication and protected-evidence access require separate scoped authority.

## R8-F10 — Escalation is workflow routing, not automatic severity proof / 升级处理是工作流路由，不自动证明问题更严重
**HARD INVARIANT（硬边界）.** A case may escalate because of ambiguity, scope, policy sensitivity, repeated related events, conflict of interest or authority needs. Escalation does not itself establish the final outcome.

## R8-F11 — Conflict of Interest controls apply to consequential community cases / 重要社区案件适用利益冲突控制
**HARD INVARIANT inherited from Round 6（继承自第六轮）.** Where a moderator/reviewer has a material Conflict of Interest（利益冲突）, recusal, reassignment or independent review must remain possible. Exact triggers belong to Governance（治理）.

## R8-F12 — Correction, restoration and appeal are distinct / 纠正、恢复与申诉是不同机制
**HARD INVARIANT inherited from A37–A39（继承 A37–A39 的硬边界）.** Appeal（申诉） challenges a decision; Correction（纠正） repairs an error; Restoration（恢复） changes current state after a valid basis exists. Filing an appeal does not itself restore restricted capability or content.

## R8-F13 — Community enforcement history does not become a universal social score / 社区执行历史不能变成通用社会评分
**HARD INVARIANT（硬边界）.** Governance records may inform capability-specific risk decisions where appropriate, but the platform must not collapse moderation history into one universal public/private prestige or trust number governing unrelated features.

## R8-F14 — Automated detection may assist but not silently become unreviewable authority / 自动检测可以辅助，但不能成为不可复核的隐藏权威
**HARD INVARIANT（硬边界）.** Automated systems may prioritize, classify, detect anomalies or route cases. Consequential outcomes must remain attributable to an authorized policy/workflow, with human fallback or review where consequence and uncertainty justify it.

## R8-F15 — Anti-abuse signals remain purpose-limited / 反滥用信号必须用途受限
**HARD INVARIANT（硬边界）.** Signals collected for abuse prevention, integrity or moderation must not automatically flow into Recognition（作品认可）, Contributor Qualification（贡献者资格）, commercial advantage or unrelated recommendation prestige.

## R8-F16 — Governance interfaces must remain evolvable / 治理接口必须保持可演进
**HARDENING（架构加固） from Rule Evolvability（规则可演进架构）.** Report categories, routing, case states, escalation, reason codes, restoration flows and user-facing notices must be treated as versionable Policy / Workflow / Configuration（策略 / 工作流 / 配置） where realistically changeable. Historical cases must remain interpretable after policy evolution.

# Boundary with later Governance / Moderation（治理 / 审核）

Workshop F defines the interface contract between Community（社区） and future Governance / Moderation（治理 / 审核）. It does not decide exact policy categories, evidence thresholds, restriction lengths, staffing model, legal-jurisdiction rules, detailed appeals, automated-detection thresholds or sanction ladders.

# Current visible product picture / 当前可见产品形态

1. users can report content without report count becoming guilt;
2. governance cases remain separate from posts/threads;
3. important actions retain decision provenance;
4. personal block/mute and platform moderation remain different systems;
5. creators do not receive hidden moderator authority over other users;
6. appeals, corrections and restoration remain distinct;
7. automation can assist but does not become an opaque unreviewable authority;
8. moderation records do not become a universal status score.

# Next review area / 下一审查区域

Next Round 8 work should examine Community Object Matrix & End-to-End Flows（社区对象矩阵与端到端流程）: consolidate Publication（发布物）, Discussion（讨论）, Question（问题）, Answer（回答）, Reply（回复）, Topic/Place links（主题 / 地点关联）, Follow（关注）, Reaction（互动反应）, Save（收藏）, Share（分享）, lifecycle states and governance hooks into a coherent product flow, then test Round 8 for contradictions and missing boundaries before current-truth consolidation.
