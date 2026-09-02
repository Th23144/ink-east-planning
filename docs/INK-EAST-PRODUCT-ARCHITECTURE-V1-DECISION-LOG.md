# Ink & East Product Architecture / Business System V1 — Decision Log

> Status: living decision record for the Product Architecture workshop.
> Purpose: record only confirmed decisions, explicit corrections and deferred questions. This file overrides stale workshop wording where conflicts exist until the final Product Architecture V1 is consolidated.

## Precedence rule

During the workshop, if this Decision Log conflicts with an earlier question/hypothesis in `docs/INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md`, this Decision Log wins.

---

# Correction C1 — VIP meaning

The user did **not** decide that VIP must be split into multiple tiers.

The correct rule is:

- VIP membership itself may provide a bundle of additional privileges and benefits;
- expanded publishing capability / long-form publishing may be one of those VIP benefits;
- whether VIP later has one tier or multiple tiers is currently **undecided** and belongs to the Membership round;
- payment/VIP status does not make a user authoritative or make their content automatically high-quality;
- any earlier workshop wording that assumes `VIP tier` as an already-decided product structure is superseded.

---

# Round 1 — Content & Publishing decisions carried forward

## R1-1 Progressive community publishing

Ordinary users do not need contributor verification before they can ever publish long-form content.

Publishing capability grows with account trust/weight and may also be expanded through VIP benefits.

New/low-trust accounts may publish community content but should initially face restrictions such as shorter maximum length, rate limits and/or other anti-abuse controls.

Established/higher-trust accounts may gain long-form community publishing rights without becoming verified contributors.

Exact account-weight signals, thresholds and anti-farming rules are deferred to a dedicated Account Weight / Trust round.

## R1-2 Promotion of strong community work

A work can be promoted/selected based on the work itself and community response without erasing its original author or provenance.

Possible destinations include featured/selected/reference layers, Issue curation and contributor invitation.

Promotion is work-specific; it does not automatically upgrade the author's entire account.

## R1-3 Contributor eligibility is not academic-only

Independent/m民间 researchers, long-term practitioners, authors and other qualified non-academic contributors may be eligible for future contributor verification.

Formal title, degree, fame or institution alone does not make either the person or every work they publish authoritative.

## R1-4 User publications can be durable knowledge assets

High-value user publications should support stable identity/permalink, search, saving, recommendation, topic/classical-text/passage links, archival value and future curation rather than being structurally trapped in an ephemeral feed.

## R1-5 Broad but structured Eastern-culture scope

V1 may cover a reasonably broad Eastern-culture subject range but should remain a structured specialist network rather than a general social forum.

Durable/formal content should map to meaningful Topic / Knowledge nodes.

Religious culture/history/texts/art/philosophy may be discussed as cultural subjects; proselytizing, sectarian mobilization, faith-conflict and related sensitive behavior require a separate Governance policy and are not treated as ordinary cultural discussion by default.

---

# Round 2 — Work-level Recognition System

## Round 2 status

**Conceptually locked. Naming and exact thresholds remain deferred.**

The earlier working label `authoritative content / 权威内容` is rejected for this layer because it misleadingly conflates popularity/community recognition with canonical or epistemic authority.

A new final product name will be chosen later. Until then this document uses **Recognition Layer / 高认可层** as a neutral working term.

---

## Decision R2-1 — Community nominates; popularity does not automatically create recognition

The platform should not use a rule such as:

```text
likes >= N
→ automatically becomes authoritative / high-recognition content
```

Community response is important evidence, but raw like count is insufficient because it can reflect popularity, fandom, coordinated behavior or manipulation rather than durable quality.

The accepted model is closer to:

```text
eligible work
→ meaningful community support / nomination signals
→ becomes a recognition candidate
→ additional quality / provenance / minimum-standard review as required
→ may enter the Recognition Layer
```

Exact nomination thresholds, weighting and review criteria are intentionally unresolved.

---

## Decision R2-2 — New/low-trust accounts cannot immediately participate in recognition voting/nomination

A newly registered account must not immediately receive equal power to influence whether a work enters the Recognition Layer.

Reason:

- batch account creation / sockpuppets could manufacture recognition;
- recognition voting is more consequential than an ordinary like;
- the platform needs a trust boundary before granting this governance capability.

The exact eligibility rule is deferred to the Account Weight / Trust round.

Important distinction to preserve later:

- ordinary lightweight engagement such as `like` may have a broader eligibility policy;
- formal nomination/recognition voting is a higher-trust governance action.

The exact relationship between these two systems is not yet decided.

---

## Decision R2-3 — Reject the product term “Authoritative Content / 权威内容” for community-recognized works

The user explicitly does not want this recognition layer to be called `权威内容` because the term overclaims epistemic authority and is likely to mislead users.

The final name remains TBD.

Possible semantic directions for later naming work include concepts equivalent to:

- selected;
- recognized;
- recommended/reference reading;
- community-selected;
- curated excellence.

No specific label is approved yet.

The term **canonical authority** should remain conceptually separate and may apply to source/edition/provenance facts in the classical-text system, not to socially selected interpretive essays.

---

## Decision R2-4 — Recognition is work-centric and source-neutral

Eligibility for the Recognition Layer depends on the quality/standing of the individual work, not the author's identity class.

Therefore, subject to later content-specific eligibility rules, works originating from all of the following may potentially qualify:

- Ink & East editorial accounts;
- verified contributors;
- partner/institutional accounts;
- VIP community users;
- ordinary community users.

A famous or verified author does not receive automatic recognition for every publication.

A high-quality work from an ordinary user is not structurally barred from recognition merely because the author lacks a credential badge.

Authorship and provenance remain visible after recognition.

---

## Decision R2-5 — Recognition is revocable / downgradeable, with human review for consequential decisions

Recognition is not an irrevocable lifetime badge.

A recognized work may later be reviewed for downgrade/removal when credible issues arise, including potentially:

- fabricated or false citations;
- plagiarism;
- material factual/source errors;
- misleading provenance;
- later evidence that materially changes the reliability of the work;
- manipulation of the recognition process;
- other serious integrity problems to be defined later.

However, revocation/downgrade decisions are inherently contestable and must not be delegated blindly to an automated popularity score.

The accepted direction is:

```text
credible challenge / trigger
→ review case
→ human/manual review for consequential recognition changes
→ uphold / downgrade / revoke / require correction
```

The exact review body, evidence standard, appeal process and correction workflow belong to the Governance / Corrections round.

Historical recognition/review events should be preserved rather than silently rewritten out of existence.

---

# Recognition model after Round 2

The platform now conceptually separates at least four signals:

1. **Popularity / engagement** — users liked, saved, opened, discussed, etc.
2. **Nomination / recognition support** — eligible trusted users believe a work deserves consideration for a higher long-term standing.
3. **Recognition status** — the individual work has passed the future-defined recognition process and entered the high-recognition/reference layer.
4. **Canonical/source authority** — source/edition/provenance authority associated with classical texts and verifiable source facts; this is a different epistemic system.

These signals must not collapse into one score or one badge.

---

# Mandatory deferred questions created or confirmed by Round 2

## D1 — Account Weight / Trust

Must later define who gains recognition-voting rights and when, including resistance to sockpuppet farming and purchased/aged-account abuse.

## D2 — Recognition thresholds and candidate mechanism

Need to define:

- what makes a work eligible to be nominated;
- nomination threshold;
- whether support is binary vote, endorsement, weighted support or another mechanism;
- how manipulation is detected;
- whether topic/domain-specific voters matter;
- how low-traffic but high-quality works avoid permanent disadvantage.

## D3 — Recognition review body

Need to decide whether entry into the Recognition Layer requires only community nomination plus objective integrity checks, or some additional editorial/domain review.

## D4 — Recognition challenge / downgrade / appeal

Need to define who can challenge, what evidence is sufficient, human reviewer roles, conflict-of-interest controls, appeal/re-review, public correction notes and historical audit trail.

## D5 — Final naming

`Recognition Layer / 高认可层` is only a neutral workshop label. A final product name must be selected later and must not imply absolute truth or authority.

---

# Next workshop round

Proceed to:

**Round 3 — Contributor / Identity Recognition System**

This round must define what a `verified contributor / 认证作者 / 合作机构 / 官方账户` identity actually means, while preserving the already-locked rule that identity verification does not automatically confer work-level recognition.
