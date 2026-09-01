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
2. Content authority / recognition system
3. Authority / contributor identity system
4. User account weight / trust / publishing-permission system
5. User identity / role / permission system
6. Knowledge graph & provenance system
7. Community & discussion system
8. Reader behavior / interest graph
9. Discovery / recommendation system
10. Issues / editorial curation system
11. Membership / Reading Room
12. Services / monetization / Spatial Flow relationship
13. Governance / moderation / corrections
14. Investor Demo V1 scope
15. Business-plan product narrative

The order can be adjusted when one answer exposes a prerequisite, but deferred subjects must be explicitly carried forward rather than silently decided.

---

# Round 1 — Content & Publishing System

## Round 1 status

**Substantially decided.** The core publishing model is now locked enough to move forward, while several questions intentionally remain for dedicated later rounds.

## Locked principle: identity, content class and content recognition are separate axes

Ink & East must not infer the authority or distribution status of a work directly from the account that created it.

The platform must separately represent:

1. **Identity / account class** — who the account is (new community member, established member, VIP tier, verified contributor, institution, editorial account, etc.).
2. **Content class** — what kind of object was published (canonical text, community publication, contributor publication, editorial publication, discussion, letter, Issue curation, etc.).
3. **Recognition / authority status** — what standing that particular work later earns through eligibility checks, community response, editorial/source review, curation or other future mechanisms.

Consequences:

- a verified/credentialed identity does **not** make every work published by that account authoritative;
- an ordinary community member may create an unusually strong work that later earns durable recognition or curation;
- promotion of a work must preserve authorship and provenance permanently;
- the canonical classical-text lane remains fundamentally different because its authority is based on source/edition/provenance rather than social popularity.

---

## Decision R1-1 — Ordinary-user publishing uses progressive trust, not a binary certified/not-certified gate

The previous simple C-vs-D choice is replaced by a progressive publishing model.

### New / low-trust registered accounts

A newly registered account may publish in Community, but initially operates under stricter limits because the platform does not yet know its intent or quality.

Initial restrictions may include, subject to the later Account Weight round:

- maximum post length / character count;
- rate limits;
- reduced publishing frequency;
- possible additional moderation checks;
- limited access to long-form publishing tools.

The exact numbers are **not decided in Round 1**.

### Established / higher-weight community accounts

When an account gains sufficient platform trust/weight through age and/or other future signals, it may gain the ability to publish longer, more durable community works without becoming a verified/authoritative contributor.

Account age alone must not be assumed to be the final rule; a dedicated Account Weight / Trust system will define the factors later.

### VIP accounts

VIP membership may provide expanded publishing privileges, including long-form community publishing, but the exact privilege must be defined by VIP tier rather than treating all paid accounts identically.

**Payment alone does not make a user authoritative.**

VIP tier design is deferred to the Membership round.

### Verified / authoritative contributor application

A distinct verified/contributor identity system will exist, but it is **not the gate for ordinary long-form community publishing**.

Current direction:

- only eligible VIP users may apply for verified / authoritative-contributor status;
- approval criteria and contributor classes are unresolved;
- this is intentionally deferred to the dedicated Authority / Contributor Identity round.

---

## Decision R1-2 — Strong community work can be promoted without erasing origin

An ordinary or VIP community publication can progress through stronger recognition layers.

The exact names are not yet locked, but the conceptual path may include:

```text
Community Publication
→ Featured / Editor's Choice
→ Community-recognized / Selected Work
→ Durable curated knowledge/publication surface
→ possible Issue inclusion
→ possible contributor invitation
```

Promotion is **work-specific**, not an automatic upgrade of the author's entire account.

Promotion should consider at least two distinct classes of evidence:

1. **content eligibility / quality** — whether the work itself satisfies the criteria for the destination lane;
2. **community response** — reader feedback, evaluations, endorsements/likes and other later-defined quality signals.

No single popularity metric is currently locked as sufficient.

If a work is included in an Issue, promoted into a durable selected layer or otherwise elevated, the system must permanently retain:

- original author;
- original publication provenance;
- original content identity / permalink relationship;
- promotion/curation history.

Ink & East must never make a community-authored work appear to be official editorial authorship merely because it was selected.

---

## Decision R1-3 — Non-academic and independent researchers are eligible for contributor recognition

Formal academic title is not a prerequisite for future verified contributor status.

Potential eligible identities include, but are not limited to:

- scholars and researchers;
- university faculty;
- librarians, archivists, museum/cultural-institution professionals;
- serious independent researchers;
- long-term practitioners with relevant domain expertise;
- published authors;
- invited contributors;
- exceptional community contributors who later satisfy the platform's contributor criteria.

The platform must not equate fame, degree or institutional title with automatic content authority.

---

## New unresolved question R1-A — What does “authoritative content” actually mean?

The workshop exposed that the current term **“authoritative content / 权威内容” is underdefined**.

The user explicitly rejects this model:

```text
verified identity / official account / institutional account
= every work from that account is automatically authoritative
```

The user's current direction is that authority/recognition should be **earned by the individual work**, with meaningful community participation in determining which works rise into that layer.

Possible mechanisms to discuss in Round 2 include:

- community nomination;
- reader endorsement / voting;
- weighted endorsement rather than raw like count;
- minimum eligibility/source/provenance requirements before a work can be nominated;
- editorial or expert validation after community nomination;
- transparent recognition reasons;
- separate labels for popularity, editorial selection and reference-grade reliability.

**Important unresolved naming problem:** pure popularity and epistemic authority are not necessarily the same thing. Round 2 must determine whether the destination should literally be called “Authoritative / 权威”, or whether community-elected excellence needs a different concept such as Selected / Recognized / Recommended / Reference Reading.

No final rule is authorized yet.

---

## New unresolved question R1-B — Dedicated distribution for verified contributors

The user identified a legitimate distribution problem:

If verified contributors publish only into the same general Community feed, low-existing-traffic verified authors may be structurally disadvantaged by competition with the entire platform.

However, making another full top-level “authoritative content” board could create unnecessary product fragmentation.

Current requirement to preserve for Round 2/3:

- verified contributors must have a distribution surface/pool that is distinguishable from ordinary Community distribution;
- that surface should allow verified contributors to compete primarily with other verified contributors for at least part of their exposure;
- verified identity must **not** imply that every item in that surface is authoritative;
- individual contributor works may separately earn stronger recognition later;
- the exact product shape (top-level section, subcategory, filter, shelf, feed candidate pool, quota or hybrid) remains undecided.

This question must be solved before implementation of contributor publishing/discovery.

---

## Decision R1-4 — User publications are durable knowledge-network assets, not disposable social posts

User-generated publications are primarily community-created objects but, when retained, must be capable of functioning as durable knowledge-network assets.

The future model should support:

- stable permalink / stable content identity;
- topic relations;
- classical work/chapter/passage relations where relevant;
- knowledge-node relations;
- search indexing;
- recommendation eligibility;
- saving/bookmarking;
- durable archival treatment;
- editorial/community recognition and promotion;
- version/revision history where appropriate;
- provenance preservation.

This does **not** mean every low-quality/spam post deserves permanent preservation; governance/retention rules will be addressed later.

The key principle is that high-value community knowledge must not be structurally trapped inside an ephemeral social feed.

---

## Decision R1-5 — V1 covers broad Eastern culture, but remains a structured specialist network

V1 should not be limited to only a few Chinese classics, but it also should not become an unrestricted general social network.

The accepted direction is:

- support a reasonably broad Eastern-culture subject space;
- require meaningful Topic / Knowledge-node classification for durable/formal content;
- preserve strong thematic structure instead of a miscellaneous general-discussion feed;
- allow the product taxonomy to expand over time rather than hard-coding today's subject list as permanent scope.

Possible domains include philosophy, classical literature, history, mythology, religion as culture/history, art, material culture, customs, architecture and related Eastern-cultural subjects.

### Religion boundary — explicitly flagged for Governance round

The user distinguished:

- **religious culture / history / texts / philosophy / institutions / art / social context** — appropriate subject matter;
- **religious belief as personal faith, proselytizing, sectarian mobilization or belief-conflict content** — sensitive and requires a different governance boundary.

The exact moderation policy is intentionally not decided in Round 1. It must be addressed explicitly in the Governance round rather than being silently treated as ordinary cultural discussion.

---

# Deferred product questions created by Round 1

These are mandatory future workshop subjects; they must not be forgotten or casually implemented before their dedicated rounds.

## D1 — Account Weight / Trust / Reputation system

Need to define how publishing capability grows over time.

Potential signals to evaluate later may include:

- account age;
- completed profile / identity confidence;
- history of policy-compliant participation;
- quality of prior publications;
- reader feedback;
- editorial recognition;
- successful contributions/corrections;
- moderation history;
- VIP status/tier;
- verified contributor status;
- anti-abuse / anti-farming safeguards.

No formula, score or threshold is currently approved.

## D2 — Verified / authoritative-contributor identity system

Need to define:

- who may apply;
- why application is restricted to eligible VIP users (if this rule survives later review);
- contributor classes;
- evidence requirements;
- institution/organization accounts;
- independent researcher treatment;
- verification renewal/revocation;
- contributor publishing privileges;
- conflict-of-interest handling;
- whether contributor identity affects ranking and by how much.

## D3 — Work-level authority / recognition system

Need to separate:

- popularity;
- community endorsement;
- editorial selection;
- contributor verification;
- source/provenance quality;
- reference-grade reliability;
- canonical source authority.

A single “verified badge + likes” model is explicitly insufficient.

## D4 — Verified-contributor distribution surface

Need to decide whether verified-contributor content is represented through:

- a dedicated top-level publication section;
- a subcategory/filter within a broader publication area;
- a dedicated recommendation candidate pool with guaranteed/diversified exposure;
- an editorial shelf/column;
- or a hybrid.

Goal: fair discoverability without creating redundant content silos.

## D5 — VIP-only content lane / VIP Library existence

The previous VIP-only content-board concept is **not currently locked**.

Its continued existence, purpose and relationship to Membership / Reading Room / contributor publishing must be reconsidered in the Membership round.

Do not treat the old VIP Library static page as proof that the final product must retain the same content architecture.

---

# Round 1 working content classes after decisions

The following are now useful conceptual classes, but naming can still evolve:

1. **Canonical Classical Text** — authoritative source works/chapters/passages, editions, translations, annotations and provenance.
2. **Editorial Publication** — Ink & East official editorial essays, modern interpretations, tutorials and commissioned editorial work.
3. **Contributor Publication** — works published by verified/approved contributors; identity-qualified distribution, but not automatically authoritative work.
4. **Community Publication** — posts/essays/questions/interpretations created by ordinary/VIP community accounts under progressive publishing privileges.
5. **Recognized / Selected Work** — a cross-origin recognition state that a qualifying Community or Contributor work may earn; exact authority semantics unresolved.
6. **Discussion Thread** — conversation linked to a work, passage, topic, publication, issue or community subject; not itself canonical knowledge.
7. **Letters / Ask the Ancient Text** — submissions with editorial review/selection, distinct from open Community publishing.
8. **Issue / Editorial Curation** — a curated publication package that references/include works from other lanes without changing their authorship/provenance.

This structure intentionally avoids treating “verified contributor” and “authoritative work” as synonyms.

---

## Workshop discipline

- Do not turn unresolved ideas into implementation requirements.
- Preserve distinctions between authority, authorship, provenance, identity and popularity.
- Do not infer UI from the data/business model.
- Do not copy Reddit/X/Shidianguji mechanically; borrow only useful product mechanisms.
- Record decisions after each round and carry unresolved questions forward explicitly.
