# Round 6 R38-R40 accepted

Status: **ACCEPTED**. Round 6 remains reopened and not sealed. No implementation authorization. Do not enter Round 7.

## R6-R38 — Security-boundary reassignment is an authority-affecting operation
Type: HARDENING / 架构加固.

Changing a protected resource's ownership, controlling subject, tenant/project membership, authorization Scope membership, or equivalent security boundary can change who may act on that resource. Such changes are not ordinary metadata edits. They require authority appropriate to the boundary change and re-evaluation of relevant source and destination constraints. Cosmetic metadata edits remain ordinary edits.

## R6-R39 — Authorization cycles cannot manufacture authority
Type: NEW SAFEGUARD / 新增保护.

A derived authorization path must trace to at least one valid non-circular authority source appropriate to the requested capability and Scope. Circular delegation/reference relationships do not become a self-sustaining source of authority after the valid root disappears. Independent valid roots remain valid.

## R6-R40 — Permission/policy semantic expansion is a grant-equivalent change
Type: HARDENING / 架构加固.

Changing the meaning of an existing Permission, Scope definition, authorization policy, reusable security rule, or comparable shared authorization primitive can silently expand authority for existing holders. A material semantic expansion is treated as an authority-expansion / bulk-grant-equivalent event for governance, impact review, provenance, and applicable safeguards. Narrowing changes future authority without rewriting historical facts. Exact migration/versioning technology remains deferred.

These three findings were proposed by `docs/ROUND-6-V5-FROZEN-AUDIT.md` and explicitly accepted by the user in the next project window.

Next gate:
1. build a new clean one-file current-truth candidate carrying R6-R1 through R6-R40 and the explicit R6-R20 durable-independent-authority nuance;
2. run full source-to-final parity against Round 6A–6J, Round-6-relevant A1–A47/F1–F10, and R6-R1–R6-R40;
3. freeze that exact candidate and rerun the same comprehensive adversarial matrix and pairwise contradiction review;
4. replacement seal requires zero unresolved material blockers.
