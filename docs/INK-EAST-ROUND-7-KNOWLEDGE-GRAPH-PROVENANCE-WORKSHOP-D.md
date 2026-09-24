# Round 7 — Knowledge Graph & Provenance — Workshop D

Status: **PROPOSED / NOT YET ACCEPTED**. Product architecture only. No implementation authorization.

Scope: Entity resolution, names/aliases, merge/split, temporal identity, succession, place/history changes, cross-source reconciliation, and knowledge-object lifecycle.

Standing rule: **precise boundaries, adaptive circumstances**. No universal identity-confidence score, no automatic same-name merge, no universal succession rule, and no requirement that every historical ambiguity be forcibly resolved.

---

## R7-D1 — Same name does not establish same entity

**Rule class: HARD INVARIANT.**

Matching names, titles, transliterations, aliases or labels are evidence for candidate reconciliation only. They do not by themselves prove identity.

The system must support homonyms, same-title works, renamed organizations, repeated reign-era names, and other collisions without forced merging.

---

## R7-D2 — Different names do not establish different entities

**Rule class: HARD INVARIANT.**

One entity may legitimately have multiple historical names, courtesy names, art names, temple names, posthumous names, translated names, romanizations, institutional names, abbreviations or spelling variants.

Names/labels require their own provenance, language/script and temporal/context metadata where useful.

---

## R7-D3 — Entity reconciliation is an attributable decision, not silent database cleanup

**Rule class: HARD INVARIANT.**

When multiple records are concluded to represent the same entity, the merge/reconciliation should preserve enough provenance to reconstruct what records existed, why they were reconciled, and what identifiers/claims were retained or superseded.

Routine duplicate cleanup may use lighter workflow than consequential historical/person/entity reconciliation, but material merges must not silently erase provenance.

---

## R7-D4 — Entity split is first-class correction

**Rule class: HARD INVARIANT.**

If one record is later found to conflate multiple real entities, the system must support splitting it without pretending the conflation never happened.

Claims, relationships, citations, aliases and identifiers should be reassigned proportionately according to evidence rather than copied wholesale to every resulting entity.

---

## R7-D5 — Merge/split of Knowledge Entities does not automatically migrate operational authority

**Rule class: HARD INVARIANT.**

Knowledge-graph reconciliation is distinct from Round 6 authority migration.

Merging or splitting records for a Person or Organization does not itself transfer login access, Organization control, permissions, representative authority, private data or security-boundary membership.

Any operational authority change requires its own valid authority provenance.

---

## R7-D6 — External identifiers are mappings with provenance, not infallible truth

**Rule class: HARD INVARIANT.**

Library IDs, VIAF-like identifiers, Wikidata-like identifiers, shelfmarks, catalogue IDs, internal legacy IDs and other external identifiers may be linked to entities with source and confidence/context where needed.

An external identifier may be wrong, deprecated, reassigned, duplicated or later corrected. The platform must be able to update the mapping without rewriting the entity's stable internal identity.

---

## R7-D7 — Identity confidence may be contextual and qualitative

**Rule class: ADAPTIVE RULE.**

The platform may express that two records are confirmed same, probable same, possible same, unresolved, or confirmed distinct where useful.

No universal numeric identity-confidence formula is required. Different domains may use different evidence patterns.

---

## R7-D8 — Historical Person identity may remain unresolved

**Rule class: HARD INVARIANT for unresolved-state support.**

The architecture must allow cases such as disputed authorship, uncertain historical identity, composite figures, legendary figures, pseudonymous authorship or ambiguous biographical reconstruction to remain unresolved.

A platform/editorial working view may exist, but uncertainty must not be converted into fabricated certainty merely because one canonical row is operationally convenient.

---

## R7-D9 — Person, persona, pseudonym and attributed identity remain distinguishable

**Rule class: HARD INVARIANT.**

Where historically or editorially useful, the graph should be able to distinguish a real/hypothesized Person from a pen name, role name, public persona, anonymous attribution label or traditionally attributed author identity.

The architecture must not force every pseudonym or attributed author label to resolve to a verified real-world Person.

---

## R7-D10 — Organization continuity, renaming, merger, split and succession are different relations

**Rule class: HARD INVARIANT.**

The graph must distinguish at least conceptually between:
- same Organization renamed;
- Organization merged into another;
- Organization split into multiple successors;
- legal or functional succession;
- historical affiliation/change of parent body;
- knowledge-record correction where two records were merely duplicates.

No universal `successor = same entity` rule is permitted.

---

## R7-D11 — Place identity is temporally and administratively aware

**Rule class: HARD INVARIANT for expressiveness; usage ADAPTIVE.**

Places may change names, boundaries, administrative level, parent jurisdiction or political context over time.

The model should be able to distinguish enduring place identity from time-specific administrative relationships and labels where relevant.

A modern administrative mapping must not silently overwrite historical geography.

---

## R7-D12 — Event, period and dynasty boundaries may be source- or framework-dependent

**Rule class: ADAPTIVE RULE with HARD INVARIANT against false precision.**

Historical periods, reigns, dynastic boundaries and event dates may differ across scholarly/editorial frameworks.

The graph may support multiple periodizations or date interpretations with provenance rather than forcing one universal boundary when the domain is genuinely contested.

---

## R7-D13 — Temporal facts distinguish occurrence time, validity time and record time where needed

**Rule class: HARD INVARIANT for distinguishability; implementation DEFERRED.**

The system may need to distinguish:
- when an event occurred;
- when a relationship/status was valid;
- when the platform/source recorded or learned the information.

These times should not be collapsed when their difference materially affects historical interpretation, correction or audit.

---

## R7-D14 — Reconciliation propagates cautiously through dependent relationships

**Rule class: HARDENING.**

When entities merge/split/reclassify, dependent claims and relationships must be re-evaluated according to their own provenance.

A merge must not automatically convert every weak or disputed relation into a stronger fact. A split must not duplicate every old relation onto every new entity.

---

## R7-D15 — Redirect/alias continuity preserves access without erasing old identity states

**Rule class: HARD INVARIANT.**

When public slugs, names or records change, the platform may preserve redirects/aliases so old citations and links continue to resolve.

Redirect continuity is navigational. It does not mean two historically distinct entities are equivalent, nor does it erase the provenance of prior labels/records.

---

## R7-D16 — Deleted/unavailable entities may retain minimal referential tombstones where appropriate

**Rule class: HARDENING of A40/A41 and Round 7 provenance rules.**

Where lawful and appropriate, a removed or unavailable knowledge object may retain the minimal identity needed to preserve citation/history integrity.

This does not authorize retention of content or personal data that must be deleted, nor does it prevent legitimate full erasure where required.

---

## R7-D17 — Cross-source reconciliation must preserve source disagreement

**Rule class: HARD INVARIANT.**

If two catalogues or sources disagree about author, date, edition, place, identity or relationship, reconciliation must not discard the disagreement merely because the platform chooses one current working view.

Source-specific assertions and the platform's reconciliation decision remain separately attributable.

---

## R7-D18 — Editorial convenience must not become ontology truth

**Rule class: HARD INVARIANT.**

The platform may choose a preferred display name, preferred modern place label, preferred base entity, preferred edition linkage or default current view for usability.

Such choices are presentation/editorial defaults, not automatic proof that alternative historical identities, labels, boundaries or scholarly positions are false.

---

# Cross-check

Workshop D preserves accepted Round 6 and Round 7 A/B/C boundaries:
- Knowledge Entity reconciliation != authority migration;
- stable internal identity != mutable name/URL/external identifier;
- unknown/disputed states remain representable;
- source-specific assertions remain distinguishable from platform assessment;
- correction preserves provenance;
- historical/current state remain separable;
- no forced real-world Person resolution for ordinary pseudonymous identity;
- no universal score or rigid reconciliation workflow.

# Deferred

Exact reconciliation workflow; reviewer roles; automatic-match thresholds; entity-resolution ML/AI use; public merge/split history UI; canonical-name policy; transliteration standards; historical-place gazetteer model; succession vocabulary; person/persona UI; redirect policy details; import deduplication technology.

# Gate

R7-D1 through R7-D18 remain proposals until explicitly accepted or modified by the user.
