# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop A Hardening Addendum（工作坊 A 加固补充）

Status: **HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）**  
Implementation authorization: **NO（否）**.

Purpose: record safeguards identified by a dedicated Adversarial Audit（对抗性审计） of Workshop A. These rules do **not** reverse the Workshop A product direction; they close omission/risk gaps before Workshop B proceeds.

Inputs:
- `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-A.md`
- `docs/INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md`
- `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`
- prior PR #53 discovery/fairness decisions.

---

## R10-A31 — Recommendation-created exposure bias must remain observable / 推荐造成的曝光偏差必须可识别

**NEW SAFEGUARD（新增保护） / HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Observed behavior is partly caused by what the recommender previously chose to expose. A click, save or non-click is therefore not independent of prior candidate supply, rank position, surface, visibility and exploration policy.

Round 10 must preserve enough Exposure Context（曝光情境） and candidate-source context to avoid treating recommender-created popularity as unbiased evidence of intrinsic user preference or content quality.

This does not mandate a specific causal-inference method, counterfactual estimator or experimentation stack.

---

## R10-A32 — Cross-content-type scores are not assumed directly comparable / 不同内容类型的分数不能默认直接可比

**NEW SAFEGUARD（新增保护） / HARD INVARIANT（硬边界）.**

A long scholarly essay, Place guide（地点指南）, community reply, canonical-text passage, image object, Question（问题） or short media object can generate very different behavior distributions.

If multiple object/content types are mixed on one surface, raw model scores or engagement probabilities must not be assumed to share one calibrated meaning merely because they are numeric. Later ranking/composition may require type-aware calibration, normalization, separate candidate lanes or other comparable treatment.

Exact method remains DEFERRED CALIBRATION（延后校准）.

---

## R10-A33 — Explicit negative preference and privacy purpose limits constrain candidate generation, not only final display / 明确负偏好与隐私用途限制必须从候选生成阶段起约束推荐

**HARDENING（架构加固） inherited from Round 9（继承第九轮）.**

Not Interested / Show Less / Unfollow / scoped suppression（不感兴趣 / 少看 / 取消关注 / 范围性降低） and applicable privacy/purpose limitations must be capable of affecting retrieval/candidate eligibility as appropriate.

The architecture must not repeatedly retrieve prohibited/suppressed candidates and rely on a final UI filter as the only protection, especially where doing so would preserve stale personalization effects or create avoidable privacy risk.

---

## R10-A34 — Cold-start supply must not fabricate inferred interest / 冷启动候选供给不能伪造用户兴趣

**HARDENING（架构加固）.**

New/low-history users may receive editorial, broadly useful, popular, declared-interest, contextual and exploration candidates. Their inclusion is a Cold Start（冷启动） strategy, not evidence that the user already has the corresponding Durable Interest（长期兴趣）.

Subsequent behavior may create interest evidence under Round 9 semantics, but supply reason and inferred-interest state remain distinct.

---

## R10-A35 — Candidate-source monoculture must be observable and correctable / 候选来源单一化必须可观察并可纠正

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

A formally multi-source architecture can still collapse in practice if one retriever/source family contributes nearly all candidates or survives every downstream stage disproportionately.

The system should be able to measure, at an appropriate level, candidate-source contribution, survival through ranking stages and final exposure so accidental retriever monopoly, starvation of long-tail sources or broken exploration paths can be detected and corrected.

This is observability, not a requirement for fixed equal quotas.

---

## R10-A36 — Non-personalized discovery remains a valid serving mode / 非个性化发现必须仍是有效服务模式

**HARD INVARIANT inherited from Round 9（继承第九轮硬边界）.**

A user who pauses/opts out of behavioral personalization, or a context where durable personalization is unavailable, must still be serviceable through eligible non-user-specific rules such as editorial curation, freshness, general popularity, language, Topic / Place context（主题 / 地点情境） and broad exploration.

The Discovery & Recommendation（发现与推荐） architecture must not require a private behavioral profile in order to function at all.

---

## R10-A37 — Freshness and staleness are content-type/task specific / 新鲜度与过时风险必须按内容类型和任务解释

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

Freshness is not universally positive and age is not universally negative. A centuries-old canonical source may remain permanently relevant, while a travel opening-hours guide, event notice, policy page or practical local guide may become stale quickly.

Later retrieval/ranking must be able to treat freshness/staleness using content-type/task-aware policy rather than one global recency boost or age penalty.

Exact freshness policies remain DEFERRED CALIBRATION（延后校准）.

---

## Effect on Workshop A / 对工作坊 A 的影响

- No existing R10-A1–R10-A30 rule is revoked.
- No genuine product-direction correction was required.
- R10-A31–R10-A37 are controlling hardening rules for future Round 10 consolidation.
- Exact models, weights, quotas, calibration equations and infrastructure remain deferred.
- Workshop B may proceed after the associated audit records PASS AFTER HARDENING（加固后通过）.