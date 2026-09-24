# Ink & East Round 11 — Current Truth V1（第十一轮当前有效真相 V1）

> **Round:** Issues / Editorial Curation System（议题 / 编辑策展系统）  
> **Status:** CURRENT TRUTH / PRODUCT ARCHITECTURE ONLY（当前有效真相 / 仅产品架构）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Controlling inventory:** **273 rule slots**  
> **Supersession:** this document consolidates Workshop A–E, their Hardening Addenda（加固补充）, user decision records and cross-workshop hardening. Where a provisional Workshop question conflicts with a later user decision record, the later decision controls.

> **Post-seal scope note（封存后范围说明）:** Round 12 later established that normal published platform content remains publicly readable and Membership（会员） is not a paywall/content-unlock product. References in this Round 11 record to `membership/access constraints`, `premium`, gating or per-reader access filtering preserve generic rights/privacy/legal/private-resource/access-layer separation only; they **do not authorize article / Issue / Archive Membership paywalls**. See `ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`.

---

## 0. Decision at a glance / 结论一览

Round 11 defines Issue（议题 / 期刊期次） as a first-class editorial curation object inside Project 3（项目三）'s larger content / knowledge / community platform.

Canonical model:

```text
Platform Works / Knowledge Objects（平台作品 / 知识对象）
        ↓
Editorial acquisition / submission / commission（编辑获取 / 投稿 / 约稿）
        ↓
Editorial selection + Issue Curation Relation（编辑选稿 + 议题策展关系）
        ↓
version-scoped composition / sections / framing（版本范围内的编排 / 栏目 / 编辑语境）
        ↓
readiness + accountable publication decision（就绪 + 可问责的发布决定）
        ↓
Published Issue Snapshot（已发布议题快照）
        ↓
versioned amendments / corrections / archive history（版本化修订 / 勘误 / 归档历史）
        ↓
Latest-valid-first canonical reader view（默认最新有效版本的主阅读视图）
```

Issue（议题） remains an editorial publication/curation layer. It is **not**:

- the whole content database;
- a superclass that absorbs all Works（作品）;
- a substitute for Topic / Place / Knowledge Entity（主题 / 地点 / 知识实体）;
- Work Recognition（作品认可）;
- a trust/identity upgrade for the author;
- a generic recommendation feed;
- a permanent fixed eight-article magazine template.

---

## 1. User-confirmed provisional product directions / 用户确认的暂定产品方向

### P11-1 — Published Issue mutability / 已发布议题可变性

**Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）.**

A published Issue may receive legitimate corrections, rights-driven substitutions, amendments or later editorial updates through explicit version/history semantics. Material historical publication context must remain explainable rather than being silently rewritten.

Source decision: `ROUND-11-WORKSHOP-A-PUBLISHED-ISSUE-MUTABILITY-DECISION.md`.

### P11-2 — Canonical Issue page default / 议题主页面默认版本

**Latest-valid-first（默认最新有效版本）.**

The canonical Issue page normally presents the latest valid representation while preserving material amendment/history context and addressable historical snapshots where policy permits.

Source decision: `ROUND-11-WORKSHOP-C-CURRENT-VERSION-DEFAULT-DECISION.md`.

Both directions remain **PROVISIONAL PRODUCT DIRECTION（暂定产品方向）**, not immutable Core Invariant（核心不变量）.

---

## 2. Controlling source inventory / 控制来源清单

| Group（组） | Rule range（规则范围） | Count（数量） | Subject（主题） |
|---|---:|---:|---|
| A | R11-A1…R11-A44 | 44 | Issue identity, curation relation, inclusion semantics（议题身份、策展关系、收录语义） |
| B | R11-B1…R11-B59 | 59 | Editorial workflow, selection, submission, commission（编辑工作流、选稿、投稿、约稿） |
| C | R11-C1…R11-C56 | 56 | Publication lifecycle, versioning, archive, corrections（发布生命周期、版本、归档、勘误） |
| D | R11-D1…R11-D52 | 52 | Composition, sections, framing, presentation semantics（编排、栏目、编辑语境、展示语义） |
| E | R11-E1…R11-E56 | 56 | Operations, planning, accountability, measurement（运营、规划、责任、测量） |
| CW | R11-CW1…R11-CW6 | 6 | Cross-workshop hardening（跨工作坊加固） |
| **Total** |  | **273** |  |

The detailed wording remains preserved in the Workshop / Addendum / Decision source files. This Current Truth establishes the controlling synthesis and precedence.

---

# 3. Issue identity & curation / 议题身份与策展

Controlling range: **R11-A1…A21 + A38…A44**.

Core rules:

- Issue is a first-class curation object with stable platform identity, lifecycle and editorial metadata.
- Issue is not a content superclass; inclusion is a relation, not destructive reclassification.
- Underlying Work identity, authorship, provenance, content class, Recognition state, rights state and lifecycle survive Issue inclusion.
- Human-readable issue number, title, theme phrase, core character, cover motif and public URL are not durable database identity.
- Issue ↔ Object inclusion is a typed Curation Relation（策展关系） that may carry section/role/order/framing/inclusion/version/selection provenance context.
- Curation order belongs to the Issue context, not global object rank.
- One object may be curated into multiple Issues without cloning identity or authorship.
- Issue may add attributable introductions, section headings, editorial notes, bridges, captions or reading-order context without rewriting the underlying Work.
- Mixed curation may include canonical/classical material, editorial/teaching work, contributor work, selected community work, reader letters/questions, Place / Topic / Knowledge Entity-linked material and future supported objects while preserving original class and authority semantics.
- Issue is one curation form among possible Collections（合集）, reading paths, exhibitions or dossiers; not all durable content must belong to an Issue.
- Theme is editorial meaning and may link to shared knowledge objects, but it does not replace global ontology.
- Sections are configurable editorial policy. The inherited fixed eight-slot structure, fixed article count and one-core-character convention are not platform invariants.
- `Published when ready（完成后发布）` may remain an Ink & East policy but publication cadence is not platform ontology.
- Included object/version state must remain historically explainable where material.
- Consequential inclusion/removal/order/framing changes need proportionate editorial history.
- Consequential selection retains applicable Acting Context（行动身份上下文） and Selection Origin（选稿来源）.
- Future paid/sponsored/commercial inclusion, if ever authorized, cannot masquerade as ordinary editorial curation.
- Rights/privacy/legal change may alter visible Issue content without erasing permissible historical provenance.
- Issue curation cannot recursively manufacture Work Recognition.
- Issue preview/framing cannot bypass underlying access or rights boundaries.

---

# 4. Editorial selection vs Recognition / 编辑选稿与作品认可分离

Controlling range: **R11-A22…A30 + relevant B/E/CW rules**.

- Issue Inclusion / Editorial Selection（议题收录 / 编辑选择） != Work Recognition（作品认可）.
- Recognized Works may be strong candidates but Recognition does not guarantee inclusion.
- Unrecognized Works may still be editorially selected.
- Issue inclusion does not automatically create Contributor Qualification（贡献者资格）, Reviewer Trust（评审信任）, Account Trust（账户信任） or governance authority.
- Contributor / Official / Institution / Partner（贡献者 / 官方 / 机构 / 合作方） status does not guarantee placement.
- Selection origin remains attributable where material.
- Submission（投稿）, Commission（约稿）, Selection（选入）, Publication（发布） and Issue Inclusion（议题收录） are different business concepts.
- Rejection / non-selection is normally a fit/timing/editorial decision, not a negative platform quality/trust punishment.
- Repeated inclusion of the same Work across Issues/versions is curation history, not multiple independent Recognition votes or fabricated independent evidence.

---

# 5. Rights, access & discussion boundaries / 权利、访问与讨论边界

Controlling range: **R11-A31…A36 + C/D/CW rules**.

- Issue inclusion cannot bypass object-level Rights（权利）, privacy, legal, lifecycle or membership/access constraints.
- Issue-level access and object-level access remain distinguishable.
- Membership / Reading Room（会员 / 阅读室） details remain deferred; Round 11 does not assume every included object becomes public/premium/identically gated.
- Issue Discussion（本期讨论）, Reader Notes（读者札记） and Community responses remain linked social objects rather than canonical Issue contents by default.
- Editorial curation of a community response does not make it canonical/source-authoritative.
- Published Issue identity remains durable for citation/archive/analytics even when later corrections or visibility changes occur.
- Removing an object from an Issue does not delete the underlying object.
- Canonical Issue version identity is resolved independently from per-reader access filtering; access may redact/gate content without fabricating hidden phantom versions.
- Membership/access/delivery policies layer over stable Issue/version ontology rather than retroactively redefining historical identity.

---

# 6. Editorial workflow & acquisition / 编辑工作流与内容获取

Controlling range: **R11-B1…B29 + B51…B59**.

Core separation:

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

Key controls:

- Editorial consideration is workflow context, not a new public content identity.
- Submission/commission/case records may need stable identity across revisions and decisions.
- Workflow states carry business meaning; exact vocabulary remains evolvable Workflow / Configuration（工作流 / 配置）.
- Conditional acceptance is not final publication.
- Final editorial selection and Issue placement/inclusion remain separable.
- Non-selection does not create a negative platform judgment by default.
- Editorial acquisition is multi-route: existing public works, contributor submission, open call, commission, reader letter/question, archive/canonical selection, institutional/partner collaboration and future legitimate routes.
- Existing public platform Works may be curated without forced resubmission while preserving authorship/provenance/rights.
- Contributor status may create stronger editorial channels, not guaranteed outcomes.
- Open Calls（公开征稿） are optional per Issue.
- Commissioning is a first-class acquisition route but not publication itself.
- Reader questions/letters and partner/institution collaboration may use distinct editorial routes.
- Private unpublished submissions are non-public by default.
- Submission may target one Issue or general consideration; receiving a submission does not create publication entitlement.
- Withdrawal is distinct from deletion.
- Submission revisions require version-aware decision attribution.
- Commission brief and final Work are separate; payment/commercial terms do not create editorial standing or Recognition.
- Commission does not transfer authorship by default and does not automatically make a Work an official platform viewpoint.
- Co-authorship, translation, editing, illustration and other materially distinct roles remain attributable.
- Consequential editorial decisions bind to the revision actually evaluated.
- Withdrawal/cancellation invalidates obsolete pending-publication states.
- Private editorial material is purpose-limited.
- Temporary editorial access is scoped/revocable.
- Material conflicts of interest require an executable handling path.
- Consequential transitions need stale/concurrency protection.
- Author-facing communication must not automatically reveal internal confidential material.
- Editorial evaluation is not a hidden Account Trust / Recommendation score.
- Publication readiness can be invalidated by material rights/privacy/lifecycle changes.

---

# 7. Editorial evaluation & governance boundaries / 编辑评估与治理边界

Controlling range: **R11-B30…B50 + related E/CW rules**.

- Editorial selection is multi-dimensional and may consider theme fit, narrative role, quality, originality, provenance/source fitness, rights, timing, audience value, format balance, duplication and representation of perspectives.
- No universal editorial-quality scalar is architecture truth.
- Popularity and Work Recognition may inform discovery/context but do not command selection.
- Editorial criteria may differ by Issue/content class and remain governed/evolvable.
- Selection should preserve applicable Decision Provenance（决策溯源） without requiring every internal deliberation to be public.
- Material editorial conflicts, rights/privacy conditions and version changes may trigger reassessment.
- Editorial approval does not substitute for rights, legal, privacy, source/provenance or publication-readiness checks.
- Editorial judgment must not be converted into one global user/content caste or trust ladder.

---

# 8. Publication lifecycle, versioning & archive / 发布生命周期、版本与归档

Controlling range: **R11-C1…C24 + C49…C54 + user P11-1/P11-2**.

Core lifecycle semantics:

- Issue lifecycle states such as draft, scheduled, published, suspended, withdrawn, archived or another governed state must retain distinct business meaning where used.
- Archive（归档） != Delete（删除）.
- Issue lifecycle does not overwrite underlying Work lifecycle.
- Published Issue uses a stable version lineage; version label/display is not the sole durable identity.
- Material amendments are version/history events, not silent overwrites.
- Minor vs material classification is governed/evolvable and cannot be abused to hide consequential change.
- Rights/privacy/legal restriction may suppress historical material without requiring erasure of permissible version/provenance history.
- Rollback / restore itself becomes a new history event; it does not delete intervening events.
- Stable links should degrade to safe tombstone/history states where lawful/appropriate rather than unexplained disappearance.
- Material derived representations—Search（搜索）, Recommendation（推荐）, cache/CDN（缓存 / 内容分发网络）, preview, share card, feed/export—must be version-aware and invalidatable.
- Publication/amendment effective time requires stable temporal semantics.
- Canonical Issue page defaults to Latest-valid-first（默认最新有效版本） while preserving material amendment/history context.
- Historical snapshots may remain addressable for citation/archive where policy permits.

---

# 9. Underlying Work drift, corrections & discussion history / 底层作品漂移、勘误与讨论历史

Controlling range: **R11-C19…C56 + CW5**.

- A published Issue must not silently track every later mutation of an underlying Work; historical curation must preserve the relevant included version/state where material.
- Adopting a newer underlying Work revision into an Issue is an explicit editorial/version decision where material.
- Underlying Work correction does not automatically mean the Issue itself has been corrected unless the Issue representation changes accordingly.
- Issue-local excerpts/summaries must not become unauthorized duplicate full-text copies.
- Correction types remain semantically distinguishable: typo/copy fix, factual/source correction, rights-driven change, attribution change, editorial amendment, withdrawal and other governed causes.
- Material correction retains applicable authorizer, reason and effective-time context.
- Significant corrections remain discoverable rather than silently editing history.
- Correction count does not automatically reduce Account Trust or create moderation sanctions.
- Rights-driven removal is not mislabeled as author factual error.
- Withdrawal is not database hard-delete.
- Public tombstone/correction explanations must not leak confidential legal/privacy details.
- Archive preserves Issue identity while respecting underlying content access rules.
- Archived does not inherently mean irrelevant/obsolete in Search or Recommendation.
- Discussion/citations may retain version context so old comments do not appear to discuss text that did not exist at the time.
- A correction may trigger dependent-system reevaluation without dictating Recognition, trust, moderation or recommendation outcome.
- Editorial amendment history remains distinct from rights/access/privacy visibility history.

---

# 10. Composition, sections & canonical order / 编排、栏目与正式顺序

Controlling range: **R11-D1…D16 + D41…D52**.

- Canonical Issue composition belongs to a specific Issue Version / Snapshot（议题版本 / 快照）.
- Placement is a relation, not a cloned Work.
- Mixed object classes may coexist while preserving original class.
- Placement roles and section labels are Issue-local editorial semantics unless separately modeled as durable knowledge taxonomy.
- Editorial order may carry narrative/source/context meaning.
- Same Work can appear in multiple Issues without cloning identity.
- Duplicate placement inside one Issue must be intentional, not data duplication.
- Section structure is configurable; fixed eight-item magazine structure and core-character convention are not platform invariants.
- Table of Contents（目录） derives from the applicable canonical snapshot rather than becoming parallel manual truth.
- Published canonical order is stable within a snapshot; recommendation/personalization cannot silently reorder it while presenting the result as the same publication.
- Reader navigation preferences may alter traversal, not canonical order.
- Material reorder after publication follows amendment/version semantics.
- Consequential placement/relation needs stable identity where citations, analytics, discussion or history depend on it.
- Canonical Issue contents and supplemental/personalized modules must remain structurally distinguishable.
- Reader access filtering cannot silently renumber/reidentify canonical placements.
- Derived TOC/navigation/renderings must be version-aware and invalidatable.

---

# 11. Editorial framing, cover/media & rendering / 编辑语境、封面媒体与渲染

Controlling range: **R11-D17…D40 + D hardening**.

- Editor's Note（编者按） and substantive editorial framing are attributable editorial material, not invisible metadata when they make claims/interpretations.
- Bridges, captions, intros and summaries remain distinguishable from underlying author text and canonical source text.
- Editorial framing may interpret but cannot impersonate source quotation/translation or author wording.
- Editorial selection, lead/hero/cover prominence and visual size do not manufacture truth, Work Recognition, Reviewer Trust or governance weight.
- Distinct creative roles—author, translator, editor, illustrator, photographer, researcher—remain attributable where relevant.
- Theme fit does not permanently classify a Work.
- Cover/hero media is Issue-level editorial media with independent rights/provenance treatment.
- Depiction does not equal endorsement/authority.
- Accessibility metadata belongs to the rendered experience and does not overwrite canonical title/content.
- Interface localization does not automatically authorize translation of included Works.
- Restricted placements may degrade to bounded placeholders without leaking protected content.
- Personalized recommendations, discussion and future commercial modules are supplemental, not canonical Issue contents.
- Previews/summaries remain rights/access bounded.
- Web/mobile/future print/PDF/EPUB/accessibility renderings are projections of the same Issue version unless substantive content/composition differs materially.
- Pure rendering changes need not create editorial versions; material composition/framing/media changes may.
- Machine-generated framing cannot silently become source fact; generated provenance must remain preservable where material.

---

# 12. Editorial planning, accountability & publication operations / 编辑规划、问责与发布运营

Controlling range: **R11-E1…E33 + E49…E56**.

- Editorial Plan（编辑计划） is internal operational context, not public content.
- Plan, Issue Draft and Published Snapshot are distinct.
- Pre-publication planning can change without fabricating public revision history.
- Material goals/constraints/dependencies should be attributable where they control readiness.
- Publication readiness is multi-dimensional, version/state-bound and invalidatable—not one permanent boolean.
- Publication cadence remains policy/configuration.
- Consequential editorial actions require attributable Actor / Acting Context（行动主体 / 行动身份上下文）.
- Operational responsibility != authorship.
- Decision ownership and task execution are distinguishable.
- Delegation is scoped; temporary access is revocable.
- Conflict handling applies to operational decisions; solo-editor/small-team operation remains supported.
- Automation cannot become an unaccountable editorial principal.
- Work queues are operational views, not merit/trust scores.
- Deadlines/reminders/SLAs（服务时限） are configurable.
- Consequential transitions need stale-state protection.
- Operational blockers preserve meaningful reason categories where material.
- Dependency invalidation propagates to downstream readiness.
- Cancellation/withdrawal invalidates obsolete downstream actions.
- Final publication requires a current-state readiness check.
- Publication creates the accountable snapshot boundary.
- Emergency hold is distinct from ordinary editorial delay and can propagate to relevant downstream delivery artifacts/jobs.
- Quality-control checklists are context-specific/evolvable.
- Source/provenance review rigor is proportional to claim/content type.
- Rights, privacy, legal and factual/source checks remain separate.
- Fact-check status is not universal truth certification.
- AI-assisted editorial review remains assistive and attributable.
- Internal editorial notes are distinct from public corrections.
- Quotes/translations/source excerpts/visual assets retain relevant source/version context.
- Unpublished planning/candidate material does not automatically enter Search, Recommendation, Interest Graph, public trend or public relationship systems.
- Operational responsibility handoff is explicit and does not preserve obsolete authority.
- Consequential operational provenance remains append-preserving where auditability matters.
- Templates/defaults/workflow configuration cannot retroactively rewrite prior Issue history.
- Pre-publication fixes are distinct from post-publication corrections.

---

# 13. Measurement & editorial-value boundaries / 测量与编辑价值边界

Controlling range: **R11-E34…E48 + E53 + CW3/CW4**.

- No universal Editorial Quality Score（编辑质量分）.
- Issue performance is multi-dimensional; possible dimensions include reach, qualified reading, completion/continuation, saves, meaningful discussion, satisfaction, return behavior, archive value, exploration/discovery contribution, membership/business outcomes and Issue-specific goals.
- Engagement != editorial merit.
- Exposure context is needed to interpret performance.
- Cross-Issue comparison respects different formats/objectives.
- Fresh-release performance and long-term archive/evergreen value are different time-horizon questions.
- Commercial conversion remains separate from editorial merit.
- Measurement may inform future planning without becoming automatic authority/Recognition.
- Material analysis is version-aware.
- Workflow automation remains observable/reversible where consequential.
- KPI（关键绩效指标） definitions and operational incentives are governed/evolvable; anti-Goodhart safeguards prevent metrics from becoming editorial truth.
- Repeated curation of the same Work is not repeated independent Recognition evidence.
- Issue-level aggregate performance must not automatically be attributed to every included Work/author; object-level attribution requires valid exposure/placement/version context where material.
- Operational data remains purpose-limited/minimized and does not automatically feed public reputation, Interest Graph, Recommendation or model training.
- No implementation stack is mandated.

---

# 14. Rule Evolvability（规则可演进性） classification

Round 11 must preserve:

### Core Invariants（核心不变量）

- Issue identity is distinct from underlying Work identity.
- Inclusion is a relation; authorship/provenance survive curation.
- Issue Inclusion != Work Recognition.
- planning != publication.
- responsibility != authorship.
- editorial selection/visual prominence/engagement/payment do not manufacture truth/authority/trust.
- published material history is not silently rewritten.
- rights/privacy/access changes cannot erase permissible provenance or bypass restrictions.
- canonical composition remains distinct from personalized/supplemental/commercial layers.

### Policy / Configuration（策略 / 配置）

- section templates and names;
- issue length/cadence;
- selection criteria;
- readiness checklists;
- approval/conflict procedures;
- minor/material thresholds;
- deadlines/reminders;
- KPI definitions;
- operational AI enablement policy;
- future access/distribution settings.

### Workflow（工作流）

- submission/commission/selection/production;
- publication readiness;
- schedule/publish/hold/withdraw/archive;
- amendment/correction;
- rights/privacy invalidation;
- responsibility handoff.

### Algorithm（算法）

Optional candidate suggestions, prioritization, anomaly detection, measurement, AI assistance or layout assistance may exist, but they cannot silently become authority or overwrite the domain semantics above.

### Data（数据）

Issue, Issue Version, Curation Relation / Placement, Submission, Commission, Editorial Plan, included-object version context, editorial framing, rights/access state, decision provenance, derived renderings and version-aware measurement remain distinguishable concepts where material.

---

# 15. Explicitly deferred / 明确延后

Round 11 does not lock:

- exact visual Issue design, typography, cover template, component system or responsive layout;
- exact section count or article count;
- exact publication schedule;
- exact staffing/committee topology;
- exact submission response SLA（服务时限）;
- exact compensation/contracts;
- exact CMS（内容管理系统）, analytics, database, workflow engine or AI provider;
- exact KPI targets;
- exact retention periods;
- exact archive/membership entitlement;
- full Notifications / Delivery（通知 / 投递） product;
- paid/sponsored/commerce placement product;
- final Services / Monetization（服务 / 商业化） policy;
- final Governance / Moderation / Corrections（治理 / 审核 / 更正） process beyond Issue-specific history boundaries;
- final citation/version-selector/correction UI;
- Investor Demo V1（投资人演示 V1） scope.

These deferrals are deliberate scope boundaries, not missing architecture.

---

# 16. Current Round 11 status / 第十一轮当前状态

- Workshop A: PASS AFTER HARDENING（加固后通过）.
- Workshop B: PASS AFTER HARDENING（加固后通过）.
- Workshop C: PASS AFTER HARDENING（加固后通过）; user chose Latest-valid-first（默认最新有效版本）.
- Workshop D: PASS AFTER HARDENING（加固后通过）.
- Workshop E: PASS AFTER HARDENING（加固后通过）.
- Cross-Workshop Consistency & Completeness Audit（跨工作坊一致性与完整性审计）: PASS AFTER HARDENING（加固后通过）.
- Controlling inventory: **273 / 273 rule slots consolidated**.
- Unresolved material product blockers: **0**.
- Implementation authorization: **NO**.

Next validation chain:

```text
Source Parity Pass（来源完整性检查）
→ Full Adversarial Audit（整轮对抗性审计）
→ Seal Record（封存记录）
```
