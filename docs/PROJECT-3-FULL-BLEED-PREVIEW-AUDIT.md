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
| `preview/ink-east-membership-v1.html` | The first widened direction was acceptable, but the right side has too much empty space. The later tightening/centering attempt is cancelled. Another frontend AI should improve this page. | Restored to the earlier widened preview: hero and two-way membership section are widened; empty-space refinement is deferred. |
| `preview/ink-east-custom-ebook-v1.html` | The targeted version was rejected. The page should be given to another frontend AI for a freer redesign. | No layout override is applied. Original page is shown only. Footer bug remains documented. |
| `preview/ink-east-article-002-vip-v1.html` | Top article hero/header widening is accepted. Sticky sidebar should remain working. | Top hero remains widened. Sticky sidebar is explicitly preserved in the helper. Article body remains unchanged. |
| `preview/ink-east-v1.html` | Footer/newsletter background swap was rejected. Keep original. | No background swap or width override is applied. Original Home is shown only. |

---

## 2. Preview links

### Membership

Original:

```text
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-membership-v1.html
```

Restored widened review:

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

Accepted targeted review:

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

## 3. External frontend AI task queue

The user currently expects other frontend AI tools to handle three frontend/interface items:

### Task 1 — Custom Ebook redesign

Status:

```text
Needs external frontend AI.
The quick targeted layout treatment was rejected.
The page feels generally awkward and should be redesigned more freely.
```

Prompt:

```text
Please redesign this Ink & East Custom Ebook Studio static page to feel more beautiful, editorial, spacious, and premium.

Keep the existing Ink & East brand direction: quiet literary journal, warm paper, black ink, vermilion accent, Chinese classical texture, English-first writing with small Chinese labels.

The page currently feels visually awkward and too narrow. Please improve the overall page rhythm, make the hero section and the main premise section feel more expansive, and give those major sections a stronger editorial layout. The second expanded section should not simply repeat the first; give it some subtle offset or staggered visual rhythm.

Also fix the footer layout so it matches the rest of Ink & East's journal footer style and is not structurally broken.

You may freely improve layout, spacing, hierarchy, and section composition. Do not turn it into a SaaS landing page, ecommerce sales page, marketing funnel, or generic agency website. Keep it literary, quiet, expensive, and editorial.

Return a single complete self-contained HTML file with CSS inside <style>.
```

### Task 2 — Membership right-side empty-space refinement

Status:

```text
Needs external frontend AI.
The widened direction is acceptable, but the hero right side has too much empty space.
The later tightening/centering attempt is cancelled.
```

Reference links:

```text
Original:
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-membership-v1.html

Widened preview to improve:
https://raw.githack.com/Th23144/ink-east-planning/project-3-full-bleed-preview-audit/preview/full-bleed/review.html?file=ink-east-membership-v1.html
```

Prompt:

```text
Please improve this Ink & East Membership page based on the widened preview.

The widened direction is good, especially the larger invitation hero and the wider two-way membership section. The problem is that the top hero now leaves too much empty space on the right side and feels visually unbalanced.

Keep the Ink & East style: quiet literary journal, warm paper, black ink, vermilion accent, restrained Chinese labels, editorial spacing, no SaaS pricing-table feeling.

Please freely improve the layout balance, especially the right side of the hero. You may add a quiet editorial visual element, subtle framing, column rhythm, seal/glyph treatment, or other composition changes if they make the page feel more intentional. Do not make it commercial, flashy, or salesy.

Keep font sizes generally consistent with the existing page unless a small adjustment is necessary for the composition.

Return a single complete self-contained HTML file with CSS inside <style>.
```

### Task 3 — Articles Archive static HTML

Status:

```text
User says `ink-east-articles-archive-v1.html` is already generated and accepted.
It can be sent now without disrupting this PR.
It should be handled in a separate branch / separate PR when received.
```

Target path:

```text
preview/ink-east-articles-archive-v1.html
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

The user rejected the quick layout treatment and will try another frontend AI. If this static page remains in use, the footer bug should still be fixed later, either as part of a full Custom Ebook redesign or as a small bug-fix PR.

---

## 5. Next decision after preview

After reviewing the refined helper pages, choose one of these paths:

### Path A — apply selected layout cleanup to original static files

Likely candidate:

```text
preview/ink-east-article-002-vip-v1.html
```

Membership should wait for external AI refinement.

### Path B — only fix Custom Ebook footer bug

Do not adopt layout changes yet; only repair the original Custom Ebook footer CSS/HTML mismatch.

### Path C — process incoming external AI files separately

Use separate branches / PRs for:

```text
preview/ink-east-custom-ebook-v1.html
preview/ink-east-membership-v1.html
preview/ink-east-articles-archive-v1.html
```

---

## 6. Final summary

```text
The accepted part of this helper is VIP Article 002 hero/header widening with sticky sidebar preserved. Membership has been restored to the earlier widened preview for external AI refinement. Custom Ebook and Home no longer receive helper layout overrides. Articles Archive can be submitted now and handled separately without disrupting this PR.
```
