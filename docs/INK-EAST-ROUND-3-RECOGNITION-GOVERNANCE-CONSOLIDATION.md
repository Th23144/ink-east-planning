# Ink & East Product Architecture V1 — Round 3 Recognition & Governance Consolidation

> Status: **CONSOLIDATED / NOT YET SEALED**
> Scope: product architecture only. **No implementation authorization.**
> Precedence: this document consolidates the accepted Round 3 decisions recorded in PR #53 and supersedes earlier Round 3 hypotheses where they conflict. Historical workshop notes remain useful as decision history, but stale questions/hypotheses must not override this consolidation.

---

## 1. Round 3 purpose

Round 3 defines a reusable platform-level mechanism for discovering, nominating, formally evaluating, recognizing, correcting, and—when necessary—reversing recognition of high-quality works.

The mechanism is **not limited to classical-text scholarship**. It is intended to support multiple content types and future domains such as history/culture, travel/local knowledge, tutorials, essays, and other durable publication classes, with content-type-specific evaluative criteria.

The retained high-quality destination/function remains part of the architecture. `Recognition Board / 高认可内容板块` is only a neutral workshop label; the final public name remains TBD. The rejected name is `权威内容 / Authoritative Content`, because work-level social recognition must not be confused with canonical/source authority.

Canonical classical-text source/edition/provenance authority remains a separate epistemic system.

---

# 2. Canonical invariants — LOCKED

1. **Work-level recognition is separate from author identity.** Ordinary, VIP, Verified Contributor, Institution/Partner, and Editorial works may potentially qualify based on the work itself.
2. **Popularity is not recognition.** Likes, saves, opens, discussion, and follower reach are engagement signals, not automatic admission evidence.
3. **Identity is not recognition.** Verified status, fame, institution, VIP status, or editorial origin does not auto-admit a work.
4. **Canonical/source authority is separate.** Recognition of an interpretive/community work must not overwrite or imitate the provenance authority of canonical source objects.
5. **Recognition is contestable and reversible.** It is a current, auditable work state—not an irrevocable lifetime honor.
6. **The system must be adaptive but bounded.** Use explicit policy guardrails + multi-signal/context-aware reasoning + confidence/evidence sufficiency + anomaly/human fallback. Avoid both rigid threshold-only mechanics and opaque unconstrained AI judgment.
7. **No extra content pools unless they represent a real distinct state.** Avoid architecture inflation caused by naming every gate, exposure program, or reviewer cohort as a separate pool.

---

# 3. Content-state model — LOCKED

The core public recognition states remain deliberately simple:

```text
Normal / 普通公开作品
    ↓
Candidate / 候选作品
    ↓
Recognized / 高认可作品
```

The following are **not new quality tiers/pools**:

- `Nomination Eligible` — eligibility flag/gate on the original publication object.
- `Nomination Exposure` — distribution/program state used to obtain fair formal-nomination opportunities.
- `Evidence Insufficient` — workflow/evidence condition.
- `Revision Required` — workflow state.
- `Governance Review` — exception/controversy workflow state.
- `Suspended/Restricted Reviewer Capability` — user-governance state, not content state.

The same publication object persists through Normal → Candidate → Recognized where continuity is preserved. Candidate is not a duplicated article.

---

# 4. Recognition state machine — LOCKED core flow

```text
Published Work (Normal)
        ↓
Nomination Eligibility satisfied
        │   [flag only; work remains in original surfaces]
        ↓
Formal semi-blind nomination exposure
        │
        ├─ platform exploration / system sampling  [mandatory path exists]
        ├─ author request for nomination exposure
        ├─ qualified-user discovery signal
        └─ editor/platform discovery
        ↓
Formal Nomination judgments
        │
        ├─ Recommend for Candidate
        ├─ Do Not Recommend for Candidate
        └─ Skip / Not suitable for me to judge  [neutral]
        ↓
Sufficient valid, independent nomination evidence
        ↓
Candidate
        ↓
Public Candidate Review Surface
        ↓
Structured Review
        ↓
Final Selection Governance
        │
        ├─ clear case under published rules → Recognized
        ├─ remediable defects → Revision Required → re-review affected evidence
        ├─ unresolved/serious conflict → Governance Review
        ├─ insufficient evidence → remain in Candidate workflow and obtain more valid evidence
        └─ sufficient negative outcome → Not Recognized outcome [re-entry lifecycle still OPEN; see §14]
```

### Critical distinctions

- **Trigger source controls evaluation opportunity.** It does not grant Candidate or Recognition.
- **Formal Nomination asks:** “Is this work worth spending Candidate-review resources on?”
- **Candidate Review asks:** “Does this work actually meet the applicable high-quality standard?”
- Only one true Candidate content set exists: `Candidate Pool` as data/state and `Candidate Review Surface` as its public product view.
- The earlier proposal for a separate public `Nomination Window/Board` is superseded. Fair nomination exposure happens through the original content network/distribution mechanisms rather than a second parallel review board.

---

# 5. Nomination Eligibility & exposure — LOCKED architecture

## 5.1 Reusable framework across content types

There is one reusable Recognition Framework, but **eligibility and evaluability are content-type aware**.

`Minimum Evaluability / 最低可评议性` means the work contains enough substance/information to be judged fairly under its content type. It does **not** impose an academic format or a universal minimum word count.

Examples of type-sensitive value:

- classical/research: source, argument, citation, provenance, interpretation;
- history/culture: factual accuracy, context, sources, argument;
- travel guide: firsthand value, timeliness, place accuracy, actionability, information density;
- pitfall guide: specificity, truthfulness, timeliness, problem-solving value;
- tutorial: executability, accuracy, completeness, reproducibility;
- essay: originality, insight, expression, durability.

A short, high-density travel guide may qualify; shortness alone is not disqualifying.

## 5.2 No universal word-count quality threshold

No global minimum word count is locked as a quality proxy. Real test data may later measure relationships among length, completion, nomination, review outcome, recognized rate, and usefulness, but data must not be converted mechanically into “longer = better.”

## 5.3 Author identity neutral

Author/account class does not determine recognition eligibility once the work is legitimately publishable. Account/identity class may affect publishing permission, tools, distribution, or profile features, but not whether the work is inherently eligible to earn work-level recognition.

## 5.4 Fair exposure is mandatory

Low-traffic work must have a real path to judgment. Platform exploration/system sampling is therefore a required trigger source, not an optional optimization.

Fairness target: **approximately comparable opportunity to receive independent qualified judgment**, not forced participation and not equal raw impression counts.

Interest/topic familiarity may weakly influence work allocation; it must not become a hard domain gate, and cross-topic exploration must remain possible.

---

# 6. Formal Nomination mode — LOCKED

Formal Nomination is a **semi-blind, bias-reduced render/context of the same publication object**, not duplicate content.

Before judgment, hide where feasible:

- author name/identity;
- avatar;
- Verified Contributor badge;
- VIP status;
- institutional/prestige labels not necessary to judge the evidence;
- follower count;
- views/likes/saves/comment count;
- live nomination totals;
- popularity/hot ranking;
- prior editorial promotion/recommendation;
- ordinary comments/other users’ opinions.

Show what is necessary to judge the work:

- title/body;
- Primary Content Type;
- Topic/domain;
- citations/references;
- provenance necessary for authenticity/evidence judgment.

Principle:

> **Preserve provenance; reduce prestige.**

Candidate promotion is not a raw nomination-count rule. It requires enough valid independent judgment evidence and sufficient support; concrete N/ratio thresholds remain intentionally uncommitted pending testing and content-type calibration.

`Skip` is neutral and excluded from the support denominator. Insufficient sample is not failure.

---

# 7. Candidate Review — LOCKED

## 7.1 Public process, serious evaluation

Candidate is publicly observable. Anyone may read according to normal content rules, but consequential structured review requires reviewer eligibility.

Semi-blind rendering ends at Candidate. Formal Candidate Review restores author/source/provenance context required for serious verification.

Identity context can be visible for verification, but **prestige must not become work-quality weighting**.

## 7.2 Structured Review architecture

Formal review uses three layers:

```text
Integrity Gate
+ Shared Quality Core
+ Content-Type Rubric
```

### Integrity Gate

Serious integrity failures cannot be averaged away by strong writing or popularity. Correctable defects may use proportionate remediation rather than automatic permanent rejection.

### Shared Quality Core

Common dimensions may include substance, clarity, original value, reliability where applicable, and reader value. These are not a universal fixed scoring formula.

### Content-Type Rubric

Different Primary Content Types have different critical dimensions and review questions.

Recognition is **not** determined by a simple star rating, percentage, or total-average score.

## 7.3 Reviewer submission model

Formal reviewers submit:

1. structured dimension judgments;
2. concrete issue flags where relevant;
3. final disposition at minimum:
   - Support Recognition;
   - Do Not Support;
   - Revise and Re-review;
   - Unable to Judge / Skip.

`Revise and Re-review` is a first-class path for strong works with remediable defects.

---

# 8. Review transparency & reviewer identity — LOCKED

Before submitting a formal Candidate review, a Reviewer must not see other formal review outcomes, live support ratios, or vote momentum. This reduces conformity/herding.

After submission, aggregate results may be visible. Public Candidate surfaces may expose valid reviewer count, disposition distribution, recurring strengths/problems, and suitable aggregate evidence.

Reviewer identity policy:

- public identity: private by default;
- platform internal attribution: complete and mandatory;
- optional public attribution: Reviewer may voluntarily sign/publish their own review.

Serious allegations such as plagiarism, fabrication, identity fraud, or material undisclosed conflict must enter internal governance verification before being surfaced publicly as an accusation.

---

# 9. Final Selection Governance — LOCKED

## 9.1 Clear cases may auto-transition

A Candidate may become Recognized without mandatory editor sign-off when:

- valid evidence is sufficient;
- no serious unresolved Integrity concern exists;
- applicable critical dimensions pass;
- the content-type-specific criteria are satisfied;
- confidence is high enough under the published governance model.

## 9.2 Human Governance handles exceptions, not every work

Escalation examples:

- severe Integrity concern;
- material reviewer polarization over fact/reliability;
- suspected coordination/manipulation;
- material revision;
- factual/professional dispute;
- anomalous evidence;
- low-confidence or contradictory signals;
- cases automated policy cannot resolve responsibly.

Human override is allowed only for explicit governance reasons. It must preserve the original system result, reason category, decision trail, and suitable public explanation where needed. Editorial taste or disagreement with a viewpoint is not a valid override basis.

## 9.3 Polarization is dimension-sensitive

Strong disagreement alone is not failure.

- viewpoint/interpretation/aesthetic disagreement does not automatically block Recognition;
- disagreement about critical facts, authenticity, Integrity, or core method may block automatic transition and trigger more evidence or Governance Review.

Recognition evaluates work quality—not ideological consensus.

---

# 10. Revision & version-aware evidence — LOCKED

## 10.1 Minor edit

Typos, formatting, punctuation, link repair, and similar non-substantive changes preserve prior evidence.

## 10.2 Targeted substantive revision of the same work

When the underlying work remains substantially the same, unaffected review evidence may remain valid while impacted dimensions are re-reviewed (`Delta Review / 差异复评`).

Compliance correction with unchanged core substance may continue under recorded revision history rather than forcing a full restart.

## 10.3 Replacement-level rewrite / effectively a new work

If the revision is effectively a different work—e.g. core subject, thesis/claim, intended reader task, major factual basis, Primary Content Type, or most evaluative substance has changed such that prior reviewers were no longer judging substantially the same thing—Candidate continuity ends.

The work restarts the recognition path:

```text
Normal → Eligibility → Formal Nomination → Candidate → Structured Review → Recognized
```

Old history remains as lineage/audit (`derived from`, `supersedes`, `major rewrite of`, etc.) but does not count toward the new work’s recognition decision.

This is not decided by a brittle fixed “percentage of words changed” rule. The classifier/decision must be explainable and appealable.

---

# 11. Reviewer / governance-user state machine — LOCKED

Account Trust and Reviewer Trust are distinct.

```text
Reader / ordinary user
    ↓ sustained normal use
Account Trust + Governance Readiness
    ↓
Formal Nominator capability
    ↓ real nomination behavior
Reviewer-specific evidence begins
    ↓
Provisional Candidate Reviewer
    ↓ sufficient reviewer-specific evidence/confidence
Candidate Reviewer
    ↓ stronger long-horizon reliability + integrity evidence
Higher-sensitivity Governance Participant
```

These are conceptual **capability bands**, not a public game-level ladder.

### Founding Reader cold start

Early platform reality is expected to be reader-heavy and creator-light. Governance readiness should therefore begin accumulating during the official-content/reader-first phase.

Early long-term readers are a core human asset and may become the first reliable nominators, reviewers, contributors, and governance participants.

However:

- account age alone never grants governance authority;
- reader behavior strengthens Account Trust/governance readiness, not Reviewer Trust directly;
- true Reviewer Trust begins mainly from real governance/review behavior;
- official content may later support low-risk calibration/learning experiences, but these must not masquerade as live Recognition decisions.

---

# 12. Reviewer Quality, incentives, and adaptive capability — LOCKED

## 12.1 Reviewer Quality

Reviewer Quality must not be “agreement with the majority.”

Long-horizon evidence may include:

- Process Quality;
- Evidence Quality;
- Calibration;
- Retrospective Validation;
- Integrity/Anomaly Risk;
- conflict patterns;
- behavior consistency;
- later factual/governance verification.

Minority judgments later validated by evidence are strong positive signals.

Good-faith error is not governance abuse.

The internal model may be multidimensional and context-aware. Public UI should not expose a precise farmable score.

## 12.2 Adaptive-intelligence constraint

Do not implement a universal fixed formula applied identically across every content type, account maturity level, review stage, sample size, and dispute.

Interpretation may adapt to:

- content type;
- evidence class;
- sample size;
- confidence/uncertainty;
- historical record;
- anomaly context;
- review stage.

Important standing/capability changes must remain auditable and appealable.

## 12.3 Incentive baseline

Do not pay/reward raw action counts.

No:

- per-click nomination reward;
- per-review payout by default;
- daily quota clearing;
- `review N works → receive X impressions for your own work`.

Sustained high-quality contribution may unlock governance responsibility, reputation standing, and selected platform capabilities. Future material incentives are not ruled out, but they must be based on long-horizon quality/audit performance, not simple action count.

`Skip` remains neutral.

---

# 13. Capability restriction, recovery, appeal, and evidence reversal — LOCKED

## 13.1 User capability restriction

Differentiate:

- good-faith judgment error;
- capability/reliability risk;
- governance abuse.

Prefer local, minimum-necessary restriction. A review problem should not automatically disable unrelated reading, publishing, or account functions.

Capabilities may adjust by context/domain/ability rather than one punishment score.

Meaningful restriction must support understandable reason categories and appeal, while sensitive anti-abuse detection details remain protected.

Long positive history is valid anti-false-positive evidence but never immunity.

Recovery is evidence/risk based, not a simple fixed-time auto-unlock.

## 13.2 Contaminated review evidence

If later evidence shows review/nomination evidence was invalid, coordinated, fabricated, or otherwise contaminated:

1. invalidate its **current evidentiary effect**;
2. preserve the audit/history record;
3. recompute the work from remaining valid evidence;
4. return the work to the correct procedural state;
5. allow retroactive Recognition repair where warranted;
6. invalidate at the finest justified granularity—reviewer, event, claim, rubric dimension, or case;
7. publish a concise correction note for major public governance corrections without exposing anti-abuse detection internals.

Examples:

```text
remaining evidence sufficient + same outcome
→ outcome stands + audit note

remaining evidence insufficient
→ Candidate / Evidence Insufficient + new review opportunities

remaining evidence now supports Recognition
→ repair Recognition directly
```

Platform governance failure must not force an author to restart unnecessarily.

---

# 14. Consolidation audit — stale conflicts resolved

The following older Round 3 wording is now superseded:

1. **Separate Public Nomination Window/Board** — superseded. There is no second pre-Candidate content board. Nomination eligibility/exposure occurs on the original content network; Candidate is the one real public formal-review content set.
2. **Final Selection Governance “unlocked”** — superseded. The hybrid rule-driven + exception Human Governance architecture is now locked; only concrete parameters/formulas remain open.
3. **Candidate reviewer anonymity/visibility unresolved** — superseded. Public-private/internal attribution rules are now locked at architecture level.
4. **Structured rubric unresolved** — superseded. The three-layer rubric architecture and structured disposition model are locked; exact field wording/thresholds remain open.
5. **Account Trust/Reviewer Trust as one future weight system** — superseded. They are explicitly separate dimensions with weak cross-signals only.
6. **Contributor Identity immediately follows Round 2** in the old Decision Log — stale workshop ordering. Round 3 Recognition/Governance was promoted and has now been substantially designed before Contributor Identity.

---

# 15. Consolidation audit — NO structural contradiction found in the locked core

The locked core is internally coherent on the following points:

- one work object can move Normal → Candidate → Recognized without duplicate content;
- nomination and Candidate Review have distinct purposes and cost levels;
- low-traffic fairness is protected without creating a duplicate nomination board;
- popularity, identity, provenance, nomination support, and Recognition remain separate signals;
- semi-blind nomination and provenance-rich Candidate Review are not contradictory because they serve different stages;
- automatic clear-case Recognition and human exception governance can coexist;
- adaptive intelligence is bounded by auditability/appeal rather than becoming an opaque black box;
- version-aware evidence and replacement-level rewrite reset rules are compatible;
- Reviewer cold start is solvable through reader-first Account Trust followed by real governance evidence;
- governance-user penalties and contaminated-work repair are separate but connected mechanisms.

---

# 16. Remaining architecture gaps before Round 3 can be SEALED

These are not implementation parameters; they are still product-state/lifecycle questions.

## OPEN R3-C1 — Candidate negative-outcome lifecycle

When sufficient valid Candidate Review evidence concludes `Not Recognized`, define:

- whether the work immediately returns to ordinary Normal distribution while retaining review history;
- whether/when it can re-enter Nomination Eligibility;
- whether re-entry requires revision/new evidence or may occur after time/context changes;
- how to prevent repeated spam re-entry without permanently stigmatizing the work.

## OPEN R3-C2 — Evidence-insufficient lifecycle / stopping condition

`Insufficient evidence ≠ failure` is locked, but the architecture still needs a non-rigid lifecycle for works that remain under-evaluated for a long time.

Need to decide whether the system uses a context-aware pause/dormancy workflow, renewed exploration, author re-request, or another mechanism—without inventing a new prestige/content tier and without creating an infinite Candidate loop.

## OPEN R3-C3 — Recognized work after substantive same-work revision

Version-aware evidence is locked, but one visibility/state question remains:

- while a Recognized work undergoes a substantive same-work revision requiring Delta Review, does it keep the Recognized presentation temporarily, enter a visible `revalidation pending` workflow flag, or temporarily lose Recognition until affected dimensions are revalidated?

Replacement-level/new-work rewrite is already solved: restart from Normal/Eligibility.

---

# 17. Important deferred parameters — NOT Round 3 blockers

These should be calibrated from real data, content types, and abuse patterns rather than invented now:

- minimum nomination sample size;
- nomination support ratio;
- Candidate minimum reviewer count/evidence sufficiency;
- content-type-specific thresholds/critical dimensions;
- exposure quotas and exploration allocation;
- author nomination-exposure request cooldowns;
- exact anti-coordination detection logic;
- detailed Reviewer Quality model coefficients/ML choice;
- public aggregation/privacy thresholds;
- reviewer motivation/material reward implementation;
- restorative distribution/compensation formula after platform error;
- exact labels/names for Candidate Review and Recognition Board;
- precise UI/UX.

---

# 18. Round 3 closure rule

Round 3 should be marked **SEALED** only after `OPEN R3-C1`, `OPEN R3-C2`, and `OPEN R3-C3` are resolved or explicitly deferred with a stable lifecycle invariant that prevents state-machine ambiguity.

Until then:

> **Round 3 is consolidated, coherent, and implementation-unapproved, but not yet sealed.**
