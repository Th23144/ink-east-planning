# Round 6 no-new-finding audit — attempt 2

> Status: **FAILED THE NO-NEW-FINDING GATE — NEW BLOCKERS FOUND**
> Round 6: REOPENED / NOT SEALED
> Implementation: NO
> Round 7: DO NOT ENTER

This pass assumes the REVALIDATED consolidation plus accepted addenda R11-R17 may still contain authorization/security ambiguity. R15-R17 themselves pass targeted carriage review. The audit then re-attacked default authorization behavior, independence controls, derived credentials, grant chains, recovery, organization transitions, pseudonymity, privacy, staff security, lifecycle, and status leakage.

## R6-R18 — No valid authorization means no authority

**Type: HARDENING / 架构加固 — PROPOSED**

Least Privilege is already accepted, but the current text does not state the authorization default strongly enough for implementation.

Proposed hard invariant:

- an action requiring a Permission is not authorized unless a currently valid authorization source grants that Permission for the required Scope and context;
- absence of a matching valid grant is not an implicit Allow;
- an unknown/missing Role, stale membership, missing Scope, or unresolved authority relationship must not be interpreted as permission by convenience;
- public/ordinary actions that intentionally require no special Permission remain governed by their own product policy and are not turned into enterprise authorization flows.

This is `default deny for protected capabilities`, not a rule that every ordinary product action needs a special Role.

## R6-R19 — Independence is not satisfied merely by different account IDs

**Type: NEW SAFEGUARD / 新增保护 — PROPOSED**

Where the architecture deliberately requires independent approval, separation of duties, conflict-controlled review, or multi-person control for a consequential action, independence is an integrity property rather than simply `two different accounts clicked approve`.

Proposed rule:

- the same Actor, same controlling Person/Organization, or automation controlled by the same decision-maker cannot count as independent sides of the same safeguard when that common control is known or sufficiently evidenced for the legitimate integrity purpose;
- multiple linked personas/accounts do not manufacture independent approval;
- multiple bots/service actors under one controller do not manufacture independent approval;
- this does not require universal real-name verification or unrestricted identity linkage: evidence use remains purpose-limited, privacy-minimized, and proportional;
- where true independence cannot be established and the safeguard materially depends on it, use another valid review/escalation route rather than pretending the requirement was met.

This closes a bypass of R6-R8, high-risk staff approval, and Organization-control safeguards through alternate accounts/automation.

## R6-R20 — Sessions/tokens/caches are carriers of authority, not permanent authority sources

**Type: HARDENING / 架构加固 — PROPOSED**

R6-R17 covers pending authority activation and the existing architecture requires execution-time rechecks, but already-issued technical artifacts can still become a stale-authority path if implementation treats them as irrevocable grants.

Proposed rule:

- sessions, API/access tokens, delegated credentials, signed links, cached authorization decisions, and comparable technical artifacts do not by themselves preserve a Permission after the underlying authority has expired, been revoked, narrowed, or become invalid;
- consequential execution must honor current validity according to the authorization/security model;
- risk-appropriate revocation/invalidation/refresh mechanisms must exist for derived authorization artifacts;
- no universal token lifetime or revocation technology is fixed here;
- a deliberately independent durable credential/grant is allowed only when that independence is explicit in the authority model rather than an accidental consequence of caching or token issuance.

This generalizes the already accepted staff-offboarding and automation-revocation principles to authorization artifacts platform-wide.

## Areas re-attacked with no new blocker in this pass

- R15 knowledge-record editing vs subject authority;
- R16 Role/template expansion as grant event;
- R17 pending/deferred authority activation;
- Claim vs Relationship vs Permission;
- Use Permission vs Grant Permission and non-transitive delegation;
- linked pseudonymous personas and real-world Person mapping;
- Account Recovery vs Organization Control Recovery;
- recycled identifiers/control channels;
- Organization merge/split/succession and authority migration;
- Joint Action vs permission fusion;
- audit/provenance integrity vs privacy retention;
- staff internal security boundary;
- appeal independence/no fixed count;
- no global levels/status ladder;
- VIP/Partner/verification not becoming governance/Recognition authority;
- deletion/withdrawal/public-knowledge continuity.

## Gate result

Attempt 2 does **not** pass the no-new-finding gate because R6-R18 through R6-R20 remain unresolved proposals. Do not issue a replacement seal until they are reviewed and, if accepted, incorporated and followed by another fresh audit.