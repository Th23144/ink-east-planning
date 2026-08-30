# Ink & East Product Architecture / Business System V1 — Workshop

> Status: IN PROGRESS. This is a product/business architecture workshop, not an implementation authorization.
> Started: 2026-08-30

## Purpose

Convert the existing high-level vision and scattered product decisions into one coherent business/product architecture that can drive both Investor Demo V1 and later source-native implementation.

This workshop prioritizes business functions over pages and visual presentation.

## Already locked before this workshop

- Ink & East is not a generic blog or one `Article` system.
- It is the future main platform, combining authoritative Eastern-culture knowledge, digital publishing, community, membership, discovery/recommendation and related services.
- Canonical classical texts, authoritative/editorial teaching content, authoritative contributor content and user-generated content are distinct content classes.
- Canonical classical-text surfaces must preserve authority/provenance and must not be polluted by ordinary social comment feeds.
- Discussion can be linked precisely to canonical works/passages while living in separate discussion/community objects.
- Issues are editorial curation containers over the broader content/knowledge system; Issues are not the entire platform.
- Shidianguji is a product reference for the canonical classical-text reading/research lane only, not a blueprint for the whole platform.
- X-style recommendation architecture is a future reference for user-content-behavior-discovery infrastructure, not a UI template.
- Spatial Flow Commerce Batch A is accepted and stable; further commerce work is deferred while this product architecture is refined.

## Workshop order

1. Content & publishing system
2. Authority / contributor system
3. User identity / role / permission system
4. Knowledge graph & provenance system
5. Community & discussion system
6. Reader behavior / interest graph
7. Discovery / recommendation system
8. Issues / editorial curation system
9. Membership / Reading Room
10. Services / monetization / Spatial Flow relationship
11. Governance / moderation / corrections
12. Investor Demo V1 scope
13. Business-plan product narrative

---

# Round 1 — Content & Publishing System

## Current hypothesis — NOT YET LOCKED

The platform should not force all publishable material into one content type. Candidate lanes include:

1. **Canonical Classical Text** — authoritative source works/chapters/passages, editions, translations, annotations and provenance.
2. **Editorial / Teaching Publication** — Ink & East editorial essays, modern interpretations, tutorials, cultural essays and long-form teaching material.
3. **Verified / Authoritative Contributor Publication** — teaching/research/explanatory work by platform-approved scholars, teachers, institutions or other qualified contributors.
4. **User Publication / Post** — ordinary user-created posts, reading notes, questions, interpretations and discussion starters.
5. **Discussion Thread** — social conversation linked to a work, passage, topic, publication, issue or community subject; not itself canonical knowledge.
6. **Letters / Ask the Ancient Text** — submissions with editorial review/selection, distinct from open community posting.
7. **Issue / Editorial Curation** — a curated publication package that can include canonical excerpts, editorial works, authoritative contributor works, reader questions and discussions without changing the underlying content objects.

The exact lane names, publishing privileges, promotion/demotion rules, interaction rules and authority labels are intentionally unresolved until the user answers the Round 1 questions.

## Round 1 questions

### Q1 — Can ordinary registered users publish long-form content directly?

Choose the closest rule, or replace it:

- **A. Open publishing:** any registered user may publish a long-form post immediately; moderation is mostly reactive.
- **B. Open draft + moderated publication:** users can create freely, but public long-form publication requires automated/manual moderation.
- **C. Community-post only:** ordinary users may post/discuss, but formal long-form teaching/publication lanes require approval or contributor status.
- **D. Mixed by destination:** ordinary users can freely publish in Community/Personal Notes, but only approved works can enter durable Knowledge/Teaching/Publications surfaces.

### Q2 — What should happen when an ordinary user's post is exceptionally good?

Possible mechanisms:

- remain a user post but receive `Editor's Choice` / featured status;
- be promoted into a durable `Selected Essay / Community Selection` layer while retaining original authorship/provenance;
- invite the author to become a Verified Contributor and publish a revised authoritative version;
- permit exceptionally strong user work to be curated into an Issue without pretending it was official Ink & East editorial content.

These can coexist. Need the user's preferred hierarchy.

### Q3 — Who may publish "authoritative teaching" content?

Potential eligible identities:

- Ink & East editor/editorial team;
- formally verified scholars/researchers;
- verified teachers/practitioners with domain expertise but no academic title;
- cultural institutions/libraries/museums/universities;
- invited authors;
- high-reputation community members after platform review.

Need to decide whether "authority" means academic credential, platform verification, editorial endorsement, source citation quality, or a combination.

### Q4 — Should user-generated posts be permanent knowledge assets or primarily social objects?

This affects whether a user post can accumulate:

- stable citations / permalink;
- revisions/version history;
- topic / classical-text / passage relations;
- search indexing;
- recommendation weight;
- archival status;
- editorial promotion;
- long-term preservation after account changes.

### Q5 — How broad should user publishing be at V1?

Possible directions:

- Eastern classical culture only;
- broader Eastern culture (history, philosophy, religion, literature, art, customs, material culture, etc.);
- broad but every post must map to at least one Topic/Knowledge node;
- open general discussion area in addition to culture-focused areas.

This decision strongly affects whether Ink & East feels like a specialist knowledge network or a general social forum.

---

## Workshop discipline

- Do not turn unresolved ideas into implementation requirements.
- Preserve distinctions between authority, authorship, provenance and popularity.
- Do not infer UI from the data/business model.
- Do not copy Reddit/X/Shidianguji mechanically; borrow only useful product mechanisms.
- Record decisions after each round and carry unresolved questions forward explicitly.
