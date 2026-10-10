# Round 7 — Knowledge Graph & Provenance — Workshop A

> Status: **PROPOSED / NOT YET ACCEPTED**
> Scope: Product architecture only. No implementation authorization.
> PR: #53 (`docs/ink-east-product-architecture-v1`)
> Precondition: Round 6 is revalidated/replacement-sealed on `INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md`.

## Purpose

Round 7 defines how Project 3 represents knowledge objects, relationships, sources, versions, citations and transformation provenance without collapsing them into one generic Article system or one universal truth score.

This first workshop batch focuses only on the **core ontology and provenance boundaries**. Storage technology, UI, ranking and exact workflow thresholds remain deferred.

The standing project rule remains:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

Every proposal below is labeled as `HARD INVARIANT`, `ADAPTIVE RULE`, `DEFERRED CALIBRATION`, or `EXAMPLE`.

---

## R7-A1 — Knowledge Graph is a logical product model, not a mandatory graph-database choice

**Type: ARCHITECTURE BASELINE**  
**Rule class: HARD INVARIANT for product semantics; implementation technology DEFERRED.**

The platform may represent a knowledge graph through relational tables, document structures, a graph database, search indexes, or a hybrid. The product architecture must preserve graph semantics independently from the storage engine.

Canonical rule:

- entities/objects have stable internal identity;
- typed relationships connect them;
- provenance can be attached to claims, relationships, sources and transformations;
- implementation must not hard-code current storage technology into product truth.

No graph database is authorized merely because the product model is called a knowledge graph.

---

## R7-A2 — Knowledge Entity, Authority-bearing Subject, Work/Object and Claim remain separate

**Type: HARDENING of the Round 6 boundary**  
**Rule class: HARD INVARIANT.**

Preserve the Round 6 distinction:

- `Knowledge Entity` = broad knowledge-graph identity such as Person, Organization, Place, Concept, Event/Period and future knowledge entities;
- `Authority-bearing Subject` = narrower operational subject capable of holding permissions/representation/control;
- `Work / Knowledge Object` = a durable authored, compiled, source, media or publication object;
- `Claim` = an assertion about an entity/object/relationship;
- `Relationship` = a typed relation between objects.

A Work may itself be addressable in the knowledge graph without becoming an operational authority-bearing subject. A Claim about an Organization does not create permission to act for that Organization.

The architecture must not re-collapse these concepts for implementation convenience.

---

## R7-A3 — Stable internal identity is distinct from labels, names, URLs and external identifiers

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

Every durable graph object that needs continuity uses a stable internal identity. Human-readable labels, titles, transliterations, aliases, URLs, catalogue numbers and external database identifiers are attributes or mappings, not the sole identity key.

Therefore:

- rename does not create a new object;
- recycled/reassigned external identifiers do not automatically transfer identity;
- one object may have multiple external identifiers;
- two records that later prove to represent the same real-world object may be reconciled through explicit merge/reconciliation provenance rather than silent primary-key replacement.

This extends the Round 6 recycled-identifier rule into the knowledge layer.

---

## R7-A4 — Work, Edition/Version, Witness/Manifestation and Segment are distinguishable where needed

**Type: NEW CORE MODEL**  
**Rule class: HARD INVARIANT for distinguishability; ADAPTIVE RULE for which layers each content type actually uses.**

The platform must be able to distinguish, where the source domain requires it:

1. `Work` — the enduring intellectual/historical work identity;
2. `Edition / Version` — a defined textual/editorial/version state;
3. `Witness / Manifestation / Source Item` — a particular physical or digital source instance, scan, holding, copy or published manifestation;
4. `Segment` — an addressable subdivision such as chapter, juan, section, passage, page, image region or other content-specific unit.

Not every object must use every layer. Modern user posts may need only Work + Version. Classical-text research may require the fuller chain.

The exact public naming is deferred.

---

## R7-A5 — Provenance records origin and transformation; provenance is not truth certification

**Type: HARDENING of A42/A43**  
**Rule class: HARD INVARIANT.**

Provenance answers questions such as:

- where did this object/data/text/image come from?
- which edition/source/item was used?
- who or what created/transcribed/digitized/transformed it?
- what transformation steps occurred?

Provenance does **not** mean every factual or interpretive claim inside the source is true.

Canonical separation:

`source identity / provenance / edition confidence`

is separate from

`claim truth / interpretation / historical reliability / scholarly dispute`.

A perfectly provenance-correct transcription may contain historically contested statements because the source itself contains them.

---

## R7-A6 — Transformation provenance is first-class for OCR, transcription, collation, translation, annotation and AI-assisted work

**Type: NEW SAFEGUARD / provenance hardening**  
**Rule class: HARD INVARIANT for traceability; detail level ADAPTIVE.**

When a derived object materially transforms a source, the platform should preserve enough provenance to reconstruct the transformation chain where relevant.

Potential transformation kinds include:

- digitization / scanning;
- OCR;
- manual transcription;
- punctuation;
- normalization;
- collation;
- translation;
- annotation;
- entity extraction;
- summarization;
- restoration/enhancement;
- AI-assisted transformation;
- editorial correction.

Where material, provenance may record input source/version, responsible Actor/Organization/automation, method/tool/model version, timestamp/version and review state.

No universal requirement is created to store every low-level technical parameter for every trivial transformation.

---

## R7-A7 — Authorship, compilation, editing, publishing, holding, digitization and transformation are typed relationships, not one generic “source” field

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

The platform must distinguish roles such as:

- Author / Co-author;
- Compiler;
- Translator;
- Editor;
- Commentator / Annotator;
- Publisher;
- Holding Institution / Repository;
- Digitizer / Scan Provider;
- Transcriber / Collator;
- Photographer / Illustrator;
- Data Provider;
- Operator / Platform Publisher.

One Organization may play several roles, and different Organizations may play different roles in the same provenance chain.

Do not collapse `who wrote it`, `who owns/holds this copy`, `who digitized it`, and `who published it online` into one field.

---

## R7-A8 — Claims can coexist, conflict and remain unresolved without forcing one universal “truth row”

**Type: NEW CORE MODEL**  
**Rule class: HARD INVARIANT for contested-knowledge support; resolution policy ADAPTIVE.**

Historical/cultural knowledge frequently contains competing claims. The graph must be able to represent:

- Claim A;
- Claim B that contradicts Claim A;
- the sources/evidence/proponents for each;
- current editorial/scholarly assessment where the platform chooses to provide one;
- unresolved/contested state.

The system must not overwrite one claim merely because another later claim is preferred.

A platform-preferred interpretation, when one exists, is a separately attributable assessment, not deletion of competing historical claims.

No universal numeric confidence score is required.

---

## R7-A9 — Relationship facts are provenance-bearing and time-aware where the domain requires it

**Type: HARDENING**  
**Rule class: HARD INVARIANT for the ability to express provenance/time; usage ADAPTIVE.**

Relationships such as:

- person held office in organization;
- text attributed to author;
- work belongs to dynasty/period;
- place changed administrative affiliation;
- organization succeeded another;
- one edition derives from another;

may change over time, be disputed, or depend on source interpretation.

The model must support effective time/range, provenance, dispute/supersession and uncertainty where relevant rather than treating every edge as timeless absolute truth.

---

## R7-A10 — Citation and evidence linkage operate at the most useful addressable level

**Type: NEW CORE MODEL**  
**Rule class: ADAPTIVE RULE with a stable-addressing invariant.**

A citation may point to the most appropriate stable target available, for example:

- whole Work;
- Edition/Version;
- chapter/juan/section;
- passage;
- page;
- facsimile image;
- image region;
- external archival/catalogue record.

The platform should not force all citations to one granularity.

Where a source/version later changes, citation identity should preserve what was actually cited when feasible rather than silently retargeting to materially different content.

---

## R7-A11 — Source provenance, rights/licensing provenance and epistemic assessment are separate axes

**Type: NEW SAFEGUARD**  
**Rule class: HARD INVARIANT.**

The platform must not conflate:

1. **Source provenance** — where the material came from;
2. **Rights / license / usage basis** — why the platform may display/use/reproduce it;
3. **Epistemic/source assessment** — how reliable/authentic/complete the source or transcription appears for the stated purpose.

A source may be historically excellent but legally unusable in a particular way. A public-domain image may be legally usable but poorly identified. A licensed scan may accurately represent a specific copy without proving claims written inside the source.

These axes may inform workflows together but remain separately attributable.

---

## R7-A12 — Knowledge corrections preserve provenance rather than silently rewriting history

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

Corrections, merges, splits, re-attributions, edition reassignment and source corrections should preserve an auditable/versioned history appropriate to consequence.

Examples:

- wrong Person attribution corrected;
- two duplicate Place records merged;
- one conflated historical person split into two entities;
- a scan previously assigned to the wrong edition reassigned;
- OCR corrected;
- a source later found unreliable or miscatalogued.

Current graph state may change, but material prior state/provenance should remain reconstructable where lawful and appropriate. Privacy/legal deletion remains separately governed.

---

## R7-A13 — The graph connects content lanes without flattening their authority semantics

**Type: HARDENING of Content & Knowledge System V1**  
**Rule class: HARD INVARIANT.**

Canonical classical texts, editorial/teaching works, contributor works, community publications, discussions, Issues and future research objects may all connect to shared Persons, Places, Concepts, Works, Events and Topics.

Connection does not equal equivalence.

Therefore:

- a community post linked to a canonical passage remains community content;
- a canonical passage linked from a popular post does not become socially governed content;
- Issue curation does not rewrite the source object's authorship/provenance;
- Work Recognition does not become canonical/source authority;
- popularity does not become source reliability.

---

## R7-A14 — AI/research assistance must remain source-grounded and provenance-preserving where it presents factual synthesis

**Type: NEW SAFEGUARD / future-proofing**  
**Rule class: HARD INVARIANT for traceability of factual synthesis; product scope DEFERRED.**

If future AI/research assistance summarizes, compares, translates, extracts or synthesizes factual/interpretive knowledge from platform sources, the architecture must support traceable source grounding appropriate to the output.

AI output must not silently become a canonical source merely because the platform generated it.

The exact AI feature set, model stack, confidence display and user experience are deferred to later product design.

---

# Deferred questions created by Workshop A

The following are intentionally not decided yet:

1. final public names for Work / Edition / Witness / Manifestation layers;
2. exact taxonomy of Knowledge Entity subtypes;
3. whether claims themselves become first-class graph nodes in every case or only where useful;
4. exact uncertainty/confidence vocabulary;
5. exact passage/segment addressing scheme by content class;
6. merge/split/correction workflow UX;
7. rights/license evidence workflow and source-whitelist implementation;
8. exact classical-text edition/collation model;
9. graph database vs relational/hybrid storage;
10. public graph browsing UI;
11. AI/research-assistant implementation scope;
12. how much provenance is public vs staff/editorial/internal-only by sensitivity and product need.

---

# Required adversarial checks before any Round 7 seal

Any later Round 7 consolidation must test at least:

- source provenance vs truth conflation;
- Work/Edition/Witness/Segment collapse;
- duplicate entity merge/split errors;
- contested claims and contradictory evidence;
- mutable/recycled external identifiers;
- temporal relationship errors;
- citation drift after version changes;
- attribution laundering;
- AI/automation provenance loss;
- source/rights/licensing conflation;
- canonical authority vs Work Recognition leakage;
- deletion/withdrawal vs citation integrity;
- privacy-sensitive provenance exposure;
- ordinary-editor workflow simplicity vs research-grade complexity;
- rigidity: no universal layer/count/confidence formula where domains differ.

---

# Gate

This file contains **proposals only**. None of R7-A1 through R7-A14 is accepted until the user explicitly confirms or modifies them.

Do not implement code from this file.
