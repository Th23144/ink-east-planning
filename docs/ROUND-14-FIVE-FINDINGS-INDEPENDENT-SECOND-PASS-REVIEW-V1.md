# Round 14 — Independent Second-Pass Review of Five Findings V1
# 第十四轮——五项遗留问题第二轮独立复核 V1

> **Status:** AUDIT FINDINGS + UNAPPROVED RECOMMENDATIONS / NOT A USER CONFIRMATION（审计发现与待确认建议／非用户新规则）
> **Date:** 2026-10-10
> **Later E07 qualified acceptance（后续 E07 限域认可）:** `ROUND-14-E07-SPECIAL-MEDIA-REVIEW-IMPLEMENTATION-DEFERRAL-V1.md` 记录用户回复“算认可吧”，仅认可由既有产品原则覆盖、具体实施细节后置，**不代表**已批准人员数／时限／申请表／可上线审核系统。下文 E07 仍为未决的说法指运营细节，而非仍需要另作新的产品架构原则决策。
> **Later joint-entry user choice（后续已确认）:** `ROUND-14-C08-JOINT-WORK-CANDIDATE-ENTRY-CONSENT-RESOLUTION-V1.md`：共同作品 A/B 同意而真实共同作者 C 明确反对且没有该事项授权时，不得将整件作品推进 Candidate，需先解决有效参与／授权争议。本文旧的共同入池 A/B 选择和相关“未决定”仅为历史报告状态；代理细节及 E07 仍待后续。
> **Later C08 user-confirmed controlling rule（后续 C08 用户确认）:** `ROUND-14-C08-MULTI-AUTHOR-PARTICIPATION-WORK-AUTHORITY-RESOLUTION-V1.md` 已正式确认个人参与权与整件共同作品认可处置权分离、关键授权／证据变化独立复核。下文的 Proposal B 及“C08 未决定”仅代表本报告创建时的历史建议；共同作品首次进入 Candidate 的同意基础仍需另行确认。
> **Subsequent confirmed decision（后续用户确认优先）:** `ROUND-14-E06-SPECIAL-MEDIA-PREPUBLICATION-REVIEW-RESOLUTION-V1.md` 已由用户明确认可：特殊资格的真实性行为影像先审后公开、普通文化文章不统一先审后发、允许正文与受限媒体拆分发布。本报告下方 Proposal A 及“E06 not decided”仅代表**当时待审状态**；**C08 的建议 B 和 E07 参数仍未获用户批准**。
> **Scope:** E06, C08, E07, F01, F02. Re-examined two user-provided older conversation exports (approx. 891 and 1201 lines), a separate project handoff file (historical orientation only), and current PR #53 repository sources. Verified explicit historical user choices and differentiated earlier assistant proposals from user confirmation and later controlling GitHub resolutions.
> **Do not advance Current Truth until user review of the two actual policy choices below.** No coding, merge, repository frozen-blob rewrite, new numeric criteria or policy approval.

## 1. Source hierarchy and historical comparison（先分清历史源与生效规则）

- In the **longer history**, the user **explicitly approved** the six targeted repair directions, confirmed Ink & East as a **cultural platform permitting mature expression rather than adult-content business**, and rejected adult paid subscriptions/private image sales/OnlyFans-like ecosystem as a long-term platform direction. The shorter export does not contain several of these confirmations. Both include confirmations for genuine figure-art photography, the no-active-recommendation rule for suggestive photos, and ordinary historical research with necessary sourced sensitive images.
- Both older exports end before the later **2026-10-09 confirmed narrow Option B** on explicit-activity media. Its current authority is `ROUND-14-EXPLICIT-SEX-ACT-MEDIA-EXCEPTION-BOUNDARY-RESOLUTION-V1.md`: ordinary explicit adult-entertainment real-act photo/video uploading is not offered; certain serious cultural/historical/documentary/research/experimental-art situations may enter a **restricted eligibility evaluation**, not obtain general approval.
- Historical conversation says **ordinary cultural researchers should not all be put through universal “review before posting.”** It **does not explicitly settle** timing for exceptional contemporary real-act media, nor does it specify coauthor voting or reviewer quotas. Avoid treating an assistant proposal as a confirmed product rule.
- The newer `ROUND-14-READER-ACCESS-NOTICES-DIRECTION-V1.md` confirms reader-facing notices/sensitive preview and suitable age measures for already eligible material, **not** its pre-/post-publication eligibility process.

## 2. Findings and what was actually fixed（五项的真实状态）

| Code | Source-derived status | Actual current disposition |
|---|---|---|
| **F01** | Historical frozen Round-6 V6 header says `CANDIDATE / NOT SEALED`, but `INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md` expressly seals exact same frozen SHA `bf32db1e213194ab95701e66cf1dc55138a01035`; both independently fetched and hashes verified. | **RESOLVED BY EXPLICIT PRECEDENCE AT THE PR REVIEW INDEX.** The frozen V6 header deliberately **still says the earlier state**; do not modify it or break frozen parity. Fix = navigation/status interpretation; **not** alteration of that raw file text, product behavior or historical source. |
| **F02** | `ROUND-14-SOURCE-FIDELITY-INTERPRETATION-PLURALISM-DISCUSSION-V1.md` had implied “under discussion / next active”; RP1/RP2 and later resolution already settled it. | **RESOLVED BY EDITING THIS HISTORICAL DISCUSSION'S HEADER AND NEXT-TOPIC LABEL** to show HISTORICAL / LATER RESOLVED. Substantive body was preserved. It is not an active unapproved debate. |
| **E06** | `ROUND-14-EXPLICIT-SEX-ACT-MEDIA-EXCEPTION-BOUNDARY-RESOLUTION-V1.md` §6 **explicitly deferred** choosing prior-publication review versus other triggering mechanisms. Older conversation also rejects **universal** pre-review of all ordinary cultural research. | **NOT DECIDED.** This can stay an implementation-stage decision for architecture sealing, but a meaningful narrow policy **can be decided now** if the user wants to minimize future risk. Do not conflate historical drawing references with contemporary live real-act media. See recommendation A. |
| **C08** | Round 6 separates Authorship, Publisher and Operator and says Attribution ≠ scoped Work operating permission. Round 14 grants each author's Candidate consent, Candidate exit and voluntary ending of current Recognized participation, but expressly leaves shared/co-authored effective principals unresolved. | **PARTLY PRINCIPLE-LEVEL UNDECIDED.** Individual author consent vs collective Work-level control is a genuine product-level distinction, not merely database fields. See recommendation B; do not assume any single credited person can erase/withdraw the entire shared Work or that unanimous voting is inherently required. |
| **E07** | Round 14 special media resolution §5–6 explicitly defers exact application forms, evidence thresholds, staffing, timing and appeal configuration. Round 14 Appeal Resolution already requires process proportionate to impact and independent consequential appeals. | **NO NEW CORE RULE NECESSARY NOW.** Can confirm a qualitative checklist without numbers; actual staffing/evidence templates/privacy procedures must be settled before launch for the affected capability. |

## 3. Proposal A (E06) — narrowly scoped publishing-review rule, NOT APPROVED（建议、尚未批准）

**Background:** Real explicit activity video/photos offered through the exceptional cultural route carry a different irreversible-exposure risk from an ordinary essay or research article citing historical drawings. The first may need to prove actual eligibility, rights and consent **before public access**; the second must not inherit a universal formal academic pre-check.

**Recommended architecture-level choice:** If user agrees, require **specific pre-publication eligibility review only for real explicit sex-act audiovisual material applying for the exceptional cultural allowance**, before that **restricted media is publicly viewable**. Normal ordinary publication remains low-friction; legal historical spring-print research and normal artistic/nude photographs retain previously confirmed differentiated access/preview practices rather than automatically being blocked in the same specialized queue. A text page might be publishable while the high-risk attached media is withheld pending eligibility evaluation, subject to original legal/rights and platform conditions.

**Why not automatically apply this?** This is a NEW choice of review trigger: although narrow and strongly recommended, the current file expressly says it was not selected. User confirmation is required. Reader age notices are not a substitute for this publishing decision.

**If user does not choose now:** retain §6 deferred, clearly prohibit claiming the special publishing capability is production-ready/available until sufficient later policy and implementation approval. No blanket permission to publish and no blanket ban is implied.

## 4. Proposal B (C08) — split individual author choice and shared-Work decision, NOT APPROVED（建议、尚未批准）

**Four roles / edge cases:** multiple authentic coauthors, a contributor credited for only one component, an authorized publisher/representative, and a fraudulent “coauthor” claimant. None automatically controls the collective recognition outcome solely from a name displayed on a byline.

**Recommended product boundary:** Respect each real author's own decision not to participate personally, while any action that **starts, modifies or stops the Recognition of the shared Work as a whole** must be exercised through a valid, scoped Work-level authorization or a later fair coauthor-dispute process. Preserve correct historical attribution and pre-existing independent safety/rights/recognition investigations; one user's choice cannot silently overwrite other contributors' facts or permissions. **No default sole coauthor veto, no automatic unanimity rule, and no permanent inability to withdraw** are assumed here.

**Open follow-up if approved:** What consent base is required for a joint Work *to enter Candidate initially*, and what should happen if one real coauthor withdraws participation while another wants the shared Work to remain recognized? Authorization agreements, disputes, appropriate recusal, representation proof, UI and multiple-invitation process need separate discussion before collaborative Work Recognition feature is implemented. It is too soon to name a universal quorum.

**Why this matters:** The previous five-finding report understated this as “implementation only”; the *individual-vs-shared authority principle* can be independently confirmed now, without locking implementation mechanics.

## 5. Proposal C (E07) — broad principles already available; operations after policy decision（不必再发明制度）

The existing confirmed eligibility standard, rights and non-exploitation floor, explainability, proportionate recourse and independent consequential appeal should guide any special review. A future tailored checklist can consider (a) what the media objectively shows and its relationship to a cultural subject, (b) image/film provenance and copyright/publication rights, (c) legitimate consent/legal suitability of persons depicted where applicable, (d) public preview/age/region safeguards, (e) decision reason and non-stigmatizing appeal/correction. This is an **audit-derived implementation suggestion**, not a new fixed set of evidentiary mandates.

**Do not lock now:** number of reviewers, their credentials, ID collection, days to complete, content-percentage quotas, fixed proof form, provider integrations or nationwide universal age verification. Affected material must remain unavailable as a public special-case publishing product until necessary actual policy, safeguards and staffing are established.

## 6. Additional regression checks（非五项但必须保留的边界）

- Six user-approved RP1–RP6 remain controlling; do not reinstate universal ordinary-post authenticity checks.
- Sexually suggestive adult photography without real acts: may exist, cannot enter proactive platform recommendations. Legitimate fine-art nude photographs: normal discovery in art contexts with restrained general Home previews.
- Cultural-source witness, interpretation, material correction A/B/C and Recognition are separate jurisdictions; report count is not independent proof. Formal Recognition remains work/version-specific.
- Historical Issues and Recognition snapshots must not be silently rewritten following voluntary author withdrawal.
- Paid boost cannot purchase Recognition or override age/safety/distribution restrictions. Long-term adult-content commercialization exclusion remains in effect.
- Frozen Round-6 V6 SHA preserved; the status resolution is external precedence and navigation, not mutation of sealed content.

## 7. Current verdict & next step（明确的讨论断点）

**F01 / F02:** Resolved as documentation issues, with one frozen-source historical banner intentionally unchanged.
**E06 / C08:** Can be meaningfully discussed/decided now at *narrow principle level*, but recommendations A and B have **NOT** been user-approved.
**E07:** existing principle covers it; execution-specific plan remains deferred.

**The five issues do not presently prove a contradiction that must force Round 14 architecture reopening or block source-parity work.** Do not claim Source Parity / Seal has already passed. The next action is to obtain user input on A and B (starting with E06), then consolidate only user-confirmed decisions into Round-14 Current Truth V1 candidate and run full source coverage and frozen adversarial testing.

**No work on Current Truth V1 began in this audit. No code, PR merge or deployment is authorized.**
