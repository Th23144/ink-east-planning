# Project 3 Product Architecture V1 — Round 6 Identity / Role / Permission Consolidation — REVALIDATED

> Status: **REVALIDATED CONSOLIDATION DRAFT — NOT YET SEALED**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)  
> Round 7 authorization: **NO — second source-to-final parity pass is still required**

This document is the new clean current-truth candidate for Round 6 after the prior premature seal was reopened and a clean-room source-to-final parity audit was performed.

It intentionally does **not** silently rewrite the previous `FINAL` consolidation or old seal. Those remain historical/provisional provenance. This file incorporates:

- accepted Round 6A–6J decisions;
- the **Round-6-relevant effects** of A1–A47 and F1–F10;
- all already-accepted rules found missing or weakened during the source-to-final re-audit;
- accepted revalidation amendments R6-R1 through R6-R10.

It does **not** claim that every cross-round amendment is literally part of Round 6. Recognition-, Recommendation-, content-, moderation- and scope-specific amendments remain authoritative in their own records.

This file cannot become sealed merely because it exists. It must pass a second item-by-item parity audit against the accepted source records.

---

# 1. Round 6 purpose and method

Round 6 defines the platform's identity, representation, authority and action model without collapsing different questions into one status system.

It must be able to answer:

1. which authenticated container is being used — `Account / 登录账户`;
2. who or what actually performs the action — `Actor / 操作者`;
3. which public/platform identity is being presented — `Display Identity / 展示身份` and `Stable Platform Identity / 稳定平台身份`;
4. which real-world or organizational subject, if any, is represented — `Authority-bearing Subject / 权限主体`;
5. which factual claims and relationships exist — `Claim / 声明`, `Relationship / 关系`;
6. which capacity is active — `Acting Context / 当前行动身份`;
7. what operational authority exists — `Role / 角色`, `Permission / 权限`, `Scope / 作用范围`;
8. whether the action may execute now — Round 5 security/risk context;
9. why the action was allowed, denied, held or escalated at that time — decision provenance for consequential actions.

Canonical separation:

> **Identity, factual claims, relationships, representation, operational permission, professional qualification, reviewer/governance standing, Work Recognition, recommendation treatment and Membership are different systems.**

Project-wide method:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Every later policy/implementation decision must distinguish:

- `HARD INVARIANT / 硬边界`;
- `ADAPTIVE RULE / 弹性规则`;
- `DEFERRED CALIBRATION / 延后校准`;
- `EXAMPLE / 示例`.

No global `Lv1/Lv2/Lv3`, universal points ladder, one prestige score or single scalar may replace this multidimensional architecture for implementation convenience.

Ordinary users get the simple path. Advanced acting-as, Organization, delegation, staff, claim-verification and control-recovery machinery appears only where the relevant relationships/capabilities exist.

---

# 2. Vocabulary boundary: Knowledge Entity vs Authority-bearing Subject

Round 6 must not monopolize the global word `Entity` to mean only Person/Organization.

The broader platform/knowledge system may contain:

```text
Knowledge Entity / 知识实体
├─ Person
├─ Organization
├─ Place
├─ Work
├─ Concept
├─ Event / Dynasty / Period
└─ future knowledge objects
```

Round 6 authorization uses the narrower concept:

`Authority-bearing Subject / 权限主体`

Current authority-bearing subject kinds are primarily:

- `Person / 自然人主体`;
- `Organization / 组织主体`.

A Place, Concept, Work or other non-agent Knowledge Entity does not gain operational permissions merely because it is a graph entity.

This separation is an architectural boundary for Round 7: knowledge ontology and authorization subjects may reference one another, but they are not the same namespace contract.

---

# 3. Core Round 6 objects

The platform separates at minimum:

- `Account / 登录账户` — authentication/access container;
- `Actor / 操作者` — human or automated principal performing an action;
- `Display Identity / 展示身份` — mutable public presentation/persona;
- `Stable Platform Identity / 稳定平台身份` — durable platform continuity for a profile/persona, not proof of real-world identity;
- `Authority-bearing Subject / 权限主体` — Person or Organization that may be represented operationally;
- `Knowledge Entity / 知识实体` — broader Round 7 knowledge-graph object;
- `Claim / 声明` — a specific asserted fact;
- `Relationship / 关系` — affiliation, representation, control, staff relation, guardianship, organization relation, etc.;
- `Role / 角色` — usable permission bundle/template;
- `Permission / 权限` — atomic operational authorization;
- `Grant Authority / 授权权限` — authority to grant/delegate specific permissions, separate from authority to use them;
- `Scope / 作用范围` — Entity/resource/project/topic/surface boundary;
- `Acting Context / 当前行动身份` — capacity/subject represented for an action;
- `Authorship / 作者关系` — who created/contributed to a Work;
- `Publisher / 发布主体` — who published/supplied the Work;
- `Operator / 实际操作者` — who executed the platform action.

These objects must not be collapsed into one badge, profile flag, role rank, trust score or identity field.

---

# 4. Stable Platform Identity, real-world Person and pseudonymity

`Stable Platform Identity` means platform continuity; it is **not** a factual certification that the platform knows the user's legal/real-world identity.

Canonical separation:

```text
Display Identity
= how this profile/persona appears

Stable Platform Identity
= durable platform continuity for this profile/persona

Real-world Person linkage
= optional, claim-driven relation when justified
```

Therefore:

- ordinary participation may remain pseudonymous;
- a creator may use a pen name/professional persona;
- the platform does not need to invent or verify a real-world Person record merely for normal publishing, comments, saves, follows or purchases;
- multiple legitimate personas/accounts may relate to one Person without mandatory public merging;
- internal identity-linkage evidence, where known, is sensitive and purpose-limited;
- a compromise or discovery of one account does not automatically authorize public disclosure of other legitimate identities.

`Display Identity` is mutable. Legitimate name, avatar, handle or pen-name changes do not create a new Stable Platform Identity by themselves and do not silently rewrite historical authorship.

Sensitive former/legal/deadname information must not be publicly exposed merely to demonstrate identity continuity.

---

# 5. Authority-bearing Subject ontology and Organization semantics

Authorization-relevant subjects currently use:

```text
Authority-bearing Subject
├─ Person
└─ Organization
    ├─ Institution
    ├─ Company
    ├─ Nonprofit
    ├─ Media / Publisher
    ├─ Collective / Team
    └─ future Organization forms
```

`Institution` is an Organization subtype, not the universal organizational model.

`Platform-owned`, `Platform-operated`, `Official`, `Editorial`, `Partner` and similar terms describe relationships/capacities/provenance, not peer subject types beside Person and Organization.

Organization parent/subsidiary, university/department, publisher/imprint and similar structural relationships may be represented, but organizational hierarchy does not automatically inherit platform authority. Explicit scoped authority relationships govern operation unless a later policy deliberately defines a safe narrow inheritance rule.

Creating or suggesting an Organization knowledge/profile page does not prove Organization Authenticity, Representation Claim or Entity Control Authority.

---

# 6. Actor model and automation

Organization authority should normally be exercised through authenticated individual accounts rather than long-lived shared passwords.

At minimum distinguish:

- Human Actor;
- external/user/Organization-authorized Bot or Agent;
- Platform Service Account / Automated System.

Automation must not masquerade as a human Actor.

For an automated Actor, the platform must be able to preserve where applicable:

- automated Actor identity;
- controlling/authorizing Person or Organization;
- delegation/grant source;
- granted Scope;
- expiry/revocation state;
- Acting Subject/Entity represented for the action.

Automation cannot gain more operational authority than explicitly delegated and does not inherit human Reviewer Trust, Governance Authority or independent human-judgment standing merely because its authorizer has those capabilities.

For consequential actions, the actual Actor remains auditable even where public attribution is to an Organization or other represented subject.

---

# 7. Claims are specific; verification is not global truth certification

Canonical principle:

> **We verify claims, not people's overall truthfulness. / 平台核验的是具体声明，而不是给一个人的整体可信度盖章。**

Claim types may include:

- Real-person Claim;
- Identity-consistency Claim;
- Organization Authenticity Claim;
- Affiliation/Employment Claim;
- Representation Claim;
- Credential Claim;
- Legal Ownership Claim;
- future scoped factual claims.

Each Claim preserves provenance sufficient to understand who asserted/confirmed it, under what authority, when, and with what lifecycle state.

Organization attestations preserve both the Organization and the authorized Actor/authority context that produced the attestation.

`Unverified != False`.

Different Claims may have different lifecycles; there is no universal re-verification interval. Expiry/revocation/dispute of one Claim first affects that Claim rather than automatically invalidating an entire account, Stable Platform Identity, qualification or historical Work.

Organization authenticity proves that an Organization is authentic; it does not certify every publication or opinion as correct.

---

# 8. Claim, Relationship and Permission do not auto-convert

Hard invariant:

```text
Claim / evidence of a fact
!=
Relationship / modeled relation
!=
Permission / operational authority
```

A verified fact may support a later relationship or authorization decision, but never silently creates one by itself.

Examples:

- verified employment does not automatically grant authority to publish official statements for the employer;
- a legal ownership claim does not automatically create all platform-control permissions;
- a credential claim does not automatically create Contributor Qualification, Reviewer Trust or Governance Authority;
- affiliation with a university does not automatically grant access to the university's Organization subject.

Operational authority requires an explicit valid authority/representation/control relationship or grant under the permission model.

---

# 9. Contributor Qualification, expertise, Partner and Recognition boundaries

Contributor Qualification is separate from Identity Verification.

`Expertise Scope / 专业范围` is bounded. Qualification/evidence in one scope does not imply authority or competence outside that scope.

Contributor Qualification does not grant Work Recognition. Strong eligible work from an ordinary/non-qualified author remains eligible for Recognition under the separate work-level system.

Partner status is separate from Verification and Work Recognition. A Partner Organization or its employees do not inherit automatic qualification, Recognition evidence, reviewer standing, governance authority or natural ranking privilege.

Organization attestation may prove a scoped factual claim, but does not automatically create Contributor Qualification, broad Expertise Scope, Reviewer Trust, Governance Authority, Work Recognition or opinion correctness.

Verification itself does not automatically increase Ranking, Recommendation, Recognition or Governance authority.

VIP/Membership cannot purchase factual verification, Contributor Qualification, Reviewer standing, Governance Authority, expertise or Work Recognition.

---

# 10. Relationship, representation and authority lifecycle

Representation is scoped and lifecycle-aware. It may be invited/accepted, changed, suspended, revoked, expired or terminated.

Where an Organization invites a representative, the normal pattern is invitation + acceptance through the invitee's own account, with explicit Scope. Other legitimate establishment paths may exist where context requires them.

Bootstrap administration for a genuinely new/small Organization is a platform-control relationship, not proof of permanent legal ownership.

Role, representation, control and other authority-relationship mutations require durable audit history rather than silent overwrite. Historical records preserve what relationship/authority existed at the relevant time.

Guardian, Legal Representative, Executor/Estate Representative, Authorized Representative and similar forms are Relationships, not identity substitution. They may grant defined scoped authority where valid but do not make the representative become the represented Person or inherit that Person's authorship, opinions, Reviewer Trust, Contributor Qualification, Governance Authority or Recognition history.

If minors are supported later, guardianship remains a scoped relationship; age gates, consent and regional legal policy are deferred to dedicated Safety/Privacy/Legal design.

---

# 11. Role, Permission, Grant Authority and Scope

`Permission` is the atomic authorization unit.

`Role` is a usable bundle/template of permissions, not a trust/prestige level.

At minimum the architecture can separate:

- Content Operations;
- Member Management;
- Identity & Representation;
- Analytics;
- Commercial & Finance;
- Security & Audit;
- Entity Control Authority.

Content permissions are granular. Member management does not imply Entity Control. Content administration does not imply finance/security authority. Engineering/operations access does not automatically grant business, moderation, verification, finance or Organization-control authority.

Permission always includes Scope — what may be done, for which subject/resource/project/topic/surface.

`Least Privilege / 最小权限` is the default.

Early UX should expose a small number of understandable preset Roles; Custom Roles may be supported later without changing the underlying model.

No routine Organization-side `Universal Super Admin` may bypass all controls simply because its label says Owner/Admin/Super Admin.

## 11.1 Use Permission is not Grant Permission

Hard invariant:

> **The authority to use a capability is not automatically the authority to grant, delegate, create or expand that capability for oneself or others.**

Therefore:

- `Use Permission` and `Grant/Delegate Permission` are distinct;
- Manage Members / Manage Roles does not automatically permit assignment of Entity Control, Finance, Security, Verification or another higher-sensitivity permission;
- role creation/editing is bounded by the actor's explicit grantable-permission envelope and Scope;
- Custom Roles cannot be used to manufacture permissions the creator is not authorized to grant;
- self-grant/elevation to materially higher authority requires explicit grant authority and current security/context checks;
- delegation cannot exceed the delegator's grant authority merely because the delegator can personally execute an action.

---

# 12. Effective Permission, conflicts and execution-time checks

Multiple authorization sources may coexist: role bundle, direct grant, delegation, Relationship, resource/project Scope and other explicit sources.

The platform computes `Effective Permission / 最终有效权限` instead of choosing a highest role.

Permission conflicts are resolved at `Permission + Scope` level. Role names do not win conflicts merely because one label sounds more senior.

Canonical pattern:

```text
Authorization Sources
→ determine valid Permissions by Scope
→ apply security-relevant Explicit Deny / restrictions
→ apply Round 5 Security / Sensitive Operations Context
→ re-check at final execution
→ Allow / Allow with bounds / Step-up / Hold / Deny / Human Review
```

Security-relevant Explicit Deny overrides ordinary Allow within its applicable Scope.

Opening a page while authorized does not preserve stale authority for a later high-impact commit.

Revoking one authorization source removes the authority produced by that path; independent parallel valid grants remain unless separately revoked.

Revocation changes future authority. It does not silently erase prior authorship, historical audit/provenance or existing draft objects solely because current authority ended. Access to/editability of existing drafts after revocation is decided by their own ownership/permission rules rather than by deleting history.

---

# 13. Delegation, joint action and emergency revocation

Delegation is non-transitive by default. Re-delegation requires explicit Manage Delegation / grant authority.

Temporary/context-bounded delegation is supported. No universal fixed expiry is locked for every use case.

Emergency Revocation is distinct from normal offboarding and may immediately invalidate sensitive current permissions while preserving historical action records.

Legitimate Joint Action is supported. A publication/project/action may involve multiple authorized Acting Subjects/Entities when the product semantics genuinely require it.

Each participant must independently authorize its own participation.

`Cross-entity permission fusion` is prohibited: partial permissions from different Organizations cannot be stitched together to manufacture authority that none actually granted.

---

# 14. Acting Context, public attribution and ordinary-user simplicity

Actual Actor and public attribution are distinct.

When one account can act for multiple subjects/capacities, representative actions require a clear Acting Context. This applies not only to high-risk control mutations but also to **public speech/attribution** where the user may choose to speak as an Organization/official identity, including publishing, comments and replies.

The product must not rely on an invisible sticky Organization identity that causes a user to accidentally publish a personal opinion as an official Organization statement.

For an ordinary user with no delegated/organizational context:

- ordinary publishing and comments/replies default to the user's personal/selected public identity;
- saves/follows/purchases/security/preferences remain personal;
- Organization role selectors, delegation UI and control-transfer machinery are not shown without a relevant relationship.

Author, Publisher and Operator may differ.

A Work may have multiple contribution relationships such as Author, Co-author, Translator, Editor, Researcher, Photographer/Illustrator and future content-specific roles. The model must not assume one `author_id`.

Official statements and personal opinions remain distinguishable.

Organization representation does not launder Reviewer Trust, Governance Authority, Formal Nomination authority or other person-specific standing.

Commercial actions preserve actual Operator and the relevant acting/asset-owning subject.

Attribution disputes must preserve distinctions among Authorship, Publisher, Operator and Representation-at-the-time rather than collapsing them into one "owner" field.

---

# 15. Entity Control Authority and Control Continuity

Use `Entity Control Authority / 主体控制权限` for platform control semantics. `Legal Ownership Claim / 法律所有权声明` remains a separate Claim.

Highest control authority may be shared among multiple legitimate controllers; there is no invariant requiring one supreme individual.

`Control Continuity / 控制权连续性` means an operating Organization should not accidentally become unrecoverable because one controller leaves, dies, loses access, is compromised or is revoked.

Continuity safeguards scale with risk/value/complexity. No universal controller count is fixed.

Control Continuity does not forbid intentional lifecycle closure. Dissolution, closure, archival or historical-only state may legitimately end active control without inventing a successor.

Daily publish/edit/member-management authority does not automatically grant control transfer, recovery-control mutation, Organization deletion, high-trust identity mutation or other Sensitive Authority.

Control transfer is high-impact and should use recipient acceptance/bilateral confirmation, step-up/re-authentication, contextual risk evaluation and, where justified, protective cooling/hold, independent approval or human review. No universal waiting period, document count or two-person rule is fixed.

Transfer of Organization control does not transfer another person's Account Trust, Contributor Qualification, Expertise Scope, Reviewer Trust, Governance Authority, personal Recognition history or behavioral/integrity history.

---

# 16. Account Recovery and Organization Control Recovery are separate

Recovering access to an Account/email/session does not automatically prove entitlement to control a real-world Organization.

High-value or contested Organization-control recovery may combine context-appropriate evidence such as:

- historical control evidence;
- Organization authenticity;
- representative-authority evidence;
- previous controller relationships;
- independent corroboration;
- notification to existing/previous controllers where safe;
- Protective Hold for irreversible changes;
- conflict checks;
- human review;
- alternative recovery where current controllers are unavailable or compromised.

Current possession of a domain, email address, phone number, social account or other control channel is evidence but not by itself conclusive proof, because channels can expire, be reassigned, recycled, sold, transferred or compromised.

No universal recovery document checklist or score is locked.

---

# 17. Re-registration and recycled identifiers

`Identifier reuse != identity continuity`.

After account closure/deletion, a later account receiving the same email, phone number, handle, username, domain or another recycled identifier does not automatically inherit the former account's:

- Stable Platform Identity;
- private data;
- Account Trust/history;
- verified Claims;
- Contributor Qualification / Expertise Scope;
- Reviewer/Governance standing;
- Organization roles or Entity Control Authority;
- security state.

Legitimate recovery/re-linking may occur only through a separate evidence-based process appropriate to the requested continuity/authority.

Handles, display names, emails, phone numbers, URLs and domains are mutable/recyclable identifiers; they are not stable identity primary keys.

---

# 18. Platform Staff and internal authority

Platform Staff is an internal Relationship/capacity distinct from a person's ordinary community identity.

Operational staff authority does not create personal Reviewer Trust, Contributor Qualification, Work Recognition or community-governance standing.

Internal responsibility domains remain separated, including Editorial, Moderation, Trust & Safety, Support, Identity & Verification, Finance, Security and Engineering & Operations.

Staff access follows `Need-to-know / 知情必要性` and `Purpose Limitation / 目的限制`, with masking/minimization/scoped unlocks where appropriate.

Prefer Just-in-Time / Temporary Elevated Permission for exceptional high-sensitivity work rather than broad standing privilege.

High-risk elevation may require Business Justification and independent approval; requesters must not self-approve consequential elevation where separation of duties is warranted.

Break-glass access is emergency-only, short-lived and strongly audited, not a routine hidden super-admin path.

Support/debugging must not silently impersonate users. Restricted diagnostic/View-as modes are preferred where suitable. Actions taken on behalf of a user remain attributable to the staff Actor and relevant authority.

Staff cannot secretly write Recognition, natural ranking privilege, Reviewer Trust or Contributor Qualification through a universal hidden field. Interventions must flow through the appropriate editorial/moderation/safety/ranking/Recognition mechanism and retain provenance.

Engineering deployment/operations authority does not automatically imply business, finance, moderation, verification, user-data, Organization-control or other unrelated authority.

High-impact irreversible or bulk staff operations may require additional confirmation, narrower temporary scope, independent approval/multi-person control or human review according to consequence/risk. This is adaptive; it is not a status tier and is not mandatory for every staff action.

High-privilege staff actions enter a dedicated Staff Audit Trail. Staff offboarding/role change revokes active internal authority, privileged sessions and related credentials without erasing historical audit records.

## 18.1 Separate internal security boundary

Separating community identity from Staff Acting Context is necessary but not sufficient.

Production/admin capabilities with material user-data, financial, identity, security, infrastructure or platform-wide consequences require a distinct internal work-security boundary appropriate to risk — e.g. separate staff credentials/session domain, stronger authentication, managed-device/equivalent controls where appropriate, JIT elevation and independent audit.

A compromise of an ordinary community session must **not** automatically yield production/admin authority merely because the same Person is a staff member.

Exact identity provider/device/network implementation is deferred to Security/Operations design.

---

# 19. Conflict of Interest and sensitive reviewer identity

`Conflict of Interest / 利益冲突` is a first-class governance primitive across consequential systems, including as applicable:

- Formal Nomination / Candidate Review;
- Contributor Qualification;
- Organization authenticity/representation verification;
- identity/credential disputes;
- Organization control/recovery;
- major appeals/corrections;
- staff moderation/verification/editorial/governance actions;
- Partner/commercial relationships;
- other high-integrity adjudication.

Potential conflicts may include direct authorship/co-authorship, employer/Organization relationship, commercial relationship, close project collaboration, direct material rivalry/adversarial relationship, staff involvement in the same case or another concrete relation that may impair independence.

Conflict does not automatically disqualify in every context. Proportionate responses include disclosure, recusal/exclusion from consequential evidence, additional independent review or escalation.

Conflict detection is privacy- and purpose-limited and cannot justify an unrestricted social-surveillance graph.

Reviewer identity is high-sensitivity governance data. Internal attribution may exist for integrity/audit, but access is least-privilege and purpose-limited.

Editorial curiosity or convenience is not a valid reason to reveal reviewer identity. Public-facing editorial teams do not automatically receive it. Reviewer identity must not be casually exported into Recommendation, profile enrichment, commercial targeting or social-graph features. Access and exceptional investigation use are audited.

---

# 20. Identity change, impersonation and dispute

Display/presentation identity may change without creating a new Stable Platform Identity merely because a name/avatar/handle changes.

Legitimate same-name collisions are normal and are not impersonation by themselves.

`Impersonation / 冒充` is evaluated through `Deceptive Representation / 欺骗性身份或关联表示`, considering context such as:

- name/handle;
- avatar/likeness;
- biography;
- Organization marks/branding;
- visual presentation;
- claimed affiliation/authorization;
- surrounding behavior/context.

Synthetic identity abuse includes AI-generated likeness, cloned voice and other digital impersonation where they deceptively represent identity/authorization.

Parody, Fan and Commentary identities may exist when they are sufficiently non-confusing and do not falsely imply official identity, authorization or affiliation.

`Identity Dispute` and `Username/Handle Dispute` are separate. Trademark, Copyright and Impersonation remain separate policy tracks even where a single case touches more than one.

A dispute/report is not guilt. The ability to submit a report is separate from the authority/evidence needed to establish a true identity, affiliation or representation claim.

A Claim dispute first affects the disputed Claim rather than automatically invalidating an entire account.

Serious/systematic identity fraud, credential fabrication, false Organization representation or comparable integrity abuse may escalate across Claims and into qualification/account enforcement after evidence/review.

High-risk impersonation may justify proportionate temporary protection before final adjudication where money, official notices, Organization control or account integrity is materially at risk.

Identity challenges should be claim-proportional and privacy-minimizing; sensitive government ID is not the default ordinary Account Trust shortcut.

Historical identity/attribution is time-aware and is not silently rewritten by current status changes.

Attribution disputes explicitly preserve Authorship, Publisher, Operator and Representation-at-the-time as separate facts.

---

# 21. Appeals, correction and re-evaluation

Major consequential identity/control/authority decisions support reasoned records and meaningful review/correction paths.

`Appeal / 申诉`, `Evidence Reversal / 证据纠错`, and `Re-evaluation / 重新评估` remain distinct:

- Appeal = affected user/entity challenges a decision/basis/process/proportionality;
- Evidence Reversal = platform later discovers evidence was invalid/contaminated/false/misattributed/procedurally defective and repairs affected conclusions;
- Re-evaluation = original decision may have been valid, but changed facts/rules/context/new evidence justify a fresh current-state decision.

There is no universal fixed appeal-count rule. Duplicate unchanged submissions may be consolidated/suppressed; materially new evidence, changed facts, procedural defects, contaminated evidence, changed governing rules or another defensible changed basis may reopen review.

Filing an appeal does **not** automatically restore a risky capability. During appeal, the system may retain, narrow, partially restore or fully restore capability according to current risk/consequence. A successful appeal must repair affected state/evidence where necessary rather than merely removing a present flag.

A consequential appeal must not be architected so that the same materially conflicted original decision-maker is always the sole final reviewer of their own decision. Depending on risk/consequence/uncertainty/resource constraints, use conflict-controlled independent review, separation of duties, escalation, recusal or another defensible independent route.

No universal `every appeal requires two people` rule is fixed.

---

# 22. Account, Subject and Relationship lifecycle

Account lifecycle, Stable Platform Identity lifecycle, Authority-bearing Subject lifecycle and Relationship lifecycle are separate.

`Deactivate / 停用`, `Suspend / 暂停`, `Close / 注销`, and `Delete / 删除` are distinct semantics. Do not reduce the system to a universal `user.deleted=true` flag.

Closing/deleting an Account does not automatically cascade-delete historical subjects, authorship, public Works, citations, Organization history, Recognition history or provenance. Conversely, public-knowledge integrity does not justify indefinite retention of unnecessary private data.

Data disposition is category-specific, including at minimum authentication/security data, private personal data, public profile data, published Works, community activity, private communications, transactions and audit/security records.

`Inactivity != death/fraud/abandonment/entitlement transfer`.

The platform must not default-delete public knowledge assets merely because an account has been inactive for a fixed period.

Deceased-user handling is a separate lifecycle path. A lawful successor/representative does not inherit the deceased person's login identity.

Any successor/estate authority is narrowly scoped to defined assets/functions and does not inherit private messages, personal Reviewer Trust, Contributor Qualification, Governance Authority, personal trust standing or the ability to continue speaking/posting as the deceased.

Person-specific qualifications/trust/governance standing are non-transferable and non-inheritable.

Dissolved/inactive/historical Organizations may remain as historical subjects with preserved publications, representation history and provenance.

Organization rename, merger, split and succession are represented through relationships/provenance rather than historical overwrite.

Entity/Subject Merge is high-risk and auditable. Trust/governance evidence is not mechanically summed.

Entity/Subject Split is first-class: incorrectly conflated subjects can be separated and their Claims, Works, Relationships, authority links and attribution reassigned through an auditable correction process.

Personal Account/Stable Platform Identity is generally non-transferable to another Person. Scoped Organization control/representation may transfer independently.

Relationship termination is time-aware and preserves the fact that a relationship existed during its historical effective period.

Deletion cannot silently destroy necessary accountability; privacy minimization/deletion, audit integrity, legal retention and public provenance remain distinct concerns.

---

# 23. Published Work withdrawal, tombstones and historical standing

Account deletion, private-data deletion, Work withdrawal/unpublishing, legal/policy removal, profile anonymization/hiding, public-knowledge retention and audit/legal retention are different operations.

There is no universal `published once = keep forever` or `delete user = erase everything` rule.

Where lawful and privacy-compatible, a minimal `Tombstone / 占位记录` may preserve referential integrity for a removed durable object without continuing to publish removed content or sensitive data.

Historical Recognition and current availability are separate. A Work/version may historically have earned Recognition while later being withdrawn, policy-restricted, legally removed or ineligible for current Recommendation.

Historical status does not override current legal/policy/privacy/safety state; current removal does not require falsifying historical Recognition.

---

# 24. Decision-time provenance and audit integrity

For consequential actions, the platform must preserve enough privacy-appropriate decision provenance to reconstruct **why the action was allowed, bounded, stepped-up, held, denied or escalated at that time**.

Relevant provenance may include where necessary:

- actual Actor and authenticated Account;
- Acting Context / Acting Subject(s);
- relevant grant/delegation/Relationship/Scope references or versions;
- applicable Explicit Deny/restriction source;
- material policy/rule version;
- security/step-up result;
- timestamp and outcome.

This is risk-based and retention-limited. It does not require exhaustive permanent logging of every trivial read.

Audit/provenance records used for accountability are not ordinary mutable business content.

Ordinary content/business/admin permissions must not silently erase or rewrite accountability records concerning the actor's own actions.

Corrections should normally be additive/versioned/linked so historical facts and correction provenance remain reconstructable.

Exceptional/break-glass audit handling remains separately authorized and itself audited.

Privacy/legal deletion and retention requirements still apply; accountability does not justify indefinite retention of all data.

---

# 25. Privacy and data-minimization boundaries

Internal identity-linkage/anti-abuse correlation is sensitive, purpose-limited data. It must not become a casual employee-browseable real-person graph, automatic public disclosure, generic profile enrichment, recommendation feature or commercial-targeting system.

Shared IP/device, timing similarity, behavior similarity, graph overlap or other anti-abuse correlation signals may justify risk investigation but do not automatically establish a factual identity, affiliation or social relationship suitable for public disclosure.

Verification uses the least-sensitive sufficient evidence where feasible and minimizes raw high-sensitivity material retention.

Reviewer identity and other sensitive governance data follow least-privilege/purpose limitation as defined above.

Conflict-of-interest detection follows the same privacy/purpose-limitation rule.

Recommendation served-context/behavior telemetry, where relevant elsewhere in the architecture, remains purpose-bounded, minimized and retention-limited; analysis needs do not authorize unlimited tracking.

---

# 26. Public presentation semantics

Public presentation explains **what** was verified rather than using one ambiguous universal checkmark implying broad truthfulness.

Prevent prestige/status stacking. Ordinary content cards should not casually combine Identity Verified + Organization affiliation + Contributor Qualification + Partner + Recognized + Editorial Pick + VIP into one all-purpose authority bundle.

Profiles/detail surfaces may explain relevant context more fully.

Canonical principle:

> **Profile explains context; the work earns its own standing.**

VIP/Membership is commercial/product packaging and cannot masquerade as expertise, factual verification, governance standing or natural ranking privilege.

---

# 27. Relationship to Round 5 execution security

A static Permission grant is not sufficient to execute every action.

Round 5 remains the execution security/capability engine:

```text
Account / Actor
+ Capability
+ Context
+ relevant Evidence / Risk
→ Allow
→ Allow with Dynamic Bounds
→ Step-up / Friction
→ Protective Hold
→ Local Restrict
→ Capability Suspend
→ Human Review
→ Account-level action when justified
```

Sensitive Operations Guard protects identity, control, representative authority, credentials, grant authority and other high-impact mutations where justified.

This is adaptive/context-aware and is not a hidden user level.

---

# 28. Compact authorization model

For a consequential action, the platform should be able to reconstruct:

```text
Actual Actor
+ authenticated Account
+ Stable Platform Identity where applicable
+ Acting Subject(s) / Acting Context
+ relevant Relationship(s)
+ Role bundle(s)
+ atomic Use Permission(s)
+ Grant/Delegation Authority where the action grants authority
+ Scope(s)
+ authorization-source provenance
+ Conflict-of-Interest state where relevant
+ Explicit Deny / security constraints
+ current Round 5 security/risk context
+ execution-time re-check
=
Effective Action Decision
```

For legitimate Joint Action, each participating subject independently authorizes its participation; permissions are not fused across subjects to create nonexistent authority.

---

# 29. Hard invariants

The following are architectural hard boundaries:

- Knowledge Entity and Authority-bearing Subject are not the same concept;
- Stable Platform Identity is not proof of real-world identity;
- Claim != Relationship != Permission;
- identity, verification, Contributor Qualification, Work Recognition, Account Trust, Reviewer Trust, Governance Authority and Membership remain separate axes;
- Role is not a trust/status level;
- Permission + Scope govern operational authority;
- using a Permission does not automatically authorize granting/delegating it;
- Organization-page creation does not prove representation/control;
- historical attribution is not silently rewritten;
- representatives do not become represented Persons;
- platform Entity Control Authority is not automatically Legal Ownership;
- Organization hierarchy does not automatically grant authority;
- Account Recovery does not prove Organization Control Authority;
- recycled identifiers/control channels do not prove identity/control continuity;
- personal trust/qualification/governance history does not transfer with Organization control;
- automation does not impersonate human Actors and preserves controller/authorizer provenance;
- cross-subject permission fusion is prohibited;
- staff community-session compromise does not yield production/admin authority;
- conflicts of interest in consequential decisions are representable/governable;
- a conflicted original decision-maker cannot be guaranteed sole final control of every consequential appeal;
- audit/provenance accountability records cannot be silently rewritten through ordinary business permissions;
- deletion cannot silently destroy required accountability history.

---

# 30. Adaptive rules

Context/risk/evidence may change:

- verification strength;
- continuity safeguards;
- transfer/recovery friction;
- cooling/hold duration;
- additional independent approval;
- staff temporary elevation;
- conflict response;
- appeal independence/escalation path;
- dispute protective measures;
- claim revalidation timing;
- recovery evidence mix;
- audit/provenance retention within legal/privacy limits;
- challenge/recovery path;
- reconsideration cycles when the basis materially changes.

These are bounded adaptive decisions, not universal fixed workflows.

---

# 31. Deferred calibration

Round 6 does not lock universal:

- document counts;
- verification/security vendors;
- fixed age rules;
- cooling durations;
- exact public role names;
- exact Custom Role UX;
- exact recovery-evidence thresholds;
- exact privacy/audit retention periods;
- fixed number of high-authority controllers;
- universal two-person approval;
- fixed appeal counts;
- mandatory real-name verification;
- final public badge/icon language;
- universal staff-device/network implementation.

---

# 32. Explicit supersession and repair map

This revalidated consolidation incorporates explicit later corrections, including:

- old global `Entity = Person | Organization` assumption -> **Knowledge Entity vs Authority-bearing Subject**;
- `Institution` as universal organization type -> **Organization with Institution subtype**;
- `Platform-owned Entity` as peer ontology type -> **platform-owned/Official as relationship/capacity**;
- ambiguous Owner/Ownership Continuity -> **Entity Control Authority / Control Continuity**;
- one unique supreme controller -> **shared highest control allowed**;
- Organization creator automatically represents an existing real-world Organization -> **creation != verified representation**;
- one Action must always have exactly one Acting Entity -> **legitimate Joint Action allowed; permission fusion prohibited**;
- final controller can never disappear -> **prevent accidental orphaning; permit explicit closure/dissolution**;
- Account Recovery == Organization Control Recovery -> **permanently separate**;
- legal/guardian/executor authority == identity takeover -> **prohibited**;
- mandatory real-person resolution -> **not required for ordinary participation**;
- Stable Platform Identity == verified Person -> **explicitly false**;
- anti-abuse correlation == factual identity/relationship -> **not equivalent**;
- Claim/affiliation automatically creates authority -> **prohibited**;
- verification == overall truthfulness -> **claim-specific only**;
- Organization attestation == Contributor Qualification -> **separate decisions**;
- Partner roster -> automatic qualification -> **prohibited**;
- verification/Partner/qualification -> automatic ranking/Recognition/governance power -> **prohibited**;
- employee/staff authority -> personal governance/reviewer standing -> **separate**;
- Staff Acting Context alone as security isolation -> **insufficient; separate high-sensitivity internal boundary required**;
- Conflict of Interest as scattered etiquette -> **first-class governance primitive**;
- one fixed formal appeal count -> **no fixed universal count**;
- appeal filing automatically restores capability -> **prohibited**;
- same decision-maker always reviews own appeal -> **conflict-controlled independence where consequential**;
- Use Permission == Grant Permission -> **explicitly separated**;
- ordinary admin can silently mutate accountability records -> **prohibited**;
- identifier/channel reuse == identity/control continuity -> **prohibited**;
- historical Recognition == permanent availability/recommendation immunity -> **separate states**.

---

# 33. Revalidation status

This file is the **REVALIDATED current-truth candidate**, but it is intentionally **NOT SEALED YET**.

Before Round 6 may be sealed again:

1. perform a second source-to-final parity matrix against this exact file;
2. verify every applicable Round 6A–6J item and every Round-6-relevant accepted amendment as `PRESENT` or explicitly `SUPERSEDED`;
3. verify R6-R1 through R6-R10 are present without weakening;
4. run a fresh contradiction, rigidity, privacy, status-ladder, privilege-escalation and ordinary-user-complexity check;
5. repair any finding explicitly rather than silently;
6. update PR/current-status documentation;
7. only then create a replacement/revalidated Round 6 seal.

Until then:

- Round 6 = **REOPENED / NOT SEALED**;
- implementation = **NOT AUTHORIZED**;
- Round 7 = **DO NOT ENTER**.