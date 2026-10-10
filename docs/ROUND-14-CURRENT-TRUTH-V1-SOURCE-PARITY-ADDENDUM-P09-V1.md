# Round 14 — Current Truth Source Parity Addendum P09 V1
# 第十四轮——统一候选来源一致性补充：P09 多作者认可退出歧义修正

> **Status:** RECHECK PASS / NONSEALED CANDIDATE
> **Earlier full source-parity report:** `ROUND-14-CURRENT-TRUTH-V1-SOURCE-PARITY-REVIEW-V1.md` applies to **older candidate SHA** `8e6ea8a6e899ae6268b25539dbc759cb00c72b6b` and remains historical.
> **Current audited candidate SHA:** `a06c84268d406876c53feba652d2f37ca9375e27`.
> **Product choice:** None introduced. Only a scoped textual clarification from already approved S17 and S20/S21.

## 1. Finding and repair

**P09 — sole author versus joint Work recognized-status opt-out:** Old candidate §6.3 said, after author opts out, stop presenting “the work” as currently author-participating Recognized. Read alone, this could be misunderstood as granting **one coauthor an automatic power to cancel all coauthors' joint Work Recognition**. That conflicts with user-confirmed `ROUND-14-C08-MULTI-AUTHOR-PARTICIPATION-WORK-AUTHORITY-RESOLUTION-V1.md` §1–2.

**Fix to candidate §6.3:** explicitly distinguish (a) single-author Work or an effective Work-level authorization to end corresponding current Recognition presentation, (b) **one coauthor ending own participation without automatically cancelling the whole joint Work**. Require separate examination of lawful Work-level authorization and material rights/evidence changes, as candidate §7 already describes. Preserve valid historical Recognition snapshots. No new unilateral consent/veto rule.

## 2. Recheck of affected controlling sources

| Source | Recheck | Result |
|---|---|---|
| **S17** `ROUND-14-POST-RECOGNITION-AUTHOR-VOLUNTARY-WITHDRAWAL-RESOLUTION-V1.md` | End own current Recognition participation/display appropriately, preserve historical grant and ordinary rights | **PASS** |
| **S20** `ROUND-14-C08-MULTI-AUTHOR-PARTICIPATION-WORK-AUTHORITY-RESOLUTION-V1.md` | Distinguish individual opt-out from authority to change joint Work standing; independently recheck core rights/evidence | **PASS** |
| **S21** `ROUND-14-C08-JOINT-WORK-CANDIDATE-ENTRY-CONSENT-RESOLUTION-V1.md` | Coauthor dissent blocks initial joint Candidate entry, **not** a blanket unilateral permanent post-Recognition veto | **PASS** |
| **Historic versions** | Old source parity report and old candidate blob are preserved; no sealed Round-3/Round-6 files rewritten | **PASS** |

All S17/S20/S21 controlling source SHAs were re-fetched and matched the original appendix A of the candidate. This is a source-parity **scoped recheck of the sole changed clause**, not a new assertion that every historic project source was reread afresh. Remaining 22-source parity conclusions from the earlier report carry forward for unchanged candidate passages; the new P09 clause is separately checked above.

## 3. Gate

**Source-to-candidate parity after P09: PASS at the audited product-architecture principle level, fixed target SHA `a06c84268d406876c53feba652d2f37ca9375e27`.** Next: conduct complete structured frozen adversarial scenario audit *against this exact blob*, not the obsolete target from the previous report. Round 14 is NOT SEALED, PR #53 Draft / Open / Unmerged, no development/merge authorized.
