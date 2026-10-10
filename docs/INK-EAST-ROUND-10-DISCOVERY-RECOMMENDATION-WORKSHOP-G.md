# Round 10 — Discovery & Recommendation（发现与推荐） — Workshop G（工作坊 G）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Cold Start, Personalization Modes & Operational Lifecycle（冷启动、个性化模式与运行生命周期）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Open product decision:** Anonymous / pre-login session behavior（匿名 / 登录前会话行为）是否以及如何并入登录后的长期个性化状态，仍待用户确认。

---

## 0. Decision at a glance / 本步结论一览

Workshop G 把此前散落在 Round 9 与 Round 10 A–F 中的“没有足够历史怎么办、用户关闭个性化怎么办、重置之后怎么办、模型升级怎么办、服务出故障怎么办”统一成一套生命周期。

推荐系统必须能在以下状态下仍然正常工作：

| Lifecycle state（生命周期状态） | 核心问题 | 当前原则 |
|---|---|---|
| New User（新用户） | 没有长期行为历史 | 用显式偏好、编辑策展、广度探索、公共价值与上下文启动，不伪造长期兴趣 |
| Anonymous Session（匿名会话） | 不知道稳定账户身份 | 可做会话级适配，但不能假装知道长期用户是谁 |
| New Item（新内容） | 没有历史曝光 / 互动 | 提供真实探索机会，不因“无数据”永久沉底 |
| Reset（重置后） | 用户要求重新个性化 | 清理 / 失效相应派生状态，同时保留明确关系与合法历史边界 |
| Personalization Opt-out（退出个性化） | 用户不要行为个性化 | 仍提供可用的非行为个性化体验 |
| Sparse Inventory（候选稀疏） | 当前页面缺少候选 | 优雅降级，不绕过资格或用户控制 |
| Model / Policy Change（模型 / 策略变化） | 旧状态如何迁移 | 版本化、影子评估、灰度、回滚、必要时重算 |
| Service Degradation（服务降级） | 某组件不可用 | 保持页面任务语义和硬边界，不用任意热门内容填充 |

> **Cold start is not one problem. / 冷启动不是一个问题。**  
> New User（新用户）、Anonymous Session（匿名会话）、New Item（新内容）、New Topic / Place（新主题 / 新地点）、Post-reset State（重置后状态）和 Sparse Inventory（候选稀疏）需要分别处理。

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop G inherits:

- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- sealed Round 9 Reader Behavior & Interest Graph（读者行为与兴趣图谱）;
- Round 10 Workshops A–F and all local Hardening Addenda（加固补充）;
- Hybrid Homepage（混合式首页） provisional direction;
- Following（关注） provisional direction: Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

No exact onboarding questionnaire, retention period, anonymous identifier technology, model warm-start method, feature-store architecture or deployment platform is authorized here.

---

# 2. Cold-start taxonomy / 冷启动分类

## R10-G1 — Cold start is typed, not universal / 冷启动必须分类，而不是一个统一状态

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The system must distinguish at least New User（新用户）, Anonymous Session（匿名会话）, New Item（新内容）, Post-reset State（重置后状态） and Sparse Inventory（候选稀疏） where their product meaning differs.

One generic `cold_start=true` flag is insufficient as a product model.

---

## R10-G2 — Cold-start strategies do not create false durable interest / 冷启动策略不能制造虚假的长期兴趣

**HARD INVARIANT（硬边界）.**

Editorial curation, popular/trending supply, broad exploration, locale/language context or onboarding choices may help initial discovery, but exposure from those routes does not by itself prove Durable Interest（长期兴趣）.

---

## R10-G3 — Cold start preserves breadth / 冷启动阶段必须保留广度

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Early personalization should avoid collapsing around the first few clicks. The architecture must allow breadth sampling across eligible Topics / Places / content types / source families before confidence is high.

---

## R10-G4 — Cold-start behavior is confidence-aware / 冷启动阶段的行为解释必须考虑低置信状态

**HARDENING（架构加固）.**

Initial clicks, skips and dwell from a user who has not yet formed a stable recommendation history should be interpreted cautiously because the system itself strongly controls the first exposure set.

---

# 3. New User / 新用户

## R10-G5 — New users receive a usable experience before behavior history exists / 新用户在没有行为历史时也必须获得可用体验

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Home / For You（首页 / 为你推荐） must not depend on a pre-existing Interest Graph（兴趣图谱） to function.

Initial supply may combine explicit choices, language/context, editorial selections, high-value broadly relevant material, freshness where appropriate, trending where appropriate, and deliberate exploration.

---

## R10-G6 — Optional onboarding preferences are declared preferences, not permanent identity / 新手引导中的兴趣选择是明确偏好，不是永久身份

**HARD INVARIANT（硬边界）.**

If onboarding later asks users to select Topics / Places / content types, those selections are Explicit Preferences（明确偏好） whose influence can be edited, overridden or decay according to product policy.

They must not become immutable User Profile Labels（用户画像标签）.

---

## R10-G7 — Skipping onboarding must remain valid / 跳过兴趣选择必须仍然可用

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A user who declines or skips onboarding preferences must still receive a functional discovery experience.

Personalization cannot require the user to disclose interests as a condition of basic use unless a future product flow explicitly and legitimately requires it.

---

## R10-G8 — New-user exploration is not infinite uncertainty / 新用户探索不是永久随机试探

**ADAPTIVE RULE（弹性规则）.**

As explicit and behavioral evidence accumulates, the system may gradually shift from broad exploration toward better-supported interests while still retaining serendipity.

Exact transition thresholds remain DEFERRED CALIBRATION（延后校准）.

---

# 4. Anonymous Session / 匿名会话

## R10-G9 — Anonymous personalization is session/context scoped by default / 匿名个性化默认以会话 / 情境为范围

**HARD PRODUCT DIRECTION（产品级硬方向）.**

An anonymous visitor may receive session-level adaptation based on current navigation, query, language, device/context and recent in-session behavior where legitimate.

The system must not pretend this constitutes a durable known-person profile.

---

## R10-G10 — Anonymous session state is not automatically Account state / 匿名会话状态不能自动等同账户状态

**HARD INVARIANT（硬边界）.**

Anonymous Session Intent（匿名会话意图） and account-level Interest Graph（兴趣图谱） are separate states until an explicit product policy reconciles them.

---

## R10-G11 — Anonymous identifiers do not become hidden identity truth / 匿名标识不能偷偷变成稳定身份事实

**HARD PRIVACY BOUNDARY（隐私硬边界）.**

Cookies, device identifiers, session IDs or future technical identifiers may support product continuity where lawful, but they do not by themselves prove that multiple sessions/devices belong to the same stable person.

---

## R10-G12 — Anonymous-to-account merge is a genuine product/privacy decision / 匿名会话并入账户属于真实产品与隐私选择

**PENDING USER DECISION（等待用户决定）.**

Three product directions are reasonable:

### Option A — No merge by default（默认不并入）
Anonymous behavior is discarded or remains session-scoped when the user logs in. Strongest separation, weakest continuity.

### Option B — Scoped / transparent handoff（有限范围、透明衔接）
Recent session context may carry into the newly authenticated experience under a clearly defined scope, while durable account-interest state is not silently bulk-merged. The user can later correct/reset the resulting personalization. Exact consent/notice UX depends on legal/privacy implementation.

### Option C — Automatic full history merge（自动完整并入）
All technically linkable anonymous behavior becomes account history after login. Highest continuity, highest privacy/identity-risk and easiest path to accidental over-profile construction.

**Current recommendation: Option B（方案 B） — Scoped / transparent handoff（有限范围、透明衔接）.**

---

# 5. New Item & low-exposure inventory / 新内容与低曝光库存

## R10-G13 — New Item cold start is separate from New User cold start / 新内容冷启动与新用户冷启动分离

**HARD INVARIANT（硬边界）.**

A mature user can encounter a brand-new item with no interaction history; a brand-new user can encounter well-understood content. These are different uncertainty sources and must remain distinguishable.

---

## R10-G14 — New content does not require historical popularity to become eligible / 新内容不以历史热门作为进入推荐的前提

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Eligible new content may enter candidate supply through Topic / Place / Knowledge relations, explicit follows, editorial routes, recognized provenance/quality evidence, exploration, freshness or other legitimate routes before behavioral popularity exists.

---

## R10-G15 — New-item opportunity is not guaranteed distribution / 新内容机会不等于保证流量

**HARD PRODUCT BOUNDARY（产品边界）.**

The system provides a path to evaluation/exposure, not a fixed impression quota or equal distribution promise.

---

## R10-G16 — Exploration feedback on new items remains exposure-aware / 新内容的探索反馈必须考虑曝光来源

**HARDENING（架构加固）.**

Because the platform chooses which new items receive early exposure, subsequent engagement must not be interpreted as unbiased evidence detached from that allocation decision.

---

# 6. Reset & personalization correction lifecycle / 重置与个性化纠错生命周期

## R10-G17 — Recommendation Reset creates a new personalization state, not identity erasure / 推荐重置创建新的个性化状态，而不是抹除身份

**HARD INVARIANT（硬边界）.**

Recommendation Reset（推荐重置） must be able to suppress/invalidate applicable inferred personalization state without pretending that the account, authorship, purchases, explicit Follow（关注） relationships or legally retained raw history never existed.

---

## R10-G18 — Reset scope must be representable / 重置范围必须能够表达

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The architecture must permit future reset scopes such as whole recommendation state, specific Interest Cluster（兴趣簇）, surface, Topic / Place, creator or content-type personalization where product UX later supports them.

No exact V1 reset menu is locked here.

---

## R10-G19 — Reset must propagate to derived state / 重置必须传播到派生状态

**HARD INVARIANT（硬边界）.**

Where applicable, reset/correction must invalidate or recompute derived Interest Edges（兴趣关系）, clusters, ranking features, embeddings, cached candidate sets and explanation state rather than only hiding visible cards.

---

## R10-G20 — Reset aftermath should behave like a typed cold-start state / 重置后的状态应作为一种独立冷启动处理

**HARDENING（架构加固）.**

A post-reset account is not identical to a completely new account because explicit follows, language, subscriptions, access state or other retained explicit context may still exist.

The system must not immediately rebuild the same inferred profile solely from stale derived caches.

---

# 7. Personalization modes & opt-out / 个性化模式与退出

## R10-G21 — Behavioral personalization is not required for basic discovery / 行为个性化不是基本发现功能的必要条件

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A user who disables behavioral personalization should still be able to browse Home, Following, Explore, Search and Related surfaces through appropriate non-behavioral supply such as explicit follows, query/object context, editorial curation, public trends, broadly useful content and contextual eligibility.

---

## R10-G22 — Opt-out is not empty-state punishment / 退出个性化不能把产品变成空白惩罚

**HARD PRODUCT BOUNDARY（产品边界）.**

The product must not intentionally degrade into a useless experience merely to pressure the user into enabling personalization.

---

## R10-G23 — Personalization mode and privacy deletion are distinct / 个性化模式与隐私删除是不同动作

**HARD INVARIANT（硬边界）.**

Turning personalization off, Recommendation Reset（推荐重置）, clearing recommendation history and exercising a privacy deletion right are different operations with different scopes and consequences.

UX and backend policy must not collapse them into one ambiguous toggle.

---

## R10-G24 — Explicit relationships may remain useful when behavioral personalization is off / 关闭行为个性化后，明确关系仍可继续发挥作用

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Follow（关注）, Save（收藏） or future explicit topic selections are user-declared relationships/preferences and may legitimately continue to organize relevant surfaces according to their own scope unless the user also removes them.

---

## R10-G25 — Named personalization modes are future-compatible but not required for V1 / 命名式个性化模式可兼容未来，但第一版不强制

**ADAPTIVE LONG-TERM（长期弹性方向）.**

Future products may support modes such as Research / Travel / Leisure（研究 / 旅行 / 休闲） or other user-selectable contexts, but Round 10 does not require them in early V1.

The current architecture should avoid making such future scoped contexts impossible.

---

# 8. Sparse inventory & graceful degradation / 库存稀疏与优雅降级

## R10-G26 — Sparse inventory is a product state, not permission to violate boundaries / 候选稀疏是一种产品状态，不是突破边界的理由

**HARD INVARIANT（硬边界）.**

If a surface lacks sufficient eligible candidates, the system may broaden legitimate retrieval or expose a graceful empty/limited state, but it must not bypass privacy, rights, moderation, Block（屏蔽） or direct-intent constraints.

---

## R10-G27 — Fallback respects surface semantics / 回退仍然必须忠实于页面任务

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Search（搜索） fallback remains query-grounded; Following（关注） fallback remains explicit-relationship-led; Related（相关推荐） remains object/task anchored; Explore（探索） may broaden more aggressively than those surfaces.

---

## R10-G28 — Graceful degradation must be observable / 降级运行必须可观察

**HARDENING（架构加固）.**

The system should distinguish normal personalized operation from fallback/degraded operation so product evaluation does not mistake fallback outcomes for normal ranking quality.

---

# 9. Model / Policy lifecycle / 模型与策略生命周期

## R10-G29 — Material recommendation changes are versioned / 重大推荐变化必须版本化

**HARD inherited from Rule Evolvability（继承规则可演进架构）.**

Material retrieval, ranking, exploration, calibration, decay, reset or control changes should retain appropriate Model / Policy Version（模型 / 策略版本） attribution for consequential decisions and evaluation.

---

## R10-G30 — New models do not silently reinterpret old user actions / 新模型不能静默改写历史用户行为的语义

**HARD INVARIANT（硬边界）.**

A Save（收藏） remains a Save, a Follow（关注） remains a Follow, and an explicit Not Interested（不感兴趣） remains that scoped control even if future models use those events differently.

Model evolution may change interpretation weight, not historical event meaning.

---

## R10-G31 — Major model changes need migration/recompute strategy / 重大模型变化需要迁移与重算策略

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Where derived state changes materially, the change should define whether old state is reused, recalibrated, recomputed, shadow-evaluated, gradually migrated or invalidated.

---

## R10-G32 — Shadow / staged rollout is available for consequential change / 重大变化应支持影子评估与灰度发布

**ARCHITECTURAL REQUIREMENT（架构要求）.**

High-impact recommendation changes should be capable of Shadow Evaluation（影子评估）, controlled cohort rollout, monitoring and rollback where proportionate.

---

## R10-G33 — Rollback includes derived-state compatibility / 回滚需要考虑派生状态兼容性

**HARDENING（架构加固）.**

Rollback planning must account not only for code/model artifacts but also newly written derived features, interest state, caches, indexes, experiment state and explanation semantics where they differ across versions.

---

# 10. Data retention, staleness & lifecycle / 数据保留、过时与生命周期

## R10-G34 — Raw behavior retention and personalization usefulness are separate questions / 原始行为保留与个性化用途是两个问题

**HARD PRIVACY / ARCHITECTURAL BOUNDARY（隐私 / 架构硬边界）.**

The system need not retain every raw event forever merely because recommendation models might find it useful. Retention is governed by privacy, audit, legal and product-purpose policy.

---

## R10-G35 — Derived state must know staleness / 派生个性化状态必须知道自己是否过时

**HARD INVARIANT（硬边界）.**

Interest features, embeddings, candidate caches, trend features and other derived recommendation state should be invalidatable/recomputable and not silently survive beyond the assumptions/data that produced them.

---

## R10-G36 — Expired evidence does not require deleting historical facts / 证据退出当前模型影响不等于删除历史事实

**HARDENING（架构加固）.**

A behavior event may stop influencing current recommendations because of age, reset or changed policy while remaining lawfully retained for another permitted purpose. Current influence and historical existence are separate dimensions.

---

# 11. Sensitive-interest and purpose boundaries / 敏感兴趣与用途边界

## R10-G37 — Sensitive identity/belief must not be durably inferred from passive recommendation behavior by default / 默认不得根据被动推荐行为建立敏感身份或信念画像

**HARD PRIVACY SAFEGUARD（隐私硬保护）.**

Consumption of cultural, religious, political, health-adjacent or other potentially sensitive material must not silently become a durable sensitive identity/belief category merely because doing so improves recommendation prediction.

Necessary contextual/session relevance may be handled under separately justified policy without creating a permanent identity claim.

---

## R10-G38 — Recommendation state is not a universal commercial profile / 推荐状态不是通用商业画像

**HARD INVARIANT（硬边界）.**

Interest/behavior state built for discovery/recommendation does not automatically become advertising entitlement, pricing discrimination, fraud scoring, governance authority, employment/eligibility scoring or unrelated commercial profiling.

---

# 12. Operational observability & lifecycle auditability / 运行可观察性与生命周期审计

## R10-G39 — Lifecycle state should be observable enough to debug recommendation behavior / 生命周期状态必须具备足够可观察性

**HARDENING（架构加固）.**

Where proportionate, operators should be able to distinguish whether an exposure was produced under new-user cold start, anonymous session, normal personalized state, post-reset state, opt-out mode, fallback/degraded mode or experiment/model-version context.

This does not require exposing internal flags to end users.

---

## R10-G40 — Product lifecycle state cannot become a hidden prestige/trust label / 产品生命周期状态不能变成隐藏的声望或信任等级

**HARD INVARIANT（硬边界）.**

“New user”, “mature personalization history”, “high-confidence interest graph” or similar recommendation maturity states must not silently become Account Trust（账户信任）, identity credibility, governance power or public status.

---

# 13. Rule-evolvability mapping / 规则可演进映射

## R10-G41 — Stable core vs evolvable policy is explicit / 稳定核心与可演进策略必须分离

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Stable core includes distinctions such as New User vs New Item, explicit vs inferred state, direct intent vs recommendation, and private/eligible data boundaries.

Evolvable policy includes onboarding mix, cold-start breadth, anonymous-session duration, model thresholds, reset scope UX, fallback ordering, rollout cohorts and derived-state recomputation policy.

---

## R10-G42 — Exact lifecycle timings remain deferred / 生命周期具体时间参数延后决定

**DEFERRED CALIBRATION（延后校准）.**

Round 10 does not lock session timeout, interest decay windows, “new item” duration, anonymous history retention, minimum exposure count, reset propagation SLA or model rollout percentage.

---

## R10-G43 — Operational modes preserve historical interpretability / 运行模式变化必须保留必要的历史可解释性

**HARDENING（架构加固）.**

When a material decision is later analyzed, the platform should be able to know enough about the relevant recommendation mode / model / policy context to avoid attributing a degraded fallback exposure to a normal model or a cold-start exposure to a mature profile.

---

## R10-G44 — Early V1 may implement simpler mechanics without violating semantics / 第一版可以简化实现，但不能简化掉语义边界

**HARD PRODUCT / IMPLEMENTATION BOUNDARY（产品 / 实现边界）.**

Early V1 may use deterministic rules, editorial supply, explicit preferences and lightweight session state instead of complex model-serving infrastructure, provided New User / Anonymous / New Item / Reset / Opt-out / Fallback semantics remain distinguishable and upgradeable.

---

# 14. Decision summary / 决策摘要

| Area（领域） | Current direction（当前方向） | Status（状态） |
|---|---|---|
| Cold-start taxonomy（冷启动分类） | typed states, not one flag | HARD |
| New User（新用户） | useful without history; breadth-first, no fake durable interest | HARD / ADAPTIVE |
| Anonymous Session（匿名会话） | session-scoped by default | HARD |
| Anonymous → Account merge（匿名 → 账户合并） | **Option B recommended; user decision pending** | OPEN PRODUCT CHOICE |
| New Item（新内容） | separate cold-start path with real exposure opportunity | HARD |
| Reset（重置） | derived-state lifecycle change, not identity/history erasure | HARD |
| Personalization opt-out（退出个性化） | product remains usable | HARD |
| Named user modes（命名式用户模式） | future-compatible, not required V1 | ADAPTIVE |
| Sparse inventory（库存稀疏） | graceful degradation without boundary bypass | HARD |
| Model / policy change（模型 / 策略变化） | version / migration / staged rollout / rollback | HARD |
| Sensitive-interest inference（敏感兴趣推断） | no durable passive sensitive identity profiling by default | HARD PRIVACY |
| Exact time windows / thresholds（具体时间窗口 / 阈值） | deferred | DEFERRED |

---

## 15. Next step / 下一步

After the open Anonymous → Account merge（匿名 → 账户合并） decision is resolved and the dedicated Workshop G Adversarial Audit（工作坊 G 对抗性审计） is complete, Round 10 should proceed to a **Cross-Workshop Consistency & Completeness Audit（跨工作坊一致性与完整性审计）** across Workshops A–G before Current Truth consolidation.
