# Ink & East · 模块任务计划 (Roadmap)

> 配合 `INK-EAST-BRIEF.md` + `.kiro/steering/ink-east-handoff.md` 使用。
> 每个任务一个新窗口；每开窗口前回主窗口要 prompt template + 给 3 件套。

## 总览

| # | 任务 | 文件 | 前置 | 状态 |
|---|---|---|---|---|
| 0 | 让仍开着的旧窗口关掉重开 | — | — | ⏳ |
| 1 | article-002-vip 示例 VIP 文章 | preview/ink-east-article-002-vip-v1.html | 无 | ✓（00bda26；Issue 001 TOC 接入已废止见日志补遗） |
| 1.5 | **VIP Library 索引页**（NEW · IA 二分） | preview/ink-east-vip-library-v1.html | #1 | ✓（c090123） |
| 2 | Reading Room VIP 会员中心 | preview/ink-east-reading-room-v1.html | #1.5 | ✓(d2ca549) |
| 3 | 定制解读服务页（**核心商业**） | preview/ink-east-custom-reading-v1.html | 无（可与 #1/#2 并行） | ⏳ |
| 4 | Membership 套餐对比页 | preview/ink-east-membership-v1.html | #1 #2 | ⏳ |
| 5a | Reader Notes 组件 stub demo | preview/ink-east-reader-notes-component-v1.html | 无 | ⏳ |
| 5b | /community 聚合页（可选，后期） | preview/ink-east-community-v1.html | 5a | 后期 |
| 6 | Letters 投稿表单 + Thank You | preview/ink-east-letters-form-v1.html | 无 | ⏳ |
| 7 | Custom Ebook Studio 服务详情 | preview/ink-east-custom-ebook-v1.html | #3 | ⏳ |

完工后逐项把状态从 ⏳ 改为 ✓。链接死链未填的不算完工。

**波次划分（推荐节奏）**：
- **Wave 1** (#1 ✓ → #1.5 ✓ → #2 ✓ → #3 → #4)：核心闭环 + 启动核心商业。完成后 paywall 路径活、Custom Reading 可接活。
- **Wave 2** (#5a #6)：互动闭环。
- **Wave 3** (#7)：商业补完，与 #3 互相导流。
- **Backlog**：#5b /community、VIP Paywall 3 状态变体（已合并进 #1 单 guest 状态）。

---

## 任务 1 · article-002-vip 示例 VIP 文章

> ⚠️ **已修订（IA 二分 · 2026-05-25）**：本任务输出文件保留作为 VIP Library 板块的内容容器示例，但 **Issue 001 TOC 接入部分已废止**（见 BRIEF 末尾日志补遗 · VIP 板块独立化）。article-002-vip 改由新 #1.5 VIP Library 索引页链入，**不再从 Issue 001 链入**。

**目标**：仓库里第一篇 VIP 板块文章实物。Reading Room / Membership 都需要它作为内容容器示例。

**前置**：无

**3 件套（用户开窗口前决定）**：
- 核心规格：文章标题（中英）/ Issue 号 / 假摘要 100-150 字 / 是否要 footnote stub。**建议直接对应 BRIEF §7.2 Issue 001 第 6 条 "Control, exhaustion, and the ancient art of not forcing life"**（已预定为 VIP Long Read，天然契合）
- 权限矩阵：未登录 vs 已登录免费 视觉是否完全相同？（默认是，仅按钮文案 "Sign in" ↔ "Sign out" 变化）
- WP 暗示：BLOCK 注释 = `paywall-band-vip` / 是否加 `data-tier="vip"` 属性

**上下游链接**：
- 来：ink-east-issue-001-v1.html TOC 第 6 条（直接占用现有"VIP Long Read"位）
- 去：invitation band 主按钮 → `/reading-room`（#2 完成后激活）/ 副链接 → `/membership`（#4 完成后激活）

**验收**：
- 复用 article-001 的视觉系统（color / 字体 / footer / sidebar）
- guest 看不到正文，只看到标题 + 摘要 + 横向 invitation band 取代正文位置
- band 文案邀请口吻，无价格 / 无 Tier / 无购物按钮
- BLOCK 注释明示 WP 后端契约
- Issue 页第 6 条加 VIP 角标 + 链接（避免新页死链）

---

## 任务 1.5 · VIP Library 索引页（NEW · IA 二分新增）

**目标**：VIP 板块的独立"封面/目录"页。所有 VIP 文章集中在此。public-facing —— 任何人可见标题/简介/类别，但点进每篇 article 时正文被 paywall band 取代。

**前置**：#1（需 article-002-vip 作为板块内首篇文章）

**3 件套**：
- 核心规格：板块定位文案（"VIP Library · 一个独立的小书房"语气）/ 是否按"期"组织（建议：独立的 vol.01 / vol.02 编号系统，与 Issues 主线分开） / 至少 3-5 条 placeholder 文章卡（其中 1 条真链 article-002-vip）
- 权限矩阵：guest / 已登录免费 / Reader / Patron 都看到同一个 catalog；仅"Enter"按钮文案变化（guest = "Enter to subscribe" / 会员 = "Open"）
- WP 暗示：URL = `/vip-library`；自定义 post type `vip_article`；BLOCK 注释 `<!-- BLOCK: vip-library-index -->`

**上下游链接**：
- 来：顶部导航新增 "VIP Library" 项 / Reading Room "VIP Library" section / Membership "会员能看到什么"举例
- 去：每张文章卡 → 单篇 VIP article（首批仅 article-002-vip 真链，其它 placeholder 卡 `#` 死链 + TODO 注释）

**验收**：
- 视觉是"独立的小书房" —— 与 Issues 主线 cover 视觉**有意识地区分**（避免被误以为是 Issue 9 之类）
- catalog 每张卡明示是 VIP（朱砂方印 / "VIP" 角标）
- 不出现"购买 / 升级"等销售感词；最多 "Open" 或 "Enter"
- 与 Reading Room 关系明示：本页 = catalog（公开浏览），Reading Room = 会员中心（含本页入口）
- BLOCK 注释明示 WP 后端契约

---

## 任务 2 · Reading Room VIP 会员中心

**目标**：已登录会员的"我的阅读室"。视觉气质=图书馆/私人书房，**不是 SaaS dashboard**。

**前置**：#1（用作 VIP 板块入口展示样本）

**3 件套**：
- 核心规格：要哪些 section？建议清单 = Welcome back / VIP 板块入口 / Reader Notes 写作入口 / 下期投票（Patron 专属） / 已发出 Letters 状态 / 定制解读优先排队入口
- 权限矩阵：Reader 看到 vs Patron 看到的差异（哪些 section 灰掉/隐藏）；设计稿默认显示 Patron 完整态
- WP 暗示：每个 section 一个 BLOCK 注释

**上下游链接**：
- 来：article-002-vip invitation band 主按钮 / 顶部导航 "Reading Room" / Membership 页 "已是会员? 进 Reading Room"
- 去：每篇 VIP 板块文章 / Letters 历史 / 定制解读入口

**验收**：
- 视觉是"私人书房"不是"账号设置页"
- 含文化锚点（朱砂方印 / 中文章法字体）
- **不出现**"账号余额 / 订阅到期日"等工具型字段（这些是 server-side，设计稿用占位）
- Footer 与其他页面统一

---

## 任务 3 · 定制解读服务页（**真正商业核心**）

**目标**：BRIEF 工作日志 §3 的 Custom Reading Service 详情页 + Submit Brief 表单。**独立于会员系统，不依赖任何前置**——可在 Wave 1 中跟 #1/#2 并行推进。

**前置**：无（独立产品）

**3 件套**：
- 核心规格：表单字段清单（建议 = 古文/神话标题 + 你的迷茫点 + 期望深度 + deadline + 联系方式）
- 权限矩阵：所有人都能提交（包括 guest），不需登录
- WP 暗示：Fluent Forms 后端 / 自定义 post type `custom_reading_project`

**上下游链接**：
- 来：首页 Studio 区块（你定要不要新增独立 "Custom Reading" 区块） / Reading Room "定制解读优先排队"（#2 做完后激活） / 顶部导航
- 去：Submit Brief / Custom Ebook Studio（"想要完整电子书? →" — #7 做完后激活）

**验收**：
- **不塞进 paywall 卡片**（BRIEF 工作日志 §3 强制）
- 不像 Fiverr / 不像电商商品页
- 顶部条款明示"这是定制解读，不是定制电子书"+ 双向链接到 Custom Ebook
- 流程图清楚（即便占位）
- 未来形态（社区联盟营销 / marketplace）淡淡提一下，不主推

---

## 任务 4 · Membership 套餐对比页

**目标**：未会员用户的"为什么加入"页。语气=邀请，**不是促销**。**放在 #2 之后是因为 Reading Room 已存在，本页可截图引用"已是会员? 进 Reading Room"作为真实参考**。

**前置**：#1 #2

**3 件套**：
- 核心规格：是否做退订入口 v1 上 / 价格是显示数字还是 "by donation, optional tier"
- 权限矩阵：guest vs 已登录免费 视觉差异（建议同视觉，按钮文案变化）
- WP 暗示：付款流程 Stripe checkout 还是 Memberful，文案要适配

**上下游链接**：
- 来：article-002-vip 副链接 / 顶部导航 "Membership" / 首页 "Join us" CTA（如有）
- 去：Sign in / Reading Room（已是会员）/ 退订 / Refund 政策

**验收**：
- **没有 Tier 对比卡片**（关键，handoff §3 明示）
- 没有"立即升级 / 选择套餐"按钮 / 没有"推薦"角标
- 文字段落叙述会员意义，不是 bullet checklist
- 价格如显示，标 "占位 / placeholder"
- 与 Reading Room 职责切分清晰：本页=未会员看的销售页，不重复 Reading Room 的内容入口

---

## 任务 5a · Reader Notes 组件 stub demo

**目标**：单独 demo 文件展示评论区视觉规范。后续 article-002-vip / community 聚合页都会引用。

**前置**：无

**3 件套**：
- 核心规格：示例 note 文案（你写或让 agent 编占位）
- 权限矩阵：guest / Reader / Patron / Editor 各看到什么（建议 = guest 只读，输入框显 "Sign in"；Reader+ 可发；Editor 有置顶/隐藏 menu）
- WP 暗示：WP 原生评论 + 自定义模板（BRIEF §六 工程化层指定）

**上下游链接**：
- 来：article-001（已有 stub） / article-002-vip / community 聚合页（5b）
- 去：用户主页（v1 简版） / 单条 note 永久链

**验收**：
- 视觉**不像 Reddit / 贴吧 / 楼中楼**（核心红线）
- 单层回复（A 评论 → B 回复 A，不能再续）
- 无 upvote / downvote / 热榜 / 折叠
- 排序仅 "New" / "Editor's Choice"
- Editor's Choice 有特殊标记

---

## 任务 5b · /community 聚合页（可选 / 后期）

**目标**：聚合全站 Reader Notes + Issue Discussion + Editor's Choice。BRIEF §五 5.2 已规划。

**v1 可不做**——用户量起来再说。先把 5a 做了即可。

---

## 任务 6 · Letters 投稿表单 + Thank You

**目标**：Ask the Ancient Text 投稿入口 + Thank You 状态。

**前置**：无

**3 件套**：
- 核心规格：表单字段（参考 BRIEF §十五）+ 是否显示配额提示（Reader 每月 1 封 / Patron 3 封）
- 权限矩阵：guest 能提交吗（默认能，但限量）
- WP 暗示：Fluent Forms 后端

**上下游链接**：
- 来：首页 Letters 区块 / 顶部导航 "Ask"
- 去：Thank You 状态（同文件用 CSS toggle 模拟）/ Reader Notes 阅读

**验收**：
- 表单**克制 / 安静 / 文学感**（BRIEF §28.5）
- 4 条授权勾选齐全（BRIEF §15.2）
- 服务边界免责声明（不是心理咨询/医疗建议... BRIEF §15.4）
- Thank You 不是普通"提交成功"页，要有刊物气质

---

## 任务 7 · Custom Ebook Studio 服务详情

**目标**：BRIEF §四板块4 + §十七 商业条款的服务页。**与任务 #3 是两个独立产品**（handoff §7）。

**前置**：#3（让两个 Custom 服务先后到位，互相导流）

**3 件套**：
- 核心规格：和 Custom Reading 表单的字段差异（建议 = 项目类型 / 字数预期 / 主题 / 客户素材是否提供）
- 权限矩阵：所有人都能提交
- WP 暗示：Fluent Forms / 自定义 post type `custom_ebook_project`

**上下游链接**：
- 来：首页 Studio 区块 / 顶部导航 / Custom Reading "想要完整电子书? →"
- 去：Submit Brief / FAQ

**验收**：
- 顶部条款明示"这是定制电子书，不是定制解读"+ 双向链接到 Custom Reading
- 9 步流程清楚（BRIEF §17.2）
- 价格起点 by quote，不写死数字
- 版权 / 修改次数 / 交付格式条款明示（BRIEF §17.4-§17.7）
- 按钮 = "Submit Your Brief"，**禁 Add to Cart**

---

## 工作流约定（每开新窗口前）

1. 用户在主窗口里指定要做哪个任务（"我要开任务 #X"）
2. 主 agent 给出 prompt template（含 ROADMAP 第 X 节引用 + handoff 引用 + 3 件套占位符）
3. 用户在新窗口贴 prompt + 自己填的 3 件套答案
4. 新 agent 干活 → commit 到 main → push
5. 用户回到主窗口（任意主窗口，handoff auto-load）报"#X 完成 commit XXX"
6. 主 agent 用 str_replace 把本表 ⏳ 改为 ✓

## 任务之间的强依赖图

```
#1 article-002-vip ✓
  └─→ #1.5 VIP Library 索引页 (NEW · IA 二分)
       ├─→ #2 Reading Room (含 VIP Library 入口)
       └─→ #4 Membership (举例引用)

#3 Custom Reading (independent, can parallel with Wave 1)
  └─→ #7 Custom Ebook（互相导流）

#5a Reader Notes 组件
  └─→ #5b /community（后期）

#6 Letters 表单 — 独立
```
