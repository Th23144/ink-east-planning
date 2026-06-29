# Project 3 · Targeted Full-Bleed Static Preview Audit

> Repository: `Th23144/ink-east-planning`  
> Scope: Ink & East static preview width / selected section layout review  
> Status: audit + preview harness only  
> Branch preview helper: `preview/full-bleed/review.html`

---

## 0. Purpose

This audit records a targeted layout review for static preview pages that can feel too narrow or boxed on wide screens.

The current rule is intentionally narrow:

```text
Do not blindly widen every page.
Only widen the specific sections the user selected.
Do not change font sizes.
Do not change content.
Do not modify apps/web.
```

---

## 1. Current targeted decisions

| Page | User decision | Current helper behavior |
|---|---|---|
| `preview/ink-east-membership-v1.html` | The hero and two-way membership section are acceptable, but the hero's right side felt too empty. | Hero remains widened but is slightly contained to reduce empty right-side space. Two-way membership section remains widened. Other sections remain original. |
| `preview/ink-east-custom-ebook-v1.html` | The targeted version was rejected. The page should be given to another frontend AI for a freer redesign. | No layout override is applied. Original page is shown only. Footer bug remains documented. |
| `preview/ink-east-article-002-vip-v1.html` | Top article hero/header widening is acceptable, but left sidebar sticky behavior broke. | Top hero remains widened. Sticky sidebar is explicitly preserved in the helper. Article body remains unchanged. |
| `preview/ink-east-v1.html` | Footer/newsletter background swap was rejected. Keep original. | No background swap or width override is applied. Original Home is shown only. |

---

## 2. Preview links

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

Helper view, now original only:

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

### Home

Original:

```text
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-v1.html
```

Helper view, now original only:

```text
https://raw.githack.com/Th23144/ink-east-planning/project-3-full-bleed-preview-audit/preview/full-bleed/review.html?file=ink-east-v1.html
```

---

## 3. Custom Ebook bug note

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

The user rejected the quick layout treatment and will try another frontend AI. If this static page remains in use, the footer bug should still be fixed later, either as part of a full Custom Ebook redesign or as a small bug-fix PR.

---

## 4. Simple external AI prompt for Custom Ebook redesign

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

## 5. Next decision after preview

After reviewing the refined helper pages, choose one of these paths:

### Path A — apply selected layout cleanup to original static files

Likely candidates:

```text
preview/ink-east-membership-v1.html
preview/ink-east-article-002-vip-v1.html
```

### Path B — only fix Custom Ebook footer bug

Do not adopt layout changes yet; only repair the original Custom Ebook footer CSS/HTML mismatch.

### Path C — use Custom Ebook prompt externally

Let a stronger frontend AI redesign Custom Ebook first, then review and archive its generated HTML.

---

## 6. Final summary

```text
The review is now targeted and conservative: Membership hero is widened but slightly contained to reduce empty right-side space; Membership tiers remain widened; VIP Article 002 hero remains widened while sticky sidebar is preserved; Custom Ebook layout override is removed and deferred to another AI; Home footer/background swap is removed and original Home is preserved.
```
