# Round 10 Workshop D — Hardening Addendum（第十轮工作坊 D 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-D.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop D Adversarial Audit（工作坊 D 对抗性审计）.

---

## R10-D41 — Retrieval inputs remain purpose-limited / 候选召回输入必须遵守用途限制

**HARD PRIVACY SAFEGUARD（隐私硬保护）.**

Candidate Retrieval（候选召回） may only consume data whose use is legitimate for the relevant discovery/recommendation purpose.

Private Reader Notes（私人读者笔记）, Direct Messages（私信）, Moderation Case（审核案件）, unrelated sensitive data or other restricted-purpose data must not silently become retrieval features merely because they improve prediction.

A downstream privacy filter is not an adequate substitute for correct upstream data-use boundaries.

---

## R10-D42 — Pre-ranking recall loss must be observable by meaningful cohort / 预排序召回损失必须按有意义维度可观察

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

Overall Recall（召回率） can hide structural damage. Where a Pre-ranking（预排序） stage exists, evaluation should be able to inspect recall/survival by relevant dimensions such as:

- candidate-source family;
- content/object type;
- exploration vs established-interest origin;
- new/low-exposure vs established inventory;
- language / format where product-relevant;
- other materially different candidate cohorts.

The goal is not equal recall across every cohort. The goal is to detect when a cheap pre-ranker systematically removes an entire legitimate candidate path before the main ranker can evaluate it.

---

## R10-D43 — Ranking evaluation must support multiple outcome horizons / 排序评估必须支持不同结果时间窗口

**NEW SAFEGUARD（新增保护） / HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Recommendation value may appear at different time horizons. Immediate click / dwell / reaction can be observed quickly, while useful long-form reading, later return, Save（收藏） followed by future reading, durable satisfaction or discovery breadth may emerge later.

Project 3 must not architecturally force every ranking objective to optimize only short-latency labels because those labels are easier to collect.

Exact long-horizon metrics and attribution windows remain DEFERRED CALIBRATION（延后校准）.

---

## R10-D44 — Model and calibration drift must be observable / 模型与校准漂移必须可观察

**HARDENING（架构加固）.**

When a ranking model, feature set or calibration method changes, downstream assumptions about score range, threshold, content-type comparability or re-ranking behavior may become stale.

Material model changes should therefore support appropriate version attribution and monitoring for distribution/calibration drift so an apparently numeric-compatible score is not silently treated as semantically identical to an older version.

This does not mandate one calibration technique.

---

## R10-D45 — Fallback and degraded modes must preserve hard boundaries / 回退与降级模式仍必须遵守硬边界

**HARD SAFEGUARD（硬保护）.**

When a retriever/model/service is unavailable or inventory is sparse, fallback logic must still preserve:

- eligibility / privacy / rights / moderation constraints;
- Block / explicit suppression（屏蔽 / 明确抑制） scope;
- direct user intent such as Search（搜索）;
- Following（关注） relationship semantics;
- content/object identity and provenance.

A failure mode is not permission to fill the page with arbitrary popular content or bypass user controls.

Graceful degradation must remain a valid product experience, not a policy bypass.

---

## R10-D46 — Experiment and exploration exposure retains treatment context / 实验与探索曝光必须保留处理情境

**HARDENING（架构加固）.**

Where proportionate, behavior produced under an A/B Test（A/B 测试）, exploration allocation, changed ranking policy or other material treatment should retain enough treatment/version context for later analysis.

This helps prevent intentionally manipulated exposure from being misread as naturally occurring, unbiased user preference.

The architecture does not require permanent retention of every experiment detail; retention remains governed by privacy and audit policy.

---

## R10-D47 — Experimentation cannot suspend hard invariants / 实验不能暂停硬边界

**HARD INVARIANT（硬边界）.**

Experimentation may vary ranking weights, candidate-source allocation, module order, exploration strategy, calibration and other evolvable Policy / Algorithm / Configuration（策略 / 算法 / 配置） choices.

It may not temporarily violate hard boundaries such as:

- privacy/purpose limits;
- legal/rights/access eligibility;
- explicit Block（屏蔽） controls;
- stable authorship/provenance semantics;
- Search（搜索） direct-intent primacy;
- Follow（关注） relationship meaning;
- the separation of recommendation popularity from truth / authority / Work Recognition（作品认可）.

Experiments test policies inside the architecture; they do not redefine the architecture silently.

---

## Effect on Workshop D / 对工作坊 D 的影响

- R10-D1…R10-D40 remain valid.
- R10-D41…R10-D47 are controlling hardening rules for future Round 10 consolidation.
- No exact retrieval algorithm, score formula, quota, infrastructure stack or experiment platform is introduced.
- Workshop D has no unresolved material blocker after hardening.
- No implementation is authorized.