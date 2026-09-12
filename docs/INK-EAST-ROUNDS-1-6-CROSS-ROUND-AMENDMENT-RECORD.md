# Project 3 Product Architecture — Rounds 1–6 Cross-Round Amendment Record

> Status: **ACCEPTED CROSS-ROUND AMENDMENTS — PRODUCT ARCHITECTURE ONLY**
> Implementation authorization: **NO**
> PR: #53 (`docs/ink-east-product-architecture-v1`)
> Purpose: preserve the historical Round records while explicitly superseding statements that became stale or unsafe after later architecture decisions and the Rounds 1–6 adversarial audit.

---

## 1. Precedence rule

This file is a **cross-round amendment layer**.

When this record conflicts with earlier wording in the Product Architecture workshop, Decision Log, Round 3 consolidation/seal, Round 4 consolidation/seal, Round 5 comments/seal, or earlier Round 6 discussion, **this record wins for the amended point**.

Historical documents are not erased or rewritten merely to make the decision history look cleaner. They remain useful as decision history. The purpose of this record is to make later corrections explicit, auditable, and impossible to miss.

Later explicit decisions in PR #53 may further amend this file.

No item in this record authorizes implementation.

---

# 2. Cross-round amendments from the Rounds 1–6 adversarial audit

## A1 — The long-term platform is not permanently East-only

Earlier wording that frames the platform as permanently bounded to Eastern culture is superseded.

- Eastern / Chinese culture remains an important initial wedge, acquisition story, early vertical, and source of differentiation.
- `Ink & East` remains a historical/current working brand and engineering continuity label, not a permanent umbrella-product boundary.
- The long-term platform architecture must be able to support broader culture, knowledge, place, travel, real-world experience, society, community, and discovery domains without requiring a foundational identity rewrite.
- Existing repos/routes/names are not renamed merely because long-term brand architecture remains unresolved.

This amends stale Round 1 scope language; it does not cancel the Eastern-culture launch strategy.

---

## A2 — New-account controls are risk/capability-specific, not blanket punishment for being new

Earlier wording implying that every new/low-history account should automatically receive a fixed set of short-length or broad participation restrictions is superseded.

Canonical rule:

> **Normal use should feel normal. Controls target abuse-prone actions, insufficient evidence, or elevated context risk — not the fact that an account is new by itself.**

A new account may encounter dynamic bounds, challenge, rate limits, delayed access to abuse-scalable capabilities, or other proportionate friction where justified. The platform must not create a universal `new user penalty package` that applies regardless of actual action/risk.

This amendment preserves anti-Sybil protection while aligning Round 1 with the sealed Round 5 `Account × Capability × Context` model.

---

## A3 — Recognition is one work-level state system, not necessarily one monolithic global board

The retained high-quality recognition function remains.

However, earlier wording must not be interpreted as requiring one permanent, single, undifferentiated global `Recognition Board` page for every domain and content class.

Canonical rule:

- `Recognized` is a work-level quality/governance state under one reusable Recognition Framework;
- recognized works may be surfaced through multiple domain/topic/place/content-type projections and destinations;
- a global browse surface may also exist later, but is not the definition of Recognition itself;
- the final public naming and information architecture remain unresolved.

The recognition function is retained; the product surface is allowed to evolve.

---

## A4 — The Recognition Framework does not apply to every social/content object

The reusable Recognition Framework remains platform-level infrastructure, but it is only invoked for content classes where formal recognition is meaningful and worth the governance cost.

Eligible examples may include durable essays, research/interpretation, travel/local guides, field reports, tutorials, reference material, and other evaluable publications.

The platform must not force every ordinary reply, casual discussion, short social interaction, ephemeral reaction, or conversational object through:

`Nomination -> Candidate -> Structured Review -> Recognized`.

Content-type policy determines whether a content object is recognition-eligible. This is separate from whether that content may still be useful, recommendable, popular, searchable, or important socially.

---

## A5 — Retire the linear Governance Capability ladder as canonical architecture

Earlier Round 3 wording such as:

`Formal Nominator -> Provisional Candidate Reviewer -> Candidate Reviewer -> Higher-sensitivity Governance Participant`

must no longer be treated as a universal progression ladder or account class hierarchy.

Canonical governance capability architecture is the sealed Round 5 model:

`Account × Capability × Context`

with multidimensional relevant evidence, confidence/uncertainty, context, and capability-specific decisions.

A person may qualify for one governance capability without occupying a universal rung or automatically receiving the next capability. Internal bounded states may exist operationally, but they must not silently become a global level system.

Round 3 reviewer-specific evidence and capability progression concepts remain useful as evidence-flow examples, not as a canonical ladder.

---

## A6 — Reading/consumption behavior is weak maturity/interest evidence, not broad trust proof

Sustained reading, saving, following, topic exploration, or similar normal use may support:

- account continuity/maturity evidence;
- interest/familiarity modeling;
- cold-start understanding;
- some low-risk governance-readiness context.

It must **not** by itself establish:

- Behavioral Integrity;
- Reviewer Trust;
- Contributor Qualification;
- professional expertise;
- Governance Authority;
- truthfulness of the user.

What a user reads must not become a covert ideology/profile-based trust score.

---

## A7 — Replace Contributor-exclusive organic launch support with platform-wide fair exploration

The earlier Round 4 `Contributor Launch Support` concept is narrowed.

Canonical rule:

> **Low-traffic high-quality potential should receive a real path to discovery regardless of author class.**

The Discovery/Recommendation system should therefore provide a platform-wide exploration/fair-opportunity mechanism that can surface low-traffic works from ordinary users, qualified contributors, institutions/organizations, editorial sources, and other legitimate origins.

Contributor Qualification may still help with:

- audience/context matching;
- professional browse/filter surfaces;
- richer authoring tools;
- editorial/collaboration opportunities;
- useful provenance/context.

It must not create a guaranteed organic ranking multiplier merely because the author has Contributor Qualification.

Any future sponsored/commercial distribution remains a separate disclosed system.

---

## A8 — Retire `Verified Contributor` as the canonical architecture term

`Verified Contributor` conflates two different systems:

1. verification of factual identity/credential/relationship claims;
2. qualification to participate as a contributor in a scoped domain.

The canonical architecture term is now:

`Contributor Qualification / 贡献者资格`

with explicit `Expertise Scope / 专业范围`.

Public product naming remains TBD and may use a concise label later, but the underlying architecture must not imply that `verified identity = contributor qualification` or `contributor qualification = every claim verified`.

---

## A9 — Creating an Organization knowledge/entity page does not grant control or representative authority

The platform must separate:

- existence of an Organization entity / knowledge page;
- a user's ability to create or suggest that entity record;
- Organization Authenticity verification;
- Representation Claim;
- Entity Control Authority.

A user who creates a page for an existing university, museum, company, publisher, brand, nonprofit, or other real-world organization does **not** thereby become its administrator or official representative.

Control must arise from a separate legitimate authority/representation process.

This amendment closes the squatting/official-entity capture risk in earlier Round 6 wording.

---

## A10 — High-sensitivity platform staff access requires a separate internal security boundary

Separating a staff member's personal/community `Acting Context` from their staff `Acting Context` is necessary but not sufficient for high-sensitivity access.

For production/admin capabilities with material user-data, financial, identity, security, infrastructure, or platform-wide consequences, the architecture must support a distinct internal work-security boundary, such as separate staff credentials/session domain, stronger authentication, managed-device or equivalent controls where appropriate, just-in-time elevation, and independent audit.

A compromise of an ordinary community session must not automatically yield production/admin authority merely because the same person is an employee.

Exact identity provider/device/security implementation remains deferred.

---

## A11 — `Founding Reader` is a cold-start strategy, not a permanent privileged class

Early long-term readers may be strategically valuable because they generate the first meaningful account-history and governance-readiness evidence.

However:

- `Founding Reader` is not a permanent status caste;
- early signup date alone grants no governance authority;
- founding users have no lifetime immunity, special vote multiplier, or guaranteed future capability;
- all later capability decisions remain evidence- and context-based.

---

## A12 — Primary Content Type may be mixed/hybrid; classification must not force false singularity

A controlled content taxonomy remains useful, but the architecture must not require every work to fit one perfectly exclusive semantic type.

Canonical rule:

- a work may have one operational `Primary Review Profile` where a formal workflow requires it;
- the platform may maintain multiple content-type/classification labels internally;
- hybrid works may combine applicable rubric dimensions where justified;
- user-declared classification, system classification, Topics, entities, Places, and hashtags remain distinct concepts;
- classification must not become a false ontology merely for implementation convenience.

---

## A13 — Public governance rules do not mean publishing anti-abuse internals

Where earlier records say clear cases may transition under `published rules`, interpret this as transparency around:

- governing principles;
- eligibility semantics;
- review dimensions/rubrics;
- major workflow states;
- appeal/correction logic;
- material user-facing policy boundaries.

It does **not** require disclosure of farmable:

- anti-Sybil thresholds;
- anomaly rules;
- model coefficients;
- graph-linkage logic;
- abuse-detection features;
- exact operational cutoffs where disclosure would enable manipulation.

Transparency and adversarial robustness must coexist.

---

## A14 — Institutional/organizational attestation must preserve provenance of the attesting authority

If an Organization confirms a person's affiliation, role, credential relationship, representative authority, or another claim, the platform must retain provenance sufficient to answer:

- which Organization made the attestation;
- which authorized actor or system acted for that Organization;
- under what authority/scope;
- when it was made;
- what exact claim was attested;
- whether that authority was valid at the time;
- whether the claim was later withdrawn, expired, superseded, or disputed.

`Organization says X` must not become an unattributed magical fact.

---

## A15 — Multi-account/identity-linkage evidence is purpose-limited sensitive data

Internal evidence that multiple accounts may belong to, be controlled by, or be coordinated by the same person/entity may be used where necessary for:

- anti-abuse / Sybil analysis;
- account security and recovery;
- coordinated manipulation detection;
- high-integrity governance investigations;
- other narrowly justified safety/integrity purposes.

It must not become:

- an ordinary employee browseable `real identity graph`;
- a public disclosure by default;
- a generic recommendation/profile feature;
- a reason to merge legitimate pseudonymous identities publicly.

Access, disclosure, retention, and use must be purpose-limited and auditable.

---

# 3. Round 6J cross-boundary amendments incorporated into the canonical model

## A16 — Base entity model uses `Organization`, not `Institution`

Canonical top-level entity model:

```text
Entity
├─ Person
├─ Organization
│  ├─ Institution
│  ├─ Company
│  ├─ Nonprofit
│  ├─ Media / Publisher
│  ├─ Collective / Team
│  └─ future organization types
└─ Platform-owned Entity
```

`Institution` is one Organization subtype, not the universal organization model.

---

## A17 — Replace ambiguous `Owner` semantics with `Entity Control Authority`

In core architecture, `Owner / 所有者` must not be read as a legal-ownership claim merely because a user has the highest platform control authority over an Organization entity.

Use the underlying concept:

`Entity Control Authority / 主体控制权限`

`Legal Ownership Claim / 法律所有权声明` is a separate claim type.

Product UI may later use simpler role names where context makes them safe and understandable.

---

## A18 — Highest control authority may be shared; no unique-owner invariant

An Organization may have multiple people with high control authority.

Control continuity means the platform must avoid accidental orphaning and preserve legitimate recovery/transfer paths. It does **not** require one unique supreme individual.

Shared, delegated, or governance-based control models must remain representable.

---

## A19 — Multi-author and contribution-role attribution is first-class

A durable work must not be structurally limited to one `author_id`.

The architecture must support multiple attributed contribution relationships, for example:

- Author;
- Co-author;
- Translator;
- Editor;
- Researcher;
- Photographer/Illustrator or other content-specific contributor roles;
- Publisher / Organization source.

The contribution-role vocabulary may evolve by content type, but provenance must preserve who did what.

---

## A20 — Organization hierarchy does not automatically confer control authority

Organization-to-Organization relationships such as parent/subsidiary, university/department/research-center, publisher/imprint, or group/project may be represented.

However:

> **Organizational hierarchy describes a relationship; it does not automatically grant platform control permissions.**

Authority must still be established through explicit scoped authority relationships unless a later policy deliberately defines inheritance for a specific safe capability.

---

## A21 — Minor/guardian architecture is reserved without premature age/legal rules

If minors are supported in future, Guardian relationships must be represented as relationships/authority scopes, not identity substitution.

A guardian does not become the minor and does not inherit the minor's authorship, opinions, Recognition, Reviewer Trust, Contributor Qualification, or governance standing.

Exact age gates, consent, regional law, parental controls, privacy, and safety implementation are deferred to dedicated Safety/Privacy/Legal design.

---

## A22 — External automation / bots / AI agents are first-class auditable Actors

User- or Organization-authorized automation must not masquerade as a human operator.

The action model must be able to distinguish:

- human Actor;
- external automated Agent/Bot;
- platform Service Account / automated system;
- controlling/authorizing Person or Organization;
- Acting Entity.

Automation does not inherit independent Reviewer Trust, Governance Authority, or human judgment standing merely because its controlling account has them.

---

## A23 — Multi-account linkage does not imply public identity merging

A Person may legitimately operate multiple accounts/personas, including pseudonymous, professional, project, or context-specific identities.

The architecture separates:

- internal identity-linkage evidence;
- public identity disclosure;
- anti-abuse correlation evidence.

Internal linkage evidence does not automatically authorize public linking or forced profile merging.

---

## A24 — Legal/guardian/executor/authorized-representative relationships are not identity substitution

Relationships such as:

- Guardian;
- Legal Representative;
- Executor / Estate Representative;
- Authorized Representative;
- other legally/contractually delegated authorities

may grant scoped authority over specific actions/assets where valid.

They never mean `Representative = represented Person`.

A representative may not continue speaking as, voting as, reviewing as, or inheriting personal qualification/trust of the represented/deceased person merely because they can lawfully administer some affairs.

---

# 4. Explicit supersession map

The amendments above specifically override or narrow the following earlier concepts where conflict exists:

- Round 1 East-only/general specialist-network scope language -> **A1**.
- Round 1 blanket new-user publishing restriction language -> **A2**.
- Round 2/3 language that could imply one permanent monolithic Recognition Board -> **A3**.
- Any interpretation that all social content must enter Recognition -> **A4**.
- Round 3 conceptual governance capability bands/ladder -> **A5**.
- Round 3 founding-reader language if read as broad trust proof or permanent class -> **A6, A11**.
- Round 4 Contributor-exclusive baseline launch support -> **A7**.
- Round 4 canonical use of `Verified Contributor` -> **A8**.
- Round 4/6 `Institution` as the universal organization entity -> **A16**.
- Round 6 `Owner / Ownership Continuity` wording -> **A17, A18**.
- Round 6 organization creation if read as automatic administrator authority -> **A9**.
- Round 6 staff-acting-context separation if read as sufficient security for high-sensitivity backend access -> **A10**.
- Round 3/Community singular Primary Content Type semantics -> **A12**.
- Round 3 `published rules` if read as disclosure of anti-abuse internals -> **A13**.
- Round 6 Organization attestations without actor/authority provenance -> **A14**.
- Round 5/6 internal multi-account linkage if read as generally visible/profile data -> **A15, A23**.
- Any single-author-only content relationship -> **A19**.
- Any automatic permission inheritance from organization hierarchy -> **A20**.
- Future minor/guardian support without identity separation -> **A21**.
- External automated actions without first-class Actor attribution -> **A22**.
- Legal/guardian/executor authority if read as identity takeover -> **A24**.

Everything not explicitly amended remains in force subject to later Product Architecture decisions.

---

# 5. Invariants re-confirmed by the adversarial audit

The audit did **not** find reason to revoke these core principles:

- Identity / factual claim verification, Contributor Qualification, Work Recognition, Account Trust, Reviewer Trust, Governance Authority, and VIP/Membership are separate axes.
- Popularity is not Recognition.
- Canonical/source authority is separate from socially/governance-earned work Recognition.
- Recognition is reversible, version-aware, auditable, and repairable after contaminated evidence/platform error.
- Governance decisions must be adaptive, evidence/confidence-aware, bounded, explainable at the appropriate level, and appealable where consequential.
- No platform-wide public user level/points caste is the default trust architecture.
- Multi-account possession is not itself abuse; deceptive independence and coordinated manipulation are the core risks.
- Verification verifies specific claims, not a person's overall truthfulness.
- Organization authenticity, representative authority, operational role, and work quality are separate questions.
- Ordinary users should receive a simple product path; institutional/role/representation complexity appears only when actually relevant.
- Historical provenance must not be silently rewritten merely because current identities, relationships, accounts, or organizations change.

---

# 6. Audit status and next step

This record incorporates the **accepted first cross-round audit amendments plus Round 6J amendments**.

It does **not** seal Round 6 and does **not** conclude the Rounds 1–6 adversarial audit.

Next step:

1. update the workshop entry-point/precedence chain so future windows cannot miss this amendment record;
2. continue the second adversarial audit pass across Rounds 1–6, explicitly looking for contradictions created by these amendments, hidden product complexity, governance capture, privacy overreach, recommendation/recognition coupling, and implementation-dangerous ambiguity;
3. only after that audit is complete decide whether Round 6 can be consolidated/sealed and whether earlier sealed-round records need additional explicit amendment notes.
