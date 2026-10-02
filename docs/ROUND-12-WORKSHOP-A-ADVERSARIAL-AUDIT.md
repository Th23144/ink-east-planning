> ⚠️ **HISTORICAL AUDIT OF A SUPERSEDED FRAMING（针对已被取代框架的历史审计）**  
> The earlier `PASS AFTER HARDENING` result only meant the old Workshop A was internally hardened; it did **not** validate the later-rejected Membership/paywall framing. After the user's scope correction, this audit is provenance only and must not be cited as proof that Workshop A is current product truth.  
> See `ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`.

# Round 12 Workshop A — Adversarial Audit（第十二轮工作坊 A 对抗性审计）

> **Status:** PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）  
> **Target:** `docs/INK-EAST-ROUND-12-MEMBERSHIP-READING-ROOM-WORKSHOP-A.md`  
> **Hardening:** `docs/ROUND-12-WORKSHOP-A-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Open product choice:** R12-A44 public Membership packaging（公开会员包装） remains for user confirmation.

---

## 1. Audit purpose / 审计目的

This audit attacks the Membership Object, Plans, Entitlements & Access Semantics（会员对象、方案、权益与访问语义） for privilege leakage, billing/access confusion, stale entitlement caches, payment-provider coupling, silent plan mutation, prestige purchasing, identity merge, historical rewriting and entitlement abuse.

The audit checks **68 explicit failure modes**.

---

## 2. Domain-separation attack / 领域分离攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | `is_vip=true` 同时承担方案、支付、权益、权限与身份 | PASS — A2/A6/A9 |
| 2 | 公开方案名修改导致历史权益无法解释 | PASS — A4 |
| 3 | 月付和年付被误认为两个权威等级 | PASS — A33 |
| 4 | 一个支付订单直接成为永久访问权 | PASS — A10/A26 |
| 5 | 退款直接把用户身份变成“普通低等级用户” | PASS — A1/A29 |
| 6 | 同一权益有两个来源时取消一个把两个都删掉 | PASS — A7/A36 |
| 7 | 赠送会员伪造一笔不存在的付款 | PASS — A34 |
| 8 | 管理员能用内容编辑权限随意赠送付费访问 | PASS — A35 |

---

## 3. Prestige / authority purchase attack / 付费购买权威攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 9 | 高价会员自动获得 Verified Contributor（认证贡献者） | PASS — A18 |
| 10 | Patron（赞助会员）作品自动更容易进入 Work Recognition（作品认可） | PASS — A18/A23 |
| 11 | 会员自动获得 Reviewer Trust（评审信任） | PASS — A18/A20 |
| 12 | 会员投票自动变成治理票 | PASS — A24 |
| 13 | 支付金额进入 Recommendation（推荐）自然排序权重 | PASS — A22 |
| 14 | 付费被当成“行为可信”长期加分 | PASS — A20 |
| 15 | 会员身份在所有页面堆叠成声望徽章 | PASS — A1/A17/A21 |
| 16 | Contributor launch support（贡献者首发支持）可以直接购买 | PASS — A22 |

---

## 4. Access-control attack / 访问控制攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 17 | 付费会员绕过图片版权失效 | PASS — A11 |
| 18 | 会员绕过隐私撤回或法律下架 | PASS — A11 |
| 19 | 进入某一期 Issue（议题）就自动获得所有底层对象永久访问权 | PASS — A12 |
| 20 | Archive（归档）默认打开被法律限制的旧快照 | PASS — A11/A13 |
| 21 | SEO（搜索引擎优化）摘要泄露完整付费正文 | PASS — A15 |
| 22 | 取消会员导致用户自己写的公开文章被删除 | PASS — A16 |
| 23 | 取消会员导致私人札记被直接销毁 | PASS — A16 |
| 24 | 支付成功但权益还没落地时前端直接按付款放行 | PASS — A10 |
| 25 | Entitlement（权益）刚撤销但 CDN / session / cache 继续放行 | GAP FOUND → A45 |
| 26 | 会员权益变更后旧 signed URL（签名网址）长期有效 | GAP FOUND → A45 |

---

## 5. Billing / provider-state attack / 计费与支付提供商状态攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 27 | Stripe（支付服务商）状态枚举直接成为产品领域模型 | PASS — A43 |
| 28 | 同一个 webhook（回调）重复送达导致权益重复累加 | GAP FOUND → A46 |
| 29 | 乱序 webhook 把已取消会员重新激活 | GAP FOUND → A47 |
| 30 | payment succeeded（支付成功）和 entitlement active（权益有效）被当成同一状态 | PASS — A10/A26 |
| 31 | past_due（逾期）立即永久删权限，没有宽限策略空间 | PASS — A28 |
| 32 | chargeback（拒付）和普通到期取消走同一流程 | PASS — A29 |
| 33 | 第三方支付平台宕机使所有历史会员立即失去访问 | PASS — A43; operational strategy deferred |
| 34 | 支付提供商迁移要求改写所有内容权限代码 | PASS — A2/A9/A43 |

---

## 6. Plan evolution attack / 方案演进攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 35 | 今天修改 Patron 权益，昨天购买的用户被静默改约 | GAP FOUND → A48 |
| 36 | 删除旧 Plan（方案）后历史交易无法解释 | PASS — A4/A31 |
| 37 | 老会员无法 grandfather（保留旧权益） | PASS — A32 |
| 38 | 计划迁移直接覆盖旧历史 | PASS — A31 |
| 39 | 新价格自动应用到旧合同但没有生效时间 | GAP FOUND → A48 |
| 40 | 方案 A 改名为 B 后系统误认为新会员 | PASS — A4 |
| 41 | 一个权益被删除后所有旧引用都失去语义 | PASS — A5/A8/A31 |
| 42 | 旧用户被迁移到新权益却无法说明为什么 | PASS — A8/A31/A42 |

---

## 7. Membership lifecycle attack / 会员生命周期攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 43 | `cancel at period end` 与立即停权混为一谈 | PASS — A27 |
| 44 | 重新订阅后系统伪造为从未中断 | PASS — A30 |
| 45 | complimentary extension（赠送延期）被付费取消覆盖 | PASS — A36 |
| 46 | 退款后自动删除过去合法阅读历史 | PASS — A29 + history separation |
| 47 | 会员到期后缓存的长文发布能力永久残留 | GAP FOUND → A49 |
| 48 | 管理员撤销一个权益来源时误删独立来源 | PASS — A7/A36 |
| 49 | 账户被暂停但支付订阅仍持续扣费且无人区分两个生命周期 | PASS — A39; exact commercial handling deferred |
| 50 | 账户删除请求等同于财务交易记录立即删除 | PASS — A39 + Round 6 lifecycle boundaries |

---

## 8. Identity / privacy attack / 身份与隐私攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 51 | 相同信用卡自动把两个 Stable Platform Identity（稳定平台身份）合并 | PASS — A40 |
| 52 | 相同 IP / 设备被推断成同一付费人格 | PASS — A40 |
| 53 | 会员权益绑定邮箱，改邮箱后丢失 | PASS — A3 |
| 54 | 会员权益绑定浏览器 Cookie（浏览器标识），换设备后丢失 | PASS — A3 |
| 55 | 付费历史直接进入 Interest Graph（兴趣图谱）作为文化兴趣证据 | GAP FOUND → A50 |
| 56 | 信用卡/账单数据进入 Recommendation（推荐）特征 | GAP FOUND → A50 |
| 57 | 购买 Patron 后平台公开暴露付款金额作为身份声望 | PASS — A1/A21/A23; display policy later |
| 58 | 会员记录默认允许跨业务模块任意复用 | GAP FOUND → A50 |

---

## 9. Access explanation / support attack / 访问解释与客服攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 59 | 用户被拒绝访问但系统只能回复“不是 VIP” | PASS — A9/A21/A42 |
| 60 | 客服无法区分支付成功但权益未激活 | PASS — A2/A10/A42 |
| 61 | 访问决定有解释，但暴露反作弊内部阈值 | PASS — A21/A42 |
| 62 | 手动补偿后无法知道是谁授予的 | PASS — A8/A35 |
| 63 | 争议处理时无法还原当时 Plan / Entitlement 版本 | PASS — A8/A31/A41/A42 |
| 64 | 旧内容为什么现在不能访问完全无法解释 | PASS — A11/A13/A42 |

---

## 10. Commercial-product attack / 商业产品攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 65 | 旧 Reader / Patron 价格直接被当成永久商业真相 | PASS — inherited source handling + A44 |
| 66 | VIP Library（会员库）被当成独立内容本体而重复所有文章 | PASS — A25 |
| 67 | 高价方案通过“更多问古书次数”自动获得编辑采纳优先权与事实权威 | PASS — A24; future queue policy still needs review |
| 68 | 公开会员方案数量在没有用户确认时被架构擅自固定 | PASS — A44 remains open |

---

## 11. Findings / 审计发现

The audit found **6 hardening areas**, not a product-direction correction:

1. entitlement/access cache invalidation after grant/revoke/change;
2. payment-event idempotency / duplicate delivery;
3. stale/out-of-order provider events must not resurrect old state;
4. plan/price/benefit changes require effective-dated version semantics for existing subscribers;
5. capability benefits must expire/invalidate when the underlying entitlement expires;
6. billing/member commercial data must remain purpose-limited and must not silently become personalization/recommendation/interest signals.

These are recorded as R12-A45…R12-A50 in the Hardening Addendum（加固补充）.

---

## 12. Audit verdict / 审计结论

**PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）.**

One genuine product choice remains intentionally unresolved:

- **R12-A44 — public Membership packaging（公开会员包装）: Option A / B / C.**

The audit does not decide that choice on the user's behalf.
