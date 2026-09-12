# Project 3 Product Architecture V1 — Round 6 Identity / Role / Permission Consolidation

> Status: **ROUND 6 CONSOLIDATED — PENDING FINAL CONTRADICTION CHECK / SEAL**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This document is the clean **current-truth consolidation** for Round 6 after:

- Round 6A–6J;
- Rounds 1–6 adversarial-audit Pass 1 / A1–A24;
- Pass 2 / A25–A36;
- Pass 3 / A37–A47;
- Final Cross-Audit / F1–F10.

It intentionally does **not** preserve superseded terminology as if still current. Historical Round comments and amendment files remain the provenance record for how the architecture evolved.

Where this consolidation conflicts with earlier Round 6 wording, the accepted later amendment/cross-audit logic incorporated here is the current Round 6 truth.

---

# 1. Round 6 purpose

Round 6 defines how the platform answers six different questions without collapsing them:

1. **Who is operating?** — Account / Actor.
2. **Who or what is the subject?** — Entity.
3. **What relationship exists?** — Relationship / Claim.
4. **In what capacity is the operator acting?** — Acting Context.
5. **What may they do?** — Role / Permission / Scope.
6. **May the action execute right now?** — current Security / Risk / Sensitive-operation context from Round 5.

Round 6 is therefore an identity-and-authorization architecture, not a public status ladder.

Canonical principle:

> **Identity, factual claims, representation, operational authority, professional qualification, reviewer/governance standing, work quality, and Membership are different questions.**

---

# 2. Global architecture rules carried into Round 6

## 2.1 Flexible by default, strict only where necessary

Round 6 follows the project-wide rule:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Every later implementation/policy decision should distinguish:

- `HARD INVARIANT / 硬边界`;
- `ADAPTIVE RULE / 弹性规则`;
- `DEFERRED CALIBRATION / 延后校准`;
- `EXAMPLE / 示例`.

Do not silently promote examples into universal rules.

## 2.2 No global identity/trust/permission level system

The platform must not collapse identity, trust, governance, qualification, or authorization into one monotonic `Lv1/Lv2/Lv3`, points score, or universal status ladder.

Roles are permission bundles, not social levels.

## 2.3 Ordinary users get the simple path

Most ordinary personal users should not see institutional IAM complexity.

For a normal user with no delegated/organizational authority:

```text
personal Account
→ personal public identity/persona
→ ordinary personal actions
```

The richer architecture remains underneath so later relationships, qualifications, organizational roles, recovery, or verification can be added without data migration.

Canonical UX principle:

> **Ordinary users get the simple path; complexity appears only when the user actually has additional identities or delegated authority. / 普通用户走最简单路径；只有真正拥有额外身份或受托权限时，复杂机制才出现。**

---

# 3. Core object model

Round 6 permanently separates the following objects/concepts:

- `Account / 登录账户` — authentication/access container.
- `Actor / 操作者` — the human or automated principal that actually performs an action.
- `Display Identity / 展示身份` — mutable public name/persona/organization presentation.
- `Stable Identity / 稳定身份` — durable underlying platform identity continuity where applicable.
- `Entity / 主体` — Person or Organization represented in the platform model.
- `Relationship / 关系` — affiliation, representation, guardianship, legal representation, staff relation, organizational relation, etc.
- `Claim / 声明` — a specific asserted fact that may be verified/attested/disputed.
- `Role / 角色` — an understandable bundle/template of Permissions.
- `Permission / 权限` — smallest authorization unit.
- `Scope / 作用范围` — resource/entity/project/topic/surface boundary of a Permission.
- `Acting Context / 当前行动身份` — which entity/capacity the Actor is representing for the action.
- `Authorship / 作者关系` — who created/contributed to a Work.
- `Publisher / 发布主体` — who published/supplied the Work.
- `Operator / 实际操作者` — who actually executed the platform action.

These must not be silently merged into one profile/badge/admin flag.

---

# 4. Entity ontology

## 4.1 Base Entity types

Current base ontology:

```text
Entity / 主体
├─ Person / 个人主体
└─ Organization / 组织主体
    ├─ Institution / 机构
    ├─ Company / 企业
    ├─ Nonprofit / 非营利组织
    ├─ Media / Publisher / 媒体或出版主体
    ├─ Collective / Team / 集体或团队
    └─ future organization forms
```

`Institution` is one Organization subtype, not the universal model.

## 4.2 Platform-owned is a relationship/capacity, not a peer Entity type

`Platform-owned`, `Platform-operated`, `Official`, `Editorial`, `Partner`, etc. describe ownership/control/relationship/capacity layered on top of an Entity.

They are not peer ontological types beside Person and Organization.

## 4.3 Organization hierarchy does not automatically grant platform authority

Parent/subsidiary, university/department, publisher/imprint, group/project and similar Organization relationships may be represented.

But organizational hierarchy is descriptive provenance, not automatic permission inheritance.

Any authority inheritance must be explicit and safe for the specific capability.

---

# 5. Account, Actor and public identity

## 5.1 Personal accounts manage authority; avoid shared passwords

Organization access should normally be granted to authenticated individual accounts rather than shared long-term credentials.

The platform must preserve who actually operated an Organization action.

## 5.2 Actor types

At minimum the architecture must distinguish:

- Human Actor;
- user/Organization-authorized Bot / Automated Agent;
- Platform Service Account / Automated System.

Automation must not masquerade as a human operator.

Automation does not inherit independent human Reviewer Trust, Governance Authority, or judgment standing merely because its controller has such capabilities.

## 5.3 Ordinary participation does not require universal real-name resolution

A user may participate under a pseudonym/creator identity without the platform necessarily resolving legal identity.

The platform verifies stronger real-world claims only when they are actually asserted and consequential.

Government ID or equivalent sensitive proof is not a universal Account Trust shortcut.

## 5.4 Multiple Accounts/personas are not automatically abuse

A Person may legitimately operate multiple accounts/personas for pseudonymous, professional, project, or contextual purposes.

The architecture separates:

- internal identity-linkage evidence;
- public identity disclosure;
- anti-abuse correlation evidence.

Internal linkage does not authorize automatic public merging.

## 5.5 Correlation evidence is not identity truth

Shared network/device, timing similarity, behavioral similarity, graph overlap, transaction correlation, coordinated voting/review or other signals may support anti-abuse caution.

They do not automatically prove that accounts are the same person, formally affiliated, socially connected, or appropriate for public linkage.

---

# 6. Display identity, identity change and impersonation

## 6.1 Display Identity and Stable Identity are separate

Names, avatars, pen names, handles, public Organization names and similar presentation may change without creating a new underlying entity.

Legitimate name/persona changes do not rebuild historical authorship, qualifications or claims.

## 6.2 Pseudonym + legal identity may coexist

Internal linkage does not require public legal-name disclosure.

Sensitive previous/legal/deadname history must not be exposed merely to provide identity continuity.

## 6.3 Same name is not impersonation

Impersonation is judged through `Deceptive Representation / 欺骗性表示`, considering context such as:

- name;
- avatar/visual identity;
- bio;
- Organization marks;
- claimed relationships;
- presentation context;
- authorization claims.

Same-name collisions alone are normal.

## 6.4 Parody/Fan/Commentary may exist

Parody, fan and commentary identities may exist when sufficiently non-confusing and not falsely claiming official status/authorization.

## 6.5 Synthetic impersonation is included

AI likeness, cloned voice and other digital impersonation are included where they create deceptive identity/authorization representation.

This identity rule does not by itself define all synthetic-media policy.

## 6.6 Dispute tracks remain distinct

Identity Dispute, Username/Handle Dispute, Trademark, Copyright and Impersonation are separate policy tracks even when facts overlap.

Report ≠ guilt.

---

# 7. Verification is claim-specific

Canonical principle:

> **We verify claims, not people’s overall truthfulness. / 平台核验的是具体声明，而不是给一个人的整体可信度盖章。**

## 7.1 Claim types remain distinct

Examples include:

- Real-person Claim;
- Identity-consistency Claim;
- Organization Authenticity Claim;
- Affiliation/Employment Claim;
- Representation Claim;
- Credential Claim;
- other future scoped factual claims.

There is no universal `Verified = everything this person says is trustworthy` state.

## 7.2 Claim issuer/provenance is preserved

A verified/attested Claim should preserve who issued or confirmed it, for example:

- Platform Verified;
- Organization Attested;
- External Authority;
- User Self-Declared;
- future explicit issuers.

For an Organization attestation, preserve the authorized Actor/authority context that produced the attestation.

## 7.3 Unverified is not false

Absence of verification is not itself proof of falsehood.

## 7.4 Different Claims have different lifecycles

Durable credentials and time-sensitive affiliations/representation claims need not share one universal reverification interval.

Expiry/revocation of one Claim first affects that Claim, not the entire account/identity/qualification/history.

## 7.5 Organization authenticity does not certify all Organization speech

Proving `Organization A is really Organization A` does not make everything it publishes factually correct.

## 7.6 Organization attestation does not mint Contributor Qualification

An Organization can strongly attest a fact within its competence, such as employment/affiliation/role.

That does not automatically grant:

- Contributor Qualification;
- broad Expertise Scope;
- Reviewer Trust;
- Governance Authority;
- Work Recognition;
- generic ranking privilege.

Partner Organizations cannot bulk-mint Contributor Qualification for all members/employees.

---

# 8. Relationship and representation model

## 8.1 Creating an Organization object does not prove representation

Creation of a public Organization record/page is distinct from verified authority to act for the real-world Organization.

This prevents namespace/official-page capture.

Bootstrap administration for a genuinely new/small Organization is a platform-control relationship, not proof of permanent personal legal ownership.

## 8.2 Representation is scoped and lifecycle-aware

Representation may be:

- invited and accepted;
- scoped;
- time-bounded;
- changed;
- suspended;
- revoked;
- expired;
- historically preserved.

Current authority can end while historical representation at publication/action time remains part of provenance.

## 8.3 Legal/guardian/executor authority is not identity substitution

Guardian, Legal Representative, Executor/Estate Representative, Authorized Representative and similar relationships may grant specific authority where valid.

They never mean the representative becomes the represented Person.

They do not inherit personal authorship, opinions, Reviewer Trust, Contributor Qualification, Governance Authority or personal Recognition history.

## 8.4 Minor/guardian architecture is reserved without premature legal rules

If minors are supported later, guardianship is a scoped relationship, not identity takeover.

Age gates, regional consent, parental controls and legal implementation are deferred to Safety/Privacy/Legal design.

---

# 9. Role, Permission and Scope

## 9.1 Permission is the atomic authorization unit

`Role` is a convenient bundle/template of Permissions.

Role names must not become trust/prestige ranks.

## 9.2 Permission domains are separated

At minimum the model must be able to separate:

- Content Operations;
- Member Management;
- Identity & Representation;
- Analytics;
- Commercial & Finance;
- Security & Audit;
- Entity Control / Control Authority.

These are functional domains, not levels.

## 9.3 Content permissions are granular

Draft, edit, publish, unpublish, delete, discussion management and other functions should not be forced into one all-powerful content-admin bit.

## 9.4 Member management does not imply control authority

Managing members does not automatically grant high-impact control transfer, recovery, deletion or identity mutation.

## 9.5 Finance/business and security are independent domains

Content administration does not automatically grant financial or security authority.

Engineering access does not automatically grant business/moderation/verification/finance authority.

## 9.6 Scope is part of authorization

Permission means `what + where/for whom`.

Scope may bind to Entity, resource, project, topic, surface or another explicit boundary.

## 9.7 Least Privilege is default

Grant only what the actual job needs.

Early UX should use a small set of understandable preset Roles rather than exposing enterprise IAM complexity to ordinary organizations.

Custom roles may be supported later without changing the underlying model.

## 9.8 No routine Universal Super Admin

No normal Organization-side universal role should bypass all controls merely because its label says Owner/Admin/Super Admin.

High-impact control capability is separately governed.

---

# 10. Effective Permission and execution-time authorization

Multiple authorization sources may coexist:

- Role bundle;
- direct grant;
- delegation;
- Relationship;
- project/resource scope;
- other explicit source.

The system computes `Effective Permission / 最终有效权限` rather than selecting one `highest role`.

Canonical evaluation pattern:

```text
Authorization Sources
→ merge valid Allow permissions by Scope
→ apply Explicit Deny / security restrictions
→ apply Round 5 Security / Sensitive Operations Context
→ re-check authority at final execution
→ Allow / Step-up / Hold / Deny / Human Review as applicable
```

High-impact actions must not rely on stale page access; authorization is re-evaluated at commit time.

Every effective authorization should preserve provenance sufficient to explain where it came from.

---

# 11. Delegation, conflict and revocation

## 11.1 Revocation removes the affected source, not unrelated parallel grants

Revoking one delegation/relationship/role removes authority produced by that source while leaving independent valid grants intact unless separately revoked.

## 11.2 Delegation is non-transitive by default

A delegate cannot automatically re-delegate unless explicitly granted delegation-management authority.

This is a default safety boundary; future safe product flows may define explicit scoped re-delegation.

## 11.3 Temporary delegation is supported

Delegation may be time-bounded/context-bounded where appropriate.

No universal expiry duration is locked.

## 11.4 Emergency Revocation is distinct from normal offboarding

Emergency revocation may immediately invalidate sensitive authority and invoke Round 5 integrity protections.

Historical actions remain preserved.

## 11.5 Legitimate joint action is supported

One resulting operation may legitimately involve multiple Acting Entities, such as a joint publication/project.

Each entity must independently authorize its participation.

What is prohibited is cross-entity permission fusion that invents an authority neither entity actually granted.

---

# 12. Acting Context and attribution

## 12.1 Actual Actor and public attribution are distinct

A representative may operate a Work under an Organization's public identity while the platform internally records the human/automated Actor.

## 12.2 High-impact actions require unambiguous Acting Context

When an account can act for multiple entities/capacities, high-impact actions must not depend on an ambiguous hidden default.

## 12.3 Author, Publisher and Operator may differ

Examples:

```text
Author / Co-author / Translator / Editor
        ↓
Work
        ↓ published by
Organization
        ↓ operated by
specific human/automation Actor
```

All can be separately attributed where relevant.

## 12.4 Multi-author/contribution roles are first-class

A Work is not structurally limited to one `author_id`.

Possible contribution relationships include Author, Co-author, Translator, Editor, Researcher, Photographer/Illustrator and content-specific roles.

## 12.5 Official statement and personal opinion are distinct

Staff/representatives acting officially must not silently merge with personal community speech.

## 12.6 Personal-private actions remain personal

Preferences, reading history, private saves, purchases, account security and similar personal activity are not automatically absorbed into Organization Acting Context.

## 12.7 Institution/Organization representation does not launder governance authority

Representing an Organization does not automatically grant Formal Nomination, Reviewer Trust or Governance Authority.

## 12.8 Commercial actions preserve both operator and entity context

Where money/assets/organization resources are involved, preserve the actual operator and the relevant acting/asset-owning entity.

## 12.9 Historical attribution is immutable as history

Current identity/role changes do not silently rewrite who authored, published, operated or represented at the time.

---

# 13. Control Authority and continuity

## 13.1 Use `Entity Control Authority`, not ambiguous legal `Owner`

Highest platform control over an Organization is a platform authorization concept.

It is not automatically a `Legal Ownership Claim` about the real-world Organization.

Product UI may later use simpler words when context is unambiguous, but the architecture must preserve the distinction.

## 13.2 Highest control may be shared

An Organization does not require one unique supreme controller.

Multiple legitimate high-authority controllers may coexist.

## 13.3 Control Continuity is a resilience requirement

An operating Organization should not accidentally become unrecoverable because one administrator leaves, loses access, dies, is compromised, or is revoked.

Continuity protections scale adaptively with risk/value/complexity rather than imposing one universal number of controllers.

## 13.4 Control Continuity does not forbid intentional closure

An explicit, accountable Organization lifecycle such as dissolution, closure, archival or historical-only state may legitimately end active control relationships without inventing a successor.

Canonical distinction:

> **Prevent accidental orphaning; do not prevent intentional lifecycle closure.**

## 13.5 Sensitive Authority is separate from daily operations

Publishing/editing/member-management does not automatically grant:

- control transfer;
- recovery-control mutation;
- Organization deletion;
- high-trust identity mutation;
- other sensitive control actions.

## 13.6 Control transfer is high-impact and context-aware

Control transfer should use bilateral/recipient acceptance, re-authentication/step-up, risk evaluation and where justified protective cooling/hold/human review.

No universal cooling duration or document checklist is locked.

## 13.7 Contextual multi-person approval may be used

Very high-impact actions may require additional independent approval depending on risk.

This is an adaptive safeguard, not a status tier or universal bureaucracy.

---

# 14. Organization recovery and account compromise

## 14.1 Account Recovery ≠ Organization Control Recovery

Recovering an email/session/login account does not itself prove the right to control a real-world Organization.

High-value/contested Organization control recovery may use a context-appropriate combination of:

- historical control evidence;
- Organization authenticity evidence;
- representative-authority evidence;
- independent corroboration;
- existing-controller notification where safe;
- protective hold;
- conflict checks;
- human review;
- alternative recovery where current controllers are unavailable/compromised.

## 14.2 Sensitive Operations Guard still applies

Round 5 may temporarily restrict identity/control/recovery mutations when account-integrity or evasion risk is credible.

Secure recovery must remain possible for legitimate compromised users.

## 14.3 Protective Hold during disputes

Identity/Organization-control disputes may temporarily block irreversible destructive changes such as total deletion, transfer or removal of all controllers.

A report itself is not proof; protective action must remain proportionate and reviewable.

---

# 15. Platform Staff & internal authority

## 15.1 Staff is an internal Relationship/capacity

Platform Staff status is separate from a person's ordinary community identity.

Staff operational authority does not create personal Reviewer Trust, Contributor Qualification, Work Recognition or community-governance standing.

## 15.2 Responsibility domains remain separated

Examples:

- Editorial;
- Moderation;
- Trust & Safety;
- Support;
- Identity & Verification;
- Finance;
- Security;
- Engineering & Operations.

These are job domains, not levels.

## 15.3 Need-to-know and Purpose Limitation

Staff access to user/sensitive data must be tied to legitimate work need and purpose.

Use masking/minimization where possible.

## 15.4 Minimize Standing Privilege

Prefer Just-in-Time / Temporary Elevated Permission for exceptional high-sensitivity work where feasible.

High-risk access may require business justification.

## 15.5 Separation of Duties

Consequential privilege elevation should not allow the requester to self-approve where independent approval is justified.

## 15.6 Break-glass is emergency-only

Break-glass access is short-lived, strongly audited and not the routine path to a hidden universal super-admin.

## 15.7 Support does not silently impersonate users

Support/debugging should prefer restricted `View as User`/diagnostic tools where suitable.

Actions taken on behalf of a user must be attributable to staff and properly authorized/audited; staff never need the user's password.

## 15.8 Staff cannot secretly write Recognition/ranking privilege

Staff interventions must flow through the relevant editorial/moderation/safety/ranking/Recognition mechanism with provenance.

No universal hidden field should allow staff to manufacture Work Recognition, natural ranking prestige, Reviewer Trust or Contributor Qualification.

## 15.9 Staff Audit Trail

High-privilege staff actions retain who/when/role/data/action/target/reason and relevant temporary-elevation/approval context.

## 15.10 Staff offboarding revokes current authority, not history

Departure/role change revokes active internal access/sessions/credentials without erasing historical audit records.

---

# 16. Identity/credential disputes and enforcement boundaries

## 16.1 Claim dispute first affects the disputed claim

A dispute over one credential/affiliation/representation claim should not automatically invalidate the entire account.

## 16.2 Serious systematic fraud may escalate

Systematic identity fraud, credential fabrication, false Organization representation, impersonation, systematic plagiarism/fabrication or comparable serious abuse may justify broader Contributor/account enforcement after evidence/review.

## 16.3 High-risk impersonation may justify temporary protective action

Particularly where money, official notices, Organization control or account integrity are at risk.

## 16.4 Appeals, reasoned records and evidence correction remain available

Major identity/control determinations support reasoned records, appeal/review and Evidence Reversal when the platform later finds the determination was wrong.

No universal fixed appeal-count rule exists; duplicate unchanged submissions may be controlled while genuinely changed evidence/basis may reopen review.

---

# 17. Account, Entity and Relationship lifecycle

Account lifecycle, Entity lifecycle and Relationship lifecycle are separate.

## 17.1 Distinguish operational lifecycle states

Deactivation, suspension, closure and deletion are different semantics even if final product labels change.

Do not implement one universal `disabled=true` meaning for all lifecycle cases.

## 17.2 No cascade-delete assumption

Deleting/closing an Account does not automatically delete:

- historical Entity identity;
- authorship;
- public Works;
- citations;
- Organization history;
- audit/provenance.

Likewise, public-knowledge integrity does not justify retaining every private datum forever.

## 17.3 Data disposition is category-specific

At minimum distinguish:

- authentication/security data;
- private personal data;
- public profile data;
- published Works;
- community activity;
- private communications;
- transactions;
- security/audit records.

Retention/legal details remain for Privacy/Legal design.

## 17.4 Account deletion does not silently rewrite historical authorship

An Account may end while historical authorship/provenance remains where appropriate and lawful.

Anonymization/removal rules are distinct decisions.

## 17.5 Inactivity is not death/fraud/abandonment

Long absence does not automatically prove death, relinquishment or risk.

Current-confidence sensitive capabilities may be reevaluated without rewriting history.

## 17.6 Deceased-user handling supports legacy without impersonation

A deceased Person's login should not simply be transferred so another person can continue speaking as them.

Future successor/legacy mechanisms may grant narrowly scoped authority over specified assets/tasks.

Personal trust/qualification/governance standing is not inheritable.

## 17.7 Organization dissolution preserves history

Dissolved/inactive/historical Organizations may remain as historical Entities with preserved publication/relationship provenance.

## 17.8 Organization rename/merger/split preserves provenance

Do not rewrite history by simply renaming every historical object into the successor Organization.

Represent merger/split/succession relationships explicitly.

## 17.9 Entity merge/split is high-impact

Duplicate-entity merge and mistaken-entity split must preserve IDs/provenance/redirects where appropriate and re-evaluate dependent trust/evidence rather than blindly summing scores/history.

## 17.10 Personal Accounts are not transferable identities

A person's Account/identity cannot be sold/transferred so another person continues impersonating them.

Scoped Organization control/representation may transfer independently.

## 17.11 Handle/display name is not Stable Entity ID

Handle reuse, reservation, cooling, redirects and historical aliases are separate policy choices.

Stable IDs/provenance must not depend on mutable public names.

## 17.12 Relationship lifecycle is time-aware

Relationships may carry effective periods, expiry, termination reason and historical state rather than a single boolean.

Ending current authority does not erase historical authority valid at the time.

## 17.13 Deletion must not destroy accountability

Privacy deletion/minimization, audit integrity, legal retention and public provenance are separate requirements that must be balanced by data category and law.

A user/staff/Organization should not be able to erase relevant fraud/security/governance accountability merely by pressing delete.

---

# 18. Published content, withdrawal and historical standing

## 18.1 Account deletion, private-data deletion and Work withdrawal are different operations

Also distinguish legal removal, profile anonymization/hiding, public-knowledge retention and audit/legal retention.

No universal `published once = keep forever` or `delete user = erase everything` rule is permitted.

## 18.2 Tombstone may preserve referential integrity where appropriate

If a durable cited object becomes unavailable, a privacy/legal-compatible minimal Tombstone may preserve stable ID/object state/replacement relation without continuing to publish removed content or sensitive data.

## 18.3 Historical Recognition is distinct from current availability

A Work/version may historically have earned Recognition while later being unavailable, policy-restricted, legally removed, withdrawn, or ineligible for current Recommendation.

Past Recognition cannot override current legal/policy/privacy/safety state; current removal does not require falsifying historical Recognition.

---

# 19. Privacy boundaries specific to Round 6

## 19.1 Internal identity linkage is sensitive and purpose-limited

Identity-linkage/anti-abuse correlation must not become a casual staff-accessible `real-person graph`.

Use only for legitimate purposes such as security, anti-abuse, recovery and integrity where proportionate.

## 19.2 Reviewer identity and other high-sensitivity governance data use least privilege

Internal attribution may be complete for accountability while access remains purpose/role-limited and audited.

## 19.3 Verification minimizes raw sensitive data

Use the least sensitive sufficient evidence for the specific claim where feasible.

Do not retain raw high-sensitivity material merely because collection is possible.

## 19.4 Telemetry does not override privacy

Served-context/behavior telemetry required by later Recommendation analysis must remain purpose-bounded, minimized and retention-limited; it is not an excuse for unlimited tracking.

---

# 20. Public presentation semantics

## 20.1 Explain what is verified

Avoid one ambiguous universal checkmark that implies broad truthfulness.

## 20.2 Prevent status stacking

Feed/content cards should not stack Identity Verified + Organization affiliation + Contributor Qualification + Partner + Recognized + Editorial Pick + VIP into one prestige signal.

Profiles/detail surfaces may explain context more fully.

Canonical principle:

> **Profile explains context; the work earns its own standing.**

## 20.3 VIP/Membership remains commercial/product packaging

VIP cannot purchase:

- factual verification;
- Contributor Qualification;
- Reviewer Trust;
- Governance Authority;
- Work Recognition;
- natural ranking privilege.

---

# 21. Relationship to Round 5 execution security

A static Permission grant is not enough to execute every action.

Round 5 remains the current security/capability engine around execution:

```text
Account/Actor
+
Capability
+
Context
+
relevant Evidence/Risk
→ Allow
→ Allow with Dynamic Bounds
→ Step-up/Friction
→ Protective Hold
→ Local Restrict
→ Capability Suspend
→ Human Review
→ Account-level action when justified
```

Sensitive Operations Guard may protect identity, control, representative authority, credentials and other high-impact mutations.

This is adaptive and evidence/context-aware, not a hidden user level.

---

# 22. Current authorization model — compact form

For a consequential action, the platform should be able to reconstruct:

```text
Actual Actor
+ authenticated Account
+ Acting Entity/Entities
+ relevant Relationship(s)
+ Role bundle(s)
+ atomic Permission(s)
+ Scope(s)
+ authorization-source provenance
+ Explicit Deny / security constraints
+ current Round 5 security/risk context
+ execution-time re-check
=
Effective Action Decision
```

For legitimate Joint Action, each participating Entity independently authorizes its part; permissions are not fused across entities to create nonexistent authority.

---

# 23. Hard invariants vs adaptive rules

## Hard invariants

These are intended as true architecture boundaries:

- identity/claim/qualification/Recognition/trust/Membership remain separate axes;
- Role is not a trust level;
- Permission + Scope govern operational authority;
- Organization page creation does not prove representation;
- historical attribution is not silently rewritten;
- representatives do not become the represented Person;
- platform control authority is not automatically legal ownership;
- Organization hierarchy does not automatically imply platform authority;
- account recovery does not automatically prove Organization control authority;
- personal trust/qualification/governance history does not transfer with Organization control;
- automation does not impersonate human Actors;
- cross-entity permission fusion is prohibited;
- user/staff deletion cannot silently destroy required accountability history.

## Adaptive rules

Context/risk/evidence may change:

- verification strength;
- continuity safeguards;
- transfer/recovery friction;
- cooling/hold duration;
- additional approval;
- staff temporary elevation;
- dispute protective measures;
- claim revalidation timing;
- data retention within later legal/privacy limits;
- challenge/recovery path;
- number/timing of reconsideration cycles where the basis materially changes.

## Deferred calibration

Round 6 deliberately does not lock universal:

- document counts;
- verification vendors;
- fixed age rules;
- cooling durations;
- exact role names;
- exact custom-role UX;
- exact recovery evidence threshold;
- exact privacy retention periods;
- fixed number of high-authority controllers;
- fixed two-person approval requirement;
- fixed appeal count;
- final public badge/icon language.

---

# 24. Round 6 contradiction resolution map

The current consolidation incorporates these explicit corrections over earlier Round 6 wording:

- `Institution` as universal Organization model -> **Organization with Institution as subtype**.
- `Platform-owned Entity` as peer Entity type -> **platform-owned/Official as relationship/capacity**.
- ambiguous `Owner / Ownership Continuity` -> **Entity Control Authority / Control Continuity**.
- one unique top controller -> **shared highest control allowed**.
- Organization creator automatically represents an existing real-world Organization -> **creation != verified representation**.
- one Action always has exactly one Acting Entity -> **legitimate Joint Action allowed; permission fusion prohibited**.
- last controller can never disappear -> **prevent accidental orphaning, but explicit lifecycle closure may end control without artificial successor**.
- Account Recovery -> Organization Control Recovery -> **permanently separate**.
- legal/guardian/executor authority -> identity takeover -> **prohibited; relationships are scoped**.
- mandatory universal real-name mapping -> **not required for ordinary participation**.
- anti-abuse correlation -> identity/relationship fact -> **not equivalent**.
- verification -> overall truthfulness -> **claim-specific only**.
- Organization attestation -> Contributor Qualification -> **separate decisions**.
- Organization/Partner roster -> bulk Contributor Qualification -> **prohibited**.
- employee/staff power -> personal governance/reviewer standing -> **separate**.
- historical Recognition -> permanent availability/recommendation immunity -> **separate states**.

---

# 25. Consolidation status

Round 6A–6J plus all accepted adversarial amendments and final cross-audit corrections are now represented in one current-truth architecture.

At this stage:

- Round 6 is **CONSOLIDATED**;
- Round 6 is **NOT YET SEALED**;
- no implementation is authorized;
- no threshold/formula/vendor/UI is authorized merely by this document;
- the next step is a **short contradiction check of this consolidation itself**;
- if no blocking contradiction is found, create the Round 6 Seal Record;
- only then proceed to Round 7 — Knowledge Graph & Provenance.
