# Project 3 · Core Static Completion Pass 1A Review Notes

> Repository: `Th23144/ink-east-planning`  
> Scope: source-level review of existing Ink & East core static references  
> Status: review notes only; no HTML or source implementation changes  
> Previous plan: `docs/PROJECT-3-CORE-STATIC-COMPLETION-PLAN.md`

---

## 0. Review boundary

This review covers only these three existing static references:

```text
preview/ink-east-v1.html
preview/ink-east-article-001-v1.html
preview/ink-east-issue-001-v1.html
```

This is a source-level static review, not a final browser-rendered visual approval.

This review does not:

- edit the three HTML files;
- create new preview pages;
- touch `apps/web`;
- implement Next.js UI;
- implement Payload fields;
- implement membership, payment, Reader Notes, Letters, services, or Community;
- mark any page as user visually accepted.

---

## 1. High-level conclusion

The three core references are strong enough to define the first source-facing visual direction, but they are not ready for blind static-to-source mapping.

Working status:

| File | Use as design foundation? | Requires cleanup before source mapping? | User visual acceptance still needed? |
|---|---:|---:|---:|
| `preview/ink-east-v1.html` | Yes | Yes | Yes |
| `preview/ink-east-article-001-v1.html` | Yes | Yes | Yes |
| `preview/ink-east-issue-001-v1.html` | Yes | Yes | Yes |

Main judgment:

```text
Home / Article / Issue can be treated as the first Ink & East visual foundation.
But nav, footer, placeholder links, WordPress assumptions, future modules, and interaction CTAs must be pruned before source mapping.
```

---

## 2. Shared visual foundation to preserve

Across the three files, the following design system should carry into source-native work:

- warm paper background;
- black / faded-ink text hierarchy;
- vermilion seal accent;
- EB Garamond + Noto Serif SC + Inter + JetBrains Mono typographic mixture;
- quiet editorial spacing;
- thin rules / colophon / publication identity;
- bilingual English + Chinese fragments;
- issue / article / journal metaphors instead of blog-template chrome;
- restrained CTAs rather than ecommerce / SaaS buttons.

The Home file defines the core design tokens and establishes the paper/ink/vermilion/typography system. It sets `--paper`, `--paper-light`, `--paper-dark`, `--ink`, `--ink-soft`, `--ink-faint`, `--seal`, and shared font variables in the root design system.

The Article file reuses the same system and adds a specific `--col: 680px` reading column, which should be treated as an important source-native article reading constraint.

The Issue file compresses the same tokens into an issue-specific layout and preserves the same print-publication identity.

Recommendation:

```text
Carry the visual language forward.
Do not carry the static files forward line-by-line.
```

---

## 3. Home review — `preview/ink-east-v1.html`

### 3.1 Current role

The Home file is the main Ink & East journal cover / homepage reference.

Evidence from the file:

- page title: `Ink & East — Ancient texts for modern confusion`;
- design comment identifies the page as Ink & East Issue 001 and describes the journal as ancient texts responding to modern confusion;
- the file defines the core design token system;
- the cover section is explicitly described as magazine-cover-like.

### 3.2 Keep

Keep these elements for source-native homepage design:

- the publication cover feeling;
- central brand mark and bilingual identity;
- paper texture and ink/seal palette;
- large editorial display typography;
- issue-led homepage framing;
- entries / featured article blocks;
- colophon-style footer tone;
- responsive intent already present in CSS.

### 3.3 Risks / cleanup needed

The Home file should not be mapped directly because it includes future modules and links that are outside the immediate public editorial phase.

Specific risks:

1. The top nav includes later-phase modules:
   - Reading Room;
   - VIP Library;
   - Ask the Ancient;
   - Studio;
   - Membership;
   - Community.

2. The right nav includes `Sign in`, but authentication is not part of the current pass.

3. The file includes sections for Reading Room and Custom Ebook Studio inside the home draft; these are useful product references but should not necessarily appear in the first source-native public homepage.

4. The file contains an archive shelf for past issues; useful, but not a substitute for the missing Articles / Search / Topics / Collections static references.

5. The file has footer/nav links that are not all production-ready.

6. The page uses static anchors and hardcoded sample content.

### 3.4 Responsive status

The Home file includes responsive rules for both tablet and mobile widths.

Notable mobile behavior includes:

- cover switches to single-column layout;
- right cover nav is hidden;
- section spacing is reduced;
- entries collapse to one column;
- archive grid becomes smaller;
- dispatch form stacks vertically;
- footer columns collapse.

Status:

```text
Responsive coverage exists, but visual user review is still required on mobile before source mapping.
```

### 3.5 Home review decision

Current status:

```text
Recommended as visual foundation.
Not frozen.
Needs user visual review.
Needs public-phase pruning before source mapping.
```

Source mapping note:

```text
Map homepage structure as a journal/publication home.
Do not expose later-phase modules as live nav destinations until they exist.
```

---

## 4. Article review — `preview/ink-east-article-001-v1.html`

### 4.1 Current role

The Article file is the primary public article reading reference.

Evidence from the file:

- file comment explicitly says it is both a visual reference and product spec;
- it represents a single article page from Issue 001, No. 03;
- rendered state is guest;
- other logged-in/member states are marked TODO / separate preview;
- the CSS defines a dedicated `--col: 680px` reading column.

### 4.2 Keep

Keep these elements for source-native article design:

- narrow reading column;
- issue bar at top;
- article header with kicker, title, Chinese title, deck, byline, date, reading time;
- longform body rhythm;
- lede treatment;
- section heads;
- pull quote visual language;
- footnote style;
- author / related reading / post-foot idea, if present in the full page;
- quiet support-band behavior as a non-wall editorial invitation;
- responsive reading layout and footer collapse.

### 4.3 Risks / cleanup needed

The Article file should not be mapped directly because it still contains WordPress-era implementation contracts.

Specific risks:

1. The top file comment uses WordPress concepts:
   - standard WP Post;
   - post meta;
   - author CPT relation;
   - issue taxonomy or relation;
   - ACF-style fields.

2. The file states only guest state is rendered and other states are TODO.

3. Reader Notes appear as a stub, while the later Reader Notes component spec says article-level stubs pre-date that component and require future sync.

4. The issue-sidebar / in-this-essay navigation is useful, but source-native implementation should derive it from article body headings only if the content model supports that.

5. The support band must be checked against the current decision to defer membership/payment work.

6. Some article body features may exceed the current `apps/web` safe renderer if mapped too literally.

### 4.4 Responsive status

The Article file includes responsive rules:

- sidebar is hidden below large widths;
- related grid collapses;
- author card changes layout;
- article header/body spacing is reduced;
- paragraph size adjusts;
- pull quote shrinks;
- support band and notes stub padding are reduced;
- footer columns collapse.

Status:

```text
Responsive coverage exists, but mobile reading should still be visually checked by the user.
```

### 4.5 Article review decision

Current status:

```text
Recommended as the first public article source reference.
Not frozen.
Needs user visual review.
Needs source-native translation of WordPress comments/fields.
Reader Notes should remain deferred or stubbed carefully.
```

Source mapping note:

```text
Map the article reading experience first, not membership states.
Use the file for layout, typography, and editorial rhythm, not for WordPress contracts.
```

---

## 5. Issue review — `preview/ink-east-issue-001-v1.html`

### 5.1 Current role

The Issue file is the primary Issue 001 reference.

Evidence from the file:

- page title: `Issue 001 — Wu Wei is not laziness · Ink & East`;
- issue hero defines issue title, Chinese title, deck, metadata, glyph, and seal;
- it includes an editor note and table of contents;
- the table of contents links the No. 03 public article to `preview/ink-east-article-001-v1.html`;
- the issue contains a discussion strip and full colophon footer.

### 5.2 Keep

Keep these elements for source-native issue design:

- issue hero structure;
- large theme / glyph treatment;
- issue metadata line;
- compact editor note;
- table of contents layout;
- ordered article list;
- bilingual entry subtitles;
- strong relation to article detail page;
- issue-as-publication identity, not blog-category identity.

### 5.3 Risks / cleanup needed

The Issue file should not be mapped directly because it contains placeholder and future-module links.

Specific risks:

1. `Read in order` currently links to `#`.

2. Several TOC rows are static text only and do not link to article pages.

3. The discussion strip links to `#` and depends on Reader Notes / Community, which are deferred.

4. Footer links include later modules and placeholder links:
   - Field Notes;
   - Editor's Letters;
   - Suggest an Issue Theme;
   - Patron-only vote;
   - Past Manuscripts;
   - Editorial standards.

5. Footer includes `Spatial Flow` link to `./spatial-flow-v1.html`, which must be verified or adapted later because Spatial Flow is a related ecommerce subsite, not necessarily a same-preview route.

### 5.4 Responsive status

The Issue file includes a mobile breakpoint under `@media(max-width:900px)`.

Mobile behavior includes:

- issue hero becomes one column;
- vertical divider is removed;
- issue glyph shrinks;
- TOC row compresses;
- TOC kind column is hidden;
- editor note padding shrinks;
- footer columns collapse.

Status:

```text
Responsive coverage exists, but mobile issue TOC usability should be checked visually.
```

### 5.5 Issue review decision

Current status:

```text
Recommended as Issue page visual foundation.
Not frozen.
Needs user visual review.
Needs placeholder and future-module CTA pruning before source mapping.
```

Source mapping note:

```text
Map Issue as a public editorial object with ordered articles.
Hide or defer discussion/Community affordances until Reader Notes / Community exist.
```

---

## 6. Shared risks across all three files

### 6.1 Nav is not final

The existing static nav exposes too many later-phase destinations for the public editorial source pass.

For source mapping, use the conservative public editorial nav from the core static completion plan unless the user changes it:

```text
Home
Issues
Articles
Topics
Collections
Search
About
```

Later-phase nav should stay hidden until those systems exist:

```text
VIP Library
Reading Room
Ask
Studio
Membership
Community
```

### 6.2 Footer is not final

All three pages contain footer-like blocks, but they should not be copied per page.

Source rule:

```text
Build one shared source footer.
Use static footers as tone reference, not as repeated source code.
```

### 6.3 Placeholder links must not become production routes

Current placeholders include:

- `href="#"` actions;
- Sign in;
- discussion links;
- sample issue/theme/vote links;
- unfinished editorial/legal links.

Source rule:

```text
Every link must be mapped, hidden, or explicitly stubbed before source implementation.
```

### 6.4 WordPress-era contracts must be translated

The Article file includes WordPress field and template comments. They should be translated to Payload/Next.js concepts.

Example translation:

| Static / WordPress concept | Source-native interpretation |
|---|---|
| post title | `articles.title` |
| title_cn | future localized/custom field |
| post excerpt / dek | article deck/excerpt field |
| issue taxonomy/relation | Payload `issues` relation |
| author CPT relation | Payload `authors` relation |
| reading time / tea label | article metadata fields |
| article comments / Reader Notes | future Reader Notes/comment collection, not current pass |

### 6.5 Mobile exists but is not visually accepted

All three pages include responsive CSS. This is positive.

But responsive CSS is not the same as user-approved mobile design.

Requirement before source mapping:

```text
User must check desktop and mobile screenshots/pages, or the next notes document must explicitly mark mobile as not visually accepted yet.
```

---

## 7. Recommended corrections before creating missing pages

Before generating Articles Archive / Search / Topics / Collections static previews, apply these constraints:

1. Use Home / Article / Issue as visual vocabulary.
2. Do not bring Membership / Reading Room / VIP / Services / Community into the new core pages.
3. Use the conservative public editorial nav.
4. Keep all pages desktop + mobile responsive.
5. Keep pages editorial, not app/dashboard/SaaS/ecommerce.
6. Do not include working forms unless the form is purely visual and clearly marked as static.
7. Do not add new product modules.
8. Do not invent payment/account/membership flows.
9. Do not copy old static footers blindly.
10. Record every placeholder link decision.

---

## 8. User decisions still needed

The user should confirm these before moving to missing static page generation:

### 8.1 Home

```text
Can preview/ink-east-v1.html remain the homepage visual direction after pruning later-phase modules?
```

### 8.2 Article

```text
Can preview/ink-east-article-001-v1.html remain the article reading visual direction, with Reader Notes and membership surfaces deferred or simplified?
```

### 8.3 Issue

```text
Can preview/ink-east-issue-001-v1.html remain the Issue page visual direction, with discussion/community CTAs deferred or hidden?
```

### 8.4 Nav

```text
Use this public editorial nav for the next previews?
Home / Issues / Articles / Topics / Collections / Search / About
```

### 8.5 Missing page generation method

```text
Should the next missing static previews be generated by another frontend-focused AI, then reviewed and committed here?
```

Recommended answer for all five:

```text
Yes, proceed with this direction.
```

---

## 9. Next task after this review

Recommended next task:

```text
Core Static Completion Pass 1B · Generate Articles Archive Static Brief
```

Because Articles / Archive is the highest-priority missing static reference and directly supports the existing source route `/articles`.

Suggested output:

```text
docs/PROJECT-3-ARTICLES-ARCHIVE-STATIC-BRIEF.md
```

or, if the user wants to use another frontend AI first, generate a prompt/brief for that AI before committing any HTML.

---

## 10. Final handoff summary

```text
Home, Article, and Issue are strong enough to be used as the visual foundation for the first Ink & East source-native public frontend reconstruction, but they are not frozen as-is. They need user visual approval, public-phase nav pruning, footer unification, placeholder-link cleanup, WordPress-contract translation, and mobile visual review. The next missing static reference should be Articles / Archive, followed by Search, Topics, and Collections.
```
