# Round 11 Workshop A — Hardening Addendum（第十一轮工作坊 A 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-A.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop A Adversarial Audit（工作坊 A 对抗性审计）. It does not resolve the still-open Published Issue mutability（已发布议题可变性） choice on the user's behalf.

---

## R11-A38 — Issue inclusion must preserve version/snapshot semantics where material / 议题收录必须在必要时保留版本 / 快照语义

**NEW SAFEGUARD（新增保护） / HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

When an included object is mutable or versioned, the Issue Curation Relation（议题策展关系） must be able to preserve enough information to explain what editorially relevant version/state was included at publication or amendment time.

The architecture must not assume that a pointer to the object's current state is always sufficient for historical Issue interpretation.

This does not require duplicating every work into the Issue. It requires a durable relation between Issue history and the relevant object/version state where material.

Exact snapshot storage strategy remains implementation work.

---

## R11-A39 — Material inclusion and removal need editorial history / 重要收录与移除需要编辑历史

**HARDENING（架构加固）.**

Material changes to Issue membership, section/order or editorial framing should be capable of retaining proportionate history so old citations, archive views and editorial decisions remain explainable.

This does not mean every drag-and-drop draft edit must be preserved forever. The retention boundary may distinguish draft activity from published / consequential editorial change.

---

## R11-A40 — Editorial selection retains Acting Context and selection origin / 编辑选稿保留行动身份上下文与来源

**HARDENING（架构加固）.**

Consequential Issue selection should be able to preserve the relevant Acting Context（行动身份上下文） and Selection Origin（选稿来源） at a proportionate level.

Examples include editorial staff selection, contributor submission, commission, open call, reader-question selection, institutional collaboration or archival/canonical sourcing.

This supports future conflict-of-interest, audit and explanation workflows without turning editorial identity into Work Recognition（作品认可）.

---

## R11-A41 — Paid / sponsored / commercial inclusion cannot masquerade as ordinary editorial curation / 付费、赞助或商业收录不能伪装成普通编辑策展

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

If a future Services / Monetization（服务 / 商业化） round authorizes paid, sponsored, partner-funded or commerce-linked placement inside an Issue, its commercial origin must remain distinguishable from ordinary editorial selection.

A commercial relationship may not automatically create:

- Issue inclusion entitlement;
- Work Recognition（作品认可）;
- canonical/source authority;
- factual reliability;
- Contributor Qualification（贡献者资格）.

This rule does not authorize commercial Issue placement; it only preserves the semantic firewall if such placement is later designed.

---

## R11-A42 — Rights/privacy/legal change may alter visible Issue content without erasing historical provenance / 权利、隐私或法律变化可以改变议题可见内容，但不能抹去历史溯源

**HARD RIGHTS / HISTORY SAFEGUARD（权利 / 历史硬保护）.**

If an included image, text, source object or other material can no longer legally or appropriately be displayed, the platform must be able to withdraw, substitute, redact or restrict the visible representation according to applicable policy.

Historical integrity does not justify continued display of disallowed material.

Where lawful and appropriate, the system may preserve non-public historical metadata such as the fact that an object had been included, the reason/state of removal, and the applicable version/provenance context.

Exact legal retention and public tombstone treatment remain later policy decisions.

---

## R11-A43 — Issue curation cannot recursively manufacture Work Recognition / 议题策展不能递归制造作品认可

**HARD INVARIANT（硬边界）.**

Issue Inclusion / Editorial Selection（议题收录 / 编辑选择） may be displayed as editorial history and may affect editorial discovery, but it must not be counted as an independent Recognition evidence source merely because the platform itself selected the work.

The architecture must prevent self-reinforcing loops such as:

```text
Platform selects work into Issue
→ Issue inclusion treated as Recognition evidence
→ Recognition increases recommendation / nomination opportunity
→ increased exposure treated as further independent Recognition evidence
```

Editorial curation and Work Recognition remain separate decision systems even when they can observe one another's states.

---

## R11-A44 — Issue preview/framing cannot bypass underlying access or rights boundaries / 议题预览与编辑语境不能绕过底层访问或权利边界

**HARD ACCESS / RIGHTS SAFEGUARD（访问 / 权利硬保护）.**

Issue covers, tables of contents, excerpts, editorial summaries and previews may expose only what the applicable product/rights policy allows.

A restricted or premium underlying object must not become effectively public because an Issue page copied most of its text, images or other protected material into unrestricted curation metadata.

Issue-level discoverability and object-level content access remain distinguishable.

---

## Effect on Workshop A / 对工作坊 A 的影响

- R11-A1…R11-A37 remain valid as proposed.
- R11-A38…R11-A44 are controlling hardening rules for future Round 11 consolidation.
- No fixed issue length, section count, cadence, rights mechanism, membership rule, editorial staffing model or commercial placement model is introduced.
- One product decision remains open: **R11-A37 Published Issue mutability（已发布议题可变性） — Option A / B / C**.
- Current recommendation remains **Option B（方案 B） — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）**.
