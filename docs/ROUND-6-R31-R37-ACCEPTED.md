# Round 6 R31-R37 accepted

Status: **ACCEPTED**. Round 6 remains reopened and not sealed. No implementation authorization. Do not enter Round 7.

## R6-R31 — Authority-mutation operations are separately governed
Type: HARDENING / 架构加固.

Grant, revoke, suspend, restore, deny/restrict, delegate and Scope mutation are protected scoped authority operations. Possessing a Use Permission or a broad Role label does not by itself authorize these mutations. Policy may explicitly couple legitimate mutation powers where intended. Expanding a shared Role/template requires both authority to mutate that Role/template and authority to grant the added permissions within affected Scope.

## R6-R32 — Requester, Authorizing Principal(s), and Executor are separate
Type: CORRECTION / 真正修正.

A requester/initiator is not automatically an authorizer. A consequential workflow may have one requester, one or more authorizing principals/approval actors, and a distinct executor. Preserve these distinctions where applicable. An approval counts only when the approving actor/principal has authority for that approval capability and Scope.

## R6-R33 — User-triggered work cannot be relabeled as platform authority
Type: NEW SAFEGUARD / 新增保护.

A user- or Organization-triggered action does not gain platform authority merely because a platform service executes it. Genuine platform-originated moderation, security, legal, recovery, maintenance or similar action must arise from an authorized platform workflow/policy/case and retain provenance for that authority basis.

## R6-R34 — Pending artifacts and completed durable decisions have explicit validity semantics
Type: CORRECTION / 真正修正.

Pending/deferred authority artifacts revalidate current source authority as required by their lifecycle. A workflow may explicitly define a point at which a completed authorization decision becomes a durable decision that can survive a later role change of an approver, but only under explicit semantics and while its target/current-state/security constraints remain valid. Do not accidentally make every historical approval permanent, and do not require every former approver to retain the same role forever after a legitimately completed decision.

## R6-R35 — Contribution/attribution does not automatically create Work operating rights
Type: HARDENING / 架构加固.

Authorship and contribution relationships such as Author, Co-author, Translator, Editor, Researcher, Photographer or Illustrator do not by themselves grant every edit, publish, delete, moderation or administrative capability over the Work. Work operating permissions are separate scoped authority. Permission loss does not rewrite historical attribution. Any coupling between contribution and operating rights must be explicit policy/grant.

## R6-R36 — Organization authority does not automatically expose members' unrelated private data
Type: NEW SAFEGUARD / 新增保护.

Organization roles/control govern Organization-scoped resources only under explicit permissions. They do not automatically grant access to members' personal messages, unrelated private profile/account/security data, or other non-Organization private data. Organization-owned/shared data remains separately scoped and governed.

## R6-R37 — Personal purchase default and explicit Organization commerce coexist
Type: CLARIFICATION / 澄清.

Ordinary purchases default to Personal Platform Context and are not silently converted into Organization transactions merely because the same account can represent an Organization. If Organization/business purchasing is explicitly supported later, the user enters a valid Organization commercial Acting Context and the system preserves actual Operator plus billing/asset-owning subject. Personal saves, follows, account security and preferences remain personal unless a future Organization-scoped equivalent is deliberately defined.

Next gate: integrate R31-R37 into a new one-file current-truth candidate, run full source parity, freeze that exact candidate, and run the comprehensive adversarial matrix plus pairwise contradiction checks. Seal requires zero unresolved material blockers.