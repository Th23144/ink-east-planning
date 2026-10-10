# Round 11 Workshop A — Published Issue Mutability Decision（第十一轮工作坊 A——已发布议题可变性决定）

> **Status:** USER-CONFIRMED PROVISIONAL PRODUCT DIRECTION（用户确认的暂定产品方向）  
> **Scope:** Published Issue（已发布议题）的历史稳定性、修订与后续变更方式  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## Decision / 决定

The user selected **Option B（方案 B） — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）**.

This supersedes the `PENDING USER DECISION（等待用户决定）` state recorded for R11-A37 in `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-A.md`.

The direction remains **PROVISIONAL（暂定）**, not an immutable invariant. Future evidence may justify an explicit architecture amendment, but silent drift into Option A or Option C is not permitted.

---

## Meaning / 产品含义

A published Issue（议题） has a stable publication snapshot / edition context that remains historically interpretable. Later legitimate changes are allowed, but consequential changes must be represented as amendments / versions rather than silently rewriting the original publication context.

Examples of legitimate post-publication change include:

- correction of an error;
- rights-driven image/text substitution or withdrawal;
- correction of broken or misleading metadata;
- explicit editorial note / erratum;
- replacement of a referenced version where policy allows and history remains preserved;
- other material amendment with attributable reason and effective time.

The current reader may see the latest valid representation while archive/citation/history systems retain enough information to explain what earlier readers saw and what later changed.

---

## Controlling safeguards / 控制性保护

This decision inherits Workshop A and its Hardening Addendum（加固补充）, especially:

1. Issue identity is stable and separate from human-readable numbering/title/URL.
2. Issue inclusion is a typed curation relation; it does not clone the underlying work.
3. Material inclusion may preserve the relevant underlying content version/snapshot.
4. Material inclusion/removal and editorial amendments retain proportionate history.
5. Rights/privacy/legal changes may alter visible content without requiring continued display of disallowed material.
6. Historical integrity must not be used as an excuse to violate rights, privacy, access or legal constraints.
7. Issue curation remains separate from Work Recognition（作品认可） and cannot recursively manufacture Recognition evidence.
8. Issue previews/framing cannot bypass object-level access or rights boundaries.
9. Exact version-number format, snapshot storage strategy, archive UX, diff UI and correction display remain DEFERRED CALIBRATION（延后校准） / implementation work.

---

## Effect / 影响

Workshop A now has **no unresolved product-direction blocker**.

Round 11 may proceed to Workshop B（工作坊 B） for Editorial Workflow, Selection & Commissioning（编辑工作流、选稿与约稿）, carrying Option B as the current controlling provisional direction.
