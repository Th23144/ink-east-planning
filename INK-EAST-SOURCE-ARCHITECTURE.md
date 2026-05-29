# Ink & East · Source-Native Architecture Baseline

- 本文件是 Project 3 / Ink & East 长期主站级项目的源码站架构基线。
- Ink & East 项目 3 不考虑 WordPress。
- WordPress 只属于项目 1 / 项目 2，不属于项目 3。
- 旧博客 123 篇文章只是内容资产，不是技术基础。
- 之前的 `INK-EAST-WP-FIELD-SCHEMA.md` 和 `INK-EAST-WP-IMPLEMENTATION-PLAN.md` 只能作为历史参考，不再作为项目 3 主线依据。

## 0. Highest Priority Rules

1. Project 3 does not consider WordPress.
2. Do not design around CPT, ACF, WP comments, FluentForm, WP Menus, WP roles, WordPress themes, or WordPress header/footer.
3. Ink & East is a future source-code site, independent content product, and main digital journal system.
4. The old blog’s 123 posts are legacy content assets only.
5. Do not reduce the architecture just to make it easier to land in WordPress.
6. The source-native model is the baseline for future implementation.
7. Spatial Flow / shop belongs to a separate project line and must not define Ink & East’s content architecture.

## 1. Three Project Lines

### Project 1 — Initial WordPress / WooCommerce Launch

- 目标：尽快把现有站上线，服务器、域名、支付、邮件、订单、上线前审计。
- 不属于本文件主线。

### Project 2 — Spatial Flow V2 Visual Replacement

- 目标：第二版视觉替换。
- 包括电商主站和博客子站轻量视觉同步。
- 不开发 Ink & East 长期功能。
- 不属于本文件主线。

### Project 3 — Ink & East Source-Native Main Site

- 目标：源码站 / 主站级数字期刊 / 会员阅读室 / 服务系统 / 长期内容产品。
- 本文件只服务 Project 3。

## 2. Phase 1A · Target Architecture Decision

- Ink & East is the future main site.
- Spatial Flow / shop is the commerce-side support system.
- The old blog is not the architecture foundation.
- The 123 old posts are migration assets.
- Ink & East should be designed as a source-native product.
- The purpose is not fast launch, but long-term correctness.

## 3. Phase 1B · Source-Native Content Model v1

### Layer 1 — Editorial Core

Entities:

- Issue
- Article
- ArticleSection
- ArchiveCollection
- EditorialCategory
- Author
- MediaAsset

### Layer 2 — Reader Interaction

Entities:

- ReaderNote
- Letter
- EditorialResponse
- Vote
- VoteCampaign
- CommunityDigest

### Layer 3 — Membership & Access

Entities:

- User
- MemberProfile
- MembershipPlan
- MembershipSubscription
- AccessPolicy
- ReadingRoomState

### Layer 4 — Service System

Entities:

- ServiceBrief
- CustomReadingRequest
- CustomReadingOutput
- CustomEbookProject
- Quote
- PaymentRecord
- DeliveryRecord

### Layer 5 — Operations & Migration

Entities:

- LegacyArticleRecord
- RedirectRule
- SEORecord
- EditorialTask
- AuditLog
- SystemSetting

These entities do not depend on WordPress.

They can later land in a database, Headless CMS, Markdown / MDX, Payload, Strapi, Directus, Supabase, PostgreSQL, Next.js, Astro, Laravel, or another future implementation path.

The current phase does not choose the technical stack. It fixes the product model and relationships first.

## 4. Key Entity Notes

### Issue

- 一期数字期刊。
- 有 `number`、`slug`、`title`、`theme`、`editor_note`、article list、published status。
- Public Issue 不混 VIP Article。

### Article

- 核心内容单位。
- 旧 123 篇文章未来映射成 Article。
- 支持 visibility：public / reader / patron / private / editor_only。
- VIP 内容不能把完整正文下发给未授权用户。

### ArchiveCollection

- 用来整理旧文章、专题和系列。
- 旧文章不应该杂乱堆在 archive。

### ReaderNote

- 不是普通评论区。
- 是文章下方的安静回应。
- 单层回复，不做 Reddit / Hot / Top / Trending。

### Letter

- 用户给编辑部的来信。
- 是选题、编辑回应、公开文章的来源之一。
- 不是客服工单。

### CustomReadingRequest

- 定制解读服务请求。
- 不是翻译服务。
- 可以变成私人交付，也可以在用户同意后转成 VIP / public 内容。

### CustomEbookProject

- 高客单私人书稿服务。
- 独立于 Custom Reading，不是普通套餐升级。

### MembershipPlan / MembershipSubscription

- Reader / Patron 是支持者身份。
- 不是 SaaS pricing。
- 不围绕 unlock / premium / exclusive / limited time / upgrade 设计。

### LegacyArticleRecord

- 追踪旧 123 篇文章的迁移。
- 每篇旧文章要判断 keep / rewrite / archive / discard。
- 需要建立 redirect strategy。

## 5. Phase 1C · Domain / Routing / Main-Sub Brand Strategy

推荐长期结构：

```text
inkandeast.com
= Ink & East 主站

shop.inkandeast.com
= Spatial Flow / shop 电商副站

inkandeast.com/shop
= 主站到电商的 bridge page 或 redirect
```

推荐主站 URL：

```text
/
/issues
/issues/001
/articles
/articles/:slug
/archive
/collections
/collections/:slug
/topics
/topics/:slug
/vip-library
/vip-library/:slug
/reading-room
/membership
/letters
/letters/write
/custom-reading
/custom-reading/brief
/custom-ebook
/custom-ebook/brief
/community
/about
/search
/legal/privacy
/legal/terms
/legal/refund
/legal/editorial-standards
```

推荐电商副站 URL：

```text
shop.inkandeast.com
shop.inkandeast.com/shop
shop.inkandeast.com/products/:slug
shop.inkandeast.com/cart
shop.inkandeast.com/checkout
shop.inkandeast.com/order-received
shop.inkandeast.com/account
shop.inkandeast.com/wishlist
shop.inkandeast.com/track-order
```

品牌关系表达：

> Ink & East is the journal.  
> Spatial Flow is the shop.

Or:

> Ink & East publishes the questions.  
> Spatial Flow gathers the objects.

## 6. Legacy 123 Articles Strategy

- 旧 123 篇文章不是架构基础。
- 它们是 legacy content assets。
- 不要原样继承旧 Elementor / WordPress 结构。
- 每篇文章未来要进入 LegacyArticleRecord。
- 处理方式：
  - keep
  - rewrite
  - archive
  - discard
- URL 策略：
  - keep → 301 到新 `/articles/:slug`
  - rewrite → 301 到重写后的文章
  - archive → 301 到相关 collection 或 archive
  - discard → 410 或 301 到相关合集，不建议直接 404
- 不要全站粗暴跳首页。

## 7. What This File Replaces

- This file becomes the primary architecture baseline for Project 3.
- It supersedes the WordPress-oriented direction for Project 3.
- It does not delete earlier WordPress planning files, but those files are no longer the source of truth for Project 3.
- WordPress-oriented files may still be useful for Project 1 / Project 2 or historical reference only.

## 8. Next Phase

Phase 1D · Product System / Feature Boundary

要解决：

- Ink & East 到底有哪些产品模块
- 每个模块解决什么问题
- 哪些公开
- 哪些登录
- 哪些会员
- 哪些付费
- 哪些后台审核
- 哪些 MVP
- 哪些长期功能
- 哪些不能和电商混在一起
