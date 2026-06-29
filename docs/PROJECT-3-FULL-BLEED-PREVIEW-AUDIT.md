# Project 3 · Targeted Full-Bleed Static Preview Audit

> Repository: `Th23144/ink-east-planning`  
> Scope: Ink & East static preview width / selected section layout review  
> Status: audit + preview harness only  
> Branch preview helper: `preview/full-bleed/review.html`

---

## 0. Purpose

This audit records a targeted layout review for static preview pages that can feel too narrow or boxed on wide screens.

The current rule is narrower than the first full-bleed experiment:

```text
Do not blindly widen every page.
Only widen the specific sections the user selected.
Do not change font sizes.
Do not change content.
Do not modify apps/web.
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

- large hero / invitation surfaces trapped in a narrow centered `.inner`;
- full-width service statement panels forced into a narrow `.page` shell;
- article headers that should feel like editorial front matter but are constrained to the reading column;
- page-level footer backgrounds that feel visually disconnected from the rest of the journal.

---

## 2. First batch and current targeted decisions

| Page | User decision | Current preview helper behavior |
|---|---|---|
| `preview/ink-east-membership-v1.html` | Expand only the hero invitation area and the two-way membership section. Keep other sections unchanged. | Only `.mb-hero .inner` and `.mb-tiers .wrap` are widened. |
| `preview/ink-east-custom-ebook-v1.html` | Expand the hero panel and premise panel. Give the second expanded panel a slight offset feeling. Also note that the page overall feels strange and should likely be redesigned by a stronger frontend pass. | Hero and premise are widened only in the helper. Premise is slightly offset. Footer styles are temporarily repaired because the original footer structure is visually broken. |
| `preview/ink-east-article-002-vip-v1.html` | Expand only the article hero/header. Keep the rest unchanged. | Only `.article-header .inner` is widened; reading/body columns stay unchanged. |
| `preview/ink-east-v1.html` | Do not blindly widen Home. Instead preview swapping the newsletter/dispatch background and the footer background. If good, later consider syncing journal footers. | Home helper only swaps `.dispatch` and `footer` background/color treatment. |

---

## 3. Preview links

### Membership

Original:

```text
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-membership-v1.html
```

Targeted review:

```text
https://raw.githack.com/Th23144/ink-east-planning/project-3-full-bleed-preview-audit/preview/full-bleed/review.html?file=ink-east-membership-v1.html
```

### Custom Ebook

Original:

```text
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-custom-ebook-v1.html
```

Targeted review:

```text
https://raw.githack.com/Th23144/ink-east-planning/project-3-full-bleed-preview-audit/preview/full-bleed/review.html?file=ink-east-custom-ebook-v1.html
```

### VIP Article 002

Original:

```text
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-article-002-vip-v1.html
```

Targeted review:

```text
https://raw.githack.com/Th23144/ink-east-planning/project-3-full-bleed-preview-audit/preview/full-bleed/review.html?file=ink-east-article-002-vip-v1.html
```

### Home footer swap

Original:

```text
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-v1.html
```

Targeted review:

```text
https://raw.githack.com/Th23144/ink-east-planning/project-3-full-bleed-preview-audit/preview/full-bleed/review.html?file=ink-east-v1.html
```

---

## 4. Custom Ebook bug note

The Custom Ebook page has a real footer styling bug in the original file.

Observed:

```text
The CSS defines `.site-foot`, `.foot-cols`, `.foot-meta`, etc.
The HTML at the bottom uses a bare `<footer>` with `.foot-mark`, `.foot-cols`, and `.colophon-final`.
```

Result:

```text
The footer layout appears structurally broken in the original preview.
```

The helper temporarily injects footer styles so the user can continue layout review, but the original file still needs a proper bug-fix PR if this page remains in use.

---

## 5. Simple external AI prompt for Custom Ebook redesign

Use this if another frontend-focused AI should freely improve the Custom Ebook page without over-constraining it:

```text
Please redesign this Ink & East Custom Ebook Studio static page to feel more beautiful, editorial, spacious, and premium.

Keep the existing Ink & East brand direction: quiet literary journal, warm paper, black ink, vermilion accent, Chinese classical texture, English-first writing with small Chinese labels.

The page currently feels visually awkward and too narrow. Please improve the overall page rhythm, make the hero section and the main premise section feel more expansive, and give those major sections a stronger editorial layout. The second expanded section should not simply repeat the first; give it some subtle offset or staggered visual rhythm.

Also fix the footer layout so it matches the rest of Ink & East's journal footer style and is not structurally broken.

You may freely improve layout, spacing, hierarchy, and section composition. Do not turn it into a SaaS landing page, ecommerce sales page, marketing funnel, or generic agency website. Keep it literary, quiet, expensive, and editorial.

Return a single complete self-contained HTML file with CSS inside <style>.
```

---

## 6. Next decision after preview

After reviewing the targeted helper pages, choose one of these paths:

### Path A — apply selected layout cleanup to original static files

Create a real static cleanup PR for only the accepted page/section changes.

### Path B — only fix Custom Ebook footer bug

Do not adopt layout changes yet; only repair the original Custom Ebook footer CSS/HTML mismatch.

### Path C — use Custom Ebook prompt externally

Let a stronger frontend AI redesign Custom Ebook first, then review and archive its generated HTML.

---

## 7. Final summary

```text
The review has moved from a broad full-bleed experiment to targeted layout tests: Membership hero + tiers only; Custom Ebook hero + premise + temporary footer repair; VIP Article 002 hero only; Home footer/newsletter background swap only. The helper remains non-destructive and does not modify original static files or apps/web.
```
