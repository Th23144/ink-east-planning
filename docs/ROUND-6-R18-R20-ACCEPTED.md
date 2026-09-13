# Round 6 R18-R20 accepted

Status: **ACCEPTED**. Round 6 remains reopened and not sealed. Implementation is not authorized. Do not enter Round 7.

## R6-R18 — Protected capabilities require valid authority
Type: HARDENING / 架构加固.

For an action that requires a Permission, authority exists only when a currently valid authorization source grants the required Permission for the required Scope and applicable context. Absence of a matching valid grant is not an implicit Allow. Missing/stale Role membership, missing Scope, unresolved authority relationships, or convenience fallbacks do not create authority.

This is default-deny for protected capabilities only. Ordinary/public product actions that intentionally require no special Permission remain governed by their own product policy and must not be turned into enterprise authorization flows.

## R6-R19 — Independence is an integrity property, not merely distinct account IDs
Type: NEW SAFEGUARD / 新增保护.

Where a consequential safeguard requires independent approval, separation of duties, conflict-controlled review, or multi-person control, multiple accounts/personas/bots must not manufacture independence when common control relevant to that safeguard is known or sufficiently evidenced for the legitimate integrity purpose.

This does not authorize universal real-name verification or unrestricted identity linkage. Evidence use remains purpose-limited, privacy-minimized, and proportional. If required independence cannot be established, another valid review/escalation path is used rather than pretending the safeguard was satisfied.

## R6-R20 — Sessions, tokens and caches carry authority; they do not create permanent authority
Type: HARDENING / 架构加固.

Sessions, API/access tokens, delegated credentials, signed links, cached authorization decisions, and comparable technical artifacts do not by themselves preserve a Permission after the underlying authority expires, is revoked, narrowed, or otherwise becomes invalid.

Consequential execution must honor current authority validity, with risk-appropriate revocation/invalidation/refresh mechanisms. No universal token lifetime or revocation technology is fixed. A genuinely independent durable credential/grant is allowed only when that independence is explicit in the authority model rather than an accidental effect of caching or issuance.

Next gate: targeted carriage review followed by another fresh no-new-finding adversarial audit. Any new blocker prevents a replacement seal.