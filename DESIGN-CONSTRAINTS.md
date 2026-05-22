# Design Constraints · 设计稿约束规范

> **必读** · 所有 AI 助手 / 设计师 / 开发者在为 Spatial Flow 或 Ink & East 项目工作前，必须先读完这份文档。
> 仓库：Th23144/-
> 最后更新：2026-05-22

---

## ⚠️ 这个项目的本质：换皮工程，不是新站

我有一个**已经做完、即将上线、后端功能完整**的 WordPress 网站。
所有 HTML 设计稿的最终目的**不是用来部署**，而是作为**视觉参考**——
等所有设计稿出齐之后，会有专人把这些设计稿上的 CSS / 视觉风格，**移植到现有 WordPress 网站的所有页面（含子页面）**。

### 这意味着：

1. **后端 / 数据库 / 链接结构 / 功能模块 / 表单 / 用户系统 / 支付 / 订单 / 会员系统 / 内容管理 —— 全部不变**
2. **页面版位 / 内容字段 / 信息架构 —— 全部不变**
3. **只换视觉表现层**：颜色、字体、间距、卡片样式、按钮样式、排版、图片处理、图标、动效气质
4. **每个 HTML 设计稿 = 对应一个 WordPress 模板的视觉规范**

---

## ✅ 设计稿必须满足

- **可被翻译成 CSS 覆盖层**：所有视觉表达都能通过 CSS 规则实现，不依赖特殊 HTML 结构
- **保留语义化的 class / 结构标记**：方便后续匹配 WordPress 的 `.product`、`.product-image`、`.cart-item` 等已有 class
- **每个核心组件独立**：产品卡 / 按钮 / 表单 / 导航 / Footer 等都要有清晰边界，方便单独替换
- **设计 token 系统化**：所有颜色、间距、字号都用 CSS 变量（`--paper`, `--ink` 这种）
- **使用语义化 HTML 标签**：`<article>` / `<section>` / `<header>` / `<nav>`
- **响应式三档**：1100 / 720 / 480 断点

## ❌ 设计稿不要做

- 不要用 React / Vue / 复杂 JavaScript 框架
- 不要假设"我们能改 HTML 结构"——现实中 WordPress 模板生成的 HTML 是固定的
- 不要用 JavaScript 实现视觉效果，尽量纯 CSS（hover / focus / 折叠 / 切换用伪类）
- 不要做"完全从零的网站结构"（自定义路由、自定义后端 API）
- 不要写 Buy Now / 立即抢购 / 限时优惠 这种营销话术
- 不要做实时聊天、复杂动画、3D 效果

---

## 🎯 两个项目的实际状态

### Spatial Flow（电商主站）

| 项 | 现状 |
|---|---|
| 状态 | **已开发完成 · 即将上线**(功能齐全、产品已上架、流程跑通) |
| 平台 | WordPress + WooCommerce + CartFlows + Elementor + Astra Child Theme |
| 现有主题 | spatial-flow-astra-child-v1.2-main-journal v1.8.2 |
| 现有产品 | 93 款（手串 61 / 项链 24 / 摆件 / 定制咨询）|
| 现有页面 | Home / Shop / Product 详情 / Cart / Checkout / Thank You / About / Services / FAQ / Contact / Track Order / My Account / Wishlist / DIY 定制 + 法律页 |
| 现有功能 | WooCommerce 订单 + Stripe / WooPayments + YITH Wishlist + 评论 + Joinchat + 邮件订阅 |
| **设计稿用途** | **完成后由开发者把视觉移植到现有 WP 主题，不是用作新站建设** |
| **不能动的东西** | 所有 PHP 模板逻辑、WooCommerce hooks、CartFlows 流程、URL 结构、表单字段 |

### Ink & East（期刊会员社区子站）

| 项 | 现状 |
|---|---|
| 状态 | **博客子站已存在 · 仅有免费文章 · 其他全部待开发** |
| 平台 | WordPress Multisite 子站 + 共用 Astra Child |
| 现有内容 | 113 篇博客文章（5 个分类）+ 4 个页面 |
| **特殊情况** | 跟主站不同：Ink & East 大部分功能（VIP 会员 / Reader Notes / Letters / Custom Ebook Studio / Paywall / Reading Room）**还没开发**，需要在视觉定稿后**新建**这些功能模块 |
| **设计稿用途** | **既是视觉参考，也是产品需求文档**，开发者会按设计稿同时实现新功能和新视觉 |
| **能动的东西** | 子站可以更彻底重做，但要遵守 [INK-EAST-BRIEF.md](./INK-EAST-BRIEF.md) 的所有规格 |

---

## 🔁 区别明确

```
Spatial Flow（电商主站）       →  100% 换皮 · 一根头发都不能动后端
                                   设计稿仅作为视觉规范

Ink & East（期刊子站）         →  视觉 + 部分新功能开发
                                   设计稿是视觉规范 + 产品需求
                                   遵守 INK-EAST-BRIEF.md
```

---

## 🎨 视觉系统速查

### Spatial Flow 主站

```
色板：
- 主背景 #f6f1eb（米色）
- 浅背景 #ede7df（深米）
- 深底   #1f1916（墨黑）
- 强调色 A #a8745c（陶土棕，主要用）
- 强调色 B #4a5d5a（青石绿，少用）

字体：
- 标题 Cormorant Garamond
- 正文 Inter
- 等宽 JetBrains Mono

按钮文案：
- "View piece" / "Add to bag" / "Continue" / "Submit your brief"
- 不叫 Buy Now / 立即抢购 / Add to Cart 这种
```

### Ink & East 子站

```
色板：
- 主纸 #f4ede0
- 浅纸 #faf5e9
- 深纸 #e8dfce
- 墨黑 #1a1611
- 朱砂 #a02d23（唯一强调色）

字体：
- 英文衬线 EB Garamond
- 中文衬线 Noto Serif SC
- 无衬线   Inter
- 等宽     JetBrains Mono

视觉锚点：
- 朱砂方印「墨東」
- 中文数字「壹貳叄肆伍陸」做章节号
- 中英文穿插（古文 + 英译）
```

---

## 📐 工作流约定

1. **不开 feature 分支**，直接 commit 到 main
2. **不开 PR**，直接 push（单人快速迭代流程）
3. **每个页面尽量一个新窗口**（避免上下文爆炸）
4. **写代码不要边写边解释**，做完一次性 git commit + push
5. **每个新窗口先读这份文档** + INK-EAST-BRIEF.md（如果是 Ink & East 任务）

---

## 📝 给新窗口的标准提示词模板

### 通用前缀（所有任务都先发这一段）

```
【先读这一段 · 改造原则】

我有一个已经开发完成、即将上线的 WordPress 网站。
你做的 HTML 设计稿是「视觉皮肤蓝图」，不是用来部署的。
完工后由开发者把 CSS / 视觉风格移植到现有 WordPress 主题。

请遵守 https://github.com/Th23144/-/blob/main/DESIGN-CONSTRAINTS.md
（不要现在去读完整文档，会爆 context，需要时再查指定章节）

简言之：
- 后端 / 链接 / 功能 / 版位 / 内容字段全部不变
- 用 CSS 变量 + 语义化 class，方便覆盖到既有 WP 模板
- 不要用 React / Vue / 复杂 JS 框架，尽量纯 CSS
- 不要重做"功能架构"，只做视觉
- 设计稿是装修效果图，不是新房子

工作流：
- 直接提交到 main，不要开 feature 分支，不要开 PR
- 做完一次性 git commit + push
- 按完成后告诉我推送结果
```

### Spatial Flow 任务后缀

```
任务：Spatial Flow 主站 · [页面名]
仓库：Th23144/-
路径：preview/spatial-flow-[slug]-v1.html

设计系统照搬 preview/spatial-flow-v1.html（V1 首页已做完）。
不要读 V1 的完整 HTML，只参考它的色板和布局。

色板：#f6f1eb / #ede7df / #1f1916 / #a8745c / #4a5d5a
字体：Cormorant Garamond + Inter + JetBrains Mono
按钮："View piece" / "Add to bag"，不叫 "Buy Now"

要求：
[这里写本次要求]
```

### Ink & East 任务后缀

```
任务：Ink & East 子站 · [页面名]
仓库：Th23144/-
路径：preview/ink-east-[slug]-v1.html

设计系统照搬 preview/ink-east-v1.html（首页已做完）
+ preview/ink-east-issue-001-v1.html（Issue 内页已做完）。

色板：#f4ede0 / #faf5e9 / #e8dfce / #1a1611 / #a02d23
字体：EB Garamond + Noto Serif SC + Inter + JetBrains Mono
印记：朱砂方印「墨東」
数字：壹貳叄肆伍陸

要求：
[这里写本次要求]

⚠️ Ink & East 项目有更详细规格在 INK-EAST-BRIEF.md，
   遇到不确定的细节再去查相关章节，不要一次性读完整文档。
```

---

## 💡 一句话总结

> **你做的不是网站，是网站的"视觉皮肤蓝图"。**
> 把它当成给装修队的"装修效果图" —— 房子已经盖好（功能层），地板（CSS）和墙纸（视觉）等你画完之后照着贴。

---

## 📚 项目文档索引

- [INK-EAST-BRIEF.md](./INK-EAST-BRIEF.md) — Ink & East 子站完整产品规格（30 节）
- 本文档 — 设计稿改造原则
- preview/ — 所有 HTML 设计稿存放目录

---

> *Edited slowly, with constraint.*
