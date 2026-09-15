# Round 6 no-new-finding audit — attempt 1

> Status: **FAILED THE NO-NEW-FINDING GATE — NEW BLOCKERS FOUND**
> Implementation authorization: **NO**
> Round 6: **REOPENED / NOT SEALED**
> Round 7: **DO NOT ENTER**
> PR: #53 (`docs/ink-east-product-architecture-v1`)

This audit intentionally assumes the revalidated consolidation + R11–R14 addendum may still be wrong. It attacks the combined architecture rather than checking only whether previous decisions were copied forward.

The accepted R6-R11 through R6-R14 rules pass their targeted parity check. However, three additional implementation-dangerous ambiguities remain. These are proposals only until explicitly accepted.

## R6-R15 — Knowledge-record editability never establishes subject identity/control

**Type: HARDENING / 架构加固 — PROPOSED**

R6-R12 correctly separates an Organization knowledge record from operational Organization control, but the invariant is broader than Organizations.

For any Knowledge Entity that corresponds to a real-world Person or Organization:

- creating, editing, curating or being the first creator of the knowledge record does not prove that the editor is that subject;
- knowledge-record edit rights do not create identity, representation, official status or operational control;
- an authenticated Person/Organization may later establish a verified relationship to the knowledge record through a separate claim/linkage process;
- that relationship still does not automatically grant unilateral control over every neutral/historical fact in the knowledge layer.

Example: creating a knowledge page about a living author does not make the creator that author, just as creating a museum record does not make the creator the museum's representative.

This is required before Round 7 because Person will also be a Knowledge Entity.

## R6-R16 — Changing a shared Role definition is a permission-grant event to its holders

**Type: HARDENING / 架构加固 — PROPOSED**

R6-R9 separates `Use Permission` from `Grant Permission`, but a shared Role bundle can become an indirect grant path if its definition changes after members already hold the Role.

Canonical safeguard proposed:

- adding a Permission to a shared Role is treated as granting that Permission to every holder within the affected Scope;
- the actor/system changing the Role must therefore have the authority to grant the added Permission at that Scope;
- high-impact Role expansions may require the same adaptive confirmation/review controls as equivalent bulk grants;
- Role-definition changes retain provenance/audit history;
- a platform migration that widens a built-in Role must not silently create high-impact authority merely because users already held the old Role name;
- removing/narrowing a Role's permissions changes future authority while preserving historical action provenance.

This prevents `edit role template -> silently elevate every role holder` from bypassing the Grant Authority model.

## R6-R17 — Pending/deferred authority must be revalidated when it activates

**Type: HARDENING / 架构加固 — PROPOSED**

Execution-time re-checks already exist for consequential actions, but pending authority artifacts can otherwise preserve stale permission after their source is revoked.

Examples include:

- an Organization invite issued before the inviter loses Grant Authority;
- a pending role/control transfer accepted after the source controller is removed;
- a delayed delegation or queued authority change;
- an automated/scheduled action that would execute after its authorizing relationship expired.

Proposed rule:

- a pending/deferred authority change is not an irrevocable bearer right merely because it was created while authority existed;
- when the authority becomes active or the consequential effect executes, relevant source authority, scope and security state are revalidated;
- revoking or invalidating the source may invalidate pending derived authority unless an explicit durable grant was already validly completed under a defined policy;
- exceptions, where required for legitimate workflow semantics, must be explicit and preserve provenance rather than arising accidentally from stale tokens/invites.

This closes a time-of-check/time-of-use path without requiring every low-risk scheduled action to use the same workflow.

## Areas re-attacked with no new blocker in this pass

- pseudonymous ordinary use vs real-world Person resolution;
- linked personas vs operational authority propagation;
- Account Recovery vs Organization Control Recovery;
- recycled identifiers/control channels;
- Organization merge/split and historical provenance;
- Joint Action vs cross-subject permission fusion;
- Claim vs Relationship vs Permission;
- staff high-sensitivity security boundary;
- audit-log mutability and privacy retention;
- appeal independence and no fixed appeal count;
- role/permission hierarchy and hidden leveling;
- VIP/Partner/verification leakage into governance or Recognition;
- deletion/withdrawal vs public knowledge continuity.

## Gate result

The `no-new-finding` requirement is **NOT PASSED** because R6-R15 through R6-R17 remain unresolved proposals.

Do not produce a replacement seal until these are reviewed, incorporated if accepted, and followed by another no-new-finding audit.