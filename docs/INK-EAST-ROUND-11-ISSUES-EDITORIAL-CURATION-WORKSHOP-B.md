# Round 11 — Issues / Editorial Curation System（议题 / 编辑策展系统） — Workshop B（工作坊 B）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Editorial Workflow, Selection & Commissioning（编辑工作流、选稿与约稿）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **User decision carried forward:** **Option B（方案 B） — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）**, recorded as a PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.

---

## 0. Decision at a glance / 本步结论一览

Workshop B defines how material reaches an Issue（议题） without collapsing several different editorial processes into one vague `selected=true` state.

The editorial system must preserve this distinction:

```text
Discovery / Submission / Open Call / Commission / Reader Letter / Collaboration
        ↓
Editorial Consideration（编辑评估）
        ↓
Selection / Conditional Acceptance（选入 / 条件接受）
        ↓
Editorial Production & Revision（编辑制作与修订）
        ↓
Publication-ready Object（可发布对象）
        ↓
Issue Inclusion Relation（议题收录关系）
        ↓
Published Issue Snapshot（已发布议题快照）
```

The pipeline is conceptual rather than a mandatory software screen flow. Small V1 operations may use simpler tooling, but the product semantics must remain distinct so later scale does not require rewriting history.

Core principles:

- Submission（投稿） != Commission（约稿） != Selection（选入） != Publication（发布） != Issue Inclusion（议题收录）;
- editorial rejection is normally a fit/timing decision, not a Trust / Recognition punishment;
- Contributor（贡献者） status may open stronger editorial channels but never guarantees acceptance;
- editorial work may be discovered from already-public platform objects without forcing authors to submit them again;
- private/unpublished submissions remain private workflow material unless deliberately published;
- substantive editorial changes cannot silently transfer authorship or rewrite another author's work;
- every consequential selection must remain compatible with rights, privacy, conflict-of-interest and historical-version safeguards.

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop B inherits:

- Round 11 Workshop A R11-A1…A44 and the user-confirmed Option B decision;
- Content & Knowledge System（内容与知识系统） multi-lane model;
- Contributor architecture: stronger submission/collaboration channels may exist, while acceptance remains independent;
- Round 6 Identity / Role / Permission（身份 / 角色 / 权限） and Acting Context（行动身份上下文）;
- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- Round 10 Discovery & Recommendation（发现与推荐）, especially Editorial（编辑策展） source attribution;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

No exact editorial staffing model, number of approval steps, submission deadline, response-time SLA（服务时限）, commission contract template, compensation rate, content quota, review form or CMS（内容管理系统） implementation is authorized here.

---

# 2. Editorial workflow objects & state semantics / 编辑工作流对象与状态语义

## R11-B1 — Submission, commission, selection, publication and inclusion are distinct / 投稿、约稿、选入、发布与收录必须区分

**HARD INVARIANT（硬边界）.**

These concepts must remain distinguishable because they carry different authorship, contractual, rights, workflow and historical meanings.

---

## R11-B2 — Editorial consideration is a workflow context, not a new content identity / 编辑评估是工作流情境，不是新的内容身份

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Considering an existing public Work（作品） for an Issue does not require cloning it into an editorial-only object. Where a private pitch/submission exists, its workflow identity remains separate from any later published Work identity.

---

## R11-B3 — Workflow records need stable identity where history matters / 重要编辑工作流记录需要稳定身份

**HARDENING（架构加固）.**

A Submission（投稿）, Commission（约稿） or other consequential editorial case should be independently referable across assignment, revision, decision and cancellation where needed for audit/history.

---

## R11-B4 — Editorial states must have business meaning / 编辑状态必须表达业务语义

**HARD INVARIANT（硬边界）.**

States such as submitted, under consideration, invited, commissioned, revision requested, conditionally accepted, accepted, withdrawn, declined, cancelled, publication-ready and published/included must not be reduced to ambiguous UI labels if their meaning affects permissions or history.

Exact state vocabulary remains Workflow / Configuration（工作流 / 配置） territory.

---

## R11-B5 — Conditional acceptance is not final publication / 条件接受不等于最终发布

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

An editorial team may accept subject to revision, rights clearance, source checks, legal/privacy review, formatting or other conditions. The platform must not treat conditional acceptance as already published or already included in the final Issue snapshot.

---

## R11-B6 — Final selection and Issue inclusion remain separate actions / 最终选入与议题收录仍是不同动作

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

A work can be editorially selected before final placement/order/section is known. Likewise a previously selected work may later be removed from one Issue without deleting or degrading the underlying work.

---

## R11-B7 — Non-selection does not create a negative platform judgment by default / 未选中默认不形成平台负面裁决

**HARD INVARIANT inherited from A30（继承 A30）.**

Decline / non-selection must not automatically reduce Account Trust（账户信任）, Work Recognition（作品认可）, recommendation standing or Contributor Qualification（贡献者资格）.

---

# 3. Acquisition routes / 内容获取路径

## R11-B8 — Editorial acquisition is multi-route / 编辑内容获取支持多种路径

**HARD PRODUCT DIRECTION（产品级硬方向）.**

An Issue may source material through multiple legitimate routes rather than one universal submission queue.

---

## R11-B9 — Existing public platform works can be curated without resubmission / 已公开平台作品可直接进入编辑考虑，无需重复投稿

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Editors may discover an eligible existing Community / Contributor / Editorial / canonical-linked object and consider it for an Issue while preserving authorship and original provenance.

Author notification/permission requirements depend on rights, contract, platform terms and product policy; curation itself does not erase them.

---

## R11-B10 — Contributor submission is an access channel, not an outcome privilege / 贡献者投稿是渠道权限，不是结果特权

**HARD INVARIANT（硬边界）.**

Contributor Qualification（贡献者资格） may unlock dedicated pitch/submission/collaboration routes, but cannot guarantee acceptance, placement, prominence or Recognition.

---

## R11-B11 — Open calls are optional per Issue / 公开征稿可按议题选择开启

**ADAPTIVE RULE（弹性规则）.**

Some Issues may use an Open Call（公开征稿） or themed call while others may be fully commissioned/curated. Open-call availability is Policy / Workflow（策略 / 工作流）, not a permanent requirement of every Issue.

---

## R11-B12 — Editorial commissioning is a first-class acquisition route / 编辑约稿是一等内容来源路径

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Editors may intentionally commission new work when an Issue requires a missing perspective, format, expertise or narrative role. Commission origin remains attributable.

---

## R11-B13 — Reader questions / letters may be selected through their own editorial route / 读者问题与来信可以通过独立编辑路径进入议题

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Ask / Letter（提问 / 来信） material does not need to masquerade as a normal article submission. Selection into an Issue preserves original submission/provenance and any privacy/consent constraints.

---

## R11-B14 — Partner / institution collaboration is a route, not guaranteed placement / 合作方与机构协作只是来源路径，不保证版位

**HARD INVARIANT（硬边界）.**

Partner（合作方） or Institution（机构） relationships may create collaboration opportunities but do not automatically create Issue inclusion, editorial endorsement, Recognition or authority.

---

# 4. Submission semantics / 投稿语义

## R11-B15 — Private submission and public-work submission are different cases / 私密投稿与公开作品送审是不同情形

**HARD INVARIANT（硬边界）.**

A private unpublished manuscript/pitch and an already-public platform Work referenced for consideration have different visibility, retention and rights semantics and must not be treated identically.

---

## R11-B16 — Private submissions are non-public by default / 私密投稿默认不公开

**HARD PRIVACY / PRODUCT SAFEGUARD（隐私 / 产品硬保护）.**

Unpublished submission content must not become searchable, recommendable, publicly previewable or community-visible merely because it entered the editorial workflow.

---

## R11-B17 — A submission may target one Issue or general editorial consideration / 投稿可以指定某一期，也可以进入一般编辑考虑

**ADAPTIVE RULE（弹性规则）.**

The system may support Issue-specific submissions and broader editorial pitches. Exact availability and retention are later editorial policy decisions.

---

## R11-B18 — Submission does not grant a publication entitlement / 投稿不产生出版权利

**HARD INVARIANT（硬边界）.**

Receiving a submission does not promise acceptance, response by a fixed deadline, publication, payment, Recognition or distribution unless a separate explicit agreement creates such obligations.

---

## R11-B19 — Withdrawal is distinct from deletion / 撤回投稿与删除数据不同

**HARD INVARIANT（硬边界）.**

An author may withdraw a submission from editorial consideration where policy permits. Withdrawal does not automatically define privacy deletion, legal erasure or destruction of every workflow/audit record.

---

## R11-B20 — Resubmission and revision need attributable version semantics / 重投与修订需要可归因的版本语义

**HARDENING（架构加固）.**

Where a submission changes materially, the editorial system should be able to identify which revision was evaluated, accepted or declined rather than treating all changes as one timeless manuscript.

---

## R11-B21 — Deadlines and response windows are policy, not domain invariants / 截稿时间与回复时限属于策略，不是领域硬规则

**DEFERRED CALIBRATION（延后校准）.**

Issue deadlines, rolling submissions, response targets, revision windows and expiry/carry-forward behavior must remain configurable and context-specific.

---

## R11-B22 — Editorial eligibility and editorial merit remain distinct / 投稿资格与编辑价值判断保持分离

**HARD INVARIANT（硬边界）.**

A submission may be ineligible because of format, rights, scope, timing or policy without implying the work is poor. Likewise an eligible submission is not automatically strong enough for selection.

---

# 5. Commissioning semantics / 约稿语义

## R11-B23 — A commission is an editorial relationship/agreement, not publication itself / 约稿是编辑关系或协议，不等于发布

**HARD INVARIANT（硬边界）.**

Commissioning creates an assignment/collaboration context. It does not automatically mean the final draft is accepted, published, Recognized or included without any remaining conditions.

---

## R11-B24 — Commission brief and final work are separate / 约稿简报与最终作品分离

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The editorial brief may define topic, audience, scope, format, expected sources, timing and other requirements. The final authored Work remains a distinct object/version with its own authorship and provenance.

---

## R11-B25 — Commercial/compensation terms are separate from editorial standing / 报酬与商业条款不等于编辑地位

**HARD BOUNDARY（硬边界）.**

Payment, honorarium, contract value or other compensation must not create Work Recognition（作品认可）, Contributor Qualification（贡献者资格） or guaranteed recommendation rank.

Exact compensation/contracts are deferred to Services / Monetization（服务 / 商业化） work.

---

## R11-B26 — A commission can be changed or cancelled through an explicit workflow / 约稿可以通过明确工作流变更或取消

**ADAPTIVE RULE（弹性规则）.**

Editorial circumstances, rights, schedule, contributor availability or other legitimate causes may change a commission. Material changes/cancellation should remain attributable rather than silently deleting the relationship history where retention is appropriate.

---

## R11-B27 — Commission does not transfer authorship by default / 约稿默认不转移作者身份

**HARD INVARIANT（硬边界）.**

Commissioning a work does not make Ink & East（墨与东方） the author unless the actual authorship arrangement explicitly establishes that. Editorial ownership, copyright ownership, publisher status and authorship are distinct concepts.

---

## R11-B28 — Commissioned work is not automatically an official platform viewpoint / 约稿作品不自动等于平台官方立场

**HARD PRODUCT BOUNDARY（产品边界）.**

Editorial commissioning may indicate intentional editorial selection but does not mean every claim is official platform doctrine, factual truth or canonical authority.

---

## R11-B29 — Co-authorship, translation and editorial contribution need explicit attribution / 合著、翻译与编辑贡献需要明确署名

**HARDENING（架构加固）.**

Where a work has multiple creators or materially distinct roles such as author, translator, editor, illustrator or researcher, the product should preserve those roles rather than flattening all contributors into one generic author field.

---

# 6. Editorial evaluation & selection / 编辑评估与选稿

## R11-B30 — Editorial selection is multi-dimensional / 编辑选稿是多维判断

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Selection may legitimately consider theme fit, narrative role, quality, originality, source/provenance fitness, rights, timing, audience value, format balance, duplication, representation of perspectives and other Issue-specific needs.

No single factor is universally decisive.

---

## R11-B31 — No universal editorial quality score is architecture truth / 不设全站通用编辑质量分

**HARD INVARIANT（硬边界）.**

Editorial judgment must not be reduced to one permanent scalar such as `editorial_score` that silently becomes truth across all Issues and content classes.

---

## R11-B32 — Popularity and Recognition are evidence, not automatic selection commands / 热度与作品认可只是证据，不是自动选稿命令

**HARD INVARIANT（硬边界）.**

Popularity, recommendation performance or Work Recognition（作品认可） may inform discovery/context but cannot force Issue inclusion. Conversely, low traffic does not prohibit selection.

---

## R11-B33 — Conflict of interest must be representable / 利益冲突必须可表达

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

The editorial workflow must be able to represent a material Conflict of Interest（利益冲突） where a selector/editor has a direct author, commercial, institutional or other relevant relationship to the work.

Exact recusal/reassignment rules remain Governance / Policy（治理 / 策略） work.

---

## R11-B34 — Consequential selection retains Decision Provenance / 重要选稿保留决策溯源

**HARDENING（架构加固）.**

Where proportionate, a material editorial decision should retain who/what Acting Context（行动身份上下文） made the decision, relevant workflow version/policy, selected object/revision and effective time.

This does not require publishing internal deliberations to readers.

---

## R11-B35 — Editorial criteria are versionable policy / 编辑标准属于可版本化策略

**HARD under Rule Evolvability（规则可演进硬要求）.**

Criteria and workflows that realistically change must be versionable/effective-dated where consequential. Historical decisions remain interpretable under the policy that applied at the time.

---

## R11-B36 — Fair editorial opportunity does not mean equal acceptance / 编辑机会公平不等于平均录用

**HARD PRODUCT BOUNDARY（产品边界）.**

The platform may design discovery/open-call/contributor routes to reduce structural invisibility, but it does not promise equal acceptance rates among authors, Topics or submission origins.

---

## R11-B37 — Editorial quotas are not ontology / 编辑配额不是本体

**HARDENING（架构加固）.**

Any future goals for section balance, contributor mix, geography, content type or open-call share are Policy / Configuration（策略 / 配置）, not permanent object properties.

---

## R11-B38 — Decision reasons may be recorded without becoming universal public explanations / 选稿理由可以记录，但不要求全部公开

**ADAPTIVE RULE（弹性规则）.**

The system may retain structured/internal decision reasons for operations, audit or author communication. Round 11 does not mandate a public explanation for every acceptance or rejection.

---

# 7. Revision, editing & authorship integrity / 修订、编辑与作者完整性

## R11-B39 — Editorial editing cannot silently rewrite another author's work / 编辑不能静默改写他人作品

**HARD INVARIANT（硬边界）.**

Copyediting, substantive editing, translation, restructuring or fact/source correction must occur through an authorized editorial workflow appropriate to the authorship/contract context.

---

## R11-B40 — Copyediting and substantive change remain distinguishable where material / 校对与实质改写在必要时保持可区分

**HARDENING（架构加固）.**

Minor grammar/formatting correction and a change to thesis, evidence, meaning or authorship are not the same editorial action. Material changes should preserve appropriate revision/version provenance.

---

## R11-B41 — Author/editor approval semantics are context-aware but cannot be fabricated / 作者与编辑确认机制可以按情境变化，但不能伪造

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Exact approval mechanics may differ for staff-authored, commissioned, translated, licensed or community-origin work, but the platform must not represent an author as having approved a material revision when no such authorization exists.

---

## R11-B42 — Editorial fact/source checking does not convert into Work Recognition / 编辑事实与来源检查不等于作品认可

**HARD INVARIANT（硬边界）.**

Editorial due diligence may improve publication readiness and may be recorded as editorial process, but it must not silently count as the independent Recognition（作品认可） decision system.

---

# 8. Publication readiness & Issue handoff / 发布准备与议题衔接

## R11-B43 — Publication readiness is a distinct gate / 可发布状态是独立门槛

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Before an object is included in a final published Issue snapshot, applicable content integrity, rights/access, privacy, attribution and workflow conditions must be satisfied or explicitly resolved under policy.

---

## R11-B44 — Issue inclusion must point to the intended accepted/published revision / 议题收录必须对应预期的已接受 / 已发布修订版本

**HARD inherited from A38（继承 A38）.**

The curation relation must not accidentally follow a later draft or unrelated live revision when the Issue intended a different accepted version/state.

---

## R11-B45 — Post-publication changes follow the Versioned Issue model / 发布后变更遵循版本化议题模型

**USER-CONFIRMED PROVISIONAL DIRECTION（用户确认的暂定方向）.**

After publication, consequential corrections/substitutions/removals occur through the Option B architecture: stable historical snapshot + explicit version/amendment semantics, not silent rewrite.

---

## R11-B46 — Object readiness and Issue readiness are different / 单篇内容准备完成与整期准备完成不同

**HARDENING（架构加固）.**

One accepted/published-ready work does not imply the Issue is ready; conversely, an Issue deadline must not force publication of an object that still fails hard rights/privacy/eligibility requirements.

---

## R11-B47 — Issue postponement/cancellation does not punish included authors by default / 议题延期或取消默认不惩罚作者

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

If an Issue is postponed, restructured or cancelled, that event must not automatically damage Account Trust, Work Recognition or the underlying work's platform standing.

Contract/compensation consequences, if any, belong to separate agreements/policy.

---

# 9. Editorial operations, privacy & access / 编辑运营、隐私与访问

## R11-B48 — Unpublished editorial material follows least-privilege access / 未发布编辑材料遵循最小权限访问

**HARD PRIVACY / PERMISSION SAFEGUARD（隐私 / 权限硬保护）.**

Private submissions, draft commissions, unpublished revisions, internal notes and rights evidence should be visible only to authorized actors/contexts required for the workflow.

---

## R11-B49 — Editorial workflow data cannot silently become recommendation fuel / 编辑工作流数据不能静默变成推荐燃料

**HARD PURPOSE-LIMITATION BOUNDARY（用途限制硬边界）.**

A rejected/private submission, editorial note, conflict disclosure or internal evaluation must not become Interest Graph（兴趣图谱） or Recommendation（推荐） input merely because the platform stores the data.

---

## R11-B50 — Workshop B does not mandate one editorial staffing topology / 工作坊 B 不强制单一编辑组织结构

**SCOPE GUARD（范围护栏）.**

The architecture supports a solo editor, small editorial team, specialist desk or future larger operation without making today's team size a permanent domain assumption.

Exact editor roles, approval counts, desk structure, workload rules and escalation paths are deferred.

---

# 10. Rule evolvability classification / 规则可演进分类

Workshop B treats:

- separation of workflow concepts, authorship integrity, privacy of private submissions, curation != Recognition and hard rights/access boundaries as Core Invariants（核心不变量）;
- eligibility criteria, editorial criteria, open-call availability, deadlines, response windows, section balance and acceptance practices as Policy / Configuration（策略 / 配置）;
- Submission / Commission / Review / Revision / Acceptance / Publication / Inclusion（投稿 / 约稿 / 评估 / 修订 / 接受 / 发布 / 收录） as Workflow（工作流）;
- future editorial candidate assistance or prioritization as optional Algorithm（算法）, never editorial truth;
- Submission, Commission, Work Revision, Decision Provenance and Curation Relation（投稿、约稿、作品修订、决策溯源、策展关系） as distinguishable Data（数据） concepts.

---

## 11. Deferred / not decided here / 延后项

Workshop B does not yet decide:

- exact editor/staff role matrix;
- number of approvals required for publication;
- whether any rejection gets a formal reconsideration/appeal path;
- exact open-call UX;
- response-time promises;
- contributor compensation / commission contract terms;
- submission retention windows;
- author-facing status wording;
- exact editorial analytics/KPI（关键绩效指标）;
- exact archive/back-issue UX;
- Membership / Reading Room（会员 / 阅读室） access rules;
- cover/layout/visual design;
- implementation technology.

Next Round 11 workshop should continue with Publication Lifecycle, Versioning, Archive & Corrections（发布生命周期、版本、归档与勘误） unless an audit exposes a prerequisite.
