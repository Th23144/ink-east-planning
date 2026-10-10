# Project 3 Product Architecture V1 — Round 6 Revalidation Amendments R1–R10

> Status: **ACCEPTED — ROUND 6 REVALIDATION AMENDMENTS**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)  
> Round 6 remains **REOPENED / NOT SEALED** until the revalidated consolidation and second source-to-final parity pass are complete.

This record captures the user's explicit acceptance of all fresh Round 6 findings R6-R1 through R6-R10 discovered during the clean-room post-seal re-verification. These decisions are now part of the current Product Architecture truth and must be carried into the new `REVALIDATED` Round 6 consolidation.

The prior `FINAL` consolidation and prior seal remain historical/provisional provenance and must not be silently rewritten to make the earlier seal appear correct.

---

## R6-R1 — Separate Knowledge Entity from Authority-bearing Subject

**Type: CORRECTION / 真正修正**

Round 6 must not permanently define the global platform `Entity` namespace as only `Person | Organization`, because the Knowledge Graph requires knowledge entities such as Place, Concept, Event/Dynasty, Work and other objects.

Canonical rule:

- `Knowledge Entity / 知识实体` is the broader knowledge-graph concept and may include Person, Organization, Place, Concept, Event/Dynasty, Work and future knowledge objects;
- `Authority-bearing Subject / 权限主体` is the authorization-relevant subject that may hold representation/control/permission relationships;
- current Round 6 authority-bearing subject kinds are primarily `Person` and `Organization`;
- a Place, Concept, Work or other non-agent knowledge entity does not gain operational permissions merely because it is an Entity in the knowledge graph;
- naming may later be simplified, but knowledge ontology and authorization semantics must remain unambiguous.

This correction is a prerequisite for Round 7.

---

## R6-R2 — Stable Platform Identity is not the same as a verified real-world Person

**Type: CORRECTION / 真正修正**

Canonical separation:

- `Display Identity / 展示身份` = mutable public presentation/persona;
- `Stable Platform Identity / 稳定平台身份` = durable platform continuity for an account/profile/persona;
- `Real-world Person linkage / 现实自然人关联` = optional/claim-driven relationship established only when justified.

Therefore:

- ordinary/pseudonymous use does not require the platform to create or verify a real-world Person record;
- multiple legitimate pseudonymous/professional/project identities may exist without forced public merging;
- if internal linkage exists, it remains sensitive and purpose-limited;
- Stable Platform Identity must not be implemented as an implicit `verified_real_person_id` requirement.

---

## R6-R3 — Claim, Relationship and Permission do not transition automatically

**Type: HARDENING / 架构加固**

Hard invariant:

```text
Claim / 声明
!=
Relationship / 关系
!=
Permission / 权限
```

A factual claim may provide evidence for a relationship or authorization decision, but it does not automatically create that relationship or permission.

Examples:

- verified employment does not automatically grant authority to speak for the employer;
- a legal ownership claim does not automatically create every platform-control permission;
- a credential claim does not automatically create Contributor Qualification, Reviewer Trust or Governance Authority.

Operational authority requires an explicit valid authority/representation relationship or grant under the permission model.

---

## R6-R4 — Consequential authorization decisions preserve decision-time provenance

**Type: HARDENING / 架构加固**

For consequential actions, the platform must be able to reconstruct why the action was allowed, held, stepped-up, denied or escalated **at that time**, even if roles, relationships, policies or security state later change.

Privacy-appropriate decision provenance may include, where relevant:

- actual Actor and authenticated Account;
- Acting Context / Acting Subject;
- relevant grant, delegation, relationship and scope references or versions;
- applicable deny/restriction source;
- policy/rule version where material;
- step-up/security decision result;
- timestamp and final outcome.

This is risk-based and retention-limited; it does not require permanent exhaustive logging of every trivial read.

---

## R6-R5 — Re-registration or recycled identifiers do not resurrect identity or authority

**Type: NEW SAFEGUARD / 新增保护**

Receiving the same email address, phone number, handle, username, domain or another recycled identifier as a former account does not automatically establish continuity with that former account.

A newly registered account must not automatically inherit the prior account's:

- Stable Platform Identity;
- private data;
- Account Trust/history;
- verified claims;
- Contributor Qualification / Expertise Scope;
- Reviewer/Governance standing;
- Organization roles or Entity Control Authority;
- historical security state.

Legitimate recovery or relinking may exist through a separate evidence-based process. `Identifier reuse != identity continuity`.

---

## R6-R6 — Recycled control channels are evidence, not proof, in Organization recovery

**Type: HARDENING / 架构加固**

Current possession of an Organization-related domain, email address, phone number, social account or another control channel may change hands legitimately or maliciously.

For material Organization control recovery, possession of such a channel is evidence but is not by itself conclusive proof of entitlement.

Recovery may consider, context-dependently:

- historical control evidence;
- Organization authenticity;
- representative authority;
- prior controller history;
- independent corroboration;
- compromise/reassignment risk;
- notification/protective hold/human review where justified.

No universal document list, score or waiting period is fixed here.

---

## R6-R7 — Automated Actors preserve controller/authorizer provenance and revocation

**Type: HARDENING / 架构加固**

This makes the already-accepted A22 requirement implementation-safe.

For an external agent, bot, service actor or other automation, the platform must be able to identify where applicable:

- the automated Actor itself;
- the controlling/authorizing Person or Organization;
- the authority source/delegation;
- the granted Scope;
- current revocation/expiry state;
- the represented Acting Subject/Entity when one exists.

Automation cannot gain more operational authority than explicitly delegated and cannot inherit human Reviewer Trust, Governance Authority or independent human-judgment standing.

---

## R6-R8 — Consequential appeals require conflict-controlled independence where appropriate

**Type: NEW SAFEGUARD / 新增保护**

A consequential appeal must not be designed so that the same materially conflicted original decision-maker can always be the sole final reviewer of their own decision.

Depending on consequence, uncertainty, abuse pressure, resource cost and risk, an appeal may require:

- an independent reviewer;
- separation of duties;
- escalation;
- conflict-based recusal;
- another defensible independent route.

This remains adaptive. There is no universal rule that every appeal requires two people or a fixed committee.

---

## R6-R9 — Using a Permission and granting a Permission are distinct authorities

**Type: NEW SAFEGUARD / 新增保护**

Hard invariant:

> **The authority to exercise a capability is not automatically the authority to grant, delegate, create or expand that capability for oneself or others.**

Therefore:

- `Use Permission` and `Grant/Delegate Permission` are distinct;
- Manage Members / Manage Roles does not automatically permit assignment of Entity Control, Finance, Security, Verification or another higher-sensitivity permission;
- role creation/editing is bounded by the grantor's explicit grantable-permission envelope and Scope;
- a user cannot manufacture authority by creating a Custom Role containing permissions they are not authorized to grant;
- self-grant/elevation to materially higher authority requires explicit authority and remains subject to security/context controls;
- delegation cannot exceed the delegator's grant authority merely because the delegator can personally execute the action.

This closes privilege-escalation paths through custom roles, member management and delegation.

---

## R6-R10 — Accountability audit/provenance records are not ordinary mutable business content

**Type: NEW SAFEGUARD / 新增保护**

Audit/provenance records that exist to preserve accountability must not be silently erasable or rewritable through ordinary content/admin permissions by the same actors whose behavior they record.

Canonical rule:

- audit/provenance mutation authority is separate from ordinary business/content administration;
- corrections should normally be additive/versioned/linked rather than silently rewriting historical facts;
- retention/deletion remains subject to privacy, legal and security requirements, but those processes must themselves preserve appropriate accountability and authorization provenance;
- break-glass or exceptional administrative handling must remain attributable and audited;
- the rule does not require indefinite retention of all data: purpose limitation, minimization and lawful deletion remain in force.

---

# Revalidation status after acceptance

R6-R1 through R6-R10 are **ACCEPTED**.

Next mandatory sequence:

```text
restore all already-accepted missing/weakened Round 6 rules
+ incorporate R6-R1..R6-R10
↓
create NEW REVALIDATED Round 6 consolidation
↓
run second source-to-final parity matrix against that exact file
↓
run fresh contradiction / rigidity / privacy / privilege-escalation check
↓
only if every applicable blocker passes -> replacement Round 6 seal
```

Do not enter Round 7 and do not authorize implementation before that sequence completes.