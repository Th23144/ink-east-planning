# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop F（工作坊 F）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Recommendation Explanation, User Control, Measurement & Evaluation Boundaries（推荐解释、用户控制、测量与评估边界）  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 0. Decision at a glance / 本步结论一览

Workshop F 不决定“哪个模型最好”，而是先建立推荐系统必须具备的三类外部约束：

1. **Explanation（解释）** — 用户看到的“为什么推荐这个”必须真实、可理解，而且不能伪装成确定事实；
2. **User Control（用户控制）** — 用户表达 Not Interested / Show Less / Follow / Unfollow / Reset（不感兴趣 / 少看 / 关注 / 取消关注 / 重置）之后，控制必须真正改变后续推荐状态，而不是只改变当前 UI（用户界面）；
3. **Measurement & Evaluation（测量与评估）** — 推荐质量不能退化成 CTR / Dwell（点击率 / 停留时长）单目标，也不能只看离线指标或单次 A/B Test（A/B 测试）。

核心边界：

> **A recommendation system is not trustworthy merely because it can predict behavior; it must remain explainable enough to users, controllable enough to correct, and measurable against product goals beyond immediate engagement. / 推荐系统不是“预测得准”就够了；它必须能让用户理解、纠正，并且用超越即时互动的产品目标来评估。**

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop F inherits:

- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱）, especially explicit-vs-inferred, scoped correction, reset, privacy and exploration context;
- Round 10 Workshops A–E and all local Hardening Addenda（加固补充）;
- Hybrid Homepage（混合式首页） provisional direction;
- Following（关注） provisional direction: Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

No exact metric target, dashboard product, experimentation vendor, causal inference method, survey cadence or ML（机器学习） explainability technique is authorized here.

---

# 2. Recommendation explanation / 推荐解释

## R10-F1 — “Why this?” must reflect real recommendation reasons / “为什么推荐这个”必须对应真实原因

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

If the product exposes a Why this? / Why am I seeing this?（为什么推荐这个 / 为什么我会看到这个） explanation, the explanation must be grounded in actual recommendation provenance such as Follow（关注）, Topic / Place（主题 / 地点）, continuation, editorial curation, current-session intent, exploration, trending or related-object context.

It must not invent a friendly reason after the fact merely because the true ranking system is complex.

---

## R10-F2 — Explanation is not full internal provenance / 用户解释不等于完整内部溯源

**HARDENING（架构加固）.**

User-facing explanation should remain understandable and privacy-safe. Internal Decision Provenance（决策溯源） may contain richer model/policy/source/version context.

The product need not expose raw model features, proprietary weights or sensitive internal signals to satisfy honest explanation.

---

## R10-F3 — Explanation must preserve uncertainty / 推荐解释不能伪装成确定事实

**HARD INVARIANT（硬边界）.**

For inferred relevance, explanations should use appropriately qualified language such as “because you recently viewed...” rather than “you are interested in...” when the latter would overstate confidence or turn inference into identity.

---

## R10-F4 — Explanation reason and authority meaning remain separate / 推荐理由与权威含义分离

**HARD INVARIANT（硬边界）.**

“Recommended because this is trending / related / from your interests” must not imply Work Recognition（作品认可）, canonical/source authority, editorial endorsement or factual correctness unless those states independently exist.

---

## R10-F5 — Multi-reason recommendations may expose a truthful simplified reason / 多原因推荐可以给出真实的简化解释

**ADAPTIVE RULE（弹性规则）.**

An item may be retrieved through several sources and survive multiple ranking stages. The user-facing explanation may select one or a small number of truthful dominant reasons rather than exposing an unreadable causal graph.

Selection of the displayed reason remains Policy / Algorithm（策略 / 算法） territory and must not fabricate provenance.

---

## R10-F6 — Paid/editorial/organic origins cannot be relabeled as one another / 付费、编辑与自然推荐来源不能互相伪装

**HARD PRODUCT BOUNDARY（产品边界）.**

If future paid/sponsored/commerce placement is authorized, its explanation/labeling must remain distinct from organic recommendation and editorial curation. Likewise editorial supply must not be described as inferred personal preference.

---

## R10-F7 — Search and structural navigation need not pretend to be personalized recommendations / 搜索和结构导航不应伪装成个性化推荐

**HARDENING（架构加固）.**

Exact Search（搜索） matches, canonical Next（下一项）, series continuation and other structural paths should be represented according to their actual semantics rather than being wrapped in generic “Recommended for you（为你推荐）” language.

---

# 3. User correction & control / 用户纠错与控制

## R10-F8 — User correction is first-class product infrastructure / 用户纠错是一等产品能力

**HARD PRODUCT DIRECTION（产品级硬方向）.**

The discovery system must be designed with explicit correction paths, not only passive behavioral learning.

Potential controls include Not Interested（不感兴趣）, Show Less（少看）, Show More（多看）, Follow / Unfollow（关注 / 取消关注）, Hide（隐藏）, Block（屏蔽）, module controls, interest editing and Recommendation Reset（推荐重置）.

Exact V1 control set remains a later UX（用户体验） decision.

---

## R10-F9 — Control scope must remain explicit / 用户控制必须保留作用范围

**HARD INVARIANT（硬边界）.**

Item-level, creator-level, Topic / Place-level, module-level, surface-level and global controls are not interchangeable.

A system must not silently generalize one scope into another.

---

## R10-F10 — Not Interested is stronger than silence / “不感兴趣”比无操作更强

**HARD INVARIANT（硬边界）.**

Explicit negative feedback carries stronger corrective meaning than non-click, skip or absence of reaction, subject to the control's declared scope.

---

## R10-F11 — Unfollow is not Block / 取消关注不等于屏蔽

**HARD INVARIANT（硬边界）.**

Unfollow（取消关注） ends an explicit delivery relationship. It does not automatically make the target globally invisible in Search（搜索）, direct navigation or unrelated contexts.

Block（屏蔽） or other stronger controls have different semantics.

---

## R10-F12 — Control effects must propagate beyond the current screen / 用户控制不能只改当前页面

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Where the control materially changes future personalization, the effect must propagate to relevant derived state such as candidate suppression, interest relations, caches, embeddings/features, ranking inputs or surface preferences as applicable.

A UI-only hide with no downstream state change is not an adequate implementation of a persistent control.

---

## R10-F13 — Control propagation must be testable / 控制是否真正生效必须可验证

**HARDENING（架构加固）.**

The platform should be able to verify that material user controls change the intended downstream recommendation behavior within the promised scope, rather than assuming propagation succeeded.

Exact latency/service-level targets remain implementation decisions.

---

## R10-F14 — Recommendation Reset is distinct from account deletion or privacy deletion / 推荐重置不同于账号删除或隐私删除

**HARD INVARIANT inherited from Round 9（继承第九轮硬边界）.**

Recommendation Reset（推荐重置） changes personalization state. It does not automatically imply deletion of all lawful raw history, account state, follows, purchases, moderation history or other unrelated records.

Privacy deletion remains a separate process governed by its own policy.

---

## R10-F15 — Reset can be scoped and evolvable / 推荐重置可以有范围且可演进

**ADAPTIVE RULE（弹性规则）.**

Future product design may support reset by surface, target type, interest cluster or global personalization state. Exact UX and default scope are deferred.

---

## R10-F16 — User-declared preference may override inferred preference within scope / 用户明确声明可以在作用范围内覆盖系统推断

**HARD PRODUCT DIRECTION（产品级硬方向）.**

When explicit user preference and inferred behavior conflict, the explicit control should have stronger corrective authority within its declared scope unless a separate safety/legal constraint applies.

---

# 4. Measurement model / 测量模型

## R10-F17 — No single universal recommendation KPI（关键绩效指标） / 不采用单一全站推荐 KPI

**HARD INVARIANT（硬边界）.**

Recommendation success is surface- and task-dependent. Home（首页）, Following（关注）, Explore（探索）, Search（搜索） and Related（相关推荐） may require different primary and guardrail metrics.

---

## R10-F18 — Immediate engagement is only one outcome family / 即时互动只是结果的一类

**HARD PRODUCT BOUNDARY（产品边界）.**

Clicks, dwell, likes, replies, shares and short-term continuation may be useful, but cannot alone define success.

---

## R10-F19 — Evaluation should support satisfaction/value outcomes / 评估必须允许满意度与长期价值进入

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Where proportionate, evaluation should be capable of incorporating outcomes such as useful completion, save-then-return behavior, repeat voluntary visits, explicit satisfaction/negative feedback, discovery breadth, reduced fatigue and longer-horizon value.

No one survey or metric is mandated.

---

## R10-F20 — Different content types require metric interpretation by format / 不同内容类型需要按形式解释指标

**HARD INVARIANT（硬边界）.**

A long essay, canonical passage, Place guide（地点指南）, Question（问题） and short media object should not be evaluated by identical raw dwell/completion assumptions.

---

## R10-F21 — Surface goals require guardrails / 页面主目标必须配套护栏指标

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

An experiment that improves a primary outcome while materially worsening privacy, negative feedback, source concentration, followed-source starvation, long-tail collapse, user-control fidelity or other critical safeguards must not automatically be considered a win.

---

## R10-F22 — Diversity and exploration require their own observability / 多样性与探索需要独立可观察

**HARDENING（架构加固）.**

The platform should be able to observe whether recommendation results are collapsing into a narrow set of Topics, creators, sources, formats or candidate families even if immediate engagement is rising.

---

## R10-F23 — Recommendation opportunity and final outcome are different measurements / 推荐机会与最终结果是不同指标

**HARDENING（架构加固）.**

Candidate entry, survival through stages, exposure opportunity, actual impression, interaction and downstream value are distinct events. A content source that never reaches exposure should not be evaluated solely by final click performance.

---

## R10-F24 — Trending and popularity metrics must retain denominator/context / 趋势与热门指标必须保留分母和情境

**HARDENING（架构加固）.**

Raw interaction count without exposure/context can be misleading. Where material, evaluation should distinguish attention conditioned on opportunity/exposure rather than treating all counts as directly comparable.

---

# 5. Offline, online & causal evaluation / 离线、在线与因果评估

## R10-F25 — Offline metric improvement is not sufficient product validation / 离线指标提升不足以证明产品变好

**HARD INVARIANT（硬边界）.**

Offline relevance, ranking loss, Recall（召回率）, NDCG（归一化折损累计增益） or prediction accuracy can support development but cannot alone authorize a product-wide ranking change.

---

## R10-F26 — Online experiments are useful but not absolute truth / 在线实验有价值，但不是绝对真理

**HARDENING（架构加固）.**

A/B Tests（A/B 测试） may measure causal changes in defined outcomes, but interpretation must consider novelty, seasonality, treatment spillover, delayed outcomes, heterogeneous cohorts and guardrail harm.

---

## R10-F27 — Experiments remain inside hard invariants / 实验必须在硬边界内进行

**HARD inherited from R10-D47（继承 D47 的硬边界）.**

Experiments may vary ranking, blending, candidate-source allocation or explanation/control presentation, but cannot suspend privacy, rights, Block（屏蔽）, Search intent（搜索意图）, Follow relationship（关注关系） or provenance/authority separation.

---

## R10-F28 — Experiment assignment and treatment context remain attributable / 实验分组与处理情境必须可归因

**HARDENING（架构加固）.**

Where proportionate, material experiments should retain treatment/version context so later behavior is not misread as naturally occurring unbiased preference.

---

## R10-F29 — Model/policy changes require comparison against relevant baselines / 模型与策略变更必须对照合适基线

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Evaluation should compare against the relevant prior production/policy state or justified baseline, not only against a weak straw-man baseline that makes a change appear favorable.

---

## R10-F30 — Long-horizon harm must remain detectable / 长周期伤害必须有机会被发现

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Where a change could create filter-bubble concentration, creator/source starvation, fatigue or declining satisfaction over time, evaluation architecture should support delayed observation beyond immediate experiment windows when proportionate.

---

# 6. User-facing control transparency / 用户控制透明度

## R10-F31 — Controls must describe what they actually do / 控制文案必须描述真实作用

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A button labeled Not Interested（不感兴趣） should not secretly mean “block this creator everywhere forever,” and a Reset（重置） control should not claim to erase history if it only resets derived personalization.

---

## R10-F32 — Control state should be reversible where semantics permit / 语义允许时控制应支持撤销

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

Show Less（少看）, hidden module, interest editing and similar preference controls should be designed so reversal/correction is possible where product meaning and legal/safety rules permit.

Block（屏蔽）, legal takedown or safety controls may follow different workflows.

---

## R10-F33 — User control must not become hidden authority evidence / 用户控制不能反向制造权威证据

**HARD INVARIANT（硬边界）.**

A user's Follow, Save, Show More or positive recommendation feedback may influence personal relevance but must not automatically become Work Recognition（作品认可）, factual authority or source trust evidence.

---

## R10-F34 — Personalization opt-out must retain a viable product experience / 关闭个性化后产品仍需可用

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

If the product offers a behavior-personalization opt-out, discovery must degrade gracefully through eligible non-personalized sources such as explicit follows, structural navigation, editorial curation, broad trending where lawful, Search（搜索） and other context-appropriate supply.

Opt-out must not function as a practical denial of service.

---

# 7. Governance, privacy & evolvability / 治理、隐私与可演进性

## R10-F35 — Measurement data remains purpose-limited / 推荐测量数据仍受用途限制

**HARD PRIVACY BOUNDARY（隐私硬边界）.**

Recommendation evaluation telemetry must not automatically become unrelated advertising, employment, identity, governance, fraud or universal scoring inputs merely because it exists.

---

## R10-F36 — Explanation/control/measurement policy is versionable / 解释、控制与测量规则必须可版本化

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Material changes to explanation logic, control semantics, reset behavior, success metrics, experiment guardrails or evaluation policy must follow Rule Evolvability（规则可演进性） principles: explicit ownership, versioning/provenance where consequential, impact analysis, staged rollout and rollback where proportionate.

---

## R10-F37 — Metric definitions must be governed / 指标定义必须受治理

**HARDENING（架构加固）.**

A KPI（关键绩效指标） name such as “satisfaction”, “quality”, “meaningful interaction” or “healthy discovery” must have an explicit definition/version rather than silently changing meaning across dashboards and experiments.

---

## R10-F38 — Derived evaluation features must know staleness / 派生评估特征必须知道自己是否过时

**HARDENING（架构加固）.**

When underlying taxonomy, content state, user controls, eligibility rules or model versions change, derived evaluation cohorts/features should support recomputation or invalidation as appropriate.

---

## R10-F39 — Measurement must not become a new universal user score / 推荐测量不能演变成新的全局用户分

**HARD INVARIANT（硬边界）.**

Recommendation telemetry may support surface-specific personalization/evaluation but must not be collapsed into a universal User Quality / Engagement / Trust Score（用户质量 / 互动 / 信任分） controlling unrelated platform rights.

---

## R10-F40 — No mandatory explainability or experimentation technology / 不绑定具体解释或实验技术

**SCOPE GUARD（范围护栏）.**

Round 10 does not mandate SHAP（SHAP 解释方法）, LIME（局部可解释模型方法）, one causal framework, one experiment platform, one metrics store or one analytics vendor. Product semantics and governance boundaries come first; implementation technology remains replaceable.

---

## 8. Current product picture / 当前产品形态

At this stage, Project 3 recommendation should be understandable as:

```text
Eligible inventory
  → multi-source retrieval
  → optional pre-ranking
  → task-specific ranking
  → diversity / exploration / freshness / trend / long-tail re-ranking
  → surface composition
  → truthful recommendation reason where exposed
  → scoped user controls
  → exposure + interaction context
  → multi-horizon evaluation with guardrails
  → policy/model iteration under Rule Evolvability
```

The architecture intentionally prevents three common collapses:

1. **Prediction accuracy = product quality（预测准确率 = 产品质量）** — rejected;
2. **User behavior = permanent identity（用户行为 = 永久身份）** — rejected;
3. **More engagement = more authority（更多互动 = 更高权威）** — rejected.

---

## 9. Deferred / 延后项

The following remain deliberately deferred:

- exact Why this?（为什么推荐这个） UI wording and placement;
- exact V1 correction/control set;
- Recommendation Reset（推荐重置） UX and granularity;
- metric formulas and target thresholds;
- survey mechanisms;
- A/B Test（A/B 测试） platform details;
- causal estimation techniques;
- retention periods for telemetry;
- dashboard design;
- final online/offline launch criteria;
- detailed privacy/legal policy and consent mechanics.

These are not forgotten; they remain later Product / Governance / Privacy / Implementation（产品 / 治理 / 隐私 / 实现） decisions.

---

## 10. Workshop F status / 工作坊 F 状态

Workshop F provides a coherent explanation-control-measurement boundary without choosing one model, metric, vendor or permanent algorithm.

A dedicated Adversarial Audit（对抗性审计） must follow before this workshop is treated as a stable Round 10 input.
