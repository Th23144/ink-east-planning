# Spatial Flow · Add to Cart Feedback Concept D

Source upload captured from the user-provided file:

`preview/add-to-cart-concept-d-lift-settle.html`

Purpose:

- Preserve the product-detail add-to-cart feedback concept before Project 3 core static completion work continues.
- Record the ecommerce-side shortboard discovered during Project 2: the product detail page needs visible feedback after Add to Cart.
- Treat this as a Spatial Flow ecommerce subsite preview reference, not as a source-native Ink & East implementation.

Concept name:

```text
Concept D · Lift & Settle
```

Behavior summary:

- Product page mock using Spatial Flow V2 design tokens.
- Add to Cart button changes state from `Add to cart` to `Added`.
- Header cart count increments and bumps visually.
- Product thumbnail flies toward the cart location.
- A circular seal appears near the cart with the in-cart count.
- A compact cart popover appears under the header cart.
- Popover contains item title, subtotal, Checkout, and View cart buttons.
- Escape closes the popover.
- Reduced-motion media query is included in the uploaded source.

Viewport coverage:

- This preview is not desktop-only.
- It includes responsive/mobile behavior for the product layout, Add to Cart row, full-width mobile Add to Cart button, and mobile cart popover positioning.
- The source includes breakpoints for tablet/mobile layouts and a reduced-motion fallback.

Important implementation boundary:

This is a static preview reference only. It should not be wired into WooCommerce or `apps/web` directly from this repository without a separate implementation task.

Repository status:

```text
Actual uploaded HTML path:
preview/add-to-cart-concept-d-lift-settle.html

Reference note path:
preview/spatial-flow-add-to-cart-concept-d-lift-settle.README.md
```

Next intended action:

After this preview reference is accepted, continue with:

```text
Project 3 · Core Static Completion Pass 1
```
