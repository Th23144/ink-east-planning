# Round 7 Workshop B — Rights Policy Alignment Addendum

> Status: **PROPOSED / NOT YET ACCEPTED**
> Scope: Product architecture only. No implementation authorization.
> Read with: `docs/INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-B.md`
> Reference basis: user-confirmed `Ink & East Ancient Books Image Rights & Source Policy v0.1` (2026-09-13).

## Purpose

Workshop B already separates source provenance, rights/licensing provenance, item-level exceptions, public/internal evidence, source withdrawal, and digital-image rights. This addendum captures additional product-policy constraints from the confirmed ancient-books image-rights policy that were not explicit enough in B1–B16.

The source-policy institution list remains an **operational whitelist / research policy**, not hard-coded ontology. Round 7 defines the semantics and evidence requirements needed to support that policy without freezing one permanent institution list into product architecture.

Standing rule: precise boundaries, adaptive circumstances.

---

## R7-B17 — Rights clearance uses a commercial-use baseline from the start

**Type: PRODUCT-POLICY HARDENING**  
**Rule class: HARD INVARIANT for this product policy; jurisdiction-specific legal interpretation remains deferred.**

Ancient-book image clearance for Ink & East is evaluated against intended commercial/platform use, not against a temporary assumption that a page is currently free, ad-free, pre-membership, pre-publication or pre-revenue.

This avoids building a historical rights debt around resources that are usable only under non-commercial terms.

A later change in product context may still require re-review where the original usage basis was narrower than the new use.

---

## R7-B18 — Item-level rights override collection-level rights, which override institution-level policy

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

Rights/usage evaluation follows this precedence:

`Item-level Rights > Collection-level Rights > Institution-level Policy`

An institution-level whitelist entry is never an automatic approval for every object. A more specific restriction or exception attached to a collection/item controls that use decision.

The platform must therefore support source-level policy plus narrower collection/item exceptions.

---

## R7-B19 — Rights-clearance state and edition/editorial-selection state are separate workflows

**Type: CORE SEPARATION**  
**Rule class: HARD INVARIANT.**

Rights clearance answers: **may the platform use/display/reproduce this digital material under the intended use?**

Edition/editorial selection answers: **should this legally usable source become the primary display/base edition for the product?**

A rights-approved source is only an eligible candidate. Main-edition selection may separately consider chronology, edition type, completeness, textual system, commentary tradition, image quality, page continuity, IIIF/high-resolution availability and compatibility with the platform text system.

Multiple rights-approved versions may coexist as other editions / comparison sources.

---

## R7-B20 — Rights evidence preserves original wording and decision evidence, not only a normalized status

**Type: PROVENANCE HARDENING**  
**Rule class: HARD INVARIANT for preservation; exact schema DEFERRED.**

For material used in production, the platform must be able to retain the evidence basis supporting the clearance decision, including where applicable:

- holding/source institution;
- collection/item identity and version description;
- stable identifier/shelfmark;
- original item URL;
- rights status;
- rights-policy/evidence URL;
- original rights wording;
- whether commercial use is permitted under the relied-upon basis;
- attribution/credit requirements;
- modification/crop/transcode conditions;
- whether permission is required;
- review/verification date;
- permission correspondence, license file or application/reference number when applicable.

Normalized workflow status must not destroy the institution's original wording.

`Public Domain` and `No Known Copyright Restrictions` are therefore not silently collapsed into the same stored rights assertion.

---

## R7-B21 — Acquisition/discovery ability is separate from reuse authorization

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

A resource being downloadable, viewable, exposed over IIIF, indexed by search, linked by a secondary discovery site, or technically retrievable does not itself establish commercial reuse permission.

Secondary discovery sources may help locate a work/version/provider, but rights evidence should, where reasonably possible, resolve back to the original holding/digitizing institution or other authoritative rights provider.

Discovery provenance and rights-clearance provenance remain distinguishable.

---

## R7-B22 — Rights decisions are time-aware, snapshot-capable and re-reviewable

**Type: HARDENING**  
**Rule class: HARD INVARIANT for temporal history; snapshot technology DEFERRED.**

The platform must be able to distinguish:

- the rights/usage basis relied upon when an item was approved;
- the current known rights state;
- the most recent review result.

Where appropriate, preserve evidence snapshots or equivalent records because provider URLs/policies may change or disappear.

A later withdrawal, policy change, rights claim or discovery that an earlier clearance was wrong may trigger re-review, temporary suspension, replacement of the displayed source or another proportionate action without erasing the historical provenance record.

---

## R7-B23 — Rights clearance must represent special restrictions and third-party conditions

**Type: NEW SAFEGUARD**  
**Rule class: HARD INVARIANT for representability; treatment ADAPTIVE.**

Even where the underlying historical work is public domain, a specific digital source/item may carry additional constraints such as donor restrictions, privacy/publicity issues, cultural-sensitivity conditions, third-party rights, special-collection terms or collaborative-digitization restrictions.

The model must be able to represent those item-specific constraints and prevent a broad institution/collection rule from erasing them.

Unknown or unresolved conditions remain REVIEW rather than being guessed into approval.

---

## R7-B24 — Reuse permission and technical access permission are separate

**Type: HARDENING**  
**Rule class: HARD INVARIANT.**

Permission to reuse an image does not automatically authorize unlimited scraping, hotlinking or consumption of the provider's infrastructure.

Technical acquisition/serving must separately respect applicable access rules such as rate limits, robots directives, API/IIIF conditions, download restrictions and other provider technical terms.

The platform may choose local storage, caching, transformation, IIIF, CDN or other delivery architecture later, but open-reuse status must not be treated as permission to bypass technical-use constraints.

---

# Operational workflow compatibility

The confirmed image-rights policy uses operational review outcomes including:

- `APPROVED`
- `REVIEW`
- `PERMISSION REQUIRED`
- `BLOCKED`

Round 7 should support equivalent semantic states, but exact CMS field names and workflow UI remain an implementation decision.

The confirmed policy also uses A/B/C/D source classes as a **search and clearance priority tool**. Those classes should remain configurable governed policy, not permanent ontological quality levels and not a global trust/authority ladder.

---

# Effect on Workshop B

R7-B1–B16 remain unchanged proposals. This addendum does not contradict them; it makes the following previously implicit boundaries explicit:

1. commercial-use baseline;
2. item > collection > institution precedence;
3. rights approval != edition selection;
4. preservation of original rights wording/evidence;
5. download/discovery != reuse authorization;
6. historical/current rights states and evidence snapshots;
7. special restrictions / third-party conditions;
8. reuse rights != technical access rights.

If accepted, R7-B1–B24 should be carried together into the later Round 7 current-truth consolidation and adversarial audit.

No product code is authorized by this addendum.
