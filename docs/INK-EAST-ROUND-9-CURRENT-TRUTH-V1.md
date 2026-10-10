# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Current Truth V1（当前有效真相 V1）

Status: **CURRENT TRUTH / PRODUCT ARCHITECTURE ONLY（当前有效真相 / 仅产品架构）**  
Implementation: **NOT AUTHORIZED（未授权实现）**

Source set:
- `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`
- `docs/ROUND-9-PREEXISTING-INTEREST-DIRECTION-PROVENANCE-NOTE.md`
- Workshops A–F（工作坊 A–F）
- `docs/ROUND-9-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`
- inherited Round 6–8 boundaries and sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

This file consolidates Round 9 after user review. Where an earlier Round 9 workshop wording conflicts with this file, this file wins. Historical workshop files remain decision provenance.

## Historical continuity / 历史连续性

The core principle **Interest Graph（兴趣图谱） != permanent User Profile Label（永久用户画像标签）** is not newly invented in Round 9. Earlier PR #53 decisions already rejected rigid specialization identity, allowed users to range across many subjects, treated interest/reading history/familiarity only as soft distribution evidence, required cross-topic exploration, and required Home / For You（首页 / 为你推荐） to resist collapse into a single-topic Filter Bubble（信息茧房）. Round 9 formalizes and completes that earlier direction with an explicit interest-data model.

## Standing model / 当前模型

Interest Graph（兴趣图谱） is a **private, evolving relevance layer** over existing platform objects. It helps answer what a user may currently want to read, follow or explore. It is not identity truth, belief, expertise, Account Trust（账户信任）, governance standing, Work Recognition（作品认可）, source authority or factual truth.

Project 3 supports multiple simultaneous interests and separates Explicit Preference（明确偏好） from Inferred Interest（推断兴趣）, and Session Intent（会话意图） from Recent / Durable Interest（近期 / 长期兴趣）. Exploration / Serendipity（探索 / 偶然发现） is an explicit product objective, while exact ranking algorithms remain deferred to Discovery & Recommendation（发现与推荐）.

---

# A — Reader Behavior Signal Model / 读者行为信号模型

- **R9-A1 HARD** — Click/Open, Dwell, Completion, Save, Follow, Search, Reply, Answer, Share, Hide/Not Interested, Skip and other behavior signals retain distinct source semantics rather than becoming one engagement number.
- **R9-A2 HARD** — Interest is not quality, truth, authority, trust, Recognition or governance credibility.
- **R9-A3 HARD** — Explicit Preference（明确偏好） and Inferred Interest（推断兴趣） remain distinct.
- **R9-A4 HARD semantics / DEFERRED weights** — Positive signals can express different intents and do not receive one universal weight table.
- **R9-A5 HARD** — Negative/corrective feedback is first-class and retains target scope.
- **R9-A6 HARD** — Non-action is not automatically negative feedback.
- **R9-A7 HARDENING** — Meaningful exposure/opportunity must be understood before non-action is interpreted.
- **R9-A8 HARD** — Dwell time is ambiguous and context/content-format dependent.
- **R9-A9 HARD** — Search is strong current-intent evidence but can be temporary and must not automatically become durable interest.
- **R9-A10 HARD** — Reply/Comment/Answer/Quote participation does not necessarily mean positive preference.
- **R9-A11 HARD** — Session Intent（会话意图） and Durable Interest（长期兴趣） are separate.
- **R9-A12 ADAPTIVE** — Emerging, active/established, cooling/dormant and reactivated interest states may coexist; exact labels/thresholds remain calibratable.
- **R9-A13 HARD DIRECTION** — One user may hold multiple independent Interest Clusters（兴趣簇）; one global interest category/vector is not sufficient as a product assumption.
- **R9-A14 HARD** — Interest relations may target Topic, Place, Knowledge Entity, Work, content type, creator/account, collection/series and other supported targets.
- **R9-A15 HARDENING** — Material inferred-interest state retains proportionate derivation provenance.
- **R9-A16 HARD** — Recency, Frequency, Persistence and Breadth remain distinguishable dimensions.
- **R9-A17 ADAPTIVE** — Repeated voluntary return across time may be stronger durable-interest evidence than one intense session; thresholds remain deferred.
- **R9-A18 HARD** — Surface / Entry Context（页面 / 入口情境） changes signal meaning and must be retained where proportionate.
- **R9-A19 HARD** — Content type/format changes interpretation of completion, dwell and repetition.
- **R9-A20 ADAPTIVE** — Cold start may combine declared interests, context, broad/popular value, editorial curation and deliberate exploration without permanently locking initial guesses.
- **R9-A21 HARD PRODUCT REQUIREMENT** — Users must be able to correct stale/wrong recommendation inferences through future controls such as Not Interested, Show More/Less, interest editing, Unfollow or Recommendation Reset.
- **R9-A22 HARDENING** — Current interest influence may decay without rewriting or necessarily deleting historical evidence; decay policy is versionable.
- **R9-A23 HARD SAFEGUARD** — One incidental interaction with exploration content must not immediately self-reinforce into a filter bubble.
- **R9-A24 HARD DIRECTION** — Interest modeling must preserve serendipity and allow candidates outside high-confidence interests.
- **R9-A25 HARD** — Interest/behavior data is privacy-minimized and purpose-limited and does not silently become identity proof, governance authority, sensitive identity inference or unrelated commercial scoring.
- **R9-A26 HARD inherited** — Raw events may support more than one separately governed evaluation, but Interest and Account Trust meanings/outputs must remain separate.
- **R9-A27 SCOPE GUARD** — No universal numerical weights, fixed half-lives or one confidence threshold are locked in Round 9.
- **R9-A28 SCOPE GUARD** — No Neural Network, Embedding, Vector Database, Graph Database, Reinforcement Learning, Contextual Bandit or LLM architecture is required by Round 9.
- **R9-A29 HARDENING** — “Big-data recommendation” is a scale state, not a prerequisite; semantic contracts must support simple early personalization and later industrial recommendation.
- **R9-A30 HARDENING** — Signal interpretation, decay, confidence, lifecycle and correction/reset rules remain evolvable with versioning, impact analysis, rollout/rollback and historical interpretability where material.

---

# B — Interest Graph Structure & Temporal Model / 兴趣图谱结构与时间模型

- **R9-B1 HARD** — Interest Graph is a relation layer over existing objects, not replacement ontology/taxonomy.
- **R9-B2 HARD DIRECTION** — Multiple concurrent Interest Clusters may overlap, conflict, emerge, cool and reactivate.
- **R9-B3 HARD** — Interest Cluster is user-specific derived grouping; it is not the shared platform Topic object.
- **R9-B4 HARD** — Explicit and inferred interest edges retain distinct provenance.
- **R9-B5 HARD** — Positive affinity and negative/suppression preference are not one signed scalar.
- **R9-B6 HARD** — Durable Interest, Recent/Short-term Interest and Session Intent are separate layers.
- **R9-B7 ADAPTIVE** — Session overlays may react quickly and decay quickly without auto-promoting to durable interest.
- **R9-B8 ADAPTIVE** — Durable interest generally requires persistence/temporal spread or explicit declaration, not merely one intense interaction.
- **R9-B9 ADAPTIVE** — Interest lifecycle supports emergence, activity, cooling, dormancy and revival.
- **R9-B10 HARDENING** — Decay changes current influence, not historical facts/actions.
- **R9-B11 ADAPTIVE** — Different signal families may use different decay treatment.
- **R9-B12 HARD** — Interest confidence is relation/context-specific, not a universal user score.
- **R9-B13 HARD** — Familiarity/Knowledge Depth（熟悉度 / 知识深度） is separate from personal interest and expertise cannot be inferred from engagement alone.
- **R9-B14 HARD SAFEGUARD** — Interest propagation across Knowledge Graph（知识图谱） relations is bounded; adjacency does not create durable interest automatically.
- **R9-B15 ADAPTIVE** — Related-interest expansion remains probabilistic, uncertain and reversible.
- **R9-B16 HARDENING** — Cross-domain bridges may support discovery without collapsing underlying Domain/Topic/Place identities or fusing a permanent profile.
- **R9-B17 HARD** — Broad positive interest and scoped negative preferences may coexist.
- **R9-B18 ADAPTIVE** — Different product surfaces may consume different projections of the same interest evidence.
- **R9-B19 HARD** — Device, time, entry route, language or other context does not become permanent identity by default.
- **R9-B20 HARD inherited** — Personal reading interest remains separate from Organization / Platform Staff Acting Context（组织 / 平台员工行动情境）.
- **R9-B21 ADAPTIVE** — Anonymous/session personalization may exist without pretending to know a durable person/account.
- **R9-B22 HARDENING** — Interest migration across login/account merge/device/identity reconciliation requires explicit policy; histories are not silently merged.
- **R9-B23 HARD REQUIREMENT** — User correction can suppress/override inferred state without requiring erasure of all lawful history.
- **R9-B24 ADAPTIVE** — Recommendation Reset may be scoped to target/cluster/surface rather than only all-or-nothing.
- **R9-B25 HARDENING** — Material derived interest retains appropriate derivation provenance: signal family, horizon, target/cluster, context and model/policy version.
- **R9-B26 HARD** — Cached/derived interest features know staleness and support invalidation/recomputation.
- **R9-B27 HARDENING** — Model/policy evolution should preserve proportionate historical interpretability without requiring every ephemeral score forever.
- **R9-B28 HARD for material changes** — Major interest-model changes define migration/recompute/shadow-evaluation/staged rollout/invalidation/rollback strategy.
- **R9-B29 HARD** — Core Data, Policy, Algorithm, Derived State and Presentation remain separate layers.
- **R9-B30 SCOPE GUARD** — Interest Graph does not mandate Graph Database technology; storage remains an implementation choice.

---

# C — Interest Derivation, Confidence & User Correction / 兴趣推导、置信与用户纠错

- **R9-C1 HARD** — Inferred interest is a revisable relevance hypothesis, not identity, belief, expertise or character truth.
- **R9-C2 HARD** — Signal combination is task/surface-specific; no one master `interest_score` controls all personalization.
- **R9-C3 HARD DIRECTION** — Explicit user actions have stronger corrective authority over inferred state within their declared scope.
- **R9-C4 HARD** — Explicit negative feedback remains scoped and must not destructively generalize to broader domains without policy/evidence.
- **R9-C5 HARD** — Contradictory/context-specific behavioral evidence may coexist rather than being forcibly averaged away.
- **R9-C6 HARD** — Confidence/uncertainty is local to a specific relation, cluster, horizon or model output.
- **R9-C7 HARDENING** — Confidence need not be exposed as fake user-facing percentages; explanations should prefer understandable reasons.
- **R9-C8 ADAPTIVE** — No universal fixed threshold promotes Emerging Interest into Durable Interest.
- **R9-C9 HARD** — Content consumption and content creation/participation are distinct evidence families.
- **R9-C10 HARD** — Co-consumption/correlation does not prove Knowledge Graph semantic equivalence.
- **R9-C11 HARD** — Similar-user / Collaborative Filtering inference may generate candidates but does not define user identity or authority.
- **R9-C12 ADAPTIVE** — Popular/trending/editorial content may help cold-start retrieval without becoming a false personal-interest claim.
- **R9-C13 HARDENING** — Negative inference from silence requires repeated contextual evidence and remains weaker/different from explicit negative feedback.
- **R9-C14 HARD** — Attention alone does not prove satisfaction.
- **R9-C15 HARD REQUIREMENT** — User-facing “why this?” explanations must be truthful and proportionate rather than invented certainty.
- **R9-C16 HARDENING** — User explanation and full internal Decision Provenance（决策溯源） are distinct levels.
- **R9-C17 HARD REQUIREMENT** — Users can correct recommendations without deleting their account.
- **R9-C18 HARD** — Recommendation Reset changes personalization state and is not automatically raw-history/privacy deletion.
- **R9-C19 HARD** — Correction/reset/unfollow/editing propagates to derived features, embeddings, caches and profiles as applicable.
- **R9-C20 HARD SAFEGUARD** — Cultural-content consumption must not silently infer sensitive personal identity/belief/category membership.
- **R9-C21 HARD** — Inferred interests remain purpose-limited and do not automatically become advertising, identity, fraud, governance, employment/eligibility or unrelated commercial scoring inputs.
- **R9-C22 ADAPTIVE** — Internal interest representation may be richer than user-facing interest controls.
- **R9-C23 ADAPTIVE** — User-visible interest editing need not expose every transient/low-confidence internal cluster.
- **R9-C24 HARDENING** — Behavior originating from deliberately exploratory content retains exploration-origin context.
- **R9-C25 ARCHITECTURAL REQUIREMENT** — High-impact derivation/confidence/negative-feedback/reset model changes should support shadow evaluation before broad activation where proportionate.
- **R9-C26 HARDENING** — Interest correction and interpretation rules are versionable Policy / Workflow / Algorithm changes, not invisible UI tweaks.
- **R9-C27 HARD with privacy proportionality** — Auditability does not require permanent retention of all raw behavior; summarized/bounded provenance may replace old raw events according to policy.
- **R9-C28 SCOPE GUARD** — Collaborative Filtering, Embedding, GNN, Sequential Model, Contextual Bandit, Reinforcement Learning or LLM techniques remain optional implementation choices.

---

# D — Exploration, Diversity & Anti-Filter-Bubble Architecture / 探索、多样性与反信息茧房架构

- **R9-D1 HARD DIRECTION** — Relevance and Exploration are separate objectives; the platform preserves room outside high-confidence interests.
- **R9-D2 HARD** — Exploration is not random low-value noise; candidates remain eligible and reasoned.
- **R9-D3 HARDENING** — Adjacent Exploration and Broad/Far Exploration are distinct mechanisms and may use different policies.
- **R9-D4 HARD SAFEGUARD** — One dominant Interest Cluster must not monopolize Home / For You by default.
- **R9-D5 ADAPTIVE** — Explicit deep-dive session intent may temporarily justify concentrated recommendations without rewriting durable interests.
- **R9-D6 HARD DIRECTION** — Diversity is evaluated across slate/page/session composition, not only per-item relevance.
- **R9-D7 HARD** — Diversity is multidimensional: Topic, Domain, Place, creator/source, content type, media format, cluster, freshness, authority/provenance class and origin may differ.
- **R9-D8 HARD** — Repetition/Fatigue is separate from lack of durable interest.
- **R9-D9 ADAPTIVE** — Creator repetition and Topic repetition may be controlled separately.
- **R9-D10 HARDENING** — Exploration-origin feedback receives cautious promotion semantics at first.
- **R9-D11 HARD SAFEGUARD** — Popularity may help discovery but cannot monopolize candidate supply.
- **R9-D12 HARDENING** — Long-tail discovery is a product value but does not promise equal creator exposure.
- **R9-D13 HARD** — Exploration/diversity cannot bypass moderation, privacy, legal, lifecycle or eligibility constraints.
- **R9-D14 HARD** — Diversity exposure does not create Recognition, editorial endorsement, canonical authority or source reliability.
- **R9-D15 HARD DIRECTION** — Different surfaces may have different exploration obligations/objectives.
- **R9-D16 HARD** — Search intent remains primary on Search; anti-filter-bubble goals must not sabotage explicit query intent.
- **R9-D17 HARD DIRECTION** — Explore must remain capable of genuine surprise and cannot simply duplicate Home / For You.
- **R9-D18 ADAPTIVE** — Cold start deliberately samples breadth rather than narrowing from first clicks.
- **R9-D19 HARD** — Explicit negative feedback constrains exploration as well.
- **R9-D20 HARD SAFEGUARD** — Sensitive/risky discovery requires separate governance and cannot be aggressively explored merely because it is adjacent/engaging.
- **R9-D21 HARD** — Continuation intent and broad discovery intent are distinct.
- **R9-D22 ADAPTIVE LONG-TERM** — One mandatory For You algorithm is not the only future browsing mode; Following, Explore, Topic/Place, curated/chronological or future selectable feeds may coexist.
- **R9-D23 HARD DIRECTION** — Diversity evaluation should eventually consider longer-term satisfaction, breadth and fatigue, not only immediate engagement.
- **R9-D24 HARD** — No single universal engagement-maximization objective; the later recommender remains multi-objective by context.
- **R9-D25 HARDENING** — Diversity caps/budgets/blends are Policy / Configuration / Algorithm concerns, not ontology.
- **R9-D26 ARCHITECTURAL REQUIREMENT** — Major exploration-policy changes support measurement, shadow testing, staged rollout and rollback where proportionate.
- **R9-D27 HARD DIRECTION** — Candidate Retrieval and Re-ranking / Blending remain conceptually separate.
- **R9-D28 HARDENING** — Anti-filter-bubble safeguards are themselves adaptive; no permanent fixed exploration percentage is authorized.

---

# E — Privacy, Retention & Interest-Data Lifecycle / 隐私、保留与兴趣数据生命周期

- **R9-E1 HARD** — Raw Behavior Events and Derived Personalization State are distinct data classes.
- **R9-E2 HARD** — Behavioral data collection/use is purpose-limited.
- **R9-E3 HARD inherited** — Personalization data does not silently become governance/trust/Recognition/authority evidence; legitimate overlaps use separate evaluations/policies.
- **R9-E4 HARD SAFEGUARD** — Private Reader Notes and Direct/Private Messages are not recommendation fuel by default.
- **R9-E5 HARD** — Moderation/report/appeal evidence is not personalization fuel by default.
- **R9-E6 ADAPTIVE** — Retention may differ across raw events, aggregates, explicit preferences, derived interests/features and audit records.
- **R9-E7 HARDENING** — Old low-value raw events should be bounded/aggregated/deleted where full fidelity is no longer necessary.
- **R9-E8 HARDENING** — Derived state may outlive individual raw events only with lawful bounded provenance sufficient for proportional explanation/update.
- **R9-E9 HARD** — Recommendation Reset and privacy/data deletion are different operations.
- **R9-E10 HARD** — Required deletion/minimization propagates to dependent features, embeddings, clusters, caches, profiles and experimentation/training data as applicable.
- **R9-E11 HARD** — Reset/correction affects current derived personalization even if historical events remain lawfully retained for another purpose.
- **R9-E12 HARD** — Anonymous/session data remains separate from durable account data until explicit lawful linking.
- **R9-E13 HARDENING** — Cross-device identity/interest linking is not assumed by default.
- **R9-E14 HARD inherited** — Organization / Platform Staff representative activity remains purpose-separated from personal interest profiling.
- **R9-E15 HARD SAFEGUARD** — Sensitive-category interest inference receives extra restraint; content interest does not equal sensitive identity.
- **R9-E16 HARD SAFEGUARD** — Place interest does not require precise-location tracking; any location use needs separate product/privacy basis.
- **R9-E17 HARDENING** — Search history can be highly revealing and deserves conservative retention/access/profile-promotion treatment where appropriate.
- **R9-E18 ADAPTIVE** — User recommendation controls need not expose a complete raw-event ledger.
- **R9-E19 HARD REQUIREMENT** — Personalization opt-out/pause remains architecturally possible.
- **R9-E20 HARDENING** — Non-personalized mode may still use editorial, freshness, general popularity, eligibility, language and other non-user-specific product rules.
- **R9-E21 HARD** — Experimentation/offline/shadow/training datasets do not bypass purpose, retention and deletion rules.
- **R9-E22 HARDENING** — Online personalization and future-model training are distinct processing purposes that policy can govern separately.
- **R9-E23 ADAPTIVE** — Prefer aggregated/anonymized analytics where individual-level history is unnecessary.
- **R9-E24 HARD** — Detailed personalization data access follows scoped internal Permission / Acting Context principles.
- **R9-E25 HARDENING** — Retention, aggregation, reset and deletion propagation are governed/versionable Policy / Workflow / Configuration, not scattered hard-coded jobs.
- **R9-E26 HARDENING** — Historical policy changes preserve lawful interpretability without retaining prohibited data merely for audit convenience.
- **R9-E27 HARD** — Privacy/legal obligations override recommendation convenience/model quality.
- **R9-E28 SCOPE GUARD** — Round 9 does not authorize permanent behavioral-data hoarding; exact schedules/jurisdictional compliance remain deferred.

---

# F — Object Matrix & End-to-End Flow Invariants / 对象矩阵与端到端流程边界

Core data classes remain distinguishable: Behavior Event（行为事件）, Exposure Context（曝光情境）, Explicit Preference（明确偏好）, Session Intent（会话意图）, Interest Edge（兴趣关系）, Interest Cluster（兴趣簇）, Negative/Suppression Preference（负向 / 降低偏好）, Derived Personalization Feature（派生个性化特征）, Recommendation Context（推荐情境）, and bounded Audit / Derivation Provenance（审计 / 推导溯源）.

- **R9-F1 HARD** — Behavior Event preserves action type.
- **R9-F2 HARD** — Weak/non-action interpretation carries Exposure Context where proportionate.
- **R9-F3 HARD** — Explicit Preference is not silently overwritten by inference.
- **R9-F4 HARD** — Session Intent overlays durable state rather than replacing it.
- **R9-F5 HARDENING** — Interest Edge is target-specific and provenance-bearing where material.
- **R9-F6 HARD** — Interest Cluster organizes user-specific relations without becoming platform ontology.
- **R9-F7 HARD** — Negative preference is independently targetable by scope.
- **R9-F8 HARD DIRECTION** — Derived features/embeddings/retrieval profiles/cluster assignments are recomputable/replaceable artifacts, not source truth.
- **R9-F9 HARD** — Recommendation Context determines how interest evidence is consumed by each surface/task.
- **R9-F10 HARD** — Exploration composition must not be implemented by falsifying source interest signals.
- **R9-F11 HARD** — User corrections invalidate/recompute downstream derived state/caches as appropriate.
- **R9-F12 HARD** — Raw-event expiry/deletion, aggregate retention, feature invalidation and audit retention have explicit dependency rules.
- **R9-F13 HARD** — Model migration cannot manufacture/erase historical explicit user actions.
- **R9-F14 HARD** — Personalization output does not change source authority, Recognition, Contributor Qualification or governance credibility.
- **R9-F15 HARD DIRECTION** — Personalization may support feeds, shelves/modules, related blocks, topic/place suggestions, notifications, search assistance or curated discovery; it is not required to be one endless feed.
- **R9-F16 HARDENING** — Early V1 may use explicit preferences, heuristics, curated pools and basic scoring while preserving future Candidate Retrieval → Pre-ranking → Ranking → Re-ranking / Blending conceptual boundaries.
- **R9-F17 HARD SCOPE GUARD** — Product validation does not require big-data infrastructure; event streams, feature stores, vector indexes, GPU ranking and distributed graph systems are later scale choices.
- **R9-F18 HARDENING** — End-to-end interest flows remain evolvable through policy/model versioning, shadow evaluation, migration, staged rollout and rollback where material.

Representative flows preserved by this architecture:
1. ordinary personalized reading;
2. one-time search / temporary intent;
3. exploration discovery;
4. explicit recommendation correction;
5. Recommendation Reset（推荐重置）;
6. interest cooling/dormancy/reactivation;
7. model upgrade with shadow/migration/rollback;
8. privacy deletion/minimization with dependency propagation.

---

# Cross-round constraints / 跨轮约束

Round 9 inherits and does not weaken:
- Round 6 Identity / Role / Permission（身份 / 角色 / 权限） and Acting Context（行动情境） separation;
- Round 7 Knowledge Graph & Provenance（知识图谱 / 来源溯源） identities and authority/provenance boundaries;
- Round 8 distinct semantics for Reaction / Save / Follow / Reply / Answer / Share（互动反应 / 收藏 / 关注 / 回复 / 回答 / 分享）;
- canonical/source authority != Work Recognition（作品认可） != popularity != personalized affinity;
- Account Trust（账户信任） != Interest Graph（兴趣图谱）;
- private-reader/community/governance contexts remain purpose-separated;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

# Intentionally deferred / 明确延后

Round 9 does **not** lock:
- exact signal weights/model coefficients;
- lifecycle thresholds or decay curves/half-lives;
- exact exploration/diversity percentages/caps;
- exact user-facing interest-management/reset UI;
- exact raw-event retention periods;
- specific retrieval/ranking/re-ranking algorithms;
- embedding/clustering/sequential/graph/RL/LLM model families;
- database, event-stream, feature-store, vector-store or graph technology;
- exact optimization metrics;
- exact notification recommendation logic;
- jurisdiction-specific privacy implementation details.

These are later Product Policy / Discovery & Recommendation / Governance / Privacy / Implementation choices and are not blockers to Round 9 product architecture.

# Current Round 9 conclusion / 第九轮当前结论

Round 9 establishes a semantically precise, multi-interest, temporal, correctable, privacy-bounded and exploration-preserving Interest Graph（兴趣图谱） that can support both simple early personalization and later large-scale recommendation without redefining historical user behavior.

Total carried rule inventory: **162 rules** = A30 + B30 + C28 + D28 + E28 + F18.
