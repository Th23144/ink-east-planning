# Round 10 Workshop G — Hardening Addendum（第十轮工作坊 G 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-G.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop G Adversarial Audit（工作坊 G 对抗性审计）. It does not resolve the still-open Anonymous → Account merge（匿名 → 账户合并） product choice on the user's behalf.

---

## R10-G45 — Anonymous session state needs governed retention and expiry / 匿名会话状态需要受治理的保留与到期机制

**HARD PRIVACY / LIFECYCLE SAFEGUARD（隐私 / 生命周期硬保护）.**

Anonymous Session（匿名会话） personalization must not quietly become a permanent hidden profile merely because a cookie, device identifier or local cache can persist for a long time.

The architecture must permit explicit policy for:

- session / recent-anonymous-state retention;
- expiry / inactivity treatment;
- invalidation at login / logout where appropriate;
- privacy/legal deletion or restriction;
- whether any limited state is eligible for future authenticated handoff.

Exact retention windows remain DEFERRED CALIBRATION（延后校准） / Privacy Policy（隐私策略） decisions.

---

## R10-G46 — Reset needs generation/version semantics to prevent stale-state resurrection / 重置需要代次 / 版本语义，防止旧状态复活

**NEW SAFEGUARD（新增保护） / HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Recommendation Reset（推荐重置） may race with asynchronous feature pipelines, cached candidate generation, embedding updates or delayed event processing.

The architecture must support an equivalent of personalization epoch / generation / version / invalidation boundary（个性化代次 / 版本 / 失效边界） so derived state produced from an obsolete pre-reset context cannot silently overwrite the post-reset state.

This does not mandate a specific technical mechanism.

---

## R10-G47 — Personalization opt-out must affect future personal derivation, not only presentation / 退出个性化必须影响后续个人派生，而不能只改展示

**HARD PRIVACY / PRODUCT SAFEGUARD（隐私 / 产品硬保护）.**

When a user disables behavioral personalization under the applicable product/privacy mode, the system must not continue updating or consuming personal recommendation-derived state in a way that contradicts that control merely because the data pipeline still receives events.

This also means user-facing recommendation explanations must not claim behavior-history personalization when that mode is disabled.

Aggregate measurement, security, legal or other separately permitted uses remain governed by their own purpose/retention policies; opt-out semantics must not be broadened or narrowed silently.

---

## R10-G48 — Model rollback cannot resurrect superseded explicit user controls / 模型回滚不能复活已被后续用户控制取代的状态

**HARD SAFEGUARD（硬保护）.**

If a model/policy rollback occurs, the platform must preserve newer explicit user controls such as:

- Recommendation Reset（推荐重置）;
- Not Interested / Show Less（不感兴趣 / 少看）;
- Block（屏蔽）;
- Unfollow（取消关注）;
- interest edits or other future explicit corrections.

Rollback may restore an older algorithm/model version, but it must not restore an older user preference/control state as if later user actions never happened.

---

## R10-G49 — Cold-start supply keeps source semantics / 冷启动供给必须保留来源语义

**HARDENING（架构加固）.**

Initial recommendations may come from Editorial（编辑策展）, Trending（趋势）, broad exploration, locale/language context, explicit onboarding choices or other bootstrap sources.

The relevant source/origin should remain distinguishable enough for truthful explanation, evaluation and later learning. A cold-start editorial item must not be retroactively described as “because you like X” merely because the user clicked it.

---

## R10-G50 — Login, logout and shared-device boundaries require session isolation / 登录、退出与共享设备边界需要会话隔离

**HARD PRIVACY SAFEGUARD（隐私硬保护）.**

Login / Logout / Account Switch（登录 / 退出 / 切换账户） must not leave another person's session-level personalization silently attached to the new account context.

On shared/public devices, the architecture must support clearing, isolating or appropriately scoping anonymous/session state so one visitor's behavior does not become another account's inferred interest merely because they used the same browser/device.

This is compatible with a future limited Anonymous → Account handoff, but such handoff must be intentional and scope-controlled rather than an accidental shared-device merge.

---

## R10-G51 — Cross-device and cross-session reconciliation requires explicit identity policy / 跨设备与跨会话合并需要明确身份策略

**HARD PRIVACY / IDENTITY SAFEGUARD（隐私 / 身份硬保护）.**

Weak technical correlation — shared IP, similar behavior, device fingerprint similarity, household context or other probabilistic hints — must not by itself authorize silent durable-profile fusion.

Where cross-device/session continuity is supported, the architecture must use an explicit identity/reconciliation policy with appropriate evidence, scope, privacy controls and reversibility.

Interest continuity is not proof of identity.

---

## R10-G52 — Mode transitions invalidate incompatible derived state / 运行模式切换必须失效不兼容的派生状态

**HARDENING（架构加固）.**

Transitions among normal personalization, anonymous session, post-reset, opt-out, experiment treatment, fallback/degraded mode and restored service may leave incompatible caches, candidate sets, explanations or ranking features behind.

The architecture must support appropriate invalidation/recomputation at mode boundaries so stale state from one mode does not silently contaminate another.

Exact cache technology and latency targets remain implementation decisions.

---

## Effect on Workshop G / 对工作坊 G 的影响

- R10-G1…R10-G44 remain valid.
- R10-G45…R10-G52 are controlling hardening rules for future Round 10 consolidation.
- The only unresolved product choice is R10-G12 Anonymous → Account merge（匿名 → 账户合并）: Option A / B / C.
- Current recommendation remains **Option B（方案 B） — Scoped / transparent handoff（有限范围、透明衔接）**.
- No implementation is authorized.
