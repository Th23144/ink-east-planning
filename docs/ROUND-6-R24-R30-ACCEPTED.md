# Round 6 R24-R30 accepted

Status: **ACCEPTED**. Round 6 remains reopened and not sealed. Implementation is not authorized. Do not enter Round 7.

## R6-R24 — Requesting principal and executor are both preserved
Type: HARDENING / 架构加固.

When a platform worker, service, automation actor, agent, or service account performs a consequential action for another principal, provenance preserves both the requesting/authorizing principal and the actual executor where applicable. The executor's technical identity must not erase who requested or authorized the action.

## R6-R25 — Authority binds to stable internal object identity
Type: HARDENING / 架构加固.

Permissions, scopes, approvals, grants, relationships, and other authority-bearing references bind to stable internal object identity rather than only to mutable or reusable presentation identifiers such as username, handle, email, phone number, URL, or domain. Reassignment or mutation of a visible identifier does not transfer authority to a different object.

## R6-R26 — Derived grants preserve source lineage without universal cascade
Type: HARDENING / 架构加固.

A derived grant or delegation preserves enough source lineage to determine the authority path from which it arose. If an upstream source later expires, is revoked, narrowed, corrected, or found invalid, affected downstream authority is re-evaluated according to the semantics of those grants and any independent valid sources. Normal offboarding does not imply universal blind cascading revocation, and later independent re-authorization can remain valid.

## R6-R27 — Consequential authority changes commit against coherent current state
Type: NEW SAFEGUARD / 新增保护.

Consequential changes to control, representation, grants, sensitive roles, or other authority state must be finalized against a coherent current authorization/control state. Concurrent or intervening changes must not allow multiple individually valid stale decisions to combine into a state that violates current invariants. If material state changed before commit, the decision is re-evaluated. Exact transactional/locking/concurrency-control technology is deferred.

## R6-R28 — Bounded authority artifacts have safe lifecycle and replay semantics
Type: HARDENING / 架构加固.

Invitations, approvals, acceptances, transfers, signed authorization actions, and comparable bounded authority artifacts have explicit lifecycle semantics. They must not be unintentionally reusable to repeat a consequential effect, while safe retry/idempotent processing remains possible for ordinary network or delivery failure. Expired, revoked, consumed, replaced, or materially superseded artifacts do not silently regain validity.

## R6-R29 — Legal/representative status does not automatically unlock private data or login
Type: CLARIFICATION / 澄清.

Guardian, successor, executor, estate representative, legal representative, or other representative status does not by itself grant the represented person's login identity, private messages, private account data, or unrestricted private-data access. Any lawful or product-supported exception is a separate scoped authority with purpose limitation, minimization, auditability, and applicable privacy/legal safeguards.

## R6-R30 — Authorization-policy mutation is itself governed authority
Type: NEW SAFEGUARD / 新增保护.

Changing authorization policy, sensitive role semantics, grant rules, control rules, or comparable security/business authority logic is itself a scoped, permissioned, auditable high-sensitivity operation. Engineering/deployment capability alone does not imply authority to redefine business, finance, security, Organization-control, verification, or governance permissions. Platform-maintenance changes remain attributable to the responsible platform authority and follow appropriate review/separation-of-duties safeguards according to risk.

Next gate: incorporate R6-R1 through R6-R30 into one clean current-truth consolidation, then run complete source-to-final parity and a frozen-candidate comprehensive adversarial audit. Any unresolved blocker prevents replacement seal.