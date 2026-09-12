# Project 3 Product Architecture — Rounds 1–6 Cross-Round Amendment Pass 2

> Status: **ACCEPTED CROSS-ROUND AMENDMENTS — PRODUCT ARCHITECTURE ONLY**
> Implementation authorization: **NO**
> PR: #53 (`docs/ink-east-product-architecture-v1`)
> Relationship to prior amendment record: read this **after** `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md`. This file continues the amendment numbering from A25 and has later precedence for the points it explicitly amends.

This record captures the second adversarial audit pass across Rounds 1–6. The focus is not whether each subsystem is individually reasonable, but whether **interactions between Recognition, Recommendation, Contributor Qualification, organizational attestation, reviewer governance, editorial power, privacy, and presentation can recreate hidden privilege loops**.

Historical Round records remain preserved. These amendments explicitly narrow or supersede conflicting earlier wording without pretending the earlier decisions never existed.

---

# A25 — Editorial discovery may create evaluation opportunity, never Recognition evidence

The platform may legitimately discover a work and give it a chance to enter formal nomination exposure. Editors may also create independent editorial surfaces such as `Editor's Pick / 编辑精选`.

However:

- platform/editor discovery is only an **opportunity trigger**;
- the fact that an editor or platform operator selected a work for exposure contributes **zero positive Recognition evidence by itself**;
- editorial preference must not be converted into hidden nomination weight, reviewer weight, Candidate evidence, or automatic Recognition;
- `Editorial Pick / 编辑精选` and `Recognized / 高认可作品` remain distinct claims with distinct provenance;
- the source of a Recognition-opportunity trigger must be auditable internally: platform exploration, author request, qualified-user discovery, editor/platform discovery, reactivation, correction/recovery, or another explicit source.

Canonical principle:

> **The platform may decide what gets a fair chance to be judged; it must not disguise platform preference as independent work-quality evidence.**

---

# A26 — Platform-owned, Partner, commercial, and affiliated works receive no privileged Recognition path

A work's relationship to the platform must not manufacture Recognition standing.

This applies to works from:

- Platform-owned Editorial / Official entities;
- Partner Organizations;
- commercial partners, sponsors, advertisers, vendors, or organizations with another material platform relationship;
- staff members acting personally or institutionally;
- Organizations with verified relationships to the platform.

Such works may still become Recognized under the same applicable work-level framework, but:

- partnership is not nomination evidence;
- commercial relationship is not review evidence;
- platform ownership is not review evidence;
- staff/editor status is not review evidence;
- hidden fast lanes or privileged evidence thresholds are prohibited unless a future explicitly disclosed mechanism is independently justified for a non-quality purpose.

Any material conflict must be handled through the Conflict-of-Interest architecture in A35.

---

# A27 — Recognition and Recommendation require a causal firewall against self-reinforcing loops

`Recognition / 作品认可` may be a bounded signal used by Recommendation / 推荐 because users can reasonably value high-quality, reviewed work.

But the architecture must prevent this loop:

```text
Recognized
→ more recommendation exposure
→ more engagement
→ engagement treated as proof of quality
→ stronger Recognition/review standing
→ even more exposure
```

Canonical rule:

- Recognition-derived exposure may influence user discovery;
- engagement caused by that exposure is ordinary behavioral evidence with known treatment context, not independent proof that the prior Recognition was correct;
- ordinary popularity/engagement generated after Recognition must not automatically strengthen Recognition status or reviewer-governance evidence;
- Recognition status remains governed by the Recognition evidence system, not by downstream traffic success;
- Recommendation Ranking and Recognition Governance remain independently auditable systems.

This does not require ignoring post-Recognition real-world usefulness. It requires causal caution: **do not count a consequence of the platform's own intervention as if it were independent validation of that intervention.**

---

# A28 — Fair Exploration remains protected from Recognition incumbency

The platform-wide Fair Exploration principle in A7 is strengthened:

- Recommendation must reserve meaningful discovery opportunity for legitimate low-traffic/non-Recognized works;
- `Recognized`, Contributor Qualification, large follower base, institutional status, or historical traffic must not consume all discovery capacity;
- exploration is not charity and does not guarantee continued distribution — it creates enough opportunity to collect real evidence;
- weak works may decay after fair sampling;
- strong works from ordinary/new/low-traffic authors can expand without requiring pre-existing prestige;
- exact exploration budgets, blending ratios, and experiments remain for the Discovery/Recommendation round and real-data calibration.

Canonical principle:

> **Recognition can help discovery, but it must not become an incumbency moat that prevents the next strong work from ever being observed.**

---

# A29 — Served-context provenance is required for Recommendation learning and audit

A raw event such as `user clicked/saved/completed work X` is insufficient training/audit context.

Where relevant and privacy-compatible, the system should preserve the **served context** needed to distinguish content preference from presentation bias, including examples such as:

- surface/source: Home / For You, Following, Topic, Place, Search, Recognition surface, editorial surface, exploration, notification, etc.;
- ranking/position context;
- whether a Recognition marker was shown;
- whether an Editorial Pick or other platform-curation marker was shown;
- whether the impression was part of fair exploration;
- sponsored/commercial labeling where applicable;
- relevant presentation experiment/context needed to understand exposure effects.

This metadata exists to prevent future ranking models from silently learning rules such as:

> `content with status badges gets more clicks -> status itself means higher intrinsic quality`.

Recommendation training/evaluation should therefore account for position, exposure source, status presentation, and other major intervention effects where practical rather than treating all behavioral events as causally equivalent.

This amendment does not authorize invasive tracking. Data minimization, purpose limitation, retention, and privacy design remain mandatory.

---

# A30 — Reviewer anonymity requires anti-deanonymization aggregation, not merely hidden names

The previous rule `Reviewer identity is private by default to the public` is necessary but insufficient.

Public aggregates must not make a supposedly anonymous Reviewer trivially inferable through small samples, voluntary signed reviews, timing, narrow expertise groups, or differential-count changes.

Therefore:

- public review aggregates require privacy-aware publication conditions;
- exact disposition counts/ratios may be withheld, delayed, bucketed, coarsened, or otherwise protected when anonymity would be weak;
- privacy evaluation should consider the number of **remaining anonymous reviewers**, not only total reviewer count;
- voluntary public attribution by some reviewers must not expose those who remain anonymous;
- precise review timestamps or incremental live totals should not be exposed where they materially facilitate inference;
- serious governance transparency can be satisfied through suitable aggregate evidence without guaranteeing real-time granular statistics.

Concrete anonymity thresholds remain an implementation/privacy calibration issue, not a universal fixed number locked here.

---

# A31 — Internal Reviewer identity is least-privilege sensitive governance data

Although formal reviews are fully attributable internally for integrity/audit, Reviewer identity is not ordinary staff-browseable metadata.

Access must be purpose- and role-limited, for example to legitimate needs such as:

- Recognition governance;
- conflict-of-interest review;
- manipulation/collusion investigation;
- appeals/correction;
- Trust & Safety or security investigation where directly relevant.

Requirements:

- access is auditable;
- staff curiosity or editorial convenience is not a valid purpose;
- public-facing editorial teams do not automatically need reviewer identity;
- high-sensitivity investigations should follow the Round 6 internal privilege boundaries, including temporary elevation where appropriate;
- reviewer identity must not be casually exported into Recommendation, profile enrichment, commercial targeting, or social-graph features.

---

# A32 — Organization attestation proves a scoped fact; it does not confer Contributor Qualification

An Organization may validly attest facts such as:

- employment/affiliation;
- title/role;
- institutional membership;
- representative authority;
- a credential or relationship it is competent to confirm.

Such attestation is evidence for that **specific claim**.

It does not automatically prove:

- Contributor Qualification;
- broad Expertise Scope;
- Reviewer Trust;
- Governance Authority;
- Work Recognition;
- correctness of the person's opinions or publications.

Example:

`University A confirms Alice is a professor in Department B`

may strongly support the affiliation/title claim, but Contributor Qualification still requires sufficient competence/contribution evidence for the relevant Scope under the platform's qualification framework.

The same rule applies to independent practitioners, institutions, companies, museums, publishers, professional associations, and future Organization types.

---

# A33 — Organizations and Partners cannot bulk-mint Contributor Qualification

Institution/Organization onboarding may reduce repetitive verification work by allowing an Organization to confirm genuine people and relationships at scale.

But a Partner or verified Organization cannot convert a membership roster into automatic Contributor Qualification.

Therefore:

- bulk affiliation confirmation is allowed where legitimate;
- bulk representative-role onboarding may be allowed within scoped organizational authority;
- qualification evidence may be submitted or attested where the Organization is competent to do so;
- final Contributor Qualification remains a separate platform qualification decision, potentially scope-specific and adaptive;
- Partner status does not make an Organization a private certification authority for the platform;
- Organization employees do not inherit the Organization's reputation as personal qualification.

This prevents a loop where `Partner Organization -> staff roster -> automatic qualified contributors -> prestige/distribution advantage` recreates institutional caste through a different mechanism.

---

# A34 — Reviewer Trust must not become a self-validating majority-agreement loop

The existing rule that Reviewer Quality is not simply agreement with the majority is strengthened.

The system must avoid endogenous feedback such as:

```text
reviewer agrees with current high-weight majority
→ reviewer is judged more reliable
→ reviewer's future opinion receives more influence
→ future majority increasingly reflects the same reviewer cohort
→ agreement becomes easier to reproduce
```

Reviewer Trust should rely on multiple sources of evidence, including where available:

- process quality;
- quality/relevance of evidence cited;
- calibration and appropriate use of `Unable to Judge`;
- later independent factual/source verification;
- dispute/appeal outcomes;
- retrospective validation;
- conflict/integrity history;
- anomaly/coordination evidence;
- content-type/context-specific reliability.

Consensus may be informative context, but it must not be the primary self-referential ground truth.

Minority judgments later validated by independent evidence remain positive evidence as already locked.

---

# A35 — Conflict of Interest is a first-class cross-platform governance object

`Conflict of Interest / 利益冲突` must not depend only on voluntary etiquette or reviewer memory.

The architecture should be capable of representing and evaluating material conflict relationships relevant to consequential decisions across:

- Formal Nomination;
- Candidate Review;
- Contributor Qualification;
- Organization/representation verification;
- Recognition challenges/appeals;
- platform staff governance;
- Partner/commercial relationships;
- other high-integrity adjudication.

Potential conflict sources may include, context-dependently:

- direct authorship/co-authorship;
- employer/Organization relationship;
- partnership/commercial relationship;
- close project/collaboration relationship;
- direct competitive/adversarial relationship where materially relevant;
- staff/editor involvement in the same case;
- other concrete relationships that could materially impair independence.

The system should prefer proportionate responses such as disclosure, recusal/exclusion from consequential evidence, additional independent review, or escalation rather than assuming every relationship is automatically disqualifying.

Conflict detection must respect privacy and purpose limitation; it must not justify building an unrestricted social-surveillance graph.

---

# A36 — Prevent prestige/status stacking from recreating a visual and algorithmic caste

Keeping backend systems separate is not enough if the frontend stacks all status signals into one prestige bundle.

A content card should not casually accumulate signals such as:

`Identity Verified + University Affiliation + Contributor Qualification + Partner + Recognized + Editor's Pick + VIP`

in a way that causes users or ranking systems to interpret the author/work as universally authoritative.

Canonical presentation rule:

- Profile/detail surfaces may explain relevant identity, qualification, affiliation, provenance, and work history in depth;
- ordinary feed/content cards should show only contextually necessary signals and avoid prestige overload;
- Work Recognition should describe the work, not visually merge into an all-purpose author badge;
- VIP/Membership should not visually masquerade as expertise or epistemic trust;
- Partner/Organization relationship should not masquerade as endorsement;
- identity verification should explain what was verified, not imply content correctness;
- Recommendation models must not treat status-stack density as a generic quality target merely because stacked-status content gets more clicks.

Canonical principle:

> **Profile explains context; the work earns its own standing. Do not rebuild a social caste through badge accumulation after formally separating the underlying systems.**

---

# Cross-round supersession / narrowing map for Pass 2

These amendments specifically narrow or strengthen earlier architecture as follows:

- Round 3 editor/platform discovery trigger -> **A25**: opportunity trigger only, never Recognition evidence.
- Round 3/4 platform/editorial/institution-origin neutrality -> **A26**: adds explicit affiliated/commercial no-fast-lane rule.
- Round 3 Recognition + future Recommendation integration -> **A27, A28, A29**: causal separation, protected exploration, served-context provenance.
- Round 3 public aggregate transparency + anonymous reviewer policy -> **A30, A31**: anti-deanonymization and least-privilege internal access.
- Round 4/6 credential, affiliation, Organization attestation, Contributor Qualification -> **A32, A33**: factual attestation does not mint professional qualification.
- Round 3 Reviewer Quality / Reviewer Trust -> **A34**: no endogenous majority-agreement self-validation loop.
- Round 3–6 governance/organization/staff/partner interactions -> **A35**: Conflict of Interest becomes a shared governance primitive.
- Round 4/6 identity semantics plus future feed/recommendation UI -> **A36**: prevent badge/status stacking from recreating prestige hierarchy.

Everything not explicitly amended remains in force subject to later accepted architecture decisions.

---

# Audit status after Pass 2

A25–A36 are **ACCEPTED** and now part of the current Product Architecture amendment layer.

They do not seal Round 6, authorize implementation, or finalize Recommendation/Discovery mechanics.

The Rounds 1–6 adversarial audit remains open. The next audit pass should specifically test:

1. whether appeal/correction systems can themselves be captured or spammed;
2. whether author withdrawal/deletion conflicts with Recognition, citations, and public knowledge integrity;
3. whether the distinction between canonical/source authority and community/work Recognition remains intact once Knowledge Graph / Provenance design begins;
4. whether platform moderation, visibility filtering, and recommendation suppression can silently bypass the transparency/appeal architecture;
5. whether organization/identity/permission recovery can be abused to seize valuable entities or erase provenance.

Do **not** enter Round 7 until this cross-round audit is explicitly concluded.