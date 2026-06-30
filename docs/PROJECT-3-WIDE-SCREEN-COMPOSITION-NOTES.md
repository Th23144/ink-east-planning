# Project 3 · Wide-Screen Composition Follow-up Notes

> Repository: `Th23144/ink-east-planning`  
> Scope: future static-preview layout refinement for wide screens  
> Status: planning note only  
> Does not modify `preview/*.html`  
> Does not modify `apps/web`

---

## 0. Why this note exists

During Membership review, the user identified a useful approach for pages with large right-side empty space:

```text
Do not necessarily shrink the page back into a narrow centered column.
Instead, keep the wider editorial surface and add a quiet, brand-consistent visual anchor.
```

The Membership reference used a small journal-cover / seal-card style block on the right side of the hero. The user did not accept the whole external Membership redesign, but did accept the design idea of using that kind of right-side editorial object to balance empty space.

This note must not be understood as only an "empty space" task.

It covers two related but different wide-screen problems:

```text
1. The page or section is constrained by a narrow max-width and does not fill the screen well.
2. The page or section is already wide enough, but the composition has awkward empty zones that need a quiet editorial anchor.
```

---

## 1. Important boundary

This is not part of the current active sequence.

Do not let this interrupt:

```text
1. Membership hero-card review
2. static preview link audit
3. Ink & East preview interlinking
4. Spatial Flow preview navigation correction
5. Add to Cart static integration decision
6. header/footer source normalization
```

This wide-screen composition work should be a later dedicated pass.

---

## 2. Pages already noticed

### Membership

Problem:

```text
Widened hero felt correct, but the right side was too empty.
```

Useful solution:

```text
Add a quiet journal-cover / seal-card block on the right side, without changing the rest of the page.
```

### Articles Archive

Reference:

```text
preview/ink-east-articles-archive-v1.html
```

Problem:

```text
The page has a similar kind of wide-screen right-side empty space in the upper area.
```

Current decision:

```text
Do not fix now.
Record it for a later wide-screen composition pass.
```

### Other constrained-width preview pages

Problem:

```text
Some preview pages or sections are still visually boxed by narrow max-width containers and do not properly use the available screen width.
```

Current decision:

```text
Do not fix these one by one during the current Membership / interlinking sequence.
Record them for a later dedicated wide-screen layout audit.
```

---

## 3. General method to test later

For pages that feel too empty after the layout is allowed to breathe on wide screens, consider one of these quiet editorial anchors:

```text
1. journal-cover card;
2. seal-card block;
3. faint large Chinese glyph watermark;
4. issue-spine / archive-spine object;
5. vertical masthead fragment;
6. small colophon panel;
7. paper-card object with hairline frame.
```

Rules:

```text
Do not make the page commercial.
Do not turn the anchor into an ad card, product card, pricing card, or SaaS feature card.
Do not add noisy illustration.
Do not change the page's meaning just to fill space.
Do not use this as a substitute for real layout judgment.
```

---

## 4. Future pass proposal

Expected later PR:

```text
preview(ink-east): refine wide-screen layout and composition
```

Work order:

```text
1. Audit pages that are visually constrained or have awkward empty zones on wide screens.
2. Separate at least two problem types:
   - constrained-width problem: the page or section is too boxed/narrow and does not fill the screen well;
   - composition problem: the page or section is wide enough but lacks a balancing object.
3. For constrained-width problems, widen the relevant section carefully without blindly stretching reading text.
4. For composition problems, propose one small editorial anchor or leave it unchanged.
5. Do not batch-redesign full pages.
6. Keep body text reading widths controlled.
7. Keep font sizes stable unless the page already requires a separate typography review.
```

---

## 5. Final summary

```text
The Membership hero-card idea is a useful pattern for later wide-screen composition problems, but the later pass is broader than empty-space cleanup. It must also cover pages or sections that are artificially constrained by narrow max-width containers and do not fill wide screens properly. Articles Archive may need a similar composition treatment later, but all of this should wait for a dedicated wide-screen layout/composition pass and should not interrupt the current navigation/interlinking plan.
```
