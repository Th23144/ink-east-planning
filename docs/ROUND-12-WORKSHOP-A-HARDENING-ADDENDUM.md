# Round 12 Workshop A — Hardening Addendum（第十二轮工作坊 A 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-12-MEMBERSHIP-READING-ROOM-WORKSHOP-A.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop A Adversarial Audit（工作坊 A 对抗性审计）. It does not resolve the still-open public Membership packaging（公开会员包装） choice on the user's behalf.

---

## R12-A45 — Entitlement changes must propagate to access caches and durable delivery artifacts / 权益变化必须传播到访问缓存与持久投递凭证

**NEW SAFEGUARD（新增保护） / HARD ACCESS REQUIREMENT（访问硬要求）.**

Grant, expiry, suspension, revocation, plan migration or another material Entitlement（权益） change must be able to invalidate/re-evaluate dependent access state such as:

- server/session authorization caches;
- CDN / edge access state where applicable;
- pre-generated premium pages;
- signed URLs / download links where they carry access;
- cached capability checks;
- downstream delivery jobs that assumed continuing eligibility.

Exact cache technology and invalidation mechanism are implementation details. The invariant is that stale derived state cannot become an independent permanent entitlement source.

---

## R12-A46 — Payment/event processing must be idempotent at the product-state boundary / 支付与事件处理在产品状态边界必须幂等

**NEW SAFEGUARD（新增保护） / HARD COMMERCIAL INTEGRITY REQUIREMENT（商业完整性硬要求）.**

Duplicate payment-provider events, retries or safe message re-delivery must not create duplicate entitlement periods, duplicate credits, duplicate grants or repeated irreversible state transitions merely because the same event arrived more than once.

This does not mandate a specific event-store or database pattern; it requires stable event/operation identity and safe replay semantics where material.

---

## R12-A47 — Stale or out-of-order provider events cannot resurrect superseded Membership state / 过期或乱序支付事件不能复活已被取代的会员状态

**HARD CONCURRENCY / LIFECYCLE SAFEGUARD（并发 / 生命周期硬保护）.**

A delayed `active` or `payment succeeded` event must not silently overwrite a later valid cancellation, refund, dispute, migration or entitlement revocation.

Material commercial/entitlement transitions must finalize against coherent current state and relevant event/version ordering rather than last-write-wins by arrival time.

---

## R12-A48 — Plan, price and benefit changes require effective-dated treatment for existing subscriptions / 方案、价格与福利变化对存量订阅必须采用明确生效时间

**HARD POLICY-VERSIONING SAFEGUARD（策略版本硬保护）.**

Changing a public Plan（方案） definition must not silently rewrite the commercial/benefit terms that were actually applicable to an existing member.

The architecture must permit policy choices such as:

- new terms only for new purchases;
- scheduled migration at renewal;
- explicit upgrade/downgrade acceptance;
- grandfathering;
- legally/product-required immediate change with appropriate notice/process.

Exact contract/legal handling is deferred, but historical and current entitlement meaning must remain explainable.

---

## R12-A49 — Membership-derived capabilities must expire with their controlling entitlement / 由会员产生的能力必须随控制权益失效

**HARD CAPABILITY SAFEGUARD（能力硬保护）.**

If Membership legitimately unlocks or accelerates a product capability — for example longer Community publishing, additional submission allowance or another context-specific function — cached capability state must not survive after the relevant Entitlement expires/revokes unless an independent valid capability source exists.

Historical publications/actions already completed remain governed by their own lifecycle; capability loss changes future action authority rather than retroactively erasing valid history.

---

## R12-A50 — Membership and billing data are purpose-limited commercial data / 会员与计费数据属于用途受限的商业数据

**HARD PRIVACY / PURPOSE-LIMITATION SAFEGUARD（隐私 / 用途限制硬保护）.**

Payment method, billing address, payment amount, invoice state, processor risk data, plan purchase and similar commercial data must not automatically become:

- Interest Graph（兴趣图谱） identity/interest edges;
- organic Recommendation（推荐） ranking signals;
- Contributor Qualification（贡献者资格） evidence;
- Reviewer Trust（评审信任） evidence;
- governance standing;
- unrelated public-profile data.

A future deliberate use of a narrowly defined membership signal elsewhere requires its own product purpose, policy basis, minimization, provenance and audit treatment rather than silent cross-system reuse.

---

## Effect on Workshop A / 对工作坊 A 的影响

- R12-A1…R12-A44 remain valid as proposed.
- R12-A45…R12-A50 are controlling hardening rules for future Round 12 consolidation.
- Workshop A has **zero unresolved material architecture blockers**.
- One product decision remains open: **R12-A44 public Membership packaging（公开会员包装） — Option A / B / C**.
- Current recommendation remains **Option B（方案 B） — Two Public Membership Levels（双层公开会员）**, with exact names, prices and benefits still deferred.
- No payment provider, tax model, checkout UX（用户体验）, public plan names, fixed prices, archive policy or membership-benefit quota is authorized by this addendum.
