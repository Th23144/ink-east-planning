> ⚠️ **SEALED HISTORICAL ROUND RECORD / CONTAINS KNOWN SUPERSEDED TERMINOLOGY（已封存历史轮次记录 / 含已知过时术语）**  
> Do not treat `Verified Contributor`, `Institution` as universal Organization type, `Platform-owned Entity` as peer entity type, or Contributor-only launch-support wording here as current canonical architecture.  
> Later cross-round amendments + Round 6 V6 Current Truth（当前有效真相） supersede those meanings. Read `docs/PROJECT-3-SUPERSEDED-DIRECTION-REGISTRY-V1.md` first.

# Ink & East Product Architecture V1 — Round 4 Contributor / Identity Consolidation

> Status: **ROUND 4 CONSOLIDATED — PRODUCT ARCHITECTURE ONLY**
> Implementation authorization: **NO**
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This document consolidates the accepted Round 4 Contributor / Identity Recognition architecture. It should be read after the Round 3 seal record and together with the later Round 4 decision comments in PR #53.

Where earlier workshop wording conflicts with this consolidation, the later accepted Round 4 decisions and this document take precedence.

---

## 1. Core separation invariant

The platform must permanently keep these systems separate:

- **Entity Type** — Person, Institution, or Platform-owned Entity.
- **Public Display Identity** — the name/pen name/organization name shown publicly.
- **Identity Verification** — whether the platform has enough evidence that the claimed person/entity is genuine.
- **Credential / Relationship Verification** — whether a claimed background, affiliation, qualification, or representative relationship is genuine.
- **Contributor Qualification** — whether the person has sufficient evidence of sustained competence/contribution capability in one or more scoped areas.
- **Expertise Scope** — the bounded area(s) for which Contributor Qualification applies.
- **Account Trust / Account Capability** — maturity, anti-abuse standing, and access to platform capabilities.
- **Reviewer Trust / Governance Capability** — reliability as a reviewer/governance participant, earned through governance evidence.
- **Work Recognition** — work-level quality status governed by the sealed Round 3 pipeline.
- **VIP / Membership** — paid membership and benefits, including possible account-capability acceleration or other product benefits.

No single badge, score, payment state, identity class, or account age may collapse these axes.

Canonical rule:

> **Who you are, what you are qualified to contribute, what a specific work deserves, how mature your account is, and whether you are trustworthy as a reviewer are different questions.**

---

## 2. Contributor entry routes and new-account anti-abuse boundary

Contributor review may be initiated through multiple routes, including:

- Self Application;
- Platform Invitation;
- Institution / Partner Onboarding.

An entry route starts or permits review; it does not itself grant Contributor Qualification.

### 2.1 New-account gate

The architecture rejects both extremes:

- not every newly registered zero-history account should receive unrestricted access to high-cost Contributor application/review flows;
- genuine high-value newcomers must not be forced to wait months merely because their platform account is new.

Normal new-account restrictions may therefore use Account Trust / maturity / anti-abuse capability gates.

### 2.2 VIP role

VIP is **not professional evidence** and does not prove Contributor Qualification.

VIP may, however, legitimately affect account-capability and anti-abuse mechanics. In particular:

- payment introduces real economic friction against mass-created/Sybil/bot accounts;
- a new VIP account may unlock or accelerate some capabilities that an ordinary account would otherwise obtain through time and normal use;
- this may reduce purely time-based friction around some application/access flows;
- it must not manufacture Behavioral Trust, professional competence, Reviewer Trust, Work Recognition, or governance power.

Therefore the system must not use one global `Account Weight` number where VIP points accidentally purchase unrelated governance authority. Capability checks must be multidimensional/context-specific.

### 2.3 Exceptional newcomer route

A new account with strong externally verifiable evidence, Platform Invitation, or legitimate Institution/Partner onboarding may bypass ordinary account-age accumulation for Contributor application/review access.

This bypass does **not** fabricate platform history or Reviewer Trust. It simply recognizes that strong external evidence can justify reviewing a newcomer immediately.

Exact VIP-vs-ordinary capability differences and Account Trust mechanics remain for later Account Trust / Membership rounds.

---

## 3. Contributor Qualification standard

Contributor Qualification is evidence-based and scope-based. It must not use a single universal prestige shortcut such as degree, job title, fame, follower count, publication count, or institutional affiliation.

Accepted principles:

1. Qualification uses a combination of evidence rather than one universal hard credential.
2. Different contributor types may use different legitimate evidence structures.
3. Identity/credential authenticity and demonstrated competence are reviewed separately.
4. Platform-native users can qualify through sustained high-quality platform evidence without pre-existing external fame or title.
5. Qualification is bound to explicit Expertise Scope(s).
6. Borderline cases may request more evidence, narrow scope, or receive human review rather than being forced through brittle automatic rules.

A professor title may be strong background evidence but does not automatically establish every claimed Scope. An ordinary user may lack external status yet earn strong qualification evidence through durable high-quality platform work.

---

## 4. Multiple evidence paths — not prestige tiers

The platform uses one `Verified Contributor` framework with multiple legitimate evidence paths, including at least:

- Academic / Institutional;
- Independent Research / Author;
- Practitioner / Craft;
- Field / Local Knowledge;
- Platform-native.

These paths are **not public levels** and do not imply a hierarchy such as `professor > independent researcher > practitioner > ordinary creator`.

The general evidence model is:

```text
Scope Claim
-> Identity / Attribution
-> Primary Evidence Anchor
-> Corroborating Evidence
-> Integrity / Conflict Check
-> Qualification Decision
```

Qualification may be partially approved. Different Scopes can independently be:

- approved;
- narrowed;
- asked for more evidence;
- not approved.

A weakness in one requested Scope does not automatically invalidate unrelated approved Scopes.

---

## 5. Low-friction application architecture

Contributor application must not become a bureaucratic credential obstacle course.

The frontend should require only genuinely indispensable minimum information for a reviewable application. Possible supporting materials should not all become mandatory fields merely because the platform can accept them.

Rules:

- evidence recommendations may be dynamic by claim/path;
- optional evidence remains optional unless genuinely necessary for that claim;
- missing one nonessential field must not disable submission;
- reviewers may request additional evidence after submission;
- the application form must not pre-encode the entire human review checklist as hard frontend validation;
- privacy-hostile surprise requirements and hidden mandatory fields are prohibited.

Canonical principle:

> **Collect enough evidence to review fairly; do not force every applicant to complete every conceivable proof field.**

---

## 6. Identity verification, pseudonyms, and privacy trust

Verified Contributor does not require public real-name display.

A user may remain publicly known by a pen name / creator name while the platform privately verifies necessary identity or credential claims.

The following remain distinct:

1. Public Display Identity;
2. internal Platform Identity Verification;
3. Credential Verification;
4. Institutional Authority / Representative Authority.

### 6.1 Claim-proportional verification

Verification strength should match the strength of the claim the platform is asked to stand behind.

Examples:

- a general independent-researcher claim may be verified through attribution, work history, controlled public properties, publications, and related evidence;
- a claim such as current university professor, museum researcher, official institutional representative, or similar stronger relationship requires direct evidence of that relationship.

Government ID is **not** a universal default requirement. It may be requested only when genuinely necessary to resolve identity conflict, impersonation risk, sensitive representative authority, or another material verification need.

### 6.2 Privacy-trust constraint

As an early-stage platform, demanding high-sensitivity real-name material by default would create disproportionate privacy distrust. Verification architecture must therefore prove the necessary claim with the **least sensitive sufficient evidence** whenever feasible.

The platform should:

- prefer public/verifiable professional evidence, controlled domains/profiles, institutional email/records, publications, or similar lower-sensitivity methods where sufficient;
- explain why any sensitive material is needed before collection;
- explain what will be visible publicly and what remains private;
- separate long-lived verification results from raw verification material;
- minimize raw sensitive-data retention when feasible;
- make data-handling expectations understandable before submission.

Exact vendors, legal requirements, cryptographic methods, retention periods, and regional compliance are deferred to dedicated privacy/security/legal design.

---

## 7. Contributor lifecycle and scoped re-verification

Contributor Qualification is not a generic annual subscription that expires unless the person re-uploads all documents every year.

Different claims have different lifecycles:

- historical facts such as earned credentials or past publications may remain durable;
- current employment/affiliation/representative authority is time-sensitive and may require refresh;
- Expertise Scope may expand, narrow, or be re-evaluated independently;
- an affiliation becoming stale does not automatically erase demonstrated expertise.

A Contributor may request Scope Expansion. The platform may also narrow a Scope when evidence no longer supports it without automatically revoking unrelated Scopes.

One weak article, a good-faith factual error, or legitimate scholarly disagreement does not by itself revoke Contributor Qualification.

---

## 8. Serious integrity enforcement

Abuse of the Contributor trust layer is a principle-level violation, not a minor content-moderation event.

Serious cases include, for example:

- impersonation;
- fabricated credentials/qualifications;
- deliberate false institutional representation;
- systematic plagiarism or fabrication;
- deliberate abuse of Verified Contributor status;
- comparable high-integrity violations.

For credible serious cases, the platform may temporarily suspend the affected Contributor identity, credential claims, Expertise Scope(s), and related high-trust capabilities while a case is reviewed.

Confirmed serious violations may justify:

- Scope revocation;
- Contributor Qualification revocation;
- removal/suspension of related high-trust capabilities;
- long-term or permanent disqualification from Contributor re-verification;
- account-level action where the conduct also warrants it.

A simple mute, lightweight rate limit, or trivial penalty is insufficient when the trust layer itself was deliberately abused.

Consequential sanctions require a reasoned case record, notice of the violated principle/category, preservation of relevant evidence, and an appeal/reconsideration path. Anti-abuse internals need not be disclosed. Emergency temporary suspension may precede final review when active fraud/impersonation creates material risk.

---

## 9. Contributor privileges

Contributor identity may provide meaningful product value without becoming automatic epistemic authority.

Accepted privilege directions include:

- stronger publishing capability than low-trust/new ordinary accounts;
- long-form/complex publishing access where appropriate;
- professional authoring tools such as citations, source/provenance handling, version history, knowledge-node/passage/place/entity linking, richer attachments, and content-type-specific tools;
- a richer Contributor Profile / Portfolio;
- direct eligibility for certain editorial/Issue/co-creation/research/teaching/project opportunities;
- optional Contributor-focused browse/filter/shelf views over the same underlying content network;
- dedicated distribution opportunity/support as defined below.

Contributor status does **not** automatically grant:

- Work Recognition;
- stronger Formal Nomination weight;
- Reviewer Trust;
- governance power;
- permanent high ranking.

Governance capability remains independently earned.

---

## 10. Contributor Opportunity and bounded real launch support

Contributor distribution must be stronger than merely saying a work is "eligible to be tested."

A newly published Verified Contributor work should receive **real but bounded baseline launch support**, subject to basic policy/integrity/eligibility checks.

Conceptually:

```text
Contributor publication
-> bounded Contributor Launch Support
-> meaningful qualified reader sample
-> evidence-driven expansion / decay
-> possible Recognition / other distribution paths
```

Locked principles:

1. Support is work-level and bounded, not a permanent account-wide ranking multiplier.
2. The target is **meaningful qualified exposure**, not a fixed vanity impression number.
3. After baseline support, continued expansion depends on work-level evidence and content-type context.
4. Weak work can decay normally even when published by a Contributor.
5. Low-traffic/new Contributors may receive relatively stronger cold-start assistance than already-large Contributors because the goal is to reduce structural discoverability disadvantage.
6. Ordinary users retain independent exploration and upward mobility through Community, Exploration, Topics/Places, Recognition, and other sources.
7. Multiple positive sources/signals (Contributor + Recognized + Editorial Pick, etc.) must not mechanically stack into unlimited boost.
8. VIP/payment cannot purchase organic Contributor launch support.
9. Any future commercial/sponsored distribution is a separate, clearly disclosed system.

Exact support volume, duration, mixer coefficients, audience selection, and experiments are deferred to Discovery / Recommendation.

---

## 11. Front-end identity semantics

Public identity should use a small number of clear top-level classes rather than many prestige badges.

Current architecture concepts include:

- personal `Verified Contributor`;
- organizational `Institution / Partner`;
- platform-owned `Editorial / Official`.

Final public labels remain TBD.

Rules:

- Expertise Scope must be visible and understandable;
- professor/author/researcher/practitioner and similar labels are background/credentials, not trust levels;
- user-declared background must be distinguishable from platform-verified claims;
- public pseudonym use must not reduce Contributor standing;
- feed/content surfaces should not visually over-amplify prestige;
- verification must be explainable so users can inspect what the badge means and what it does not mean.

Canonical presentation principle:

> **Profile explains identity; Content is judged as work.**

Profiles may show richer context, Scope, verified affiliations, representative work, Recognized Works, Issue inclusion, and user-selected public credentials. Feed/content cards should use much lighter identity presentation to reduce prestige/herding bias.

---

## 12. Institution / Partner / Editorial identity architecture

Entity Type and qualification/relationship are separate dimensions.

```text
Entity Type
├─ Person
│  └─ may qualify as Verified Contributor
├─ Institution
│  └─ may have verified representatives / Partner relationship
└─ Platform-owned Entity
   └─ may act as Editorial / Official
```

Locked rules:

1. `Institution / Partner` is not a higher tier of Contributor.
2. Organizational accounts require organization-authenticity verification plus representative-authority verification.
3. Where applicable, institutional publication should preserve the human author's authorship/provenance while the organization remains publisher/source.
4. Partner status indicates a platform relationship, not blanket endorsement of the partner's views, products, research, or conduct.
5. Platform `Editorial / Official` speech must be clearly distinguishable from external Contributor/institution speech.
6. Platform employees/editors may act in separate capacities; personal Contributor speech is not automatically official platform speech.
7. Institution/Partner/Official works remain subject to the same work-level Recognition framework.
8. Partnership/commercial relationship cannot purchase hidden organic recommendation advantage.
9. Institution/Partner/representative relationships have lifecycle management for authorization changes, partnership termination, organization changes, and representative changes.

`Person`, `Institution`, and `Platform-owned Entity` are entity types. `Verified Contributor`, `Partner`, and `Official` are distinct qualifications/relationships/capacities and must never become one prestige ladder.

---

## 13. Cross-round consistency audit

Round 4 is structurally consistent with sealed Round 3:

- Contributor identity does not grant Work Recognition.
- VIP/payment does not grant governance capability or Recognition.
- Contributor launch support is a distribution policy, not Recognition evidence by itself.
- Semi-blind Recognition nomination can suppress Contributor/VIP/institutional prestige signals without invalidating the public Contributor identity system.
- Reviewer Trust remains separate from Contributor Qualification.
- Institution/Official works remain within the same work-level Recognition lifecycle.

Round 4 also deliberately leaves Account Trust formulas, recommendation coefficients, membership bundle details, privacy/legal implementation, and moderation enforcement mechanics to their dedicated later rounds so this round does not prematurely hard-code them.

No unresolved contradiction blocks Round 4 closure at product-architecture level.

---

## 14. Deferred items that do not block closure

The following remain intentionally deferred:

- exact Account Trust / Account Capability model and thresholds;
- exact VIP-vs-ordinary capability bundle and Membership packaging;
- exact Contributor application-access thresholds for ordinary new accounts;
- exact external-evidence sufficiency thresholds;
- detailed identity-verification vendor/security/privacy/legal implementation;
- exact raw-document retention/deletion policy by jurisdiction;
- final public names/icons/badge visual language;
- exact Contributor launch-support budgets, durations, targeting, and mixer coefficients;
- detailed Contributor sanction/reinstatement workflows beyond the locked integrity principles;
- detailed institution representative-management UI/workflow;
- exact editorial opportunity/commissioning mechanics.

Later rounds may refine these details but may not silently contradict the invariants locked here.

---

## 15. Implementation boundary

**Round 4 does not authorize implementation.**

Do not build Contributor verification, identity badges, institution accounts, VIP gating, Contributor distribution, or related product code merely because this architecture is consolidated. PR #53 remains Draft and the wider Product Architecture V1 workshop is still in progress.

The next major workshop subject is **Round 5 — Account Trust / Account Weight / Publishing & Governance Capability**.