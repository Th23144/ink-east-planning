# Ink & East · Link & Backend Field Map

> 版本：v0.1  
> 状态：Fix 2E 文档任务  
> 目的：把当前静态 preview 页面中的链接、CTA、占位、运营文案、后台字段需求，映射到未来 WordPress 工程化实现。  
> 基线：`PROJECT-CONTROL-MASTER.md`  

---

## 0. Current Status

This document maps current static preview links and operational content to future WordPress fields.

Current project state:

- `PROJECT-CONTROL-MASTER.md` has been created and should be treated as the current project control baseline.
- PR #3 has been merged.
- PR #5 has been merged.
- PR #4 remains open and unmerged because the Custom Ebook footer failed manual visual review.
- Static preview HTML is not the final implementation source.
- WordPress implementation must centralize operational content in backend-editable fields.

Important global rules:

- Spatial Flow is a visual skin replacement project. Do not alter WooCommerce / CartFlows / payment / order / URL / backend logic.
- Ink & East is a visual + new feature engineering project.
- Any operational copy, CTA label, service explanation, price explanation, membership explanation, footer link, form description, legal link, and navigation item must eventually be backend-editable.
- Do not copy static HTML into production as final architecture.
- Header and footer must become shared template parts or backend-managed menus/options.

---

## 1. Launch-Blocking Link Map

These links or flows must be mapped before production launch. Some can remain as preview placeholders, but they cannot remain dead or hardcoded in production.

| Area | Current label | Current target | Future target | WP field / source | Permission / role | Launch blocker | Notes |
|---|---|---|---|---|---|---|---|
| Membership | Become a member | `href="#"` + `data-pending-link` | Stripe checkout selector or membership landing flow | Stripe / payment setting + ACF Options | Guest / free user | Yes | Must not use fake Stripe URL. Environment-aware Price ID mapping required. |
| Membership | Join as a Reader | `href="#"` + `data-stripe-plan="reader"` | Stripe Checkout Session for Reader tier | Stripe / payment setting | Guest / free user | Yes | Price ID should live in backend config, not template. |
| Membership | Join as a Patron | `href="#"` + `data-stripe-plan="patron"` | Stripe Checkout Session for Patron tier | Stripe / payment setting | Guest / free user | Yes | Same as Reader; must support staging/live switch. |
| Membership account | Cancel here | `href="#"` + `data-pending-link` | Billing portal cancellation route | Stripe / payment setting | Reader / Patron | Yes | Should route to Stripe Billing Portal or account page. |
| Membership account | Restore an old account | `href="#"` + `data-pending-link` | Account restore / support flow | Launch config / account route | Former member / user | Yes | Needs final account lifecycle decision. |
| Membership legal | Refund | `href="#"` + `data-pending-link` | Refund policy page | ACF Options / legal_links | All users | Yes | Legal page must exist before launch. |
| Membership legal | Membership terms | `href="#"` + `data-pending-link` | Membership terms page | ACF Options / legal_links | All users | Yes | Legal page must exist before launch. |
| Sign in | Sign in | `/wp-login.php` | Native WP login or custom login page | ACF Options / Launch config | Guest | Yes | Decide whether to keep native WP login or create branded login route. |
| Sign in | Account / Enter Reading Room | Mixed preview links | Account / Reading Room route | ACF Options + user role logic | Free / Reader / Patron | Yes | Logged-in behavior must be role-aware. |
| Reading Room | Vote · Patrons only | `href="#"` or placeholder | Patron vote form / issue voting endpoint | Form plugin setting + user role / capability | Patron | Yes | Must be permission-gated; not a public form. |
| Reader Notes | Submit / write note | Preview component only | WP comment form with custom template | Template logic + user role / capability | Reader / Patron | Yes | Must decide whether free users can read but not write. |
| Reader Notes | Login CTA | `/wp-login.php` or `#` | Login route with redirect back | ACF Options / Launch config | Guest | Yes | Needs redirect target and permission message. |
| Letters | Submit a letter / Ask the Ancient Text | Preview form only | Real form endpoint | Form plugin setting | Guest / free / member | Yes | Needs spam control, moderation, consent fields. |
| Custom Reading | Submit a brief | Anchor / preview form | Real brief submission form | Form plugin setting + service_cta_links | Guest / free / Reader / Patron | Yes | Must remain open to non-members unless strategy changes. |
| Custom Ebook | Submit your brief | Anchor / preview form | Real ebook brief submission form | Form plugin setting + service_cta_links | Guest / free / Reader / Patron | Yes | Separate from Custom Reading; do not merge forms unless explicitly designed. |
| Custom Ebook | Process & Pricing | Page anchor | Custom Ebook process section or service info page | ACF Options / CPT field | All users | Yes | Must be editable because service scope/pricing will change. |
| Home | All public entries | `href="#"` | Public archive page | WP archive / CPT archive / ACF Options | All users | Yes | Needs archive route before launch. |
| Home | All letters | `href="#"` | Letters archive or Community `#letters` | CPT archive / Form plugin / ACF Options | All users | Yes | Must decide whether letters are CPT or curated content. |
| Home | Full archive | `href="#"` | Full archive / issues archive | WP archive / CPT archive | All users | Yes | Required for production navigation. |
| VIP Library | Locked VIP card button | `href="#"` | VIP article URL + permission gate | CPT field + visibility_level taxonomy | Guest / free / Reader / Patron | Yes | Do not keep pure `#`; should link to gated article or disabled card. |
| Footer | Editorial standards | Placeholder | Editorial standards page | ACF Options / legal_links | All users | Yes | Important trust/legal/editorial page. |
| Footer | Privacy / Terms | Placeholder / not always present | Legal pages | ACF Options / legal_links | All users | Yes | Must exist before launch if collecting forms/payments. |

---

## 2. Acceptable Preview Placeholders

The following placeholders may remain in static preview files while the product is still in design/spec phase, but each requires a final production target or explicit disabled state before launch.

| Placeholder | Where it appears | Why acceptable in preview | Required before launch |
|---|---|---|---|
| Public Archive | Footer / Home / nav areas | Represents future archive structure | Create archive route or hide until ready. |
| Field Notes | Footer / Read column | Future editorial category / content type | Create category/CPT archive or remove from production footer. |
| Editor's Letters | Footer / Read column | Future editorial archive | Create archive or map to Letters/Community. |
| Past Manuscripts | Footer / Studio column | Future sample/portfolio area | Create route or remove until real samples exist. |
| Editorial standards | Footer / Studio / legal areas | Trust page placeholder | Must create page before production. |
| Suggest an Issue Theme | Speak column / Community / Reading Room | Future editorial input flow | Build form, role gate if needed, or mark disabled. |
| Vote · Patrons only | Speak column / Reading Room | Future Patron-only feature | Build permission-gated voting flow. |
| Locked VIP Library cards | VIP Library | Valid as design placeholder for future VIP content | Link to actual gated article or render non-clickable locked card. |
| Current-page disabled links | Nav/sidebar active state | Acceptable in static preview | In production use `aria-current`, disabled button, or non-link element. |
| Empty state demo links | Reader Notes / Community | Shows future state variants | Replace with real component states. |

---

## 3. Backend Editable Field Matrix

Recommended WP source values are limited to:

- ACF Options
- WP Menu
- CPT field
- Taxonomy term meta
- User role / capability
- Form plugin setting
- Stripe / payment setting
- Template logic
- Launch config

### 3.1 Global Footer

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Footer brand line | Ink & East / 墨與東 | ACF Options | Yes | Do not hardcode across templates. |
| Footer mission | Quiet journal statement | ACF Options | Yes | Operational copy must be editable. |
| Footer columns | The Journal / Read / Speak / Studio | WP Menu or ACF Options | Yes | Prefer WP Menus for link groups; ACF Options for intro text. |
| Footer links | Public Archive, Reading Room, Custom Reading | WP Menu | Yes | Role visibility may require custom walker or template logic. |
| Footer colophon | Published quietly / font line / ISSN | ACF Options | Yes | Editable for issue/year changes. |
| Legal links | Terms, Privacy, Editorial standards | ACF Options / WP Menu | Yes | Launch blocker. |
| Cross-brand link | Spatial Flow relation | ACF Options | Optional | Keep subtle; brands should remain visually distinct. |

### 3.2 Header / Navigation

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Main nav items | Issues / Reading Room / VIP Library / Ask / Studio | WP Menu | Yes | Avoid hardcoded nav arrays. |
| Active state | Current page highlight | Template logic | Yes | Must use route/body class logic. |
| Sign in link | `/wp-login.php` | ACF Options / Launch config | Yes | Decide native vs branded login. |
| Membership CTA | Become a member | ACF Options | Yes | Label and target must be editable. |
| Role-aware nav | Enter Reading Room vs Become a member | User role / capability + Template logic | Yes | Different nav for guest/free/Reader/Patron. |

### 3.3 Home

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Hero headline | Main journal statement | ACF Options / CPT field | Yes | If home is editable page, use ACF fields. |
| Hero subcopy | Intro copy | ACF Options / CPT field | Yes | Operational copy. |
| Featured issue | Issue 001 | CPT field | Yes | Should select issue from backend. |
| TOC items | Issue article list | CPT field / Template logic | Yes | Should query issue/articles, not hardcode. |
| Reading Room intro | Supporter invitation | ACF Options | Yes | Must remain editable for positioning changes. |
| Studio CTA | Custom Reading / Custom Ebook | ACF Options / service_cta_links | Yes | Service routing likely changes. |
| Archive CTA | Full archive / public entries | ACF Options / Launch config | Yes | Launch blocker. |

### 3.4 Issue

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Issue title | Issue 001 | CPT field | Yes | `issue` CPT. |
| Issue theme | e.g. discipline / letting alone | CPT field | Yes | Backend editable. |
| Editor note | Issue intro note | CPT field | Yes | Should not be template copy. |
| Article ordering | TOC list | CPT relationship / Template logic | Yes | Needs ordering field. |
| Discussion CTA | Open discussion | ACF Options / CPT field | Optional | Could route to Community / Reader Notes. |
| Issue volume | 001 | Taxonomy term meta / CPT field | Yes | For archive and routing. |

### 3.5 Article

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Article title | Article 001 | CPT field | Yes | Could use native post or `ink_article`. |
| Deck / excerpt | Intro summary | CPT field | Yes | Editable. |
| Body | Longform article content | CPT field | Yes | Native editor / blocks. |
| Footnotes | Notes section | CPT field | Optional | Could be block pattern. |
| Sidebar nav | Section anchors | Template logic | Yes | Generated from headings if possible. |
| Reader Notes embed | Bottom component | Template logic | Yes | Use comments/custom component. |
| Related reading | If you liked this | CPT relationship / Taxonomy | Optional | Backend selected or query. |
| Visibility | Public / VIP teaser | Taxonomy term meta / User role | Yes | Must enforce server-side. |

### 3.6 VIP Library

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Library intro | VIP catalog copy | ACF Options | Yes | Editable positioning. |
| VIP card title | Article title | CPT field | Yes | Query VIP articles. |
| VIP card status | Open / locked / coming soon | CPT field / Taxonomy term meta | Yes | Drives button behavior. |
| VIP card button | Enter / Read invitation | Template logic | Yes | Role-aware. |
| Membership explanation | About membership copy | ACF Options | Yes | Avoid hardcoding. |
| Visibility flag | VIP | Taxonomy term meta / User role | Yes | Enforced server-side. |

### 3.7 Reading Room

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Welcome copy | Member home intro | ACF Options | Yes | Role-aware greeting optional. |
| VIP Library entry | Section block | ACF Options / Template logic | Yes | Link target configurable. |
| Reader Notes entry | Write / read notes | ACF Options / User role | Yes | Permission gated. |
| Vote entry | Patrons only | Form plugin setting + User role | Yes | Patron gate required. |
| Letters status | Submitted letter status | Template logic / Form plugin | Optional | Depends on stored submissions. |
| Custom Reading queue | Priority hint | Template logic / Form plugin | Optional | Later service workflow. |

### 3.8 Membership

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Membership intro | Supporter invitation | ACF Options | Yes | High-impact positioning copy. |
| Reader plan name | Reader | Stripe / payment setting + ACF Options | Yes | Backend configurable. |
| Patron plan name | Patron | Stripe / payment setting + ACF Options | Yes | Backend configurable. |
| Plan copy | Prose, no checklist | ACF Options | Yes | Must remain editable. |
| Checkout CTA label | Join as Reader / Patron | ACF Options | Yes | Copy can change. |
| Stripe Price ID | reader / patron plan | Stripe / payment setting | Yes | Never hardcode in template. |
| Billing portal link | Cancel / restore | Stripe / payment setting | Yes | Launch blocker. |
| Refund / terms links | Legal links | ACF Options / legal_links | Yes | Launch blocker. |
| Already member state | Enter the Reading Room | User role / capability + Template logic | Yes | Server-side state swap. |

### 3.9 Custom Reading

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Service title | A reading, written for one person | ACF Options / CPT field | Yes | Commercial positioning. |
| Service explanation | Not a translation. A reading. | ACF Options / CPT field | Yes | Must be editable. |
| Process steps | Submit / read / delivery | ACF Options / CPT field | Yes | Service process changes over time. |
| Depth options | short / standard / long | Form plugin setting | Yes | Drives quote/request workflow. |
| Deadline options | no rush etc. | Form plugin setting | Yes | Editable. |
| Publish consent | Allow publication to VIP Library | Form plugin setting | Yes | Legal/consent-sensitive. |
| Pricing copy | Starting anchors / quote | ACF Options | Yes | Do not hardcode. |
| Submit button | Submit a reading brief | Form plugin setting / service_cta_links | Yes | Launch blocker. |
| Membership courtesy | Priority / discount | ACF Options | Optional | Must not become main membership selling point. |

### 3.10 Custom Ebook

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Service title | A book, written for one | ACF Options / CPT field | Yes | High-ticket service positioning. |
| Disambiguation strip | Not Custom Reading | ACF Options | Yes | Prevents service confusion. |
| Process steps | 9-step flow | ACF Options / CPT field | Yes | Editable. |
| Deliverables | PDF / doc / manuscript terms | ACF Options | Yes | Service scope may change. |
| Revision policy | Revision rounds | ACF Options / legal_links | Yes | Contract-sensitive. |
| Rights / copyright | Client / studio rights | ACF Options / legal_links | Yes | Launch blocker if sold. |
| FAQ | 8 FAQ items | ACF Options / CPT field | Yes | Must be editable. |
| Submit button | Submit your brief | Form plugin setting / service_cta_links | Yes | Launch blocker. |
| Pricing copy | Meaningful starting price | ACF Options | Yes | No hardcoded price until strategy final. |

### 3.11 Letters

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Form intro | Ask the Ancient Text | ACF Options | Yes | Editorial positioning. |
| Form fields | Name / question / consent | Form plugin setting | Yes | Launch blocker. |
| Consent copy | Publication consent | Form plugin setting / legal_links | Yes | Must be legally reviewed. |
| Thank You copy | Quiet confirmation | Form plugin setting | Yes | Editable. |
| Moderation state | Pending / approved | Template logic / Form plugin | Yes | Required before public display. |
| Archive display | Letters page / Community | CPT field / Form plugin | Optional | Decide storage model. |

### 3.12 Reader Notes

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Component title | Reader Notes | ACF Options | Yes | Editable. |
| Empty state | No notes yet | ACF Options | Yes | Editable. |
| Login CTA | Sign in to write | ACF Options / Launch config | Yes | Needs redirect. |
| Note body | Comment content | Template logic | Yes | Use WP comments or custom CPT. |
| Tier badge | Reader / Patron | User role / capability | Yes | Role-aware. |
| Editor’s choice | Highlight state | Template logic / CPT field | Optional | Moderator controlled. |
| Reply slot | Single-level reply | Template logic | Yes | No nested Reddit style. |

### 3.13 Community

| Field | Example from preview | Recommended WP source | Required? | Notes |
|---|---|---|---|---|
| Page intro | Quiet front porch | ACF Options | Yes | Editable. |
| Latest Reader Notes | Stream | Template logic | Yes | Query comments/notes. |
| Issue Discussion | Issue-linked discussion | Template logic / CPT relationship | Yes | Needs data source. |
| Editor’s Choice | Curated notes | CPT field / Template logic | Optional | Editorial control. |
| Open Letters | Letters stream | Form plugin / CPT field | Optional | Depends on storage. |
| Empty variants | Day-1 states | Template logic | Yes | Production should show real empty states. |

---

## 4. WordPress Data Model Proposal

### 4.1 CPT

Recommended custom post types:

- `issue`
- `ink_article`
- `reader_letter`
- `custom_reading_request`
- `custom_ebook_project`
- `reader_note`
- `field_note`
- `manuscript_sample`

Notes:

- Existing blog posts may be migrated into `ink_article` or retained as posts with taxonomy mapping. This must be decided before engineering.
- Reader Notes could be WP comments instead of CPT. The current product direction prefers WP native comments + custom template, but a CPT may be useful for moderation/curation.
- Custom Reading / Custom Ebook requests may be stored through form entries first, then promoted to CPT if workflow requires project tracking.

### 4.2 Taxonomy

Recommended taxonomies:

- `issue_volume`
- `article_theme`
- `visibility_level`
- `service_type`
- `contribution_type`

Suggested values:

- `visibility_level`: public, reader, patron, vip_teaser, editor_only
- `service_type`: custom_reading, custom_ebook, manuscript, editorial_review
- `contribution_type`: letter, reader_note, issue_suggestion, patron_vote

### 4.3 Options

Recommended global options groups:

- `global_footer`
- `global_nav`
- `legal_links`
- `membership_checkout`
- `service_cta_links`
- `reading_room_settings`
- `newsletter_settings`
- `login_account_routes`
- `editorial_settings`
- `community_settings`

### 4.4 Menus

Recommended WP menus:

- `ink_east_header_main`
- `ink_east_footer_journal`
- `ink_east_footer_read`
- `ink_east_footer_speak`
- `ink_east_footer_studio`
- `ink_east_footer_legal`

Role-aware visibility may require custom walker/template logic.

---

## 5. Role / Permission Matrix

| Feature | Guest | Free user | Reader | Patron | Editor/Admin | Notes |
|---|---|---|---|---|---|---|
| Read public issue | Yes | Yes | Yes | Yes | Yes | Public Issues are free. |
| Read public articles | Yes | Yes | Yes | Yes | Yes | 99% content should remain free. |
| Read VIP Library index | Yes | Yes | Yes | Yes | Yes | Catalog can be public. |
| Read full VIP article | No | No | Yes | Yes | Yes | Guest/free may see teaser only. |
| Receive VIP teaser | Yes | Yes | n/a | n/a | n/a | Server must not send full body to unauthorized users. |
| Submit letter | Yes | Yes | Yes | Yes | Yes | Subject to moderation and spam control. |
| Reader Notes read | Possibly Yes | Yes | Yes | Yes | Yes | Final policy required. |
| Reader Notes write | No | Maybe No | Yes | Yes | Yes | Current direction: membership writing right. |
| Reply to Reader Note | No | Maybe No | Yes | Yes | Yes | Single-level reply only. |
| Vote issue theme | No | No | No or limited | Yes | Yes | Patron-only in current preview. |
| Submit Custom Reading brief | Yes | Yes | Yes | Yes | Yes | Must not require membership. |
| Submit Custom Ebook brief | Yes | Yes | Yes | Yes | Yes | Must not require membership. |
| Access Reading Room | No | Maybe limited | Yes | Yes | Yes | Free user behavior must be decided. |
| Access account portal | No | Yes | Yes | Yes | Yes | Depends on login/membership state. |
| Manage notes / letters | No | No | Own only | Own only | Yes | Admin moderation needed. |
| Feature content as Editor’s Choice | No | No | No | No | Yes | Editorial control. |

---

## 6. Launch Blockers

### P0 — must be resolved before production launch

- Stripe checkout URLs / Price IDs for Reader and Patron.
- Stripe Billing Portal or equivalent cancel/restore flow.
- Refund policy page.
- Membership terms page.
- Privacy policy if forms/payment/email collection are active.
- Login/account route decision: native `/wp-login.php` vs branded login/account page.
- Form endpoints for Letters / Custom Reading / Custom Ebook.
- Consent and moderation workflow for Letters.
- Reader Notes write permission and moderation rules.
- VIP paywall server-side enforcement.
- Header/footer component engineering.
- PR #4 Custom Ebook footer visual issue.
- Footer links and nav links converted to backend-managed menus/options.

### P1 — should be resolved before full marketing push

- Public Archive route.
- Field Notes route or hidden placeholder.
- Editor’s Letters route or Community mapping.
- Past Manuscripts route or hidden placeholder.
- Editorial standards page.
- Suggest an Issue Theme workflow.
- Patron voting workflow.
- Community data source and empty-state behavior.
- Existing 100+ blog article migration/mapping.
- SEO metadata model for Issues / Articles / Services.
- Email notification rules for form submissions.

### P2 — can be handled during later engineering / refinement

- Advanced reader profile page.
- Public contributor pages.
- Custom Reading community bounty model.
- Custom Ebook project dashboard.
- Reader Notes curation analytics.
- Editorial calendar tools.
- Advanced role-based footer/nav visibility.
- Tracking parameter standard for service CTA links.

---

## 7. Engineering Notes

### 7.1 Static HTML is not production architecture

Static preview files are visual and product references only.

Do not deploy them directly as production pages.

Production should use:

- shared template parts;
- global CSS / design tokens;
- WP Menus;
- ACF Options or equivalent backend fields;
- CPT templates;
- role-aware template logic;
- secure form endpoints;
- Stripe backend mapping.

### 7.2 Header / Footer

Header and footer must become shared template parts.

Recommended:

- `template-parts/ink-east/header.php`
- `template-parts/ink-east/footer.php`
- `assets/css/ink-east-global.css`
- `assets/css/ink-east-footer.css`

Footer links should be managed through WP Menu or ACF Options.

Do not repeat footer HTML/CSS across 12 templates in production.

### 7.3 Operational copy

Operational copy should be editable through ACF fields, blocks, or site options.

Examples:

- Membership plan prose;
- Custom Reading process steps;
- Custom Ebook FAQ;
- Reading Room intro;
- footer mission;
- legal links;
- CTA labels;
- form helper text.

### 7.4 Payments

Price IDs and payment URLs must not be hardcoded in templates.

Recommended:

- Store Stripe Price IDs in environment-aware settings.
- Server creates Checkout Session.
- Frontend references a plan key, not a raw Stripe URL.
- Billing portal route is generated server-side.

### 7.5 Service CTA links

Service CTA links should be environment-aware.

For example:

- staging form endpoint;
- production form endpoint;
- CRM webhook;
- email fallback if form is disabled.

---

## 8. Next Recommended Step

Recommended next sequence:

1. Manually review this mapping.
2. Create WordPress field model / ACF schema draft.
3. Decide whether PR #4 should remain open, be closed, or be preserved as a visual reference only.
4. Begin Ink & East WordPress engineering plan.
5. Only then resume preview-level visual fixes where they affect real engineering.

Suggested next document:

- `INK-EAST-WP-FIELD-SCHEMA.md`

Suggested next implementation scope:

- global options;
- menus;
- legal links;
- membership checkout settings;
- service CTA settings;
- role matrix;
- CPT / taxonomy schema.

---

## 9. Fixed Reminder for Future Tasks

Every future task should begin with this reminder:

> Current baseline: `PROJECT-CONTROL-MASTER.md` and `INK-EAST-LINK-FIELD-MAP.md`.  
> PR #4 remains open and unmerged because Custom Ebook footer visual consistency failed manual review.  
> Spatial Flow is a visual skin replacement project and must not alter backend logic.  
> Ink & East is visual + new feature engineering.  
> All operational content must eventually be backend-editable.
