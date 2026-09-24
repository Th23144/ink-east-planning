# Project 3 Product Architecture V1 — Round 6 Revalidation Amendments

> Status: **ACCEPTED — ROUND 6 REVALIDATION AMENDMENTS**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)  
> Relationship to prior records: read this after the Round 6A–6J accepted source records, A1–A47, F1–F10, and `INK-EAST-ROUND-6-SOURCE-TO-FINAL-PARITY-REAUDIT.md`. This file has later precedence for the points it explicitly corrects or strengthens.

These amendments were accepted after the prior Round 6 seal was reopened and the architecture was re-audited from the original accepted source records rather than trusted through the prior consolidation.

The project-wide method remains:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

---

## R6-R1 — Separate Knowledge Entity from identity/authority-bearing subject

**Type: CORRECTION / 真正修正**

Earlier Round 6 wording used `Entity / 主体` primarily for `Person / Organization`. Round 7 will need to represent many other knowledge objects such as Works, Places, Concepts, historical periods/dynasties, editions, passages and other graph nodes. Treating every knowledge-graph entity as an identity/authorization subject would create an immediate ontology conflict.

Canonical distinction:

- `Knowledge Entity / 知识实体` (or equivalent final graph terminology) means an object represented in the knowledge graph. It may include Person, Organization, Place, Work, Concept, Period, Edition, Passage and future domain objects.
- `Identity / Authority Subject / 身份或权限主体` means a subject capable of holding platform identity, representation, control or delegated operating authority. In the current Round 6 architecture this is primarily `Person` and `Organization`.
- A Person or Organization may therefore be both a Knowledge Entity and an Identity/Authority Subject.
- A Place, Work or Concept does not gain login identity, representation authority or permissions merely because it is a Knowledge Entity.

The final public/internal names may be refined in Round 7. The separation itself is a hard boundary.

---

## R6-R2 — Stable Platform Identity does not imply verified real-world Person identity

**Type: CORRECTION / 真正修正**

`Stable Identity / 稳定身份` must not be implemented as a hidden mandatory real-name mapping.

Canonical rule:

- `Stable Platform Identity / 稳定平台身份` may represent durable platform continuity for a pseudonymous, creator or otherwise non-legal-name identity;
- ordinary participation does not require that the platform resolve that identity to a legally identified real-world Person;
- a real-world Person relationship/claim is established only when a specific identity, credential, representation, recovery, legal, safety or integrity purpose justifies it;
- public pseudonymity and internal platform continuity may coexist;
- internal identity-linkage evidence remains purpose-limited and must not be converted into automatic public identity merging.

This strengthens F5/A15/A23 and prevents pseudonym support from becoming cosmetic only.

---

## R6-R3 — Claim, Relationship and Permission do not automatically convert into one another

**Type: HARDENING / 架构加固**

The architecture already separates `Claim`, `Relationship` and `Permission`, but implementation must not silently create automatic conversion paths between them.

Canonical rule:

- a `Claim` is evidence/assertion about a fact;
- a `Relationship` records a relationship that has been validly established;
- a `Permission` grants operational authority within a Scope;
- a verified Claim may support a Relationship decision where the relevant process/policy says it should, but does not automatically create that Relationship;
- a Relationship may be relevant to authorization, but does not automatically grant operational Permission unless an explicit authority/grant rule does so;
- Permission must remain attributable to an explicit authorization source and Scope.

Example:

`University A verifies that Alice is a professor` may establish/support an affiliation Claim. It does **not** by itself authorize Alice to publish official statements for University A, manage the University's entity, or grant permissions to others.

---

## R6-R4 — Consequential decisions require privacy-bounded decision provenance

**Type: HARDENING / 架构加固**

Current authority alone is insufficient to explain why a consequential historical action or governance decision was allowed at the time.

Canonical rule:

For consequential actions/decisions, preserve enough `Decision Provenance / 决策来源记录` to reconstruct, where appropriate:

- actual Actor and Acting Context;
- relevant authority/grant source and Scope;
- important policy/rule/version context;
- resulting decision/action state;
- material review/approval path where applicable;
- references to relevant evidence or risk basis when needed for audit/appeal.

This does **not** authorize indefinite retention of all raw sensitive evidence. Provenance must be purpose-limited, privacy-minimized, retention-aware and capable of referencing protected evidence rather than duplicating it unnecessarily.

Canonical principle:

> **Be able to explain why a consequential decision was valid at the time without turning auditability into unlimited surveillance.**

---

## R6-R5 — Recycled identifiers never inherit identity, trust or authority

**Type: NEW SAFEGUARD / 新增保护**

Email addresses, phone numbers, handles, domains and other human-readable/reassignable identifiers may later be controlled by a different person or organization.

Canonical rule:

- re-registration or reuse of an email, phone number, handle, URL, domain or similar identifier must not automatically restore or inherit a prior Account/Stable Identity;
- recycled identifiers do not inherit Account Trust, Contributor Qualification, Reviewer Trust, Governance Authority, Organization control, private data, historical sessions or personal standing;
- stable Account/Entity identifiers must not depend on reusable names/contact channels;
- legitimate recovery must prove continuity through the appropriate recovery process rather than assuming `same identifier = same subject`.

---

## R6-R6 — Current possession of a recovery channel is evidence, not conclusive Organization control proof

**Type: HARDENING / 架构加固**

A domain, company mailbox, phone number or other recovery channel may change hands legitimately or through compromise.

Canonical rule:

- current control of a domain/email/phone may be useful recovery evidence;
- for high-value, contested or consequential Organization control recovery it must not be treated as conclusive proof by itself;
- recovery may combine historical control, Organization authenticity, representative authority, independent corroboration, existing-controller notification where safe, protective hold, conflict checks and human review according to context;
- the system must account for recycled domains, reassigned numbers, former employees, expired accounts and other continuity breaks.

No universal evidence checklist is fixed here.

---

## R6-R7 — Automated Actors require an auditable authorization chain

**Type: HARDENING / recovery of previously accepted A22 intent**

Bots, agents, service accounts and automated systems are first-class Actors, but their authorization must remain traceable.

Canonical rule:

For consequential automated actions, the system should be able to reconstruct as applicable:

- the automated Actor;
- the Person/Organization/system that authorized or controls it;
- the grant/delegation source;
- authorized Scope/capabilities;
- lifecycle/expiry/revocation state;
- actual Acting Entity where different;
- material execution/audit context.

Automation does not gain independent human judgment, Reviewer Trust or Governance Authority merely because its controller has such standing.

---

## R6-R8 — High-consequence appeals need independence capability without universal bureaucracy

**Type: NEW SAFEGUARD / 新增保护**

An appeal path is not meaningful if the same materially conflicted decision-maker can always be the sole final reviewer of their own consequential decision.

Canonical rule:

- appeal/review architecture must support independence and separation of duties proportional to consequence, error cost, conflict risk and evidence sensitivity;
- material Conflict of Interest may require recusal, independent reviewer(s), escalation or another defensible independent path;
- the original decision-maker may provide context/evidence but must not automatically be the sole final appeal authority where independence is materially required;
- ordinary low-risk cases do not require a universal two-person or committee process;
- reviewer anonymity/sensitive identities remain protected under A30/A31.

---

## R6-R9 — Using a permission and granting a permission are separate authorities

**Type: NEW SAFEGUARD / 新增保护**

The ability to perform an action must not imply the ability to grant that action to another Actor or to oneself.

Canonical rule:

- `Use Permission / 使用权限` and `Grant/Manage Permission / 授权权限` are distinct capabilities;
- `Manage Members`, `Manage Roles`, `Manage Delegation` or Custom Role creation must operate inside an explicit grant ceiling/scope;
- a user cannot create or edit a Role so that it grants permissions beyond the authority they are explicitly allowed to administer;
- a user cannot self-escalate by granting themselves Control, Finance, Security, Verification or other sensitive authority merely because they can manage ordinary roles/members;
- delegated grant authority is non-transitive unless explicitly allowed;
- high-impact grant changes are subject to execution-time security checks, provenance and, where justified, additional approval.

Canonical principle:

> **Having power X is not the same as having power to give X away.**

This is a hard privilege-escalation boundary.

---

## R6-R10 — Audit/provenance records cannot be silently rewritten by ordinary administrative authority

**Type: NEW SAFEGUARD / 新增保护**

An audit trail is not meaningful if the Actor being audited can silently delete or rewrite the record through ordinary business/admin authority.

Canonical rule:

- ordinary Organization/admin/content/business permissions do not inherently include authority to erase or rewrite accountability records;
- material audit/provenance records should be append-only, tamper-evident, versioned or otherwise integrity-protected according to risk;
- corrections should preserve the fact that a correction occurred instead of silently replacing the historical record where accountability matters;
- access and retention remain privacy-, security- and legal-purpose bounded;
- legitimate privacy deletion/minimization and legal retention requirements remain separate from unauthorized history rewriting;
- exceptional audit-maintenance/security operations require separately scoped authority and their own auditability.

---

# Revalidation effect

R6-R1 through R6-R10 are now accepted current architecture.

They do **not** re-seal Round 6 by themselves.

Required next sequence:

1. produce a new `REVALIDATED` Round 6 consolidation rather than silently rewriting the prior provisional Final/Seal history;
2. carry forward every accepted Round 6A–6J rule unless explicitly superseded;
3. carry forward all Round-6-relevant A1–A47/F1–F10 rules and R6-R1–R6-R10;
4. repair every `MISSING` or `PRESENT BUT WEAKENED/AMBIGUOUS` item found by the source-to-final parity audit;
5. perform a second source-to-revalidated parity pass;
6. run contradiction, rigidity, privilege-escalation, privacy and ordinary-user-complexity checks;
7. only after all blockers are resolved may a replacement/revalidated Round 6 seal be issued.

Until then:

- **Round 6 remains REOPENED / NOT FINAL-SEALED**;
- no implementation is authorized;
- do not enter Round 7.
