# Ink & East · Content & Knowledge System V1

> Status: authoritative product-direction supplement; **product architecture only, no implementation authorization**.
> Recorded: 2026-08-30
> Scope: Ink & East content/reading/knowledge domain inside Project 3.

## 0. Core correction

Ink & East must **not** be modeled as a magazine/blog where the platform publishes articles and users merely read/comment.

The future product is a broader **content + knowledge + participation system** containing multiple content classes with different authority, integrity, authorship, moderation and interaction rules.

Therefore:

```text
Article != the entire content domain.
```

The existing `Articles / Issues / Topics / Collections` source model is a useful editorial foundation, but it is not the final domain model for the platform.

This document intentionally does not finalize every future category. It locks the separation principles so later product design can expand safely without forcing all content into one generic Article type.

---

## 1. External reference: 识典古籍 / Shidianguji

Reference: `https://www.shidianguji.com/`

Shidianguji is a strong **functional reference for the authoritative classical-text reading/research portion** of Ink & East, not a reference for the whole Ink & East product.

Relevant reference capabilities include, among others:

- authoritative ancient/classical-text catalog and reading;
- full-text / book search and advanced retrieval;
- original text and historical editions;
- OCR / punctuation / entity recognition workflows;
- multi-version collation;
- translation into modern language;
- image-text comparison;
- dictionary / encyclopedia context;
- entity relationships and maps;
- research-assistant / deep-research concepts;
- organized special collections and thematic databases.

Ink & East may learn from these product patterns when designing its Classical Text / Canonical Library surface.

But Shidianguji is **not** the total product model for Ink & East. Ink & East additionally requires reader identity, user publishing, teaching/editorial publishing, community, membership, discussion, recommendation/discovery, services and eventually a broader cultural platform graph.

Do not copy Shidianguji wholesale. Reuse relevant product ideas only after checking legal/content provenance and Project 3's own product truth.

---

## 2. The content domain is a multi-lane system

At minimum the future product must distinguish the following conceptual lanes. Names are provisional; the separation is authoritative.

### A. Canonical / Authoritative Classical Text Library

Purpose: preserve and present authoritative ancient/classical text as a clean knowledge object.

Examples:

- original classical works;
- chapters / juan / sections / passages;
- source editions and provenance;
- facsimile or page images where legally available;
- punctuation / collation / translation / scholarly notes;
- related people, places, concepts and works;
- structured citations and passage identifiers.

This is **not a user post** and is **not a normal editorial article**.

#### Integrity rule — hard boundary

The canonical text surface must not be visually or structurally contaminated by an ordinary social-comment thread underneath the source text.

Reader discussion, interpretation and argument may reference a work/chapter/passage, but social conversation must live in a **separate companion discussion / community surface**.

Conceptually:

```text
Canonical Work / Passage
        │
        ├── authoritative text / edition / translation / notes
        │
        └── "Discuss / related conversations"
                    ↓
             separate social object
```

The canonical record remains clean even if the surrounding community becomes very active.

This separation is a core Product Truth, not a visual preference.

---

### B. Editorial / Teaching / Interpretation Publishing

Purpose: publish explanation, teaching, interpretation, essays and cultural guidance around classical material and Eastern culture.

Possible authors include:

- Ink & East editorial staff;
- invited experts;
- verified/authoritative contributors;
- other future trusted contributor classes.

This lane includes much of what older Project 3 documents loosely called `Articles`, `VIP Long Reads`, modern essays, original stories and educational/editorial posts.

Unlike the canonical text lane, normal Reader Notes / discussion may be attached here where the product permits it.

The future system should distinguish author authority/provenance rather than presenting every post as equivalent.

---

### C. Community / User Publishing

Purpose: allow users to publish and discuss their own ideas, questions, experiences and interpretations.

Examples may include:

- user posts;
- cultural questions;
- reading reflections;
- discussions around texts/issues/topics;
- recommendations or topic suggestions;
- other community formats added later.

This lane is socially interactive by design and can support discussion/replies according to the community phase rules.

It must remain clearly distinguishable from authoritative classical-text records and from verified/editorial teaching content.

User-generated content must never acquire "canonical" authority merely because it is popular.

---

### D. Future specialist / research contribution lanes

Project 3 may later need additional classes such as scholarly annotation, translation contribution, textual collation, research datasets, institutional collections, creator publishing or other specialist content.

These are **not locked as V1 implementation scope**.

The architecture should leave room for them instead of hard-coding the assumption that all future content is one `Article` table.

---

## 3. Authority and provenance are first-class product concepts

The platform must be able to answer:

- What kind of object is this?
- Who authored or supplied it?
- What authority/provenance does it have?
- Is it a canonical source, editorial interpretation, verified expert contribution or user-generated post?
- What edition/source/license applies?
- What may users edit, annotate, reply to or discuss?

Therefore future content architecture needs explicit authority/provenance metadata and permission rules.

Exact role/badge names are **TBD**. Do not invent a final verification program before product planning.

---

## 4. Social interaction must attach differently by content class

Do not give every content object the same generic `comments` behavior.

### Canonical classical texts

- no ordinary inline comment thread polluting the source-reading surface;
- discussion lives in a linked companion discussion/community object;
- users may eventually create citations, private notes, saved passages or references without altering the canonical record;
- public interpretations remain socially separate from authoritative source content.

### Editorial / teaching content

- Reader Notes / replies can be attached where appropriate;
- editor moderation and Editor's Choice rules may apply;
- the author's authority can be visible without making reader replies authoritative.

### User posts / community content

- interaction is native to the object;
- replies/discussion/moderation are expected;
- ranking/recommendation rules can differ from canonical/editorial content.

This separation must survive future visual redesigns.

---

## 5. One knowledge graph should connect the lanes

Although the surfaces are distinct, they should not become isolated silos.

Long term, Ink & East should be able to connect:

```text
Classical Work
  ↕
Passage / Chapter
  ↕
Person / Place / Dynasty / Concept
  ↕
Topic / Collection / Issue
  ↕
Editorial Teaching Article
  ↕
User Post / Discussion / Reader Note
  ↕
User Interest / Follow / Save / Reading History
```

This graph is what can eventually power:

- related reading;
- contextual explanations;
- cross-source discovery;
- personalized recommendations;
- topic/author/text following;
- research navigation;
- community conversations that cite source material;
- future AI/research assistance with traceable source grounding.

The graph is a product direction, not a requirement to build a large graph database immediately.

---

## 6. Search should ultimately span multiple content classes without flattening them

A future search for a concept such as `无为 / Wu Wei` should be able to return different clearly labeled object types, for example:

- canonical passages;
- classical works;
- editorial explanations;
- verified teaching posts;
- Issues / Collections;
- community discussions;
- relevant people/concepts.

Search must preserve content authority/type labels rather than mixing an ancient source passage and a casual user post as equivalent results.

The exact unified-search UX and ranking policy remain TBD.

---

## 7. Relationship to the existing Issues / journal concept

Issues remain valuable and are **not removed**.

They should be understood as an editorial publishing/curation layer inside the larger system, not as the entire content database.

An Issue can curate and connect:

- canonical passages;
- original editorial essays;
- teaching/interpretive pieces;
- stories;
- selected reader questions;
- VIP long reads;
- community responses where editorially appropriate.

Therefore:

```text
Ink & East != Issues only
Ink & East != Articles only
Issues = one high-value editorial packaging/curation mechanism inside the platform
```

---

## 8. Relationship to Community / Reader Notes

The older `Reader Notes` and `/community` product concepts remain useful, but they need to evolve into the wider content system.

Community should not be treated as a single comment aggregation page disconnected from the knowledge layer.

Long-term community objects should be able to reference:

- an Article;
- an Issue;
- a Topic;
- a Classical Work;
- a specific chapter or passage;
- another user/community post;
- eventually other knowledge entities.

This allows discussion to remain socially rich **without inserting the social thread directly into authoritative classical-text layout**.

---

## 9. Investor/product consequence

The investment story should not describe Ink & East as only:

```text
Digital magazine + membership + ecommerce
```

A more faithful long-term product direction is:

```text
Authoritative Eastern-culture knowledge layer
        +
Editorial / teaching publishing
        +
User publishing and community
        +
Reader identity / interest graph
        +
Discovery and recommendation
        +
Membership / premium services
        +
Spatial Flow commerce
```

The authoritative classical-text layer creates source depth and trust.
The editorial/teaching layer makes that knowledge understandable and useful.
The community layer creates participation and user-generated knowledge/discussion.
The identity/interest layer creates personalization and retention.
The commercial layers create monetization paths without reducing the whole platform to commerce.

---

## 10. What is locked vs what remains open

### Locked now

1. Ink & East content is a multi-class system, not a generic blog/article table.
2. Shidianguji is a strong reference for the classical-text reading/research lane only, not the whole product.
3. Canonical classical-text surfaces must preserve source integrity and must not host an ordinary social-comment feed directly under the authoritative text.
4. Social discussion about classical texts belongs to linked companion community/discussion objects.
5. Editorial/teaching content, authoritative contributor content and user-generated posts are conceptually different classes.
6. Authority/provenance must be first-class metadata and permission logic.
7. Distinct content lanes should connect through a shared knowledge/interest relationship layer rather than remain isolated silos.
8. Existing Issues remain an editorial curation product, not the definition of the entire content system.
9. No code implementation should begin from this document alone; business/product architecture must be refined first.

### Still open / requires product design

- final naming of each content lane;
- exact taxonomy and number of subcategories;
- contributor verification / authority tiers;
- canonical text acquisition/licensing/provenance policy;
- edition/version/collation data model;
- translation and annotation workflow;
- private notes vs public annotations;
- exact companion-discussion UX for canonical passages;
- moderation policy;
- user-post publishing permissions;
- ranking/feed rules by content type;
- author following and contributor profile model;
- creator/institutional publishing possibilities;
- AI/research-assistant scope;
- what belongs in the seed/investor-demo version versus later platform phases.

These questions should be resolved as part of a broader `Ink & East Product Architecture / Business System V1` before implementation.
