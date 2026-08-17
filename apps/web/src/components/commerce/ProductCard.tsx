import Link from "next/link";

import { formatMoney, type CommerceProduct } from "@/lib/commerce";
import { ProductArtwork } from "./ProductArtwork";

const badgeLabel = (badge: CommerceProduct["badge"]) => {
  switch (badge) {
    case "new": return "New";
    case "editors_pick": return "Editor's Pick";
    case "one_of_one": return "One of one";
    case "last_one": return "Last one";
    default: return null;
  }
};

export function ProductCard({ product }: { product: CommerceProduct }) {
  const badge = badgeLabel(product.badge);
  const price = product.min_price_minor === product.max_price_minor
    ? formatMoney(product.min_price_minor, product.currency)
    : `From ${formatMoney(product.min_price_minor, product.currency)}`;

  return (
    <article className="sf-product-card">
      <Link className="sf-product-card__visual" href={`/shop/${product.slug}`}>
        <ProductArtwork image={product.card_image} tone={product.artwork_tone} alt={product.title} />
        {badge ? <span className="sf-product-card__badge">{badge}</span> : null}
        <span className="sf-product-card__view">View piece →</span>
      </Link>
      <div className="sf-product-card__copy">
        <h3><Link href={`/shop/${product.slug}`}>{product.title}</Link></h3>
        {product.subtitle ? <p className="sf-product-card__subtitle">{product.subtitle}</p> : null}
        <p className="sf-product-card__price">{price}</p>
        {product.place_note ? <p className="sf-product-card__place">↳ {product.place_note}</p> : null}
        {!product.available ? <p className="sf-stock-note">Currently unavailable</p> : null}
      </div>
    </article>
  );
}
