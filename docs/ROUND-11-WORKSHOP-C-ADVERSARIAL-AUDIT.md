# Round 11 Workshop C — Adversarial Audit（第十一轮工作坊 C 对抗性审计）

> **Status:** PASS AFTER HARDENING / ONE PRODUCT DECISION STILL PENDING（加固后通过 / 仍有 1 个产品决定待确认）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-C.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

This audit attacks Publication Lifecycle, Versioning, Archive & Corrections（发布生命周期、版本、归档与勘误） for silent history rewriting, stale-source drift, rights leakage, citation breakage, cache poisoning, correction laundering, version ambiguity, archive entitlement coupling and cross-system contamination.

The inherited Option B（方案 B） — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照） remains controlling as a PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.

R11-C15 remains a genuine reader-product choice: Original-first（默认原始版本）, Latest-valid-first（默认最新有效版本） or Version-selector-first（先选择版本）.

---

# 2. Lifecycle semantics attack / 生命周期语义攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | Issue 被归档后，底层所有作品也自动归档 | PASS — C1/C7/C8 |
| 2 | 底层作品撤下后，整个 Issue 自动删除 | PASS — C1/C23 |
| 3 | Scheduled（计划发布）被搜索/推荐当成已经正式发布 | PASS — C4 |
| 4 | 发布前取消被伪造成“历史撤回” | PASS — C5 |
| 5 | Suspended（暂停）与 Withdrawn（撤回）共用一个布尔值 | PASS — C2/C6 |
| 6 | Archive（归档）等于 Delete（删除） | PASS — C7 |
| 7 | Issue 状态被拿去覆盖底层作品的全局生命周期 | PASS — C8 |
| 8 | 已发布 Issue 被“取消发布”后历史上看起来像从未存在 | GAP FOUND → C50/C52 |

---

# 3. Version-lineage attack / 版本谱系攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 9 | 修订版被创建成完全独立的新 Issue，历史关系断掉 | PASS — C9/C10 |
| 10 | 新 Issue 与旧 Issue 仅靠标题判断是否同一对象 | PASS — A4/A5 + C9 |
| 11 | `v1.1` 字符串本身成为内部唯一版本身份 | PASS — C11 |
| 12 | 实质性改文只保存覆盖后的最终正文 | PASS — C12 |
| 13 | 所有逗号修改都强制建立大型公开版本 | PASS — C13/C27/C28 |
| 14 | “轻微修改”被用作隐藏实质性改写的漏洞 | GAP FOUND → C49 |
| 15 | 历史快照为了不可变性继续公开已经无权展示的图文 | PASS — C14 |
| 16 | 权利撤回后直接删除全部版本关系，无法解释旧引用 | PASS — C14/C23 |
| 17 | 人类刊号与版本号混在一个字段，改刊号破坏版本谱系 | PASS — C18 |
| 18 | 回滚到旧内容时直接删除中间版本，历史被洗掉 | GAP FOUND → C50 |

---

# 4. Current-page / citation attack / 当前页面与引用攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 19 | Canonical Issue URL（议题主网址）没有明确“当前展示什么”的产品语义 | OPEN — C15 |
| 20 | 历史引用只能永远指向“最新版本”，旧论文/分享无法解释 | PASS — C16/C17 |
| 21 | 每个普通分享链接都被迫携带复杂技术版本 ID | PASS — C17 does not require that |
| 22 | 撤回/受限后原链接直接 404，历史引用链完全断裂 | GAP FOUND → C52 |
| 23 | 历史版本仍有网址，但无权限控制，泄露已撤下材料 | PASS — C14/C16 |
| 24 | Current page（当前页）显示新版本，但用户看不到有重大修订发生 | PASS — C29, subject to C15 UX |

---

# 5. Underlying-work drift attack / 底层作品漂移攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 25 | 作者把原作从 Revision 2 改到 Revision 5，历史 Issue 自动跟着变 | PASS — C19/C20 |
| 26 | Issue 想采用新版作品，只更新指针不产生修订记录 | PASS — C21 |
| 27 | 作者修正原作后系统自动宣布“Issue 已勘误” | PASS — C22 |
| 28 | 底层作品撤回后 Issue 摘要仍复制大量正文继续公开 | PASS — C23/C24 + A44 |
| 29 | Issue 内摘录成为第二份独立全文，之后无法同步权利/修订状态 | PASS — C24 |
| 30 | 作品新版与旧版差异巨大，却仍被错误当作无意义的小修 | GAP FOUND → C49 |

---

# 6. Correction-semantics attack / 勘误语义攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 31 | 错字修正、事实错误、版权撤图、编辑撤回全部叫 `corrected=true` | PASS — C25 |
| 32 | 修订没有记录授权者、原因或生效时间 | PASS — C26 |
| 33 | 每个小改动都在页面顶端永久显示巨大红色警报 | PASS — C27/C28 |
| 34 | 重大事实更正只改正文，没有任何可发现历史 | PASS — C29 |
| 35 | 出现勘误就自动降低作者 Account Trust（账户信任） | PASS — C30 |
| 36 | 图片版权失效被标记成“作品事实错误” | PASS — C31 |
| 37 | 撤回被伪装成普通拼写修正 | PASS — C32 |
| 38 | 撤回 = 数据库硬删除 | PASS — C33 |
| 39 | 法律/隐私原因的内部详情全部公开给读者 | PASS — C34 |
| 40 | 编辑自行把重大更正分类成 minor（轻微）从而逃避公开历史 | GAP FOUND → C49 |

---

# 7. Rights / privacy / legal attack / 权利、隐私与法律攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 41 | “历史真实性”被用作继续公开失效授权素材的理由 | PASS — C14/C23 |
| 42 | 删除图像后 Search snippet（搜索摘要）仍展示旧缓存图 | GAP FOUND → C51 |
| 43 | 推荐卡仍引用已撤下的标题/摘要/封面版本 | GAP FOUND → C51 |
| 44 | 历史版本链接绕过会员/隐私/权利门槛 | PASS — C14/C16/C37 |
| 45 | 公开 tombstone（墓碑页）泄露本来应该保密的撤下原因 | GAP FOUND → C52 + C34 |
| 46 | 隐私删除要求与历史出版记录发生冲突时没有“公开内容 vs 非公开最小记录”分层能力 | PASS in principle — C14/C33/C34, strengthened by C52 |

---

# 8. Archive attack / 归档攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 47 | Archive 只是旧文章列表，Issue 身份消失 | PASS — C35 |
| 48 | 一进入 Archive 就自动成为会员专属，提前决定 Round 12 | PASS — C36 |
| 49 | Archive 可见 = 所有底层内容全文公开 | PASS — C37 |
| 50 | 老 Issue 被推荐系统统一降权为“过时垃圾” | PASS — C38/C40 |
| 51 | 历史 Issue 里的时效性信息被推荐时完全没有时效上下文 | PASS — C38 + Round 10 freshness inheritance |
| 52 | 改发布日期后数据库身份也变化 | PASS — C39 |
| 53 | Archived 状态被 Search 解释为“不相关” | PASS — C40 |

---

# 9. Discussion / social-history attack / 讨论与社交历史攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 54 | Issue 修订后所有旧评论被删除重建 | PASS — C41 |
| 55 | 2027 年评论被展示成对 2029 年新增段落的回复 | GAP FOUND → C56 |
| 56 | 编辑事实更正自动给作者 moderation strike（审核处罚） | PASS — C43 |
| 57 | 作品被撤回后相关社区对象也被自动删除 | PASS by Round 8 separation; exact moderation policy deferred |
| 58 | 勘误事件必须立刻触发邮件/推送，本轮提前锁死通知产品 | PASS — C44 defers UX |

---

# 10. Derived-system / cache attack / 派生系统与缓存攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 59 | 主页面已修订，但 CDN/cache（内容分发 / 缓存）继续提供旧受限版本 | GAP FOUND → C51 |
| 60 | Search index（搜索索引）显示 V1，Issue 页显示 V3，系统却无法诊断 | GAP FOUND → C51/C53 |
| 61 | 推荐算法把 V1 的互动直接当成 V3 新内容的完全同义反馈 | GAP FOUND → C53 |
| 62 | Analytics（分析）把不同版本曝光合并后无法解释修订前后变化 | GAP FOUND → C53 |
| 63 | 修改版本后所有历史阅读数据被重新归到最新版本 | GAP FOUND → C53 |
| 64 | rights hold（权利暂停）只改数据库，预生成页面/社交分享卡仍不失效 | GAP FOUND → C51 |

---

# 11. Operational / concurrency attack / 运行与并发攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 65 | 计划发布时间只存“晚上 8 点”没有时区/绝对生效语义 | GAP FOUND → C54 |
| 66 | 两次修订并发发布，较旧修订最后覆盖较新修订 | Covered partly by B56; strengthened by C50/C54 |
| 67 | Amendment rollback（修订回滚）直接重写数据库为旧状态，没有新的审计事件 | GAP FOUND → C50 |
| 68 | 外部系统看到 Issue 状态变化但不知道哪个版本生效 | GAP FOUND → C54/C53 |

---

# 12. Cross-system contamination attack / 跨系统污染攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 69 | Source/provenance（来源 / 溯源）勘误自动撤销 Work Recognition（作品认可） | GAP FOUND → C55 |
| 70 | 勘误次数自动成为作者 Trust（信任）负分 | PASS — C30, strengthened by C55 |
| 71 | 修订后 Recommendation（推荐）把“被编辑纠错”当成用户兴趣信号 | PASS by Round 9/10 separation; strengthened by C55 |
| 72 | 一个新的版本被当作完全新作品反复获得“新内容机会” | PASS by Round 10 lineage safeguards + C9/C10 |

---

## 13. Findings / 审计发现

No CORRECTION（真正修正） to the chosen Option B publication model was required.

The audit identified **eight hardening areas**:

1. **R11-C49 — NEW SAFEGUARD（新增保护）**  
   Minor vs material（轻微 vs 实质）修订分类必须受策略和审计约束，不能由操作者随意降级来隐藏重大改动。

2. **R11-C50 — HARD HISTORY SAFEGUARD（历史硬保护）**  
   Rollback / restore（回滚 / 恢复）本身必须成为新的历史事件，不能通过“恢复旧数据库值”删除中间版本和撤回历史。

3. **R11-C51 — HARD DERIVED-STATE SAFEGUARD（派生状态硬保护）**  
   Search（搜索）、Recommendation（推荐）、缓存、预览、分享卡、静态生成等派生表示必须能绑定/识别版本并在重大状态变化时失效。

4. **R11-C52 — HARD LINK / TOMBSTONE SAFEGUARD（链接 / 墓碑硬保护）**  
   撤回/受限后的稳定链接应尽量保留可解释的 tombstone（墓碑）或安全历史入口，而不是无条件 404；同时墓碑不能泄露受限正文或敏感撤回原因。

5. **R11-C53 — HARD MEASUREMENT SAFEGUARD（测量硬保护）**  
   版本上下文在重要 Analytics / Exposure / Feedback（分析 / 曝光 / 反馈）中必须可保留，否则修订前后的用户行为会被错误合并。

6. **R11-C54 — HARD EFFECTIVE-TIME SAFEGUARD（生效时间硬保护）**  
   Schedule / Publish / Amendment（计划发布 / 发布 / 修订）需要有稳定绝对生效时间语义；本地显示时区与业务生效时间不能混为一体。

7. **R11-C55 — HARD SEPARATION SAFEGUARD（系统分离硬保护）**  
   Source / provenance correction（来源 / 溯源修正）可以触发依赖系统重新评估，但不能自动等价为作者不可信、作品取消认可或审核处罚。

8. **R11-C56 — HARD CONTEXT SAFEGUARD（上下文硬保护）**  
   与特定历史版本紧密相关的评论 / 引用 / 讨论需要能保留版本上下文，避免旧讨论被静默贴到后来完全不同的文本上。

---

## 14. Result / 结果

Workshop C core direction is **PASS AFTER HARDENING（加固后通过）**.

There is **one unresolved product choice**:

> **R11-C15 — canonical/current Issue page default representation（议题主页面默认展示版本）: A / B / C.**

Audit recommendation remains **Option B — Latest-valid-first（方案 B——默认最新有效版本）**, while preserving visible revision history and addressable historical snapshots where permitted.

No implementation is authorized.
