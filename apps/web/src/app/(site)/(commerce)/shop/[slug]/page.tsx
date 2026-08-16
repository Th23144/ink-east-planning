import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToBagForm } from "@/components/commerce/AddToBagForm";
import { ProductArtwork } from "@/components/commerce/ProductArtwork";
import { ProductCard } from "@/components/commerce/ProductCard";
import {
  buildPurchaseOptions,
  formatMoney,
  getCommerceSettings,
  getProductBySlug,
  getRelatedProducts
} from "@/lib/commerce";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const [settings, related] = await Promise.all([
    getCommerceSettings(),
    getRelatedProducts(product, 4)
  ]);
  const options = buildPurchaseOptions(product);
  const displayPrice = product.min_price_minor === product.max_price_minor
    ? formatMoney(product.min_price_minor, product.currency)
    : `${formatMoney(product.min_price_minor, product.currency)} — ${formatMoney(product.max_price_minor, product.currency)}`;

  return (
    <main className="sf-commerce-main">
      <nav className="sf-commerce-crumb" aria-label="Breadcrumb">
        <Link href="/">Ink & East</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><strong>{product.title}</strong>
      </nav>

      <article className="sf-product-detail">
        <div className="sf-product-detail__media">
          <ProductArtwork image={product.card_image} tone={product.artwork_tone} alt={product.title} className="sf-product-detail__hero-art" />
          {product.gallery.length > 0 ? (
            <div className="sf-product-detail__gallery">
              {product.gallery.map((image) => image.url ? <img src={image.url} alt={image.alt} key={image.id} /> : null)}
            </div>
          ) : (
            <p className="sf-product-detail__media-note">Real product media can be assigned from Payload. This V0 fallback is not a final product photograph.</p>
          )}
        </div>

        <div className="sf-product-detail__summary">
          <p className="sf-commerce-eyebrow">{product.categories[0]?.name ?? "Spatial Flow piece"}</p>
          <h1>{product.title}</h1>
          {product.subtitle ? <p className="sf-product-detail__subtitle">{product.subtitle}</p> : null}
          <p className="sf-product-detail__price">{displayPrice}</p>
          {product.short_description ? <p className="sf-product-detail__description">{product.short_description}</p> : null}
          {product.place_note ? <p className="sf-product-detail__place">↳ {product.place_note}</p> : null}

          <dl className="sf-product-detail__facts">
            {product.maker ? <div><dt>Maker</dt><dd>{product.maker}</dd></div> : null}
            {product.origin ? <div><dt>Origin</dt><dd>{product.origin}</dd></div> : null}
            {product.material ? <div><dt>Material</dt><dd>{product.material}</dd></div> : null}
            {product.dimensions ? <div><dt>Dimensions</dt><dd>{product.dimensions}</dd></div> : null}
          </dl>

          <AddToBagForm
            productSlug={product.slug}
            productType={product.product_type}
            options={options}
            maxQuantityPerLine={settings.cart.max_quantity_per_line}
          />
        </div>
      </article>

      {product.attributes.length > 0 ? (
        <section className="sf-product-attributes">
          <p className="sf-commerce-eyebrow">Product attributes</p>
          <dl>
            {product.attributes.map((attribute) => (
              <div key={`${attribute.label}-${attribute.value}`}><dt>{attribute.label}</dt><dd>{attribute.value}</dd></div>
            ))}
          </dl>
        </section>
      ) : null}

      {product.editorial_body ? (
        <section className="sf-product-story">
          <p className="sf-commerce-eyebrow">The piece</p>
          <h2>{product.title}</h2>
          <p>{product.editorial_body}</p>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="sf-related-products">
          <div className="sf-shop-heading">
            <div><p className="sf-commerce-eyebrow">Complete the room</p><h2>Related pieces</h2></div>
            <Link href="/shop">View the full edit →</Link>
          </div>
          <div className="sf-product-grid sf-product-grid--related">
            {related.map((item) => <ProductCard product={item} key={item.id} />)}
          </div>
        </section>
      ) : null}
    </main>
  );
}
