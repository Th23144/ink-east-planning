# Project 3 Product Architecture V1 — Round 6 Source-to-Final Parity Re-audit

> Status: **IN PROGRESS — ROUND 6 REOPENED / DO NOT SEAL / DO NOT ENTER ROUND 7**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This is a clean-room re-verification of Round 6 after the prior seal was reopened. The method is deliberately stricter than the previous consolidation check: every accepted source rule is mapped to the current Final Consolidation, and a separate fresh adversarial review is performed rather than assuming that prior acceptance or prior sealing proves correctness.

## 0. Source set

Primary accepted Round 6 source comments:

- Round 6A — PR comment `5634894586`
- Round 6B — PR comment `5634983717`
- Round 6C — PR comment `5635054796`
- Round 6D — PR comment `5635610369`
- Round 6E — PR comment `5635850274`
- Round 6F — PR comment `5635930826`
- Round 6G — PR comment `5645760255`
- Round 6H — PR comment `5645806486`
- Round 6I — PR comment `5645896505`
- Round 6J — PR comment `5645916701`

Later accepted amendment/audit sources:

- `INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md` — A1–A24
- `INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md` — A25–A36
- `INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-3.md` — A37–A47
- `INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md` — F1–F10

Comparison target:

- `INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-FINAL.md`

Status vocabulary used below:

- `PRESENT` — current Final preserves the accepted rule materially and without weakening it.
- `PRESENT BUT WEAKENED / AMBIGUOUS` — related text exists, but an implementation could legitimately miss part of the accepted rule.
- `MISSING` — accepted requirement is not carried into the current Final.
- `SUPERSEDED BY LATER ACCEPTED RULE` — old wording is intentionally replaced/narrowed by a later accepted amendment.
- `OUT OF ROUND-6 SCOPE` — cross-round rule remains authoritative elsewhere but should not be duplicated as Round 6 current truth.

A rule is not marked PRESENT merely because a reader could infer it from several unrelated paragraphs. The current-truth document must be implementation-safe.

---

# 1. Round 6A parity

| ID | Accepted source rule | Status in current Final | Current location / issue |
|---|---|---|---|
| 6A-01 | Account, Identity, Entity, Relationship, Role, Permission are separate | PRESENT | §§1–2; Identity is refined into Display/Stable Identity |
| 6A-02 | Person, Institution, Platform-owned Entity were independent entity concepts | SUPERSEDED BY LATER ACCEPTED RULE | A16 + F4 replace this with Organization subtype model and platform-owned as relationship/capacity |
| 6A-03 | Organization access normally uses individual user accounts, not long-term shared passwords | PRESENT | §4 |
| 6A-04 | Role is delegated work authority, not Account Trust / Reviewer Trust / Contributor Qualification / professional authority / Work Recognition | PRESENT | §§7, 21 |
| 6A-05 | Final permission uses role/scope + context/security/sensitive-operation checks | PRESENT | §§8, 19–20 |
| 6A-06 | Consequential actions require clear Acting Context | PRESENT | §§10, 20, subject to 6D repair below for all representative public speech |
| 6A-07 | Author and Publisher may differ and remain attributable | PRESENT | §10 |
| 6A-08 | Representation is scoped, changeable, suspendable, revocable | PRESENT | §6 |
| 6A-09 | Role / representation / organizational-relationship changes require durable audit history, not silent overwrite | PRESENT BUT WEAKENED / AMBIGUOUS | Historical attribution and relationship time semantics exist, but a generic mutation-audit requirement for role/representation changes is not explicit |
| 6A-10 | No generic trust/identity ladder | PRESENT | §§1, 21 |

Round 6A repair blocker: **6A-09**.

---

# 2. Round 6B parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6B-01 | Organization creation != verified representation | PRESENT | §6 |
| 6B-02 | Creator bootstrap administration != permanent ownership | PRESENT | §6 |
| 6B-03 | Ownership Continuity / no single irreplaceable person | SUPERSEDED BY LATER ACCEPTED RULE | A17/A18/F3 -> Entity Control Authority / Control Continuity, shared controllers, intentional closure allowed; §11 |
| 6B-04 | Representation normally established through invite + acceptance on invitee's own personal account, with scope | PRESENT | §§4, 6; wording should remain explicit in revalidated consolidation |
| 6B-05 | Organization roles express operational authorization; public roles simple, underlying permissions granular | PRESENT | §7 |
| 6B-06 | Sensitive Authority separated from ordinary publish/edit/member management | PRESENT | §11 |
| 6B-07 | Control transfer uses bilateral/recipient confirmation, step-up, contextual risk, adaptive cooling/hold/review | PRESENT | §11 |
| 6B-08 | No orphan institution | SUPERSEDED BY LATER ACCEPTED RULE | F3: prevent accidental orphaning but allow intentional closure; §11 |
| 6B-09 | Offboarding revokes current authority without erasing authorship/publisher/audit history | PRESENT | §§10, 15 |
| 6B-10 | Hijack/control recovery uses multiple contextual/historical proofs, not only current email/phone; privacy-minimizing | PRESENT | §§12, 17, but recycled-channel risk is separately red-teamed below |
| 6B-11 | Organization Acting Context explicit and retained in audit/provenance | PRESENT | §§10, 20 |
| 6B-12 | High-impact dual control is optional/contextual, not universal or a rank | PRESENT | §11 |

No direct source-loss blocker in 6B, but the fresh recovery audit below identifies a new channel-recycling safeguard.

---

# 3. Round 6C parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6C-01 | Permission atomic; Role permission bundle, not trust/status | PRESENT | §7 |
| 6C-02 | Permission domains separated | PRESENT | §7; Ownership Control updated to Entity Control Authority |
| 6C-03 | Content permissions granular | PRESENT | §7 |
| 6C-04 | Member management != ownership/control | PRESENT | §7 |
| 6C-05 | Finance/commercial != content administration | PRESENT | §7 |
| 6C-06 | Security/audit != normal content administration | PRESENT | §§7, 13 |
| 6C-07 | Scope is part of authorization | PRESENT | §§7–8 |
| 6C-08 | Granted permission does not guarantee current execution; Round 5 can step-up/deny | PRESENT | §§8, 19 |
| 6C-09 | Custom Roles may come later; early UX small understandable presets | PRESENT | §7 |
| 6C-10 | No routine Universal Super Admin | PRESENT | §§7, 13 |
| 6C-11 | Least Privilege default | PRESENT | §§7, 13 |

Round 6C source parity is currently strong. A separate authorization-conflict wording gap appears under 6E-02.

---

# 4. Round 6D parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6D-01 | Actual Actor != public attribution | PRESENT | §§4, 10 |
| 6D-02 | Representative actions require explicit Acting Context | PRESENT BUT WEAKENED / AMBIGUOUS | Current §10 explicitly requires it for consequential actions; this can be misread to permit hidden/sticky organization attribution for low-risk public comments/replies |
| 6D-03 | Author / Publisher / Operator may differ | PRESENT | §10 |
| 6D-04 | Official statements and personal opinions distinguishable | PRESENT | §10 |
| 6D-05 | Personal-private actions remain personal | PRESENT | §10 |
| 6D-06 | Organization representation does not create governance authority | PRESENT | §10 |
| 6D-07 | Commercial actions record operator and acting/asset-owning entity | PRESENT | §10 |
| 6D-08 | Attribution history auditable and not silently overwritten | PRESENT | §§10, 15; generic mutation-audit wording still needs 6A-09 repair |
| 6D-09 | Ordinary user follows a simple personal path | PRESENT | §1 and ordinary pseudonym model |
| 6D-10 | Ordinary publishing/comments/saves/follows/purchases are attributed to personal identity absent delegated context | PRESENT BUT WEAKENED / AMBIGUOUS | Private actions are explicit; ordinary public comments/publishing are not stated with equal clarity |
| 6D-11 | Ordinary users should not see organization/delegation complexity unless applicable | PRESENT | §1 |
| 6D-12 | Underlying separation remains extensible for later relationships/verification/recovery | PRESENT | §2 |

Round 6D repair blockers: **6D-02, 6D-10**.

---

# 5. Round 6E parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6E-01 | Multiple authorization sources combine into Effective Permission | PRESENT | §8 |
| 6E-02 | Permission conflicts resolve at Permission + Scope, not role-name hierarchy | PRESENT BUT WEAKENED / AMBIGUOUS | §8 merges grants and applies deny, but does not explicitly restate that conflict semantics are permission/scope based and role names never win conflicts |
| 6E-03 | Security-relevant Explicit Deny overrides ordinary Allow | PRESENT | §8 |
| 6E-04 | Effective permission retains source provenance | PRESENT | §§8, 20 |
| 6E-05 | Revoking one path removes that path only; independent grants remain | PRESENT | §9 |
| 6E-06 | High-impact action re-checks authorization at final commit | PRESENT | §8 |
| 6E-07 | Revocation changes future capability, not historical fact; prior authorship/audit/existing drafts not silently erased | PRESENT BUT WEAKENED / AMBIGUOUS | History is preserved, but the accepted existing-draft/non-destructive revocation semantics are not explicit |
| 6E-08 | Delegation non-transitive by default | PRESENT | §9 |
| 6E-09 | Temporary delegation supported with bounded/contextual expiry | PRESENT | §9 |
| 6E-10 | One Action = one Acting Entity | SUPERSEDED BY LATER ACCEPTED RULE | F2 allows legitimate Joint Action while prohibiting permission fusion; §§9–10, 20 |
| 6E-11 | Emergency Revocation distinct from normal offboarding | PRESENT | §9 |
| 6E-12 | Last high-authority controller cannot disappear through ordinary path | SUPERSEDED BY LATER ACCEPTED RULE | F3 preserves accidental-orphan protection while allowing intentional closure; §11 |

Round 6E repair blockers: **6E-02, 6E-07**.

---

# 6. Round 6F parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6F-01 | Staff is separate internal relationship from community identity | PRESENT | §13 |
| 6F-02 | Staff authority split by responsibility domain | PRESENT | §13 |
| 6F-03 | Need-to-know + Purpose Limitation | PRESENT | §13 |
| 6F-04 | Sensitive exposure minimized; masking/scoped unlocks where suitable | PRESENT | §13 |
| 6F-05 | Prefer JIT over standing privilege | PRESENT | §13 |
| 6F-06 | High-risk access may require Business Justification | PRESENT | §13 |
| 6F-07 | Separation of Duties; requester should not self-approve consequential elevation | PRESENT | §13 |
| 6F-08 | Break-glass emergency-only, short-lived, audited | PRESENT | §13 |
| 6F-09 | Support/debug does not silently impersonate user; represented staff actions attributed/audited | PRESENT | §13 |
| 6F-10 | Staff power does not create personal governance/reviewer/contributor/Recognition standing | PRESENT | §13 |
| 6F-11 | Staff cannot bypass Recognition/recommendation/governance through hidden universal fields | PRESENT | §13 |
| 6F-12 | Engineering access does not imply business/finance/moderation/verification/control authority | PRESENT | §7 / §13 |
| 6F-13 | High-impact irreversible/bulk actions may need added confirmation and/or multi-person approval based on risk | PRESENT BUT WEAKENED / AMBIGUOUS | Current added-approval wording is centered on control transfer; generic staff bulk/irreversible operations are not explicit |
| 6F-14 | High-privilege staff actions enter independent Staff Audit Trail | PRESENT | §13 |
| 6F-15 | Staff offboarding revokes internal authority/sessions/credentials without erasing history | PRESENT | §13 |
| 6F-16 | Service Account / Automated System first-class Actors; no human masquerade | PRESENT | §4 / §13 conceptually; A22 controller/authorizer provenance remains weakened below |

A10's separate high-sensitivity internal security boundary is PRESENT in §13.1.

Round 6F repair blocker: **6F-13**.

---

# 7. Round 6G parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6G-01 | Verification applies to specific Claim, not overall truthfulness | PRESENT | §5 |
| 6G-02 | Real-person / Identity / Organization Authenticity / Affiliation / Representation / Credential claims distinct | PRESENT | §5 |
| 6G-03 | Contributor Qualification separate from Identity Verification | PRESENT | §§1, 5, 21 |
| 6G-04 | Expertise Scope is bounded; qualification in one scope does not imply authority outside it | PRESENT BUT WEAKENED / AMBIGUOUS | Final rejects broad Expertise Scope from attestation but does not explicitly preserve scope non-transfer |
| 6G-05 | Contributor Qualification does not grant Work Recognition; ordinary strong works remain Recognition-eligible | PRESENT BUT WEAKENED / AMBIGUOUS | System separation is present; explicit ordinary-author eligibility is not restated in Round 6 Final |
| 6G-06 | Organization verification proves authenticity, not correctness of every publication | PRESENT | §5 |
| 6G-07 | Partner separate from Verification and Recognition | PRESENT BUT WEAKENED / AMBIGUOUS | Partner is modeled as relationship/capacity, but no explicit `Partner != Verification/Recognition` statement remains |
| 6G-08 | Official is platform-owned relationship/state, not verification badge | PRESENT | §§3, 18 |
| 6G-09 | Verification Claims preserve issuer/provenance | PRESENT | §5 |
| 6G-10 | Unverified != False | PRESENT | §5 |
| 6G-11 | Claim types have different lifecycles; no universal re-verification interval | PRESENT | §5 |
| 6G-12 | Expiry/revocation of one claim affects that claim first; no automatic spillover | PRESENT | §5 |
| 6G-13 | Historical content preserves attribution/context valid at publication time | PRESENT | §§6, 10, 15 |
| 6G-14 | Public presentation explains what was verified; no ambiguous universal check | PRESENT | §18 |
| 6G-15 | VIP cannot purchase verification/qualification/reviewer/governance/expertise | PRESENT | §18 |
| 6G-16 | Verification does not automatically increase Ranking, Recommendation, Recognition, or Governance authority | PRESENT BUT WEAKENED / AMBIGUOUS | Several separations imply this, but the direct anti-leak rule is missing |

Round 6G repair blockers: **6G-04, 6G-05, 6G-07, 6G-16**.

---

# 8. Round 6H parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6H-01 | Display Identity and Stable Identity separate | PRESENT | §§2–3 |
| 6H-02 | Legitimate name changes do not create new identity or rebuild history | PRESENT | §3 |
| 6H-03 | Pseudonym and legal identity may coexist; internal linkage need not be public | PRESENT | §§3, 17 |
| 6H-04 | Same-name collisions are normal and not impersonation by themselves | MISSING | Must be restored explicitly |
| 6H-05 | Impersonation judged by Deceptive Representation using name/avatar/bio/marks/visual presentation/claimed relationship/context | MISSING | Must be restored explicitly |
| 6H-06 | AI likeness, cloned voice, digital impersonation included in identity-abuse architecture | MISSING | Must be restored explicitly |
| 6H-07 | Parody/Fan/Commentary accounts may exist when non-confusing and not falsely official | MISSING | Must be restored explicitly |
| 6H-08 | Identity Dispute and Username/Handle Dispute are separate | MISSING | Must be restored explicitly |
| 6H-09 | Trademark, Copyright, Impersonation remain separate policy tracks even if facts overlap | MISSING | Must be restored explicitly |
| 6H-10 | Claim dispute first affects disputed claim, not entire account | PRESENT | §14 |
| 6H-11 | Serious systematic identity/credential fraud may escalate broader enforcement | PRESENT | §14 |
| 6H-12 | Report/dispute != guilt | PRESENT | §12 principle; should also be restated in dispute section |
| 6H-13 | High-risk impersonation may justify proportionate temporary protective action | PRESENT | §14 |
| 6H-14 | Identity challenge is claim-proportional and privacy-minimizing; government ID not ordinary trust shortcut | PRESENT | §§3, 17 |
| 6H-15 | Ability to report != authority/evidence needed to establish true identity/representation | MISSING | Must be restored explicitly |
| 6H-16 | Identity history not silently rewritten; historical attribution time-aware | PRESENT | §§10, 15 |
| 6H-17 | Attribution disputes preserve Authorship / Publisher / Operator / Representation distinctions | PRESENT BUT WEAKENED / AMBIGUOUS | Distinctions exist globally, but are not explicitly protected in the dispute path |
| 6H-18 | Major disputes support Appeal, Reasoned Record, Evidence Reversal | PRESENT | §14 |

Round 6H is the largest source-to-final completeness failure. Repair blockers: **6H-04–09, 6H-15, 6H-17**.

---

# 9. Round 6I parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6I-01 | Account / Entity / Relationship lifecycle separate | PRESENT | §15 |
| 6I-02 | Deactivate / Suspend / Close / Delete distinct | PRESENT | §15 |
| 6I-03 | Account closure does not destructive-cascade works/references/discussions/Recognition/provenance | PRESENT | §§15–16 |
| 6I-04 | Data disposition category-specific | PRESENT | §15 |
| 6I-05 | Public Knowledge Integrity and Privacy coexist | PRESENT | §§15–17 |
| 6I-06 | Account closure does not silently rewrite public authorship/history | PRESENT | §15 |
| 6I-07 | Inactivity != death/fraud/abandonment/entitlement transfer | PRESENT | §15 |
| 6I-08 | Do not default-delete public knowledge merely because account inactive for fixed period | MISSING | Must be restored explicitly |
| 6I-09 | Deceased-user handling separate; successor does not inherit login identity | PRESENT | §15 |
| 6I-10 | Successor authority is scoped; does not inherit private messages, personal governance/reviewer/contributor standing, or posting-as-deceased | PRESENT BUT WEAKENED / AMBIGUOUS | Non-inheritable standing and no identity takeover are present; explicit private-message boundary is missing |
| 6I-11 | Person-specific capabilities/qualification/trust/governance non-transferable/non-inheritable | PRESENT | §§15, 21 |
| 6I-12 | Organization dissolution preserves historical entity/publications/representation/provenance | PRESENT | §15 |
| 6I-13 | Rename/merger/split represented via relationships/provenance, not historical overwrite | PRESENT | §15 |
| 6I-14 | Entity Merge high-risk/auditable; trust/governance evidence not mechanically summed | PRESENT | §15 |
| 6I-15 | Entity Split first-class; wrongly conflated subjects can be separated and claims/works/relationships/authority reassigned | PRESENT BUT WEAKENED / AMBIGUOUS | Final says merge/split high-impact, but not the explicit first-class correction/reassignment semantics |
| 6I-16 | Personal account transfer generally disallowed; entity control may transfer separately | PRESENT | §15 |
| 6I-17 | Handle / Display Name / Stable Entity ID separate; names/URLs never identity primary keys | PRESENT BUT WEAKENED / AMBIGUOUS | Handle/display != Stable ID is present; URL/identifier-reuse implication is not explicit |
| 6I-18 | Ownership/Identity dispute may Protective Hold irreversible changes | PRESENT | §12 |
| 6I-19 | Relationship termination is temporal; historical relationship remains | PRESENT | §§6, 15 |
| 6I-20 | Deletion cannot destroy accountability; privacy/deletion/audit/legal retention distinct | PRESENT | §§15, 21 |

Additional 6I constraint `do not reduce lifecycle to one user.deleted flag` is materially PRESENT, but the revalidated consolidation should restate that Account, identity/subject, relationship, qualification, content and asset lifecycles are separately owned.

Round 6I repair blockers: **6I-08, 6I-10, 6I-15, 6I-17**.

---

# 10. Round 6J parity

| ID | Accepted source rule | Status | Current location / issue |
|---|---|---|---|
| 6J-01 | Organization is base organizational type; Institution subtype | PRESENT | §3 |
| 6J-02 | Replace architecture Owner semantics with Entity Control Authority where legal ownership is not meant | PRESENT | §11 |
| 6J-03 | Control Continuity; multiple highest controllers allowed | PRESENT | §11 |
| 6J-04 | Multi-author/contributor relationships first-class | PRESENT | §10 |
| 6J-05 | Org parent/child relationship does not automatically cascade authority | PRESENT | §3 |
| 6J-06 | Minor/guardian reserved; no premature age/legal rules; no identity substitution | PRESENT | §6 |
| 6J-07 | External bots/AI agents are auditable Actors; no human masquerade or inherited governance identity | PRESENT | §4, but controller/authorizer provenance is weakened under A22 below |
| 6J-08 | Multiple accounts may relate to one person without mandatory public linkage; linkage/public disclosure/abuse evidence distinct | PRESENT | §§3, 17 |
| 6J-09 | Legal representative/executor/guardian/authorized representative are relationships, not identity substitution | PRESENT | §6 |
| 6J-10 | Updated core model included Platform-owned Entity as base peer | SUPERSEDED BY LATER ACCEPTED RULE | F4 removes Platform-owned as base type; current §3 is correct |

Round 6J source parity is otherwise strong.

---

# 11. Cross-round amendments that materially modify Round 6

## 11.1 Relevant and currently preserved

The following are materially present in the Final: A8, A9, A10, A14, A15, A17, A18, A19, A20, A21, A23, A24, A32, A33, A35, A36, A39, A40, A41, A46, A47, F1, F2, F3, F4, F5, F6, F7, F8.

## 11.2 Relevant but weakened/missing

| Amendment | Status | Gap |
|---|---|---|
| A22 | PRESENT BUT WEAKENED / AMBIGUOUS | Final identifies automated Actors, but does not explicitly preserve controlling/authorizing Person/Organization provenance and the controller relation required by A22 |
| A31 | PRESENT BUT WEAKENED / AMBIGUOUS | Final says reviewer identity is least-privilege/audited, but omits explicit purpose boundaries: editorial curiosity is not valid; public-facing editorial does not automatically need identity; do not export reviewer identity into recommendation/profile/commercial/social graph |
| A38 | MISSING | Filing an appeal must not automatically restore a risky capability; restoration/continued restriction is risk/context-sensitive and successful appeal triggers state/evidence repair |
| F10 | PRESENT BUT WEAKENED / AMBIGUOUS | Current Final claims `Round 6A–6J, A1–A47 and F1–F10 are represented here`, which overstates scope because many amendments belong to other rounds/domains. Current-truth consolidation requirement is therefore not yet honestly satisfied |

## 11.3 Superseded relevant amendments

- A16's old `Platform-owned Entity` peer type is superseded by F4.
- A37's `one formal appeal lifecycle` wording is superseded by F1; no fixed appeal count survives.

## 11.4 Out of Round 6 scope but still authoritative elsewhere

These should not be falsely claimed as literally consolidated into Round 6: A1–A7, A11–A13, A25–A30, A34, A42–A45, F9, plus any other cross-round rule whose primary subsystem is scope/Recognition/Recommendation/content classification/moderation rather than identity-role-permission. They remain authoritative in their own amendment layer.

---

# 12. Accepted-rule repair queue — no new product decision required

These are not new architecture proposals. They are requirements already accepted earlier and lost or weakened in the Final. They must be restored before any re-seal:

1. Generic audit trail for role/representation/authority relationship mutations (6A-09).
2. Acting Context for representative public speech, including comments/replies where an Organization/official identity can be used; ordinary users default to personal attribution (6D-02, 6D-10).
3. Permission conflict resolution explicitly at Permission + Scope, never role-name precedence (6E-02).
4. Revocation does not erase existing drafts/history solely because authority ended (6E-07).
5. Risk-based protection for generic high-impact irreversible/bulk staff operations, not only ownership transfer (6F-13).
6. Explicit Expertise Scope non-transfer outside scope; Contributor Qualification does not become Work Recognition; Partner != Verification/Recognition; Verification does not automatically increase ranking/recommendation/Recognition/governance power (6G-04/05/07/16).
7. Restore all missing Round 6H rules: same-name != impersonation; Deceptive Representation factors; synthetic/AI likeness and cloned-voice impersonation; Parody/Fan/Commentary allowance; distinct Identity vs Username disputes; separate Trademark/Copyright/Impersonation tracks; report authority != proof authority; attribution-dispute object distinctions.
8. Restore lifecycle details: no fixed-inactivity public-knowledge deletion; successor cannot inherit private messages or speak as deceased; Entity Split first-class reassignment semantics; mutable handles/names/URLs are not identity primary keys (6I-08/10/15/17).
9. Restore A22 controller/authorizer provenance for bots/agents/service actors.
10. Restore A31 Reviewer-identity purpose limitation in staff/internal access architecture.
11. Restore A38: appeal filing does not automatically restore risky capability.
12. Correct F10/current Final scope statement so it says it consolidates Round 6A–6J plus the **Round-6-relevant effects** of A1–A47/F1–F10, not all cross-round content literally.

---

# 13. Fresh adversarial findings — PROPOSED, NOT YET LOCKED

The clean-room re-audit also found structural risks that were not cleanly resolved by the already-accepted source set. These require explicit user review before they may become new architecture.

## R6-R1 — `Entity` namespace collides with Round 7 Knowledge Graph

**Type: CORRECTION / 真正修正 — PROPOSED**

Current Round 6 Final defines `Entity` as Person or Organization. But the existing content/knowledge architecture already requires a knowledge graph containing Person, Place, Dynasty, Concept, Work, Topic and other knowledge objects. If Round 6 permanently monopolizes `Entity = Person | Organization`, Round 7 must either overload the term or contradict Round 6.

Proposed correction:

- broader platform `Knowledge Entity / 知识实体` may include Person, Organization, Place, Concept, Event/Dynasty, Work and future knowledge objects;
- Round 6 authorization applies to an `Authority-bearing Subject / 权限主体` or equivalent role of an entity, currently Person and Organization;
- non-agent knowledge entities such as Place/Concept do not gain permissions merely because they are graph entities;
- final naming may be simplified, but authorization and knowledge-graph ontology must not share an ambiguous unqualified `Entity` contract.

This is a blocker before Round 7 because Round 7 directly depends on this namespace.

## R6-R2 — Stable Platform Identity / Persona vs real-world Person is underspecified

**Type: CORRECTION / 真正修正 — PROPOSED**

Round 6 correctly allows pseudonymous use without universal real-name resolution, but the current model still risks an implementation that assumes every stable platform identity must resolve to a single real-world `Person Entity`.

Proposed rule:

- `Stable Platform Identity / 稳定平台身份` is platform continuity for a profile/persona; it is not itself proof of legal or real-world identity;
- `Display Identity / 展示身份` is presentation;
- a real-world Person linkage is optional/claim-driven where justified;
- multiple legitimate pseudonymous/professional identities may exist without forced public merging;
- internal linkage, if known, remains sensitive and purpose-limited;
- ordinary actions must not require the platform to invent a verified Person record merely to function.

## R6-R3 — Claim, Relationship and Permission need an explicit non-automatic transition boundary

**Type: HARDENING / 架构加固 — PROPOSED**

Current architecture separates Claim, Relationship and Permission as objects, but does not state strongly enough how they interact.

Proposed invariant:

```text
Claim / evidence of a fact
!=
Relationship / modeled relation
!=
Permission / operational authority
```

A verified employment/affiliation/legal-ownership/credential claim may support a relationship or control decision, but does not automatically create representation or operational permission. Authorization requires an explicit valid authority relationship/grant under the permission model.

This closes a future authority-leak path such as `University employee verified -> can act for university`.

## R6-R4 — Consequential authorization decisions need decision-time provenance snapshots

**Type: HARDENING / 架构加固 — PROPOSED**

The Final preserves current authorization-source provenance, but a later audit must also be able to answer **why an action was allowed/denied at that time**, even after roles/policies/security context change.

For consequential actions, retain privacy-appropriate decision provenance such as actor, acting context, relevant grant/delegation/relationship references or versions, decision/rule version where relevant, security/step-up outcome, timestamp and result. This is not a demand to log every trivial read forever; scope/retention remain risk-based and privacy-limited.

## R6-R5 — Re-registration and recycled identifiers must not resurrect old identity/authority

**Type: NEW SAFEGUARD / 新增保护 — PROPOSED**

After account closure/deletion, a later account that receives the same email, phone, handle, username, domain or other recycled identifier must not automatically inherit the prior account's Stable Identity, claims, trust history, Contributor Qualification, Reviewer standing, Organization roles/control or private data.

Legitimate recovery/re-linking may exist through a separate evidence-based path. Identifier reuse is not identity continuity.

## R6-R6 — High-value Organization recovery must treat recycled control channels as evidence, not proof

**Type: HARDENING / 架构加固 — PROPOSED**

Possession of a domain, email address, phone number or social account may change hands legitimately or maliciously. For material Organization control recovery, current possession of a recycled/reassigned channel must not by itself establish entitlement. Historical control, Organization authenticity, representative authority and independent corroboration remain context-sensitive evidence.

No universal document list or recovery score is proposed.

## R6-R7 — Automated Actors need controller/authorizer provenance and revocation semantics

**Type: HARDENING / 架构加固 — PROPOSED**

This strengthens A22 rather than giving bots human status. For an external agent/bot/service actor, the platform should be able to identify the controlling/authorizing Person or Organization, the authority source/scope, and current revocation state. Automation cannot gain more operational authority than was explicitly delegated, and it cannot inherit human Reviewer/Governance judgment standing.

## R6-R8 — Consequential appeals need independence safeguards without a rigid universal workflow

**Type: NEW SAFEGUARD / 新增保护 — PROPOSED**

Conflict-of-Interest already applies to appeals, but a consequential appeal should not be designed so the same conflicted original decision-maker can always be the sole final reviewer of their own decision. Depending on consequence/risk/resource level, the system may require independent review, separation of duties, escalation or another conflict-controlled route.

This is adaptive, not a fixed `every appeal requires two people` rule.

---

# 14. Mature-platform cross-check — reference, not template

Fresh official-document comparison supports the accepted direction without justifying mechanical copying:

- GitHub Organizations use personal accounts to collaborate through a separate organization, support granular organization roles and recommend multiple owners for continuity rather than a single irreplaceable controller.
- Google Cloud IAM explicitly separates principals, permissions/roles, allow and deny policies; service-account impersonation can retain both the authenticated principal and service account in audit logs, supporting Actor + represented/service identity provenance rather than identity collapse.
- Microsoft Entra PIM emphasizes least privilege, JIT/time-bound privileged access, approval where configured, justification, access reviews and audit history, supporting Round 6 staff/JIT design without requiring Project 3 to copy Microsoft's exact roles or timing.

The mature-platform check does **not** justify fixed controller counts, fixed cooldowns, universal dual approval, fixed appeal counts or enterprise IAM complexity for ordinary users.

---

# 15. Current checkpoint

The previous Round 6 seal remains reopened.

Current findings before any repair:

- multiple accepted source rules are MISSING or WEAKENED in the current Final, especially Round 6H;
- several cross-round Round-6-relevant amendments are incompletely carried forward;
- the current Final overclaims that all A1–A47/F1–F10 are literally represented inside it;
- fresh re-audit found a **Round 7-blocking Entity namespace problem** plus additional identity/authority/recovery safeguards that require user review.

Therefore:

**DO NOT repair by silently editing the old historical Final/Seal to make them appear correct.** After user review of the new proposed findings, produce a new `REVALIDATED` Round 6 consolidation, preserve the old Final/Seal as provenance, run the parity matrix again against the new document, then issue a replacement seal only if every applicable row passes.
