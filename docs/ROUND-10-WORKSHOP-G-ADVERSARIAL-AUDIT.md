# Round 10 Workshop G — Adversarial Audit（第十轮工作坊 G 对抗性审计）

> **Status:** PASS AFTER HARDENING / ONE PRODUCT DECISION STILL PENDING（加固后通过 / 仍有 1 个产品决定待确认）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-G.md`  
> **Hardening:** `docs/ROUND-10-WORKSHOP-G-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

Workshop G unifies Cold Start（冷启动）, Anonymous Session（匿名会话）, New Item（新内容）, Reset（重置）, Personalization Opt-out（退出个性化）, Sparse Inventory（候选稀疏） and model/policy lifecycle behavior.

The audit attacks the design for identity leakage, shared-device contamination, reset races, stale-cache resurrection, fake opt-out, cold-start feedback loops, fallback boundary bypasses, rollback incompatibility and sensitive-interest profiling.

The Anonymous → Account merge（匿名 → 账户合并） choice remains intentionally open. The audit tests whether the recommended Option B（方案 B） can be implemented without silently becoming Option C（自动完整并入）.

---

## 2. Cold-start taxonomy checks / 冷启动分类检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | New User / New Item / Reset 全部压成一个 `cold_start` | PASS — G1 |
| 2 | 冷启动曝光被当成用户长期兴趣事实 | PASS — G2/G4 |
| 3 | 前几次点击迅速形成单一兴趣茧房 | PASS — G3/G8 |
| 4 | New User（新用户）没有历史就首页不可用 | PASS — G5 |
| 5 | 跳过兴趣问卷导致无法继续产品使用 | PASS — G7 |
| 6 | Onboarding（新手引导）选择被写成永久身份标签 | PASS — G6 |
| 7 | 冷启动供应来源在后续解释中被伪装成“猜你喜欢” | GAP FOUND → G49 |

---

## 3. Anonymous-session & identity checks / 匿名会话与身份检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 8 | 匿名行为被直接视为稳定账户行为 | PASS — G9/G10 |
| 9 | Cookie / Device ID（Cookie / 设备标识）被当成真实身份事实 | PASS — G11 |
| 10 | 登录后所有匿名历史自动完整并入，无产品决策 | PASS — G12 keeps explicit choice open |
| 11 | 推荐的 Option B 实际实现时变成“默认全量合并，只是文案更温和” | GAP FOUND → G45/G50 |
| 12 | 公共 / 家庭 / 工作室共享设备的前一位访客兴趣污染后一位登录用户 | GAP FOUND → G50 |
| 13 | 退出登录后仍继续使用上一账户的长期个性化状态 | GAP FOUND → G50 |
| 14 | 多设备历史仅凭弱技术关联自动合并成一个人 | GAP FOUND → G51 |
| 15 | 匿名状态永久保留，逐渐形成事实上的隐形长期画像 | GAP FOUND → G45 |

---

## 4. New Item & exposure checks / 新内容与曝光检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 16 | 新内容因为无历史互动永久沉底 | PASS — G13/G14 |
| 17 | 给新内容机会被误解成保证固定曝光 | PASS — G15 |
| 18 | 平台先给一部分新内容曝光，再把互动差异当成完全自然质量差异 | PASS — G16 |
| 19 | 高频发布者靠数量持续吃掉全部 New Item opportunity（新内容机会） | PASS through Workshop E safeguards + G14/G15 |
| 20 | 新内容来源 / 探索来源在后续训练中丢失 | PASS through G16 + prior exposure provenance |

---

## 5. Reset lifecycle checks / 重置生命周期检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 21 | Recommendation Reset（推荐重置）被误实现为删除账户 / Follow / 购买记录 | PASS — G17 |
| 22 | Reset 只清 UI，Embedding / Cache / Feature（嵌入 / 缓存 / 特征）继续旧状态 | PASS — G19 |
| 23 | Reset 后立刻从旧缓存重建出同一画像 | PASS — G20 |
| 24 | Reset 与异步特征更新并发，旧写入在重置后“复活” | GAP FOUND → G46 |
| 25 | 旧模型回滚后重新启用用户已经 Reset / Not Interested（重置 / 不感兴趣）的状态 | GAP FOUND → G48 |
| 26 | Reset scope（重置范围）无法区分全局 / 主题 / 页面 / 创作者 | PASS — G18 |
| 27 | Reset 被描述成隐私删除，造成用户错误预期 | PASS — G17/G23 |

---

## 6. Opt-out & mode checks / 退出个性化与模式检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 28 | 用户关闭行为个性化后产品变空白，形成暗黑模式式逼迫 | PASS — G21/G22 |
| 29 | Opt-out（退出）后 Follow / Search 等明确意图也全部失效 | PASS — G24 |
| 30 | 退出个性化与隐私删除被合成一个模糊开关 | PASS — G23 |
| 31 | 用户退出个性化后，其行为仍默默用于个人推荐训练 / 更新派生画像 | GAP FOUND → G47 |
| 32 | 用户退出后仍展示“基于你的阅读历史”解释 | GAP FOUND → G47 |
| 33 | Future named modes（未来命名模式）被 Round 10 强制成 V1 功能 | PASS — G25 |

---

## 7. Sparse inventory & degraded-mode checks / 稀疏库存与降级检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 34 | 候选不足时绕过 Block / Rights / Privacy（屏蔽 / 权利 / 隐私） | PASS — G26 + D45 |
| 35 | Search（搜索）没结果就塞完全不相关热门内容 | PASS — G27 |
| 36 | Following（关注）库存少就混入无关 For You（为你推荐）且不标识 | PASS — G27 + Workshop C |
| 37 | 降级状态被统计成正常模型表现 | PASS — G28/G39 |
| 38 | 服务恢复后旧 fallback cache（回退缓存）持续污染正常推荐 | GAP FOUND → G52 |

---

## 8. Model / policy lifecycle checks / 模型与策略生命周期检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 39 | 新模型把旧 Save / Follow（收藏 / 关注）的历史语义改写 | PASS — G30 |
| 40 | 模型升级直接切全量，无迁移 / 灰度 / 回滚 | PASS — G29/G31/G32 |
| 41 | 回滚只回代码，不处理新版本写入的派生状态 | PASS — G33 |
| 42 | 模型版本改变但曝光记录无法区分 | PASS — G39/G43 |
| 43 | 回滚后重新激活旧版本已被用户纠正掉的偏好 | GAP FOUND → G48 |
| 44 | 重大模型变化的 recompute（重算）直接覆盖历史而无版本边界 | PASS through G29/G31 + Rule Evolvability |

---

## 9. Retention, staleness & privacy checks / 保留、过时与隐私检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 45 | 为了推荐“以后可能有用”永久保留所有原始行为 | PASS — G34 |
| 46 | 派生特征永久存在且不知道来自哪个旧模型 / 旧数据 | PASS — G35/G43 |
| 47 | 行为不再影响推荐就被错误解释为必须删除历史事实 | PASS — G36 |
| 48 | 浏览宗教 / 政治 / 健康邻近内容后系统建立永久敏感身份标签 | PASS — G37 |
| 49 | 推荐兴趣状态直接流入定价 / 风控 / 治理 / 招聘评分 | PASS — G38 |
| 50 | 匿名状态 retention（保留）无限延长，绕过“session-scoped”承诺 | GAP FOUND → G45 |

---

## 10. Operational-observability checks / 运行可观察性检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 51 | 无法判断一个曝光来自新用户、重置后、退出个性化还是模型故障 | PASS — G39 |
| 52 | 推荐成熟度变成新的 Account Trust（账户信任）等级 | PASS — G40 |
| 53 | 早期简单规则实现把所有生命周期状态永久焊死 | PASS — G41/G44 |
| 54 | 具体 session timeout / new-item window（会话超时 / 新内容窗口）被提前写死 | PASS — G42 |
| 55 | 旧 fallback / anonymous / experiment state 在模式切换后未失效，产生跨模式污染 | GAP FOUND → G52 |

---

## 11. Findings / 审计发现

No CORRECTION（真正修正） to Workshop G's core lifecycle model was required.

The audit identified **eight hardening areas**:

1. **R10-G45 — HARD PRIVACY / LIFECYCLE SAFEGUARD（隐私 / 生命周期硬保护）**  
   Anonymous Session（匿名会话）状态必须有受治理的保留、到期与失效边界，不能通过长期 Cookie 等手段偷偷演化成永久画像。

2. **R10-G46 — NEW SAFEGUARD（新增保护）**  
   Reset（重置）与异步派生状态更新之间必须有 epoch/version/invalidation（代次 / 版本 / 失效）语义，防止旧写入在重置后复活。

3. **R10-G47 — HARD PRIVACY / PRODUCT SAFEGUARD（隐私 / 产品硬保护）**  
   Personalization Opt-out（退出个性化）必须影响后续个人派生状态更新与用户解释，不得只是关闭一个展示开关。

4. **R10-G48 — HARD SAFEGUARD（硬保护）**  
   Model Rollback（模型回滚）不得复活用户在新版本期间已经做出的明确 Reset / Not Interested / Block / Unfollow（重置 / 不感兴趣 / 屏蔽 / 取消关注）控制。

5. **R10-G49 — HARDENING（架构加固）**  
   Cold-start supply（冷启动供给）的 Editorial / Trending / Broad Exploration（编辑 / 趋势 / 广泛探索）来源必须保留足够来源语义，以便真实解释与训练归因。

6. **R10-G50 — HARD PRIVACY SAFEGUARD（隐私硬保护）**  
   Login / Logout / Shared-device（登录 / 退出 / 共享设备）边界必须清理或隔离会话个性化，防止跨账户污染。

7. **R10-G51 — HARD PRIVACY / IDENTITY SAFEGUARD（隐私 / 身份硬保护）**  
   Cross-device / Cross-session reconciliation（跨设备 / 跨会话合并）需要明确政策与足够身份依据，不能依靠弱关联静默合并。

8. **R10-G52 — HARDENING（架构加固）**  
   Mode transition（运行模式切换）必须支持相关 cache / candidate / explanation state（缓存 / 候选 / 解释状态）失效，防止 fallback、匿名、实验或旧模型状态继续污染正常模式。

---

## 12. Audit conclusion / 审计结论

**Result: PASS AFTER HARDENING / ONE PRODUCT DECISION STILL PENDING（加固后通过 / 仍有 1 个产品决定待确认）.**

Workshop G's lifecycle architecture is coherent after hardening. No unresolved architecture blocker remains, but **R10-G12 Anonymous → Account merge（匿名 → 账户合并）** is a genuine product/privacy choice and must not be silently locked by the architecture work.

Current recommendation remains **Option B（方案 B） — Scoped / transparent handoff（有限范围、透明衔接）**.

After that product decision is confirmed, Round 10 can proceed to its Cross-Workshop Consistency & Completeness Audit（跨工作坊一致性与完整性审计）.
