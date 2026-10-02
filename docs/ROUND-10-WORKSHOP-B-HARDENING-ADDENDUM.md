# Round 10 Workshop B — Hardening Addendum（第十轮工作坊 B 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-B.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified during the dedicated Workshop B Adversarial Audit（工作坊 B 对抗性审计）. It does **not** reverse the user-selected **C — Hybrid Homepage（混合式首页）** direction.

---

## R10-B36 — Hybrid composition must not silently collapse into one mode / 混合式首页不能在运行中静默退化成单一模式

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

A Hybrid Homepage（混合式首页） can fail operationally even when the architecture nominally contains both Modules / Shelves（模块 / 内容货架） and a Personalized Discovery Stream（个性化发现流）. For example, one mode may receive almost all inventory/exposure while the other becomes decorative or effectively absent.

Project 3 should be able to observe whether the hybrid design has unintentionally collapsed into a pure portal/shelf page or a pure endless feed across normal operating conditions.

This does **not** require both modes to appear in every session. Sparse inventory, explicit task context or other legitimate conditions may temporarily justify one mode being absent. No fixed module-vs-stream ratio is authorized.

---

## R10-B37 — Module-level controls retain their own scope / 模块级控制必须保留独立作用范围

**NEW SAFEGUARD（新增保护） / HARD PRODUCT REQUIREMENT（产品级硬要求）.**

If future UX allows actions such as Hide this module / Show less of this shelf / Not useful now（隐藏此模块 / 减少此模块 / 现在不需要）, those actions must not automatically be interpreted as a durable dislike of every Topic, creator or content item represented inside that module.

Module preference, item preference, Topic / Place preference, creator preference and global Recommendation Reset（推荐重置） are different control scopes.

Exact V1 module-control UX remains deferred.

---

## R10-B38 — Home modules do not replace dedicated product surfaces / 首页模块不能替代专门页面的产品职责

**HARDENING（架构加固）.**

A Following Updates（关注更新） module on Home does not eliminate the dedicated Following（关注） surface. An Explore（探索） module does not replace Explore. Search suggestions do not replace Search（搜索）.

Home is a composed discovery surface. Dedicated surfaces may provide stronger intent fidelity, deeper inventory, alternate ordering and clearer user control. Homepage omission must not be interpreted as proof that a followed/eligible object does not exist.

---

## R10-B39 — Paid, sponsored or commerce placement cannot silently masquerade as organic recommendation / 付费、赞助或商业位不能静默伪装成自然推荐

**NEW SAFEGUARD（新增保护） / HARD PRODUCT BOUNDARY（产品边界）.**

Round 10 does not authorize paid ranking, sponsored recommendations, partner placement, commerce boosts or Spatial Flow merchandising to enter Home as if they were ordinary organic personalization signals.

If future Services / Monetization / Spatial Flow（服务 / 商业化 / Spatial Flow） architecture introduces paid or commercial placement, it must define:

- a distinct candidate/source class where appropriate;
- eligibility and policy boundaries;
- user-facing labeling / attribution where required;
- interaction with organic ranking, editorial curation and personalization;
- measurement and conflict-of-interest controls;
- Rule / Policy Version（规则 / 策略版本） and auditability for material changes.

Commercial value must not silently become epistemic authority, Work Recognition（作品认可） or inferred personal interest.

---

## Effect on Workshop B / 对工作坊 B 的影响

- R10-B1…R10-B35 remain valid.
- User-selected **C — Hybrid Homepage（混合式首页）** remains PROVISIONAL（暂定）, not immutable.
- R10-B36…R10-B39 are controlling hardening rules for future Round 10 consolidation.
- No fixed layout, module count, module-vs-stream ratio, ranking weight or model family is introduced.
- No implementation is authorized.