# Round 10 Workshop F — Hardening Addendum（第十轮工作坊 F 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-F.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop F Adversarial Audit（工作坊 F 对抗性审计）.

---

## R10-F41 — Explanation provenance must be aligned with the actual exposure decision / 推荐解释溯源必须与实际曝光决策对齐

**NEW SAFEGUARD（新增保护） / HARD PRODUCT REQUIREMENT（产品级硬要求）.**

When a user-facing Why this?（为什么推荐这个） explanation is shown, it should be derived from recommendation provenance associated with the actual exposure/decision context, not an unrelated current profile state or stale explanation cache.

Where an item had multiple retrieval/ranking reasons, the displayed explanation may be simplified, but it must remain materially truthful about why that exposure occurred.

Material changes to ranking/retrieval policy must not leave old explanation semantics silently attached to new decisions.

---

## R10-F42 — Conflicting user controls require explicit precedence / 冲突的用户控制必须有明确优先级

**NEW SAFEGUARD（新增保护） / HARD INVARIANT（硬边界）.**

Recommendation controls can conflict. The system must preserve a coherent precedence model based on scope and semantic strength rather than “last event wins” by default.

Examples:

- Block（屏蔽） or legal/safety restriction must not be undone by a weaker Show More（多看） signal;
- Unfollow（取消关注） ends an explicit follow relationship even if older positive inferred-interest evidence remains;
- Not Interested（不感兴趣） may suppress recommendation within scope without becoming a universal Block（屏蔽）;
- a later explicit reversal may change a preference when the control's semantics allow reversal.

Exact precedence details remain Policy（策略） and must be versionable/auditable when consequential.

---

## R10-F43 — Persistent control propagation must be observable / 持久性控制的传播状态必须可观察

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

For material persistent controls such as Not Interested（不感兴趣）, Unfollow（取消关注）, Block（屏蔽）, interest edits or Recommendation Reset（推荐重置）, the platform should be able to distinguish appropriate lifecycle states such as:

- accepted/recorded;
- applied to authoritative preference/relationship state;
- relevant derived recommendation state invalidated or scheduled for recomputation;
- downstream propagation completed or failed where such distinction is operationally necessary.

This does not require exposing internal infrastructure details to the user. It prevents a successful-looking UI action from masking a failed backend propagation path.

Control reversal must likewise be able to clear stale suppression state according to the control's semantics.

---

## R10-F44 — Evaluation must account for policy-created observation bias / 推荐评估必须识别策略制造的观察偏差

**HARDENING（架构加固）.**

Observed behavior is conditional on what the current system chose to retrieve, rank and expose. Therefore:

- lack of clicks on never-exposed items is not evidence of irrelevance;
- highly exposed items accumulate more behavior partly because the policy exposed them;
- offline datasets produced by an older policy are not automatically unbiased representations of all eligible inventory;
- evaluation should retain enough exposure/treatment context to diagnose selection and position bias where material.

No specific counterfactual or causal estimator is mandated.

---

## R10-F45 — Aggregate improvement must not hide material cohort regression / 总体提升不能掩盖关键群体的明显退化

**NEW SAFEGUARD（新增保护） / HARD PRODUCT REQUIREMENT（产品级硬要求）.**

For material recommendation changes, evaluation should be capable of inspecting relevant heterogeneous cohorts when there is a plausible risk that the aggregate average hides serious regression.

Potential cohorts may include:

- new vs established users;
- languages / locales where product-relevant;
- different content/object types;
- new/low-exposure vs established inventory;
- exploration-origin vs established-interest candidates;
- other materially different surface or inventory groups.

This does not require equal outcomes across cohorts or exhaustive slicing of every metric. It requires that a large aggregate win cannot automatically justify severe hidden regressions in strategically important groups.

---

## R10-F46 — Metric governance must include materiality and anti-Goodhart safeguards / 指标治理必须包含实质性与反指标异化保护

**HARDENING（架构加固） / GOVERNANCE REQUIREMENT（治理要求）.**

A metric becoming a KPI（关键绩效指标） changes behavior around that metric. Therefore material recommendation evaluation should preserve:

- an explicit metric definition and version;
- the product meaning the metric is intended to represent;
- relevant guardrails / counter-metrics;
- an assessment of practical/material significance, not only statistical significance;
- awareness of known gaming/manipulation routes;
- accountability for definition changes so reporting cannot improve merely by changing denominator, window or label.

No universal minimum effect size or statistical test is locked here.

---

## Effect on Workshop F / 对工作坊 F 的影响

- R10-F1…R10-F40 remain valid.
- R10-F41…R10-F46 are controlling hardening rules for future Round 10 consolidation.
- No exact explanation UI, user-control set, metric threshold, statistical method, analytics vendor or experimentation platform is introduced.
- Workshop F has no unresolved material blocker after hardening.
- No implementation is authorized.
