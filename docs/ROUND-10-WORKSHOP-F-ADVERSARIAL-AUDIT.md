# Round 10 Workshop F — Adversarial Audit（第十轮工作坊 F 对抗性审计）

> **Status:** PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-F.md`  
> **Hardening:** `docs/ROUND-10-WORKSHOP-F-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

Workshop F defines Recommendation Explanation（推荐解释）, User Control（用户控制） and Measurement & Evaluation（测量与评估） boundaries. These mechanisms can create false confidence even when the ranking system itself is technically sound, so this audit attacks misleading explanations, fake controls, metric gaming, exposure bias, reset ambiguity, experiment misuse, privacy leakage and Goodhart-style optimization failure.

---

## 2. Explanation checks / 推荐解释检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | “Why this?（为什么推荐这个）”只是事后生成的友好文案，与真实召回/排序原因无关 | PASS — F1/F5 |
| 2 | 用户解释暴露内部敏感数据、原始权重或隐私信息 | PASS — F2 |
| 3 | 推断兴趣被写成“你就是喜欢 X”，把概率推断变成身份事实 | PASS — F3 |
| 4 | Trending / Related（趋势 / 相关）解释让用户误以为内容更权威 | PASS — F4 |
| 5 | Editorial（编辑策展）被伪装成“猜你喜欢” | PASS — F6 |
| 6 | 未来 Sponsored（赞助）内容伪装成 Organic（自然推荐） | PASS — F6 |
| 7 | Search / structural Next（搜索 / 结构性下一项）被统一包装成个性化推荐 | PASS — F7 |
| 8 | 推荐流水线更新后，用户看到的解释仍来自旧原因缓存 | GAP FOUND → F41 |
| 9 | 多原因候选只展示一个次要理由，主导推荐原因完全不同且具有误导性 | GAP FOUND → F41 |

---

## 3. User-control checks / 用户控制检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 10 | 用户只能被动训练算法，没有主动纠错入口 | PASS — F8 |
| 11 | 隐藏一个 Item（条目）导致整个 Topic（主题）长期消失 | PASS — F9 |
| 12 | Not Interested（不感兴趣）和 Skip（跳过）被当成相同强度 | PASS — F10 |
| 13 | Unfollow（取消关注）后 Search（搜索）也找不到对象 | PASS — F11 |
| 14 | UI（用户界面）显示“不感兴趣”已成功，但后台候选生成继续完全不变 | PASS in principle — F12/F13 |
| 15 | Recommendation Reset（推荐重置）被用户误认为“删除我的全部数据” | PASS — F14/F31 |
| 16 | Reset（重置）误删 Follow（关注）、购买、审核等不相关状态 | PASS — F14 |
| 17 | 显式偏好无法覆盖系统推断 | PASS — F16 |
| 18 | 多个控制冲突时没有明确优先级，导致 Block（屏蔽）可能被 Show More（多看）覆盖 | GAP FOUND → F42 |
| 19 | 控制传播失败后系统仍显示“已生效”，没有可诊断性 | PASS partly F13, HARDEN → F43 |
| 20 | 控制撤销后旧缓存继续长期保持抑制 | GAP FOUND → F43 |
| 21 | Module control（模块控制）被误扩展成 Topic dislike（主题不喜欢） | PASS through Round 10 B37 + F9 |

---

## 4. Measurement checks / 测量检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 22 | 全站只有一个 recommendation KPI（推荐 KPI） | PASS — F17 |
| 23 | CTR / Dwell（点击率 / 停留时长）成为事实上的唯一成功目标 | PASS — F18/F19 |
| 24 | 长文章因为停留长被误判更满意，短内容因为停留短被判低质量 | PASS — F20 |
| 25 | Primary metric（主指标）上涨就忽视隐私、负反馈、来源集中等伤害 | PASS — F21 |
| 26 | 多样性 / 探索崩塌但点击率上涨，系统仍宣布成功 | PASS — F22 |
| 27 | 一个候选源从未获得曝光，却因为没有点击被评价为“表现差” | PASS — F23 |
| 28 | 热门只看互动总量，不看曝光机会 | PASS — F24 |
| 29 | 评估只看已曝光内容，忽视 Recommendation Policy（推荐策略）本身决定谁有机会被观察 | GAP FOUND → F44 |
| 30 | 指标定义被不同团队悄悄改名/改口径，历史趋势不可比 | PASS — F37 |
| 31 | “Satisfaction（满意度）”只是一个没有定义的营销词 | PASS — F37 |

---

## 5. Offline / online evaluation checks / 离线与在线评估检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 32 | Offline ranking metric（离线排序指标）上涨就直接全量上线 | PASS — F25 |
| 33 | A/B Test（A/B 测试）结果被当作绝对真理，不看新奇效应 / 季节性 / 延迟伤害 | PASS — F26/F30 |
| 34 | 实验可以暂时绕过隐私 / 权利 / Block（屏蔽）规则 | PASS — F27 |
| 35 | 实验曝光没有 treatment context（实验处理情境），训练时当成自然行为 | PASS — F28 |
| 36 | 新模型只和明显更差的弱基线比较 | PASS — F29 |
| 37 | 短实验无法发现数周后的疲劳 / 信息茧房恶化 | PASS — F30 |
| 38 | 只报告平均提升，掩盖特定语言 / 新用户 / 长尾内容群体明显退化 | GAP FOUND → F45 |
| 39 | 统计显著但产品意义极小，被包装成重大改进 | GAP FOUND → F46 |
| 40 | 小样本巨大波动被误当趋势 | GAP FOUND → F46 |

---

## 6. Privacy & governance checks / 隐私与治理检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 41 | Recommendation telemetry（推荐遥测）被自动拿去做广告 / 招聘 / 治理资格 | PASS — F35 |
| 42 | 用户行为统计变成新的 Universal Trust Score（通用信任分） | PASS — F39 |
| 43 | Recommendation Reset（推荐重置）与 Privacy Deletion（隐私删除）流程混为一谈 | PASS — F14 |
| 44 | 控制 / 指标 / 解释规则变化没有版本记录 | PASS — F36/F37 |
| 45 | 指标派生数据在 taxonomy（分类体系）变化后仍被当作当前真相 | PASS — F38 |
| 46 | 为了审计永久保留所有行为明细，不考虑数据最小化 | PASS through inherited Round 9 privacy proportionality + F35 |

---

## 7. Opt-out & degraded-experience checks / 退出个性化与降级体验检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 47 | 关闭个性化后首页几乎为空，迫使用户重新开启 | PASS — F34 |
| 48 | 非个性化模式仍偷偷使用已关闭的行为画像 | PASS through F34/F35 + Round 9 purpose boundaries |
| 49 | 非个性化模式直接退化成“全站最热门”单一源 | PASS through Round 10 multi-source / exploration boundaries |
| 50 | 用户关闭个性化后 Following / Search（关注 / 搜索）也失效 | PASS — F34 + inherited surface semantics |

---

## 8. Goodhart / metric-gaming checks / 指标异化与博弈检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 51 | 一旦某指标被设为 KPI（关键绩效指标），系统开始牺牲未测量价值来刷该指标 | PASS in principle through F17-F21, HARDEN → F46 |
| 52 | 创作者通过标题党拉高 CTR（点击率），系统误以为内容更有价值 | PASS through multi-objective + Governance, but not fully solved here |
| 53 | 系统为了减少 Not Interested（不感兴趣）而减少探索，导致信息茧房反而加重 | PASS through F21/F22 + Round 9/10 exploration invariants |
| 54 | 为了提升“多样性”机械插入低相关内容，满意度恶化 | PASS through Round 9/10 diversity != equalization |
| 55 | 运营团队修改指标定义来让报表变好，而真实体验不变 | GAP FOUND → F46 |

---

## 9. Findings / 审计发现

No CORRECTION（真正修正） to Workshop F's core direction was required.

The audit identified **six hardening areas**:

1. **R10-F41 — Explanation provenance must be version-aligned（解释溯源必须与实际推荐版本对齐）**  
   用户看到的解释必须对应实际曝光所使用的候选来源 / 策略 / 版本，不能从旧缓存或次要原因随便挑一句。

2. **R10-F42 — Control precedence must be explicit（控制优先级必须明确）**  
   Block（屏蔽）、法律/安全限制、Unfollow（取消关注）、Not Interested（不感兴趣）、Show More（多看）等冲突时需要可解释优先级，强范围控制不能被弱偏好覆盖。

3. **R10-F43 — Control propagation needs state/acknowledgement observability（控制传播需要状态与确认可观察）**  
   对重大持续性控制，应能识别已接收、已应用、已使相关派生状态失效 / 重算，避免“按钮成功但后台没生效”。

4. **R10-F44 — Evaluation must account for policy-created observation bias（评估必须识别策略制造的观察偏差）**  
   只评价被当前推荐策略曝光过的内容会产生 selection bias（选择偏差）；评估架构必须承认“谁被看见”本身就是策略结果。

5. **R10-F45 — Aggregate wins cannot hide cohort regressions（总体提升不能掩盖关键群体退化）**  
   关键实验 / 上线评估应能按有意义群体观察明显退化，例如新用户、语言、内容类型、长尾 / 新内容、探索来源等。

6. **R10-F46 — Metric governance must include materiality and anti-Goodhart controls（指标治理必须包含实质性与反指标异化保护）**  
   统计显著不等于产品显著；指标口径、最小实质改善、 guardrail（护栏）和解释责任必须受治理，不能靠换口径制造“优化成功”。

---

## 10. Audit conclusion / 审计结论

**Result: PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）.**

Workshop F remains coherent after adversarial review. The hardening does not lock exact metrics, control UX, experiment methods or explainability technology; it closes semantic and governance holes that could otherwise make explanations misleading, controls ineffective or metrics gameable.

Workshop F may serve as a stable Round 10 input after the hardening addendum is applied.
