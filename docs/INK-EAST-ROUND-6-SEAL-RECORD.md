# Project 3 Product Architecture V1 — Round 6 Seal Record

> Status: **ROUND 6 SEALED — PRODUCT ARCHITECTURE ONLY**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This record closes Round 6 — Identity / Role / Permission after:

- Round 6A–6J;
- the project-wide Rounds 1–6 retrospective adversarial audit;
- accepted amendment layers A1–A47;
- accepted Final Cross-Audit F1–F10;
- final current-truth consolidation in `docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-FINAL.md`;
- a final contradiction/rigidity check of that consolidation.

The historical Round 6 comments, amendment files, and earlier consolidation remain provenance records. The Final Consolidation + this Seal Record are the current Round 6 architecture.

---

# 1. Final seal audit result

The final consolidation was re-checked against Round 3 Recognition, Round 4 Contributor/Identity, Round 5 Account Trust/Capability, the accepted cross-round amendments, and the user's project-wide flexibility requirement.

**No blocking structural contradiction remains.**

The seal audit specifically re-tested:

- hidden level/ladder reintroduction;
- Identity / Claim / Contributor Qualification / Account Trust / Reviewer Trust / Governance Authority / Work Recognition / Membership conflation;
- Organization control and representation capture;
- cross-Entity permission fusion;
- staff privilege escalation and ordinary-session compromise;
- Conflict of Interest coverage;
- account/Organization recovery confusion;
- pseudonym/privacy leakage;
- multi-account correlation being misrepresented as identity fact;
- deletion/withdrawal destroying public provenance or accountability;
- accidental orphaning versus intentional Organization closure;
- over-rigid appeal, recovery, cooling or verification rules;
- ordinary-user UX being polluted by enterprise IAM complexity.

The two omissions found in the first consolidation check are now explicitly resolved:

1. **High-sensitivity staff access uses a distinct internal security boundary.** A compromised ordinary community session does not automatically yield production/admin authority merely because the Person is staff.
2. **Conflict of Interest is a first-class cross-platform governance primitive**, covering consequential Recognition, Contributor Qualification, Organization verification/control, appeals, staff actions, Partner/commercial relationships and other high-integrity adjudication, with proportionate/privacy-limited handling.

---

# 2. Final Round 6 object model

Round 6 permanently separates:

```text
Account
Actor
Display Identity
Stable Identity
Entity
Relationship
Claim
Role
Permission
Scope
Acting Context
Authorship
Publisher
Operator
```

Base Entity ontology:

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

`Platform-owned`, `Official`, `Editorial`, `Partner` and similar concepts are relationships/capacities, not peer base Entity types.

---

# 3. Final authorization model

`Permission` is the atomic authorization unit. `Role` is a permission bundle, not a trust/status rank.

Final execution is context-aware:

```text
Actual Actor
+ authenticated Account
+ Acting Entity/Entities
+ relevant Relationship(s)
+ Role bundle(s)
+ atomic Permission(s)
+ Scope(s)
+ authorization-source provenance
+ Conflict-of-Interest state where relevant
+ Explicit Deny / security constraints
+ Round 5 current security/risk context
+ execution-time re-check
=
Effective Action Decision
```

Legitimate Joint Action may involve multiple Acting Entities, but each Entity independently authorizes its participation. Cross-Entity permission fusion that creates authority nobody granted is prohibited.

---

# 4. Final identity and verification boundaries

Canonical principle:

> **We verify claims, not people’s overall truthfulness. / 平台核验的是具体声明，而不是给一个人的整体可信度盖章。**

Identity verification, factual Claim verification, Contributor Qualification, Expertise Scope, Account Trust, Reviewer Trust, Governance Authority, Work Recognition and VIP/Membership remain separate axes.

Ordinary participation does not require universal real-name resolution. Pseudonymous use is supported. Stronger real-world evidence is requested only for consequential claims that require it.

Organization authenticity does not certify all Organization speech. Organization attestation does not automatically mint Contributor Qualification, Reviewer Trust, Governance Authority, Recognition or ranking privilege.

---

# 5. Final Organization/control boundaries

Creating an Organization record does not prove authority to represent the real-world Organization.

Use `Entity Control Authority`, not ambiguous legal ownership semantics.

Highest control may be shared. Control Continuity prevents accidental orphaning but does not prohibit explicit dissolution/closure/archive state.

Account Recovery and Organization Control Recovery are separate. Recovering login access does not prove Organization control entitlement.

Organization control transfer does not transfer another Person's Account Trust, Contributor Qualification, Expertise Scope, Reviewer Trust, Governance Authority or personal history.

---

# 6. Final staff/internal-authority boundaries

Platform Staff is a separate internal Relationship/capacity from ordinary community identity.

Staff authority is separated by responsibility domain; no routine hidden universal super-admin path is accepted.

High-sensitivity access follows Need-to-know, Purpose Limitation, least privilege, temporary/JIT elevation where appropriate, Separation of Duties, auditability, and a distinct internal security boundary.

Break-glass is emergency-only.

Support does not silently impersonate users.

Staff power cannot manufacture Recognition, Reviewer Trust, Contributor Qualification or natural ranking privilege outside the relevant governed mechanisms.

---

# 7. Final lifecycle/privacy boundaries

Account, Entity and Relationship lifecycles remain separate.

Account closure/deletion does not imply cascade deletion of public knowledge/provenance, while public-knowledge integrity does not justify indefinite retention of every private datum.

Deactivation, suspension, closure and deletion are distinct semantics.

A removed cited object may use a privacy/legal-compatible Tombstone when appropriate.

Historical Recognition and current availability/recommendation eligibility are separate.

Identity-linkage and anti-abuse correlation are purpose-limited sensitive data, not a public or casual employee-browseable real-person graph.

---

# 8. Flexibility / anti-rigidity closure

Round 6 is sealed under the project-wide rule:

> **The architecture must be precise about boundaries without being rigid about circumstances.**

Hard invariants define what must not be conflated or bypassed. Context-sensitive matters remain adaptive.

Round 6 deliberately does **not** lock universal:

- document counts;
- verification/security vendors;
- fixed age rules;
- cooling durations;
- exact role names;
- exact recovery-evidence thresholds;
- privacy-retention periods;
- number of controllers;
- universal dual approval;
- fixed appeal count;
- final public badge/icon language.

These require later policy, security, privacy/legal, product or real-data calibration.

---

# 9. Implementation boundary

**Nothing in Round 6 authorizes implementation.**

Do not build the identity/role/permission system merely because Round 6 is sealed. Implementation still requires a later explicit authorization after the wider Product Architecture V1 is coherent and relevant downstream rounds have established their contracts.

Round 6 seal means the architecture is sufficiently coherent to become an upstream dependency for later rounds.

---

# 10. Next workshop subject

Proceed to:

**Round 7 — Knowledge Graph & Provenance / 知识图谱与来源溯源**

Round 7 must preserve the Round 6 separations among Entity, Claim, Relationship, authorship, publisher, operator, representation and historical attribution, and must also preserve the Round 3/Pass 3 separation between canonical/source authority and Work Recognition.

Round 6 status: **SEALED — PRODUCT ARCHITECTURE ONLY / NO IMPLEMENTATION AUTHORIZATION.**
