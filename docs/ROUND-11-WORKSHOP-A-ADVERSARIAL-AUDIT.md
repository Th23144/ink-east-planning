# Round 11 Workshop A — Adversarial Audit（第十一轮工作坊 A 对抗性审计）

> **Status:** PASS AFTER HARDENING / ONE PRODUCT DECISION STILL PENDING（加固后通过 / 仍有 1 个产品决定待确认）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-A.md`  
> **Hardening:** `docs/ROUND-11-WORKSHOP-A-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

Workshop A defines Issue（议题） as a first-class Editorial Curation Container（编辑策展容器） over the broader content / knowledge system without making Issue the entire platform or destroying underlying object identity.

This audit attacks the design for identity cloning, authorship laundering, curation→Recognition feedback loops, stale-version drift, rights/access leakage, platform self-dealing, paid/editorial confusion, historical rewriting and hidden fixed magazine assumptions.

The Published Issue mutability（已发布议题可变性） choice remains intentionally open at R11-A37. The audit tests all three options and confirms that Option B（方案 B） remains the strongest current recommendation.

---

# 2. Issue identity checks / 议题身份检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | Issue 只是一个 Topic/tag 查询，没有稳定身份 | PASS — A1 |
| 2 | Issue 变成所有内容共同父类型 | PASS — A2 |
| 3 | 内容进入 Issue 后原 permalink / identity 消失 | PASS — A3 |
| 4 | 改标题就创建一个“新 Issue”并切断历史 | PASS — A4 |
| 5 | `Issue 001` 被当成数据库唯一身份 | PASS — A5 |
| 6 | 改刊号后历史引用全部断裂 | PASS — A4/A5 |

---

# 3. Curation-relation checks / 策展关系检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 7 | Issue 只存一串 Article ID，无法表达栏目 / 顺序 / 编辑语境 | PASS — A6 |
| 8 | Issue 内顺序被误写成作品全站排名 | PASS — A7 |
| 9 | 同一作品进入第二个 Issue 就被复制成第二个内容对象 | PASS — A8 |
| 10 | 多次 Issue 收录制造多个作者或多个原创出处 | PASS — A9 |
| 11 | Issue-specific title（议题展示标题）改写原作标题并让用户误认为另一作品 | PASS — A11 |
| 12 | Issue framing（议题编辑语境）直接写回并覆盖原作品正文 | PASS — A10 |
| 13 | 原作品后来发生重大修订，但历史 Issue 无法知道当时收录的是哪个版本 | GAP FOUND → A38 |
| 14 | 一条 curation relation（策展关系）被移除后完全无历史痕迹，无法解释旧目录 / 引用 | GAP FOUND → A39 |

---

# 4. Mixed-content composition checks / 混合内容策展检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 15 | 古籍段落、编辑文章、社区帖子全部被 Issue 包装成同一 authority（权威）级别 | PASS — A12/A13 |
| 16 | 所有可策展产品都被强迫建成 Issue | PASS — A14 |
| 17 | 所有长期内容都必须先进入 Issue 才能被发现 | PASS — A15 |
| 18 | Issue Theme（议题主题）替代共享 Topic / Knowledge Entity（主题 / 知识实体） | PASS — A16/A17 |
| 19 | 旧版固定 8 篇结构被误实现成数据库硬字段 | PASS — A18/A19 |
| 20 | 每期必须一个汉字变成未来平台本体约束 | PASS — A20 |
| 21 | “不定期发刊”被硬编码，未来其它 publication（出版物）无法按周期发行 | PASS — A21 |

---

# 5. Recognition / authority contamination checks / 认可与权威污染检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 22 | Issue inclusion（议题收录）自动授予 Work Recognition（作品认可） | PASS — A22 |
| 23 | 已获 Recognition 的作品强制进入每一期相关 Issue | PASS — A23 |
| 24 | 未获 Recognition 的新作品永远无法进入 Issue | PASS — A24 |
| 25 | 一次 Issue inclusion 自动升级作者为 Contributor（贡献者） | PASS — A25 |
| 26 | Contributor status（贡献者身份）自动保证入选 | PASS — A26 |
| 27 | Official / Institution / Partner（官方 / 机构 / 合作）关系直接保证入选 | PASS — A27 |
| 28 | 编辑主动推荐自己的 / 合作方作品后，该选择又作为独立 Recognition 证据回流 | GAP FOUND → A43 |
| 29 | Issue inclusion 记录无法区分平台自营、合作、投稿、约稿来源，导致自营偏好不可审计 | GAP FOUND → A40 |

---

# 6. Editorial acquisition checks / 编辑内容来源检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 30 | 投稿 = 已接受 | PASS — A29 |
| 31 | 约稿 = 已出版 | PASS — A29 |
| 32 | 未选中自动降低 Account Trust / Work Recognition（账户信任 / 作品认可） | PASS — A30 |
| 33 | Contributor submission（贡献者投稿）被系统当成 Contributor 保证席位 | PASS — A26/A29 |
| 34 | reader question（读者问题）被选入 Issue 后被错误改写成编辑原创 | PASS — A9/A28 |
| 35 | selection origin（选稿来源）完全丢失，后续无法解释 editorial provenance（编辑溯源） | PASS — A28 |

---

# 7. Rights / access / privacy checks / 权利、访问与隐私检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 36 | 一旦入选 Issue 就默认获得新的版权许可 | PASS — A31 |
| 37 | Issue 公开目录直接泄露 premium/private object（付费 / 私有对象）的受限正文 | GAP FOUND → A44 |
| 38 | Membership（会员）后续策略只能 Issue 级统一，无法表达对象级差异 | PASS — A32 |
| 39 | rights status（权利状态）变化后仍因“历史 Issue”继续公开不可用素材 | GAP FOUND → A42 |
| 40 | Issue-level framing 复制受限图片 / 全文，从而绕过对象级 rights gate（权利门槛） | GAP FOUND → A44 |

---

# 8. Community / discussion checks / 社区与讨论检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 41 | Issue Discussion（本期讨论）直接嵌入并污染 canonical source（典籍来源）对象 | PASS — A33 + Round 8 |
| 42 | 社区回复被编辑选中后自动变成 canonical / official fact（典籍 / 官方事实） | PASS — A34 |
| 43 | Issue editor 获得对所有被引用社区线程的永久作者级控制权 | PASS by Round 8 inherited governance boundaries |
| 44 | Issue 删除后 companion discussion（伴随讨论）也被级联删除 | PASS in principle through object separation; lifecycle details deferred |

---

# 9. Historical durability checks / 历史稳定性检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 45 | 已发布 Issue 可以静默重排 / 改文 / 换内容，旧引用看不出历史改变 | OPEN — depends on A37; Option C risk strongest |
| 46 | 采用完全冻结后，明显事实错误 / 权利撤回也无法处理 | OPEN — Option A weakness |
| 47 | 采用 Living Issue（持续变化议题）后，旧读者与新读者看到完全不同内容却仍被当同一出版快照 | OPEN — Option C weakness |
| 48 | 从 Issue 移除作品时顺便删除原作 | PASS — A36 |
| 49 | 权利原因必须撤下内容时，平台为了“历史完整”继续公开侵权材料 | GAP FOUND → A42 |
| 50 | 作品在入选后发生重大 revision（修订），Issue 目录无版本锚点而被动改变历史 | GAP FOUND → A38 |

---

# 10. Commercial / self-dealing checks / 商业与自我交易检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 51 | 未来 Sponsor / Commerce（赞助 / 商业）付费就可伪装成普通 editorial inclusion（编辑收录） | GAP FOUND → A41 |
| 52 | Spatial Flow（空间流）商业关联内容被默认视为 Ink & East editorial selection（墨与东方编辑选择） | GAP FOUND → A41 |
| 53 | Platform-owned work（平台自有作品）入选后获得额外 Recognition evidence（认可证据） | GAP FOUND → A43 |
| 54 | 合作机构给钱 / 合作就自动进入 Issue | PASS — A27, strengthened by A41 |

---

# 11. Evolvability / implementation checks / 可演进与实现检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 55 | 固定栏目数、固定稿件数、固定发刊周期被写死进 domain model（领域模型） | PASS — A18…A21 |
| 56 | Issue curation policy（议题策展策略）无法版本化 / 调整 | PASS — Section 10 Rule Evolvability |
| 57 | Submission / Commission / Selection（投稿 / 约稿 / 选入）全塞进一个 status（状态）字段 | PASS — A29 |
| 58 | 未来 Collection / Exhibition（合集 / 展览）只能复制 Issue 实现 | PASS — A14 |
| 59 | Issue page visual design（议题页视觉设计）被误当产品对象结构 | PASS — scope guard |
| 60 | 旧 WordPress / CPT（内容类型）实现被当作最终 source-native（源码原生）架构 | PASS — inherited source-native posture |

---

## 12. Findings / 审计发现

No CORRECTION（真正修正） to the inherited product direction was required.

The audit identified **seven hardening areas**:

1. **R11-A38 — NEW SAFEGUARD（新增保护）**  
   Issue Curation Relation（议题策展关系）需要能表达“收录时对应哪个内容版本 / 快照”，避免底层作品后来修订后历史 Issue 被静默改写。

2. **R11-A39 — HARDENING（架构加固）**  
   Material inclusion / removal（重要收录 / 移除）需要保留适当历史，旧目录、旧引用和编辑决定不能完全失去解释能力。

3. **R11-A40 — HARDENING（架构加固）**  
   Issue selection（议题选稿）需要保留 Acting Context / Selection Origin（行动身份上下文 / 选稿来源），给未来 conflict-of-interest（利益冲突）与编辑治理留下可审计边界。

4. **R11-A41 — HARD PRODUCT SAFEGUARD（产品级硬保护）**  
   Future paid / sponsored / commerce inclusion（未来付费 / 赞助 / 商业收录）不能静默伪装成 ordinary editorial selection（普通编辑选择）。商业规则留待后轮，但语义隔离现在必须存在。

5. **R11-A42 — HARD RIGHTS / HISTORY SAFEGUARD（权利 / 历史硬保护）**  
   Rights / legal / privacy（权利 / 法律 / 隐私）变化可以要求撤下或替换可见内容，同时历史记录不能通过继续公开受限材料来“保存历史”。

6. **R11-A43 — HARD INVARIANT（硬边界）**  
   Issue curation（议题策展）本身不能回流成独立 Work Recognition（作品认可）证据，尤其不能形成“平台先选 → 因为被选所以更认可 → 因为更认可又更容易被选”的自我强化回路。

7. **R11-A44 — HARD ACCESS / RIGHTS SAFEGUARD（访问 / 权利硬保护）**  
   Issue preview / framing / excerpt（议题预览 / 编辑语境 / 摘要）不能复制足量受限内容而绕过 underlying object（底层对象）的权限 / 权利门槛。

---

## 13. Result / 结果

Workshop A core direction is **PASS AFTER HARDENING（加固后通过）**.

There is **one unresolved product choice only**:

> **R11-A37 — Published Issue mutability（已发布议题可变性）: Option A / B / C.**

The audit strengthens the recommendation for **Option B（方案 B） — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）**, because it best reconciles editorial correction, rights changes and historical/citation stability.

No implementation is authorized.
