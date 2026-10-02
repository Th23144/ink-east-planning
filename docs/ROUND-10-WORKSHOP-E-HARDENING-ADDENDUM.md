# Round 10 Workshop E — Hardening Addendum（第十轮工作坊 E 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-E.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop E Adversarial Audit（工作坊 E 对抗性审计）.

---

## R10-E41 — Trend aggregation must be privacy-safe / 趋势聚合必须满足隐私安全

**HARD PRIVACY SAFEGUARD（隐私硬保护）.**

Trending（趋势） may only be derived from behavior/data appropriate for the intended aggregate/public use.

The platform must not create public or widely visible trend claims from:

- private notes / private messages / moderation cases（私人笔记 / 私信 / 审核案件）;
- restricted-purpose behavior;
- inappropriately small cohorts where trend labeling would create re-identification or sensitive-interest inference risk;
- otherwise disallowed sensitive inputs.

Exact aggregation thresholds, anonymity techniques and cohort minimums remain Privacy / Governance / Implementation（隐私 / 治理 / 实现） decisions, but the architectural boundary is hard.

---

## R10-E42 — Trending must distinguish platform-induced attention from organic attention change / 趋势必须区分平台诱导曝光与更自然的关注变化

**HARDENING（架构加固）.**

A Trending（趋势） system can become self-exciting if recommendation, editorial promotion, experimentation or future paid placement first creates extra exposure and the resulting interactions are then interpreted as independent evidence of accelerating public interest.

Where proportionate, trend evaluation should retain enough source/exposure context to distinguish materially different attention origins, including:

- ordinary / baseline exposure;
- recommendation-generated exposure;
- exploration treatment;
- editorial placement;
- experiment treatment;
- future paid / sponsored / commerce placement if separately authorized.

This does not mandate a specific causal estimator. It requires the feedback loop to remain diagnosable and prevents paid/editorial exposure from silently masquerading as organic public trend evidence.

---

## R10-E43 — Freshness is not factual verification / 新鲜度不等于事实核验

**CLARIFICATION（澄清） / HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Recently published or recently updated content is not automatically factually current, verified or reliable.

Where product meaning requires it, the architecture must allow these concepts to remain distinct:

- Publication Time（发布时间）;
- Material Update Time（实质更新时间）;
- Event / Effective Time（事件 / 生效时间）;
- Last Verified / Checked Time（最近核验时间）, when such a workflow exists;
- source/provenance and Work Recognition（作品认可） state.

A freshness boost must not silently manufacture a Verification（核验） claim.

---

## R10-E44 — Newness and freshness must preserve content lineage / 新内容与新鲜度必须保留内容谱系

**HARDENING（架构加固）.**

Translation（翻译）, Edition（版本）, Syndication（联合发布 / 联合转载）, Repost（重发）, Material Revision（实质修订） and related derived objects may legitimately have their own publication events, but they must preserve appropriate lineage to the underlying work/content/source relationships.

A newly minted object ID or timestamp must not automatically erase prior exposure/history or grant unlimited fresh/new-content treatment when the object is substantially the same material.

Exact lineage-specific treatment remains Policy / Algorithm（策略 / 算法）.

---

## R10-E45 — New / long-tail opportunity must resist supply flooding / 新内容与长尾机会必须防止供给灌水占满

**NEW SAFEGUARD（新增保护） / HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A creator or content family that publishes at very high volume must not automatically capture most New / Long-tail Opportunity（新内容 / 长尾机会） merely because it contributes more items.

The system should be able to observe concentration at appropriate creator/source/content-family levels and support later anti-flooding or diminishing-allocation policy without converting creator identity into a permanent penalty.

This does not mandate equal creator exposure or a fixed creator cap.

---

## R10-E46 — User cold start and item cold start are distinct / 用户冷启动与内容冷启动必须区分

**CLARIFICATION（澄清） / HARDENING（架构加固）.**

Two different uncertainty problems exist:

1. **User Cold Start（用户冷启动）** — the platform has little behavior/preference evidence about the reader;
2. **Item Cold Start（内容冷启动）** — the platform has little interaction history about the content/creator/object.

They may use overlapping tools such as declared interests, Topic / Place relations（主题 / 地点关系）, editorial curation, provenance, broad discovery and exploration, but they must not be treated as one semantic state.

A new user does not imply new content, and a new item does not imply an unknown user.

---

## R10-E47 — Exploration fatigue is not durable dislike / 探索疲劳不等于长期不喜欢

**HARDENING（架构加固）.**

Repeated exploratory exposure can become tiring even when individual candidates are reasonable. The platform should be able to rotate or reduce a particular exploration lane, Topic（主题）, format or creator in the near term without automatically writing a durable negative-interest edge.

Explicit negative feedback remains stronger and retains its own scope under Round 9.

---

## Effect on Workshop E / 对工作坊 E 的影响

- R10-E1…R10-E40 remain valid.
- R10-E41…R10-E47 are controlling hardening rules for future Round 10 consolidation.
- No exact trend threshold, privacy cohort size, exploration percentage, long-tail quota, freshness half-life, creator cap or model family is introduced.
- Workshop E has no unresolved material blocker after hardening.
- No implementation is authorized.
