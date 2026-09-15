# Round 8 — Community & Discussion System — Workshop A

Status: **PROPOSED / REVIEW IN PROGRESS**. Product architecture only. No implementation authorization.

Scope: core community/discussion object boundaries and their relationship to canonical text, editorial publishing, user publishing and the Round 7 knowledge graph.

This batch is primarily consolidation/hardening of already accepted product truth. No user decision is requested yet; genuine product-choice forks will be surfaced separately when they appear.

Standing rule: **precise boundaries, adaptive circumstances**.

---

## R8-A1 — Community Publication and Discussion Thread are different object classes

**Rule class: HARD INVARIANT.**

A durable user-authored publication/essay/question-post and a conversational Discussion Thread are not the same thing merely because both are user-generated.

A Community Publication may be a durable knowledge-network asset with stable authorship, permalink, revision history and recognition eligibility. A Discussion Thread primarily represents conversation around a subject or referenced object.

A publication may open or link to discussion without being reduced to its comment thread.

---

## R8-A2 — Reply/Comment is not automatically a Publication or Knowledge Claim

**Rule class: HARD INVARIANT.**

A reply, comment or conversational message is a social contribution first. It does not automatically become a durable publication, canonical statement, recognized work or first-class Claim merely because it contains an assertion.

Where a reply later needs durable citation, recognition or knowledge treatment, the platform may promote/reference/derive a more durable object while preserving provenance.

---

## R8-A3 — Canonical/source-backed surfaces use companion discussion, not embedded authority-mixing

**Rule class: HARD INVARIANT inherited from Content & Knowledge System V1.**

Canonical works/passages remain clean source/reading surfaces. Ordinary social conversation must live in a separate companion Discussion/Community object even when tightly linked from the canonical page.

The product may show discussion counts, entry points or related conversations near a passage without making the thread part of the canonical record.

---

## R8-A4 — Discussion targets are typed references, not one generic foreign key

**Rule class: HARD INVARIANT for expressiveness; target set ADAPTIVE.**

A Discussion Thread may reference one or more relevant targets such as:
- canonical Work;
- Edition/Version;
- chapter/juan/section/passage;
- editorial publication;
- contributor/community publication;
- Issue;
- Topic;
- Knowledge Entity;
- another discussion object where useful.

The architecture must preserve what the discussion is about rather than flattening every thread into an unstructured category label.

---

## R8-A5 — Passage-level discussion anchors preserve version/provenance context

**Rule class: HARDENING from Round 7 citation rules.**

When discussion refers to a specific passage, quotation, page or edition-specific reading, the anchor should preserve the relevant version/segment context where material so later source corrections do not silently change what participants were discussing.

---

## R8-A6 — Discussion linkage does not change the authority of either side

**Rule class: HARD INVARIANT.**

A popular discussion linked to a canonical passage does not modify canonical/source authority. A canonical citation inside a discussion does not make the discussion itself authoritative.

Likewise, editorial linking/featuring of a discussion does not rewrite its authorship or provenance.

---

## R8-A7 — Public discussion and private reader notes are separate privacy/product classes

**Rule class: HARD INVARIANT.**

Private notes, highlights, reading annotations or personal research notes must not be modeled as public community replies merely because they may reference the same passage.

A user may later choose to publish/share something derived from a private note, but that is a distinct disclosure/publication action.

---

## R8-A8 — Thread authorship, reply authorship and acting context remain attributable

**Rule class: HARD INVARIANT inherited from Round 6.**

Community actions preserve the actual Actor/Display Identity/Acting Context appropriate to the action. Organization/staff/representative participation must not silently masquerade as an unrelated personal identity or vice versa.

Pseudonymous participation does not require universal real-world Person resolution.

---

## R8-A9 — Conversation structure and knowledge structure remain separate

**Rule class: HARD INVARIANT.**

Reply trees, mentions, reactions and conversational chronology describe social interaction. Claims, evidence, source provenance and knowledge relationships describe knowledge semantics.

The platform may connect them, but must not infer epistemic authority from reply position, thread depth or social engagement.

---

## R8-A10 — Community objects may be durable without every message becoming permanently immutable

**Rule class: ADAPTIVE RULE.**

High-value threads/publications may need stable permalinks and durable archival treatment, while low-value/spam/removed content may be moderated or retained differently.

Exact edit windows, deletion behavior, retention periods and moderation tombstones are deferred to Governance/Moderation. Round 8 only requires that durable reference integrity and later governance remain possible.

---

## R8-A11 — Thread status is separate from content truth or recognition status

**Rule class: HARD INVARIANT.**

Open/closed/locked/archived/resolved or similar conversational states do not themselves mean a Claim is true, a work is recognized, or a source is authoritative.

A question may be marked resolved for product workflow while scholarly disagreement remains open at the knowledge layer.

---

## R8-A12 — Social feedback is not a universal quality or truth score

**Rule class: HARD INVARIANT.**

Likes, reactions, replies, saves, follows or other engagement may later inform discovery, interest modeling or community signals, but none is by itself a universal measure of truth, expertise, Work Recognition or source reliability.

Exact behavioral signals and ranking effects are deferred to Reader Behavior / Interest Graph and Discovery / Recommendation rounds.

---

## R8-A13 — Topic classification connects community to the knowledge system without forcing one fixed taxonomy

**Rule class: HARD INVARIANT for structured connection; taxonomy ADAPTIVE.**

Durable community content should be able to connect to meaningful Topics/Knowledge Entities rather than living only in one miscellaneous feed.

The subject taxonomy may expand over time and must not permanently freeze today's Eastern-culture category list.

---

## R8-A14 — Cross-linking between discussion and publication preserves object identity

**Rule class: HARD INVARIANT.**

A Discussion may inspire a Community Publication, correction proposal, editorial work or research object. Those are new/linked objects with provenance, not silent mutation of the original thread into another content class.

The reverse is also true: a publication may have multiple discussions without becoming identical to any one thread.

---

## R8-A15 — Community surfaces must preserve content-class labels in mixed discovery/search contexts

**Rule class: HARDENING.**

When community discussions appear alongside canonical passages, editorial articles, contributor works or other objects, the UI/search/recommendation layer must be able to preserve object type and authority/provenance distinctions.

Exact ranking and presentation remain deferred.

---

## R8-A16 — Round 8 does not decide groups/spaces, ranking or moderation policy by implication

**Rule class: DEFERRED CALIBRATION / SCOPE GUARD.**

This Workshop A does not yet decide:
- whether V1 has user-created groups/communities/spaces;
- exact reply nesting model;
- reactions/likes vocabulary;
- following mechanics;
- feed ranking;
- recommendation weights;
- moderation thresholds;
- edit/delete windows;
- religious/political/sensitive-topic governance;
- anti-spam/anti-harassment enforcement;
- badges or contributor standing.

Those decisions must be made in the appropriate later Round 8 batch or dedicated future rounds rather than being smuggled in through implementation convenience.

---

# Cross-round compatibility

Workshop A preserves:
- Round 6 Actor/Acting Context/authority boundaries;
- Round 7 Claim/Relationship/provenance/citation boundaries;
- canonical/source authority != Work Recognition;
- publishing capability != recommendation eligibility/ranking;
- community discussion != canonical source content;
- private reader data/notes != public community publication by default.

# Next review area

Next Round 8 work should examine conversation topology and product mechanics: thread creation, reply/quote/mention, linking/citation, question/answer or resolution semantics, editing/history, cross-posting/reposting, topic/community spaces, and what belongs in Round 8 versus later Governance/Behavior/Recommendation rounds.
