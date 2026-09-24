# Round 11 Workshop B — Hardening Addendum（第十一轮工作坊 B 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-B.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop B Adversarial Audit（工作坊 B 对抗性审计）.

---

## R11-B51 — Editorial decisions bind to the evaluated revision / 编辑决定必须绑定被评估版本

**NEW SAFEGUARD（新增保护） / HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

A consequential acceptance, decline, revision request or publication-readiness decision must be attributable to the specific Submission / Work Revision（投稿 / 作品修订版本） that was actually evaluated.

If the author later changes the manuscript materially, the new revision must not silently inherit the old decision as if it had been reviewed already.

The system may support policies such as “minor edits do not require full re-review,” but the distinction must be explicit and evolvable rather than accidental.

---

## R11-B52 — Withdrawal/cancellation must propagate to pending publication state / 撤回或取消必须传播到待发布状态

**HARD WORKFLOW SAFEGUARD（工作流硬保护）.**

Where an author withdraws a submission, a commission is cancelled, or an editorial case becomes invalid for publication, dependent pending states must be capable of invalidation, including as applicable:

- scheduled publication;
- Issue Inclusion（议题收录） waiting to publish;
- publication-ready state;
- cached/prepared previews;
- downstream editorial tasks that assume the object remains eligible.

Withdrawal does not by itself define legal/privacy deletion, but it must not leave an obsolete “publish me” instruction active.

---

## R11-B53 — Private editorial material is purpose-limited / 私密编辑材料必须遵守用途限制

**HARD PURPOSE-LIMITATION SAFEGUARD（用途限制硬保护）.**

Private submissions, unpublished manuscripts, editorial correspondence, revision notes and internal evaluation material must not automatically be repurposed for unrelated Recommendation（推荐）, Interest Graph（兴趣图谱）, generative-model training, public analytics or other secondary use merely because the platform possesses the data.

Any materially different permitted use requires its own applicable policy/legal/product basis and retention treatment.

This rule does not prohibit proportionate operational/security/audit processing required to run the editorial workflow itself.

---

## R11-B54 — Temporary editorial access must be scoped and revocable / 临时编辑访问必须限定范围且可撤销

**HARD PERMISSION SAFEGUARD（权限硬保护）.**

External editors, translators, fact-checkers, invited specialists or temporary collaborators may receive access required for a specific editorial task, but that access must remain scoped to appropriate Acting Context（行动身份上下文）, object(s), function and lifecycle.

Completion, cancellation, role loss or other relevant status change must be able to revoke or reduce that access.

Access to one unpublished submission does not create broad permission over unrelated editorial material.

---

## R11-B55 — Material conflicts of interest require a usable handling path / 重大利益冲突必须有可执行处理路径

**HARD CONFLICT-OF-INTEREST SAFEGUARD（利益冲突硬保护）.**

Recording a Conflict of Interest（利益冲突） is not sufficient if the conflicted actor can still remain the sole decisive selector without any policy boundary.

The architecture must permit applicable handling such as recusal, reassignment, second review or an explicitly governed exception path according to future policy.

This does not mandate a fixed number of editors or a universal committee. A small/solo-editor operation may use proportionate exception and disclosure processes while preserving the conflict state and decision provenance.

---

## R11-B56 — Consequential state transitions need stale/concurrency protection / 重要状态转换需要防止过期与并发覆盖

**HARD WORKFLOW SAFEGUARD（工作流硬保护）.**

Editorial workflows may involve asynchronous actors and automation. The system must be able to prevent a stale decision from silently overwriting a newer state such as Withdrawn（已撤回）, Cancelled（已取消）, Superseded Revision（已被新版本取代） or Rights Hold（权利暂停）.

This does not mandate a specific database locking mechanism; it requires coherent state-transition semantics and appropriate version/precondition checks.

---

## R11-B57 — Author-facing editorial communication must respect internal privacy / 面向作者的编辑沟通必须保护内部隐私

**HARD PRIVACY / COMMUNICATION SAFEGUARD（隐私 / 沟通硬保护）.**

The platform may communicate acceptance, decline, revision requests or selected reasons to an author, but must not automatically expose:

- another reviewer's/private contributor's identity where not intended;
- third-party personal information;
- confidential conflict disclosures;
- legal/security-sensitive internal notes;
- unrelated editorial deliberation.

Internal Decision Provenance（决策溯源） and author-facing explanation are separate layers.

---

## R11-B58 — Editorial evaluation is not a hidden trust/recommendation score / 编辑评估不能成为隐藏的信任或推荐分

**HARD SEPARATION SAFEGUARD（系统分离硬保护）.**

Editorial workflow data such as rejection count, private reviewer notes, pitch score or internal suitability assessment must not automatically become Account Trust（账户信任）, Work Recognition（作品认可） or Recommendation（推荐） signals.

If a future architecture intentionally uses a clearly defined editorial signal elsewhere, that cross-system use must be separately authorized, purpose-limited, provenance-bearing and auditable rather than silently inherited from the editorial database.

---

## R11-B59 — Publication readiness must be invalidatable by material rights/privacy/lifecycle changes / 重大权利、隐私或生命周期变化必须能使可发布状态失效

**HARD INVALIDATION SAFEGUARD（失效硬保护）.**

An object marked Publication-ready / Scheduled（可发布 / 已排期） cannot be assumed permanently eligible until release.

Material changes such as:

- rights/license withdrawal or expiry;
- privacy/consent change;
- legal hold;
- author withdrawal where applicable;
- lifecycle/moderation state change;
- material revision replacing the accepted version;

must be able to invalidate publication readiness and trigger appropriate re-check before publication/Issue inclusion.

This complements, but does not replace, post-publication amendment/rights rules under Workshop A and the user-confirmed Versioned Issue（版本化议题） direction.

---

## Effect on Workshop B / 对工作坊 B 的影响

- R11-B1…R11-B50 remain valid as proposed.
- R11-B51…R11-B59 are controlling hardening rules for future Round 11 consolidation.
- Workshop B has **zero unresolved material blockers**.
- No fixed editor count, committee topology, response SLA, rejection appeal, retention window, commission rate or implementation stack is introduced.
- Next Round 11 subject: Publication Lifecycle, Versioning, Archive & Corrections（发布生命周期、版本、归档与勘误）.
