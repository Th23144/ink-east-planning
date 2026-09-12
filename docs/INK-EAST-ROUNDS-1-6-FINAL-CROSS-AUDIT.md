# Project 3 Product Architecture — Rounds 1–6 Final Cross-Audit

> Status: **ACCEPTED — PRODUCT ARCHITECTURE ONLY**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)  
> Relationship to prior records: read this **after** Pass 1 / A1–A24, Pass 2 / A25–A36, and Pass 3 / A37–A47. This file is the final cross-audit over those amendment layers and has later precedence for the points it explicitly corrects, hardens, clarifies, or protects.

This audit was performed specifically to test whether the accepted amendment layers created new contradictions or reintroduced the rigidity the user had explicitly rejected. It is therefore both a contradiction audit and a `Rigidity Audit / 僵化审计`.

Canonical process principle remains:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

This audit found four genuine corrections, four hardening/clarification items, one privacy safeguard, and one documentation-governance correction.

---

## F1 — Do not freeze appeal rights into a universal retry count

**Type: CORRECTION / 真正修正**

Pass 3 A37 used the phrase that a decision would `normally receive one formal appeal lifecycle` on the same evidence basis. Even though A37 allowed reopening when the basis materially changed, that wording still risks being implemented as a fixed global `one appeal only` rule.

That is too rigid and is superseded here.

### Canonical rule

The platform must distinguish between:

- materially duplicate submissions with no new basis; and
- genuinely changed review basis.

The system may merge, throttle, or reject abusive duplicate appeals that repeat the same unchanged dispute without meaningful new grounds.

A case may be reopened or reconsidered when a defensible changed basis exists, including examples such as:

- materially new evidence;
- a relevant factual change;
- contaminated/invalid evidence;
- procedural defect;
- platform error;
- changed governing policy/rule;
- materially changed context or risk;
- another justified basis that changes the merits of review.

No universal appeal count, cooldown, or retry number is locked here.

**What remains invariant:** appeal cannot become an infinite denial-of-service loop, but legitimate correction cannot be blocked merely because a numeric retry quota was consumed.

This supersedes A37 only to the extent A37 could be read as fixing `one` formal appeal lifecycle.

---

## F2 — Joint action is allowed; cross-entity permission fusion is not

**Type: CORRECTION / 真正修正**

Round 6E previously stated that `one Action has one explicit Acting Entity`. That wording is too absolute because legitimate joint publication, co-sponsored projects, co-governed assets, and multi-organization workflows may require more than one entity to participate in one resulting operation.

### Canonical rule

The architecture must support `Joint Action / 联合行动` where multiple entities independently and legitimately authorize participation in the same operation.

Example:

```text
Museum A authorizes participation
+
University B authorizes participation
↓
Joint publication / joint project
```

What is prohibited is **permission fusion**:

```text
A grants Permission X only
+
B grants Permission Y only
↓
operator invents a new cross-entity authority that neither entity actually granted
```

Each participating entity must independently satisfy the permissions required for the part of the action attributable to that entity. Permissions remain scoped and provenance-preserving.

This corrects Round 6E item 10. The anti-fusion purpose remains valid; the universal single-Acting-Entity formulation does not.

---

## F3 — Control Continuity prevents accidental orphaning; it does not forbid legitimate closure

**Type: CORRECTION / 真正修正**

Earlier Round 6 rules correctly prevented an operating Organization from accidentally losing its last effective high-authority controller. Round 6I later introduced legitimate dissolution, inactivity, archival, and historical-entity states.

A rigid reading of the earlier rule would make an Organization impossible to close without appointing a successor, creating a contradiction.

### Canonical rule

`Control Continuity / 控制权连续性` applies to an Organization that is intended to remain operational or controllable.

The ordinary path should prevent accidental orphaning caused by resignation, revocation, transfer, compromise, or administrative mistake.

However, an Organization may legitimately enter an explicit lifecycle such as:

- dissolved;
- closed;
- inactive;
- archived;
- historical-only;
- another intentionally non-operational state.

Such an explicit lifecycle may end active control relationships without requiring an artificial successor, subject to appropriate confirmation, provenance preservation, recovery/dispute safeguards, and legal/policy obligations.

Canonical distinction:

> **Prevent accidental orphaning; do not prevent intentional, accountable lifecycle closure.**

This narrows the earlier `last controller cannot leave` rule and aligns it with Round 6I lifecycle design.

---

## F4 — `Platform-owned` is an ownership/control relationship, not a peer Entity Type

**Type: CORRECTION / 真正修正**

Earlier models placed:

```text
Person
Organization / Institution
Platform-owned Entity
```

at the same conceptual level.

This mixes `what the entity is` with `who owns or controls it`.

### Canonical rule

Base entity ontology should describe the nature of the subject, for example:

```text
Entity
├─ Person
└─ Organization
    ├─ Institution
    ├─ Company
    ├─ Nonprofit
    ├─ Media / Publisher
    ├─ Collective / Team
    └─ future organization forms
```

`Platform-owned`, `Platform-operated`, `Partner`, `Official`, `Editorial`, and similar concepts are relationships/capacities/ownership-control facts layered on top of an entity, not peer biological/ontological entity types.

An Official platform publication entity may therefore be an Organization that is platform-owned/operated, while an individual staff member remains a Person acting under a staff/official relationship.

This supersedes earlier models that treated `Platform-owned Entity` as a universal third top-level entity type.

---

## F5 — Ordinary participation does not require universal real-world identity resolution

**Type: NEW SAFEGUARD / 新增保护**

Pseudonym support was already accepted, but the architecture must explicitly prevent a future implementation from assuming that every Account must ultimately map to a legally identified real-world Person.

### Canonical rule

An ordinary user may participate under a pseudonymous or otherwise non-real-name public identity without the platform necessarily resolving their legal identity.

Verification must remain `claim-proportional`:

- ordinary participation does not require universal government-ID or real-name resolution;
- if a user claims a specific real-world identity, credential, organization affiliation, representative authority, or other consequential fact, the platform may request evidence proportionate to that claim;
- anti-abuse/security investigation may use lawful, proportionate signals without converting every user into a mandatory verified-real-name profile;
- public pseudonymity does not itself reduce ordinary legitimacy.

Internal identity-linkage evidence remains sensitive and purpose-limited under A15/A23 and related Round 6 privacy rules.

---

## F6 — Anti-abuse correlation evidence is not automatically a factual social/identity relationship

**Type: HARDENING / 架构加固**

Round 5 correctly allows correlated evidence to identify non-independent activity or suspicious coordination without requiring the platform to prove common ownership first. A15/A23 also protect internal linkage privacy.

The remaining risk is that implementation could convert probabilistic anti-abuse evidence into a hard factual relationship.

### Canonical rule

Signals such as:

- shared network;
- device/browser correlation;
- timing similarity;
- behavior similarity;
- transactional correlation;
- graph/community overlap;
- coordinated voting/review patterns;

may support anti-abuse risk analysis or evidence-neutralization decisions where proportionate.

They do **not** automatically establish that:

- two accounts are the same person;
- two people know one another;
- two entities are formally affiliated;
- a public relationship should be displayed;
- a legal/identity claim has been proved.

Different downstream claims require their own evidentiary standard.

Canonical principle:

> **Correlation can justify caution; it does not silently become identity truth.**

---

## F7 — Historical Recognition and current publication/distribution state are separate

**Type: HARDENING / 架构加固**

A47 and the Round 3 version/state architecture preserve historical facts, but a remaining ambiguity exists when a Recognized work is later withdrawn, legally removed, policy-restricted, author-suspended, or otherwise unavailable.

### Canonical rule

The system must distinguish:

- `Historical Recognition / 历史认可事实` — whether a specific version/work earned Recognition at a point in time;
- `Current Availability / 当前可用性` — whether the work is presently publicly accessible;
- `Current Recommendation Eligibility / 当前推荐资格` — whether it may currently enter normal recommendation/discovery;
- `Current Policy/Legal Status / 当前治理或法律状态`.

A later removal/restriction does not require falsifying history by pretending the work was never Recognized.

Likewise, past Recognition does not override a current legal, policy, integrity, privacy, safety, or withdrawal requirement.

Where appropriate, public history may show a minimal, context-sensitive record without republishing removed material.

This integrates Round 3 Recognition history with A40/A41/A44/A45.

---

## F8 — Served-context provenance must remain privacy-minimized and purpose-bounded

**Type: CLARIFICATION / 澄清**

A29 requires enough served-context metadata to understand exposure/presentation bias. It must not be interpreted as authorization for unrestricted or perpetual behavioral surveillance.

### Canonical rule

Record only the context reasonably needed for recommendation evaluation, causal analysis, audit, experimentation, integrity, or other explicit legitimate product purposes.

Where suitable:

- prefer aggregation over unnecessary per-user granularity;
- minimize fields not needed for the purpose;
- use bounded retention rather than indefinite retention by default;
- separate sensitive identity/linkage data from ordinary recommendation telemetry;
- do not repurpose reviewer identity, verification material, or private identity linkage into recommendation profiling merely because technically accessible;
- document purpose and downstream consumers for high-sensitivity telemetry.

Exact retention windows and jurisdiction-specific rules remain deferred to Privacy/Legal/Security design.

A29 survives; this clarification prevents A29 from becoming a blanket tracking mandate.

---

## F9 — Editorial non-selection can never be a negative Recognition-eligibility signal

**Type: HARDENING / 架构加固**

A25 correctly states that editor/platform discovery may create evaluation opportunity but contributes zero positive Recognition evidence by itself.

The reverse must also be explicit.

### Canonical rule

Failure to be selected by an editor/platform discovery route does **not** count as negative quality evidence and does not remove independent access to legitimate evaluation opportunities.

Recognition opportunity may arise through multiple independent routes, including as applicable:

- platform exploration/system sampling;
- author request/application for evaluation opportunity;
- qualified-user discovery;
- editor/platform discovery;
- reactivation/correction/recovery;
- later legitimate routes created by product evolution.

No single discovery route is the exclusive gate unless a future mechanism explicitly requires it for a justified non-quality reason.

Canonical principle:

> **Editorial discovery may add opportunity; editorial silence must not subtract eligibility.**

---

## F10 — The final architecture must have a current-truth consolidation layer

**Type: DOCUMENTATION CORRECTION / 文档治理修正**

The repository now correctly preserves historical decisions and explicit amendments, but future implementers should not be expected to reconstruct current product truth by manually resolving dozens of supersession rules across old Workshop, Decision Log, sealed rounds, three amendment passes, and PR comments.

### Canonical documentation rule

Before implementation authorization or PR #53 merge-readiness, create clean current-truth consolidation documents that:

- state the current architecture without stale superseded language;
- preserve links/references to historical decision records for provenance;
- distinguish current invariants from historical wording;
- incorporate accepted amendments A1–A47 and F1–F10;
- eliminate misleading canonical terminology such as stale `Verified Contributor`, universal `Institution`, blanket Contributor-only launch support, overly broad `Authoritative Classical Text`, hidden governance ladders, and other superseded concepts;
- preserve deliberately deferred thresholds/formulas/naming instead of inventing them during consolidation.

Historical records remain historical records. Consolidation does not erase them.

The immediate required next consolidation is `Round 6 — Identity / Role / Permission` before Round 6 can be sealed.

---

# Final contradiction / rigidity audit result

After applying F1–F10, the final cross-audit found no remaining blocking contradiction among the current accepted architecture on these major boundaries:

- no universal account/reviewer/governance level ladder;
- Account Trust, Reviewer Trust, Contributor Qualification, Work Recognition, factual verification, Organization authority, and VIP/Membership remain separate;
- identity/claim verification is scoped and claim-proportional rather than universal truth certification;
- Organization authenticity, Organization control, representative authority, and user account recovery remain separate;
- Work Recognition remains separate from canonical/source provenance and from Recommendation ranking;
- Recommendation retains Fair Exploration and causal-context safeguards without becoming Recognition governance;
- moderation/policy visibility interventions remain distinct from ordinary ranking;
- multiple Accounts/personas may exist without forced public identity merging;
- control delegation/revocation remains scoped and provenance-preserving while allowing legitimate joint action;
- lifecycle closure, deletion, archival, tombstones, and historical provenance can coexist without universal cascade deletion or universal permanent retention;
- the flexibility mandate is preserved: hard invariants define boundaries; adaptive rules handle context; numeric calibration remains deferred unless evidence later justifies it.

No implementation is authorized by this audit.

---

# Status / next step

- F1–F10 are **ACCEPTED**.
- Rounds 1–6 adversarial audit is **CONCLUDED at cross-audit level**.
- Round 6 remains **NOT SEALED** until a clean Round 6 consolidation is produced and subjected to a short contradiction check.
- Next required document: `Round 6 Consolidation / Round 6 总整合`.
- After consolidation + short contradiction check: create `Round 6 Seal Record`.
- Only after Round 6 is sealed may the workshop proceed to **Round 7 — Knowledge Graph & Provenance / 知识图谱与来源溯源**.
