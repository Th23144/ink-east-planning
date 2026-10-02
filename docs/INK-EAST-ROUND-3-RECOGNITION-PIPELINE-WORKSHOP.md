# Ink & East Product Architecture V1 — Round 3 Recognition Pipeline Workshop

> Status: IN PROGRESS / NOT IMPLEMENTATION AUTHORIZATION
> This round was promoted ahead of Contributor Identity because the candidate-to-selected pipeline is a prerequisite for understanding how the retained high-quality content board actually works.

## Round 3 purpose

Define the complete lifecycle by which a work moves from ordinary publication into the retained high-quality content board (final product name TBD; the old name `权威内容 / Authoritative Content` is rejected only as a name, not as a board/function).

This round must answer not only who can nominate, but also:

- how a work becomes a candidate;
- where candidate works are shown;
- whether candidate status is public, semi-public, or internal;
- how candidate works receive enough exposure to be evaluated fairly;
- what signals count during evaluation;
- whether evaluation is time-bounded or open-ended;
- how low-traffic/high-quality works avoid structural disadvantage;
- what role trusted-user voting, structured evaluation, domain expertise, editorial checks and integrity review each play;
- what threshold or decision process promotes a candidate into the final high-quality board;
- what happens to candidates that do not pass;
- whether a candidate can be re-nominated later;
- how promotion, rejection, downgrade, revocation and correction history are preserved.

## Already locked from Round 2

1. The high-quality content board/function remains.
2. The old product name `权威内容 / Authoritative Content` must not be used as the final name.
3. Raw likes/popularity cannot automatically admit a work.
4. Community support is a nomination/candidacy signal.
5. New/low-trust accounts cannot immediately participate in consequential nomination/recognition voting.
6. Eligibility is work-centric and author-identity-neutral: Editorial, Contributor, Institution, VIP and ordinary Community works may all potentially qualify.
7. Recognition status can later be downgraded/revoked through consequential human review.
8. Canonical classical-text authority/provenance is a separate system.

## Working pipeline hypothesis — NOT LOCKED

```text
Ordinary publication
→ nomination eligibility
→ community nomination/support threshold
→ Candidate state
→ candidate exposure/evaluation period
→ structured quality + integrity evaluation
→ human review where consequential or ambiguous
→ final high-quality board
```

No item in this pipeline is approved merely by appearing here.

## Questions to resolve in Round 3

### R3-Q1 — What exactly creates Candidate status?

Possible ingredients:

- minimum community nomination/support from eligible trusted users;
- minimum content completeness / classification / source requirements;
- automatic anti-manipulation screening;
- editorial nomination as an alternate route;
- topic-specific nomination threshold;
- multiple entry routes rather than one universal threshold.

Need to decide whether candidate status is purely community-triggered or whether editorial/contributor/institutional nominations can also create candidacy.

### R3-Q2 — Where and how should Candidate works be presented?

This is a product-architecture question, not a visual-design question.

Possible structural models:

- a public `Candidate / Under Review` shelf or board;
- candidate works remain in their original surfaces but receive a visible candidate state and extra distribution;
- a dedicated candidate feed only visible to eligible evaluators;
- a hybrid: original location + dedicated candidate evaluation pool;
- topic-specific candidate pools rather than one global pool.

Need to avoid two failure modes:

1. candidate works become invisible and therefore cannot gather meaningful evaluation;
2. candidate status itself becomes a pseudo-award that users mistake for final recognition.

### R3-Q3 — How is Candidate-stage evaluation performed?

Need to separate at least:

- ordinary popularity/engagement;
- trusted-user nomination/support;
- structured quality evaluation;
- source/citation/integrity checks;
- domain relevance/expertise signals;
- editorial or human review where required.

A single aggregate score is not assumed.

### R3-Q4 — How long does Candidate status last?

Potential models:

- fixed evaluation window;
- minimum window + sufficient-evidence early decision;
- open-ended until enough evidence exists;
- different windows by content type/topic/traffic level.

Need to avoid bias toward high-traffic topics and authors.

### R3-Q5 — How do low-traffic but high-quality works get a fair chance?

This is mandatory.

Potential mechanisms to discuss:

- guaranteed candidate exposure quota;
- topic-balanced distribution;
- random/sample-based evaluator assignment;
- minimum unique-evaluator count rather than raw total votes;
- longer evaluation window for low-traffic works;
- editorial/domain-expert rescue nomination;
- recommendation-system exploration allocation.

### R3-Q6 — What turns Candidate into final selected/high-quality board status?

Need to decide the relationship among:

- community support threshold;
- evidence/quality criteria;
- human review;
- topic/domain expertise;
- source/citation/integrity checks;
- anti-manipulation confidence.

The final decision may be deterministic, committee/manual, hybrid, or content-type-specific.

### R3-Q7 — What happens when a Candidate does not pass?

Need to decide:

- returns to ordinary status with no stigma;
- failed-candidate history public or internal;
- cooldown before re-nomination;
- re-nomination after substantial revision;
- whether author may withdraw candidacy;
- whether lack of sufficient evidence differs from an explicit rejection.

### R3-Q8 — How transparent should the process be?

Potentially show:

- why the work became a candidate;
- evaluation period/state;
- number of eligible evaluators (not necessarily raw vote totals);
- promotion reasons;
- revision/correction history;
- downgrade/revocation decisions.

Need to avoid turning the process into a gamified leaderboard or an easily manipulated vote campaign.

---

# Round 3 checkpoint A — user decisions and clarified direction

## R3-A1 — Candidate entry uses more than one path

Accepted direction: **multi-entry candidacy**.

The main path remains community-driven nomination/support by eligible trusted users, but the system must also preserve a route for strong low-traffic work that cannot realistically accumulate enough initial exposure on its own.

A future secondary path may include mechanisms such as:

- editorial/domain nomination;
- a creator/author application to request consideration for the nomination/candidate process;
- other limited-access rescue/discovery routes.

The user explicitly referenced the general logic of programs where low-visibility contributors can apply for a benefit/opportunity rather than being excluded purely by existing reach. This is a conceptual analogy only, not a product copy.

**Not yet decided:**

- who can use the application route;
- whether application goes directly to Candidate state or merely grants additional nomination exposure;
- evidence required;
- application frequency/cooldown;
- anti-spam controls;
- minimum work eligibility criteria before any route can create Candidate state.

These must be discussed before locking R3-Q1.

## R3-A2 — Candidate review surface should be publicly visible in principle

The user rejects a hidden evaluator-only review pool as the default model because consequential content selection should not appear opaque or unfair.

Accepted direction:

- Candidate works remain linked to their original publication object and original provenance;
- there should also be a **publicly visible Candidate Review surface** where anyone can browse/read Candidate works;
- public visibility does **not** imply universal evaluation power;
- only accounts that meet later-defined trust/eligibility criteria may cast consequential review/evaluation input;
- users without review eligibility may still read the Candidate material and may retain ordinary engagement rights according to the normal content rules.

This creates an important distinction:

```text
Public observability
≠
Formal review eligibility
```

The final surface name, information architecture and presentation are still TBD.

The system should expose enough process information to support fairness and auditability without turning candidacy into a gamified popularity contest.

## R3-A3 — Structured evaluation is accepted; exact rubric remains open

The user agrees that Candidate evaluation should be more structured than another like/dislike vote.

External examples such as platform juries/review panels may be studied for mechanism patterns, but Ink & East must not mechanically copy any particular consumer-platform dispute or review system.

The future evaluation mechanism should likely distinguish multiple dimensions rather than collapse everything into one reaction.

Candidate dimensions to examine later include:

- long-term reference value;
- argument/reasoning quality;
- source/citation reliability where applicable;
- originality/insight;
- relevance to the declared Topic/knowledge node;
- clarity/completeness;
- integrity / plagiarism / manipulation concerns.

Not every content class must use every dimension. A literary cultural essay and a citation-heavy classical-text study should not be judged by identical rubrics.

Exact questions, scales, anonymity, reviewer explanation requirements and weighting remain unresolved.

## R3-A4 — Candidate duration should be evidence-based, not a single rigid deadline

Accepted direction:

- avoid a universal fixed deadline such as 30 days;
- use a minimum observation period and/or minimum sufficient evaluation evidence;
- allow low-traffic works more time to accumulate meaningful evaluation;
- future rules may vary by content type/topic/traffic conditions.

The exact thresholds remain TBD.

## R3-A5 — Low-traffic works require protected discovery/exploration

Accepted direction:

Candidate evaluation must not simply reproduce existing follower-count or traffic inequality.

Future mechanisms may combine:

- topic-balanced Candidate exposure;
- recommendation-system exploration allocation;
- evaluator sampling/assignment;
- minimum unique-evaluator requirements;
- longer evidence windows;
- editorial/domain rescue nomination;
- an application/request-for-consideration route as described in R3-A1.

This is a fairness requirement, not an optional optimization.

## R3-A6 — Final promotion decision remains deliberately UNLOCKED

The user agrees that a hybrid system is directionally plausible but explicitly rejects prematurely locking a simplistic rule such as:

```text
community threshold
+ automated integrity check
+ one manual reviewer
= final promotion
```

This is too consequential for an early shorthand decision.

R3-Q6 is therefore promoted into a dedicated sub-round:

### Round 3B — Final Selection Governance

Must determine, at minimum:

- what evidence is necessary vs merely informative;
- whether final decision authority belongs to a reviewer panel, editor, domain reviewers, mixed committee, or another structure;
- whether reviewer identities are public, pseudonymous, blinded or partially disclosed;
- conflict-of-interest rules;
- minimum reviewer count;
- whether the candidate author can respond to concerns;
- how disputed/ambiguous cases are handled;
- whether different content classes use different final-review procedures;
- whether community evaluation can ever be sufficient without manual review;
- how anti-manipulation signals affect but do not silently determine the outcome;
- what gets published as the reason for approval/non-approval;
- appeal/re-review rules;
- how to distinguish `not enough evidence yet` from `reviewed and not selected`.

No final-governance model is approved yet.

---

## Dependency created by Round 3

The Account Weight / Trust round must later define who can participate in consequential nomination/evaluation and how anti-sockpuppet/farming protections work.

The Contributor Identity round is moved after this round because contributor distribution privileges must coexist with, but not replace, the work-level candidate/selection pipeline.

## Workshop order update

Immediate sequence:

1. Round 3A — Candidate entry, public review surface, evaluation evidence, fairness/discovery
2. Round 3B — Final Selection Governance
3. Round 4 — Contributor / Identity Recognition System
4. Round 5 — Account Weight / Trust / Publishing & Governance capability

Further workshop subjects continue afterward under the existing Product Architecture V1 plan.
