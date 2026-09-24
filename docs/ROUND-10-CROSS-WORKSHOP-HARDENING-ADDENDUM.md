# Round 10 — Cross-Workshop Hardening Addendum（第十轮跨工作坊架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Source:** `docs/ROUND-10-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records the six cross-workshop safeguards identified after reviewing Round 10 Workshops A–G and their local Hardening Addenda（加固补充） together.

---

## R10-X1 — Topic / Place dedicated surfaces remain anchored to the opened entity / 主题 / 地点专页必须锚定用户主动打开的实体

**HARD PRODUCT BOUNDARY（产品边界）.**

A dedicated Topic（主题） or Place（地点） surface may use personalization, freshness, editorial selection, popularity, exploration and other ranking signals, but its core inventory and navigation meaning must remain anchored to the Topic / Place the user intentionally opened.

The platform must not silently transform a Topic / Place page into a generic For You（为你推荐） feed merely because personalized content predicts higher engagement.

Related / adjacent discovery may supplement the anchored inventory where clearly separated or semantically defensible.

Exact tabs, filters, ordering modes and page layout remain DEFERRED CALIBRATION（延后校准）.

---

## R10-X2 — Notifications recommendation is explicitly deferred / 通知推荐明确延后设计

**SCOPE CLARIFICATION（范围澄清） / HARDENING（架构加固）.**

Round 10 may treat Notifications（通知） as a future consumer of shared recommendation signals, but it does **not** define a complete Notifications / Delivery（通知 / 投递） system.

The following remain outside Round 10 and require a future dedicated architecture:

- notification eligibility and event taxonomy;
- urgency / interruption cost;
- delivery channel selection;
- batching / digest behavior;
- notification frequency / fatigue policy;
- read/unread lifecycle;
- transactional vs social vs recommendation notifications;
- quiet hours / user delivery controls;
- notification-specific ranking and suppression.

Inherited hard boundaries still apply: privacy, rights/access, explicit Block（屏蔽）, source/object identity, purpose limits and recommendation-vs-authority separation.

Round 10 Current Truth（当前有效真相） must not describe Notifications（通知） as fully designed.

---

## R10-X3 — Anonymous → Account handoff is subordinate to explicit user controls / 匿名 → 账户衔接必须服从用户明确控制

**HARD PRIVACY / PRODUCT SAFEGUARD（隐私 / 产品硬保护）.**

The user-confirmed provisional direction is Scoped / transparent handoff（有限范围、透明衔接）.

Any anonymous/session handoff into authenticated personalization must remain subordinate to:

- Recommendation Reset（推荐重置）;
- Personalization Opt-out（退出个性化）;
- explicit Not Interested / Show Less（不感兴趣 / 少看） where scope applies;
- Block（屏蔽）;
- Login / Logout / Account Switch（登录 / 退出 / 切换账户） isolation;
- shared-device boundaries;
- applicable privacy / retention policy.

Handoff must not silently rehydrate state that a later explicit control invalidated, and it must not upgrade anonymous inference into durable identity truth merely because the browser/device can be linked.

Material handoff policy changes should retain appropriate Policy Version / Decision Provenance（策略版本 / 决策溯源） where consequential.

---

## R10-X4 — Recommendation operating mode/context must be representable / 推荐运行模式与情境必须可表达

**HARDENING（架构加固） / ARCHITECTURAL REQUIREMENT（架构要求）.**

Where material to explanation, evaluation, cache invalidation, user control or debugging, the recommendation pipeline should be able to distinguish operating contexts such as:

- normal authenticated personalization;
- Anonymous Session（匿名会话）;
- New User / Cold Start（新用户 / 冷启动）;
- Post-reset State（重置后状态）;
- Personalization Opt-out（退出个性化）;
- Experiment / Exploration treatment（实验 / 探索处理）;
- Degraded / Fallback Mode（降级 / 回退模式）.

This does not mandate one technical `mode` enum or one storage schema. It requires those materially different semantics not to disappear into one opaque execution path.

Mode/context identity must not itself become a permanent user label.

---

## R10-X5 — Round 10 does not authorize paid ranking or commerce insertion / 第十轮不授权付费排序或商业内容插入

**HARD SCOPE BOUNDARY（范围硬边界）.**

Nothing in Round 10 authorizes:

- paid rank boosts;
- sponsored recommendation insertion;
- partner-priority ranking;
- Spatial Flow（空间流） merchandising boosts;
- commerce placement disguised as organic personalization.

If a future Monetization / Commerce Recommendation（商业化 / 商业推荐） architecture authorizes such mechanisms, it must separately define candidate-source identity, eligibility, user-facing attribution, conflict-of-interest controls, interaction with organic ranking/editorial curation, measurement, Rule / Policy Version（规则 / 策略版本） and auditability.

Commercial value must not create factual authority, Work Recognition（作品认可） or inferred personal interest.

---

## R10-X6 — Consolidation must preserve rule status taxonomy / 当前真相整合必须保留规则状态分类

**HARD DOCUMENTATION / GOVERNANCE REQUIREMENT（文档 / 治理硬要求）.**

Round 10 Current Truth（当前有效真相） must preserve material distinctions among:

- HARD INVARIANT（硬边界）;
- HARD PRODUCT DIRECTION / REQUIREMENT（产品级硬方向 / 要求）;
- ADAPTIVE RULE（弹性规则）;
- HARDENING（架构加固）;
- DEFERRED CALIBRATION（延后校准）;
- SCOPE GUARD / SCOPE BOUNDARY（范围护栏 / 范围边界）;
- PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.

The three user-confirmed provisional directions must not be rewritten as immutable invariants merely because the round is later sealed:

1. Hybrid Homepage（混合式首页）;
2. Ranked Following default + visible Latest / All Updates（关注页默认相关排序 + 明确最新 / 全部更新）;
3. Scoped / transparent Anonymous → Account handoff（有限范围、透明匿名 → 账户衔接）.

Seal（封存） means the architecture is the current controlling baseline, not that every adaptive/provisional parameter can never change.

---

## Effect / 影响

- Workshops A–G and their local Hardening Addenda remain valid.
- R10-X1…R10-X6 are controlling cross-workshop hardening rules for Round 10 consolidation.
- No unresolved product-direction choice remains after the user's latest Option B confirmation.
- No fixed percentage, ranking weight, model family, retention window, UI layout or infrastructure stack is introduced.
- No implementation is authorized.

Round 10 may proceed to Current Truth Consolidation（当前有效真相整合）.