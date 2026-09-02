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

## Dependency created by Round 3

The Account Weight / Trust round must later define who can participate in consequential nomination/evaluation and how anti-sockpuppet/farming protections work.

The Contributor Identity round is moved after this round because contributor distribution privileges must coexist with, but not replace, the work-level candidate/selection pipeline.

## Workshop order update

Immediate sequence:

1. Round 3 — Recognition Candidate → High-Quality Board pipeline
2. Round 4 — Contributor / Identity Recognition System
3. Round 5 — Account Weight / Trust / Publishing & Governance capability

Further workshop subjects continue afterward under the existing Product Architecture V1 plan.
