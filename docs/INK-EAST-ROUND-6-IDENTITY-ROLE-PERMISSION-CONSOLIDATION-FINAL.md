# Project 3 Product Architecture V1 — Round 6 Identity / Role / Permission Final Consolidation

> Status: **ROUND 6 FINAL CONSOLIDATION — SEALED**  
> Implementation authorization: **NO**  
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This is the clean current-truth consolidation for Round 6 after Round 6A–6J, the Rounds 1–6 adversarial-audit amendments A1–A47, and the accepted Final Cross-Audit F1–F10.

It supersedes `docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION.md` as the current Round 6 consolidation. The earlier consolidation remains historical provenance.

Historical PR comments and amendment files remain useful to explain how the architecture evolved, but they do not override this file where wording conflicts.

Round 6 has passed the final contradiction/rigidity check. Read this together with `docs/INK-EAST-ROUND-6-SEAL-RECORD.md`.

---

# 1. Purpose and global method

Round 6 defines how the platform answers, without collapsing them into one status system:

1. who is operating — `Account / Actor`;
2. who or what is represented — `Entity`;
3. what factual or authority relationship exists — `Relationship / Claim`;
4. in what capacity the operator is acting — `Acting Context`;
5. what the operator may do — `Role / Permission / Scope`;
6. whether the action may execute now — current Round 5 security/risk context.

Canonical separation:

> **Identity, factual claims, representation, operational authority, professional qualification, reviewer/governance standing, work quality, and Membership are different questions.**

Project-wide method remains:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Future policy/implementation must distinguish:

- `HARD INVARIANT / 硬边界`;
- `ADAPTIVE RULE / 弹性规则`;
- `DEFERRED CALIBRATION / 延后校准`;
- `EXAMPLE / 示例`.

No global `Lv1/Lv2/Lv3`, universal points ladder, or single scalar may replace the multidimensional model merely for implementation convenience.

Ordinary users get the simple path. Advanced identity/delegation UI appears only when a user actually has additional identities, relationships, organizational authority, staff authority, or other delegated capacity.

---

# 2. Core object model

The platform permanently separates:

- `Account / 登录账户` — authentication/access container;
- `Actor / 操作者` — human or automated principal that performs an action;
- `Display Identity / 展示身份` — mutable public presentation/persona;
- `Stable Identity / 稳定身份` — durable platform continuity where applicable;
- `Entity / 主体` — a Person or Organization represented in the platform model;
- `Relationship / 关系` — affiliation, representation, guardianship, staff relation, organizational relationship, etc.;
- `Claim / 声明` — a specific asserted fact that may be verified, attested, disputed, expired or revoked;
- `Role / 角色` — a convenient permission bundle/template;
- `Permission / 权限` — the smallest authorization unit;
- `Scope / 作用范围` — the resource/entity/project/topic/surface boundary of a permission;
- `Acting Context / 当前行动身份` — which entity/capacity the Actor represents for the action;
- `Authorship / 作者关系` — who created or contributed to a Work;
- `Publisher / 发布主体` — who published/supplied the Work;
- `Operator / 实际操作者` — who actually executed the platform action.

These objects must not be collapsed into one badge, one profile flag, one role rank or one trust score.

---

# 3. Entity ontology and public identity

## 3.1 Base Entity types

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

`Institution` is one Organization subtype, not the universal organization model.

`Platform-owned`, `Platform-operated`, `Official`, `Editorial`, `Partner` and similar concepts are relationships/capacities layered on top of an Entity; they are not peer ontological types beside Person and Organization.

Parent/subsidiary, university/department, publisher/imprint and similar structural relationships may be represented, but Organization hierarchy does not automatically inherit platform permissions.

## 3.2 Pseudonyms and real-world identity

Ordinary participation does not require universal legal-identity resolution.

A user may remain pseudonymous or use a creator identity. Stronger real-world identity evidence is requested only when the user asserts a consequential claim that requires it.

Government ID or equivalent sensitive proof is not a generic Account Trust shortcut.

`Display Identity` and `Stable Identity` are separate. Legitimate name, avatar, handle or pen-name changes do not create a new underlying Entity and do not rewrite historical authorship.

Sensitive prior/legal/deadname history must not be exposed merely to demonstrate continuity.

## 3.3 Multiple accounts/personas

Legitimate possession of multiple accounts/personas is not itself abuse.

Separate:

- internal identity-linkage evidence;
- public identity disclosure;
- anti-abuse correlation evidence.

Shared IP/device, timing similarity, behavioral similarity, graph overlap or other correlation signals may justify anti-abuse caution, but do not automatically prove common ownership, affiliation, social relationship, or a fact suitable for public disclosure.

---

# 4. Actor model and automation

Organization authority should normally be exercised through authenticated individual accounts, not long-lived shared passwords.

At minimum distinguish:

- Human Actor;
- user/Organization-authorized Bot or Automated Agent;
- Platform Service Account / Automated System.

Automation must not masquerade as a human Actor and does not inherit independent human Reviewer Trust, Governance Authority or judgment standing merely because its controller has those capabilities.

For consequential actions, the platform must preserve the actual Actor even when public attribution is to an Organization or another represented Entity.

---

# 5. Verification is claim-specific

Canonical principle:

> **We verify claims, not people’s overall truthfulness. / 平台核验的是具体声明，而不是给一个人的整体可信度盖章。**

Possible Claim types include:

- Real-person Claim;
- Identity-consistency Claim;
- Organization Authenticity Claim;
- Affiliation/Employment Claim;
- Representation Claim;
- Credential Claim;
- future scoped factual claims.

There is no universal `Verified = everything this person says is trustworthy` state.

A Claim preserves provenance: who asserted or confirmed it, under what authority, when, and with what lifecycle state. Organization attestations must preserve the Organization and authorized Actor/authority context that produced the attestation.

`Unverified` does not mean `False`.

Different Claims may have different lifecycles. Durable credentials and current affiliations/representation claims do not need one universal re-verification interval. Expiry/revocation of one Claim first affects that Claim rather than automatically invalidating the whole account, identity, qualification or historical work.

Organization authenticity proves that the Organization is authentic; it does not certify the truth of every publication.

Organization attestation may prove a scoped fact, but it does not automatically create:

- Contributor Qualification;
- broad Expertise Scope;
- Reviewer Trust;
- Governance Authority;
- Work Recognition;
- natural ranking privilege.

Partner Organizations cannot bulk-mint Contributor Qualification for their members/employees.

---

# 6. Relationship, representation and authority

Creating a public Organization record/page is distinct from proving authority to represent the real-world Organization. This prevents official-page or namespace capture.

Bootstrap administration for a genuinely new/small Organization is a platform-control relationship, not proof of permanent legal ownership.

Representation is scoped and lifecycle-aware. It may be invited/accepted, time-bounded, changed, suspended, revoked or expired. Ending current authority does not erase historically valid representation at the time of prior actions/publications.

Guardian, Legal Representative, Executor/Estate Representative, Authorized Representative and similar roles are Relationships, not identity substitution. They may grant specific authority where valid, but the representative does not become the represented Person and does not inherit that Person's authorship, opinions, Reviewer Trust, Contributor Qualification, Governance Authority or Recognition history.

If minors are supported later, guardianship remains a scoped relationship. Exact age, consent and regional legal rules belong to Safety/Privacy/Legal design rather than being invented here.

---

# 7. Role, Permission and Scope

`Permission` is the atomic authorization unit. `Role` is a usable bundle/template of Permissions, not a trust/prestige level.

At minimum the architecture can separate:

- Content Operations;
- Member Management;
- Identity & Representation;
- Analytics;
- Commercial & Finance;
- Security & Audit;
- Entity Control / Control Authority.

Content permissions are granular rather than one universal editor bit. Member management does not imply Entity Control. Content administration does not automatically grant finance/security authority. Engineering access does not automatically grant business, moderation, verification, finance or Organization-control authority.

Permission always includes Scope — what can be done, where, for which Entity/resource/project/topic/surface.

`Least Privilege / 最小权限` is the default.

Early UX should expose a small number of understandable preset Roles; Custom Roles may be supported later without changing the underlying permission model.

No routine Organization-side `Universal Super Admin` may bypass all controls merely because its role label says Owner/Admin/Super Admin.

---

# 8. Effective Permission and execution-time authorization

Multiple authorization sources may coexist: role bundle, direct grant, delegation, Relationship, project/resource Scope and other explicit sources.

The platform computes `Effective Permission / 最终有效权限` instead of selecting one highest role.

Canonical pattern:

```text
Authorization Sources
→ merge valid Allow permissions by Scope
→ apply Explicit Deny / security restrictions
→ apply Round 5 Security / Sensitive Operations Context
→ re-check authority at final execution
→ Allow / Step-up / Hold / Deny / Human Review as applicable
```

High-impact actions cannot rely on stale page access. Authority is re-evaluated at commit time.

Authorization provenance must be reconstructable.

---

# 9. Delegation, joint action, conflict and revocation

Revoking one authorization source removes the authority produced by that source; independent valid parallel grants remain unless separately revoked.

Delegation is non-transitive by default. Re-delegation requires explicit authority. Temporary/context-bounded delegation is supported without a universal fixed expiry period.

Emergency Revocation is distinct from normal offboarding and may immediately invalidate sensitive permissions while preserving historical action records.

Legitimate Joint Action is supported. A joint publication/project may involve multiple Acting Entities, but each Entity independently authorizes its participation.

What is prohibited is `cross-entity permission fusion`: combining partial authority from different Entities to manufacture an authority that none of them actually granted.

## 9.1 Conflict of Interest is a first-class governance primitive

`Conflict of Interest / 利益冲突` must be represented and evaluated across consequential decision systems rather than relying only on voluntary etiquette.

It applies, as relevant, to:

- Formal Nomination and Candidate Review;
- Contributor Qualification;
- Organization authenticity/representation verification;
- identity/credential disputes;
- Organization control/recovery decisions;
- major appeals/corrections;
- platform staff moderation, verification, editorial or governance actions;
- Partner/commercial relationships;
- other high-integrity adjudication.

Potential conflicts may include direct authorship/co-authorship, employer/Organization relationship, commercial relationship, close project collaboration, direct material rivalry/adversarial relationship, staff involvement in the same case, or another concrete relationship that could impair independence.

A conflict is not automatically disqualifying in every context. Proportionate responses may include disclosure, recusal/exclusion from consequential evidence, additional independent review or escalation.

Conflict detection must remain privacy- and purpose-limited and must not justify an unrestricted social-surveillance graph.

---

# 10. Acting Context and attribution

The actual Actor and public attribution are distinct.

When one account can act for multiple Entities/capacities, consequential actions require a clear Acting Context rather than an ambiguous hidden default.

Author, Publisher and Operator may all differ.

A Work may have multiple contribution relationships such as Author, Co-author, Translator, Editor, Researcher, Photographer/Illustrator or other content-specific roles; the model is not limited to one `author_id`.

Official statements and personal opinions remain distinct.

Personal-private actions — preferences, reading history, private saves, purchases, account security — remain personal and are not automatically absorbed into Organization Acting Context.

Organization representation does not launder Governance Authority, Reviewer Trust or Formal Nomination authority.

Commercial actions preserve both actual Operator and relevant acting/asset-owning Entity.

Historical attribution is not silently rewritten after role/name/control changes.

---

# 11. Entity Control Authority and continuity

Use `Entity Control Authority / 主体控制权限` as the core concept rather than treating platform control as a legal `Owner` claim. `Legal Ownership Claim` is a separate factual/legal claim.

Highest control authority may be shared among multiple legitimate controllers; there is no invariant requiring one supreme individual.

`Control Continuity / 控制权连续性` is a resilience requirement: an operating Organization should not accidentally become unrecoverable because one administrator leaves, dies, loses access, is compromised or is revoked.

Continuity safeguards scale adaptively with risk/value/complexity. No universal number of controllers is fixed.

Control Continuity does not forbid intentional lifecycle closure. Dissolution, closure, archival or historical-only state may legitimately end active control relationships without inventing a successor.

Daily publishing/editing/member-management authority does not automatically grant control transfer, recovery-control mutation, Organization deletion, high-trust identity mutation or similar Sensitive Authority.

Control transfer is high-impact and should use recipient acceptance, step-up/re-authentication, contextual risk evaluation and, where justified, protective cooling/hold/human review. No universal cooling period or document checklist is fixed.

Additional independent approval may be required for very high-impact actions when justified; this is an adaptive safeguard, not a rank system.

---

# 12. Recovery, compromise and Sensitive Operations

`Account Recovery` and `Organization Control Recovery` are permanently separate.

Recovering an email/session/login account does not prove entitlement to control a real-world Organization.

High-value or contested Organization-control recovery may combine historical control evidence, Organization authenticity, representative authority, independent corroboration, notification to existing controllers where safe, protective hold, conflict checks, human review, and alternative recovery where existing controllers are unavailable or compromised.

Round 5 `Sensitive Operations Guard` may temporarily restrict identity/control/recovery mutations when account-integrity or evasion risk is credible, while preserving a secure recovery path for legitimate compromised users.

Identity/Organization-control disputes may use proportionate Protective Hold to prevent irreversible transfer/deletion/removal-of-all-controllers while facts are being resolved.

A report itself is not proof of wrongdoing.

---

# 13. Platform Staff & internal authority

Platform Staff is an internal Relationship/capacity distinct from a person's ordinary community identity. Operational staff authority does not create personal Reviewer Trust, Contributor Qualification, Work Recognition or community-governance standing.

Internal responsibility domains remain separated, including Editorial, Moderation, Trust & Safety, Support, Identity & Verification, Finance, Security, and Engineering & Operations.

Staff access follows `Need-to-know / 知情必要性` and `Purpose Limitation / 目的限制`, with masking/minimization where appropriate.

Prefer Just-in-Time / Temporary Elevated Permission for exceptional high-sensitivity work rather than broad standing privilege. High-risk elevation may require business justification and independent approval; requesters must not self-approve consequential elevation where separation of duties is warranted.

Break-glass access is emergency-only, short-lived and strongly audited, not a routine hidden super-admin path.

Support/debugging must not silently impersonate users. Restricted `View as User`/diagnostic modes are preferred where suitable. Actions taken on behalf of a user are attributable to staff; staff do not need the user's password.

Staff cannot secretly write Recognition, natural ranking privilege, Reviewer Trust or Contributor Qualification through a universal hidden field. Interventions must flow through the appropriate editorial/moderation/safety/ranking/Recognition mechanism with provenance.

High-privilege staff actions enter a Staff Audit Trail. Offboarding/role changes revoke current access/sessions/credentials without erasing historical audit records.

## 13.1 Separate internal security boundary for high-sensitivity staff access

Separating a staff member's community identity from Staff Acting Context is necessary but not sufficient.

For production/admin capabilities with material user-data, financial, identity, security, infrastructure or platform-wide consequences, the architecture must support a distinct internal work-security boundary appropriate to risk — for example separate staff credentials/session domain, stronger authentication, managed-device/equivalent controls where appropriate, Just-in-Time elevation and independent audit.

A compromise of an ordinary community session must **not** automatically yield production/admin authority merely because the same Person is a staff member.

Exact identity-provider, device, network and authentication implementation remains deferred to Security/Operations design.

---

# 14. Identity, credential and authority disputes

A dispute over one Claim first affects that Claim rather than automatically invalidating the whole account.

Serious systematic identity fraud, credential fabrication, false Organization representation, impersonation, systematic plagiarism/fabrication or comparable integrity abuse may escalate into Contributor/account enforcement after evidence and review.

High-risk impersonation may justify temporary proportionate protective action where money, official notices, Organization control or account integrity are at risk.

Major identity/control determinations support reasoned records, review/appeal and Evidence Reversal if later found incorrect.

There is no fixed universal appeal-count rule. Duplicate unchanged submissions may be consolidated/controlled; materially new evidence, changed facts, procedural defects, contaminated evidence, changed governing rules or other defensible changed basis may reopen review.

`Appeal`, `Evidence Reversal`, and `Re-evaluation` remain distinct mechanisms.

---

# 15. Account, Entity and Relationship lifecycle

Account lifecycle, Entity lifecycle and Relationship lifecycle are separate.

Deactivation, suspension, closure and deletion are different semantics. Do not implement one universal `disabled=true` meaning for all cases.

Closing/deleting an Account does not automatically cascade-delete historical Entity identity, authorship, public Works, citations, Organization history or audit/provenance. Conversely, public-knowledge integrity does not justify retaining every private datum forever.

Data disposition must be category-specific: authentication/security data, private personal data, public profile data, published Works, community activity, private communications, transactions and security/audit records may have different rules.

Inactivity is not death, fraud or abandonment.

Deceased-user handling may support narrowly scoped legacy/successor authority but must not simply transfer login so another person continues speaking as the deceased. Personal trust/qualification/governance standing is not inheritable.

Dissolved/inactive/historical Organizations may remain as historical Entities with preserved provenance.

Organization rename, merger, split and succession must preserve historical relationships instead of rewriting history by renaming all past objects.

Entity merge/split is high-impact and must preserve provenance/redirects where appropriate; dependent trust/evidence is reevaluated rather than blindly summed.

Personal Accounts/identities are not transferable so another Person can continue impersonating the original user. Scoped Organization control/representation may transfer independently.

Handle/display name is not the Stable Entity ID.

Relationship lifecycles are time-aware and may preserve effective periods, expiry, termination reason and historical state.

Deletion must not silently destroy required accountability history; privacy deletion/minimization, audit integrity, legal retention and public provenance remain separate requirements.

---

# 16. Published content, withdrawal and historical standing

Account deletion, private-data deletion, Work withdrawal/unpublishing, legal/policy removal, profile anonymization/hiding, public-knowledge retention and audit/legal retention are different operations.

No universal `published once = keep forever` or `delete user = erase everything` rule exists.

Where lawful and privacy-compatible, a minimal `Tombstone / 占位记录` may preserve referential integrity for a removed durable object without continuing to publish removed content or sensitive data.

Historical Recognition and current availability are separate. A Work/version may historically have earned Recognition while later being withdrawn, policy-restricted, legally removed or ineligible for current Recommendation. Historical status does not override current legal/policy/privacy/safety state; current removal does not require falsifying historical Recognition.

---

# 17. Privacy and data-minimization boundaries

Internal identity-linkage/anti-abuse correlation is sensitive, purpose-limited data. It must not become a casual employee-browseable `real-person graph`, automatic public disclosure, profile enrichment or commercial-targeting system.

Reviewer identity and other high-sensitivity governance data remain least-privilege and audited.

Verification uses the least sensitive sufficient evidence where feasible and minimizes raw high-sensitivity material retention.

Recommendation served-context/behavior telemetry remains purpose-bounded, minimized and retention-limited. The need to analyze presentation bias does not authorize unlimited tracking.

Conflict-of-interest detection follows the same privacy/purpose limitation rule.

---

# 18. Public presentation semantics

Public presentation explains **what** was verified rather than using one ambiguous universal checkmark implying broad truthfulness.

Prevent status stacking. Ordinary content cards should not casually combine Identity Verified + Organization affiliation + Contributor Qualification + Partner + Recognized + Editorial Pick + VIP into one prestige bundle.

Profiles/detail surfaces may explain relevant context more fully.

Canonical principle:

> **Profile explains context; the work earns its own standing.**

VIP/Membership remains commercial/product packaging and cannot purchase factual verification, Contributor Qualification, Reviewer Trust, Governance Authority, Work Recognition or natural ranking privilege.

---

# 19. Relationship to Round 5 execution security

A static Permission grant is not sufficient to execute every action.

Round 5 remains the execution security/capability engine:

```text
Account/Actor
+ Capability
+ Context
+ relevant Evidence/Risk
→ Allow
→ Allow with Dynamic Bounds
→ Step-up/Friction
→ Protective Hold
→ Local Restrict
→ Capability Suspend
→ Human Review
→ Account-level action when justified
```

Sensitive Operations Guard protects identity, control, representative authority, credentials and other high-impact mutations where justified.

This is adaptive/context-aware and not a hidden user level.

---

# 20. Compact authorization model

For a consequential action the platform should be able to reconstruct:

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
+ current Round 5 security/risk context
+ execution-time re-check
=
Effective Action Decision
```

For legitimate Joint Action, each participating Entity independently authorizes its own participation; permissions are not fused across Entities to create nonexistent authority.

---

# 21. Hard invariants, adaptive rules and deferred calibration

## 21.1 Hard invariants

- identity, Claim, Contributor Qualification, Work Recognition, Account Trust, Reviewer Trust, Governance Authority and Membership remain separate axes;
- Role is not a trust level;
- Permission + Scope govern operational authority;
- Organization-page creation does not prove representation;
- historical attribution is not silently rewritten;
- representatives do not become the represented Person;
- platform control authority is not automatically legal ownership;
- Organization hierarchy does not automatically grant platform authority;
- Account Recovery does not automatically prove Organization Control Authority;
- personal trust/qualification/governance history does not transfer with Organization control;
- automation does not impersonate human Actors;
- cross-Entity permission fusion is prohibited;
- a staff community-session compromise does not automatically yield high-sensitivity internal/admin authority;
- conflicts of interest in consequential decisions must be representable and governable;
- deletion cannot silently destroy required accountability history.

## 21.2 Adaptive rules

Context/risk/evidence may change:

- verification strength;
- continuity safeguards;
- transfer/recovery friction;
- cooling/hold duration;
- additional independent approval;
- staff temporary elevation;
- conflict response (disclosure/recusal/additional review/escalation);
- dispute protective measures;
- claim revalidation timing;
- data retention within later legal/privacy limits;
- challenge/recovery path;
- reconsideration cycles when the basis materially changes.

## 21.3 Deferred calibration

Round 6 deliberately does not lock universal:

- document counts;
- verification/security vendors;
- fixed age rules;
- cooling durations;
- exact role names;
- exact custom-role UX;
- exact recovery-evidence threshold;
- exact privacy retention periods;
- fixed number of high-authority controllers;
- universal two-person approval;
- fixed appeal count;
- final public badge/icon language.

---

# 22. Explicit correction map

This final consolidation incorporates and supersedes conflicting earlier interpretations including:

- `Institution` as the universal Organization model -> **Organization with Institution as subtype**;
- `Platform-owned Entity` as peer Entity type -> **platform-owned/Official as relationship/capacity**;
- ambiguous `Owner / Ownership Continuity` -> **Entity Control Authority / Control Continuity**;
- one unique supreme controller -> **shared highest control allowed**;
- Organization creator automatically represents an existing real-world Organization -> **creation != verified representation**;
- one Action must always have exactly one Acting Entity -> **legitimate Joint Action allowed; permission fusion prohibited**;
- last controller can never disappear -> **prevent accidental orphaning while allowing explicit lifecycle closure**;
- Account Recovery == Organization Control Recovery -> **permanently separate**;
- legal/guardian/executor authority == identity takeover -> **prohibited; authority remains scoped Relationship**;
- mandatory universal real-name mapping -> **not required for ordinary participation**;
- anti-abuse correlation == identity/relationship fact -> **not equivalent**;
- verification == overall truthfulness -> **claim-specific only**;
- Organization attestation == Contributor Qualification -> **separate decisions**;
- Organization/Partner roster -> automatic Contributor Qualification -> **prohibited**;
- employee/staff authority -> personal governance/reviewer standing -> **separate**;
- staff Acting Context alone is sufficient internal security isolation -> **insufficient; high-sensitivity staff access needs a distinct internal security boundary**;
- Conflict of Interest as scattered etiquette/check -> **first-class cross-platform governance primitive**;
- historical Recognition -> permanent availability/recommendation immunity -> **separate states**;
- one fixed formal-appeal count -> **no fixed universal count; changed basis may reopen review**.

---

# 23. Final consolidation status

Round 6A–6J, A1–A47 and F1–F10 are represented here as one current-truth architecture.

Round 6 status is now:

- **SEALED — PRODUCT ARCHITECTURE ONLY**;
- implementation remains **NOT AUTHORIZED**;
- thresholds/formulas/vendors/UI are not authorized by this document;
- future evidence-based amendments remain possible only through explicit amendment records rather than silent history rewriting;
- next workshop subject: **Round 7 — Knowledge Graph & Provenance / 知识图谱与来源溯源**.
