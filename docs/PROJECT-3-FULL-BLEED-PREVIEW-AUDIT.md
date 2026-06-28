# Project 3 · Full-Bleed Static Preview Audit

> Repository: `Th23144/ink-east-planning`  
> Scope: Ink & East static preview width / full-bleed review  
> Status: audit + preview harness only  
> Branch preview helper: `preview/full-bleed/review.html`

---

## 0. Purpose

This audit records the static preview pages that may suffer from a narrow, boxed, or small-page feeling because large layout wrappers use `max-width` with centered margins.

The user specifically identified this recurring issue:

```text
The whole page can feel trapped inside a narrow centered width instead of spreading across the viewport like the stronger existing static references.
```

The review rule for this pass:

```text
Do not change font sizes.
Only test full-bleed / wider layout behavior, spacing, and container width.
```

---

## 1. Important distinction

Not every `max-width` is wrong.

Acceptable `max-width` examples:

- article reading columns;
- paragraph line-length controls;
- form fields;
- small notes;
- editorial captions.

Problematic `max-width` examples:

- full hero content trapped in a narrow centered `.inner`;
- whole sections wrapped in a narrow `.wrap`;
- repeated page-level layout shells using `max-width` and `margin: 0 auto`;
- large landing pages that should feel like full-width editorial spreads but instead read like cards inside a page.

Therefore, this audit does not say all `max-width` should be deleted. It says large page-level containers should be tested as full-bleed, while reading comfort can remain controlled inside specific text blocks.

---

## 2. Initial search results

Search patterns used:

```text
"max-width" "margin: 0 auto" "preview/"
"max-width:" "preview/ink-east"
"margin:0 auto" "preview/ink-east"
"margin: 0 auto" "preview/ink-east"
```

Pages surfaced by search:

| Page | Search status | Initial classification |
|---|---|---|
| `preview/ink-east-membership-v1.html` | Found | High priority full-bleed review |
| `preview/ink-east-custom-ebook-v1.html` | Found | High priority full-bleed review |
| `preview/ink-east-article-002-vip-v1.html` | Found | Medium/high priority review; protect reading column |
| `preview/ink-east-v1.html` | Found | Mixed; mostly full-spread already, but has some constrained blocks |

Pages not surfaced by this first search may still require visual review later, but the four above are the first batch.

---

## 3. First-batch pages for preview

This branch adds a preview helper that can load the original static page and inject width-only/full-bleed override CSS for visual comparison.

The first batch is:

```text
preview/ink-east-membership-v1.html
preview/ink-east-custom-ebook-v1.html
preview/ink-east-article-002-vip-v1.html
preview/ink-east-v1.html
```

The helper is:

```text
preview/full-bleed/review.html
```

It does not modify the original files. It is a review harness.

---

## 4. What the preview helper changes

The helper attempts to change only layout containment and spacing.

Allowed changes:

- page-level container width;
- section/hero/footer horizontal spread;
- page-level gutter behavior;
- wrapper `max-width` behavior;
- centered large wrappers that make pages feel small;
- full-bleed preview framing.

Forbidden changes:

- font-size changes;
- font-family changes;
- color changes;
- content changes;
- nav text changes;
- module additions;
- source app implementation;
- `apps/web` changes.

---

## 5. Review notes by page

### 5.1 `preview/ink-east-membership-v1.html`

Observed risk:

- `.mb-hero .inner` uses `max-width: 880px; margin: 0 auto`;
- `.mb-why .inner` uses `max-width: 780px; margin: 0 auto`;
- `.mb-tiers .wrap` uses `max-width: 1100px; margin: 0 auto`;
- `.mb-cr-aside .inner` uses `max-width: 780px; margin: 0 auto`.

Classification:

```text
High priority.
Likely to feel boxed on wide screens.
```

Preview goal:

```text
Keep typography size unchanged, but let major membership sections breathe across the viewport.
```

---

### 5.2 `preview/ink-east-custom-ebook-v1.html`

Observed risk:

- surfaced by `max-width` + `margin:0 auto` search;
- historically already had footer consistency review issues;
- likely uses centered shells for service/studio content.

Classification:

```text
High priority.
Needs wide-layout review before any future reuse.
```

Preview goal:

```text
Test whether service/studio panels can feel more editorial and less boxed without changing font sizes.
```

---

### 5.3 `preview/ink-east-article-002-vip-v1.html`

Observed risk:

- surfaced by `max-width` + centered layout search;
- VIP article page may contain both legitimate reading-width constraints and page-level boxed areas.

Classification:

```text
Medium/high priority.
Protect article reading columns; only widen page-level framing and non-reading wrappers.
```

Preview goal:

```text
Keep article body readable, but widen surrounding page sections / paywall surfaces if they feel small.
```

---

### 5.4 `preview/ink-east-v1.html`

Observed risk:

- surfaced by search, but the homepage already has many full-width sections;
- some `max-width` uses are probably legitimate line-length/form constraints.

Classification:

```text
Mixed.
Use as a control page, not an automatic rewrite target.
```

Preview goal:

```text
Compare carefully. Do not remove useful editorial line-length constraints just because they contain max-width.
```

---

## 6. Next decision after preview

After reviewing the full-bleed helper pages, choose one of these paths:

### Path A — accept full-bleed direction

Create a real static cleanup PR that directly updates the original affected HTML files.

Rules:

```text
No font-size changes.
No content changes.
No source app changes.
Only layout containment / section width / spacing cleanup.
```

### Path B — accept only some pages

Apply full-bleed cleanup only to selected pages, likely:

```text
preview/ink-east-membership-v1.html
preview/ink-east-custom-ebook-v1.html
```

Leave article reading pages mostly unchanged.

### Path C — reject helper approach

Use the helper only as a visual diagnostic and wait for a stronger frontend pass to rewrite the layout properly.

---

## 7. Final summary

```text
The first width audit found four Ink & East static pages with possible page-level max-width / centered-wrapper issues: Membership, Custom Ebook, VIP Article 002, and Home. Membership and Custom Ebook are highest priority. VIP Article needs careful protection of reading columns. Home is mostly a control page. This branch adds a non-destructive preview helper so the user can compare full-bleed layout behavior before any original HTML files are modified.
```
