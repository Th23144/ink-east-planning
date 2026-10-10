# Round 10 Workshop G — Anonymous → Account Handoff Decision（第十轮工作坊 G——匿名 → 账户衔接决定）

> **Status:** USER-CONFIRMED PROVISIONAL PRODUCT DIRECTION（用户确认的暂定产品方向）  
> **Scope:** Anonymous / pre-login session behavior（匿名 / 登录前会话行为）进入登录后个性化状态的方式  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## Decision / 决定

The user selected **Option B（方案 B） — Scoped / transparent handoff（有限范围、透明衔接）**.

This supersedes the `PENDING USER DECISION（等待用户决定）` state recorded for R10-G12 in `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-G.md`.

The direction is **PROVISIONAL（暂定）**, not an immutable invariant. It may later be revised through explicit product-architecture change after privacy, product and empirical review.

---

## Meaning / 产品含义

Anonymous Session（匿名会话） state may support limited continuity after authentication where that continuity is useful and legitimate, but the platform must not silently convert all anonymous history into a durable authenticated Interest Graph（兴趣图谱）.

A typical allowed pattern is short-horizon continuity such as preserving an active reading/deep-dive context after login. A typical disallowed default is silently importing months of anonymous browsing into a permanent account-level interest profile merely because the same browser/device can be correlated.

---

## Controlling safeguards / 控制性保护

This decision inherits Workshop G and its audit safeguards, especially:

1. Anonymous state is session/recent context, not durable identity truth.
2. Anonymous state has governed retention / expiry and must not become a permanent hidden profile.
3. Login / logout / account switch / shared-device boundaries require isolation.
4. Weak technical correlation — IP, device fingerprint similarity, household context, behavioral similarity — cannot by itself authorize durable-profile fusion.
5. Handoff must be scope-controlled and compatible with privacy / consent / product settings.
6. Personalization Opt-out（退出个性化） must prevent contradictory personal derivation or handoff.
7. Recommendation Reset（推荐重置） must not be defeated by re-importing stale anonymous state.
8. Explicit Follow / Save / account-owned state（关注 / 收藏 / 账户明确状态） remains semantically distinct from anonymous inferred context.
9. Any material handoff policy remains versionable, auditable at a proportionate level, and reversible where product/privacy semantics require it.
10. Exact retention windows, UX wording, identifiers and technical reconciliation mechanisms remain DEFERRED CALIBRATION（延后校准） / implementation decisions.

---

## Effect / 影响

Workshop G now has **no unresolved product-direction blocker**.

Round 10 can proceed to **Cross-Workshop Consistency & Completeness Audit（跨工作坊一致性与完整性审计）** across Workshops A–G and all local Hardening Addenda（加固补充）.