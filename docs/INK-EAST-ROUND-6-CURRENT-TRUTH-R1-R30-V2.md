# Round 6 — Identity / Role / Permission — Current Truth R1–R30 V2

Status: **CANDIDATE / NOT SEALED**. No implementation authorization. Do not enter Round 7.

This is the source-completeness-repaired one-file candidate. Earlier consolidations, premature seal, reopen records, and audit files remain historical provenance. This file carries accepted Round 6A–6J, applicable cross-round corrections, and R6-R1 through R6-R30.

## A. Architecture method and object model

Architecture must be precise about boundaries without making contextual rules rigid. Later work distinguishes HARD INVARIANT, ADAPTIVE RULE, DEFERRED CALIBRATION, and EXAMPLE. No global user levels, universal prestige score, or one scalar may replace the multidimensional model. Ordinary users keep the simple path; advanced Organization/delegation/staff/recovery controls appear only where relevant.

Keep separate: Account; Actor; Requesting Principal where applicable; Executor where different; Display Identity; Stable Platform Identity; Knowledge Entity; Authority-bearing Subject; Claim; Relationship; Role; Permission; Grant Authority; Scope; Acting Context; Authorship; Publisher; Operator.

Knowledge Entity is the broad graph concept and may include Person, Organization, Place, Work, Concept, Event/Dynasty/Period and future objects. Authority-bearing Subject is the narrower authorization concept; current primary kinds are Person and Organization. Non-agent graph entities do not gain operational permissions merely because they are graph entities. Organization is the base organizational type; Institution is a subtype. Platform-owned/Official/Editorial/Partner describe relationships/capacities/provenance, not peer entity types.

## B. Identity, pseudonymity, knowledge records, and representation

Stable Platform Identity is durable platform continuity, not proof of a verified real-world Person. Display Identity is mutable presentation. Real-world Person linkage is optional and claim-driven. Ordinary publishing, comments, saves, follows, purchases and personal use may remain pseudonymous and do not require real-world Person resolution. Personal Platform Context may use authenticated Actor + Stable Platform Identity. Multiple legitimate personas may relate to one Person without forced public merge; internal linkage is sensitive and purpose-limited.

Legitimate name/avatar/handle changes do not create a new Stable Platform Identity or silently rewrite historical authorship.

Creating/editing/curating/first-creating a knowledge record about a Person or Organization does not establish identity, representation, official status, control, or operational authority. Any verified linkage is separate and provenance-bearing and does not automatically grant unilateral control over neutral/historical knowledge facts.

Organization authority should normally be exercised through authenticated individual accounts rather than long-lived shared passwords. Representation is scoped, changeable, revocable and time-aware. Organization invitation normally uses the invitee's own account plus explicit Scope. Bootstrap administration is a platform-control relation, not permanent legal ownership.

Actual Actor and public attribution are distinct. Representative publishing, comments and replies require clear Acting Context. Do not use an invisible sticky Organization identity. Ordinary users default to personal/selected identity and do not see Organization/delegation/control machinery without a relevant relationship. Official Organization speech and personal opinion remain distinguishable. Author, Publisher and Operator may differ; commercial actions preserve the actual Operator plus the relevant acting/asset-owning subject. Multi-author/contributor relationships are first-class rather than one author_id.

## C. Claims, verification, qualification, and public standing

Verify specific claims, not a person's overall truthfulness. Claim types may include real-person, identity-consistency, Organization authenticity, affiliation/employment, representation, credential and legal-ownership claims.

Claim != Relationship != Permission. A verified fact may support a later relationship/grant decision but never silently creates one. Unverified != false. Claim lifecycles may differ; one disputed/expired claim first affects that claim rather than automatically invalidating the whole account. Organization authenticity does not certify every publication/opinion.

Claim/attestation provenance preserves who/which Organization asserted or confirmed the claim and, for Organization attestations, the authorized Actor/authority context producing it.

Contributor Qualification != Identity Verification. Expertise Scope is bounded. Qualification does not grant Work Recognition. Strong ordinary-user work remains eligible under the separate work-level system. Organization attestation proves only scoped facts. Partner/Official/Platform relationships do not automatically create qualification, Recognition evidence, reviewer standing, governance authority or ranking privilege. Verification does not automatically increase Recommendation/Ranking/Recognition/Governance. Membership cannot purchase factual verification, expertise, reviewer standing, Governance Authority or Work Recognition.

Public presentation explains what was verified and avoids prestige/status stacking. Profile context does not automatically determine a work's standing.

## D. Permission, roles, grant authority, and execution

Permission is atomic and scoped. Role is a usable permission bundle, not a trust/prestige level. Underlying permissions remain granular, including granular content operations. Separate at minimum content operations, member management, identity/representation, analytics, commercial/finance, security/audit and Entity Control Authority. Content admin does not imply finance/security/control; member management does not imply Entity Control; engineering/operations access does not imply unrelated business authority.

Early Organization UX may expose a small number of understandable preset roles while preserving granular underlying permissions. Custom Roles remain extensible/later-product machinery, not status hierarchy.

Least Privilege is default. Use Permission != Grant/Delegate Permission. Manage Members/Manage Roles cannot manufacture higher authority. Custom Roles cannot contain permissions the creator is not authorized to grant. Self-elevation requires explicit Grant Authority and current checks. Expanding a shared Role/template is itself a grant event to affected holders and requires authority to grant the added Permission within affected Scope; high-impact bulk expansion may require proportionate controls and preserves provenance.

Protected capability without a current valid authorization source granting required Permission + Scope is not implicitly allowed. Ordinary public actions intentionally requiring no special Permission remain ordinary product actions. No routine universal Organization-side super-admin may bypass all controls by label alone.

Multiple valid authorization sources may coexist. Compute Effective Permission rather than highest Role. Conflicts resolve at Permission + Scope. Applicable security Deny/restriction overrides ordinary Allow within Scope. Consequential execution rechecks current authority/security context. Opening a page while authorized does not preserve stale authority for later commit. Revoking one path removes only authority from that path; independent valid grants remain unless separately affected. Revocation changes future authority without erasing prior authorship/audit/provenance or draft history.

Emergency Revocation is distinct from normal offboarding/revocation and may immediately invalidate sensitive current authority while preserving historical provenance.

Delegation is non-transitive by default; re-delegation requires explicit authority. Temporary/context-bounded delegation is supported without a universal fixed expiry.

## E. Derived authority, pending state, tokens, approvals, concurrency

Derived grants preserve enough source lineage to understand their authority path. If an upstream source expires, is revoked, narrowed, corrected or found invalid, downstream authority is re-evaluated according to dependency, independent valid sources, current Scope and security state. Do not blindly cascade-delete all downstream authority where independent later authority exists.

Pending invitations, transfers, delegations and deferred authority changes revalidate source authority, Scope, validity and current security context when they activate or execute. Creation while authority existed does not make them irrevocable bearer rights.

Sessions, API/access tokens, delegated credentials, signed links and cached authorization decisions carry authority; they do not become permanent authority sources after underlying authority changes. Consequential execution honors current validity using risk-appropriate recheck/invalidation/refresh. Exact token technology and lifetime are deferred.

When a safeguard requires independent approval, separation of duties or multi-person control, independence is contextual integrity, not merely different account IDs. The same natural person, same effective decision-maker, or controlled alternate personas/automation cannot manufacture independence. Distinct authorized people inside the same Organization may still satisfy a legitimate independent-review or dual-control requirement when genuinely separate for that decision and not disqualified by relevant conflict/common control. This does not require universal real-name verification or unrestricted identity linkage.

Consequential approval/confirmation/acceptance binds to the material operation actually approved: target, recipient, Scope, authority changed/granted and other security-relevant parameters. Material change requires re-evaluation where appropriate.

Consequential control/representation/grant/sensitive-role changes finalize against a coherent current state. Concurrent/intervening changes cannot let individually valid stale decisions combine into an invalid resulting state. Exact transaction/locking technology is deferred.

Invitations, approvals, acceptances, transfers and comparable bounded authority artifacts have explicit lifecycle semantics preventing unintended repeated use while allowing safe retry/idempotent processing. Expired, revoked, consumed, replaced or materially superseded artifacts do not silently regain validity.

## F. Actor / Principal / Executor / automation

Distinguish human Actors, authorized bots/agents, platform service actors, Requesting Principal and actual Executor. Automation cannot masquerade as a human.

Where applicable preserve automated actor identity, controller/authorizer, grant source, Scope, expiry/revocation, represented subject, Requesting Principal and Executor. Automation does not inherit human reviewer/governance standing.

A service/worker may have broad technical capability, but when acting for a user or Organization it cannot use its broader capability to bypass the principal's authorization or Scope. Platform-originated moderation/security/legal/recovery/maintenance actions use explicit platform authority and provenance.

Where a service executes for another principal, consequential provenance preserves both the requesting/authorizing principal and actual executor.

## G. Stable authority identity, linked personas, Organization control and transitions

Permissions, scopes, approvals, grants and authority relationships bind to stable internal object identity, not only mutable/reusable username, handle, email, phone, URL or domain. Re-registration or later possession of the same visible identifier does not restore prior Stable Platform Identity, private data, trust/history, claims, qualifications, reviewer/governance standing, Organization roles/control or security state. Reassignment of a visible identifier does not transfer authority to a different object. Legitimate recovery/relinking is separate and evidence-based.

Accounts/personas associated with the same real-world Person do not automatically share Organization roles, Entity Control, staff capacity, qualification use, reviewer/governance capability or comparable standing. Projection/rebinding is explicit. Internal Person linkage alone is not an Account Recovery factor or permission bridge.

Entity Control Authority is the platform control concept; Legal Ownership remains a separate Claim. Highest control may be shared. Control Continuity prevents accidental orphaning proportionate to risk/value/complexity but does not forbid intentional closure/dissolution/archive. Ordinary content/member authority does not automatically grant control transfer, recovery mutation or Organization deletion. High-impact control transfer may require recipient acceptance, step-up, contextual evaluation, hold, independent approval or human review according to risk; no universal waiting period/two-person rule. Control transfer does not transfer personal trust/qualification/governance/Recognition history.

Account Recovery != Organization Control Recovery. Recovering account/email/session access does not prove Organization control. Current possession of domain/email/phone/social channel is evidence, not conclusive proof. High-value/contested recovery may use historical control, authenticity, representation, previous-controller relations, independent corroboration, safe notification, Protective Hold, conflict checks and human review. No universal evidence checklist/score/wait time.

Knowledge-record reconciliation, real-world merger/succession, Organization split, subject correction and operational-control migration are different events. None automatically unions all controllers, roles, grants, delegations or sensitive authority. Operational authority migration requires explicit scoped reconciliation with provenance. Organization hierarchy does not automatically imply permission inheritance. Historical attribution remains accurate.

Legitimate Joint Action is allowed where product semantics require it. Each subject independently authorizes its participation. Cross-entity permission fusion is prohibited.

## H. Staff, authorization-policy governance, conflicts, and appeals

Platform Staff capacity is separate from community identity and does not create personal qualification/reviewer/governance standing or Work Recognition. Internal responsibility domains remain separated. Apply Need-to-know, Purpose Limitation, masking/minimization, and preferably JIT/temporary elevation for high-sensitivity work. High-risk elevation may require Business Justification and independent approval; requesters do not self-approve where separation of duties is warranted. Break-glass is emergency-only, short-lived and strongly audited.

Support/debugging must not silently impersonate users. Staff cannot bypass Recognition, natural ranking, Reviewer Trust, Contributor Qualification or governance through a universal hidden field; interventions use the appropriate system and preserve provenance. Engineering operations authority does not automatically imply business/finance/moderation/verification/user-data/Organization-control authority. High-impact irreversible/bulk staff operations may use proportionate extra controls. High-privilege actions enter dedicated staff audit. Offboarding revokes active internal authority/sessions/credentials while preserving history.

Material production/admin capability uses a separate internal work-security boundary appropriate to risk; compromise of an ordinary community session must not automatically yield production/admin authority merely because the same Person is staff.

Changing authorization policy, sensitive role semantics, grant rules or control rules is itself a scoped, permissioned, auditable high-sensitivity operation. Engineering/deployment capability alone does not grant authority to redefine business/security/Organization-control/verification/governance permissions.

Conflict of Interest is first-class across consequential Recognition review, qualification, identity/representation verification, Organization control/recovery, appeals/corrections, staff actions and relevant commercial/Partner contexts. Conflict does not automatically disqualify in every case; use proportionate disclosure, recusal, exclusion from consequential evidence, extra independent review or escalation. Detection is privacy- and purpose-limited.

Reviewer identity is sensitive governance data. Internal attribution may exist for integrity/audit but is least-privilege and must not casually flow into Recommendation, profiles, commercial targeting or social features.

Appeal, Evidence Reversal and Re-evaluation are distinct. No universal fixed appeal count. Duplicate unchanged submissions may be consolidated/throttled; materially changed basis may reopen. Filing an appeal does not automatically restore risky capability. A consequential appeal must not be architected so a materially conflicted original decision-maker is always sole final reviewer; use an independent route appropriate to context. No universal two-person rule.

## I. Identity abuse/disputes and lifecycle

Display Identity and Stable Platform Identity are separate. Legitimate display changes do not create new identity/rewrite history. Same-name collision alone is not deceptive representation.

Evaluate Deceptive Representation contextually using name/handle, avatar/likeness, biography, Organization marks/branding, visual presentation, claimed affiliation/authorization and surrounding behavior. Synthetic likeness, cloned voice and other digital impersonation are included when used deceptively. Parody/Fan/Commentary identities may exist when sufficiently non-confusing and not falsely official/authorized.

Identity Dispute != Username/Handle Dispute. Trademark, Copyright and Impersonation are separate tracks even when overlapping. Report/dispute != guilt. Reporting ability != evidentiary authority. A Claim dispute first affects that Claim. Serious/systematic identity or credential fraud may escalate after evidence/review. High-risk cases may justify proportionate temporary protection before final adjudication when money, official notices, Organization control or account integrity is materially at risk. Identity challenges remain claim-proportional and privacy-minimizing. Historical attribution is time-aware and preserves Authorship, Publisher, Operator and Representation-at-the-time.

Account, Stable Platform Identity, Authority-bearing Subject and Relationship lifecycles are separate. Deactivate, Suspend, Close and Delete are distinct. Data disposition is category-specific rather than one universal delete flag. Account closure does not automatically erase public Works, citations, Organization history or provenance, while private-data minimization/deletion remains separately governed. Inactivity != death/fraud/abandonment/entitlement transfer and does not by itself trigger default deletion of public knowledge.

Deceased-user handling is separate. Guardian/successor/executor/legal representative does not inherit login identity, cannot continue posting as the represented/deceased person, and does not automatically receive private messages/private account data/unrestricted private-data access. Any lawful/product-supported exception is separate, scoped, purpose-limited, minimized and auditable. Minors/guardian relation is reserved without prematurely fixing age/consent/legal rules. Guardian/legal representative/executor/authorized representative is a Relationship, not identity substitution.

Person-specific trust/qualification/governance standing is non-transferable. Personal Account/Stable Platform Identity is generally non-transferable; Organization control/representation may transfer separately. Dissolved/inactive/historical Organizations may remain historical subjects with preserved publications, representation history and provenance. Organization rename/merge/split/succession preserve provenance rather than rewrite history. Merge is high-risk/auditable with no trust summation; Split is first-class and auditable. Relationship termination is time-aware. Disputes may place proportionate Protective Hold on irreversible changes.

Account deletion, private-data deletion, Work withdrawal, legal/policy removal, profile anonymization/hiding, public-knowledge retention and audit/legal retention are separate operations. Where lawful/privacy-compatible, a minimal privacy-safe Tombstone may preserve stable references without continuing to expose removed content/private data. Historical Recognition and current availability/recommendation/policy state are separate.

## J. Provenance, privacy, and current execution security

For consequential actions preserve enough privacy-appropriate decision-time provenance to reconstruct why an action was allowed, limited, challenged, denied or escalated at that time. Where material include authenticated Account, actual Actor, Requesting Principal, Executor, Acting Context/subject, grant/delegation/Relationship/Scope references or versions, authorization-source lineage, applicable restriction, material policy/rule version, security result, timestamp and outcome.

Accountability audit/provenance records are not ordinary mutable business content. Ordinary admin/content permissions cannot silently erase or rewrite them. Corrections are normally additive/versioned/linked. Exceptional audit handling is separately authorized/audited. Privacy/legal deletion and retention still apply.

Identity-linkage and anti-abuse correlation are sensitive and purpose-limited. Shared device/IP/timing/behavior/graph signals may justify risk investigation but do not automatically establish factual identity, affiliation or public social relationship. Verification uses least-sensitive sufficient evidence where feasible. Reviewer identity, COI data, identity linkage and recommendation telemetry remain purpose-bounded/least-privilege. Multi-account linkage does not imply public identity merge.

Static Permission is not enough for every action. Round 5 remains the contextual execution-security engine with Allow, bounded Allow, Step-up/Friction, Protective Hold, Local Restrict, Capability Suspend, Human Review and account-level action when justified. Sensitive Operations Guard protects high-impact identity/control/representation/credential/grant-policy mutations where justified. This is adaptive, not a hidden level.

## K. R1–R30 map

R1 A; R2 B; R3 C; R4 J; R5 G; R6 G; R7 F; R8 H; R9 D; R10 J; R11 B; R12 B; R13 G; R14 G; R15 B; R16 D; R17 E; R18 D; R19 E; R20 E; R21 E; R22 E; R23 F; R24 F/J; R25 G; R26 E; R27 E; R28 E; R29 I; R30 H.

## L. Adaptive/deferred calibration

Do not lock universal real-name verification, controller counts, two-person rules, appeal counts, document counts, recovery score, cooling duration, token lifetime, database-locking technology, retry mechanism, approval-binding technology, staff-device/network technology, public role naming, age/consent rules, or fixed recovery evidence list. Those remain later context/risk calibration within the hard boundaries above.

## M. Gate

This V2 candidate is **NOT SEALED**. Mandatory next steps: complete source-to-final parity against accepted Round 6A–6J, applicable accepted cross-round amendments/corrections and R1–R30; then freeze this exact V2 file and run the comprehensive adversarial matrix plus pairwise contradiction review. Any unresolved material blocker prevents seal. Until both gates pass: Round 6 remains reopened, Round 7 remains blocked, implementation remains unauthorized.