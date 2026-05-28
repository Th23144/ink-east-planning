# Ink & East · WordPress Field Schema Draft

> 版本：v0.1  
> 状态：Fix 2F 文档任务  
> 基线：`PROJECT-CONTROL-MASTER.md` + `INK-EAST-LINK-FIELD-MAP.md`  
> 目的：把 Ink & East 静态视觉稿和链接字段映射，转成未来 WordPress 工程化可执行的字段模型。  

---

## 0. Core Rule

Ink & East production implementation must not hardcode operational content.

All operational copy, CTA labels, service descriptions, membership prose, footer links, legal links, form helper text, pricing language, archive links, and service routing must be managed through backend-editable fields, WordPress menus, form plugin settings, Stripe/payment settings, or launch config.

Static preview HTML is a visual and product reference only. It is not the production architecture.

---

## 1. Recommended Architecture Overview

Recommended WordPress layers:

| Layer | Purpose | Recommended mechanism |
|---|---|---|
| Global settings | Sitewide operational content | ACF Options / theme settings |
| Navigation | Header/footer menus | WP Menus + role-aware walker/template logic |
| Longform content | Issues and articles | CPT or native posts + custom taxonomies |
| Membership | Reader / Patron identity and access | User roles / capabilities + Stripe mapping |
| Services | Custom Reading / Custom Ebook | Service pages + form plugin + optional CPT tracking |
| Forms | Letters, service briefs, vote | Fluent Forms / Gravity Forms or equivalent |
| Comments / Reader Notes | Article discussion layer | WP comments with custom template, or CPT if needed |
| Legal / launch links | Terms, refund, privacy, editorial standards | Pages + ACF legal links |
| Visual system | Shared header/footer, CSS tokens | Template parts + global CSS |

---

## 2. ACF Options / Global Settings

### 2.1 Option Group: `ink_global_identity`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `site_wordmark_en` | Text | Yes | Ink & East | English wordmark. |
| `site_wordmark_cn` | Text | Yes | 墨與東 | Chinese wordmark. |
| `site_tagline` | Textarea | Yes | old texts, quiet stories, modern questions | Site-wide tagline. |
| `site_short_description` | Textarea | Yes | A quiet journal... | Used in metadata and footer. |
| `brand_colophon_line` | Text | Optional | Published quietly | Footer colophon. |
| `issn_or_publication_id` | Text | Optional | ISSN — 2026.001 | Editable; may stay blank pre-launch. |

### 2.2 Option Group: `ink_global_footer`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `footer_mission` | WYSIWYG / Textarea | Yes | Quiet journal mission | Footer mission statement. |
| `footer_colophon_left` | Text | Yes | © 2026 Ink & East | Do not hardcode year if possible. |
| `footer_colophon_middle` | Text | Optional | Set in EB Garamond... | Typography note. |
| `footer_colophon_right` | Text | Optional | ISSN — 2026.001 | Publication note. |
| `footer_show_spatial_flow_link` | True/False | Optional | true | Cross-brand link visibility. |
| `footer_spatial_flow_label` | Text | Optional | Spatial Flow | Editable. |
| `footer_spatial_flow_url` | URL | Optional | / | Editable target. |

Footer link groups should preferably use WP Menus, not repeater fields, unless role visibility requires custom fields.

### 2.3 Option Group: `ink_global_nav`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `login_url` | URL / Page Link | Yes | /wp-login.php or /account | Decide native vs branded route. |
| `account_url` | URL / Page Link | Yes | /account | Required for logged-in users. |
| `reading_room_url` | Page Link | Yes | /reading-room | Member home. |
| `membership_url` | Page Link | Yes | /membership | Guest CTA. |
| `nav_guest_cta_label` | Text | Yes | Become a member | Editable. |
| `nav_member_cta_label` | Text | Yes | Enter Reading Room | Editable. |

### 2.4 Option Group: `ink_legal_links`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `privacy_policy_url` | Page Link | Yes | /privacy-policy | P0 if forms/payments active. |
| `terms_url` | Page Link | Yes | /terms | P0. |
| `membership_terms_url` | Page Link | Yes | /membership-terms | P0 for membership launch. |
| `refund_policy_url` | Page Link | Yes | /refund-policy | P0 for paid services/membership. |
| `editorial_standards_url` | Page Link | Yes | /editorial-standards | Trust page. |
| `custom_service_terms_url` | Page Link | Optional | /custom-service-terms | Needed before high-ticket service. |

### 2.5 Option Group: `ink_membership_checkout`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `reader_plan_label` | Text | Yes | Reader | Backend editable plan name. |
| `patron_plan_label` | Text | Yes | Patron | Backend editable plan name. |
| `reader_plan_description` | Textarea | Yes | Quiet supporter copy | No checklist by default. |
| `patron_plan_description` | Textarea | Yes | Deeper supporter copy | No sales pressure. |
| `reader_stripe_price_id_test` | Text | Yes | price_xxx | Environment-aware. |
| `reader_stripe_price_id_live` | Text | Yes | price_xxx | Never hardcode in template. |
| `patron_stripe_price_id_test` | Text | Yes | price_xxx | Environment-aware. |
| `patron_stripe_price_id_live` | Text | Yes | price_xxx | Never hardcode. |
| `stripe_environment` | Select | Yes | test / live | Launch config. |
| `billing_portal_url` | URL | Yes | generated route | Prefer server-generated. |
| `membership_pending_message` | Textarea | Optional | Membership checkout is not live yet | For staging. |

### 2.6 Option Group: `ink_service_cta_links`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `custom_reading_page` | Page Link | Yes | /custom-reading | Service page. |
| `custom_reading_form_anchor` | Text | Yes | #submit-brief | Anchor or form ID. |
| `custom_reading_cta_label` | Text | Yes | Submit a reading brief | Editable. |
| `custom_ebook_page` | Page Link | Yes | /custom-ebook | Service page. |
| `custom_ebook_form_anchor` | Text | Yes | #submit-brief | Anchor or form ID. |
| `custom_ebook_cta_label` | Text | Yes | Submit your brief | Editable. |
| `custom_ebook_process_anchor` | Text | Optional | #process | Editable target. |
| `service_unavailable_message` | Textarea | Optional | This service is opening quietly soon | Staging/maintenance. |

### 2.7 Option Group: `ink_reading_room_settings`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `reading_room_intro_guest` | Textarea | Optional | Join to enter the Reading Room | Guest redirect copy. |
| `reading_room_intro_member` | Textarea | Yes | Welcome back | Member copy. |
| `vip_library_section_title` | Text | Yes | VIP Library | Editable. |
| `reader_notes_section_title` | Text | Yes | Reader Notes | Editable. |
| `letters_section_title` | Text | Yes | Letters | Editable. |
| `patron_vote_section_title` | Text | Optional | Vote on the next issue | Patron-only. |
| `custom_reading_queue_title` | Text | Optional | Custom Reading Queue | Future workflow. |

### 2.8 Option Group: `ink_community_settings`

| Field key | Type | Required | Example | Notes |
|---|---|---:|---|---|
| `community_intro` | Textarea | Yes | A quiet front porch | Not a forum feed. |
| `latest_notes_title` | Text | Yes | Latest Reader Notes | Editable. |
| `issue_discussion_title` | Text | Yes | Issue Discussion | Editable. |
| `editor_choice_title` | Text | Optional | Editor’s Choice | Editable. |
| `open_letters_title` | Text | Optional | Open Letters | Editable. |
| `empty_state_copy` | Textarea | Yes | No notes yet | Required for day-1 launch. |

---

## 3. WP Menus

Recommended registered menus:

| Menu location | Purpose | Required | Notes |
|---|---|---:|---|
| `ink_east_header_main` | Main header nav | Yes | Issues / Reading Room / VIP Library / Ask / Studio / Membership / Community. |
| `ink_east_footer_journal` | Footer journal column | Yes | About, Issues, Archive, etc. |
| `ink_east_footer_read` | Footer read column | Yes | Public Archive, Field Notes, Editor’s Letters. |
| `ink_east_footer_speak` | Footer speak column | Yes | Letters, Reader Notes, Suggest an Issue Theme. |
| `ink_east_footer_studio` | Footer studio column | Yes | Custom Reading, Custom Ebook, Past Manuscripts. |
| `ink_east_footer_legal` | Footer legal links | Yes | Privacy, Terms, Refund, Editorial Standards. |

Implementation notes:

- Header and footer should not be copied per template.
- Role-aware visibility may need custom menu walker or template filtering.
- Footer PR #4 issue should be resolved by building one shared footer component, not by repeatedly patching static HTML.

---

## 4. Custom Post Types

### 4.1 CPT: `issue`

Purpose: represents one issue / edition of Ink & East.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `issue_number` | Text | Yes | Example: 001. |
| `issue_title` | Text | Yes | Editable title. |
| `issue_theme` | Text | Yes | Theme/deck. |
| `issue_intro` | WYSIWYG | Yes | Editor note / intro. |
| `issue_cover_symbol` | Text | Optional | Chinese symbol, if used. |
| `issue_cover_note` | Textarea | Optional | Symbol explanation. |
| `issue_articles` | Relationship | Yes | Ordered related `ink_article` posts. |
| `issue_discussion_url` | URL / Page Link | Optional | Community discussion. |
| `issue_status` | Select | Yes | draft / public / archived. |

### 4.2 CPT: `ink_article`

Purpose: public and VIP longform articles.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `article_deck` | Textarea | Yes | Summary/deck. |
| `article_kicker` | Text | Optional | Small label. |
| `article_issue` | Relationship | Optional | Related issue. |
| `article_visibility` | Select / taxonomy | Yes | public / reader / patron / vip. |
| `vip_teaser_percentage` | Number | Optional | For guest teaser; default 30. |
| `article_sidebar_mode` | Select | Optional | generated / manual / none. |
| `article_related_items` | Relationship | Optional | If you liked this. |
| `show_reader_notes` | True/False | Yes | Article-level toggle. |
| `show_paywall_band` | True/False | Optional | For VIP/teaser rendering. |

Server-side rule:

- For VIP articles, unauthorized users must not receive the full article body in HTML.
- The 30% preview is only a teaser rendering strategy, not a product model.

### 4.3 CPT: `reader_letter`

Purpose: stores letters submitted by readers.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `letter_question` | Textarea | Yes | Submitted question. |
| `letter_context` | Textarea | Optional | User context. |
| `letter_author_display` | Text | Optional | Public name or anonymous. |
| `letter_consent_publication` | True/False | Yes | Required. |
| `letter_status` | Select | Yes | pending / approved / answered / rejected. |
| `letter_related_issue` | Relationship | Optional | If used as issue prompt. |
| `letter_editor_response` | WYSIWYG | Optional | Published response. |
| `letter_source_form_id` | Text | Optional | Link back to form entry. |

### 4.4 CPT: `custom_reading_request`

Purpose: track paid or pending Custom Reading briefs if stored beyond form entries.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `request_text_or_topic` | Textarea | Yes | Text / story / question. |
| `request_reader_question` | Textarea | Yes | What the reader wants answered. |
| `request_depth` | Select | Yes | short / standard / long. |
| `request_deadline` | Select / Date | Optional | no rush / date / urgent. |
| `request_publish_consent` | True/False | Yes | Can it become VIP/public content? |
| `request_submitter_email` | Email | Yes | Contact. |
| `request_membership_status` | Select | Optional | guest / free / reader / patron. |
| `request_status` | Select | Yes | received / quoted / paid / in_progress / delivered / archived. |
| `request_quote_amount` | Number | Optional | Internal or displayed depending policy. |
| `request_related_output_article` | Relationship | Optional | If published later. |

### 4.5 CPT: `custom_ebook_project`

Purpose: track high-ticket private book / manuscript commissions.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `project_brief` | Textarea | Yes | Client brief. |
| `project_scope` | Textarea | Yes | Agreed scope. |
| `project_length_target` | Text | Optional | Word/page target. |
| `project_deliverables` | Checkbox / Textarea | Yes | PDF, doc, manuscript, etc. |
| `project_revision_rounds` | Number | Yes | Contract-sensitive. |
| `project_rights_terms` | Textarea | Yes | Legal-sensitive. |
| `project_status` | Select | Yes | inquiry / quoted / paid / drafting / review / delivered / archived. |
| `project_client_email` | Email | Yes | Contact. |
| `project_quote_amount` | Number | Optional | Internal or displayed by strategy. |
| `project_contract_url` | URL | Optional | If external docs used. |

### 4.6 CPT: `reader_note` or WP Comments

Preferred current direction: WP native comments with custom template.

If CPT is chosen later, use:

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `note_article` | Relationship | Yes | Related article. |
| `note_author_user` | User | Yes | Logged-in user. |
| `note_body` | WYSIWYG / Textarea | Yes | Comment text. |
| `note_tier_at_time` | Select | Optional | Reader / Patron. |
| `note_is_editor_choice` | True/False | Optional | Curated highlight. |
| `note_parent` | Relationship | Optional | Single-level reply only. |
| `note_status` | Select | Yes | pending / approved / hidden. |

### 4.7 CPT: `field_note`

Purpose: future editorial notes / lighter archive.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `field_note_deck` | Textarea | Yes | Summary. |
| `field_note_theme` | Taxonomy | Optional | Theme classification. |
| `field_note_visibility` | Select | Yes | public / member. |

### 4.8 CPT: `manuscript_sample`

Purpose: future Custom Ebook / Studio portfolio or sample archive.

| Field key | Type | Required | Notes |
|---|---|---:|---|
| `sample_title` | Text | Yes | Sample title. |
| `sample_type` | Select | Yes | reading / ebook / manuscript. |
| `sample_excerpt` | WYSIWYG | Optional | Public excerpt. |
| `sample_visibility` | Select | Yes | public / hidden / client-approved. |
| `sample_client_consent` | True/False | Yes | Must be true before publication. |

---

## 5. Taxonomies

| Taxonomy | Applies to | Suggested terms | Notes |
|---|---|---|---|
| `issue_volume` | issue, ink_article | vol-001, vol-002 | For issue grouping. |
| `article_theme` | ink_article, field_note | old_texts, taoism, modern_life, stories | Editorial themes. |
| `visibility_level` | ink_article, vip library, services | public, reader, patron, vip, editor_only | Must drive server-side permissions. |
| `service_type` | custom_reading_request, custom_ebook_project, manuscript_sample | custom_reading, custom_ebook, manuscript | Service separation. |
| `contribution_type` | reader_letter, reader_note | letter, issue_suggestion, note, vote | Community/contribution classification. |

---

## 6. Roles / Capabilities

Recommended roles:

| Role | Purpose |
|---|---|
| `guest` | Not a WP role; unauthenticated visitor. |
| `subscriber` / free user | Logged-in free account. |
| `ink_reader` | Reader member. |
| `ink_patron` | Patron member. |
| `editor` | Editorial staff. |
| `administrator` | Site admin. |

Recommended capabilities:

| Capability | Guest | Free user | Reader | Patron | Editor/Admin | Notes |
|---|---:|---:|---:|---:|---:|---|
| `read_public_issues` | Yes | Yes | Yes | Yes | Yes | Public content. |
| `read_vip_articles` | No | No | Yes | Yes | Yes | Server-side enforced. |
| `write_reader_notes` | No | No by default | Yes | Yes | Yes | Final policy can change. |
| `reply_reader_notes` | No | No by default | Yes | Yes | Yes | Single-level. |
| `submit_letters` | Yes | Yes | Yes | Yes | Yes | Form + moderation. |
| `vote_issue_theme` | No | No | No | Yes | Yes | Patron only. |
| `submit_custom_reading` | Yes | Yes | Yes | Yes | Yes | Not member-only. |
| `submit_custom_ebook` | Yes | Yes | Yes | Yes | Yes | Not member-only. |
| `access_reading_room` | No | Limited or redirect | Yes | Yes | Yes | Decide free-user behavior. |
| `manage_reader_notes` | No | No | Own only | Own only | Yes | Moderation. |
| `feature_editor_choice` | No | No | No | No | Yes | Editorial action. |

---

## 7. Forms / Plugin Settings

Recommended form plugin: Fluent Forms or Gravity Forms.

### 7.1 Letters Form

Fields:

- display name / anonymous option
- email
- question / letter body
- context
- consent to editorial review
- consent to publication
- privacy acknowledgement
- spam protection

Output:

- create form entry;
- optional `reader_letter` CPT entry;
- notify editor;
- show quiet thank-you state;
- do not auto-publish.

### 7.2 Custom Reading Brief Form

Fields:

- name
- email
- text / story / question
- what the reader wants understood
- depth preference
- deadline preference
- publication consent
- membership status if logged in
- privacy / terms acknowledgement

Output:

- form entry;
- optional `custom_reading_request` CPT;
- email notification;
- later quote/payment workflow.

### 7.3 Custom Ebook Brief Form

Fields:

- name
- email
- project idea
- intended reader / recipient
- desired length / format
- deadline / timeline
- source materials
- rights / privacy requirements
- acknowledgement that this is a custom commission

Output:

- form entry;
- optional `custom_ebook_project` CPT;
- manual review / quote workflow.

### 7.4 Patron Vote Form

Fields:

- issue theme choice
- optional comment
- user ID
- membership tier check

Output:

- only Patron should submit;
- reject unauthorized server-side;
- store vote result;
- optional editor dashboard.

---

## 8. Stripe / Payment Settings

Payment should be handled server-side.

Do not hardcode Stripe checkout URLs in templates.

Recommended backend plan:

| Setting | Description |
|---|---|
| `stripe_environment` | test / live |
| `reader_price_id_test` | Test Reader Price ID |
| `reader_price_id_live` | Live Reader Price ID |
| `patron_price_id_test` | Test Patron Price ID |
| `patron_price_id_live` | Live Patron Price ID |
| `checkout_success_url` | Success redirect |
| `checkout_cancel_url` | Cancel redirect |
| `billing_portal_return_url` | Portal return target |
| `webhook_secret_test` | Test webhook secret |
| `webhook_secret_live` | Live webhook secret |

Stripe event mapping:

| Event | Action |
|---|---|
| checkout.session.completed | Assign Reader/Patron role. |
| customer.subscription.updated | Update membership status. |
| customer.subscription.deleted | Remove paid role / downgrade. |
| invoice.payment_failed | Mark account billing issue. |
| customer.subscription.resumed | Restore role. |

---

## 9. Template Mapping

Recommended template structure:

| Preview page | Future template |
|---|---|
| `ink-east-v1.html` | `front-page-ink-east.php` or page template |
| `ink-east-issue-001-v1.html` | `single-issue.php` |
| `ink-east-article-001-v1.html` | `single-ink_article.php` |
| `ink-east-article-002-vip-v1.html` | `single-ink_article.php` with VIP state |
| `ink-east-vip-library-v1.html` | `archive-vip` or page template querying VIP articles |
| `ink-east-reading-room-v1.html` | `page-reading-room.php` |
| `ink-east-membership-v1.html` | `page-membership.php` |
| `ink-east-custom-reading-v1.html` | `page-custom-reading.php` |
| `ink-east-custom-ebook-v1.html` | `page-custom-ebook.php` |
| `ink-east-letters-form-v1.html` | `page-letters.php` |
| `ink-east-reader-notes-component-v1.html` | component spec only, not public route |
| `ink-east-community-v1.html` | `page-community.php` |

Shared parts:

- `template-parts/ink-east/header.php`
- `template-parts/ink-east/footer.php`
- `template-parts/ink-east/reader-notes.php`
- `template-parts/ink-east/paywall-band.php`
- `template-parts/ink-east/service-cta.php`
- `template-parts/ink-east/vip-card.php`

---

## 10. Engineering Blockers Before Implementation

Before writing production code, decide:

1. Native posts vs `ink_article` CPT for existing 100+ articles.
2. Native WP comments vs `reader_note` CPT.
3. Native `/wp-login.php` vs branded login/account page.
4. Stripe direct integration vs membership plugin integration.
5. Fluent Forms vs Gravity Forms.
6. Whether Reading Room is blocked entirely for free users or has a limited preview.
7. Whether Custom Reading / Custom Ebook requests should be stored only as form entries or promoted to CPT.
8. Whether footer links use WP Menus only or ACF repeaters with role metadata.
9. Whether PR #4 remains open, is closed, or is replaced by engineering footer component work.

---

## 11. Next Recommended Document

After this schema is reviewed, create:

`INK-EAST-WP-IMPLEMENTATION-PLAN.md`

It should include:

- phased build order;
- exact files to create in the child theme;
- migration strategy for existing posts;
- template implementation order;
- plugin decisions;
- testing checklist;
- rollback plan;
- launch blocker checklist.

---

## 12. Fixed Reminder for Future Tasks

Every future task should begin with:

> Current baseline: `PROJECT-CONTROL-MASTER.md`, `INK-EAST-LINK-FIELD-MAP.md`, and `INK-EAST-WP-FIELD-SCHEMA.md`.  
> PR #4 remains open and unmerged because Custom Ebook footer visual consistency failed manual review.  
> Spatial Flow is a visual skin replacement project and must not alter backend logic.  
> Ink & East is visual + new feature engineering.  
> All operational content must eventually be backend-editable.
