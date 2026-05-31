# Ink & East Level 1 · Task 5 · Shared Fields and Access Rules

## Scope

Task 5 adds shared Payload field definitions and the minimum Level 1 access rules for the source-native Ink & East architecture prototype. This work stays inside the existing Next.js + Payload CMS + PostgreSQL app at `apps/web`.

Implemented in this task:

- Shared field modules for repeated SEO, slug, status, visibility, and body/body format fields.
- Minimum access helpers for Level 1 admin, editor, public read, content edit, and content delete behavior.
- Collection access rules for the Level 1 editorial, migration, media, and user collections.
- Global access rules for `system-settings`.
- Level 1 user profile fields for `name`, `role`, and `status`.

## Shared Fields

New shared field files live under `apps/web/src/fields`:

- `seoFields.ts`: shared `seo` group with `seo_title`, `seo_description`, `canonical_url`, `og_title`, `og_description`, `og_image`, and `noindex`.
- `slugField.ts`: shared required and unique `slug` text field.
- `statusField.ts`: shared status factory with:
  - `publication`: `draft`, `review`, `scheduled`, `published`, `archived`.
  - `active`: `active`, `hidden`.
- `visibilityField.ts`: shared visibility select with `public`, `reader`, `patron`, `private`, and `editor_only`.
- `bodyField.ts`: shared existing textarea `body` and `body_format` fields. This does not introduce rich-text dependencies and preserves the current Task 4 business meaning.
- `index.ts`: shared exports.

`seoFields` is reused by Articles, Issues, Editorial Collections, and Topics. Shared slug, status, and visibility factories replace repeated inline definitions where appropriate.

## Access Helpers

New access helper files live under `apps/web/src/payload/access`:

- `isAdmin.ts`: checks `user.role === "admin"`.
- `isEditor.ts`: checks `user.role === "editor"`.
- `canAccessAdmin.ts`: allows active admin/editor users into Payload Admin.
- `canEditContent.ts`: allows active admin/editor users to create and update content.
- `canDeleteContent.ts`: allows only active admin users to delete content.
- `canReadPublished.ts`: allows admin/editor users to read all records, and limits public reads to `status = published` plus `visibility = public`.
- `index.ts`: shared exports.

### Level 1 role fallback

`isAdmin.ts` includes a temporary Level 1 prototype fallback for existing local first users created during Task 3/4 before the `role` field existed. An authenticated user with no role is treated as admin so the current local administrator is not immediately locked out of Payload Admin.

This fallback is explicitly temporary. A later formal permissions phase should backfill user roles and remove or tighten this compatibility behavior.

## Users Collection

The `users` auth collection now includes:

- `name`
- `role`: `admin` or `editor`, defaulting to `admin`.
- `status`: `active` or `suspended`, defaulting to `active`.

Level 1 only includes admin/editor staff roles. It does not create Reader, Patron, Member, or any real membership account system.

User list access is not public. Read, update, and delete are admin-only. Create remains available for first-user setup and admin-created users.

## Admin and Editor Permissions

- Admin:
  - Can access Payload Admin when active.
  - Can create, read, update, and delete content.
  - Can update `system-settings`.
- Editor:
  - Can access Payload Admin when active.
  - Can create, read, and update content.
  - Cannot delete content.
  - Cannot update `system-settings`.

Suspended users cannot access the admin or edit/delete content through these Level 1 helpers.

## Public Read Filtering

Public unauthenticated reads are intentionally narrow:

- Articles, Issues, and Editorial Collections: public can read only records where `status = published` and `visibility = public`.
- Topics and Authors: public can read only records where `status = active`.
- Media: public can read media records. Task 5 does not add private file permissions and does not connect S3/R2.
- Legacy Article Records: public cannot read.
- Redirect Rules: public cannot read lists or records.
- Users: public cannot read user lists.
- System Settings: public can read.

Draft, review, scheduled, archived, private, and editor-only editorial records are not exposed to public frontend/API reads by the Task 5 filters.

## Collection and Global Access Summary

- Articles: admin/editor create/read/update; admin delete; public read only published + public.
- Issues: admin/editor create/read/update; admin delete; public read only published + public.
- Editorial Collections: admin/editor create/read/update; admin delete; public read only published + public.
- Topics: admin/editor create/read/update; admin delete; public read only active.
- Authors: admin/editor create/read/update; admin delete; public read only active.
- Media: admin/editor create/update; admin delete; public read.
- Legacy Article Records: admin/editor only for create/read/update; admin delete; not public.
- Redirect Rules: admin/editor only for create/read/update; admin delete; not public. No redirect middleware is implemented.
- Users: first-user/admin create; admin read/update/delete; no public user list exposure.
- System Settings Global: public read; admin-only update.

## Local Runtime Verification Passed

- The user verified PR #14 in a local Windows development environment.
- The homepage was accessible on the local verification port.
- Payload Admin was accessible.
- The existing local administrator was not locked out after the new `role` / `status` fields and access helpers were introduced.
- Payload Admin continued to display the Level 1 collections and global.
- This confirms the Level 1 role-missing fallback protected the first local user created before Task 5.
- This verification did not add seed data, frontend routes, membership, payment, Reader Notes, Community, service workflows, or Task 6 work.

## Explicit Non-Goals

Task 5 does not include:

- No seed data.
- No frontend routes.
- No `/articles/[slug]`, `/issues`, `/collections`, `/topics`, archive, or search routes.
- No public frontend query utilities.
- No SEO metadata output.
- No redirect middleware.
- No old article import.
- No WordPress, PHP, WooCommerce, Shopify, CartFlows, Elementor, Directus, Strapi, Supabase, or Laravel.
- No membership, Reader, Patron, Member, payment, Stripe, Reader Notes, Community, Votes, Letters, Service Briefs, custom reading, custom ebook, quotes, delivery, email, object storage, or real shop systems.
- No Task 6 work.

## Preview Directory Confirmation

Task 5 does not modify, delete, move, or copy anything from `preview/`. The `preview/` directory remains a static visual preview area only and is not used as source for `apps/web`.

## Stop Confirmation

Task 5 stops after shared fields and minimum access rules. It does not continue to Task 6.
