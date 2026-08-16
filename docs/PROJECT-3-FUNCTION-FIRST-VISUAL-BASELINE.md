# Project 3 · Function-First Development and Provisional Visual Baseline

> Date locked: 2026-08-15  
> Repository: `Th23144/ink-east-planning`  
> Status: authoritative project-development rule unless explicitly superseded by the user.

## 1. Project 3 ownership

Project 3 is the long-term source-native platform for both sides of the product system:

- **Ink & East** — future editorial / journal main site.
- **Spatial Flow** — ecommerce / shop area under that main-site system.

Project 2 remains a separate WordPress / WooCommerce visual-replacement track. It does **not** own the long-term source-native ecommerce implementation.

However, Project 2 currently has **substantially broader and more mature ecommerce page coverage** than Project 3. Its completed ecommerce pages, states, interaction decisions, and operational flows may be reused as a coverage reference, behavior reference, copy/reference source, or migration input where appropriate.

Do not blindly transplant WordPress/WooCommerce implementation details into Project 3. Reuse the product truth and proven behavior; reimplement it in Project 3's source-native architecture.

## 2. Visual status is provisional for the whole project

The current visual system for **both Ink & East and Spatial Flow** is an **initial test / V0 visual baseline**.

The present static previews and their current shared shells are the working visual reference for ongoing development, but they are **not the final launch design**.

The user intends to perform another systematic visual update before final public launch.

Therefore:

- current visual consistency still matters;
- current pages must remain usable, coherent, and testable;
- visual defects that block functional testing must be fixed;
- but the project must not spend disproportionate time polishing V0 visuals as if they were launch-final;
- final typography, composition, spacing, art direction, and visual refinement may be replaced later.

## 3. Development priority

The correct development mode is:

```text
Function-complete + page-complete + structurally production-ready + visually provisional.
```

This is **not** permission to build incomplete pages or to ignore product structure.

The priority order is:

1. page / route coverage;
2. product and business workflows;
3. data model and CMS/admin editability;
4. permissions, state transitions, payments, forms, emails, search, cart/checkout and other functional systems;
5. responsive usability and accessibility sufficient for real testing;
6. V0 visual extension using the current baseline;
7. final launch visual redesign after the functional/product surface is stable.

## 4. Preventing a late visual redesign from becoming a rewrite

A future visual redesign is expected. To keep that redesign from becoming a large engineering rewrite, all new work should preserve replaceable presentation boundaries.

Required engineering rules:

- use shared Header / Footer / navigation / shell sources instead of page-local copies;
- keep design tokens and global spacing / typography / color decisions centralized where practical;
- keep business logic out of presentation components;
- keep CMS/content schemas independent from current V0 layout choices;
- keep product states and workflows semantically named rather than tied to a visual treatment;
- avoid hardcoding operational content into decorative markup;
- prefer reusable section/components for recurring page structures;
- preserve stable route and data contracts while allowing the UI layer to be replaced;
- avoid adding one-off page CSS that becomes a dependency for business behavior.

The launch visual update should ideally become a controlled presentation-layer replacement, not a data-model, routing, or workflow reconstruction.

## 5. Page completeness must be solved now, not during final visual design

Visual deferral must **not** defer page inventory.

Project 3 must know the intended public and operational surface before the final visual pass. Missing pages discovered only during launch redesign would create both engineering and design rework.

Because Project 2's ecommerce site is currently much more complete, the next ecommerce planning pass should use Project 2 as a **coverage benchmark** and create a Project 2 → Project 3 parity / migration matrix.

That matrix should classify each relevant ecommerce page or state as one of:

- already exists in Project 3;
- must be source-native in Project 3;
- can reuse Project 2 product/interaction decisions;
- intentionally deferred;
- obsolete / WordPress-only and should not be ported;
- requires a new source-native replacement.

The goal is not pixel-level copying. The goal is to make sure Project 3 does not omit required pages, states, or workflows simply because its current static preview set is smaller.

## 6. Practical decision rule for future work

When deciding whether to spend time on a visual issue during the current phase:

**Fix it now** if it affects:

- usability;
- responsive operation;
- information hierarchy needed to understand the feature;
- functional testing;
- shared component architecture;
- accessibility;
- route/state clarity;
- a layout contract that future pages depend on.

**Defer it to the final visual pass** if it is mainly:

- fine typography tuning;
- decorative spacing refinement;
- final art direction;
- non-functional animation polish;
- aesthetic experimentation that does not affect the product contract;
- launch-level visual differentiation.

## 7. Current project posture

Project 3 should therefore proceed primarily as a **function-first source-native build**, extending the current V0 visual language only enough to keep new pages coherent and testable.

This approach is expected to **reduce**, not increase, total delivery time — but only if page coverage is completed early and presentation is kept decoupled from business/data architecture.

The wrong version of “function-first” would be to leave route coverage unknown, hardcode each screen independently, and postpone all layout architecture until launch. That would create a large redesign tax.

The correct version is:

```text
Complete the product surface now.
Keep V0 visuals coherent but provisional.
Build reusable structural contracts now.
Replace/refine the visual layer near launch.
```
