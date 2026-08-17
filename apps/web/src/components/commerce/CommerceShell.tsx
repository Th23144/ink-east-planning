import Link from "next/link";

import { getCommerceSettings, getCurrentCart } from "@/lib/commerce";

export async function CommerceShell({ children }: { children: React.ReactNode }) {
  const [cart, settings] = await Promise.all([getCurrentCart(), getCommerceSettings()]);

  return (
    <div className="sf-commerce-shell">
      <div className="sf-commerce-strip">
        <span>Ink & East / Spatial Flow</span>
        <span className="sf-commerce-strip__center">Objects · Materials · Quiet rooms</span>
        <span><i aria-hidden="true" /> Source-native V0</span>
      </div>

      <header className="sf-commerce-header">
        <nav className="sf-commerce-primary" aria-label="Spatial Flow navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/">Journal</Link>
        </nav>
        <Link className="sf-commerce-wordmark" href="/shop">
          SPATIAL <em>FLOW</em>
          <small>Objects for considered spaces</small>
        </Link>
        <nav className="sf-commerce-utils" aria-label="Shop utilities">
          <Link href="/search">Search</Link>
          <Link className="sf-commerce-bag-link" href="/cart">
            {settings.cart.bag_label} <sup>{cart.item_count}</sup>
          </Link>
        </nav>
      </header>

      {children}

      <footer className="sf-commerce-footer">
        <div className="sf-commerce-footer__mark">
          SPATIAL <em>FLOW</em>
          <small>Objects for considered spaces</small>
        </div>
        <div className="sf-commerce-footer__grid">
          <div>
            <p className="sf-commerce-footer__mission">
              Spatial Flow is the commerce room inside Ink & East: source-owned catalog data, real Bag state, and a presentation layer designed to be replaced without rewriting the business system.
            </p>
          </div>
          <div>
            <h2>Shop</h2>
            <Link href="/shop">All pieces</Link>
            <Link href="/cart">Bag</Link>
          </div>
          <div>
            <h2>Read</h2>
            <Link href="/">Ink & East</Link>
            <Link href="/articles">Articles</Link>
          </div>
          <div>
            <h2>System</h2>
            <span>USD · Batch A</span>
            <span>Checkout follows in Batch B</span>
          </div>
        </div>
        <div className="sf-commerce-footer__bottom">
          <span>© 2026 Spatial Flow / Ink & East</span>
          <span>Commerce V0 · Function first</span>
        </div>
      </footer>
    </div>
  );
}
