# Ink & East · Phase 1 Source-Native Plan

- 本文件是 Project 3 / Ink & East 长期主站级项目的 Phase 1 详细规划。
- 本文件延续 `INK-EAST-SOURCE-ARCHITECTURE.md`。
- Project 3 不考虑 WordPress。
- Project 3 不使用 WordPress 作为过渡方案。
- Project 3 是源码站 / 独立内容产品 / 主站级数字期刊系统。
- 旧博客 123 篇文章只是 legacy content assets。
- 本文件覆盖 Phase 1D–1L。
- Phase 1A–1C 已在 `INK-EAST-SOURCE-ARCHITECTURE.md` 中建立基线。

## 0. Scope

This document covers:

* Phase 1D · Product System / Feature Boundary
* Phase 1E · Source-Code Data Architecture
* Phase 1F · Admin / Editorial CMS Architecture
* Phase 1G · Auth / Membership / Permission Model
* Phase 1H · Reader Notes / Letters / Community System
* Phase 1I · Custom Reading / Custom Ebook Service System
* Phase 1J · Legacy 123 Articles Export & Cleaning Strategy
* Phase 1K · Tech Stack Options
* Phase 1L · Launch Levels

Do not include WordPress implementation mapping.
Do not reduce the architecture to fit WordPress.
Do not make Project 3 dependent on Spatial Flow / shop.

## 1. Phase 1D · Product System / Feature Boundary

Ink & East is not a single blog or a single membership site. It is a long-term content product with five product layers:

1. Public Editorial Layer
2. Member Reading Layer
3. Reader Interaction Layer
4. Service / Studio Layer
5. Commerce Bridge Layer

### Product modules

| Module | What it solves | Who it is for | Requirement | Phase | What it must not become |
|---|---|---|---|---|---|
| Public Journal / Public Reading | Establishes the public editorial voice and trust surface. | Visitors, search readers, returning readers. | Public; no login; no payment; editorial publishing only. | MVP | A generic blog feed or SEO content farm. |
| Issues | Gives the journal a periodic editorial structure. | Visitors, Readers, Patrons, editors. | Public shell; article access varies; editorial control required. | MVP | A WordPress category archive or marketing landing page. |
| Articles | Holds the core written units of the product. | All readers, with access varying by visibility. | Public / membership depending on article; server-side access rules. | MVP | A loose post type constrained by legacy blog structure. |
| Archive / Collections / Topics | Organizes old and new material into meaningful editorial paths. | Visitors, readers, editors. | Public browsing; editorial taxonomy; SEO records. | MVP | Automatic old category dumping. |
| VIP Library | Houses member-only long-form or deep materials. | Reader / Patron members. | Login + membership; server-side protection. | Later phase | A hard-sell paywall or discount bundle. |
| Reading Room | Creates a focused member reading environment. | Reader / Patron members. | Login + membership; reserved states. | Later phase | A social network or noisy dashboard. |
| Membership | Defines supporter access and relationship tiers. | Readers, Patrons. | Login, subscription, access policy, payment later. | Later phase | A SaaS pricing ladder or forced upgrade system. |
| Reader Notes | Allows quiet article-side responses. | Reader / Patron members. | Login + write permission + moderation. | Later phase placeholder | Ordinary comments, Hot / Top / Trending, or Reddit behavior. |
| Letters | Gives readers a low-barrier way to write to the editors. | Visitors, users, members. | Public submission; private by default; moderation and consent. | MVP simple version | Customer support tickets or forced sales leads. |
| Community | Curates selected reader interaction into editorial digest form. | Readers, Patrons, public readers where selected. | Moderation, editorial selection, consent. | Phase 3 | A forum, live feed, or engagement-maximization product. |
| Custom Reading | Captures private brief-first reading requests. | Visitors, users, members, clients. | Brief submission; review before payment; privacy controls. | MVP brief; operations later | Translation, fortune telling, advice, cart product, or member perk. |
| Custom Ebook | Captures high-ticket private manuscript inquiries. | Service clients. | Brief submission; review; quote; private project controls. | MVP brief; operations later | Downloadable ebook product or Custom Reading upgrade plan. |
| Shop Bridge | Connects readers to the commerce side when appropriate. | Visitors and readers who want objects / shop context. | Public bridge link or page; no control over journal architecture. | MVP | The controller of the main site, cart, checkout, or content model. |
| Account / Identity | Provides identity for future membership, service status, and permissions. | Users, members, service clients, staff. | Login and role model when needed; separate from shop account. | Reserved / Phase 2 | Mandatory early account unification with the shop. |
| Editorial Admin | Enables non-developer editorial and operations work. | Editors, admins, service managers. | Role-based admin, audit where private data exists. | MVP | A developer-only content editing workflow. |

### Key boundaries

* Public Journal builds trust.
* Issues / Articles are the editorial core.
* Archive / Collections / Topics organize content.
* Letters are low-barrier reader interaction.
* Custom Reading / Custom Ebook are commercial services.
* Membership / Reading Room / VIP Library / Reader Notes deepen reader relationship.
* Community is later curated aggregation, not a forum.
* Shop Bridge only connects to the commerce side and must not control the main site.

### MVP recommendation

* Prioritize Public Editorial + Services.
* Membership / Reading Room / Reader Notes / Community can come later.

## 2. Phase 1E · Source-Code Data Architecture

### Data domains

1. Content Domain
2. Access Domain
3. Interaction Domain
4. Service Domain
5. Payment Domain
6. Editorial Workflow Domain
7. Migration Domain
8. System Domain

### Core tables / collections

Content Domain:

* issues
* articles
* article_sections
* archive_collections
* editorial_categories
* authors
* media_assets
* seo_records

Access Domain:

* users
* roles
* user_roles
* membership_plans
* membership_subscriptions
* access_policies
* reading_room_states

Interaction Domain:

* reader_notes
* letters
* editorial_responses
* vote_campaigns
* vote_choices
* votes
* community_digest_items

Service Domain:

* service_briefs
* custom_reading_requests
* custom_reading_outputs
* custom_ebook_projects
* quotes
* delivery_records

Payment Domain:

* payment_records
* invoices
* subscription_events

Editorial Workflow Domain:

* editorial_tasks
* review_records
* audit_logs

Migration Domain:

* legacy_article_records
* redirect_rules
* import_batches

System Domain:

* system_settings
* navigation_items
* email_templates

### Key architecture boundaries

* Article content and access control must be separated.
* Membership payment and service payment must be separated.
* Ink & East payment must not be mixed with shop product checkout.
* Reader Notes are not ordinary comments.
* Letters are not support tickets.
* Legacy articles and new Articles must be tracked separately.
* SEO and redirect management must be first-class data structures.

### MVP data set

* articles
* issues
* archive_collections
* editorial_categories
* authors
* media_assets
* seo_records
* letters
* service_briefs
* custom_reading_requests
* custom_ebook_projects
* legacy_article_records
* redirect_rules
* editorial_tasks
* system_settings

### Phase 2 data set

* users
* roles
* membership_plans
* membership_subscriptions
* access_policies
* reading_room_states
* payment_records
* quotes
* delivery_records
* custom_reading_outputs

### Phase 3 data set

* reader_notes
* editorial_responses
* vote_campaigns
* votes
* community_digest_items
* full audit logs

## 3. Phase 1F · Admin / Editorial CMS Architecture

Ink & East must have a real Editorial CMS. It cannot become a source-code site where every content edit requires a developer.

### Recommended admin navigation

* Dashboard
* Editorial
* Issues
* Articles
* Collections
* Topics
* Letters
* Reader Notes
* Membership
* Services
* Legacy Migration
* SEO & Redirects
* Media
* Users
* Settings
* Audit Logs

### First admin priorities

MVP must have:

* Dashboard
* Issues
* Articles
* Collections
* Topics
* Letters
* Services
* Legacy Migration
* SEO & Redirects
* Media
* Settings

Phase 2:

* Membership
* Users
* Payments
* Quotes
* Deliveries
* full Audit Logs

Phase 3:

* Reader Notes
* Community
* Votes
* Advanced analytics

### Key conclusions

* The first admin system should serve content publishing, service operations, and legacy article migration.
* Membership, Reader Notes, and Community can come later but must have reserved architecture.
* SEO and Redirects must not be an afterthought.
* Private service briefs and payment data require role-based access and audit logs.

## 4. Phase 1G · Auth / Membership / Permission Model

### Identity levels

* Visitor
* FreeUser
* Reader
* Patron
* ServiceClient
* Writer
* Editor
* ServiceManager
* Admin

### Core judgments

* User is not equal to Member.
* Member is not equal to ServiceClient.
* Service payment is not equal to membership payment.
* Ink & East account is not equal to shop account.
* VIP content must be protected server-side.
* Reader Notes write permission and reading permission are separate.
* Canceling membership must not delete user-owned content.
* Private service content must have owner-only access control.

### Permission boundaries

Visitor can:

* read public articles
* read public issues
* browse archive / collections / topics
* submit Letters
* submit Custom Reading brief
* submit Custom Ebook brief
* view VIP teaser
* visit Shop Bridge

Visitor cannot:

* read full VIP content
* write Reader Notes
* enter full Reading Room
* vote
* view private service status

Reader can:

* read VIP content
* enter Reading Room
* write Reader Notes
* view member context

Patron can:

* do everything Reader can
* participate in Patron vote
* help shape future questions

ServiceClient:

* can be Visitor / FreeUser / Reader / Patron
* is a commercial status, not a membership tier

### Shop account strategy

* short to mid term: Ink & East account and shop account stay separate
* long term: reserve linked_shop_account_id
* do not force account unification early

### VIP article rule

* unauthorized responses must not include full body
* only title / deck / teaser / membership invitation can be returned

## 5. Phase 1H · Reader Notes / Letters / Community System

### Three-layer interaction system

1. Reader Notes
2. Letters
3. Community

### Core boundaries

* Reader Notes are not ordinary comments.
* Letters are not customer support tickets.
* Community is not a forum.
* Patron Vote is not content democracy.
* Custom Reading is not a forced paid upgrade from Letters.
* All public interaction requires moderation and editorial order.
* Private content cannot be published without consent.

### Reader Notes

* article-side quiet responses
* write permission: Reader / Patron
* one-level replies only
* moderation required
* Editor’s Choice supported
* no Hot / Top / Trending / Reddit behavior

### Letters

* low-barrier submission from Visitor / User / Member
* default private
* consent_to_publish required
* consent_to_edit required for public adaptation
* can generate EditorialResponse or Article

### Community

* curated aggregation
* selected Reader Notes
* answered Letters
* Issue discussion highlights
* Patron vote summaries
* not a live feed
* not a forum
* full version should be Phase 3

### Patron Vote

* Patron-only participation
* editor holds final decision
* vote shapes questions, not content control

### MVP

* Letters simple version
* Custom Reading / Custom Ebook brief
* Reader Notes placeholder
* Community can wait

## 6. Phase 1I · Custom Reading / Custom Ebook Service System

### Core principles

Service system must be:

* brief-first
* review-before-payment
* quote-based
* privacy-first
* editorially aligned
* separate from shop checkout
* separate from membership

### Custom Reading

* private written reading for one question, one text, or one personal difficulty
* not translation
* not fortune telling
* not medical, legal, financial, or psychological advice
* not a product cart item
* not a membership benefit

Custom Reading flow:

received
→ reviewing
→ accepted / declined
→ quoted
→ quote_accepted / quote_declined
→ paid
→ writing
→ delivered
→ publication_decision
→ archived

### Custom Ebook

* private manuscript project
* high-ticket
* long-cycle
* not a downloadable ebook product
* not a Custom Reading upgrade plan

Custom Ebook flow:

inquiry
→ reviewing
→ discovery
→ quoted
→ quote_accepted
→ deposit_paid
→ outlining
→ drafting
→ review
→ revision
→ final_payment
→ delivered
→ archived

### Shared service structures

* ServiceBrief
* Quote
* PaymentRecord
* DeliveryRecord
* AuditLog
* EmailNotification

### Critical boundaries

* services do not require membership
* membership does not include free services
* service payment does not equal shop order
* private service content is private by default
* publication requires explicit consent
* high-ticket services need scope, rights, revision rounds, delivery records

## 7. Phase 1J · Legacy 123 Articles Export & Cleaning Strategy

### Core principles

* Old 123 posts are legacy content assets.
* They are not architecture foundation.
* Do not inherit old categories as final topics.
* Do not keep old builder HTML as final content.
* Do not bulk publish all old articles.
* Each old article needs keep / rewrite / archive / discard decision.
* Each valuable old URL needs redirect mapping.

### LegacyArticleRecord must track

* legacy_id
* legacy_url
* legacy_slug
* legacy_title
* legacy_body_raw
* legacy_category
* legacy_tags
* has_builder_markup
* content_quality
* migration_status
* new_article_id
* redirect_rule_id
* editor_notes

### Decision types

* keep
* rewrite
* archive
* discard

### Scoring dimensions

* Topic Fit
* Editorial Quality
* Evergreen Value
* Rewrite Potential
* SEO Value
* Brand Risk
* Cultural Depth
* Service Relevance

Old category mapping should be editorial, not automatic.

New topic examples:

* Old Texts
* Quiet Stories
* Space & Ritual
* Mind & Emotion
* Eastern Thought
* Objects & Meaning
* Modern Questions

### Redirect strategy

* keep → 301 to new /articles/:slug
* rewrite → 301 to rewritten article
* archive → 301 to collection or archive
* discard → 410 or 301 to related collection
* do not redirect everything to homepage

### Migration batches

* Batch 1: 10–20 core keep/rewrite articles
* Batch 2: 20–40 collection-ready articles
* Batch 3: archive articles
* Batch 4: discard / no-migrate

## 8. Phase 1K · Tech Stack Options

### Candidate routes

1. Next.js + Payload CMS + PostgreSQL
2. Astro + Payload CMS + PostgreSQL
3. Next.js + Directus + PostgreSQL
4. Next.js + Supabase + custom admin
5. Next.js / Astro + Strapi
6. Laravel full-stack
7. Pure Markdown / MDX static site

### Current recommendation

First candidate:

* Next.js + Payload CMS + PostgreSQL

Second candidate:

* Astro + Payload CMS + PostgreSQL

Third candidate:

* Next.js + Directus + PostgreSQL

Next.js + Payload + PostgreSQL is currently the strongest candidate because:

* source-native
* real CMS/admin
* content model can map to collections
* access control can support membership and private content
* services can have status workflows
* legacy migration can be modeled
* data remains owned and exportable
* does not depend on WordPress

### Not recommended for the first path

* pure Markdown static site as full system
* Supabase + completely custom admin as first path unless accepting high admin development cost
* microservice complexity too early
* putting shop inside Ink & East main system

### Notes

* Phase 1K is not final stack lock-in.
* Final choice should happen after Launch Levels and before Level 1 Architecture Prototype.

## 9. Phase 1L · Launch Levels

### Level 0 · Architecture Baseline

* Phase 1A–1L
* planning complete
* no public launch

### Level 1 · Architecture Prototype

目标：

* verify source-native structure
* test Issue / Article / Collection
* test basic CMS
* test route structure
* test 3–5 legacy article imports

包含：

* homepage skeleton
* /issues
* /issues/001
* /articles/:slug
* /archive
* /collections/:slug
* /topics/:slug
* basic admin login
* basic Article / Issue / Collection creation
* basic SEO fields
* 3–5 legacy article samples

不包含：

* final visual
* full membership
* full payment
* Reader Notes
* full Community
* full service automation
* full 123 article migration

估算：
3–6 weeks

### Level 2 · Content Alpha

目标：

* internal usable content system

包含：

* full homepage draft
* Issue 001
* Article page
* Archive
* Topics
* Collections
* About
* simple Search
* basic Legal pages
* Editorial Admin v1
* SEO manager
* Redirect manager
* Legacy Migration workspace v1
* 10–20 old article samples
* Letters simple version
* Custom Reading page + brief
* Custom Ebook page + brief
* Shop Bridge

估算：
2–3 months after Level 1

### Level 3 · Public Soft Launch

目标：

* publicly accessible content main site

包含：

* final homepage
* Issue 001 live
* 10–30 quality articles
* Archive / Topics / Collections
* Letters submission
* Custom Reading brief
* Custom Ebook brief
* Shop Bridge
* About / Legal / Privacy / Terms / Editorial Standards
* SEO basics
* sitemap
* canonical
* OG image
* first redirect batch
* basic email notifications
* analytics

可以暂不包含：

* membership payment
* Reading Room full version
* VIP Library full version
* Reader Notes write feature
* Community full version
* Patron Vote
* online service payment
* full 123 article migration

估算：
4–6 months from real development start

### Level 4 · Commercial Launch

目标：

* paid membership and service operations

包含：

* Membership
* Reader / Patron
* subscription status
* Reading Room
* VIP Library
* Custom Reading quote / payment / delivery
* Custom Ebook quote / deposit / delivery
* PaymentRecord
* email notification nodes
* private delivery page
* basic account system
* users can view service request status
* privacy and refund rules

估算：
8–12 months from real development start

### Level 5 · Mature Source Product

目标：

* complete long-term content product

包含：

* complete Editorial CMS
* complete Legacy Migration system
* most of 123 old articles processed
* advanced search
* Reader Notes full version
* Community full version
* Patron Vote
* full service project management
* staged payments
* DeliveryRecord full support
* Audit Logs complete
* advanced permission system
* optional shop account linking
* optional multilingual support
* newsletter / email system
* content recommendation
* analytics
* long-term SEO workflow

估算：
12–18 months or longer

### Final launch strategy

* Do not start with Level 4.
* First verify architecture.
* Then content system.
* Then public soft launch.
* Then commercial layer.
* Then mature source product.

## 10. Phase 1 Conclusion

Phase 1 is complete when this document is merged.

Phase 1 establishes:

* Project 3 source-native direction
* content model
* route strategy
* product boundaries
* data architecture
* admin architecture
* membership/permission model
* interaction model
* service model
* legacy migration strategy
* tech stack options
* launch levels

Next after Phase 1:

* Decide whether to start Phase 2A · Technical Stack Final Decision
* Do not write code before confirming stack and Level 1 scope
* Codex should only be used for execution after architecture is confirmed
