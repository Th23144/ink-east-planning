# Project 3 — Platform Rule Evolvability & Change Architecture V1

# Project 3 — 平台规则可演进与变更架构 V1

Status: **FOUNDATIONAL WORKSHOP / USER-APPROVED DIRECTION / NOT YET SEALED**  
Scope: project-wide business-rule, policy, workflow, configuration, migration and change-management architecture.  
Implementation authorization: **NO**.

This architecture is inserted before deeper Round 8 work because Project 3 must remain safely changeable after launch and at much larger scale. It is not a Round 8 community rule set; it is a horizontal platform constraint that later modules must obey.

Standing principle:

> **Stable core, evolvable rules, explainable history, controlled change.**  
> **核心稳定，规则可演进，历史可解释，变更可控制。**

The goal is not to build one universal rule engine. The goal is to prevent business logic from becoming irreversibly hard-coded across code, database fields, UI, jobs, search, recommendation, permissions and operational workflows.

---

## 1. Required separation of change classes / 必须区分不同变化层级

### E1 — Core Domain Model（核心领域模型） and Policy（策略） are different layers

**Rule class: HARD INVARIANT / 硬边界.**

Stable domain identities and relationships such as Account（账户）, Organization（组织）, Work（作品）, Order（订单）, Permission（权限）, Claim（主张） and other durable objects must not be redesigned every time a business policy changes.

Policy may decide how those objects are treated in a context; Policy must not silently redefine their identity.

### E2 — Policy（策略）, Configuration（配置）, Workflow（工作流）, Algorithm（算法） and Data（数据） must remain distinguishable

**Rule class: HARD INVARIANT / 硬边界.**

A tunable threshold is not the same thing as a policy. A workflow state machine is not the same thing as a recommendation algorithm. Stored data is not the rule that produced it.

The architecture must preserve these distinctions so each category can evolve at its own speed.

### E3 — Business rules must not be hidden inside presentation code / 业务规则不得藏在展示层

**Rule class: HARD INVARIANT / 硬边界.**

A UI component（界面组件）, page route（页面路由） or visual state must not become the authoritative source of permission, eligibility, pricing, moderation, publication, membership or other consequential business decisions.

---

## 2. Rule identity and versioning / 规则身份与版本管理

### E4 — Material rules require stable Rule Identity（规则身份） and Rule Version（规则版本）

**Rule class: HARD INVARIANT / 硬边界.**

Consequential rules should be identifiable independently from the code file that implements them. Material semantic changes create a new version or explicit amendment rather than silently rewriting history.

### E5 — Effective Dating（生效时间） must be representable

**Rule class: HARD INVARIANT for material rules / 重要规则的硬边界.**

Where consequence matters, the system must be able to distinguish when a rule was approved, when it became effective, when it stopped applying, and when it was superseded or retired.

### E6 — Historical decisions remain explainable / 历史决策必须可解释

**Rule class: HARD INVARIANT / 硬边界.**

For consequential decisions, retain enough Decision Provenance（决策溯源） to explain which relevant rule/policy version, subject/context, inputs and outcome applied at decision time, subject to privacy and retention rules.

A later policy change must not make an old decision impossible to reconstruct.

### E7 — Rule changes are not retroactive by default / 规则默认不追溯生效

**Rule class: HARD INVARIANT with explicit exceptions / 默认硬边界，可显式例外.**

A new rule version normally governs future evaluation. Retroactive re-evaluation, migration or correction must be an explicit, scoped operation with a recorded reason and impact policy rather than an accidental side effect.

---

## 3. Workflow evolution / 工作流演进

### E8 — Workflow Versioning（工作流版本管理） is first-class where needed

**Rule class: HARD INVARIANT for consequential workflows / 重要工作流的硬边界.**

Publication, moderation, membership, verification, organization control, order/payment, rights review and other consequential workflows must be able to evolve without requiring all existing in-flight records to be reinterpreted under the newest workflow automatically.

### E9 — In-flight objects need explicit transition policy / 进行中的对象必须有明确过渡策略

**Rule class: ADAPTIVE RULE / 弹性规则.**

When a workflow changes, each affected object class must define whether existing cases:
- finish under the old version;
- migrate to the new version;
- re-enter evaluation;
- or require manual review.

No single universal migration behavior is assumed.

### E10 — State names express business meaning, not UI appearance / 状态名表达业务含义而非界面样式

**Rule class: HARD INVARIANT / 硬边界.**

Workflow states must remain semantic enough that UI redesign does not redefine business state.

---

## 4. Safe rollout and rollback / 安全发布与回滚

### E11 — Material changes support staged rollout where proportionate / 重大变更应支持分阶段发布

**Rule class: ADAPTIVE RULE / 弹性规则.**

Feature Flags（功能开关）, cohort rollout（分群灰度）, percentage rollout（按比例灰度） or other controlled exposure may be used when risk justifies it. Exact rollout percentages are never universal architecture rules.

### E12 — Shadow Evaluation / Backtesting（影子评估 / 历史回测） should be possible for high-impact rules

**Rule class: ARCHITECTURAL REQUIREMENT, usage adaptive / 架构要求，使用情境弹性.**

Before replacing a high-impact policy or algorithm, the platform should be able to evaluate historical or live inputs against a candidate rule without immediately changing user-facing outcomes, where technically and legally appropriate.

### E13 — Rollback（回滚） must be designed, not improvised

**Rule class: HARD INVARIANT for high-impact changes / 高影响变更的硬边界.**

A high-impact rule/workflow/configuration rollout must define what can be rolled back, what data mutations are irreversible, and what compensating action is required if full rollback is impossible.

### E14 — Emergency Override / Break-glass（紧急覆盖 / 紧急权限） is exceptional and auditable

**Rule class: HARD INVARIANT / 硬边界.**

Emergency overrides must not become a hidden permanent second policy system. Their authority, scope, actor, reason, duration and outcome must be auditable and revocable.

---

## 5. Migration and compatibility / 迁移与兼容

### E15 — Every material rule change has an explicit Migration Strategy（迁移策略）

**Rule class: HARD INVARIANT / 硬边界.**

Possible strategies include no migration, lazy migration, batch migration, recomputation, dual-read/dual-write transition, compatibility adapter or manual review. The choice is domain-specific and must not be accidental.

### E16 — Backward Compatibility（向后兼容） is a product concern, not only an API concern

**Rule class: HARD INVARIANT / 硬边界.**

Old publications, orders, memberships, permissions, rights decisions, citations and other historical objects must remain interpretable after business rules change, unless an explicit legal/security correction requires otherwise.

### E17 — Derived/materialized data must know how it becomes stale / 派生数据必须知道何时失效

**Rule class: HARDENING / 架构加固.**

Caches（缓存）, search indexes（搜索索引）, recommendation features（推荐特征）, eligibility snapshots（资格快照） and other derived data must have a re-evaluation/invalidation strategy when the governing rule or source data changes.

### E18 — External contracts evolve explicitly / 外部契约必须显式演进

**Rule class: HARD INVARIANT / 硬边界.**

Public/internal API（应用程序接口）, event schema（事件结构）, webhook（网络钩子）, export/import format（导入导出格式） and other contracts must not silently change semantics in ways that break consumers. Versioning or compatibility mechanisms should be used where needed.

---

## 6. Change impact and dependency control / 变更影响与依赖控制

### E19 — Dependency Map（依赖关系图） is required at the architectural level

**Rule class: HARD INVARIANT for material cross-module rules / 跨模块重要规则的硬边界.**

The platform must be able to identify which modules, workflows, derived data, permissions, jobs or external contracts materially depend on a consequential rule family.

This need not require a graph database; the requirement is dependency visibility.

### E20 — Material changes require Impact Analysis（影响分析） before activation

**Rule class: HARD INVARIANT / 硬边界.**

A material change should evaluate affected populations/objects, compatibility risks, migration needs, security/privacy consequences, operational load, failure modes and observability before full activation.

### E21 — Cross-module policy reuse does not mean cross-module coupling / 跨模块复用不等于跨模块耦合

**Rule class: HARDENING / 架构加固.**

Shared platform principles may be reused, but one module must not depend on undocumented internal implementation details of another module merely to reuse a rule.

---

## 7. Governance of configuration and rules / 配置与规则治理

### E22 — Configuration is governed capability, not unrestricted admin freedom / 配置修改属于受治理能力

**Rule class: HARD INVARIANT / 硬边界.**

Not every configurable value should be editable by every administrator. Security-, finance-, rights-, moderation-, recommendation- or authority-sensitive settings require scoped permission, provenance and appropriate review.

### E23 — Rule lifecycle is explicit / 规则生命周期必须明确

**Rule class: HARD INVARIANT for material rules / 重要规则的硬边界.**

A material rule may move through states equivalent to Draft（草稿）, Test（测试）, Approved（已批准）, Active（生效）, Deprecated（弃用中）, Retired（已退役） or Emergency-Suspended（紧急暂停） as appropriate. Exact labels may vary by domain.

### E24 — Deprecation（废弃） is not deletion / 废弃不等于删除

**Rule class: HARD INVARIANT / 硬边界.**

Retiring a rule or workflow version must preserve enough historical reference to explain prior outcomes and migrations, subject to lawful deletion/retention obligations.

---

## 8. Avoiding the opposite failure: over-engineering / 防止另一种失败：过度工程化

### E25 — No mandatory universal Rules Engine（通用规则引擎）

**Rule class: HARD INVARIANT against premature centralization / 防止过早集中化的硬边界.**

Project 3 must not force every domain into one generic DSL（领域特定语言）, one giant rules table or one central runtime evaluator merely for architectural purity.

Different domains may use code, configuration, state machines, policy services or specialized evaluators, provided they preserve the change/version/provenance boundaries above.

### E26 — Configurability is selective / 可配置化必须有选择

**Rule class: ADAPTIVE RULE / 弹性规则.**

Only values or decisions with realistic operational change needs should become runtime configuration. Turning every constant into an admin setting creates complexity, accidental authority and testing risk.

### E27 — Core invariants may still live in code / 核心不变量可以保留在代码中

**Rule class: HARD INVARIANT.**

Security, integrity and domain invariants that should not be casually changed may be enforced in code. Evolvability does not mean all logic becomes editable from a dashboard.

---

## 9. Mandatory future-module check / 后续所有模块的强制检查

From this point forward, every major Project 3 product-architecture module must classify important logic into at least these questions before implementation authorization:

1. What is Core Invariant（核心不变量）?
2. What is Policy（策略）?
3. What is Configuration（配置）?
4. What is Workflow（工作流）?
5. What may become Algorithmic（算法化） later?
6. Which decisions require Rule Version（规则版本） and Decision Provenance（决策溯源）?
7. What happens to historical/in-flight objects when the rule changes?
8. What is the Migration（迁移）, Rollout（灰度发布）, Rollback（回滚） and Compatibility（兼容） strategy?
9. Which dependent modules/derived data must be re-evaluated?
10. Who is authorized to change the rule/configuration?

A module is not considered implementation-ready merely because its current business behavior is specified. It must also be safely changeable where change is realistically expected.

---

## 10. Relationship to existing architecture / 与现有架构的关系

This document strengthens, rather than replaces:
- the Function-First / Presentation-Separation（功能优先 / 展示分离） baseline;
- Round 6 Identity / Role / Permission（身份 / 角色 / 权限） authority and audit rules;
- Round 7 Provenance / Versioning / Correction（来源溯源 / 版本 / 纠错） principles;
- the project-wide rule: **precise boundaries, adaptive circumstances / 边界清楚、情境灵活**.

It adds a missing project-wide requirement: **business-rule evolvability itself is now an architecture concern, not a future cleanup task. / 业务规则本身的可演进性，从现在起就是架构问题，而不是以后再清理的问题。**

## 11. Immediate process effect / 立即生效的规划流程影响

Round 8 Community & Discussion（社区与讨论） is not cancelled. Its already-created Workshop A remains useful product truth. However, before deeper Round 8 decisions are treated as implementation-ready, they must be checked against this evolvability architecture.

This document remains **NOT YET SEALED** until its cross-project consistency and adversarial audit are completed. No code implementation is authorized.