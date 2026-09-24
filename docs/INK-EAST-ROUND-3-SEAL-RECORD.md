> ⚠️ **HISTORICAL ROUND SEAL WITH LATER CROSS-ROUND AMENDMENTS（历史轮次封存 / 存在后续跨轮修正）**  
> Round 3 remains sealed in its surviving Recognition（作品认可） semantics, but later A1–A47 / F1–F10 corrections and later Current Truth（当前有效真相） supersede conflicting terminology, board assumptions, privacy/governance details and distribution interpretations. Read `PROJECT-3-SUPERSEDED-DIRECTION-REGISTRY-V1.md` before using this record alone.

# Ink & East Product Architecture V1 — Round 3 Seal Record

> Status: **ROUND 3 SEALED — PRODUCT ARCHITECTURE ONLY**
> Implementation authorization: **NO**
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This record closes the Round 3 Recognition / Reviewer Governance workshop at the product-architecture level after the final lifecycle audit.

It must be read after:

- `docs/INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md`;
- the later Round 3 decision comments in PR #53.

Where the consolidation document still says `CONSOLIDATED / NOT YET SEALED` or lists `R3-C1`, `R3-C2`, or `R3-C3` as open, **this seal record and the later PR #53 decisions supersede those stale status markers only**. The rest of the consolidation remains the canonical Round 3 architecture unless later explicitly amended.

---

## 1. Final seal audit result

The three lifecycle gaps identified by the consolidation audit are now resolved. A second structural audit found **no remaining contradiction that prevents the Round 3 state machine from being considered closed at architecture level**.

The final architecture remains coherent on these separations:

- work state vs workflow/case state;
- popularity vs formal nomination evidence vs Recognition;
- author identity vs work-level Recognition;
- canonical/source authority vs socially earned work Recognition;
- Account Trust vs Reviewer Trust;
- semi-blind pre-Candidate nomination vs provenance-rich Candidate Review;
- clear-case rule-driven Recognition vs exception Human Governance;
- ordinary revision vs Delta Review vs replacement-level new-work reset;
- reviewer/capability enforcement vs contaminated-evidence repair of affected works.

Round 3 is therefore **SEALED**, while concrete thresholds, formulas, UI and implementation remain intentionally deferred.

---

## 2. R3-C1 resolved — Candidate negative-outcome lifecycle

When sufficient valid Candidate Review evidence produces `Not Recognized`:

1. the current Candidate lifecycle ends;
2. the work returns to ordinary `Normal` distribution;
3. `Not Recognized` is not a permanent negative badge on ordinary content surfaces;
4. the Recognition/review history remains auditable;
5. future re-entry is allowed only when there is a reasonable re-entry basis (meaningful revision, new evidence, materially changed context, stale prior basis, changed applicable mechanism, or another defensible reason);
6. re-entry normally returns through `Formal Nomination` rather than silently restoring Candidate status;
7. no universal fixed cooldown or fixed percentage-change rule is locked — re-entry is context-aware and anti-spam constrained;
8. if the prior negative outcome was caused by contaminated evidence or platform governance error, use Evidence Reversal / state repair instead of forcing a new nomination cycle.

Canonical distinction:

`Not Recognized = enough evidence exists, and the current answer is no.`

---

## 3. R3-C2 resolved — Evidence-insufficient lifecycle

`Evidence Insufficient` is not failure.

A Candidate must not remain forever in the active Candidate Review Surface merely because enough qualified evidence cannot be obtained.

After reasonable, context-aware attempts to obtain independent valid review evidence, the system may close/pause the active review while:

- returning the work to ordinary `Normal` presentation;
- retaining a dormant/re-activatable Recognition Case as workflow history, **not** as a new content tier or prestige pool.

When conditions later improve, the same legitimate Candidate case may be reactivated and resume Candidate Review **without repeating Formal Nomination**, because the work already earned Candidate status in that lifecycle.

Existing review evidence is preserved where still valid, but its continuing force is re-evaluated according to version change, content type, time sensitivity, new evidence and context. There is no global rule such as `180 days -> all evidence expires`.

Possible reactivation triggers include platform exploration, improved Reviewer supply, Topic/environment changes, author request, or editor/platform discovery. Anti-spam/resource controls remain required.

Pause/reactivation decisions should consider evidence sufficiency, reviewer supply, information gain, content timeliness and governance-resource cost rather than one universal Candidate deadline.

Canonical distinction:

- `Not Recognized` = a substantive negative conclusion;
- `Evidence Insufficient` = no responsible conclusion yet;
- `Revision Required` = the work remains in the Candidate lifecycle but needs correctable changes before continuing.

---

## 4. R3-C3 resolved — Recognized same-work revision / revalidation

Recognition is **version-aware**.

For a substantive revision that is still substantially the same work:

1. the work does not restart Formal Nomination;
2. it enters `Delta Review / revalidation` directly;
3. `Revalidation Pending` may exist as a workflow flag, not a new quality tier;
4. current Recognition presentation is impact-sensitive:
   - additive/clarifying changes that do not undermine the prior critical evidence basis may retain Recognition provisionally with a visible pending-revalidation signal;
   - changes touching critical facts, core claims, authenticity, sources/provenance, timeliness, or other Recognition-critical dimensions must not inherit Recognition unconditionally; relevant current-version Recognition presentation/distribution may be suspended until affected dimensions are revalidated;
5. historical Recognition of prior versions remains visible in the audit/version record and is never silently erased;
6. there is no fixed percentage-of-text-changed rule; the decision turns on whether the revision undermines the evidence basis of the prior Recognition, and must remain explainable/auditable/appealable.

Replacement-level rewrite remains governed by the previously locked new-work rule:

`Normal -> Eligibility -> Formal Nomination -> Candidate -> Structured Review -> Recognized`

Canonical principle:

> A past version's Recognition remains valid historical evidence, but it cannot automatically endorse materially changed claims in a later version.

---

## 5. Final state-machine interpretation

The public quality states remain intentionally small:

```text
Normal
  -> Candidate
      -> Recognized
```

Workflow/case conditions do not create extra prestige tiers:

- Nomination Eligible;
- Nomination Exposure;
- Evidence Insufficient;
- Dormant / paused Recognition Case;
- Revision Required;
- Revalidation Pending;
- Governance Review;
- Capability Restricted/Suspended.

This distinction prevents state proliferation while preserving a complete lifecycle.

---

## 6. Deferred items that do NOT block the Round 3 seal

The following remain deliberately uncommitted because they require real data, later governance work, content-type calibration, or implementation design:

- exact Nomination sample size and support ratio;
- Candidate evidence-sufficiency thresholds;
- exact content-type rubric fields and critical-dimension thresholds;
- exact exploration/exposure allocation and request cooldowns;
- anti-coordination / anomaly detection internals;
- Reviewer Quality model coefficients or ML implementation;
- exact public aggregation/privacy thresholds;
- material Reviewer incentive implementation;
- restorative distribution/compensation formula after platform error;
- final public names for Candidate Review and the Recognition Board;
- detailed content-outcome appeal and author-withdrawal mechanics;
- exact UI/UX and notification copy.

These are not allowed to silently contradict the locked Round 3 invariants when designed later.

---

## 7. Round 3 implementation boundary

**Nothing in Round 3 authorizes implementation yet.**

Do not build Recognition, Reviewer Trust, Candidate Review, nomination, or governance code merely because Round 3 is sealed. The wider Product Architecture V1 workshop is still in progress, PR #53 remains Draft, and implementation requires a separate explicit authorization after the relevant platform rounds are coherent.

---

## 8. Next workshop round

Proceed to the next architecture subject:

**Round 4 — Contributor / Identity Recognition System**

The next round must preserve the core separation already locked by Round 3:

> contributor identity can affect identity verification, publishing tools, contributor distribution and profile context, but it must not automatically confer work-level Recognition.
