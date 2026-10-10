# Round 6 R21-R23 accepted + audit-method correction

Status: ACCEPTED. Round 6 remains reopened and not sealed. No implementation. Do not enter Round 7.

## Accepted architecture changes

### R6-R21 — Independence is contextual, not organization-wide
Type: CORRECTION.
R6-R19 was too broad in treating common controlling Organization as automatically defeating independence. Independence must be evaluated against the specific safeguard objective. The same natural person, the same decision-maker, or controlled alternate personas/automation cannot manufacture independent approval. Distinct authorized people inside the same Organization may still satisfy a legitimate dual-control or independent-review requirement when they are genuinely separate decision-makers for that context and are not disqualified by conflict or common control relevant to that decision.

### R6-R22 — Approval binds to the material action being approved
Type: NEW SAFEGUARD.
Approval, confirmation, acceptance, review, or consent for a consequential operation must bind to the material semantics of that operation: relevant target, recipient, scope, authority being granted or changed, and other security-relevant parameters. A material change after approval requires re-evaluation and, where appropriate, fresh approval. Cosmetic/non-material changes need not restart the process. Exact implementation mechanism is deferred.

### R6-R23 — Executor capability is separate from principal authority
Type: NEW SAFEGUARD.
A platform service, automation actor, agent, worker, or service account may possess broad technical capability, but when it acts on behalf of a user, Organization, or other principal, it must not use its own broader capability to bypass the principal's authorization, scope, or policy constraints. Platform-originated moderation, security, legal, recovery, or maintenance actions may use platform authority only when explicitly identified as platform action with appropriate provenance and safeguards. This prevents a confused-deputy path without forcing one execution model for every service.

## Audit-method correction — why repeated passes kept finding new issues

The previous audit process was too serial and too local. Each pass attacked a selected set of failure modes, then newly accepted safeguards changed the architecture surface. This created a moving target and allowed one-sided rules to introduce new false positives or bypasses that were not checked symmetrically before the next pass.

Examples:
- R6-R21 exists because R6-R19 closed the `same person uses two accounts` bypass but was not immediately tested against the opposite case: `two genuinely independent people inside one Organization`. That was a one-sided adversarial test and should have been caught before R19 was presented as complete.
- R6-R22 was latent earlier. Prior checks concentrated on who may approve and whether authority is still valid, but did not separately test whether an approval remains bound to the exact material action after its parameters change.
- R6-R23 was also latent earlier. Automation provenance was checked, but executor technical capability vs principal authority was not explicitly tested as a confused-deputy problem.

Therefore the next gate is not another narrow patch-by-patch audit. Before any replacement seal, freeze the current candidate architecture and run a comprehensive matrix audit across at least these dimensions:

1. object/ontology separation;
2. actor/principal/executor separation;
3. authentication vs identity vs claims;
4. authorization source, grant, deny, scope and delegation;
5. privilege-escalation paths, including role mutation and bulk operations;
6. time-of-check/time-of-use, pending actions, sessions/tokens/caches;
7. approval semantics, parameter binding, independence and conflict of interest;
8. account/persona/linkage privacy and anti-abuse boundaries;
9. Organization control, recovery, merge/split/succession and recycled channels;
10. staff/platform authority and service actors;
11. lifecycle/deletion/withdrawal/history/provenance;
12. ordinary-user simplicity vs high-risk controls;
13. rigidity audit: hard invariant vs adaptive rule vs deferred calibration vs example;
14. pairwise contradiction checks between every newly accepted safeguard and the pre-existing Round 6 invariants.

A replacement seal requires both:
- source-to-final parity with all accepted Round 6 rules; and
- a frozen-candidate comprehensive adversarial pass with zero unresolved blockers.

`Zero unresolved blockers` is a process gate, not a claim of mathematical perfection. Later evidence may still justify explicit amendment, but no known material contradiction or implementation-dangerous ambiguity may remain at seal time.
