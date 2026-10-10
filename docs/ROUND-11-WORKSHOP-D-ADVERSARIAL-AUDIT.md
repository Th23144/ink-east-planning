# Round 11 Workshop D — Adversarial Audit（第十一轮工作坊 D 对抗性审计）

> **Status:** PASS AFTER HARDENING / ZERO UNRESOLVED MATERIAL BLOCKERS（加固后通过 / 0 个未解决重大阻塞）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-D.md`  
> **Hardening:** `docs/ROUND-11-WORKSHOP-D-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

This audit attacks Issue Composition, Sections, Editorial Framing & Presentation Semantics（议题编排、栏目、编辑语境与展示语义） for ontology leakage, silent personalized rewriting, provenance confusion, rights leakage, stale derived state, false authority signals, hidden commercial placement and version-history drift.

The already user-confirmed provisional directions remain controlling:

- Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）;
- Latest-valid-first（默认最新有效版本）.

---

# 2. Composition identity attack / 编排身份攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | Issue 为了展示作品而复制出第二份独立文章对象 | PASS — D2 |
| 2 | Issue 内部 section/role 被写回作品全局类型 | PASS — D4/D5 |
| 3 | 同一作品进两个 Issue 后出现两个作者身份 | PASS — D2/D7 |
| 4 | 同一期因为数据重复让同一作品出现两次 | PASS — D8 |
| 5 | 合理的“开头节选 + 后文完整链接”被去重器误删 | PASS — D8 allows intentional repetition |
| 6 | Issue 排序只存数组下标，修订后历史引用无法解释 | GAP FOUND → D45 |
| 7 | 一个 placement 被复制到新版本后无法判断继承/替换关系 | GAP FOUND → D45 |
| 8 | Issue 版本变化后旧 placement ID 被复用成完全不同内容 | GAP FOUND → D45 |

---

# 3. Section / taxonomy attack / 栏目与分类攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 9 | `Reader Voices` 被自动创建成全站 Topic | PASS — D5 |
| 10 | 旧版八篇结构被数据库 schema 永久写死 | PASS — D9/D10 |
| 11 | 每期必须有核心汉字，否则无法发布 | PASS — D11 |
| 12 | 空栏目也必须输出空卡片占位 | PASS inherited A19 + D9 |
| 13 | Future brand 也被强制复用 Ink & East 栏目 | PASS — D9 |
| 14 | 栏目层级无限嵌套形成 CMS 树泥潭 | PASS — D16 |
| 15 | 一个临时 Issue 主题自动永久分类作品 | PASS — D23 |
| 16 | Issue section rename 导致知识图谱实体被重命名 | PASS — D5/D23 |

---

# 4. Canonical order / personalization attack / 正式顺序与个性化攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 17 | 每个用户看到不同文章顺序，却都被称为同一正式 Issue | PASS — D13 |
| 18 | 推荐系统把“用户更爱看的文章”自动拖到 Issue 首位 | PASS — D13/D33 |
| 19 | 阅读进度排序被误写回 canonical order（正式顺序） | PASS — D14 |
| 20 | A/B Test（A/B 测试）偷偷改变正式目录顺序 | GAP FOUND → D46 |
| 21 | Supplemental Recommendation（补充推荐）被混进目录，看起来像编辑正式选入 | PASS — D33; strengthened → D46 |
| 22 | 用户看不到某个付费内容后，页面把后续文章自动前移并改写正式编号语义 | GAP FOUND → D47 |
| 23 | 无障碍阅读模式改变视觉排列后被当成新的 Issue 版本 | PASS — D14/D37/D40 |
| 24 | 个性化模块可以存在，但完全无法从正式策展内容中机器区分 | GAP FOUND → D46 |

---

# 5. Editorial framing / provenance attack / 编辑语境与溯源攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 25 | 编者按作为数据库字符串存在，做了实质性主张却没有作者/版本归因 | PASS — D17 |
| 26 | 编辑摘要被渲染成原作者摘要，读者无法分辨是谁写的 | PASS — D18/D19 |
| 27 | 编辑现代译释被展示成古籍原文 | PASS — D19 |
| 28 | Issue caption（图注）错误时直接修改底层作品正文 | PASS — D44 |
| 29 | Editor's Note（编者按）修改后历史 Issue 仍显示新文字但不生成修订 | PASS — D1/D39 |
| 30 | Selection Origin（选稿来源）全部塞到前台造成信息噪音 | PASS — D24 |
| 31 | 因为作品是头条，就自动提高 Recognition（作品认可） | PASS — D21/D28 |
| 32 | Issue 主题关联被当成事实性知识关系而无需证据 | PASS — D23 |

---

# 6. Media / cover / rights attack / 媒体、封面与权利攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 33 | 有文章授权就默认拥有文章图片做封面的权利 | PASS — D26 |
| 34 | 封面图片授权失效，但 CDN / share card 继续显示旧图 | GAP FOUND → D48 |
| 35 | 古籍扫描只是“可下载”，就默认可以做商业 Issue 封面 | PASS by D26 + inherited rights policy |
| 36 | 封面人物被理解成平台背书/权威认证 | PASS — D27 |
| 37 | 主视觉最大卡片自动成为推荐/治理强信号 | PASS — D28 |
| 38 | alt text（替代文本）被错误写回作品正式标题 | PASS — D29 |
| 39 | Issue UI 翻译后自动生成了作品译本且没有翻译权利/译者信息 | PASS — D30 |
| 40 | rights takedown（权利下架）只替换正文，预览、封面衍生图不失效 | GAP FOUND → D48 |

---

# 7. Access / historical composition attack / 访问与历史编排攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 41 | 会员看不到一个对象，于是系统从历史目录中完全抹掉它 | PASS — D31/D32 |
| 42 | placeholder（占位）泄露完整付费摘要或敏感撤稿原因 | PASS — D32/D36 |
| 43 | 一个底层作品撤回后，Issue 的历史 inclusion relation（收录关系）也硬删除 | PASS — D43 |
| 44 | 历史版本链接仍展示已无权公开的封面/摘录 | PASS inherited C14/C51 + D26/D36 |
| 45 | 不同用户权限导致同一 Issue 的“第 4 篇”指代不同作品，旧评论/引用错位 | GAP FOUND → D47 |
| 46 | 访问限制解除后缓存仍持续显示 tombstone（墓碑页） | PASS conceptually D42 + C51; strengthened → D48 |

---

# 8. Derived presentation attack / 派生展示攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 47 | Table of Contents（目录）手工维护，内容已经 V3 目录仍是 V1 | PASS — D12/D42 |
| 48 | deep link（深链接）只靠数组序号，重排后跳到另一篇 | GAP FOUND → D45 |
| 49 | Web 版和 PDF 版引用的是不同 Issue 版本却都没有版本上下文 | GAP FOUND → D49 |
| 50 | 社交预览使用旧摘要，正文已重大修订 | PASS inherited C51/D42; strengthened → D49 |
| 51 | 生成式 AI 摘要被当成原作者摘要或古籍原文 | GAP FOUND → D50 |
| 52 | AI 生成的 section label（栏目标签）自动写回知识图谱 Topic | GAP FOUND → D50 |
| 53 | 自动摘要在 source correction（来源修正）后不重新评估 | GAP FOUND → D50 |
| 54 | 不同渲染形式仅因分页不同就被系统当成不同出版版本 | PASS — D37/D40 |

---

# 9. Editorial prominence / authority contamination attack / 编辑重点与权威污染攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 55 | lead article（头篇）被候选评审系统当成平台质量认证 | PASS — D20/D21 |
| 56 | Issue inclusion 被重复计入 Recognition evidence（认可证据）造成自增强 | PASS inherited A43 + D20 |
| 57 | Partner（合作方）作品放大字号后自动获得 institution authority（机构权威） | PASS — D20/D28 |
| 58 | editor-selected（编辑精选）标签被 Recommendation（推荐）误解释成用户兴趣 | PASS inherited Round 10 + D20 |
| 59 | cover feature（封面展示）被 Account Trust（账户信任）系统当成作者能力升级 | PASS — D21/D28 |
| 60 | Editorial framing（编辑语境）把社区作品伪装成 canonical source（典籍来源） | PASS — D19/D20 |

---

# 10. Commercial / supplemental contamination attack / 商业与补充层污染攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 61 | Sponsored（赞助）模块被插在目录里但没有类型区别 | PASS — D34; strengthened → D51 |
| 62 | 商品推荐以“本期正式收录”身份出现 | PASS — D34; strengthened → D51 |
| 63 | 品牌合作方付款后自动获得 lead placement（头条版位） | PASS inherited A41/B14/D34 |
| 64 | Supplemental（补充）推荐的点击表现被用来改写 canonical composition（正式编排） | GAP FOUND → D46/D51 |
| 65 | future commerce placement（未来商业位）没有历史归因，几年后看起来像普通编辑选择 | GAP FOUND → D51 |

---

# 11. Amendment / concurrency / history attack / 修订、并发与历史攻击

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 66 | 编辑重排后用“layout fix（布局修复）”名义逃避版本历史 | PASS — D39/D40 + C49 |
| 67 | 两名编辑同时重排，旧草稿最后写入覆盖已发布修订 | Covered by B56/C50; strengthened → D52 |
| 68 | rollback（回滚）恢复旧排序时删除中间 placement history（版位历史） | PASS inherited C50/D41 |
| 69 | cover rights hold（封面权利暂停）和 composition publish（编排发布）竞态，受限封面仍上线 | GAP FOUND → D52 |
| 70 | underlying work revision（底层作品修订）后 Issue placement 自动漂移到新版 | PASS — A38/C19-C22/D1 |
| 71 | framing correction（语境勘误）误改底层作者作品 | PASS — D44 |
| 72 | Issue amendment（议题修订）发布成功，但 TOC / search / social preview 只更新一部分 | GAP FOUND → D48/D49/D52 |

---

## 12. Findings / 审计发现

No correction to the core Workshop D direction is required. The audit found **eight hardening areas**:

1. **R11-D45 — Stable Placement Identity（稳定版位身份）**  
   Consequential placement/relation references must not depend on mutable array index/order alone.

2. **R11-D46 — Canonical vs Supplemental Boundary（正式策展与补充层边界）**  
   Personalized / experimental / recommendation modules must be machine-distinguishable from canonical Issue contents; experiments may not silently rewrite published editorial order.

3. **R11-D47 — Access-aware numbering/context（访问差异下的编号与上下文）**  
   Restricted items must not cause historical numbering, deep links, comments or citations to silently retarget another object.

4. **R11-D48 — Media/derived invalidation（媒体与派生状态失效）**  
   Cover/media rights/lifecycle changes must propagate to CDN, previews, share cards and other generated artifacts.

5. **R11-D49 — Rendering provenance（渲染溯源）**  
   Material exports/renderings should remain attributable to the Issue version/state from which they were generated.

6. **R11-D50 — Machine-generated framing boundary（机器生成编辑语境边界）**  
   AI/algorithmic summaries, labels or framing are derived editorial artifacts, not source text, authorship, provenance truth or automatic Knowledge Graph（知识图谱） facts.

7. **R11-D51 — Commercial/supplemental placement provenance（商业 / 补充版位溯源）**  
   If later authorized, sponsored/commerce/supplemental modules need explicit semantic separation and historical provenance from canonical editorial inclusion.

8. **R11-D52 — Composition publication concurrency / preconditions（编排发布并发与前置条件）**  
   Publishing/amending composition must guard against stale draft, rights hold, superseded revision or concurrent state changes.

---

## 13. Result / 结果

**PASS AFTER HARDENING（加固后通过）.**  
**ZERO UNRESOLVED MATERIAL BLOCKERS（0 个未解决重大阻塞）.**

No new genuine product fork requires user confirmation in Workshop D. The canonical-vs-personalized boundary follows the already chosen concept of an Issue as a stable editorial publication snapshot rather than a personalized feed.

No implementation authorization is created by this audit.