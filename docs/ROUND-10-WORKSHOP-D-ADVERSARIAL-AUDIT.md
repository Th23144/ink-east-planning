# Round 10 Workshop D — Adversarial Audit（第十轮工作坊 D 对抗性审计）

> **Status:** PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-D.md`  
> **Hardening:** `docs/ROUND-10-WORKSHOP-D-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

Workshop D defines the semantic pipeline from eligible inventory through Candidate Retrieval（候选召回）, optional Pre-ranking（可选预排序）, task-specific Ranking（按任务排序）, Re-ranking / Blending（重排序 / 混排） and final exposure.

The audit attacks the design for hidden single-score collapse, correlated-signal double counting, pre-ranking starvation, privacy leakage, feedback-loop bias, content-type calibration failure, cold-start fabrication, fallback bypasses and premature infrastructure lock-in.

---

## 2. Eligibility & inventory checks / 资格与库存检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | 高相关分绕过审核 / 权限 / 权利状态 | PASS — D1/D3 |
| 2 | 一个全局 `recommendable=true` 控制所有页面 | PASS — D2 |
| 3 | Search（搜索）可访问对象因为不适合主动推荐而被错误全局隐藏 | PASS — D2 |
| 4 | 权利 / 审核 / 生命周期变化后旧候选继续永久有效 | PASS — D4 |
| 5 | 推荐缓存成为独立真相源 | PASS — D4 |
| 6 | 降级 / fallback（回退）路径为了有内容而绕过资格门槛 | GAP FOUND → D45 |

---

## 3. Retrieval-source checks / 召回来源检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 7 | 架构名义多来源，实际只能依赖一个 retriever（召回器） | PASS — D5/D10 |
| 8 | 候选来源进入后被抹掉，无法解释为什么出现 | PASS — D6 |
| 9 | 同一对象经 4 条路线进入就被当成 4 个对象 | PASS — D7 |
| 10 | 相关召回路线被当作 4 次独立用户认可 | PASS — D8 |
| 11 | 候选预算被写死成永久产品本体 | PASS — D9 |
| 12 | 某来源长期被饿死但系统不可观察 | PASS — D10 |
| 13 | 私人笔记 / 私信 / 审核数据因为“召回效果好”被偷偷纳入候选生成 | GAP FOUND → D41 |
| 14 | Not Interested / Show Less（不感兴趣 / 少看）只在最终 UI（用户界面）过滤，召回仍持续污染 | PASS through inherited A33 + D1/D2 |

---

## 4. Source-semantics checks / 来源语义检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 15 | Follow（关注）召回被重新描述成模型推断兴趣 | PASS — D11 |
| 16 | Interest Graph（兴趣图谱）召回变成身份 / 专业 / 信任结论 | PASS — D12 |
| 17 | Knowledge Graph（知识图谱）所有关系压成无类型相似度 | PASS — D13 |
| 18 | 编辑策展伪装成“猜你喜欢” | PASS — D14 |
| 19 | 热门 / 趋势直接制造权威和事实可靠性 | PASS — D15 |
| 20 | 探索内容一次点击立即自我强化为强长期兴趣 | PASS — D16 + Round 9 |

---

## 5. Pre-ranking checks / 预排序检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 21 | 第一版被强制建设独立预排序服务 | PASS — D17 |
| 22 | 预排序变成不可见的最终裁决器 | PASS — D18/D19 |
| 23 | 高质量候选根本没进入主排序，最后却归因于 Ranker（排序器） | PASS — D19 |
| 24 | 便宜预排序模型系统性杀死长文章 / 新内容 / 长尾来源，且总体 recall（召回率）看不出来 | GAP FOUND → D42 |
| 25 | 探索候选在预排序阶段被 engagement proxy（互动代理指标）全部过滤 | GAP FOUND → D42 |

---

## 6. Ranking objective checks / 排序目标检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 26 | 所有页面共用一个 `recommendation_score` | PASS — D20 |
| 27 | 点击率 / 停留时长成为唯一目标 | PASS — D21/D22 |
| 28 | 不同对象类型原始分直接比较 | PASS — D23 |
| 29 | 排序不确定性被伪装成确定事实 | PASS — D24 |
| 30 | 产品架构提前指定必须使用某个机器学习模型 | PASS — D25/D40 |
| 31 | 只优化即时行为，长阅读 / 后续回访 / 长期价值因为反馈慢而系统性吃亏 | GAP FOUND → D43 |
| 32 | 模型升级后 score（分数）分布漂移，但下游仍按旧阈值解释 | GAP FOUND → D44 |

---

## 7. Re-ranking & composition checks / 重排序与组合检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 33 | 单条相关度高就允许整页全是同一创作者 / 主题 | PASS — D26 |
| 34 | 多样性被误解成每个来源平均分配 | PASS — D27 |
| 35 | 为了平衡页面把 editorial（编辑）改写成 personal interest（个人兴趣） | PASS — D28 |
| 36 | 去重把 Edition / Version / Source Item（版本 / 版本修订 / 来源实体）合没了 | PASS — D29 |
| 37 | 高产创作者仅靠大量供给占满候选与最终页面 | PASS in principle through D26, but must remain observable in composition |
| 38 | Re-ranking（重排序）改变对象本身的 Recognition（作品认可）状态 | PASS — D28 + inherited boundaries |

---

## 8. Exposure & feedback-loop checks / 曝光与反馈循环检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 39 | 系统自己决定曝光后，又把结果当作无偏用户偏好 | PASS — D30/D31 |
| 40 | 排名位置完全丢失，后续把首屏点击和深处点击解释一致 | PASS — D31 |
| 41 | 更多推荐 → 更多互动 → 自动变成更多权威 | PASS — D32 |
| 42 | 实验 / exploration（探索）产生的曝光没有 treatment/context（实验 / 情境）标记，后续训练当成自然行为 | GAP FOUND → D46 |
| 43 | 用户没有看到内容却被记录为“负反馈 / 不喜欢” | PASS through Round 9 exposure semantics + D30 |

---

## 9. Cold-start, opt-out & degraded-mode checks / 冷启动、退出个性化与降级检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 44 | 冷启动供给被写成用户已经拥有长期兴趣 | PASS — D33 |
| 45 | 用户关闭行为个性化后系统完全不可用 | PASS — D34 |
| 46 | 一个召回器故障导致整个发现系统只能报错 | PASS — D35 |
| 47 | fallback（回退）使用不相关热门内容填满明确任务页面 | GAP FOUND → D45 |
| 48 | 降级路径绕开用户 Block / privacy / rights（屏蔽 / 隐私 / 权利）控制 | GAP FOUND → D45 |

---

## 10. Evolvability & observability checks / 可演进与可观察性检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 49 | 最终结果差却无法判断问题在召回、预排序还是重排序 | PASS — D36 |
| 50 | 重大模型变更无版本 / 灰度 / 回滚 | PASS — D37 |
| 51 | 离线点击指标提升就直接判定产品变好 | PASS — D38 |
| 52 | 第一版物理合并召回与排序后，未来再也拆不开 | PASS — D39 |
| 53 | Elasticsearch / Vector DB（弹性搜索 / 向量数据库）被写成产品真理 | PASS — D40 |
| 54 | A/B Test（A/B 测试）为了实验可以临时违反搜索意图、关注关系、隐私等硬边界 | GAP FOUND → D47 |

---

## 11. Findings / 审计发现

No CORRECTION（真正修正） to Workshop D's core pipeline was required.

The audit identified **seven hardening areas**:

1. **R10-D41 — HARD PRIVACY SAFEGUARD（隐私硬保护）**  
   Candidate Retrieval（候选召回）的输入同样受 purpose limitation（用途限制）约束，私人笔记 / 私信 / 审核案件不能因为预测价值而默认进入推荐召回。

2. **R10-D42 — NEW SAFEGUARD（新增保护）**  
   Pre-ranking（预排序）必须按来源 / 内容类型 / 探索路径观察 Recall Loss（召回损失），不能只看总体召回率。

3. **R10-D43 — NEW SAFEGUARD（新增保护）**  
   Ranking Outcome Horizon（排序结果时间窗口）不能只偏向即时反馈；需要允许慢反馈 / 长周期价值进入后续评估。

4. **R10-D44 — HARDENING（架构加固）**  
   Model / Calibration Drift（模型 / 校准漂移）需要可观察，避免模型换代后旧阈值与旧混排规则继续误解释新分数。

5. **R10-D45 — HARD SAFEGUARD（硬保护）**  
   Fallback / Degraded Mode（回退 / 降级模式）仍然必须遵守资格、用户主动意图与控制范围，不能用“系统故障”绕过硬边界。

6. **R10-D46 — HARDENING（架构加固）**  
   Experiment / Exploration Exposure（实验 / 探索曝光）需要保留适当 treatment/context（实验处理 / 情境）来源，避免后续学习误当成自然、无偏行为。

7. **R10-D47 — HARD INVARIANT（硬边界）**  
   Experimentation（实验）可以改变策略 / 权重，但不能临时突破隐私、权利、权限、明确搜索意图、Follow（关注）关系语义等硬边界。

---

## 12. Audit conclusion / 审计结论

**Result: PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）.**

The semantic multi-stage pipeline remains coherent. The audit mainly strengthened privacy at retrieval time, pre-ranking recall diagnostics, long-horizon evaluation, score calibration drift, safe fallback behavior and experiment provenance/boundaries.

Workshop D may serve as a stable input to Workshop E after the hardening addendum is recorded.

---

## 13. Global audit checkpoint / 全局审计检查点

This local audit does not replace the user-requested **Full Comprehensive Adversarial Audit（全量综合对抗性审计）** after Product Architecture（产品架构）1–16 is complete.