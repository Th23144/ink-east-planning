import Link from "next/link";

import { CartLineControls } from "@/components/commerce/CartLineControls";
import { ProductArtwork } from "@/components/commerce/ProductArtwork";
import { formatMoney, getCurrentCart } from "@/lib/commerce";

export default async function CartPage() {
  const cart = await getCurrentCart();

  return (
    <main className="sf-commerce-main">
      <nav className="sf-commerce-crumb" aria-label="Breadcrumb">
        <Link href="/">Ink & East</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><strong>Bag</strong>
      </nav>

      <section className="sf-cart-heading">
        <div>
          <p className="sf-commerce-eyebrow">Spatial Flow / Bag</p>
          <h1>Your <em>Bag</em>.</h1>
        </div>
        <p>{cart.item_count} {cart.item_count === 1 ? "piece" : "pieces"}</p>
      </section>

      {cart.lines.length === 0 ? (
        <section className="sf-commerce-empty sf-cart-empty">
          <p className="sf-commerce-eyebrow">The room is quiet</p>
          <h2>Your Bag is empty.</h2>
          <p>Browse the current edit and add a piece when something belongs in the room.</p>
          <Link className="sf-commerce-button" href="/shop">Browse the shop →</Link>
        </section>
      ) : (
        <div className="sf-cart-layout">
          <section className="sf-cart-lines" aria-label="Bag items">
            {cart.lines.map((line) => (
              <article className="sf-cart-line" key={line.line_key}>
                <Link className="sf-cart-line__art" href={`/shop/${line.product_slug}`}>
                  <ProductArtwork image={line.image} tone={line.artwork_tone} alt={line.product_title} />
                </Link>
                <div className="sf-cart-line__body">
                  <div>
                    <p className="sf-commerce-eyebrow">{line.sku ?? "Spatial Flow"}</p>
                    <h2><Link href={`/shop/${line.product_slug}`}>{line.product_title}</Link></h2>
                    {line.variant_label ? <p className="sf-cart-line__variant">{line.variant_label}</p> : null}
                    {!line.available ? <p className="sf-cart-line__error">This piece or option is no longer available.</p> : null}
                  </div>
                  <p className="sf-cart-line__price">{formatMoney(line.line_total_minor, cart.currency)}</p>
                  <CartLineControls
                    lineKey={line.line_key}
                    quantity={line.quantity}
                    maxQuantity={line.max_quantity}
                    available={line.available}
                  />
                </div>
              </article>
            ))}
          </section>

          <aside className="sf-cart-summary">
            <p className="sf-commerce-eyebrow">Order summary</p>
            <div className="sf-cart-summary__row"><span>Pieces</span><strong>{cart.item_count}</strong></div>
            <div className="sf-cart-summary__row sf-cart-summary__total"><span>Subtotal</span><strong>{formatMoney(cart.subtotal_minor, cart.currency)}</strong></div>
            <p className="sf-cart-summary__note">Shipping, Product Packaging, coupons, taxes and payment are intentionally not fabricated in Batch A. They enter the server-owned order flow in Batch B.</p>
            <button className="sf-commerce-button is-disabled" type="button" disabled>Checkout — coming in Batch B</button>
            <Link className="sf-cart-summary__continue" href="/shop">Continue browsing →</Link>
          </aside>
        </div>
      )}
    </main>
  );
}
