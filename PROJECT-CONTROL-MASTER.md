# Spatial Flow / Ink & East · 全项目接手总控文档 v0.3

> 版本：v0.3.1  
> 状态：5 个 Kiro / 分支窗口已按顺序继承后重写  
> 作用：作为 ChatGPT / Codex / Kiro / 后续开发窗口的项目总控基线  
> 注意：本文件不是营销文案，不是页面设计稿，而是项目执行控制文档。

---

## 0. 本文件的来源与使用方式

本文件基于以下 5 个聊天窗口顺序继承后整理：

1. 初始对话窗口  
2. Spatial Flow（电商主站）1 号窗口  
3. Ink & East 1 号窗口  
4. Ink & East 2 号窗口  
5. Ink & East 3 号窗口  

同时结合当前仓库中的：

- `DESIGN-CONSTRAINTS.md`
- `INK-EAST-ROADMAP.md`
- `.kiro/steering/ink-east-handoff.md`
- 当前 GitHub PR 状态
- 当前 ChatGPT 接手过程中的 PR #3 / PR #4 / PR #5 结果

后续任何新窗口、Codex 任务、Kiro 任务、WordPress 工程化任务，都应先读取本文件。

---

## 1. 总核心目标

本项目不是“做几个漂亮 HTML 页面”。

真正目标是：

> 用第二版视觉稿和产品蓝图，升级现有 WordPress 独立站体系。  
> Spatial Flow 电商主站负责产品和轻商业转化。  
> Ink & East 期刊子站负责内容、信任、文化表达、互动、会员和高客单服务。  

最终要形成：

- 一个可运营的高端现代东方空间 / 水晶 / 饰品 / 空间体验电商主站；
- 一个可运营的英文独立数字期刊 / 会员阅读室 / 读者互动 / 定制解读 / 私人书稿服务子站；
- 两者共用同一世界观，但视觉、品牌、功能定位保持清晰区分。


## Project Line Split / 三项目拆分

当前总项目拆成三条线：

1. Project 1 — 初始版网站上线部署
   目标是尽快把现有 WordPress / WooCommerce 旧站上线，完成服务器、域名、HTTPS、支付、邮件、订单测试和上线前清理审计。

2. Project 2 — Spatial Flow V2 第二版视觉替换
   目标是在不破坏 WooCommerce / CartFlows / 支付 / 订单 / URL / 产品数据的前提下，把第二版视觉尽快迁移到现有站。项目 2 可以包含博客子站轻量视觉同步，但不开发 Ink & East 长期功能。

3. Project 3 — Ink & East Source-Native Main Site
   目标是把 Ink & East 设计成未来源码站 / 独立内容产品 / 主站级数字期刊系统。项目 3 不考虑 WordPress，不使用 WordPress 作为过渡方案，不讨论 CPT / ACF / WP comments / FluentForm / WP Menus / WP roles / WordPress theme。旧博客 123 篇文章只是内容资产，不是架构基础。

---

## 2. 项目起源：不要再误解 Ink & East

Ink & East 的起源不是“单纯想做一个文化博客”。

更准确的起点是：

1. 用户已有一个 WordPress / WooCommerce 电商独立站，功能、链接、支付、订单、页面流程基本已经完成。
2. 用户认为旧站视觉不够好，希望在不破坏功能的情况下做第二版视觉升级。
3. 在梳理过程中，用户意识到：如果只有电商主站卖货，品牌厚度和长期信任不够。
4. 真正应该承载长期世界观、东方文化表达、内容信任、用户关系和高客单服务的，是博客子站升级后的期刊型内容站。
5. 因此，Ink & East 从“博客子站”升级为整个品牌体系里的内容主站 / 精神主站 / 期刊母体。

用户在 Kiro 中明确过：

> 对这个独立站，最初动机是 B。  
> 主推的站点应该是博客子站，做成期刊类网站，以带动电商主站。  
> A 和 B 都要，但电商主站是 A（偏轻度），博客子站是 B。

这里的含义：

- 电商主站：轻商业转化，不能硬卖；
- 期刊子站：内容、世界观、信任、文化表达、长期关系；
- 会员和服务：顺着内容信任自然长出来；
- Custom Reading / Custom Ebook：高客单服务，不是硬销售入口。

---

## 3. 两个品牌的关系

### Spatial Flow

关键词：

- 现代东方空间智慧
- 水晶 / 饰品 / 空间物件
- 空间秩序、光线、动线、情绪、环境心理
- 用物件安顿空间
- 电商主站
- 轻商业转化

一句话：

> Spatial Flow = 用物件安顿空间。

### Ink & East

关键词：

- old texts, quiet stories, modern questions
- 古文、旧书、东方思想、道教文化、现代困惑
- 期刊、读者来信、会员阅读室、Reader Notes
- Custom Reading / Custom Ebook Studio
- 用古文安顿心
- 内容主站 / 精神主站 / 文化入口

一句话：

> Ink & East = 用古文安顿心。

### 关系

二者不是完全无关的项目，而是同一世界观的两个出口：

| 项 | Spatial Flow | Ink & East |
|---|---|---|
| 介质 | 物件 / 空间 | 文字 / 期刊 |
| 解决对象 | 空间与身体环境 | 心智、困惑、文化理解 |
| 商业方式 | 商品、饰品、摆件、咨询 | 会员、阅读、定制解读、私人书稿 |
| 视觉 | 温和电商、空间选物 | 纸感期刊、文学、朱砂、古文 |
| 角色 | 轻商业主站 | 内容与精神主站 |

---

## 4. 最深层使命：打破信息牢笼

Ink & East 更深层的使命，不只是“给古文化爱好者一个地方”。

用户在 Kiro 中表达过：

- 中国这些年发展迅速，但西方对中国的印象很多仍停留在上个世纪；
- 不良媒体报道加深误解；
- 旅游博主热潮能改变一些表面认知，但还不够深；
- 用户想“打破这个信息牢笼”，让大家从里到外更深刻地认识这个传承了 5000 年的东方古国。

因此 Ink & East 的深层定位是：

> 用民间、文学化、非宣传口吻、克制高级的英文内容，向海外读者打开中国 / 东方文化的深层理解入口。

注意：

- 不是政府宣传；
- 不是玄学营销；
- 不是廉价国风；
- 不是课程割韭菜；
- 不是普通博客；
- 是独立期刊 / 文化工作室 / 内容品牌 / 服务入口。

---

## 5. 全局硬规则

### 5.1 运营内容不可硬编码

凡是运营内容，最终都不能写死在代码里，必须后台可编辑。

包括但不限于：

- 首页文案
- 按钮文案
- 跳转链接
- 服务说明
- 价格说明
- 会员权益说明
- FAQ
- 表单说明
- Header / Footer 链接
- 法务链接
- CTA
- 推荐文章位
- 会员提示
- Reader Notes / Letters 引导语

可以硬编码的只有：

- 模板结构
- 组件 class
- 数据读取逻辑
- 权限判断逻辑
- 设计 token
- 通用样式
- 后端字段读取方式

### 5.2 所有页面必须串联

静态预览阶段也要尽量形成可点击 demo：

- Home → Shop → Product → Cart → Checkout → Thank You
- Ink & East Home → Issue → Article
- Home / Reading Room / Membership / VIP Library / Custom Reading / Custom Ebook / Community 互相有清晰入口

不要每次靠手输 URL。

### 5.3 AI 不可自由发挥

Codex 5.3 / Kiro / ChatGPT 都不能替用户直接决定视觉最终方案。

尤其不能让 Codex 自由判断：

- 间距是否高级
- footer 是否统一
- 品牌视觉是否成立
- 页面是否可合并
- 是否“差不多”

正确流程：

1. AI 执行指定任务；
2. 创建 PR 或静态预览；
3. 用户肉眼检查；
4. ChatGPT 审 diff / 任务边界；
5. 用户确认后再合并。

---

## 6. 当前 GitHub / PR 状态

### 已合并

- PR #3：`fix(ink-east): post-roadmap consistency sweep 1`
- PR #5：`Prepare membership CTAs for Stripe integration and refine copy across previews`

### 未合并 / 暂停

- PR #4：`fix(ink-east): canonicalize footer links across preview pages`

PR #4 状态：

- 仍 open；
- 暂不合并；
- 原目标是统一 Ink & East 全站 footer；
- 问题是 Custom Ebook 页 footer 虽然结构统一，但视觉间距、logo 节奏、整体 footer 质感未通过人工验收；
- 多轮修复后用户仍觉得“没变化”，因此停止硬调；
- 后续进入 WordPress 工程化 footer 组件阶段时必须优先处理。

固定提醒：

> PR #4 仍然 open，暂不合并。  
> Custom Ebook footer 视觉未通过人工验收。  
> 后续进入 footer / 工程化 / WordPress 子站落地阶段必须优先处理。

---

## 7. Spatial Flow 当前状态

### 7.1 本质

Spatial Flow 是“换皮工程”，不是新站。

已有 WordPress / WooCommerce 真实站点：

- Astra 父主题
- Spatial Flow Astra Child 子主题
- Elementor
- Header Footer Elementor
- CartFlows
- WooCommerce
- YITH Wishlist
- 订单、购物车、结账、产品、页面基本已存在

后续不能动：

- WooCommerce hooks
- CartFlows 流程
- 支付
- 订单
- 产品数据
- URL 结构
- 表单字段
- 后端逻辑

只允许换：

- 颜色
- 字体
- 间距
- 卡片样式
- 按钮样式
- 排版
- 视觉层 CSS
- 必要的轻量模板视觉输出

### 7.2 已完成静态稿

目前已完成核心购物路径静态视觉稿：

- `preview/spatial-flow-v1.html`：Home
- `preview/spatial-flow-shop-v1.html`：Shop archive
- `preview/spatial-flow-product-v1.html`：Product
- `preview/spatial-flow-cart-v1.html`：Cart

已完成：

- V1 视觉系统锁定；
- Home / Shop / Product / Cart header/footer 统一；
- Home → Shop → Product → Cart 点击路径打通；
- Shop 货币符号修正为 `$`；
- 产品按钮用 `View piece` / `Add to bag`，不使用廉价电商词。

### 7.3 未完成静态稿

优先级从高到低：

1. Checkout
2. Thank You
3. DIY Customize
4. Consult / Custom Services
5. Account / Login / Register
6. Wishlist
7. Track Order
8. About
9. Services
10. FAQ
11. Contact
12. Legal pages
13. Search
14. 404

### 7.4 下一步建议

Spatial Flow 下一个最合理任务：

> `preview/spatial-flow-checkout-v1.html`

要求：

- 直接复用 Cart 页 V1-aligned header / footer；
- 不重新设计 header/footer；
- 4 步流程：Address → Shipping → Payment → Review；
- 右侧固定 Order Summary；
- 按钮叫 `Place order →`，不叫 Buy Now；
- 保留 WooCommerce / CartFlows 可映射 class；
- 完成后把 Cart 的 `Go to checkout` 接到新页面。

---

## 8. Ink & East 当前状态


Important correction for Project 3:

`INK-EAST-WP-FIELD-SCHEMA.md` and `INK-EAST-WP-IMPLEMENTATION-PLAN.md` were created during an earlier WordPress-oriented planning pass. They remain in the repository for historical reference, but they are no longer the source of truth for Project 3.

The current source of truth for Project 3 is:

`INK-EAST-SOURCE-ARCHITECTURE.md`

Detailed Phase 1D–1L planning is now stored in:

`INK-EAST-PHASE-1-SOURCE-PLAN.md`

For Project 3:

* `INK-EAST-SOURCE-ARCHITECTURE.md` is the high-level source-native architecture baseline.
* `INK-EAST-PHASE-1-SOURCE-PLAN.md` is the detailed Phase 1 product / data / admin / permission / service / migration / stack / launch planning file.

再次提醒：
Project 3 does not follow the earlier WordPress-oriented architecture.

Project 3 should continue with:

- Phase 1D · Product System / Feature Boundary
- Phase 1E · Source-Code Data Architecture
- Phase 1F · Admin / Editorial CMS Architecture
- Phase 1G · Auth / Membership / Permission Model
- Phase 1H · Reader Notes / Letters / Community System
- Phase 1I · Custom Reading / Custom Ebook Service System
- Phase 1J · Legacy 123 Articles Export & Cleaning Strategy
- Phase 1K · Tech Stack Options
- Phase 1L · Launch Levels

### 8.1 本质

Ink & East 不是单纯换皮。

它是：

- 视觉规范；
- 产品需求文档；
- WordPress 子站新功能蓝图；
- 后续工程化依据。

现有博客子站已有大量免费文章（约 120+ / 113+ 量级），但以下新功能还没真实开发：

- VIP Library
- Reading Room
- Membership
- Reader Notes
- Letters
- Custom Reading
- Custom Ebook Studio
- Paywall
- Stripe / 会员支付
- 权限控制
- 表单工作流

### 8.2 静态 Roadmap 主线已完成

Ink & East Roadmap 主线 8/8 已完成：

1. `article-002-vip` 示例 VIP 文章
2. VIP Library 索引页
3. Reading Room
4. Custom Reading
5. Membership
6. Reader Notes 组件规范
7. Letters 投稿表单 + Thank You
8. Custom Ebook Studio
9. Community 聚合页

静态视觉 / 产品规格层面，Ink & East 主线已经基本成型。

### 8.3 核心 IA

必须长期遵守：

- Public Issues = 免费期刊主线
- VIP Library = 独立会员内容索引
- Reading Room = 已会员的阅读室 / 会员中心
- Membership = 未会员加入前看到的支持者邀请页
- Custom Reading = 核心商业服务之一
- Custom Ebook Studio = 更高客单私人书稿服务
- Community = quiet front porch，不是论坛 feed

### 8.4 VIP / Paywall 原则

必须长期遵守：

- 99% 文章免费；
- VIP 文章是极少数特殊内容；
- VIP 文章不混在 Issue 免费目录里；
- VIP Library 独立；
- VIP 文章整篇属于会员内容；
- 访客看到的 30% 只是 teaser 渲染策略；
- 后 70% 不应下发到浏览器；
- 不要写成“付费解锁这篇文章”。

### 8.5 Membership 原则

Membership 是：

- 支持者身份；
- 参与权；
- 阅读室入口；
- 社群感；
- 更深参与的邀请。

Membership 不是：

- SaaS pricing page；
- 三栏套餐对比；
- 解锁内容销售页；
- 限时优惠；
- 强转化 checkout 页。

禁词 / 高风险词：

- unlock
- premium
- exclusive
- limited time
- now
- today
- Buy Now
- upgrade

### 8.6 Custom Reading 原则

Custom Reading 是核心商业服务。

定位：

> A reading, written for one person.  
> Not a translation. A reading.

它是：

- 一段经典文本 / 古文 / 神话 / 名著 / 东方思想的定制解读；
- 可以由 guest / free / Reader / Patron 提交；
- 不强绑定会员；
- 可以淡淡给予会员 priority / courtesy，但不能成为 membership 主卖点；
- 可让用户选择是否公开成果到 VIP Library；
- 未来可能发展为社区解读 / bounty / marketplace 机制。

### 8.7 Custom Ebook Studio 原则

Custom Ebook 是更高客单、更长周期的私人书稿 / commission 服务。

它不是：

- Custom Reading；
- Membership tier；
- 单篇文章解读；
- 普通 ebook 售卖页；
- Add to Cart 产品页。

它应该保持：

- 高级、克制；
- 长周期；
- 私人书稿；
- Submit Your Brief；
- 不显示具体价格数字，除非后续策略确认；
- 不硬销售。

### 8.8 Reader Notes / Community 原则

Reader Notes：

- 是文章下方的会员写作权 / 评论系统；
- 应基于 WP 原生 comments + 自定义模板；
- 禁用 wpDiscuz / Disqus / Reddit 风；
- 单层 reply；
- 不做 Top / Hot / Best / Trending；
- 不是论坛灌水。

Community：

- 是 quiet front porch；
- 汇集 Reader Notes / Letters / Issue Discussion / Editor’s Choice；
- 不是社交平台 feed；
- 不是 Reddit；
- 不是论坛首页。

### 8.9 Letters 原则

Letters 是：

- 编辑桌上的纸笺；
- 读者问题 / 现实困惑 / 选题来源；
- 可审核后公开；
- 不是 SurveyMonkey；
- 不是客服工单；
- 不是问答社区。

---

## 9. 当前已完成的 post-roadmap 修复

### Fix 1 / PR #3

已完成：

- 首页 Issue TOC 的 VIP Long Read / IA 泄漏清理；
- Reading Room (VIP) 命名统一；
- 首页 Membership 数字价格残留清理；
- Custom Ebook footer 结构初步统一。

### Fix 2B 审查

已完成只读审查：

- 服务边界；
- 定价语言；
- CTA；
- TODO；
- 链接占位；
- Membership / Custom Reading / Custom Ebook 边界。

### Fix 2C / PR #5

已完成并合并：

- 首页 Reading Room 改为 supporter invitation；
- Membership CTA 添加 `data-pending-link` / `aria-disabled`;
- 前台可见 `unlock` 销售语义清理。

### Fix 2D 审查

已完成只读审查：

- 链接 / CTA / 后台可编辑风险；
- 确认下一步应进入 link mapping + field map。

### Fix 2E

尚未开始：

- `INK-EAST-LINK-FIELD-MAP.md`
- 链接映射
- 后台字段模型前置

---

## 10. 接下来推荐执行顺序

### Step 1：把本总控文档写入 GitHub

文件名：

- `PROJECT-CONTROL-MASTER.md`

状态：

- 本文件即为 v0.3；
- 建议提交到 main 或单独 docs PR；
- 用作后续 source of truth。

### Step 2：Fix 2E 文档任务

创建：

- `INK-EAST-LINK-FIELD-MAP.md`

内容：

- `href="#"` 映射；
- `data-pending-link` 映射；
- future target；
- WP field/source；
- permission/role；
- launch blocker；
- backend editable fields；
- WordPress data model proposal。

### Step 3：Fix 2F 字段模型

创建：

- ACF Options schema
- CPT schema
- Taxonomy schema
- Role / permission matrix
- Stripe field map
- Form endpoint map

### Step 4：Ink & East WordPress 工程化总计划

输出：

- template-parts
- shared header/footer
- global CSS
- page templates
- CPT templates
- permissions
- forms
- membership
- payment
- migration from existing posts

### Step 5：Spatial Flow 静态稿补齐

下一页：

- Checkout
- Thank You
- DIY Customize

### Step 6：Spatial Flow 真实 WP 换皮工程

前提：

- 不动后端；
- 不动 WooCommerce；
- 不动 CartFlows；
- 不动真实支付；
- 只迁移视觉层。

### Step 7：上线前最终清理审计

必须放在最后上线服务器前执行，不要提前删。

内容包括：

- 无用菜单；
- 无入口页面；
- 测试页面；
- 废弃插件；
- 旧代码包；
- 未使用模板；
- 测试订单；
- 测试数据；
- 重复页面；
- 无用媒体；
- 链接死链；
- SEO；
- 法务；
- 支付；
- 邮件；
- 会员权限；
- 表单；
- 移动端；
- 备份 / 回滚。

---

## 11. Codex / Kiro / ChatGPT 分工

### Codex 适合

- 搜索；
- 只读审查；
- 批量替换；
- 新建文档；
- 加属性；
- 机械性一致性修复；
- 创建 PR。

### Codex 不适合

- 自由判断视觉；
- 调间距；
- 判断高级感；
- 决定 footer 是否统一；
- 决定品牌方向；
- 大范围重构。

### Kiro / Claude 适合

- 视觉设计；
- 高保真静态稿；
- 产品文案初稿；
- 页面结构探索；
- 复杂前端感觉。

### ChatGPT 当前角色

- 总控；
- 审查；
- 分解任务；
- 写 Codex prompt；
- 审 PR；
- 记录遗留问题；
- 防止偏航；
- 把静态稿转 WordPress 工程化路线。

### 用户角色

- 最终审美判断；
- 合并 PR 前人工验收；
- 业务方向拍板；
- 确认哪些文案 / 服务 / 收费策略可以上线；
- 提供真实 WP 文件 / 截图 / 后台信息。

---

## 12. 大文件处理规则

任何 ≥300 行文件，不建议主窗口直接全文读。

推荐方式：

1. 先让子任务 / 工具做摘要；
2. 输出 60-80 行结构化提纲；
3. 主窗口再基于提纲判断；
4. 必要时只精读关键行。

重要纪律：

> 如果使用 Kiro 的 invoke_sub_agent，不要在同一批 tool call 里并行 read_files / grep_search。  
> 否则主窗口仍会被大文件撑爆，委派失效。

---

## 13. 不可忘记的遗留问题清单

### L1：PR #4

- open；
- 不合并；
- Custom Ebook footer 视觉未通过；
- 工程化 footer 组件阶段必须处理。

### L2：运营内容后台可编辑

- 所有运营文案 / 链接 / 价格 / CTA / footer / FAQ / 表单说明，最终必须字段化。

### L3：Ink & East 工程化尚未开始

- 静态稿完成，不等于真实站完成。

### L4：Spatial Flow 真实换皮尚未开始

- 静态稿完成 Home / Shop / Product / Cart，不等于真实 WP 已换皮。

### L5：Ink & East 现有博客内容迁移

- 现有博客子站已有 100+ 文章；
- Community / Archive / Field Notes 不是空站假设；
- 工程化时必须考虑现有内容映射。

### L6：PR / 合并纪律

- 视觉任务不能让 Codex 自己判定完成；
- 必须用户预览；
- 必须保留回滚；
- 不满意不要硬合并。

---

## 14. 距离成品的真实估算

> 重要纠偏：这里必须分层估算。  
> `INK-EAST-ROADMAP.md` 的 8/8 完成，只代表 **静态 preview 页面 / 产品规格主线** 完成，不代表真实 WordPress 站点接近上线。  
> 不能把“静态稿完成度”和“真实可上线工程完成度”混在一起。

### Ink & East 静态视觉 / 产品蓝图

约 70%-85%。

原因：

- Roadmap 8/8 已完成，主要 preview 页面已经覆盖 Home / Issue / Article / VIP Library / Reading Room / Membership / Custom Reading / Custom Ebook / Letters / Reader Notes / Community；
- post-roadmap P0 问题已修一部分；
- 但 PR #4 footer 视觉未通过，链接仍有占位，表单仍是静态，文案和服务边界仍需要上线前审查；
- 所以它只能算“视觉与产品蓝图比较完整”，不能算“上线站点接近完成”。

### Ink & East 真实 WordPress 可上线工程

约 15%-25%。

原因：

- 当前还没有真实 WordPress 模板、后台字段、会员权限、Stripe、表单、Reader Notes、Letters、Custom Reading / Custom Ebook 工作流、VIP server-side paywall、现有 100+ 文章迁移 / 映射；
- `INK-EAST-LINK-FIELD-MAP.md`、`INK-EAST-WP-FIELD-SCHEMA.md`、`INK-EAST-WP-IMPLEMENTATION-PLAN.md` 只是工程化前置文档，不是工程完成；
- 下一步必须先做真实 WordPress 现状只读审计，不能直接开始开发。

### Spatial Flow 静态视觉稿

约 35%-45%。

原因：

- Home / Shop / Product / Cart 完成；
- Checkout / Thank You / DIY / Account / Wishlist / Track Order / Services / About / FAQ / Contact / Legal / Search / 404 等页面仍未完成；
- 距离“完整替换旧站视觉”仍有明显距离。

### Spatial Flow 真实 WordPress 换皮工程

约 0%-10%。

原因：

- 当前主要仍是静态视觉稿；
- 尚未把第二版视觉迁移到真实 WordPress / WooCommerce 子主题；
- 真实迁移时还必须确保 WooCommerce、CartFlows、支付、订单、URL、表单、后台逻辑不被破坏。

### 整体最终上线成品

约 20%-30%。

原因：

- 两个站的视觉和产品方向已经清晰；
- 但真实 WordPress 工程、会员 / 支付 / 表单 / 权限 / 内容迁移 / SEO / 法务 / 邮件 / 移动端回归 / 上线前清理审计仍未完成；
- 当前不能进入“快上线”判断，也不能跳过真实 WordPress 当前状态审计。

---

## 15. 下一条推荐任务

截至 v0.3.1：

- `PROJECT-CONTROL-MASTER.md` 已写入 GitHub；
- `INK-EAST-LINK-FIELD-MAP.md` 已创建；
- `INK-EAST-WP-FIELD-SCHEMA.md` 已创建；
- `INK-EAST-WP-IMPLEMENTATION-PLAN.md` 已创建；
- PR #4 仍保持 open，暂不合并。

下一条推荐任务不是继续新建抽象文档，也不是直接开始 WordPress 工程。

真正下一步应是：

> Ink & East · Phase 0 · Current WordPress Read-only Audit  
> 产物：`INK-EAST-WP-CURRENT-STATE-AUDIT.md`

前提：必须拿到真实 / 本地 WordPress 项目环境、主题文件、插件状态、页面/文章/菜单结构，或让 Codex 在真实 WP 项目中执行只读扫描。

Phase 0 只允许只读：

- 不改文件；
- 不改数据库；
- 不装插件；
- 不启用/停用插件；
- 不改主题；
- 不改菜单；
- 不改页面；
- 不删除任何东西。

---

## 16. 最终执行原则

以后每次新任务开始前，都应先复述：

> 当前基线：  
> `PROJECT-CONTROL-MASTER.md`、`INK-EAST-LINK-FIELD-MAP.md`、`INK-EAST-WP-FIELD-SCHEMA.md`、`INK-EAST-WP-IMPLEMENTATION-PLAN.md` 为准。  
> PR #4 暂不合并，Custom Ebook footer 视觉未通过。  
> Spatial Flow 是换皮工程，不动后端。  
> Ink & East 是视觉 + 新功能工程化。  
> 所有运营内容最终必须后台可编辑。  
> Roadmap 8/8 只代表静态 preview / 产品规格主线完成，不代表真实 WordPress 站点接近上线。  
> 真实 WordPress 工程前必须先做当前站点只读审计。  
