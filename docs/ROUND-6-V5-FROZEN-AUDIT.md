# Round 6 V5 frozen-candidate audit

Target: `INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R37-V5.md` blob `0bf849609db317184031327b4d0f8584e7c8c3e1`.

Status: **FAIL — 3 MATERIAL BLOCKERS FOUND**. Round 6 remains NOT SEALED. No implementation. Do not enter Round 7.

The fixed candidate was rechecked across ontology, identity/claims, Actor/Requester/Authorizer/Executor, grant/deny/revoke/scope/delegation, role/policy mutation, pending state, tokens, approval binding, independence/COI, linked-persona privacy, Organization control/recovery/transitions, staff/platform authority, lifecycle/history/provenance, ordinary-user simplicity, rigidity and pairwise contradictions.

Accepted-source note: the existing R20 nuance remains authoritative — a deliberately independent durable credential/grant may exist only when explicitly modeled as its own authority source rather than accidentally inheriting permanence from a session/token/cache artifact. This is a documentation carry-forward item, not a new product decision.

## R6-R38 — Security-boundary reassignment is an authority-affecting operation
Type: HARDENING / 架构加固 — PROPOSED.

Changing a protected resource's ownership, controlling subject, tenant/project membership, authorization Scope membership or equivalent security boundary can change who may act on it. Such changes must not be treated as harmless metadata edits. They require appropriate authority for the boundary change and re-evaluation of relevant source/destination constraints. Ordinary cosmetic metadata changes remain ordinary edits.

## R6-R39 — Authorization cycles cannot manufacture authority
Type: NEW SAFEGUARD / 新增保护 — PROPOSED.

A derived authorization path must trace to at least one valid non-circular authority source appropriate to the requested capability and Scope. Circular delegation/reference relationships do not become a self-sustaining source of authority after the valid root disappears. Independent valid roots remain valid.

## R6-R40 — Permission/policy semantic expansion is a grant-equivalent change
Type: HARDENING / 架构加固 — PROPOSED.

Changing the meaning of an existing Permission, Scope definition, authorization policy or reusable security rule can silently expand authority for every existing holder. A change that materially expands effective authority is treated as an authority expansion/bulk-grant event for governance, impact review and provenance purposes. Narrowing changes future authority without rewriting history. Exact migration/versioning technology is deferred.

No additional material blocker was found in the remaining frozen-matrix dimensions after R38-R40 were isolated.

Gate: resolve R38-R40, build one clean candidate carrying the accepted R20 nuance and all accepted corrections, then repeat source parity and the same frozen matrix. Seal requires zero unresolved material blockers.