# Round 7 — Knowledge Graph & Provenance — Current Truth V1

Status: **CURRENT TRUTH / CONSOLIDATED — PRODUCT ARCHITECTURE ONLY**. No implementation authorization.

This document consolidates the accepted Round 7 rules from Workshop A, Workshop B + Rights Policy Alignment Addendum, Workshop C, and Workshop D. It is a current-truth consolidation for architecture review and audit. It does not authorize product-code implementation.

Standing rule: **The architecture must be precise about boundaries without being rigid about circumstances.** Preserve the distinction among HARD INVARIANT, ADAPTIVE RULE, DEFERRED CALIBRATION and EXAMPLE.

## Frozen accepted source set

- Workshop A — `INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-A.md`, blob `a259bfdf34c39194aba82399e4bde19f06c9fdeb`; accepted by `ROUND-7-A1-A14-ACCEPTED.md`.
- Workshop B — `INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-B.md`, blob `50559e1ee1323751318075ac773f3efc5d5f06a3`.
- Workshop B rights addendum — `INK-EAST-ROUND-7-WORKSHOP-B-RIGHTS-POLICY-ALIGNMENT-ADDENDUM.md`, blob `85aeb9092c0d7e8d1912d4d5d922ef496b72e688`.
- Workshop B accepted by `ROUND-7-B1-B24-ACCEPTED.md`, blob `db4b00a73f48c0ff992bf5da9210e8f42831f705`.
- Workshop C — `INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-C.md`, blob `32711447667c3ec9c0a10ac00f1789b5af3984b8`; accepted by `ROUND-7-C1-C18-ACCEPTED.md`, blob `4f7d79c78417b1bce18c13b48664155d8b5a25f9`.
- Workshop D — `INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-D.md`, blob `77be4313a9a378fefdf1434be4a3e70f813c89fe`; accepted by `ROUND-7-D1-D18-ACCEPTED.md`, blob `9bb8474a1ee1098a6838b59d2e83d6f37b191baa`.
- User-confirmed operating policy: `Ink & East Ancient Books Image Rights & Source Policy v0.1` remains an operational rights/search-clearance policy input; Round 7 supports it without hard-coding its institution list into permanent ontology.

If this consolidation is ever ambiguous, the accepted source rule text above controls; this file must not be used to weaken a more specific accepted rule.

---

# A. Core knowledge model and provenance

**R7-A1** — Knowledge Graph is a logical product model, not a mandatory graph-database choice. Product semantics are invariant; storage technology remains deferred.

**R7-A2** — Knowledge Entity, Authority-bearing Subject, Work/Knowledge Object, Claim and Relationship remain distinct. Addressability in the graph does not create operational authority.

**R7-A3** — Stable internal identity is distinct from labels, names, URLs, catalogue numbers and external identifiers. Renames or external-ID changes do not silently replace identity.

**R7-A4** — Work, Edition/Version, Witness/Manifestation/Source Item and Segment must be distinguishable where the domain requires them; not every content class must use every layer.

**R7-A5** — Provenance records origin and transformation; provenance is not truth certification. Source identity/provenance/edition confidence remains separate from claim truth, interpretation, historical reliability and scholarly dispute.

**R7-A6** — Material OCR, transcription, collation, translation, annotation, restoration, extraction, summarization and AI-assisted transformation preserve appropriate transformation provenance. Detail level is adaptive.

**R7-A7** — Authorship, compilation, translation, editing, commentary, publishing, holding, digitization, transcription/collation, photography/illustration, data provision and platform operation are typed relationships, not one generic source field.

**R7-A8** — Competing Claims may coexist, conflict and remain unresolved. A preferred editorial interpretation is an attributable assessment, not deletion of competing claims. No universal truth score is required.

**R7-A9** — Relationship facts may carry provenance, time, dispute, supersession and uncertainty where relevant rather than being treated as timeless absolute edges.

**R7-A10** — Citation/evidence linkage may target the most useful stable level: Work, Edition/Version, chapter/juan/section, passage, page, facsimile, image region or external archival/catalogue record. Material citation drift should be resisted.

**R7-A11** — Source provenance, rights/license/usage basis and epistemic/source assessment are separate axes.

**R7-A12** — Corrections, merges, splits, re-attributions, edition reassignment and source corrections preserve reconstructable provenance/version history where lawful and appropriate.

**R7-A13** — The graph may connect canonical texts, editorial/teaching works, contributor works, community publications, discussions, Issues and future research objects without flattening their authority semantics. Connection is not equivalence; popularity is not source reliability; Work Recognition is not canonical/source authority.

**R7-A14** — AI/research assistance that performs factual or interpretive synthesis must remain appropriately source-grounded and provenance-preserving. Platform-generated output does not become canonical merely because the platform produced it.

---

# B. Editions, source items, citations, rights and image-source policy

**R7-B1** — Bibliographic/catalogue metadata is distinct from the Work/Edition/Source Item it describes and from the digital asset actually viewed or obtained.

**R7-B2** — Edition/version genealogy is a typed derivation network, not a universal better/worse ladder. Editorial preference for a purpose is attributable and scoped.

**R7-B3** — A physical Source Item/Witness is distinct from its digital surrogate. One source item may have multiple digital surrogates; distinct physical copies must not be silently collapsed.

**R7-B4** — Historical image/facsimile provenance distinguishes represented object, holding/describing institution, digital provider, exact source record, usage basis, and platform-side transformations.

**R7-B5** — OCR/transcription is anchored to the relevant source/version, remains revisable, and preserves traceable correction history. Machine OCR, human-reviewed text and corrected text remain distinguishable when material.

**R7-B6** — Collation and textual variants are first-class where needed. A platform base text or normalized reading must not erase known variants or imply witness agreement where none exists.

**R7-B7** — Translation, modern rendering, annotation, commentary and teaching notes are derivative knowledge objects with their own authorship/provenance and target source/version/segment.

**R7-B8** — Citation identity should resist drift after source/version changes by preserving the actual version/segment/source state relied upon where feasible.

**R7-B9** — Citation and evidence are related but not synonymous. Evidence relations may support, contradict, qualify, contextualize, provide source basis, or simply cite without proving a Claim.

**R7-B10** — Rights/licensing state is time-aware and can change without rewriting historical source provenance.

**R7-B11** — A source whitelist is a governed ingestion/use policy tool, not a universal declaration of copyright truth. Source-level rules must allow narrower collection/item exceptions.

**R7-B12** — Public provenance and restricted internal compliance/audit evidence are separate visibility layers.

**R7-B13** — Unknown, incomplete, inferred and disputed source metadata must be representable without fabricated certainty.

**R7-B14** — Cross-database/import reconciliation must not prematurely collapse similar titles, names or identifiers into one Work, Edition, Source Item, Person or other entity.

**R7-B15** — Broken links, source withdrawal, removed assets or loss of display permission may preserve minimal historical provenance/tombstones where lawful without implying continued availability or reuse permission.

**R7-B16** — Institution holding, public-domain status of the underlying Work, and rights/terms for a modern digital image are separate facts.

**R7-B17** — Ancient-book image clearance uses a commercial-use baseline from the start rather than relying on temporary free/non-commercial product conditions.

**R7-B18** — Rights evaluation follows the specificity precedence `Item-level Rights > Collection-level Rights > Institution-level Policy`.

**R7-B19** — Rights clearance and editorial/edition selection are separate workflows. Rights approval makes a source eligible; it does not automatically make it the primary display/base edition.

**R7-B20** — Rights evidence preserves original wording and decision evidence, not only a normalized status. `Public Domain` and `No Known Copyright Restrictions` are not silently collapsed.

**R7-B21** — Downloadability, public viewing, IIIF exposure, indexing or discovery through secondary sites does not itself establish commercial reuse authorization. Rights evidence should resolve to the authoritative rights/source provider where reasonably possible.

**R7-B22** — Rights decisions preserve relied-upon historical basis, current known state and latest review result; evidence may be snapshot-capable and decisions re-reviewable.

**R7-B23** — Donor restrictions, privacy/publicity, cultural-sensitivity conditions, third-party rights, special-collection terms and collaborative-digitization restrictions must remain representable. Unresolved conditions stay under review rather than being guessed into approval.

**R7-B24** — Reuse permission and technical access permission are separate. Open reuse does not authorize bypassing rate limits, robots, API/IIIF conditions, download restrictions or other provider technical rules.

Operational compatibility: workflows may support states equivalent to `APPROVED`, `REVIEW`, `PERMISSION REQUIRED`, `BLOCKED`. A/B/C/D source classes remain configurable search/clearance policy, not a global trust level or ontology hierarchy.

---

# C. Claims, evidence, uncertainty, disagreement and correction

**R7-C1** — A Claim becomes first-class where evidence, disagreement, correction, attribution or review requires independent addressability; not every sentence must become a Claim object.

**R7-C2** — The asserted proposition, attribution/reporting actor, source/version representation and platform/editorial assessment remain separate.

**R7-C3** — Evidence relations are directional and Claim-specific. A source may support one Claim while contradicting, qualifying, contextualizing or merely citing another.

**R7-C4** — Source assessment is purpose-scoped. No universal source-quality rank is created.

**R7-C5** — Primary/secondary/tertiary labels are descriptive and do not form an automatic authority hierarchy.

**R7-C6** — Absence of evidence is not automatically evidence of absence. Direct contradiction, expected-but-absent evidence, incomplete research and unknown remain distinguishable.

**R7-C7** — Uncertainty is multi-dimensional and may concern identity, date, authorship, evidence completeness, ambiguity, conflicting witnesses, provenance or interpretation. No universal percentage is required.

**R7-C8** — Credible scholarly disagreement remains recoverable with its sources/evidence and optional editorial synthesis. Editorial preference does not erase competing scholarship.

**R7-C9** — Material platform/editorial assessment is attributable and revisable, preserving subject, conclusion, basis/evidence, assessment provenance and revision history appropriate to consequence.

**R7-C10** — Claim state and source state are independent. Source withdrawal or reassessment does not mechanically make every linked Claim false; correcting a Claim does not erase the historical source that made it.

**R7-C11** — Material evidence changes support dependency-aware, proportionate re-evaluation rather than blind downstream rewriting.

**R7-C12** — Correction, withdrawal, supersession and reinterpretation are distinct operations with different meanings and downstream effects.

**R7-C13** — Material Claim revisions preserve semantic history. Minor wording fixes need not create a new Claim; material proposition/scope/time/evidentiary changes require versioning, supersession or a new Claim as appropriate.

**R7-C14** — Quote, paraphrase, translation, interpretation and extraction remain distinguishable forms.

**R7-C15** — Derived/inferred Claims preserve derivation provenance and must not later be presented as though the source directly stated the full conclusion.

**R7-C16** — Machine-derived Claims remain derivative/candidate knowledge until appropriately grounded and reviewed for the consequence at issue.

**R7-C17** — Public explanation and internal evidence may differ in depth, but public certainty must not exceed the maintained assessment.

**R7-C18** — Research-grade semantics must not force research-grade complexity on every user. The product can expose simple reader-facing synthesis with expandable provenance/specialist/internal layers.

---

# D. Entity resolution, temporal identity and lifecycle

**R7-D1** — Same name/title/transliteration/alias does not establish same entity; collisions and homonyms must be supported without forced merge.

**R7-D2** — Different names do not establish different entities. One entity may carry multiple historical names, aliases, romanizations, titles or spelling variants with provenance/language/time/context where useful.

**R7-D3** — Entity reconciliation/merge is an attributable decision, not silent database cleanup. Material merges preserve enough provenance to reconstruct prior records and reasoning.

**R7-D4** — Entity split is a first-class correction. Dependent Claims, relationships, citations, aliases and identifiers are reassigned according to evidence rather than duplicated wholesale.

**R7-D5** — Knowledge-entity merge/split does not automatically migrate operational authority, login access, organization control, permissions, private data or security-boundary membership.

**R7-D6** — External identifiers are provenance-bearing mappings, not infallible identity truth. They may be wrong, deprecated, duplicated, reassigned or corrected without replacing stable internal identity.

**R7-D7** — Identity confidence may be contextual and qualitative; no universal numeric reconciliation-confidence formula is required.

**R7-D8** — Historical Person identity may remain unresolved for disputed authorship, uncertain identity, composite/legendary figures, pseudonymous authorship or ambiguous reconstruction.

**R7-D9** — Person, persona, pseudonym and attributed identity remain distinguishable where historically/editorially useful. Pseudonym labels need not resolve to a verified real-world Person.

**R7-D10** — Organization continuity, renaming, merger, split, succession, affiliation change and duplicate-record correction are distinct relations. No universal `successor = same entity` rule exists.

**R7-D11** — Place identity may require time-aware names, boundaries, administrative levels, parent jurisdictions and political context. Modern administrative mapping must not silently overwrite historical geography.

**R7-D12** — Event, period, reign and dynasty boundaries may be framework-dependent; multiple periodizations/date interpretations may coexist with provenance rather than false universal precision.

**R7-D13** — Occurrence time, validity/effective time and record/knowledge time remain distinguishable where the difference materially affects history, correction or audit.

**R7-D14** — Reconciliation propagates cautiously through dependent Claims/relationships. Merge must not strengthen weak relations mechanically; split must not duplicate all old relations onto all resulting entities.

**R7-D15** — Redirect/alias continuity preserves navigation and old-link resolution without proving historical equivalence or erasing prior identity states.

**R7-D16** — Deleted/unavailable knowledge objects may retain minimal referential tombstones where lawful and appropriate to preserve citation/history integrity, without authorizing retention of content or personal data that must be erased.

**R7-D17** — Cross-source reconciliation preserves source disagreement even when the platform chooses a current working view.

**R7-D18** — Editorial/display convenience must not become ontology truth. Preferred labels, base entities, place names, edition links or default views are presentation/editorial defaults, not proof alternatives are false.

---

# Cross-round boundaries carried forward

Round 7 must continue to preserve the Round 6 distinction between Knowledge Entity and Authority-bearing Subject; knowledge editing/reconciliation never manufactures permissions or representation. Canonical/source authority remains separate from Work Recognition. Popularity remains separate from source reliability. Claim, Relationship and Permission remain distinct. Stable platform/knowledge identity remains separate from mutable public labels and external identifiers.

The user-confirmed Ancient Books Image Rights & Source Policy v0.1 remains the operating source for image-source whitelist/search-clearance practice. Institution lists and A/B/C/D classifications remain governed operational policy and may change without changing ontology.

# Deferred implementation/product calibration

Still deferred until later product/implementation design: exact database technology; final public terminology for Work/Edition/Witness/Manifestation/Surrogate/Segment; exact Knowledge Entity taxonomy; detailed classical-text collation model; precise segment-address scheme; public citation style; uncertainty vocabulary; evidence relation vocabulary; rights-review UI/schema; legal/jurisdiction-specific determinations; graph browsing UI; AI model/feature stack; merge/split/reconciliation UX; transliteration standards; place gazetteer implementation; auto-match thresholds; reviewer counts/thresholds; storage/caching/CDN/IIIF details.

# Current state

Round 7 workshop content is consolidated in this V1 current-truth file. The next gates are source-parity verification, adversarial audit and, if no material blocker remains, Round 7 seal. No product-code implementation is authorized by this file.
