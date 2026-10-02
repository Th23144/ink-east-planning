# Round 11 Workshop E — Hardening Addendum（第十一轮工作坊 E 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-E.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop E Adversarial Audit（工作坊 E 对抗性审计）.

---

## R11-E49 — Internal planning material must not leak into public discovery or personalization / 内部规划材料不得泄漏到公开发现或个性化系统

**NEW SAFEGUARD（新增保护） / HARD PURPOSE-LIMITATION REQUIREMENT（用途限制硬要求）.**

Unpublished Editorial Plan（编辑计划）, candidate topic, candidate author, private assignment, draft commissioning concept or other internal planning material must not automatically become:

- Search（搜索） inventory;
- Recommendation（推荐） candidates/signals;
- Interest Graph（兴趣图谱） edges;
- public analytics;
- public trend signals;
- user-facing relationship facts.

A later deliberate public announcement or publication may create new public objects/signals under its own provenance; the private plan itself does not silently become public product data.

---

## R11-E50 — AI / automation-generated editorial material must preserve generated provenance where material / AI 或自动化生成的编辑材料在重要情况下必须保留生成溯源

**HARD PROVENANCE SAFEGUARD（溯源硬保护）.**

When AI（人工智能） or another automation system generates a summary, caption, suggested title, section description, translation aid, source-comparison note or other material that later enters a consequential editorial workflow, the architecture must allow the generated origin to remain distinguishable from:

- author-supplied text;
- canonical/source text;
- human editorial writing;
- verified source metadata.

Human review may approve or transform generated material, but approval must not require falsifying its origin where provenance matters.

Exact public labeling policy is deferred; the architectural capability to preserve provenance is not.

---

## R11-E51 — Operational responsibility handoff must be explicit and must not preserve obsolete authority / 运营责任移交必须明确，且不能遗留过时权限

**HARD ACCOUNTABILITY / PERMISSION SAFEGUARD（问责 / 权限硬保护）.**

When an active editor, contractor or collaborator leaves, becomes unavailable, changes role or transfers a task, the system must support explicit reassignment/handoff of operational responsibility where continuity matters.

The handoff must not imply:

- transfer of authorship;
- transfer of Organization（机构） control;
- automatic inheritance of unrelated permissions;
- permanent retention of access by the former operator.

Where applicable, obsolete task-scoped access should be revoked or reduced as part of the lifecycle transition.

---

## R11-E52 — Material publication holds must propagate to relevant downstream delivery / 重要发布暂停必须传播到相关下游投递

**HARD INVALIDATION SAFEGUARD（失效硬保护）.**

A material legal, rights, privacy, security or integrity hold that prevents publication must be able to invalidate or stop applicable downstream release artifacts/jobs, including where relevant:

- scheduled publication;
- static/pre-rendered pages;
- public previews;
- feeds/exports;
- social/share cards;
- queued email/newsletter or other future delivery jobs;
- recommendation/search publication state.

This rule does **not** define the full Notifications / Delivery（通知 / 投递） architecture, which remains deferred. It only prevents a publication hold from being defeated by already-queued downstream delivery.

---

## R11-E53 — KPI definitions and operational incentives require governance; metrics cannot become editorial truth / KPI 定义与运营激励必须受治理，指标不能变成编辑真理

**HARD MEASUREMENT / ANTI-GOODHART SAFEGUARD（测量 / 反古德哈特硬保护）.**

Important KPI（关键绩效指标）, success criteria, target definitions and operational incentives should be treated as evolvable Policy / Configuration（策略 / 配置）, not timeless truth.

The architecture must avoid loops such as:

```text
metric is chosen for convenience
→ editorial behavior optimizes the metric
→ the optimized metric is interpreted as proof of editorial quality
→ recommendation/distribution further amplifies the same behavior
```

Metric changes should be distinguishable enough to explain historical comparisons where material. No metric may automatically manufacture Work Recognition（作品认可）, authority, Account Trust（账户信任） or source reliability.

---

## R11-E54 — Consequential operational provenance must be append-preserving where auditability matters / 重要运营决策溯源在需要审计时必须保持追加式历史

**HARD AUDIT SAFEGUARD（审计硬保护）.**

For material operational/editorial decisions, the architecture must be able to preserve applicable context such as:

- Actor / Acting Context（行动主体 / 行动身份上下文）;
- decision/effective time;
- relevant object/version;
- applicable Policy / Rule Version（策略 / 规则版本） where consequential;
- material reason/evidence category;
- subsequent override/reversal event.

A later correction, reassignment or override must not silently edit the old record to make it appear that the earlier event never occurred.

This does not require immutable logging of every low-value click or draft keystroke.

---

## R11-E55 — Templates, defaults and workflow configuration must not retroactively rewrite prior Issue history / 模板、默认值与工作流配置不能追溯改写既往议题历史

**HARD RULE-EVOLVABILITY SAFEGUARD（规则可演进硬保护）.**

Planning templates, checklist defaults, section suggestions, readiness requirements and operational defaults may evolve over time.

Changing them must not retroactively mutate:

- a prior published Issue snapshot;
- the historical meaning of an earlier decision;
- an earlier plan/case merely because it was created from an old template;
- historical KPI definitions without preserving comparison context where material.

A template is a reusable starting configuration, not the identity of every object created from it.

---

## R11-E56 — Pre-publication corrections and post-publication corrections are different historical events / 发布前修正与发布后勘误是不同历史事件

**HARD HISTORY SEMANTICS（历史语义硬保护）.**

Before a public Issue version becomes effective, ordinary draft correction, proofreading, fact-check response and layout adjustment remain part of pre-publication editorial production unless another product rule explicitly makes them public.

After a published snapshot becomes effective, a material correction/amendment follows Workshop C（工作坊 C） version/history semantics.

Therefore:

```text
pre-publication fix
!=
post-publication correction / amendment
```

This prevents public correction history from being polluted by normal draft editing while preserving accountability for consequential published changes.

---

## Effect on Workshop E / 对工作坊 E 的影响

- R11-E1…R11-E48 remain valid as proposed.
- R11-E49…R11-E56 are controlling hardening rules for future Round 11 consolidation.
- Workshop E is **PASS AFTER HARDENING（加固后通过）**.
- Workshop E has **zero unresolved material blockers（0 个未解决重大阻塞）**.
- No new product fork requires user confirmation.
- No exact KPI target, cadence, editor count, approval topology, AI vendor, CMS（内容管理系统） or delivery platform is introduced.
- Round 11 is ready for Cross-Workshop Consistency & Completeness Audit（跨工作坊一致性与完整性审计）.
