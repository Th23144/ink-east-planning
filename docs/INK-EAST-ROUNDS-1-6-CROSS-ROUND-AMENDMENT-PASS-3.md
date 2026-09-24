# Project 3 Product Architecture — Rounds 1–6 Cross-Round Amendment Pass 3

> Status: **ACCEPTED CROSS-ROUND AMENDMENTS — PRODUCT ARCHITECTURE ONLY**
> Implementation authorization: **NO**
> PR: #53 (`docs/ink-east-product-architecture-v1`)
> Relationship to prior amendment records: read this after `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md` and `docs/INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md`. This file has later precedence for the points it explicitly amends.

This third adversarial pass focuses on appeal/review abuse, deletion and withdrawal versus public-knowledge integrity, canonical/source authority versus truth claims, moderation visibility versus recommendation ranking, and high-value Organization control recovery.

Historical Round records remain preserved. Conflicting earlier wording is explicitly narrowed or superseded here rather than silently rewritten.

---

## Process correction — `Flexible by default, strict only where necessary`

User feedback after reviewing the first three adversarial passes establishes a project-wide architecture requirement:

> **Many of the audit “fixes” were in fact the user's original intended meaning. Earlier workshop wording was too rigid and therefore did not faithfully encode the user's standing requirement for flexible, context-aware operation.**

This is not merely a style preference. It changes how all future Product Architecture work must be authored and reviewed.

Canonical workshop rule:

- do not convert a product principle into a universal fixed rule merely because a concrete example is easier to write;
- prefer **bounded flexibility / 有边界的灵活性** over blanket thresholds, single ladders, one-size-fits-all workflows, or universal timing rules;
- hard rules are appropriate only where a real invariant is intended, such as identity non-substitution, conflict separation, audit integrity, or explicit security boundaries;
- where context matters, architecture should define the decision dimensions, allowed outcomes, safeguards, and escalation path rather than inventing a universal number or rigid sequence prematurely;
- every future proposal must distinguish `HARD INVARIANT / 硬边界`, `ADAPTIVE RULE / 弹性规则`, `DEFERRED CALIBRATION / 延后校准`, and `EXAMPLE / 示例`;
- acceptance such as `全部采用` does not exempt a decision from later adversarial review;
- before sealing a major Round, explicitly test whether apparently precise wording has accidentally frozen something the user intended to remain adaptive.

Canonical principle:

> **The architecture must be precise about boundaries without being rigid about circumstances. / 架构要把边界写清楚，但不能把情境写死。**

This process rule applies retroactively when interpreting Rounds 1–6 and prospectively to all later rounds.

---

## A37 — Appeal is a correction path, not an unlimited replay loop

**Type: HARDENING / 架构加固**

Consequential decisions should have a meaningful appeal path, but the same unchanged dispute must not create unlimited duplicate review cycles.

Canonical rule:

- a decision normally receives one formal appeal lifecycle for the same decision/evidence basis;
- reopening may occur when there is materially new evidence, a relevant factual change, contaminated evidence, a changed governing rule, procedural defect, platform error, or another defensible changed basis;
- exact timing, cooldowns, or retry counts are not universally fixed here;
- spam/duplicate appeal suppression must not prevent legitimate correction when the basis materially changes.

This preserves real appeal rights without creating an infinite governance-denial mechanism.

---

## A38 — Filing an appeal does not automatically restore a risky capability

**Type: NEW SAFEGUARD / 新增保护**

An appeal itself must not automatically undo a protective restriction when restoration could create material security, fraud, Organization-control, identity, financial, or governance risk.

Possible states include:

- restriction remains during appeal;
- restriction is narrowed where safe;
- limited capability is restored;
- full capability is restored after successful review;
- urgent human review is triggered when the cost of continued restriction is unusually high.

The decision is risk/context-sensitive, not a blanket `appeal = restore` or `appeal = never restore` rule.

If the appeal succeeds, affected state/evidence should be repaired according to the relevant Evidence Reversal / correction semantics rather than merely lifting a current flag.

---

## A39 — Appeal, Evidence Reversal, and Re-evaluation are distinct mechanisms

**Type: CLARIFICATION / 澄清**

Do not collapse all reconsideration into one generic `appeal` object.

- `Appeal / 申诉`: the affected user/entity challenges the correctness, process, proportionality, or basis of a decision.
- `Evidence Reversal / 证据纠错`: the platform later learns that evidence used downstream was contaminated, false, invalid, misattributed, or procedurally defective and repairs affected conclusions.
- `Re-evaluation / 重新评估`: the original decision may have been valid at the time, but changed facts, current risk, policy, version, context, or new evidence justify a fresh current-state decision.

They may interact, but their semantics, provenance, audit records, and downstream repair behavior must remain distinguishable.

---

## A40 — Account deletion, private-data deletion, work withdrawal, anonymization, legal removal, and public-knowledge retention are separate operations

**Type: HARDENING / 架构加固**

No universal `delete user -> cascade delete everything` or `published once -> platform keeps everything forever` rule is permitted.

The architecture must separate at least:

- Account closure/deletion;
- authentication/security-data disposition;
- private personal-data deletion/minimization;
- public-profile hiding or anonymization;
- voluntary work withdrawal/unpublishing where allowed;
- legal/policy removal;
- preservation of necessary public provenance/history;
- transaction/audit/legal-retention obligations where applicable.

Content-class, rights, provenance dependency, privacy risk, legal obligation, and user expectation may lead to different outcomes.

Exact retention periods and jurisdiction-specific deletion rights remain for Privacy/Legal design and must not be invented here as universal numbers.

---

## A41 — Stable citation may survive removal through a privacy-safe tombstone where appropriate

**Type: NEW SAFEGUARD / 新增保护**

When a durable public object has already been cited or linked by other knowledge objects and later becomes unavailable, the system may preserve a minimal `Tombstone / 占位记录` where lawful and privacy-compatible.

A tombstone may preserve only what is necessary to maintain historical referential integrity, such as:

- stable object identifier;
- object type;
- unavailable/withdrawn/removed state;
- limited reason category where disclosure is appropriate;
- replacement/superseding object link where relevant.

It does **not** imply continued publication of removed content, hidden personal data, sensitive identity history, or material that must legally be erased.

Canonical principle:

> **Unavailable now does not always mean never existed; preserving that distinction must not override privacy or legal deletion duties.**

---

## A42 — Replace broad `Authoritative Classical Text` semantics with canonical/source-backed authority

**Type: CORRECTION / 真正修正**

Earlier wording such as `Authoritative Classical Text / 权威古籍文本` is too broad because it can blur two different questions:

1. Is this a reliable representation of a particular historical source/edition/version?
2. Are the factual or interpretive claims inside that source true?

Canonical architecture must separate:

- `Canonical / Source-backed Classical Text / 典籍原典、来源可追溯文本`;
- edition/source/provenance/collation confidence;
- claim truth, interpretation, historical reliability, and scholarly dispute.

A text may be canonically and provenance-correctly presented even when particular claims inside it are legendary, contested, symbolic, outdated, or historically uncertain.

Example:

`This is a verified facsimile/transcription of Edition X` does not mean `every claim written in Edition X is factually true`.

This amendment explicitly supersedes any earlier use of `authoritative` that implies blanket truth certification of classical-text content.

---

## A43 — Canonical/source authority and Work Recognition are separate systems

**Type: CLARIFICATION / 澄清**

Canonical historical/source objects do not need to enter the ordinary social Work Recognition lifecycle merely to establish their source status.

For canonical/source-backed classical material, the relevant systems are things such as:

- source provenance;
- edition identity;
- authenticity;
- transcription/collation quality;
- version relations;
- archival/library provenance;
- citation stability.

Modern translations, commentaries, teaching pieces, research essays, guides, or other evaluable derivative/interpretive works may separately qualify for Work Recognition where the content type is eligible.

Canonical principle:

> **Source authority answers “what is this source and where does it come from?” Recognition answers “has this evaluable work earned a higher work-quality status?”**

Neither automatically creates the other.

---

## A44 — Moderation visibility actions, Recommendation ranking, and user preference are distinct causes of low exposure

**Type: HARDENING / 架构加固**

The platform must distinguish at least:

- `Recommendation Ranking / 正常推荐排序` — ordinary comparative ordering/discovery decisions;
- `Moderation / Policy Visibility Restriction / 治理或政策性曝光限制` — a safety/integrity/policy action reducing eligibility or reach;
- `User Preference / 用户偏好` — the user's own follow, mute, hide, language, topic, or preference choices;
- other explicit distribution mechanisms such as paid promotion or editorial curation.

Low ranking must not automatically imply moderation. Material moderation restrictions must not be disguised internally as ordinary ranking fluctuation merely to avoid policy/audit obligations.

The exact public status surface depends on severity, abuse risk, legal/safety needs, and product context; not every ranking decision requires user-facing explanation.

---

## A45 — Material manual/policy visibility interventions require provenance and reviewability

**Type: NEW SAFEGUARD / 新增保护**

Where staff, policy systems, or exceptional governance mechanisms materially suppress, remove, restrict, or alter normal distribution eligibility beyond ordinary Recommendation ranking, the platform must preserve internal provenance sufficient to answer:

- what intervention occurred;
- why;
- which policy/risk basis applied;
- who or what system initiated it;
- scope and duration;
- whether it is temporary/permanent/re-evaluable;
- available review/appeal/correction path where consequential.

This prevents hidden manual suppression from masquerading as neutral recommendation behavior.

It does not require exposing abuse-sensitive internals or providing a public explanation for every low-impact ranking change.

---

## A46 — Account Recovery and Organization Entity Control Recovery are permanently separate

**Type: HARDENING / 架构加固**

Recovering access to an individual login account must not automatically prove entitlement to high-value Organization Entity Control Authority.

For material Organization-control disputes or recovery, the architecture may require a context-appropriate combination of:

- current/previous valid control evidence;
- Organization authenticity evidence;
- representative-authority evidence;
- multiple independent corroborating signals;
- notification to existing controllers where safe;
- protective hold/cooling for irreversible changes;
- conflict-of-interest checks;
- human review for contested/high-impact cases;
- recovery path when existing controllers are unavailable or compromised.

No universal document checklist or fixed cooling period is locked here.

Canonical principle:

> **Recovering an email/session is not the same as proving the right to control a real-world Organization on the platform.**

---

## A47 — Entity control transfer does not transfer personal trust, qualification, or governance history

**Type: CLARIFICATION / 澄清**

When Organization control legitimately changes hands, only the scoped Organization control/representation authority changes.

The incoming controller does not inherit another person's:

- Account Trust history;
- Contributor Qualification;
- Expertise Scope;
- Reviewer Trust;
- Governance Authority;
- personal Recognition history;
- behavioral/integrity history.

Likewise, the departing controller's personal standing is not erased merely because Organization control changes.

Historical Organization actions remain attributable to the Actor/Acting Entity valid at the time.

---

## Explicit supersession / narrowing map

This Pass 3 explicitly narrows or supersedes the following earlier interpretations where conflict exists:

- appeal mechanisms that could be read as unlimited duplicate retry loops -> **A37**;
- any assumption that appeal automatically restores restricted high-risk capability -> **A38**;
- any generic reconsideration object that conflates appeal, evidence repair, and current-state re-evaluation -> **A39**;
- account deletion if read as universal content deletion or universal permanent-content retention -> **A40**;
- durable citation systems without a removal/tombstone state -> **A41**;
- `Authoritative Classical Text` if read as blanket factual-truth certification -> **A42**;
- any interpretation that canonical/source objects and socially/governance-earned Work Recognition are the same authority system -> **A43**;
- moderation reach restrictions if silently represented as ordinary Recommendation ranking -> **A44, A45**;
- high-value Organization control recovery if reduced to ordinary login/account recovery -> **A46**;
- Organization control transfer if read as transfer of personal trust/qualification/governance standing -> **A47**.

---

## Audit classification rule for all future passes

Every future audit finding must be labeled before acceptance as one of:

- `CORRECTION / 真正修正` — a prior accepted rule was materially wrong or too broad and is being changed;
- `HARDENING / 架构加固` — the original intended direction remains correct, but loopholes/edge conditions are being closed;
- `CLARIFICATION / 澄清` — the original intent remains unchanged but ambiguous wording is being made explicit;
- `NEW SAFEGUARD / 新增保护` — a previously uncovered risk needs an additional protective mechanism.

This distinction is required so future reviewers can tell whether product direction actually changed or whether the architecture merely became more faithful to the original intent.

---

## Status after Pass 3

- T3-1 through T3-11 are accepted and recorded as A37 through A47.
- Round 6 remains **NOT SEALED**.
- Rounds 1–6 adversarial audit remains in progress until the final cross-audit confirms that the amendment passes do not create new contradictions.
- No implementation is authorized.
- Do not enter Round 7 until the final cross-audit and Round 6 consolidation/seal sequence are complete.
