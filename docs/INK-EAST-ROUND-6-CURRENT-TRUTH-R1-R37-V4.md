# Round 6 — Identity / Role / Permission — Current Truth R1–R37 V4

Status: **CANDIDATE / NOT SEALED**. No implementation authorization. Do not enter Round 7.

This one-file candidate carries accepted Round 6A–6J, applicable cross-round corrections, and R6-R1 through R6-R37. Earlier records remain historical provenance.

## 1. Method and core objects
Architecture must be precise about boundaries without freezing contextual policy. Distinguish HARD INVARIANT, ADAPTIVE RULE, DEFERRED CALIBRATION and EXAMPLE. No global user levels or single prestige/trust score.

Keep separate where applicable: Account, Actor, Requester/Initiator, Authorizing Principal(s), Executor, Display Identity, Stable Platform Identity, Knowledge Entity, Authority-bearing Subject, Claim, Relationship, Role, Permission, Grant Authority, authority-mutation permissions, Scope, Acting Context, Authorship, Publisher and Operator.

Knowledge Entity is the broad graph concept; Authority-bearing Subject is the narrower authorization concept. Person and Organization are current primary authority-bearing subjects. Place, Work, Concept and other non-agent graph entities do not gain operational authority merely because they are graph entities. Organization is the base organization type; Institution is a subtype. Platform-owned/Official/Editorial/Partner are relationships or capacities, not peer entity types.

## 2. Identity, pseudonymity, knowledge records and attribution
Stable Platform Identity is durable platform continuity, not proof of a verified real-world Person. Ordinary pseudonymous use does not require real-world identity resolution. Display Identity is mutable. Real-world Person linkage is optional, claim-driven, sensitive and purpose-limited. Legitimate name/avatar/handle changes do not create a new Stable Platform Identity or rewrite history.

Creating/editing/curating a Person or Organization knowledge record does not establish identity, representation, official status, control or operational authority. Verified linkage is separate and provenance-bearing and does not grant unilateral control over neutral/historical knowledge facts.

Organization authority normally uses authenticated individual accounts rather than long-lived shared passwords. Representation is scoped, changeable, revocable and time-aware. Organization invitation normally uses the invitee's own account plus explicit Scope. Bootstrap administration is platform control, not permanent legal ownership.

Actual Actor and public attribution are distinct. Representative publishing/comments/replies require clear Acting Context. Ordinary users default to personal/selected identity and do not see Organization/delegation/control machinery without a relevant relationship. Official Organization speech and personal opinion remain distinguishable.

Ordinary purchases default to Personal Platform Context. Organization purchasing, if later supported, requires explicit Organization commercial Acting Context and keeps actual Operator plus billing/asset-owning subject. Personal saves/follows/security/preferences remain personal unless a deliberate Organization-scoped equivalent is created.

Author, Publisher and Operator may differ. Multi-author/contribution relationships are first-class. Authorship/contribution does not by itself grant all edit/publish/delete/admin rights over a Work; Work operating rights are separate scoped permissions. Permission changes never rewrite historical attribution.

## 3. Claims, verification and standing
Verify specific Claims, not a person's overall truthfulness. Claim != Relationship != Permission. A verified fact may support a later relationship/grant decision but never silently creates operational authority. Unverified != false. Claim lifecycles may differ; one disputed/expired claim first affects that claim.

Claim/attestation provenance records who or which Organization asserted/confirmed it and, for Organization attestations, the authorized Actor/authority context.

Contributor Qualification != Identity Verification. Expertise Scope is bounded. Qualification does not grant Work Recognition. Organization attestation proves scoped facts only. Partner/Official/Platform relationships do not automatically create qualification, Recognition evidence, reviewer standing, governance authority or ranking privilege. Membership cannot buy factual verification, expertise, reviewer standing, Governance Authority or Work Recognition. Public presentation explains what was verified and avoids prestige stacking.

## 4. Permission, Role, authority mutation and execution
Permission is atomic and scoped. Role is a usable permission bundle, not a trust/prestige level. Content, member, identity/representation, analytics, finance, security/audit and Entity Control authority remain separable. Content admin does not imply finance/security/control; member management does not imply Entity Control; engineering access does not imply unrelated business authority.

Least Privilege is default. Use Permission != Grant/Delegate Permission. The authority to use a capability does not automatically authorize granting, revoking, suspending, restoring, denying/restricting, delegating or changing its Scope. Those are protected scoped authority-mutation operations. Policy may explicitly couple some mutation powers, but never by Role-name inference alone.

Manage Members/Manage Roles cannot manufacture higher authority. Custom Roles cannot include permissions the creator cannot grant. Self-elevation requires explicit Grant Authority and current checks. Expanding a shared Role/template is itself a grant event and requires both template-mutation authority and authority to grant the added Permission in affected Scope. High-impact bulk expansion may use proportionate safeguards and preserves provenance.

A protected capability without a current valid Permission + Scope grant is not implicitly allowed. Ordinary public actions that intentionally require no special Permission remain ordinary product actions. No routine universal Organization super-admin bypass exists merely by label.

Multiple authorization sources may coexist. Effective Permission is computed at Permission + Scope level, not by highest Role. Applicable security Deny/restriction overrides ordinary Allow within Scope. Consequential execution rechecks current authority/security state. Revoking one path removes authority from that path while independent valid grants remain. Revocation changes future authority without erasing historical authorship/audit/provenance or automatically deleting existing drafts.

Delegation is non-transitive by default. Emergency Revocation is distinct from normal offboarding and may immediately invalidate sensitive authority while preserving history.

## 5. Derived authority, pending artifacts, durable decisions, approvals and concurrency
Derived grants preserve enough source lineage to evaluate downstream authority if an upstream source expires, is revoked, narrowed, corrected or found invalid. Independent later authority is not blindly cascade-deleted.

Pending invitations, transfers, delegations and deferred authority changes revalidate source authority, Scope, validity and security context according to their lifecycle. A workflow may explicitly define when a completed authorization decision becomes durable and can survive a later role change of an approver, but durability is never assumed. Target, material semantics, current-state dependencies and security constraints still apply.

Sessions, API/access tokens, delegated credentials, signed links and cached authorization decisions carry authority but do not become permanent authority sources after underlying authority changes.

Independent approval is contextual integrity, not merely different account IDs. Alternate personas/automation under the same effective decision-maker cannot manufacture independence. Distinct authorized people inside one Organization may still satisfy legitimate dual-control where genuinely independent for that decision. This does not require universal real-name verification.

Consequential approval/confirmation/acceptance binds to the material operation actually approved: target, recipient, Scope, authority changed/granted and other security-relevant parameters. Material change requires re-evaluation where appropriate.

Consequential control/representation/grant/sensitive-role changes finalize against a coherent current state. Concurrent/intervening changes cannot combine stale individually-valid decisions into an invalid final state. Exact transaction technology is deferred.

Invitations, approvals, acceptances, transfers and comparable bounded authority artifacts have explicit lifecycle semantics preventing unintended replay while allowing safe retry/idempotent processing.

## 6. Requester, authorizer, executor and automation
Requester/Initiator is not automatically an Authorizing Principal. A workflow may have one requester, one or more Authorizing Principals and a distinct Executor. Approval counts only from an actor/principal authorized for that approval capability and Scope.

Automation preserves controller/authorizer, grant source, Scope, expiry/revocation and represented-subject provenance and does not inherit human reviewer/governance standing.

A service may have broad technical capability, but when acting for a user/Organization it cannot bypass that principal's authority or Scope. User- or Organization-triggered work does not gain Platform Authority merely because a platform service executes it. Genuine platform-originated moderation/security/legal/recovery/maintenance action must arise from an authorized platform workflow/policy/case and retain provenance for that authority basis.

For consequential delegated execution, preserve Requester/Initiator, Authorizing Principal(s)/authority basis and actual Executor where applicable.

## 7. Stable authority identity, Organization control and privacy
Permissions, scopes, approvals, grants and authority relationships bind to stable internal object identity, not mutable/reusable usernames, handles, emails, phones, URLs or domains. Re-registration or later possession of a recycled identifier does not restore former identity, private data, trust, qualification, governance standing or Organization authority.

Multiple accounts/personas linked to one real-world Person do not automatically share Organization roles, staff capacity, qualification, reviewer/governance capability or comparable standing.

Entity Control Authority is separate from Legal Ownership Claim. Highest control may be shared. Control Continuity prevents accidental orphaning proportionately but does not forbid intentional closure/dissolution. Control transfer does not transfer personal trust/qualification/governance/Recognition history.

Account Recovery != Organization Control Recovery. Current possession of a domain/email/phone/social channel is evidence, not conclusive proof. Recovery may consider historical control, authenticity, representation, prior-controller relations, corroboration, notification, Protective Hold, conflict checks and human review without one universal evidence checklist.

Knowledge-record reconciliation, real-world merger/succession, Organization split, subject correction and operational-control migration are distinct events. None automatically unions controllers, Roles, grants or sensitive authority. Organization hierarchy does not automatically imply permission inheritance.

Organization roles/control govern Organization-scoped resources under explicit permissions. They do not automatically expose members' personal messages, unrelated private profile/account/security data or other non-Organization private data. Organization-owned/shared data remains separately scoped.

Legitimate Joint Action is allowed; each subject authorizes its own participation. Cross-entity permission fusion is prohibited.

## 8. Staff, policy governance, conflicts and appeals
Platform Staff capacity is separate from community identity and personal qualification/reviewer/governance standing. Apply Need-to-know, Purpose Limitation, masking/minimization and risk-appropriate JIT/temporary elevation. High-risk elevation may require Business Justification and independent approval. Break-glass is emergency-only and strongly audited. Support/debugging must not silently impersonate users.

Engineering operations authority does not automatically imply finance, moderation, verification, user-data, Organization-control or other unrelated authority. High-impact irreversible/bulk staff operations may use proportionate extra confirmation, narrower temporary Scope, independent approval/multi-person control or human review. High-privilege actions enter dedicated staff audit. Community-session compromise must not automatically yield production/admin authority.

Changing authorization policy, sensitive Role semantics, grant rules, deny rules, Scope rules or control rules is itself a scoped, permissioned, auditable high-sensitivity operation. Engineering/deployment capability alone does not authorize redefining business/security/Organization-control/verification/governance permissions.

Conflict of Interest is first-class across consequential review, qualification, identity/representation verification, Organization control/recovery, appeals/corrections, staff actions and relevant commercial relationships. Response is proportionate and privacy-limited.

Reviewer identity is sensitive governance data with least-privilege access. Public aggregates may be delayed, bucketed, coarsened or withheld where necessary to reduce deanonymization risk.

Appeal, Evidence Reversal and Re-evaluation are distinct. No universal fixed appeal count. Filing an appeal does not automatically restore risky capability. A materially conflicted original decision-maker cannot be guaranteed sole final control of every consequential appeal; use an independent route appropriate to context.

## 9. Identity abuse, lifecycle and deletion
Display Identity and Stable Platform Identity are separate. Same-name collision alone is not impersonation. Deceptive Representation is evaluated contextually using name/handle, likeness, bio, Organization marks, visual presentation, claimed affiliation/authorization and surrounding behavior. Synthetic likeness/cloned voice/digital impersonation are included when used deceptively. Parody/Fan/Commentary identities may exist when sufficiently non-confusing and not falsely official.

Identity Dispute != Username/Handle Dispute. Trademark, Copyright and Impersonation are separate tracks even when overlapping. Report/dispute != guilt. Reporting ability != evidentiary authority. Claim dispute first affects the disputed Claim. Historical attribution preserves Authorship, Publisher, Operator and Representation-at-the-time.

Account, Stable Platform Identity, Authority-bearing Subject and Relationship lifecycles are separate. Deactivate, Suspend, Close and Delete are distinct. Data disposition is category-specific. Account closure does not automatically erase public Works, citations, Organization history or provenance, while private-data minimization/deletion remains separately governed. Inactivity != death/fraud/abandonment/entitlement transfer.

Guardian/successor/executor/legal representative does not inherit login identity, cannot continue posting as the represented/deceased person and does not automatically receive private messages or unrestricted private-account data. Any lawful/product-supported exception is separate, scoped, minimized and auditable. Such representatives are Relationships, not identity substitution.

Person-specific trust/qualification/governance standing is non-transferable. Organization rename/merge/split/succession preserves provenance rather than rewriting history. Merge is high-risk/auditable with no trust summation; Split is first-class. Relationship termination is time-aware.

Account deletion, private-data deletion, Work withdrawal, legal/policy removal, profile anonymization, public-knowledge retention and audit/legal retention are separate operations. Privacy-safe Tombstones may preserve references where appropriate. Historical Recognition and current availability/recommendation/policy state are separate.

## 10. Provenance, privacy and execution security
For consequential actions preserve enough privacy-appropriate decision-time provenance to reconstruct why an action was allowed, limited, challenged, denied or escalated. Where material this includes authenticated Account, actual Actor, Requester/Initiator, Authorizing Principal(s), Executor, Acting Context/subject, grant/delegation/Relationship/Scope references or versions, authorization-source lineage, applicable restriction, policy/rule version, security result, timestamp and outcome.

Accountability audit/provenance records are not ordinary mutable business content. Ordinary admin/content permissions cannot silently erase or rewrite them. Corrections are normally additive/versioned/linked; exceptional handling is separately authorized/audited. Privacy/legal deletion and retention still apply.

Identity-linkage and anti-abuse correlation are sensitive and purpose-limited. Shared IP/device/timing/behavior/graph signals may justify investigation but do not automatically establish factual identity, affiliation or public relationship. Multi-account linkage does not imply public identity merge.

Static Permission is not enough for every action. Round 5 remains the contextual execution-security engine. Sensitive Operations Guard protects high-impact identity/control/representation/credential/grant/policy mutations where justified. This is adaptive, not a hidden level.

## 11. Adaptive/deferred calibration
Do not lock universal real-name verification, controller counts, two-person rules, appeal counts, document counts, recovery scores, cooling durations, token lifetimes, database-locking technology, retry mechanism, approval-binding technology, one durability point for all approvals, staff-device/network technology, public role naming, age/consent rules or fixed recovery evidence lists.

## 12. Gate
This V4 candidate is **NOT SEALED**. It must pass full source-to-final parity against Round 6A–6J, applicable cross-round amendments/corrections and R1–R37, then a frozen-candidate comprehensive adversarial matrix plus pairwise contradiction review. Any unresolved material blocker prevents seal. Until both gates pass: Round 6 remains reopened, Round 7 remains blocked, implementation remains unauthorized.