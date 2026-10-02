# Project 3 Product Architecture V1 — Round 6 REVALIDATED Source-to-Final Parity Pass 2

> Status: **SECOND PARITY PASS COMPLETE — SOURCE PARITY PASSES; FRESH ADVERSARIAL CHECK STILL OPEN**  
> Comparison target: `docs/INK-EAST-ROUND-6-IDENTITY-ROLE-PERMISSION-CONSOLIDATION-REVALIDATED.md`  
> Implementation authorization: **NO**  
> Round 6 seal: **NO — not yet re-sealed**  
> Round 7: **DO NOT ENTER**

This pass repeats the Round 6 source-to-final verification against the new REVALIDATED consolidation rather than trusting the prior consolidation or prior seal.

Passing source parity means the accepted rules are now carried forward. It does **not** by itself prove there are no new contradictions; therefore a separate fresh adversarial check follows at the end.

Status vocabulary:

- `PRESENT` — explicitly/materially preserved in the REVALIDATED file;
- `SUPERSEDED` — old source wording is intentionally replaced by a later accepted rule, and the replacement is present;
- `OUT OF ROUND-6 SCOPE` — authoritative elsewhere and correctly not claimed as Round 6 content.

There are no `MISSING` or `PRESENT BUT WEAKENED` statuses in the source parity tables below.

---

# 1. Round 6A — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6A-01 object separation | PRESENT | §§1–3 |
| 6A-02 old Person/Institution/Platform-owned peer ontology | SUPERSEDED | §§2, 5; Organization subtype model + platform-owned relationship/capacity |
| 6A-03 individual accounts, not shared passwords | PRESENT | §6 |
| 6A-04 Role != trust/qualification/Recognition | PRESENT | §§11, 29 |
| 6A-05 role/scope + context/security execution | PRESENT | §§12, 27–28 |
| 6A-06 clear Acting Context | PRESENT | §14 |
| 6A-07 Author != Publisher possible | PRESENT | §14 |
| 6A-08 Representation scoped/changeable/revocable | PRESENT | §10 |
| 6A-09 role/representation/authority mutations keep durable audit history | PRESENT | §§10, 24 |
| 6A-10 no generic trust/identity ladder | PRESENT | §§1, 29–31 |

Result: **PASS**.

---

# 2. Round 6B — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6B-01 Organization creation != verified representation | PRESENT | §§5, 10 |
| 6B-02 bootstrap admin != permanent legal ownership | PRESENT | §10 |
| 6B-03 old Ownership Continuity wording | SUPERSEDED | §15 Control Continuity / shared controllers |
| 6B-04 invite + acceptance through invitee account with Scope | PRESENT | §10 |
| 6B-05 simple public roles + granular underlying permissions | PRESENT | §11 |
| 6B-06 Sensitive Authority separate from ordinary operations | PRESENT | §§11, 15 |
| 6B-07 control transfer recipient confirmation/step-up/contextual hold | PRESENT | §15 |
| 6B-08 old No-Orphan absolute | SUPERSEDED | §15 accidental orphan prevention + intentional closure allowed |
| 6B-09 offboarding preserves historical attribution/audit | PRESENT | §§10, 12, 22, 24 |
| 6B-10 hijack/control recovery uses contextual historical evidence | PRESENT | §16 |
| 6B-11 Organization Acting Context retained | PRESENT | §§14, 24, 28 |
| 6B-12 optional/contextual dual control | PRESENT | §§15, 18, 30–31 |

R6-R6 additionally hardens recycled control-channel handling in §16.

Result: **PASS**.

---

# 3. Round 6C — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6C-01 Permission atomic; Role bundle not status | PRESENT | §11 |
| 6C-02 permission domains separated | PRESENT | §11 |
| 6C-03 granular content permissions | PRESENT | §11 |
| 6C-04 member management != control | PRESENT | §11 |
| 6C-05 finance != content admin | PRESENT | §11 |
| 6C-06 security/audit != normal content admin | PRESENT | §§11, 18, 24 |
| 6C-07 Scope part of authorization | PRESENT | §§11–12 |
| 6C-08 grant does not guarantee current execution | PRESENT | §§12, 27 |
| 6C-09 Custom Roles later; simple early presets | PRESENT | §11 |
| 6C-10 no routine Universal Super Admin | PRESENT | §§11, 18 |
| 6C-11 Least Privilege | PRESENT | §§11, 18 |

R6-R9 adds explicit Use Permission vs Grant Authority protection in §11.1.

Result: **PASS**.

---

# 4. Round 6D — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6D-01 Actor != public attribution | PRESENT | §§6, 14 |
| 6D-02 representative actions require explicit Acting Context | PRESENT | §14, now explicitly covering public publishing/comments/replies |
| 6D-03 Author/Publisher/Operator may differ | PRESENT | §14 |
| 6D-04 official statements vs personal opinions | PRESENT | §14 |
| 6D-05 private/personal actions remain personal | PRESENT | §14 |
| 6D-06 representation does not create governance authority | PRESENT | §14 |
| 6D-07 commercial actions preserve operator + acting/asset subject | PRESENT | §14 |
| 6D-08 attribution history auditable | PRESENT | §§10, 14, 24 |
| 6D-09 ordinary personal user simple path | PRESENT | §§1, 4, 14 |
| 6D-10 ordinary public actions default to personal/selected identity absent delegation | PRESENT | §14 |
| 6D-11 hide delegation complexity where not applicable | PRESENT | §§1, 14 |
| 6D-12 model remains extensible | PRESENT | §§2–3 |

Result: **PASS**, with one new terminology/cardinality question identified by the adversarial check below rather than a source-loss failure.

---

# 5. Round 6E — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6E-01 multiple sources -> Effective Permission | PRESENT | §12 |
| 6E-02 conflict resolves at Permission + Scope, never role-name hierarchy | PRESENT | §12 |
| 6E-03 Explicit Deny overrides ordinary Allow in Scope | PRESENT | §12 |
| 6E-04 authorization-source provenance | PRESENT | §§12, 24, 28 |
| 6E-05 revoke one path only | PRESENT | §12 |
| 6E-06 execution-time recheck | PRESENT | §12 |
| 6E-07 revocation does not erase history/existing drafts | PRESENT | §12 |
| 6E-08 delegation non-transitive by default | PRESENT | §13 |
| 6E-09 temporary delegation supported | PRESENT | §13 |
| 6E-10 old one Action = one Acting Entity | SUPERSEDED | §§13–14, 28 legitimate Joint Action + no permission fusion |
| 6E-11 Emergency Revocation distinct | PRESENT | §13 |
| 6E-12 old absolute last-controller rule | SUPERSEDED | §15 Control Continuity + explicit closure |

R6-R9 further closes privilege escalation through custom-role/grant authority.

Result: **PASS**.

---

# 6. Round 6F — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6F-01 Staff relation separate from community identity | PRESENT | §18 |
| 6F-02 responsibility domains separated | PRESENT | §18 |
| 6F-03 Need-to-know + Purpose Limitation | PRESENT | §18 |
| 6F-04 masking/minimized exposure | PRESENT | §18 |
| 6F-05 prefer JIT | PRESENT | §18 |
| 6F-06 Business Justification where relevant | PRESENT | §18 |
| 6F-07 Separation of Duties | PRESENT | §18 |
| 6F-08 break-glass short-lived/audited | PRESENT | §18 |
| 6F-09 no silent user impersonation | PRESENT | §18 |
| 6F-10 staff authority != personal governance/reviewer/qualification | PRESENT | §18 |
| 6F-11 no hidden field bypass of Recognition/recommendation/governance | PRESENT | §18 |
| 6F-12 engineering access != unrelated authority | PRESENT | §18 |
| 6F-13 generic high-impact irreversible/bulk safeguards | PRESENT | §18 |
| 6F-14 Staff Audit Trail | PRESENT | §18 |
| 6F-15 offboarding revokes sessions/credentials, preserves history | PRESENT | §18 |
| 6F-16 service/automated Actors first-class | PRESENT | §§6, 18 |

A10's separate internal work-security boundary is PRESENT in §18.1.

Result: **PASS**.

---

# 7. Round 6G — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6G-01 Claim-specific verification | PRESENT | §7 |
| 6G-02 claim types distinct | PRESENT | §7 |
| 6G-03 Contributor Qualification != Identity Verification | PRESENT | §9 |
| 6G-04 Expertise Scope bounded/non-transfer | PRESENT | §9 |
| 6G-05 Contributor Qualification != Work Recognition; ordinary strong work eligible | PRESENT | §9 |
| 6G-06 Organization authenticity != publication correctness | PRESENT | §7 |
| 6G-07 Partner != Verification/Recognition | PRESENT | §9 |
| 6G-08 Official/platform-owned is relationship/capacity, not verification badge | PRESENT | §§5, 26 |
| 6G-09 Claim issuer/provenance | PRESENT | §7 |
| 6G-10 Unverified != False | PRESENT | §7 |
| 6G-11 claim lifecycles differ; no universal interval | PRESENT | §7 |
| 6G-12 one claim expiry/revocation does not automatically spill over | PRESENT | §7 |
| 6G-13 historical attribution/context preserved | PRESENT | §§10, 14, 22 |
| 6G-14 public UI explains what was verified | PRESENT | §26 |
| 6G-15 VIP cannot purchase factual/qualification/governance standing | PRESENT | §§9, 26 |
| 6G-16 Verification does not automatically increase ranking/recommendation/Recognition/governance | PRESENT | §9 |

Result: **PASS**.

---

# 8. Round 6H — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6H-01 Display Identity != Stable Identity | PRESENT | §§3–4 |
| 6H-02 legitimate name changes do not create new identity/rewrite history | PRESENT | §4 |
| 6H-03 pseudonym and legal identity may coexist; internal link need not be public | PRESENT | §§4, 25 |
| 6H-04 same-name != impersonation | PRESENT | §20 |
| 6H-05 Deceptive Representation factors | PRESENT | §20 |
| 6H-06 AI likeness/cloned voice/digital impersonation | PRESENT | §20 |
| 6H-07 Parody/Fan/Commentary allowed when non-confusing | PRESENT | §20 |
| 6H-08 Identity Dispute != Handle dispute | PRESENT | §20 |
| 6H-09 Trademark/Copyright/Impersonation separate tracks | PRESENT | §20 |
| 6H-10 Claim dispute first affects claim | PRESENT | §20 |
| 6H-11 systematic fraud may escalate | PRESENT | §20 |
| 6H-12 report/dispute != guilt | PRESENT | §20 |
| 6H-13 high-risk impersonation may justify proportional protection | PRESENT | §20 |
| 6H-14 claim-proportional/privacy-minimizing challenge | PRESENT | §20 |
| 6H-15 reporting ability != proof authority | PRESENT | §20 |
| 6H-16 history not silently rewritten | PRESENT | §20 |
| 6H-17 attribution disputes preserve Author/Publisher/Operator/Representation | PRESENT | §§14, 20 |
| 6H-18 Appeal/Reasoned Record/Evidence Reversal | PRESENT | §§20–21 |

Result: **PASS**.

---

# 9. Round 6I — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6I-01 Account/Identity-or-Subject/Relationship lifecycles separate | PRESENT | §22 |
| 6I-02 Deactivate/Suspend/Close/Delete distinct | PRESENT | §22 |
| 6I-03 no destructive cascade on account closure | PRESENT | §§22–23 |
| 6I-04 category-specific data disposition | PRESENT | §22 |
| 6I-05 public knowledge + privacy coexist | PRESENT | §§22–25 |
| 6I-06 closure does not rewrite authorship/history | PRESENT | §22 |
| 6I-07 inactivity != death/fraud/abandonment/entitlement | PRESENT | §22 |
| 6I-08 no fixed-inactivity public-knowledge deletion default | PRESENT | §22 |
| 6I-09 deceased handling separate; no login inheritance | PRESENT | §22 |
| 6I-10 successor scoped; no private messages/personal standing/posting as deceased | PRESENT | §22 |
| 6I-11 person-specific standing non-transferable | PRESENT | §22 |
| 6I-12 Organization dissolution preserves history/provenance | PRESENT | §22 |
| 6I-13 rename/merge/split preserve provenance, no historical overwrite | PRESENT | §22 |
| 6I-14 merge high-risk/auditable; no trust summation | PRESENT | §22 |
| 6I-15 split first-class with reassignment correction semantics | PRESENT | §22 |
| 6I-16 personal account/identity non-transferable; org control separately transferable | PRESENT | §22 |
| 6I-17 handles/display/email/phone/URL/domain not stable identity keys | PRESENT | §§17, 22 |
| 6I-18 disputes may Protective Hold irreversible changes | PRESENT | §§16, 21 |
| 6I-19 relationship termination time-aware | PRESENT | §§10, 22 |
| 6I-20 deletion cannot destroy accountability | PRESENT | §§22, 24–25 |

The additional `not one user.deleted flag` constraint is explicit in §22.

Result: **PASS**.

---

# 10. Round 6J — PASS

| ID | Result | REVALIDATED location |
|---|---|---|
| 6J-01 Organization base type; Institution subtype | PRESENT | §5 |
| 6J-02 Entity Control Authority replaces ambiguous Owner semantics | PRESENT | §15 |
| 6J-03 shared high control / Control Continuity | PRESENT | §15 |
| 6J-04 multi-author/contributor first-class | PRESENT | §14 |
| 6J-05 org hierarchy does not automatically grant authority | PRESENT | §5 |
| 6J-06 minor/guardian reserved; no premature age/legal rules | PRESENT | §10 |
| 6J-07 automation auditable/no human masquerade/no inherited governance standing | PRESENT | §6 |
| 6J-08 multiple accounts/personas without mandatory public linkage | PRESENT | §§4, 25 |
| 6J-09 legal/executor/guardian/authorized representative != identity substitution | PRESENT | §10 |
| 6J-10 old Platform-owned Entity peer type | SUPERSEDED | §§2, 5; relationship/capacity model |

Result: **PASS**.

---

# 11. Round-6-relevant cross-round amendment parity — PASS

The following material effects are explicitly preserved:

- A8 Contributor Qualification terminology/separation -> §§9, 29;
- A9 Organization record creation != authority -> §§5, 10;
- A10 separate internal staff-security boundary -> §18.1;
- A14 Organization attestation provenance -> §7;
- A15/A23 identity-linkage purpose limitation -> §§4, 25;
- A17/A18 control semantics/shared controllers -> §15;
- A19 contribution roles -> §14;
- A20 org hierarchy != permission inheritance -> §5;
- A21/A24 guardian/legal-representative != identity substitution -> §10;
- A22 automation controller/authorizer provenance -> §6;
- A31 Reviewer identity purpose limitation -> §19;
- A32/A33 Organization attestation/partner roster cannot mint qualification -> §9;
- A35 Conflict of Interest first-class -> §19;
- A36 no prestige/status stacking -> §26;
- A38 appeal filing does not auto-restore risky capability -> §21;
- A39 Appeal/Evidence Reversal/Re-evaluation distinct -> §21;
- A40/A41 deletion/withdrawal/tombstone separation -> §§22–23;
- A46 Account Recovery != Organization Control Recovery -> §16;
- A47 org control transfer does not transfer personal standing -> §15;
- F1 no fixed appeal count -> §21;
- F2 Joint Action allowed/no permission fusion -> §13;
- F3 intentional closure distinguished from accidental orphaning -> §15;
- F4 Platform-owned not a peer subject type -> §5;
- F5 no forced real-person resolution -> §4;
- F6 anti-abuse correlation != relationship fact -> §25;
- F7 historical Recognition != current availability -> §23;
- F8 recommendation telemetry remains privacy-minimized where referenced -> §25;
- F10 current-truth scope claim corrected -> header + §32–33.

Cross-round items primarily belonging to Recognition, Recommendation, content classification, moderation or platform scope remain authoritative in their own amendment records and are intentionally **OUT OF ROUND-6 SCOPE**, rather than falsely claimed as copied here.

Result: **PASS**.

---

# 12. R6-R1 through R6-R10 parity — PASS

| Revalidation item | Result | REVALIDATED location |
|---|---|---|
| R6-R1 Knowledge Entity vs Authority-bearing Subject | PRESENT | §§2, 5, 29 |
| R6-R2 Stable Platform Identity != verified Person | PRESENT | §§3–4 |
| R6-R3 Claim != Relationship != Permission | PRESENT | §8 |
| R6-R4 decision-time authorization provenance | PRESENT | §24 |
| R6-R5 recycled identifiers do not resurrect identity/authority | PRESENT | §17 |
| R6-R6 recycled Organization control channels are evidence, not proof | PRESENT | §16 |
| R6-R7 automated Actor controller/authorizer provenance | PRESENT | §6 |
| R6-R8 consequential appeal independence safeguard | PRESENT | §21 |
| R6-R9 Use Permission != Grant Permission | PRESENT | §11.1, §§28–29 |
| R6-R10 accountability audit/provenance not ordinary mutable content | PRESENT | §24 |

Result: **PASS**.

---

# 13. Source-parity conclusion

The specific failure that caused the previous seal to be reopened — accepted source rules being missing or weakened in the clean consolidation — is repaired in the REVALIDATED candidate.

**Source-to-final parity: PASS.**

This is not yet permission to seal. The next gate is a fresh adversarial check against the newly repaired architecture itself.

---

# 14. Fresh contradiction / rigidity / privacy / escalation check

The revalidated file was attacked under six lenses: ontology collision, hidden rigidity, privilege escalation, privacy overreach, ordinary-user complexity, and lifecycle/recovery ambiguity.

## Items that now pass

- no universal level/ladder was reintroduced;
- no fixed controller count, appeal count, cooldown, reviewer count or document count was introduced;
- Grant Authority closes the Custom Role/member-management privilege-escalation loop;
- audit-integrity protection does not override privacy/legal deletion because retention remains purpose/legality bounded;
- Organization recovery does not collapse into possession of a recycled email/domain;
- pseudonymity no longer requires implicit real-person resolution;
- automated Actors have controller/authorizer provenance without being treated as humans;
- ordinary users are not exposed to enterprise acting-as flows by default;
- Joint Action and cross-subject permission-fusion prohibition coexist without contradiction;
- Claim/Relationship/Permission separation prevents factual verification from becoming authority automatically.

## One remaining clarification blocker discovered by the fresh check

### R6-R11 — Personal Acting Context must not require a real-world Person subject

**Type: CLARIFICATION / 澄清 — PROPOSED, NOT YET ACCEPTED**

R6-R2 correctly says an ordinary pseudonymous user does not need a verified or even resolved real-world Person record. However, several authorization/attribution phrases still speak in terms of `Acting Subject` for actions. A future developer could mistakenly infer that every personal action must first attach to a real-world `Person` Authority-bearing Subject.

Proposed clarification:

- `Acting Context` may be **Personal Platform Context**, anchored to the authenticated Actor/Stable Platform Identity, without a real-world Person subject;
- when acting on behalf of an Organization or another authority-bearing subject, Acting Context references that represented subject and authority relationship;
- ordinary pseudonymous publishing/commenting therefore works without manufacturing a real-world Person entity;
- if a verified Person linkage later exists, it may provide provenance/claims but does not replace the Stable Platform Identity as the platform persona/history anchor.

This is primarily a clarification of R6-R2 + original Round 6D rather than a new product direction, but it should be explicit before seal because Round 7 will use `Person` as a knowledge entity and could otherwise reintroduce forced real-person mapping through implementation convenience.

---

# 15. Current status

- Second source-to-final parity pass: **PASS**.
- R6-R1..R6-R10: **PRESENT**.
- Prior missing/weakened A–J rules: **RESTORED**.
- Fresh adversarial check: **one remaining clarification blocker R6-R11**.
- Round 6: **NOT SEALED**.
- Implementation: **NOT AUTHORIZED**.
- Round 7: **DO NOT ENTER**.

Next action: user review of R6-R11. If accepted, incorporate it into the REVALIDATED consolidation, rerun the affected parity/adversarial checks, update PR/current-status records, and only then consider a replacement seal.