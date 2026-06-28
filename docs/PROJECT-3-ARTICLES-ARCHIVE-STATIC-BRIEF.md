# Project 3 · Articles Archive Static Brief

> Repository: `Th23144/ink-east-planning`  
> Scope: Core Static Completion Pass 1B · Articles / Archive static page brief  
> Status: brief only; no HTML added in this task  
> Intended future static file: `preview/ink-east-articles-archive-v1.html`  
> Previous notes: `docs/PROJECT-3-CORE-STATIC-REVIEW-NOTES.md`

---

## 0. Purpose

This brief defines what the missing Ink & East `Articles / Archive` static preview should be before any HTML is generated.

The page should become the visual reference for the current source-native route:

```text
/articles
```

The page should feel like a quiet editorial archive / reading shelf, not a generic blog index, ecommerce category page, SaaS dashboard, social feed, or SEO tag list.

---

## 1. Why this page comes first

The existing static references already cover:

```text
Home
Article detail
Issue detail
```

The static gap audit and review notes identified `Articles / Archive` as the first missing core browse reference because:

- it directly supports an existing public source route: `/articles`;
- it connects Home, Issue, Article, Topics, and Collections;
- it gives the publication a real browsing surface beyond a single issue;
- it is necessary before static-to-source mapping can produce visible public frontend progress.

---

## 2. Source-native constraints

The current source app already has a minimal public archive/search layer.

Important source constraints:

- `/articles` exists;
- `/search` exists;
- archive/search use the public query layer;
- article results must require `status = published`;
- article results must require `visibility = public`;
- draft/private records must not appear in public archive/search/detail views;
- the earlier source task did not include final visual design, preview migration, accounts, membership, payments, comments, notes, community, service systems, external search, or pagination.

Therefore, this static page may show visual possibilities, but it must not imply that restricted content, membership-only content, accounts, comments, payments, or private drafts are already available.

---

## 3. Design references to use

Use these existing pages as visual vocabulary:

```text
preview/ink-east-v1.html
preview/ink-east-article-001-v1.html
preview/ink-east-issue-001-v1.html
```

Carry forward:

- warm old-paper background;
- ink / faded ink / vermilion seal color system;
- EB Garamond + Noto Serif SC + Inter + JetBrains Mono type language;
- publication / colophon / issue identity;
- bilingual English + Chinese fragments;
- thin editorial rules;
- spacious reading rhythm;
- restrained CTAs;
- quiet archive feeling.

Do not copy entire nav/footer blocks from any old file. Use them as tone references only.

---

## 4. Required page identity

Suggested page title:

```text
Articles · Ink & East
```

Suggested visible heading:

```text
The Archive
```

Suggested Chinese label:

```text
文庫
```

Alternative acceptable labels:

```text
Articles
Reading Archive
All Essays
All Pieces
```

Preferred positioning:

```text
A public shelf of essays, letters, classical readings, field notes, and issue pieces from Ink & East.
```

Avoid labels that feel too generic or blog-like:

```text
Blog
Posts
News
Resources
Content Hub
```

---

## 5. Required layout sections

The static preview should include these sections in order.

### 5.1 Public editorial nav

Use the conservative public editorial nav:

```text
Home
Issues
Articles
Topics
Collections
Search
About
```

Current page active state:

```text
Articles
```

Do not show these in the primary nav for this phase:

```text
VIP Library
Reading Room
Ask
Studio
Membership
Community
Sign in
Account
```

Reason: those systems are deferred and should not appear as live source-facing destinations yet.

---

### 5.2 Archive hero

The hero should be quiet and editorial.

Required content:

- small mono label, e.g. `INK & EAST · PUBLIC ARCHIVE`;
- large serif heading;
- Chinese mark / subtitle;
- short deck describing the archive;
- subtle metadata line showing example counts, e.g. `24 public pieces · 4 issues · 7 themes`.

Tone:

- literary;
- calm;
- not promotional;
- not app-like.

Avoid:

- huge marketing slogans;
- animated hero gimmicks;
- newsletter-first hero;
- product cards;
- login prompts.

---

### 5.3 Featured / latest issue anchor

The page should connect the archive to the latest or current issue without turning into the Issue page.

Recommended block:

```text
Currently reading from Issue 001
Wu Wei is not laziness
```

This block can include:

- issue number;
- issue title;
- short description;
- 2–3 linked article cards from that issue;
- CTA to view the issue.

This should visually connect to `preview/ink-east-issue-001-v1.html`.

---

### 5.4 Article list / reading shelf

This is the core of the page.

Required article card fields:

- article title;
- optional Chinese title;
- issue label;
- article type, e.g. Modern Essay / Classical Reading / Reader Letter / Field Note;
- short excerpt/deck;
- reading time;
- date or issue season;
- topic labels or collection label;
- simple link treatment.

Recommended layout:

- one larger lead article;
- followed by a restrained grid or vertical shelf;
- cards should feel like printed index entries or a journal shelf, not blog thumbnails.

Images:

- optional;
- if used, they should be quiet, paper-like, symbolic, or typographic;
- do not require image-heavy layout.

---

### 5.5 Soft grouping controls

The page should include lightweight browse cues.

Allowed controls:

- `All`;
- `Essays`;
- `Classical Readings`;
- `Reader Letters`;
- `Field Notes`;
- `Issue 001`;
- topic chips;
- collection chips.

Important:

```text
These controls are static visual references only unless implemented later.
```

They should not look like a heavy dashboard filter panel.

Preferred style:

- mono labels;
- subtle underline / border;
- quiet horizontal group;
- small count numbers.

---

### 5.6 Browse by path strip

Because Topics and Collections are upcoming missing pages, this archive page should gently point toward them.

Recommended block:

```text
Browse by path
Topics · Collections · Issues
```

This can include 3 small cards:

1. Topics — thematic doors;
2. Collections — editor-curated shelves;
3. Issues — complete journal numbers.

This helps define the difference:

```text
Topics = thematic doors / conceptual labels.
Collections = editor-curated shelves / ordered reading sets.
Issues = publication numbers.
```

---

### 5.7 Empty state

The static preview must include an empty state reference.

It can be hidden in comments or placed as a second sample state near the bottom.

Required empty state content:

```text
No public articles match this view yet.
```

Tone should stay literary and calm, not error-like.

Do not expose private/draft content as a fallback.

---

### 5.8 Pagination / older entries

The source-native task did not include pagination yet.

The static preview may show a quiet future placeholder, but it must not imply production pagination exists.

Allowed text:

```text
Older entries will appear here as the archive grows.
```

or a disabled/light visual row:

```text
More from the archive · coming as the shelf grows
```

Avoid:

- working infinite scroll;
- app-like pagination controls;
- heavy load-more button;
- fake page counts that imply implemented behavior.

---

### 5.9 Footer

Use a restrained shared footer direction.

Footer may include:

- Ink & East mark;
- one-sentence mission;
- public links only;
- subtle related note to Spatial Flow, if included carefully.

Allowed public links:

```text
Home
Issues
Articles
Topics
Collections
Search
About
Editorial Standards
Contact
```

Links to future modules should be hidden or marked as future, not presented as live destinations.

Do not copy old footers directly.

---

## 6. Mobile / responsive requirements

The preview must include mobile coverage.

Required breakpoints or equivalent behavior:

- desktop layout;
- tablet layout;
- mobile layout.

Mobile requirements:

- no horizontal overflow;
- readable article cards;
- hero does not occupy too much vertical space;
- nav behavior is defined;
- filters/chips wrap cleanly;
- footer columns collapse;
- typography remains readable;
- article cards remain tappable;
- no hover-only behavior for essential information.

If any motion or transition is used, include reduced-motion handling.

---

## 7. Content samples to use

Use Issue 001 and article references from existing previews.

Recommended sample articles:

1. `Why doing nothing is sometimes the hardest practice.`  
   Chinese: `為什麼休息最難`  
   Type: Modern Essay  
   Issue: Issue 001 · Wu Wei

2. `Wu Wei is not laziness.`  
   Chinese: `無為，非懶`  
   Type: Editor's Note / Issue Essay

3. `The man who could not stop rearranging his room.`  
   Chinese: `不停整理房間的人`  
   Type: Original Story

4. `Three passages from Laozi for people who feel stuck.`  
   Chinese: `老子 · 三章選`  
   Type: Classical Reading

5. `I rest, but I still feel guilty. Why?`  
   Chinese: `為何休息會愧疚`  
   Type: Reader Letter

6. `On the discipline of letting alone.`  
   Chinese: `不擾之道`  
   Type: Long Read

7. `A field note from Wudang: walking with monks who do not hurry.`  
   Chinese: `武當紀行`  
   Type: Field Note

8. `Archive: three rest poems from Tao Yuanming.`  
   Chinese: `陶淵明 · 三首`  
   Type: Archive Note

Do not add random unrelated topics just to fill the page.

---

## 8. Forbidden elements

Do not include:

- ecommerce product cards;
- cart, price, SKU, checkout, wishlist;
- membership pricing;
- paywall overlays;
- login requirement;
- user dashboard;
- comments / live Reader Notes UI;
- social feed layout;
- upvote/downvote/comment counters;
- newsletter popups;
- aggressive marketing hero;
- AI chatbot UI;
- temple/red-gold cliché styling;
- dashboard filter panels;
- direct WordPress/ACF/CPT implementation comments;
- raw `href="#"` without explicit placeholder treatment.

---

## 9. Link rules

Every link in the static preview must be one of these:

1. a real relative preview link to an existing file;
2. a clearly marked placeholder with `data-placeholder="true"`;
3. a disabled visual element, not an anchor;
4. a future route note in comments.

Recommended existing preview links:

```text
./ink-east-v1.html
./ink-east-issue-001-v1.html
./ink-east-article-001-v1.html
```

Do not create fake links to unbuilt membership, account, payment, or community pages in this core archive preview.

---

## 10. Static preview acceptance checklist

The future `preview/ink-east-articles-archive-v1.html` should be accepted only when:

1. It visually matches the Ink & East paper/ink/seal system.
2. It feels like an editorial archive, not a blog index.
3. It uses the conservative public editorial nav.
4. It includes a clear archive hero.
5. It includes a featured/current issue anchor.
6. It includes a meaningful article shelf/list.
7. It includes soft grouping controls.
8. It includes a path strip for Topics / Collections / Issues.
9. It includes an empty state reference.
10. It handles mobile/responsive layout.
11. It does not introduce deferred modules.
12. It does not imply private/draft/membership content is public.
13. It does not include production claims about pagination or account behavior.
14. It has placeholder links explicitly handled.
15. It is ready to be reviewed by the user before source mapping.

---

## 11. Prompt for a frontend-focused AI

Use this prompt if another frontend-focused AI will generate the static HTML preview.

```text
You are generating a single static HTML preview page for Ink & East, a quiet literary digital journal whose visual language is warm old paper, black ink, faded ink, vermilion seal accent, EB Garamond / Noto Serif SC / Inter / JetBrains Mono typography, bilingual English + Chinese fragments, and restrained editorial spacing.

Create one self-contained static HTML file for:

preview/ink-east-articles-archive-v1.html

Page purpose:
- public Articles / Archive page for Ink & East;
- supports the future source route /articles;
- feels like an editorial archive / reading shelf, not a generic blog list, ecommerce category, SaaS dashboard, or social feed.

Use these existing visual references conceptually:
- Home / journal cover: preview/ink-east-v1.html
- Article detail: preview/ink-east-article-001-v1.html
- Issue detail: preview/ink-east-issue-001-v1.html

Required nav:
Home / Issues / Articles / Topics / Collections / Search / About
Articles must be active.
Do not show VIP Library, Reading Room, Ask, Studio, Membership, Community, Sign in, Account.

Required sections:
1. quiet editorial nav;
2. archive hero with small mono label, large serif heading, Chinese label, short deck, and metadata line;
3. current/latest issue anchor for Issue 001 — Wu Wei is not laziness;
4. article shelf/list with sample articles from Issue 001;
5. soft grouping controls such as All, Essays, Classical Readings, Reader Letters, Field Notes, Issue 001;
6. Browse by path strip for Topics, Collections, Issues;
7. empty-state reference;
8. restrained shared footer direction.

Sample article content:
- Why doing nothing is sometimes the hardest practice. / 為什麼休息最難 / Modern Essay
- Wu Wei is not laziness. / 無為，非懶 / Editor's Note
- The man who could not stop rearranging his room. / 不停整理房間的人 / Original Story
- Three passages from Laozi for people who feel stuck. / 老子 · 三章選 / Classical Reading
- I rest, but I still feel guilty. Why? / 為何休息會愧疚 / Reader Letter
- On the discipline of letting alone. / 不擾之道 / Long Read
- A field note from Wudang: walking with monks who do not hurry. / 武當紀行 / Field Note
- Archive: three rest poems from Tao Yuanming. / 陶淵明 · 三首 / Archive Note

Mobile requirements:
- include responsive CSS for desktop, tablet, and mobile;
- no horizontal overflow;
- readable mobile cards;
- nav behavior must be defined;
- filter chips must wrap cleanly;
- footer must collapse;
- no hover-only essential information;
- include reduced-motion handling if animations are used.

Forbidden:
- ecommerce product cards;
- cart/checkout/price/SKU/wishlist;
- membership pricing;
- paywall overlays;
- login/account requirement;
- Reader Notes/comments/social feed/upvotes;
- newsletter popup;
- SaaS dashboard styling;
- temple/red-gold cliché styling;
- WordPress/ACF/CPT implementation comments;
- raw href="#" links unless clearly marked as placeholder with data-placeholder="true".

Output only a complete HTML document with inline CSS and minimal inline JS only if essential. Do not add explanations outside the HTML.
```

---

## 12. Next task after this brief

Recommended next task:

```text
Core Static Completion Pass 1C · Create or Review Articles Archive Static HTML
```

Two acceptable paths:

### Path A — external frontend AI first

1. User sends the prompt above to another frontend-focused AI.
2. User uploads the generated HTML here.
3. This project window reviews the HTML for scope, mobile coverage, placeholder risk, naming, and consistency.
4. If accepted, commit it as:

```text
preview/ink-east-articles-archive-v1.html
```

### Path B — direct static creation here

Only use this if the user explicitly wants ChatGPT to create the static file directly.

Given the user's visual-quality concern, Path A is preferred.

---

## 13. Final summary

```text
The Articles / Archive static page should become the first missing core browse preview for Ink & East. It must be public, editorial, responsive, and aligned with the existing Home / Article / Issue visual language. It should not introduce membership, account, payment, Reader Notes, services, community, ecommerce, or dashboard behavior. The safest next step is to use this brief as the prompt for a stronger frontend AI, then review and commit the resulting HTML as a static preview reference.
```
