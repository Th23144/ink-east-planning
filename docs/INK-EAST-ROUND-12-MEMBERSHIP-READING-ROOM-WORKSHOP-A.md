> ⚠️ **HISTORICAL / NON-CONTROLLING AFTER ROUND 12 SCOPE CORRECTION（历史 / 第十二轮范围纠正后不再具控制效力）**  
> This Workshop A entered fine-grained Membership architecture before Membership value, Reading Room（阅读室）, Participation（参与） and Services（服务） had been defined. Its A1–A50 rules are Decision Provenance（决策溯源） only unless later re-derived under the corrected public-content baseline.  
> Controlling record: `ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`.

# Round 12 — Membership / Reading Room（会员 / 阅读室） — Workshop A（工作坊 A）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Membership Object, Plans, Entitlements & Access Semantics（会员对象、方案、权益与访问语义）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Open product decision:** public Membership packaging（公开会员包装） remains a genuine user decision; the architecture below deliberately does not assume one tier or multiple tiers.

---

## 0. Decision at a glance / 本步结论一览

Round 12 starts by separating four things that older Ink & East（墨与东方） documents often treated as one bundle:

```text
Membership Plan / Offer（会员方案 / 售卖方案）
        ↓
Subscription / Commercial Agreement（订阅 / 商业协议）
        ↓
Entitlement Grant（权益授予）
        ↓
Access / Capability Decision（访问 / 能力决定）
```

Core direction:

- Membership（会员） is a commercial/access relationship, **not** a prestige identity;
- Payment（支付） does not purchase Trust / Verification / Work Recognition / Reviewer or Governance Authority（信任 / 认证 / 作品认可 / 评审或治理权力）;
- exact membership tier count remains a product decision, while the underlying architecture should stay Entitlement-based（权益驱动） so plans can evolve safely;
- billing state and content-access state are related but not identical;
- Issue / Archive / premium-object access must respect underlying Rights / Privacy / Lifecycle（权利 / 隐私 / 生命周期） boundaries;
- cancellation or expiry changes future benefits but must not rewrite historical authorship, participation or transactions;
- old fixed Reader / Patron pricing and privilege bundles remain historical product input, not current immutable architecture truth.

---

## 1. Inherited source truth / 继承来源事实

Workshop A inherits these controlling facts:

1. `INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md` Correction C1 explicitly says VIP（会员） may provide a bundle of additional privileges, but whether the product uses one tier or multiple tiers is **undecided and belongs to the Membership round**.
2. The same correction says payment/VIP status does not make a user authoritative and does not make their content automatically high-quality.
3. Round 4 Contributor / Identity architecture allows Membership to reduce some anti-abuse friction or accelerate some account capabilities, but explicitly forbids Membership from manufacturing Behavioral Trust（行为信任）, professional competence, Reviewer Trust（评审信任）, Work Recognition（作品认可） or governance power.
4. Round 6 Identity / Role / Permission architecture states that Membership cannot purchase factual verification, expertise, Reviewer/Governance standing or Work Recognition.
5. Round 11 keeps Issue-level access and object-level access distinguishable and intentionally defers Membership / Reading Room entitlement design to Round 12.
6. The older `INK-EAST-BRIEF.md` proposed Reader / Patron membership, Archive access, premium long reads, Ask the Ancient Text（问古书） allowances and editorial-voting-like benefits. These are historical product inputs only; later architecture may retain, adapt or reject individual benefits.
7. Round 1 explicitly says the old VIP-only content-board / VIP Library concept is not locked and must be reconsidered in this Membership round.

Where historical pricing/tier wording conflicts with later sealed architecture or this Round's explicit user decisions, later architecture controls.

---

# 2. Core membership objects / 核心会员对象

## R12-A1 — Membership is not identity class / 会员不是身份等级

**HARD INVARIANT（硬边界）.**

Membership status must not become a global prestige caste, verified identity class, expertise class or governance level.

---

## R12-A2 — Plan, Subscription, Billing Arrangement, Entitlement and Access Decision are distinct / 方案、订阅、计费安排、权益与访问决定相互独立

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The domain must be able to distinguish at least:

- Membership Plan / Offer（会员方案 / 售卖方案）;
- Subscription / Commercial Agreement（订阅 / 商业协议）;
- Billing Arrangement（计费安排，例如月付 / 年付）;
- Entitlement Grant（权益授予）;
- Usage Allowance / Credit（使用额度 / 次数） where applicable;
- Access / Capability Decision（访问 / 能力决定）.

These concepts must not be collapsed into one `is_vip=true` flag.

---

## R12-A3 — Membership subject is stable and explicit / 会员权益归属主体必须稳定且明确

**HARD INVARIANT（硬边界）.**

A Membership / Entitlement must bind to a stable platform subject rather than an email address, display name, browser or payment-card identifier.

---

## R12-A4 — Public plan name is not durable entitlement identity / 对外方案名称不是持久权益身份

**HARDENING（架构加固）.**

A label such as `Reader`, `Patron`, `VIP`, `Supporter` or a future localized name may change without forcing a rewrite of historical entitlement identity.

---

## R12-A5 — Entitlements are typed and scoped / 权益必须有类型和作用范围

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Examples may include premium-content access, archive access, early access, submission allowances, publishing-tool access or other legitimate benefits. Exact benefit taxonomy remains evolvable.

---

## R12-A6 — One plan may grant multiple entitlements / 一个方案可以授予多个权益

**HARD PRODUCT DIRECTION（产品级硬方向）.**

A commercial plan is a bundle over Entitlements（权益）, not a magic role whose name is checked everywhere in product code.

---

## R12-A7 — One entitlement may have multiple valid grant sources / 同一权益可以有多个有效授予来源

**HARDENING（架构加固）.**

A user may receive the same entitlement through a paid plan, legacy migration, compensation, editorial/promotion grant or another authorized route. Revoking one source must not automatically revoke an independent valid source.

---

## R12-A8 — Material entitlement grants retain provenance / 重要权益授予需要保留溯源

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Where consequential, the platform should be able to explain what granted an entitlement, to whom, under what version/policy, when it became effective and when/why it ended or changed.

---

# 3. Access semantics / 访问语义

## R12-A9 — Access is evaluated, not inferred from a plan label / 访问权限通过规则评估，而不是从方案名称直接推断

**HARD INVARIANT（硬边界）.**

An access decision should consider applicable Entitlement（权益）, object access policy, lifecycle, rights/privacy/legal restrictions and relevant context. Code must not scatter checks such as `if plan == Patron` as the only source of truth.

---

## R12-A10 — Payment event is not itself content access / 支付事件本身不等于内容访问

**HARD INVARIANT（硬边界）.**

A payment authorization, invoice, charge, refund or processor webhook is commercial evidence/state. Access derives through the applicable Subscription / Entitlement lifecycle rather than directly from raw payment events.

---

## R12-A11 — Membership cannot override rights, privacy, legal or moderation restrictions / 会员不能绕过权利、隐私、法律或审核限制

**HARD INVARIANT（硬边界）.**

A paid user does not gain access to material that is unavailable because the platform lacks reuse rights, consent, legal permission or valid lifecycle availability.

---

## R12-A12 — Issue-level access and object-level access remain distinguishable / 议题级访问与对象级访问保持可区分

**HARD inherited boundary（继承硬边界）.**

Membership may grant access to an Issue（议题）, an Archive（归档）, a class of premium Works（作品） or another surface, but inclusion in one Issue does not mechanically rewrite the underlying object's independent access policy.

---

## R12-A13 — Archive access is version-aware / 归档访问必须感知版本

**HARD HISTORY SAFEGUARD（历史硬保护）.**

Where Membership grants Archive access, the reader must see the latest valid representation by default under Round 11 while historical snapshots remain governed by their own rights/access/history rules.

---

## R12-A14 — Losing Membership does not delete underlying content identity / 会员失效不会删除底层内容身份

**HARD INVARIANT（硬边界）.**

Expiry/cancellation changes access/benefits. It must not delete the Work, Issue, citation, authorship or historical publication merely because one reader no longer has access.

---

## R12-A15 — Preview / paywall metadata cannot defeat access control / 预览与付费墙元数据不能绕过访问控制

**HARD ACCESS SAFEGUARD（访问硬保护）.**

Teasers, SEO（搜索引擎优化） text, social previews, summaries and Issue framing must not expose enough restricted material to make the Membership boundary meaningless.

---

## R12-A16 — Membership loss does not automatically delete user-created data / 会员失效不自动删除用户自己创建的数据

**HARD PRODUCT BOUNDARY（产品边界）.**

Cancellation/expiry must not destructive-cascade a user's lawful profile, publications, discussion contributions, saves, private notes or transaction history. Future access to a premium source or premium tool may change, but data disposition is a separate lifecycle question.

---

# 4. Benefit semantics / 权益语义

## R12-A17 — Membership benefits are explicit capabilities or access grants / 会员福利必须是明确的能力或访问权益

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Potential benefits may include content access, Archive access, early access, additional submission allowances, selected publishing capabilities, member-only editorial experiences or other product value. Benefits must be individually understandable rather than hidden inside prestige status.

---

## R12-A18 — Membership cannot purchase authority / 会员不能购买权威

**HARD INVARIANT（硬边界）.**

Payment cannot directly grant:

- factual/identity Verification（事实 / 身份认证）;
- Contributor Qualification（贡献者资格）;
- Expertise Scope（专业范围）;
- Reviewer Trust（评审信任）;
- Governance Authority（治理权力）;
- Work Recognition（作品认可）;
- canonical/source authority（典籍 / 来源权威）.

---

## R12-A19 — Membership capability acceleration is contextual, not global / 会员能力加速必须是情境化的，不是全局加权

**HARD inherited boundary（继承硬边界）.**

Membership may reduce anti-abuse friction for selected capabilities where justified, but it must not create one global Account Weight（账户权重） that leaks into unrelated publishing, ranking, governance or recognition decisions.

---

## R12-A20 — Payment friction is evidence of economic commitment, not Behavioral Trust / 付费摩擦只能证明经济投入，不等于行为信任

**HARD CLARIFICATION（硬性澄清）.**

A paid account may be less cheap to mass-create, but payment does not prove policy compliance, expertise, honesty or reviewer reliability.

---

## R12-A21 — Benefits must be explainable to the member / 会员权益必须能向用户解释

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The member should be able to understand what current Membership grants, what is unavailable, and why material entitlement changes occurred without exposing anti-abuse internals unnecessarily.

---

## R12-A22 — Membership cannot purchase hidden organic recommendation boost / 会员不能购买隐藏的自然推荐加权

**HARD INVARIANT（硬边界）.**

Paid status may legitimately unlock content/capabilities but must not secretly increase organic Recommendation（推荐） rank, Contributor launch support or Recognition eligibility merely because the user pays.

---

## R12-A23 — Commercial support and editorial merit remain separate / 商业支持与编辑价值保持分离

**HARD INVARIANT（硬边界）.**

A Patron/Supporter-style plan may signal support for the project, but support level must not become evidence that the user's publications deserve editorial selection or Work Recognition.

---

## R12-A24 — Member allowances are not governance rights by default / 会员次数额度默认不是治理权

**HARD PRODUCT BOUNDARY（产品边界）.**

Benefits such as extra submissions, questions, bookings, early access or editorial participation must not silently become platform governance authority. Any consequential vote or decision right needs separate architecture and safeguards.

---

## R12-A25 — VIP-only content lane is not assumed / 不预设独立 VIP 内容通道

**HARD CLARIFICATION（硬性澄清）.**

Premium access may be expressed through access policy over supported content classes/collections/issues. Round 12 does not assume the old static `VIP Library` must survive as a separate content ontology.

---

# 5. Subscription & entitlement lifecycle / 订阅与权益生命周期

## R12-A26 — Subscription state and Entitlement state are distinct / 订阅状态与权益状态分离

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Commercial states such as trial, active, past-due, scheduled cancellation, cancelled, refunded or disputed do not necessarily map one-to-one to content-access state.

---

## R12-A27 — Scheduled cancellation and immediate termination are distinct / 到期取消与立即终止不同

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

`Cancel at period end` must be representable separately from an immediate access termination required by refund, fraud, legal, abuse or another policy path.

---

## R12-A28 — Payment-failure grace is policy, not invariant / 支付失败宽限属于策略，不是硬规则

**ADAPTIVE RULE（弹性规则）.**

A failed renewal may allow a grace/retry window where appropriate. Exact duration and access behavior are deferred calibration and may differ by provider/product/jurisdiction.

---

## R12-A29 — Refund, chargeback, dispute and cancellation are distinct / 退款、拒付、争议与取消相互区分

**HARDENING（架构加固）.**

These events may lead to different commercial and entitlement consequences. They must not be collapsed into one generic `cancelled` state.

---

## R12-A30 — Re-subscription does not rewrite prior Membership history / 重新订阅不能改写旧会员历史

**HARD HISTORY SAFEGUARD（历史硬保护）.**

A returning member may regain eligible benefits under current policy, but the platform must not pretend the membership was uninterrupted if it was not.

---

## R12-A31 — Plan migration is explicit and version-aware / 方案迁移必须明确并感知版本

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

When benefits/pricing/plan structure change, the architecture must support explicit migration, effective dating, compatibility and historical interpretation rather than mutating old subscriptions in place without trace.

---

## R12-A32 — Grandfathering must be possible / 必须允许旧用户保留旧权益

**HARDENING（架构加固）.**

The system should support old members continuing under a prior valid entitlement bundle when product policy chooses grandfathering, without requiring it universally.

---

## R12-A33 — Billing period is separate from Membership level / 计费周期与会员等级分离

**HARD CLARIFICATION（硬性澄清）.**

Monthly vs annual billing must not automatically mean different entitlement tiers. A public membership level may have multiple billing periods, and two levels may share a billing cadence.

---

## R12-A34 — Complimentary / promotional grants are explicit / 赠送与促销权益必须明确

**HARDENING（架构加固）.**

A comp, trial, promotion, migration credit or support grant should create an attributable entitlement source rather than forging a fake payment transaction.

---

## R12-A35 — Manual/admin Membership grants are controlled and auditable / 人工或后台赠送会员必须受控且可审计

**HARD PERMISSION SAFEGUARD（权限硬保护）.**

Staff ability to grant, extend, revoke or alter paid-equivalent access is a scoped commercial/access permission, not ordinary content-edit permission.

---

## R12-A36 — Overlapping valid grants do not blindly overwrite each other / 多个有效权益来源不能互相覆盖

**HARDENING（架构加固）.**

If a user has paid access plus a complimentary extension, cancelling one source must not accidentally remove the other valid entitlement.

---

# 6. Membership subject, transfer & account boundaries / 会员主体、转移与账户边界

## R12-A37 — Consumer Membership defaults to Personal Platform Context / 消费者会员默认属于个人平台情境

**HARD inherited direction（继承硬方向）.**

Consistent with Round 6, ordinary Membership purchase/access should normally belong to the personal account/context that purchased or received it. Future Organization Membership（组织会员） requires its own explicit commercial/permission architecture rather than silent reuse.

---

## R12-A38 — Membership is not freely transferable by default / 会员默认不可自由转让

**HARD PRODUCT BOUNDARY（产品边界）.**

A paid Membership is not a bearer asset that can automatically be moved between unrelated accounts. Future gifts, family plans, organization seats or transfers require explicit product rules.

---

## R12-A39 — Account lifecycle and Membership lifecycle remain separate / 账户生命周期与会员生命周期分离

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Account suspension, closure, deletion request, payment cancellation and subscription expiry are different events with distinct data/transaction/access consequences.

---

## R12-A40 — Payment does not merge identities or personas / 支付不能自动合并身份或人格

**HARD PRIVACY / IDENTITY SAFEGUARD（隐私 / 身份硬保护）.**

Using the same payment instrument, billing name, device or IP must not automatically merge separate Stable Platform Identities（稳定平台身份） or public personas into one identity graph.

---

# 7. Rule evolvability, providers & decision provenance / 规则可演进、支付提供商与决策溯源

## R12-A41 — Membership policy is versionable / 会员策略必须可版本化

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Material changes to entitlement bundles, eligibility, grace, migration or access policy should be representable as versioned policy with effective time where consequential.

---

## R12-A42 — Consequential access decisions need reconstructable basis / 重要访问决定需要可重建依据

**HARDENING（架构加固）.**

Where support, disputes or historical interpretation require it, the system should be able to explain which subject, entitlement source, object-access policy and relevant lifecycle state produced an allow/deny decision without preserving unnecessary sensitive detail.

---

## R12-A43 — Membership architecture is payment-provider neutral / 会员架构不能绑定单一支付提供商

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Stripe（支付服务商） or any future processor may implement billing, but provider-specific subscription IDs/statuses must not become the entire product-domain model.

---

# 8. Genuine product decision — public Membership packaging / 真实产品选择——公开会员包装

## R12-A44 — Number and shape of public membership levels requires user decision / 公开会员层级数量与形式需要用户确认

**PENDING USER DECISION（等待用户决定）.**

The architecture above supports all three directions safely. The public product still needs one current direction:

### Option A — Single Core Membership（单一核心会员）

- one main paid membership;
- monthly / annual billing may coexist without changing benefits;
- simplest acquisition, pricing and entitlement explanation;
- future supporter/add-on products can be added later.

### Option B — Two Public Membership Levels（双层公开会员）

- a core reading membership plus a higher supporter/patron-style membership;
- both remain Entitlement bundles, not prestige or governance levels;
- the higher plan may add legitimate benefits such as broader premium access, additional submission allowances, early access, member experiences or other non-authority value;
- exact names, pricing and benefit differences remain later calibration.

**Current recommendation（当前推荐）: Option B（方案 B）**, because it preserves the historically valuable `Reader + Patron` product idea while fixing the old architecture problem: billing period, tier, authority and content recognition are no longer conflated. It also gives Project 3 a clear access product plus a higher-support path without requiring a complex multi-tier ladder.

### Option C — Open Multi-plan Catalog（开放多方案目录）

- no fixed public level count;
- plans can be created/configured freely from entitlement bundles;
- maximally flexible but likely too complex and commercially noisy for the current product stage;
- the architecture can still support this later even if A or B is chosen now.

This decision does **not** freeze exact names (`Reader`, `Patron`, `VIP`), prices, billing periods, archive entitlement, Ask the Ancient Text（问古书） quotas or publishing benefits.

---

## 9. Deferred to later Round 12 workshops / 延后到第十二轮后续工作坊

Workshop A intentionally does not yet freeze:

- exact paid-content inventory and what remains free;
- Archive entitlement details and historical-access behavior after cancellation;
- trial / grace / refund timing;
- exact Reader / Patron naming and pricing;
- exact premium long-read model;
- Ask the Ancient Text（问古书） allowances and queue priority;
- member-only community / Reading Room interaction model;
- whether any editorial poll exists and what it means;
- gift / family / organization membership;
- tax / invoice / regional payment implementation;
- payment provider and checkout UX（用户体验）;
- final paywall UI（用户界面）;
- exact analytics / churn / retention metrics.

Next planned subject after resolving R12-A44: **Workshop B — Content Access, Archive, Paywall & Historical Entitlements（工作坊 B——内容访问、归档、付费墙与历史权益）**.
