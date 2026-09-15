# Round 11 — Issues / Editorial Curation System（议题 / 编辑策展系统） — Workshop E（工作坊 E）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Editorial Operations, Planning, Accountability & Measurement（编辑运营、规划、责任与测量）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Carried provisional directions:** Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）; Latest-valid-first（默认最新有效版本）.

---

## 0. Decision at a glance / 本步结论一览

Workshop E defines how an Issue（议题） moves from an editorial intention to a publishable, accountable and measurable operation without turning internal project management into public content truth.

Canonical operational shape:

```text
Editorial Plan（编辑计划）
    ↓
Issue Draft / acquisition / assignments（议题草案 / 内容获取 / 任务分配）
    ↓
readiness checks + dependencies（就绪检查 + 依赖）
    ↓
publication decision under Acting Context（行动身份上下文中的发布决定）
    ↓
Published Issue Snapshot（已发布议题快照）
    ↓
version-aware measurement / follow-up（版本感知测量 / 后续处理）
```

Key boundaries:

- internal planning is not publication;
- responsibility is not authorship or authority;
- an editor may use automation and AI（人工智能） assistance, but consequential editorial responsibility must remain attributable;
- readiness is multi-dimensional and invalidatable, not one permanent `ready=true` flag;
- editorial performance cannot collapse into clicks, revenue or one universal quality score;
- Ink & East（墨与东方） may continue its `Published when ready（完成后发布）` posture, but the platform architecture must remain able to support other cadences later;
- operational policy must remain evolvable rather than hard-coded into one workflow forever.

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop E inherits:

- Workshop A（工作坊 A） — Issue identity, curation relation, inclusion semantics;
- Workshop B（工作坊 B） — Submission / Commission / Selection / Publication / Inclusion separation（投稿 / 约稿 / 选入 / 发布 / 收录分离）;
- Workshop C（工作坊 C） — publication lifecycle, versioning, archive, corrections and stable historical snapshots;
- Workshop D（工作坊 D） — composition, sections, editorial framing and presentation semantics;
- Round 6 Identity / Role / Permission（身份 / 角色 / 权限） and Acting Context（行动身份上下文）;
- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱） privacy/purpose boundaries;
- Round 10 Discovery & Recommendation（发现与推荐） measurement, exposure and feedback-loop boundaries;
- Project-wide Rule Evolvability & Change Architecture（平台规则可演进与变更架构）.

The older Ink & East brief records `Published when ready（完成后发布）` and a solo-editor operating posture. These remain useful Ink & East editorial-policy inputs, not permanent platform ontology.

No CMS（内容管理系统）, project-management vendor, analytics stack, AI provider, editor headcount, publication SLA（服务时限）, fixed calendar, fixed KPI（关键绩效指标） target or staffing topology is authorized here.

---

# 2. Editorial planning objects & lifecycle / 编辑规划对象与生命周期

## R11-E1 — Editorial Plan is a first-class operational context, not public content / 编辑计划是一等运营情境，不是公开内容

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The platform must be able to represent an internal Editorial Plan（编辑计划） or equivalent planning context without treating it as a published Issue, public Topic, Work or Recommendation candidate.

---

## R11-E2 — Plan, Issue Draft and Published Snapshot are distinct / 计划、议题草案与已发布快照必须区分

**HARD INVARIANT（硬边界）.**

A planning record may evolve substantially before publication. The architecture must not pretend every internal plan was a public historical edition.

---

## R11-E3 — Pre-publication planning may change without fabricating public revision history / 发布前规划可变化，但不能伪造公开修订历史

**HARDENING（架构加固）.**

Draft theme, working title, candidate list, section concept and planned order may change before publication. Proportionate internal history may be retained, but such changes are not automatically public Issue amendments.

---

## R11-E4 — Material editorial goals and constraints should be attributable / 重要编辑目标与约束应可归因

**HARDENING（架构加固）.**

Where a plan has consequential goals or constraints—theme, audience, rights requirement, missing perspective, commissioning need, deadline or publication condition—the system should preserve enough context to explain why work was organized as it was.

---

## R11-E5 — Dependencies are first-class operational facts where they affect readiness / 影响就绪的依赖应是一等运营事实

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

A planned Issue may depend on rights clearance, accepted revision, translation, illustration, source verification, legal/privacy review, cover asset, editorial note or another prerequisite. These dependencies must not be hidden inside free-text memory if they control publication eligibility.

---

## R11-E6 — Publication readiness is multidimensional, not one permanent boolean / 发布就绪是多维状态，不是永久布尔值

**HARD INVARIANT（硬边界）.**

`ready=true` is insufficient as architecture truth. Readiness may depend on content, rights, privacy, source/provenance, composition, technical delivery and other applicable conditions, and can later become invalid.

---

## R11-E7 — Readiness belongs to a specific relevant version/state / 就绪必须绑定具体相关版本或状态

**HARDENING（架构加固）.**

A readiness decision must not silently carry from an earlier manuscript, rights state or Issue composition to a materially changed one.

---

## R11-E8 — Publication cadence remains policy, not ontology / 发刊节奏属于策略，不是本体规则

**ADAPTIVE RULE（弹性规则）.**

Ink & East may operate as `Published when ready（完成后发布）`, while future publications, brands or special projects may use scheduled, seasonal, rolling or other cadences without changing the core Issue ontology.

---

# 3. Responsibility, Acting Context & accountability / 责任、行动身份上下文与问责

## R11-E9 — Consequential editorial actions require attributable Acting Context / 重要编辑行动需要可归因的行动身份上下文

**HARD INVARIANT（硬边界）.**

Selection approval, publication authorization, withdrawal, material amendment, rights override or other consequential editorial actions must be attributable to the appropriate Actor / Acting Context（行动主体 / 行动身份上下文）.

---

## R11-E10 — Responsibility does not create authorship / 运营责任不产生作者身份

**HARD INVARIANT（硬边界）.**

Being responsible for scheduling, editing, rights checks or publication operations does not make that operator the author of the underlying work.

---

## R11-E11 — Decision ownership must be distinguishable from task assignment / 决策责任人与任务执行人必须可区分

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The person who performs a task may differ from the person/entity authorized to make the consequential decision. Assignment must not silently manufacture approval authority.

---

## R11-E12 — Delegation is scoped / 委派必须限定范围

**HARD PERMISSION SAFEGUARD（权限硬保护）.**

An editor may delegate translation review, copy editing, source checking, illustration review or another task without granting broad editorial governance authority unrelated to that task.

---

## R11-E13 — Temporary operational access is revocable / 临时运营访问必须可撤销

**HARD PERMISSION SAFEGUARD（权限硬保护）.**

Temporary staff, contractors, translators, fact-checkers and invited specialists must lose or reduce access when the relevant task, role or collaboration ends.

---

## R11-E14 — Conflict-of-interest handling applies to operational decisions too / 利益冲突处理同样适用于运营决策

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

A conflict that matters to selection, publication, correction, sponsorship, rights or other consequential treatment must be capable of recusal, reassignment, second review or governed exception according to policy.

---

## R11-E15 — Small / solo-editor operation remains supported / 必须支持小团队或单编辑运营

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Accountability must not require a large committee topology. A solo-editor operation may use proportionate exception, self-attestation, later audit, external review or other safeguards where appropriate.

---

## R11-E16 — Automation cannot become an unaccountable editorial principal / 自动化不能成为不可问责的编辑主体

**HARD INVARIANT（硬边界）.**

Automation may assist workflow, but consequential decisions must still have an attributable governing policy and accountable Actor / Acting Context. “The system decided” is not sufficient provenance for material editorial actions.

---

# 4. Operational workflow & readiness control / 运营工作流与就绪控制

## R11-E17 — Work queues are operational views, not trust or merit scores / 工作队列只是运营视图，不是信任或价值评分

**HARD SEPARATION SAFEGUARD（系统分离硬保护）.**

Priority queues, overdue lists and editorial dashboards must not silently become Account Trust（账户信任）, Work Recognition（作品认可） or Recommendation（推荐） ranking signals.

---

## R11-E18 — Deadlines, reminders and SLAs are configurable / 截止时间、提醒和服务时限应可配置

**ADAPTIVE RULE（弹性规则）.**

Different Issue types, content routes and collaborators may have different target dates and response expectations. No universal fixed publication calendar is locked.

---

## R11-E19 — Consequential transitions require stale-state protection / 重要状态转换需要防止过期状态覆盖

**HARD WORKFLOW SAFEGUARD（工作流硬保护）.**

A stale approval, automated action or old browser session must not overwrite newer states such as withdrawal, rights hold, superseded revision or cancellation.

---

## R11-E20 — Operational blockers should preserve meaning / 运营阻塞应保留业务语义

**HARDENING（架构加固）.**

Where a blocker materially affects publication, the system should be able to distinguish reasons such as rights, source, missing revision, privacy, composition, legal review or another relevant cause rather than only storing `blocked=true`.

---

## R11-E21 — Dependency changes must be able to invalidate downstream readiness / 依赖变化必须能使下游就绪状态失效

**HARD INVALIDATION SAFEGUARD（失效硬保护）.**

If a previously satisfied prerequisite becomes invalid, dependent publication-ready, scheduled or prepared states must be capable of reevaluation.

---

## R11-E22 — Cancellation or withdrawal must invalidate obsolete downstream actions / 取消或撤回必须使过时的下游动作失效

**HARD WORKFLOW SAFEGUARD（工作流硬保护）.**

Cancelled plans, withdrawn material or invalid publication cases must not leave active scheduled-release, preview-generation or other obsolete instructions behind.

---

## R11-E23 — Final publication requires a current-state readiness check / 最终发布必须检查当前状态

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The architecture must permit a final pre-publication check against the current relevant Issue version, included-object versions, rights/privacy state and other applicable hard boundaries.

---

## R11-E24 — Publication creates the accountable snapshot boundary / 正式发布形成可问责的快照边界

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Once publication takes effect, the published composition/version enters the Workshop C historical/version model. Later material changes are amendments, not silent continuation of the draft.

---

## R11-E25 — Emergency hold is distinct from ordinary editorial delay / 紧急暂停与普通编辑延期必须区分

**HARDENING（架构加固）.**

A legal, privacy, rights, integrity or security reason may require urgent publication/distribution hold. Such a hold must not be confused with an ordinary missed deadline or editorial postponement.

---

## R11-E26 — Restore / rollback remains a new historical event after publication / 发布后的恢复或回滚仍是新的历史事件

**HARD HISTORY SAFEGUARD（历史硬保护）.**

Operational recovery must obey Workshop C: restoring an earlier state cannot erase intervening published history.

---

# 5. Editorial quality-control semantics / 编辑质量控制语义

## R11-E27 — Quality-control checklists are configurable and context-specific / 质量检查清单应可配置并按情境变化

**ADAPTIVE RULE（弹性规则）.**

A canonical-source-heavy Issue, an interview Issue and a visual field-note Issue may require different checks. The platform must not freeze one universal checklist as ontology.

---

## R11-E28 — Source / provenance review is proportionate to claim and content type / 来源与溯源检查应与主张及内容类型相匹配

**HARD PRODUCT DIRECTION（产品级硬方向）.**

The rigor and evidence needed for a historical factual claim, an opinion essay, a reader letter and a canonical transcription are not identical. Review depth must remain claim/content-context aware.

---

## R11-E29 — Rights, privacy, legal and factual/source checks remain distinct / 权利、隐私、法律与事实来源检查保持分离

**HARD INVARIANT（硬边界）.**

Passing one check does not imply passing the others. A legally reusable image may still be incorrectly identified; a factually sound article may still lack publication rights.

---

## R11-E30 — Fact-check status is not a universal truth certification / 事实核查状态不是全局真理认证

**HARD INVARIANT（硬边界）.**

An internal review outcome means the defined check was performed under a given process/version; it must not become an unlimited public claim that every statement is permanently true.

---

## R11-E31 — AI-assisted editorial review remains assistive and attributable / AI 辅助编辑审查必须保持辅助性质并可归因

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

AI（人工智能） may assist with formatting checks, missing-field detection, source comparison suggestions, consistency review or other bounded tasks. Its output must not silently become factual truth, authorship, source provenance or final consequential editorial judgment.

---

## R11-E32 — Internal editorial notes are distinct from public corrections / 内部编辑笔记与公开勘误必须区分

**HARD INVARIANT（硬边界）.**

A pre-publication note, unresolved question or internal QA（质量保证） comment is not automatically a public correction event. Workshop C correction semantics begin when applicable published-state history exists.

---

## R11-E33 — Quotes, translations, source excerpts and visual assets must retain relevant version/source context / 引文、翻译、来源摘录与视觉素材需要保留相关版本和来源情境

**HARDENING（架构加固）.**

Operational review should be able to identify which source/edition/translation/asset state was actually checked when that distinction materially affects publication.

---

# 6. Measurement & evaluation / 测量与评估

## R11-E34 — No universal Editorial Quality Score / 不设全站通用编辑质量分

**HARD INVARIANT（硬边界）.**

The platform must not reduce Issue quality, editor quality, contributor quality and business performance into one permanent scalar score.

---

## R11-E35 — Issue performance is multi-dimensional / 议题表现必须多维评估

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Potential dimensions may include reach, qualified reading, completion/continuation, saves, meaningful discussion, reader satisfaction, return behavior, archive value, exploration/discovery contribution, membership/business outcomes and editorial goals. No single dimension universally dominates.

---

## R11-E36 — Engagement is not editorial merit / 互动数据不等于编辑价值

**HARD INVARIANT（硬边界）.**

Clicks, dwell time, comments, shares or likes may describe reader behavior but cannot automatically establish factual quality, provenance quality, Work Recognition（作品认可） or enduring editorial value.

---

## R11-E37 — Exposure context is required to interpret performance / 解释表现需要曝光情境

**HARD MEASUREMENT SAFEGUARD（测量硬保护）.**

An Issue heavily promoted on Home（首页） cannot be fairly compared with a low-exposure Issue using raw views alone. Where material, analysis should retain relevant surface/source/placement context.

---

## R11-E38 — Cross-Issue comparison must respect format and objective differences / 跨议题比较必须尊重形式和目标差异

**HARDENING（架构加固）.**

A long-form research Issue, a visual field Issue and a community-question Issue may have different success criteria. Metrics should not force every Issue toward the same format merely because one metric is easy to optimize.

---

## R11-E39 — Fresh-release and archive/evergreen value are different temporal questions / 新刊表现与归档长期价值是不同时间问题

**HARD PRODUCT DIRECTION（产品级硬方向）.**

An Issue can underperform at launch yet become a valuable archive resource later, or vice versa. Measurement must allow different time horizons.

---

## R11-E40 — Commercial conversion remains separate from editorial merit / 商业转化与编辑价值保持分离

**HARD SEPARATION SAFEGUARD（系统分离硬保护）.**

Membership conversion, service leads or future commerce outcomes may be legitimate business metrics, but they do not by themselves define editorial quality, authority or Recognition.

---

## R11-E41 — Measurement may inform future planning without becoming automatic authority / 测量可以影响未来规划，但不能自动制造权威

**HARD PRODUCT BOUNDARY（产品边界）.**

Performance data may inform editorial strategy, topic exploration and resource allocation. It must not automatically make a high-performing Issue or author authoritative, Recognized or governance-trusted.

---

## R11-E42 — Material analysis should be version-aware / 重要分析应感知版本

**HARD MEASUREMENT SAFEGUARD（测量硬保护）.**

Where amendments materially change content/composition, performance analysis should be able to distinguish relevant versions rather than attributing all behavior to the latest text readers may never have seen.

---

# 7. Automation, privacy & evolvability / 自动化、隐私与可演进性

## R11-E43 — Workflow automation must be observable and reversible where consequential / 重要工作流自动化必须可观察且可逆

**HARDENING（架构加固）.**

Automation may create reminders, assignments, consistency checks or status transitions where policy allows. Material automated actions must retain enough provenance to diagnose, override or roll back them safely.

---

## R11-E44 — Machine-generated editorial framing starts as generated material, not source fact / 机器生成的编辑语境首先是生成内容，不是来源事实

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

AI-generated summaries, captions, suggested section labels or planning notes must not silently become author quotations, canonical metadata or verified provenance. Publication requires appropriate editorial responsibility and labeling/context according to future policy.

---

## R11-E45 — Operational prioritization does not create user trust labels / 运营优先级不能制造用户信任标签

**HARD SEPARATION SAFEGUARD（系统分离硬保护）.**

A contributor being prioritized for a deadline, commissioned task or editorial follow-up does not imply higher Account Trust（账户信任）, Reviewer Trust（评审信任） or governance authority.

---

## R11-E46 — Material operational rules are versionable / 重要运营规则必须可版本化

**HARD RULE-EVOLVABILITY REQUIREMENT（规则可演进硬要求）.**

Readiness gates, approval policy, conflict handling, checklist requirements and material automation behavior must be capable of evolving through Policy / Workflow / Configuration（策略 / 工作流 / 配置） without rewriting past decision history.

---

## R11-E47 — Operational data remains purpose-limited and minimized / 运营数据必须遵守用途限制与最小化

**HARD PRIVACY SAFEGUARD（隐私硬保护）.**

Internal schedules, private submissions, reviewer notes, staff activity and collaborator data must not become unrestricted Recommendation（推荐）, Interest Graph（兴趣图谱）, public reputation or model-training input merely because it exists in the editorial system.

---

## R11-E48 — No implementation stack is mandated / 不指定实现技术栈

**SCOPE GUARD（范围护栏）.**

This architecture does not require a particular CMS（内容管理系统）, workflow engine, analytics warehouse, queue system, AI model, database or project-management platform.

---

## 8. Rule-evolvability mapping / 规则可演进映射

| Layer（层） | Round 11 Workshop E examples（示例） |
|---|---|
| Core Invariant（核心不变量） | planning != publication; responsibility != authorship; engagement != editorial merit; consequential actions attributable |
| Policy（策略） | readiness requirements, conflict treatment, AI review policy, publication approval policy |
| Configuration（配置） | deadlines, reminder windows, optional checklist items, operating cadence |
| Workflow（工作流） | plan → acquisition → production → readiness → publication → follow-up |
| Algorithm（算法） | optional prioritization, anomaly detection, metric analysis, AI assistance |
| Data（数据） | plans, assignments, dependencies, readiness evidence, decision provenance, version-aware metrics |

---

## 9. Deferred / not decided here / 本步明确延后

Workshop E does **not** lock:

- editor/team headcount;
- exact editorial calendar or publication frequency;
- exact task/status vocabulary;
- exact approval count or committee structure;
- exact checklist contents;
- specific analytics/KPI targets;
- exact newsletter/notification delivery system;
- exact membership/Archive entitlements;
- compensation, contracts or Services / Monetization（服务 / 商业化） policy;
- AI provider/model or whether AI is enabled for any specific task;
- CMS / project-management / analytics implementation stack.

---

## 10. Workshop E status / 工作坊 E 状态

**R11-E1…R11-E48 drafted.**

Next required action: dedicated Workshop E Adversarial Audit（工作坊 E 对抗性审计） before Round 11 consolidation.
