# Spatial Flow · Add to Cart Feedback Concept D

Source upload captured from the user-provided file:

`add-to-cart-concept-d-lift-settle.html`

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

Important implementation boundary:

This is a static preview reference only. It should not be wired into WooCommerce or `apps/web` directly from this repository without a separate implementation task.

Next intended action:

After this preview reference is stored, continue with:

```text
Project 3 · Core Static Completion Pass 1
```

The original uploaded HTML source should be added as:

```text
preview/spatial-flow-add-to-cart-concept-d-lift-settle.html
```

If the connector blocks writing raw HTML/JS, manually upload the provided HTML file to the same path or retry through a patch workflow that permits static preview HTML.
