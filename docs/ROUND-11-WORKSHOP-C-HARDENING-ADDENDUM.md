# Round 11 Workshop C — Hardening Addendum（第十一轮工作坊 C 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-C.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the Workshop C Adversarial Audit（工作坊 C 对抗性审计）. It does not decide R11-C15 on the user's behalf.

---

## R11-C49 — Minor vs material change classification must be governed / 轻微与实质性修订分类必须受治理

**NEW SAFEGUARD（新增保护） / HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A consequential change must not be hidden by manually labeling it “minor（轻微）”. The architecture must allow materiality classification to be governed by Policy / Workflow（策略 / 工作流） and retain enough Decision Provenance（决策溯源） to explain consequential classification decisions.

Potential material dimensions include changes to factual meaning, cited source/provenance, Issue membership/order where editorial meaning changes, rights-visible material, author attribution or reader-facing publication state.

Exact thresholds remain evolvable policy.

---

## R11-C50 — Rollback / restore creates new history; it does not erase intervening history / 回滚与恢复产生新的历史，不能删除中间历史

**HARD HISTORY SAFEGUARD（历史硬保护）.**

If an Issue is restored to the substance of an earlier version, the restoration itself is a new consequential state/event. The system must not make the intervening amendment, withdrawal, suspension or correction disappear as though it never occurred.

This applies equally to manual rollback and automated recovery.

---

## R11-C51 — Derived representations must be version-aware and invalidatable / 派生表示必须感知版本并可失效

**HARD DERIVED-STATE SAFEGUARD（派生状态硬保护）.**

Material publication-state change must be capable of invalidating or regenerating applicable derived artifacts, including:

- Search index / snippets（搜索索引 / 摘要）;
- Recommendation candidates / cards（推荐候选 / 卡片）;
- cache / CDN / static render（缓存 / 内容分发网络 / 静态渲染）;
- archive previews（归档预览）;
- social/share previews（社交 / 分享预览）;
- feeds / downstream exports（信息流 / 下游导出）;
- other future materialized views（物化视图）.

A rights/legal restriction must not be defeated by an old generated artifact that remains publicly reachable.

---

## R11-C52 — Stable links should degrade to safe tombstone/history states rather than unexplained disappearance where appropriate / 稳定链接在适当情况下应退化为安全墓碑或历史状态，而不是无解释消失

**HARD LINK / HISTORY SAFEGUARD（链接 / 历史硬保护）.**

When a previously published Issue/version becomes withdrawn, restricted or unavailable, the architecture should preserve a stable explanatory route where lawful and appropriate rather than defaulting to a context-free `404`.

The tombstone/history representation must not expose:

- withdrawn/restricted full content;
- private/legal details that should remain confidential;
- membership-protected material;
- rights-restricted images/text.

Public wording and retained metadata remain policy decisions.

---

## R11-C53 — Material analytics/exposure/feedback retain version context / 重要分析、曝光与反馈保留版本上下文

**HARD MEASUREMENT SAFEGUARD（测量硬保护）.**

Where version changes could materially alter interpretation, recommendation or reader behavior, Analytics / Exposure Context / Feedback（分析 / 曝光情境 / 反馈） should be able to retain the relevant Issue/version context.

This prevents:

- V1 engagement being falsely attributed to V3;
- correction effects becoming impossible to evaluate;
- old recommendation performance being judged against text/content users never saw.

This does not require version tags on every low-value telemetry event where no material distinction exists.

---

## R11-C54 — Publication and amendment effective time must have stable temporal semantics / 发布与修订生效时间必须有稳定时间语义

**HARD EFFECTIVE-TIME SAFEGUARD（生效时间硬保护）.**

Scheduled publication, amendment and withdrawal need a stable absolute effective-time meaning. Local timezone display, editor locale and reader locale are presentation concerns and must not change which state was actually effective at a given instant.

Exact storage format and scheduling technology remain implementation decisions.

---

## R11-C55 — Correction can trigger reevaluation without dictating the result / 勘误可以触发重新评估，但不能预设评估结果

**HARD SEPARATION SAFEGUARD（系统分离硬保护）.**

A material correction to source, provenance, factual claims or rights state may legitimately trigger dependent-system reevaluation, such as:

- Work Recognition（作品认可） review;
- recommendation eligibility recalculation;
- search/index refresh;
- rights review;
- editorial follow-up.

But the correction event itself must not automatically mean:

- author is untrustworthy;
- Work Recognition is revoked;
- moderation violation occurred;
- account capability should be reduced.

Those remain separate systems with their own evidence and decision rules.

---

## R11-C56 — Version-sensitive citations and discussions preserve historical context / 版本敏感的引用与讨论保留历史上下文

**HARD CONTEXT SAFEGUARD（上下文硬保护）.**

Where a citation, Reader Note（读者札记）, Discussion（讨论） or editorial reference materially depends on a specific Issue version, the architecture must permit retention of that version context.

Later Issue amendments must not silently make an old comment appear to discuss text, images or ordering that did not exist when the comment was written.

The exact UI for showing “commented on an earlier version（评论针对较早版本）” remains later UX（用户体验） work.

---

## Effect on Workshop C / 对工作坊 C 的影响

- R11-C1…R11-C48 remain valid as proposed.
- R11-C49…R11-C56 are controlling hardening rules for future Round 11 consolidation.
- Workshop C is **PASS AFTER HARDENING（加固后通过）**.
- One product choice remains open: **R11-C15 — current Issue page default representation（议题主页面默认展示版本）**.
- Current recommendation remains **Option B — Latest-valid-first（方案 B——默认最新有效版本）**.
- No exact version label, correction UI, archive entitlement, retention period, CMS（内容管理系统） or storage technology is introduced.
