# Round 10 — Human Review Checkpoint（第十轮人工审阅检查点）

> **Purpose:** make PR #53 easier to inspect manually.  
> **Status:** Round 10 SEALED / PRODUCT ARCHITECTURE ONLY（第十轮已封存 / 仅产品架构）  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Start here / 从这里开始看

If manually reviewing Round 10, read in this order:

1. `docs/INK-EAST-ROUND-10-CURRENT-TRUTH-V1.md`
2. `docs/ROUND-10-V1-SOURCE-PARITY-PASS.md`
3. `docs/ROUND-10-V1-ADVERSARIAL-AUDIT.md`
4. `docs/INK-EAST-ROUND-10-SEAL-RECORD.md`
5. only if you want decision provenance / detailed workshop history, inspect Workshops A–G and their Hardening Addenda（加固补充）.

---

## 2. Round 10 in one screen / 一屏看懂第十轮

Round 10 controls Discovery & Recommendation（发现与推荐）.

Core pipeline:

`Eligibility（资格） → Candidate Retrieval（候选召回） → optional Pre-ranking（可选预排序） → Ranking（排序） → Re-ranking / Blending（重排序 / 混排） → Surface Composition（页面组合） → Exposure / Feedback / Evaluation（曝光 / 反馈 / 评估）`

Key architecture boundaries:

- recommendation is multi-surface, not one universal feed score;
- Search（搜索）, Following（关注）, Explore（探索）, Related（相关推荐）, Topic / Place（主题 / 地点） preserve different user tasks;
- Interest Graph（兴趣图谱） is one relevance input, not identity truth;
- popularity/rank/exposure do not create authority or Work Recognition（作品认可）;
- privacy/rights/moderation/access eligibility cannot be bypassed by ranking;
- user controls must propagate to derived state and survive model rollback;
- anonymous/session state cannot silently become a permanent account profile;
- exploration/diversity/freshness/trending/long-tail remain distinct objectives;
- paid/sponsored/commerce recommendation is not authorized;
- notification delivery/ranking is explicitly deferred.

---

## 3. Three provisional choices / 三项暂定选择

These were explicitly selected by the user and remain provisional rather than immutable:

1. Home / For You（首页 / 为你推荐） → **Hybrid Homepage（混合式首页）**;
2. Following（关注） → **Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）**;
3. Anonymous → Account（匿名 → 账户） → **Scoped / transparent handoff（有限范围、透明衔接）**.

---

## 4. Validation result / 验证结果

- Controlling rules: **318**;
- Source Parity Pass（来源完整性检查）: **318 / 318 PASS**;
- Cross-Workshop Audit（跨工作坊审计）: **PASS AFTER HARDENING**;
- full Round 10 Adversarial Audit（第十轮整轮对抗性审计）: **158 explicit failure modes checked, PASS, zero unresolved material blockers**;
- Seal（封存）: **SEALED / PRODUCT ARCHITECTURE ONLY**.

---

## 5. What is not decided / 仍未写死的内容

Do not interpret Round 10 as fixing:

- exact ranking weights/formulas;
- exploration/diversity/trend/long-tail percentages;
- specific ML（机器学习） / vector/search/storage technology;
- final homepage visual layout;
- exact metric thresholds;
- anonymous retention duration;
- exact V1 recommendation-control UI;
- Notifications / Delivery（通知 / 投递） architecture;
- sponsored/paid/commerce recommendation policy.

These remain later evolvable decisions.
