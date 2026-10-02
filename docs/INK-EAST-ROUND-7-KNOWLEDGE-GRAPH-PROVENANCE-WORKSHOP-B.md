# Round 7 — Knowledge Graph & Provenance — Workshop B

> Status: **PROPOSED / NOT YET ACCEPTED**
> Scope: Product architecture only. No implementation authorization.
> PR: #53 (`docs/ink-east-product-architecture-v1`)
> Prerequisite: R7-A1–A14 are accepted.

## Purpose

Workshop B deepens the source/evidence side of Round 7: classical-text editions, physical/digital source items, facsimiles, transcription/OCR, collation, citations, evidence, rights/licensing provenance, source whitelists, uncertain metadata and source withdrawal.

It continues the standing rule: **precise boundaries, adaptive circumstances**. No fixed database technology, universal confidence formula, fixed number of edition layers or universal legal workflow is imposed here.

---

## R7-B1 — Bibliographic/catalog metadata is not the same object as the source material itself

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

A catalogue record, library metadata record, bibliography entry or external database record may describe a Work, Edition or Source Item, but it is not automatically the source item itself.

The model must be able to distinguish:
- descriptive metadata;
- the represented Work/Edition/Source Item;
- the digital asset actually obtained or viewed;
- the external record used to identify it.

This prevents a catalogue page from being mistaken for the scanned manuscript or edition it describes.

---

## R7-B2 — Edition/version genealogy is a typed derivation network, not a simple better/worse ladder

**Type: NEW CORE MODEL**  
**Rule class: HARD INVARIANT for derivation semantics; assessment ADAPTIVE.**

Editions/versions may relate through derivation, revision, reprint, transcription, translation, normalization, collation or other typed relations.

The graph must not assume that later = better, earlier = more authentic, or one universal edition rank exists.

Where the platform/editorial layer recommends a preferred edition for a purpose, that preference is an attributable assessment with scope and reason, not an ontological overwrite of other editions.

---

## R7-B3 — A Source Item/Witness and its digital surrogate are distinguishable

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

A physical manuscript/copy/volume or institution-held source item is distinct from its digital surrogate such as a scan, photograph, IIIF image set, PDF, microfilm-derived image or other digital reproduction.

The digital surrogate should be able to preserve links to:
- the source item it represents;
- holding institution/repository;
- shelfmark/catalogue identifiers where known;
- digitizer/provider;
- capture/publication context;
- rights/usage basis where relevant.

One source item may have multiple digital surrogates; one digital publication must not silently collapse distinct physical copies.

---

## R7-B4 — Facsimile/image provenance keeps source, provider and usage basis separate

**Type: HARDENING / source-image safeguard**  
**Rule class: HARD INVARIANT.**

For a displayed historical image/facsimile, provenance should be able to distinguish:
- what historical object/page/image is represented;
- which institution/repository holds or describes it;
- which website/provider supplied the digital image;
- the exact source page/catalogue record when available;
- the rights/license/usage basis relied upon by the platform;
- any platform-side crop, enhancement, restoration or derivative transformation.

Holding the physical item, hosting a scan and owning/licensing a digital reproduction are not automatically the same role.

---

## R7-B5 — OCR/transcription is anchored to a specific source/version and remains revisable

**Type: NEW SAFEGUARD**  
**Rule class: HARD INVARIANT for anchoring/versioning; quality workflow ADAPTIVE.**

OCR or manual transcription must be attributable to the source item/digital surrogate/version from which it was produced when that distinction matters.

Corrections should create a traceable revision history rather than silently replacing the only known state.

Quality/confidence may be expressed globally, by segment or not at all depending on product need. No universal confidence percentage is required.

Human-reviewed text, machine OCR and later corrected text must remain distinguishable when material.

---

## R7-B6 — Collation and textual variants are first-class; the platform need not force one normalized text

**Type: NEW CORE MODEL**  
**Rule class: HARD INVARIANT for variant preservation; editorial base-text selection ADAPTIVE.**

Where multiple editions/witnesses differ, the architecture must support variant readings and their source anchors.

A platform/editorial reading text may choose a base edition or normalized text for usability, but that choice must not erase known variants or falsely imply that all witnesses agree.

Collation output may attach at Work, Edition, Segment or other useful levels depending on the text tradition.

---

## R7-B7 — Translation, annotation and commentary are derivative knowledge objects, not silent replacements of the source

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

A translation, modern-language rendering, commentary, annotation, teaching note or interpretive layer must preserve its own authorship/provenance and its target source/version/segment where relevant.

It may be tightly displayed beside canonical/source-backed material without becoming the original text itself.

Different translations/commentaries may coexist and disagree.

---

## R7-B8 — Citation identity must resist citation drift after source/version changes

**Type: NEW SAFEGUARD**  
**Rule class: HARD INVARIANT for material citation continuity; implementation DEFERRED.**

When feasible, a citation should identify the actual version/segment/source state relied upon rather than only a mutable current URL.

If the current source later changes, is corrected, superseded or relocated, the platform should preserve enough historical addressing/provenance to understand what was cited.

For external sources, access date, external identifier, archived reference, version marker or other evidence may be recorded when useful. No single citation format is mandated for every source class.

---

## R7-B9 — Citation and evidence are related but not synonymous

**Type: NEW CORE MODEL**  
**Rule class: HARD INVARIANT.**

A citation records a reference. Evidence semantics describe how a source bears on a Claim or assessment.

Where useful, evidence relations may be typed such as:
- supports;
- contradicts;
- qualifies;
- contextualizes;
- is the primary/source basis for;
- is cited without asserting evidentiary support.

The presence of a citation must not automatically mean the cited source proves the Claim.

---

## R7-B10 — Rights/licensing state is time-aware and may change without rewriting source provenance

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

The platform's current permission/usage basis for displaying or reproducing material may change independently from the historical fact of where that material came from.

A license may expire, terms may change, permission may be withdrawn, a source may be reclassified, or a legal/policy review may change what the platform can display.

Such changes affect current availability/use but do not require falsifying historical source provenance.

Exact jurisdiction-specific legal rules and retention periods remain deferred to legal/privacy design.

---

## R7-B11 — A source whitelist is a governed ingestion/use policy tool, not a universal declaration of copyright truth

**Type: NEW SAFEGUARD / operational bridge**  
**Rule class: HARD INVARIANT for semantics; workflow ADAPTIVE.**

The platform may maintain an approved-source whitelist for images, scans, catalogues or other materials.

A whitelist entry should be able to record, where relevant:
- source/provider/institution identity;
- allowed material/category or collection scope;
- usage basis or policy rationale;
- evidence/reference supporting that determination;
- restrictions/conditions;
- review date/status;
- exceptions or escalation path.

Whitelist status means the source is currently approved for defined platform use under the platform's policy. It does **not** mean every item on that website is universally copyright-free, authentic, accurate or usable for every purpose.

The system must support source-level rules plus item-level exceptions where necessary.

---

## R7-B12 — Public provenance and internal compliance evidence are separate disclosure layers

**Type: NEW SAFEGUARD**  
**Rule class: HARD INVARIANT for separability; disclosure policy ADAPTIVE.**

Users should receive enough public provenance to understand and cite the material where appropriate.

However, internal evidence such as contractual documents, private correspondence, sensitive reviewer notes, abuse-sensitive checks or legal analysis need not be publicly exposed merely because it supports an internal rights/source decision.

The architecture must support public attribution/citation data and restricted internal compliance/audit evidence as distinct visibility layers.

---

## R7-B13 — Unknown, incomplete and disputed source metadata must be representable without fabrication

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

The platform must be able to represent states such as:
- unknown author;
- uncertain date;
- attributed author;
- probable/possible edition relation;
- incomplete provenance;
- disputed holding/source identification;
- rights status pending review.

Unknown is not false, and missing metadata must not be filled by invented certainty merely to satisfy a schema.

Any inferred/estimated value that materially matters should remain distinguishable from directly sourced fact.

---

## R7-B14 — External record reconciliation must not collapse distinct editions/items prematurely

**Type: NEW SAFEGUARD**  
**Rule class: HARD INVARIANT.**

When importing or linking records from libraries, museums, archives or other databases, similar titles/names/identifiers do not prove identity.

The system should support candidate matches, aliases and explicit reconciliation while preserving the possibility that two records represent different editions, physical items, people or works.

Merge/split decisions remain provenance-bearing and reversible/correctable according to Round 7 and Round 6 lifecycle rules.

---

## R7-B15 — Source withdrawal, broken links and removed assets preserve historical provenance without implying continued availability

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

If an external source disappears, a link breaks, a provider removes an asset or the platform can no longer display a reproduction, the system should not erase the fact that the source was previously used.

Where lawful and appropriate, preserve a minimal provenance/tombstone record stating that the source/asset is unavailable, withdrawn, replaced or no longer displayable.

This does not grant permission to retain or republish material that must be removed.

---

## R7-B16 — Institution ownership/holding, public-domain status and digital-image rights are separate facts

**Type: CLARIFICATION / source-rights boundary**  
**Rule class: HARD INVARIANT.**

The platform must not infer that:
- a library holds a historical object -> it owns copyright in the underlying historical text;
- a historical work is public domain -> every modern scan/photo/reproduction is automatically reusable in every jurisdiction/context;
- a website provides public access -> unrestricted reuse is automatically permitted;
- a licence to one digital image -> rights to the entire collection or underlying Work are granted.

These are separate factual/legal relations that may differ by item, provider, jurisdiction and intended use.

Round 7 records the separation; exact legal determinations remain outside product architecture and require the appropriate evidence/policy workflow.

---

# Deferred questions after Workshop B

Still deferred:
1. final public terminology for Work/Edition/Witness/Surrogate/Segment;
2. detailed classical-text edition and collation data model;
3. exact image-source whitelist schema and operational review workflow;
4. public citation style(s);
5. exact evidence relationship vocabulary;
6. confidence/uncertainty display and editorial policy;
7. external archival snapshot strategy;
8. jurisdiction-specific rights/legal rules;
9. exact ingest automation and deduplication technology;
10. UI for comparing editions/variants/facsimiles/transcriptions.

# Required adversarial checks before Round 7 seal

Later consolidation/audit must attack at least:
- catalogue record vs source-item confusion;
- physical item vs digital surrogate collapse;
- edition genealogy mistaken for quality ranking;
- OCR/transcription detached from its source;
- normalized text erasing variants;
- translation/commentary laundering into canonical text;
- citation drift;
- citation treated as proof;
- whitelist over-generalization;
- public access mistaken for reuse permission;
- rights state changes rewriting historical provenance;
- sensitive compliance evidence overexposure;
- unknown metadata replaced by fabricated certainty;
- external-record false merge;
- removed source vs durable citation integrity.

# Gate

R7-B1 through R7-B16 are proposals only until the user explicitly accepts or modifies them. Do not implement code from this file.