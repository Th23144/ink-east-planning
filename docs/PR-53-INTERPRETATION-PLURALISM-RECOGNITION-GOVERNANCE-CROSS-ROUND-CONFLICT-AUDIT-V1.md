# PR #53 — Source Fidelity, Interpretation Pluralism & Recognition Governance Cross-Round Audit V1
# PR #53 ——原典忠实、多元诠释与作品认可治理跨轮冲突审计 V1

> **Status（状态）:** AUDIT FINDINGS / PROPOSED RECONCILIATION（审查发现 / 待确认的跨轮协调）
> **Scope（范围）:** Ink & East（墨与东方） Product Architecture（产品架构）, Rounds 1–14（第一至十四轮）相关当前有效规则
> **No mutation of sealed decisions（不修改封存决定）:** This report records concrete wording, conflicts, gaps and remedies. It does not itself supersede user-confirmed or sealed rules（本报告记录发现、风险与建议，不自动推翻用户确认 / 封存规则）.
> **Implementation / merge（实现 / 合并）:** NOT AUTHORIZED（未授权）
> **User-origin concern（用户提出问题）:** different genuine interpretations of authentic classical works must be freely publishable and discussable; formal Candidate → Recognized（候选 → 认可） must retain evidence-based fraud/reliability safeguards, as illustrated by a fabricated first-hand travel guide（虚构亲历旅游攻略）.

## Method and evidence standard（方法与证据标准）
Read actual PR #53（拉取请求 #53） branch sources in the following families: Rounds 1–5 Current Truth（第一至五轮当前有效规则）, Round 3 consolidation and seal（第三轮整合 / 封存）, content/knowledge-system supplement（内容 / 知识系统补充）, Rounds 7–11 Current Truth（第七至十一轮当前有效规则）, Round 13 commercial-content separation（第十三轮商业内容分离）, and current Round 14 resolutions/draft（第十四轮正式结论与草案）. Additional Round 6/9/10 identity/discovery boundaries were checked for related consequences（身份 / 发现边界交叉检查）.

**Classification（分类）**:
- **C = wording/semantic conflict（文字 / 语义冲突）**: two authoritative-looking statements can be read to require incompatible actions;
- **R = propagation risk（跨轮传播风险）**: a later rule, if interpreted broadly, can defeat earlier express safeguards, despite caveats;
- **G = unclosed implementation/governance gap（规则缺口）**: not a proven contradiction, but the use case cannot yet be decided deterministically;
- **P = preserved correct principle（需保留的正确原则）**.

### F01 — P0 / C — Translation and notes visually merged into canonical authority（译文 / 注释被放入原典权威分支）
**Source:** `docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`, lines 57–88.
It calls the lane `Canonical / Authoritative Classical Text Library` and its diagram groups `authoritative text / edition / translation / notes` on one authoritative branch.

**Contrasting later accepted source:** `docs/INK-EAST-ROUND-7-CURRENT-TRUTH-V1.md`, **R7-B6/B7** (approximately lines 70–76) explicitly says different witnesses/variants remain separate and translations, commentaries, annotations and teaching notes are *derivative objects* with their own authorship/provenance. **R7-A5/A8** separate source provenance from truth and interpretations.

**Risk:** A reader or implementer could make an editorial translation/commentary appear part of the original's immutable authority（编辑翻译 / 注释看似原典不可更改权威的一部分）.

**Remedy proposed:** source/witness/edition/transcription remain source-fidelity objects; punctuation, collation, translations, glosses, commentaries and readings explicitly carry editorial/derivative attribution even if shown in the same reader UI（可在同一阅读界面展示，但不共享来源权威）. Make the old diagram explicitly historical / superseded in this specific respect only.

### F02 — P0 / R — Interpretation as routine dispute/correction case（将开放解读转化为常规争议 / 纠错案件）
**Sources:**
- `docs/ROUND-14-KNOWLEDGE-CORRECTION-SOURCE-DISPUTE-REVISION-LIFECYCLE-RESOLUTION-V1.md`, lines 12–18 and 43–49: `Good-faith Dispute` defined as multiple evidence-supported interpretations, with an optional public `Dispute / Uncertainty` label.
- `docs/ROUND-14-CORRECTION-OWNERSHIP-CONTESTED-DECISIONS-RESOLUTION-V1.md`, lines 30–35: preference for interpreting supported differences with an annotated dispute/source note.

**Countervailing current truth:** R7-A8/R7-C8 and R8-B12/R8-D6 explicitly allow unresolved competing interpretations without converting disagreement into final truth judgment. The user directly rejects turning normal differing interpretations into something the platform must formally adjudicate.

**Risk:** `May` and `where important` are not a universal mandate, so the older resolutions are **not literally demanding review of every work**. But treating pluralism itself as a `Dispute` outcome normalizes platform judgment/negative-looking tags for legitimate readings.

**Proposed clarification:** three *independent* paths: (i) **Text / Source Fidelity（文本 / 来源忠实）** correction, (ii) **Interpretation & Conversation（诠释 / 交流）** without ordinary formal case closure, (iii) **Recognition Integrity（作品认可完整性）** review only when a work's assessed quality, stated verifiable premises, or authenticity is challenged. Mere different viewpoints trigger none of these disciplinary outcomes by default.

### F03 — P0 / R — Draft five-result outcome scheme not approved（五类结案结果草案尚未经确认）
**Source:** `docs/ROUND-14-KNOWLEDGE-CORRECTION-OUTCOME-TAXONOMY-DISCUSSION-V1.md`, lines 24–35, 69–75.
The draft proposes `Supported Dispute` for competing source-backed interpretations and treating it as a closure result.

**Status:** **ACTIVE DRAFT / NOT USER-CONFIRMED（活动草案 / 未经用户认可）** at the time of audit. This is not a sealed conflicting law and must not be represented as such.

**Remedy proposed:** mark `REQUIRES REFRAMING（需要重构）` and separate corrections of objective documentary/factual claims from open-ended exchanges of interpretations. Keep fraud findings in separate behavior governance.

### F04 — P1 / R — “factual/professional dispute” may over-trigger human Recognition governance（“事实 / 专业争议”可能触发过度认可治理）
**Source:** `docs/INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md`, lines 249–282. §9.2 lists `factual/professional dispute` and `material reviewer polarization over fact/reliability` as escalation examples.

**Counterbalance in same document:** §9.3 expressly says `viewpoint/interpretation/aesthetic disagreement does not automatically block Recognition`, and editorial disagreement with a viewpoint cannot justify override. **This is not an outright contradiction**, but the words `professional dispute` can be misapplied to normal competing scholarly interpretations.

**Remedy proposed:** scope escalation to disputes about verifiable factual premises, authenticity/source integrity, methodological misrepresentation, reviewer manipulation, or genuinely critical content-type standards. Do not escalate solely because scholars disagree with a thesis.

### F05 — P1 / R — “disputed important cultural record” human-review clause is too broad（“有争议的重要文化记录”强制人工复核边界不清）
**Source:** `docs/ROUND-14-APPEAL-REVIEW-RESTORATION-RESOLUTION-V1.md`, lines 50–61: mandatory human review in defined high-impact cases including `disputed important/source-sensitive cultural records`.

**Risk:** without distinguishing a contested **recorded source fact（来源记录事实）** from a different **interpretive reading（诠释观点）**, the phrase may turn normal pluralism into expensive, mandatory adjudication.

**Remedy proposed:** require human review when a consequential platform intervention against source authenticity/rights/Recognition or a serious verified allegation is contemplated, not simply when diverse readings exist.

### F06 — P1 / G — Travel-guide fake-firsthand case needs specific evidence and timeliness semantics（旅游攻略虚构亲历案例缺少细化的证据 / 时效规则）
**Positive source:** `docs/INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md`, lines 112–125: travel-guide rubric includes `firsthand value, timeliness, place accuracy, actionability`; lines 203–215 require an Integrity Gate and content-type rubric; lines 245 and 249–282 route severe fabrication through internal verification. Recognition is reversible.
**Related:** `docs/INK-EAST-ROUND-3-SEAL-RECORD.md`, lines 85–108: current-version Recognition and substantial claims are revalidation-sensitive.
**Round 13:** `docs/ROUND-13-COMMERCIAL-ACTOR-CONTENT-DISTRIBUTION-SEPARATION-V1.md`, lines 49–69 and 72–103: genuine substantive travel material can qualify even if published by a travel company; paid distribution cannot buy Recognition.

**Gap:** no sufficiently explicit rule yet separates (a) a claim `I personally visited（我亲自去过）` later proven fabricated, (b) an honestly sourced desk-research travel guide that never claimed a visit（如实标明的资料整理攻略）, (c) a genuine experience that later became outdated when the destination changed（时效过期）, and (d) opinions/positive personal taste（主观好评）. **“The place looks different today（今天不同）” alone does not establish fraud at publication time**.

**Remedy proposed:** capture what was actually represented (firsthand vs research, visit/publication date, basis for current-condition statements, commercial conflicts), verify specific claims and apply proportional actions depending on stage: Normal（普通） / Candidate（候选） / Recognized（认可）. Candidate review freezes/reevaluates only on material substantiated evidence; Recognized status is revalidated/withdrawn only through independent, appealable quality/integrity processes when the underlying evidentiary basis fails. Do not publicly assert fraud before verification.

### F07 — P2 / R — Candidate quality gate should not demand ideological or interpretative consensus（候选质量闸不能要求观点一致）
**Source:** Round 3 §7.2–7.3, lines 195–230; its common quality dimensions include `reliability where applicable`, shared quality and type-sensitive critical dimensions; §9.3 forbids viewpoint veto.

**Risk:** without a hard delineation between objective factual/attribution truthfulness and open interpretation, implementers may apply an Evidence/Integrity Gate（证据 / 完整性闸） as “the author's interpretation has been proved correct（作者解释已证明正确）” to philosophical/cultural essays.

**Remedy proposed:** for interpretive works evaluate attribution, faithful quoting, transparent distinction between quote and opinion, internal reasoning, originality and integrity; do not require universal correct philosophical conclusions.

### F08 — P2 / R — Version revalidation language needs “new thesis != misconduct”（版本重新评估需明确“观点变化 != 违规”）
**Source:** Round 3 seal, lines 85–108; revisions changing critical facts/core claims can require revalidation of current Recognition.

**Risk:** legitimate interpretive evolution in a scholarly essay may be misread as retroactive falsity or governance offense. The rule already uses version-aware evidence and does not mandate punishment, so this is an **explanation gap**, not a literal inconsistency.

**Remedy proposed:** significant rewrite may re-enter quality review because it is substantially new *work*; prior interpretation remains attributable and preserved. Revalidation concerns the work judged, not viewpoint orthodoxy.

## Preserved correct rules（应保留而非推倒重来的正确规则）
- **Rounds 1–5 Current Truth**, lines 35–47 and 65–89: multiple content lanes; user durable publishing; Work Recognition（作品认可） distinct from source authority and author status; rejected the public name `Authoritative Content（权威内容）`.
- **Round 3**, lines 27–32, 110–125, 203–215, 245–282: no automatic quality from popularity, identity, or payment; type-aware criteria; severe integrity fraud cannot be averaged away; differing viewpoints cannot automatically block Recognition.
- **Round 7**, R7-A4–A13, R7-B5–B7, R7-C1/C8/C12/C14/C18: distinct witnesses and derivative interpretations, competing claims coexist; revision and correction distinct from reinterpretation; not every sentence becomes structured claim.
- **Round 8**, R8-A3/A6/A11, R8-B12/B13, R8-C1/C9: companion discussion separate from canonical source; linking does not transfer authority; discussion closure does not settle epistemic truth; reports are not proof.
- **Rounds 9–10**: interests, ranking, popularity and recommendation are not truth/authority/Recognition. Older durable knowledge should not be penalized merely by age; timely place data may expire.
- **Round 11**: editorial Issue（议题） curation is not Work Recognition; editor framing does not rewrite underlying authorship or claim platform authority.
- **Round 13**: commercial actor vs work vs paid amplification remain separate; paid boost creates no Recognition evidence.
- **Round 14**: Correction（纠错） != Punishment（惩罚）; process intensity proportional to content responsibility; author response without universal veto; role-appropriate decisions, human appeal for genuine high-impact action.

## Case study — Travel guide candidate/recognized after alleged fake visit（旅游攻略入候选 / 获认可后遭虚构到访指控）

| Stage（阶段） | Grounded action（有依据的措施） |
|---|---|
| Ordinary publication（普通发表） | Accept report; check the guide's **actual claims** and records. Objective inaccuracy may lead to author update/factual note; a change since the visit may require timestamp update, not fraud finding（不能因今天变化直接认定当时作假）. |
| Candidate（候选） | Material, credible falsification concern → pause relevant promotion/current evaluation where necessary and verify under the type-specific Integrity Gate; no automatic public guilty verdict（严肃核验，不先公开定罪）. |
| Recognized（认可） | Credible material evidence → targeted recognition revalidation with proper review/appeal; if original authenticity/critical-fact basis fails, adjust/withdraw current Recognition with a decision record; preserve past version/event history（若核心真实性依据被证实失效，可依法定程序撤回当前认可）. |
| Independently verified deliberate fraud（另行确认故意欺骗） | Separate scoped Conduct Moderation（行为审核）. No automatic total account ban, author-wide purge, or retroactive falsehood of unrelated works（不自动全账户连坐）. |
| Report disproved（指控不成立） | Leave work and proper recognition intact; do not stigmatize author merely because a report was filed（不因被举报而污名化）. |

## Proposed repair sequence（建议修订顺序）
1. **Confirm controlling three-axis principle（先确认三轴原则）:** Source Fidelity（原典忠实） / Open Interpretation & Discussion（开放诠释与讨论） / Recognition Integrity & Claim Reliability（作品认可完整性与关键事实真实性）; behavioral abuse remains separate（行为滥用另行处理）.
2. **P0 draft/status correction（草案状态）:** explicitly withdraw the unapproved “Supported Dispute（争议结案）” interpretation-normalization from ordinary reading culture.
3. **P1 targeted amendments（定向修订）:** existing Round 14 dispute and human-review wording; Round 3 ambiguous `factual/professional dispute` escalation wording. Preserve approved core, insert scoped clarifications with exact provenance.
4. **P1 source-model correction（来源模型）:** move translation/commentary/interpretative notes outside the canonical authority branch without banning companion in-context display; acknowledge multiple genuine editions and variants.
5. **P1 travel-review clarity（旅游攻略评价细化）:** truthfulness of asserted experience vs dated condition changes, evidence-to-action chain for Candidate / Recognized.
6. **After user approval（用户审定后）:** run targeted Cross-round Parity / Regression Check（跨轮来源完整性 / 回归检查） over impacted authoritative rules, indexes, and decisions. Do **not** re-seal Rounds 1–13 or merge PR #53 as an implication of this audit.

## Audit disposition（审计结论）
Found **1 concrete earlier source-model semantic conflict（一个早期来源模型语义冲突）**, **several Round 14 interpretation-dispute propagation risks（若干第十四轮诠释争议跨轮传播风险）**, **2 Recognition-review trigger ambiguity risks（两个认可评审触发范围模糊风险）**, and **1 travel-fraud evidence/timeliness gap（一个旅游造假证据 / 时效缺口）**. The core Recognition（作品认可） and open-interpretation architecture from earlier rounds is largely **compatible**, not fundamentally invalid.

This audit records evidence and proposed changes; **no user-confirmed rule is automatically rewritten or superseded by the report**（审计记录证据与修改建议；不自动覆盖既有用户已确认规则）.
