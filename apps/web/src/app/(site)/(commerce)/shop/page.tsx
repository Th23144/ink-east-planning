import Link from "next/link";

import { ProductCard } from "@/components/commerce/ProductCard";
import { getCatalog, getCommerceSettings, getProductCategories, type CatalogSort } from "@/lib/commerce";

type ShopPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const one = (value: string | string[] | undefined) => Array.isArray(value) ? value[0] : value;

const validSort = (value: string | undefined): CatalogSort => {
  if (value === "price_asc" || value === "price_desc" || value === "newest") return value;
  return "editorial";
};

const queryHref = (category: string | undefined, sort: CatalogSort, page = 1) => {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (sort !== "editorial") params.set("sort", sort);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/shop?${query}` : "/shop";
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const category = one(params.category)?.trim() || undefined;
  const sort = validSort(one(params.sort));
  const page = Math.max(1, Number.parseInt(one(params.page) ?? "1", 10) || 1);
  const [settings, categories] = await Promise.all([getCommerceSettings(), getProductCategories()]);
  const catalog = await getCatalog({ categorySlug: category, sort, page, limit: settings.shop.products_per_page });

  return (
    <main className="sf-commerce-main">
      <nav className="sf-commerce-crumb" aria-label="Breadcrumb">
        <Link href="/">Ink & East</Link><span>/</span><strong>Spatial Flow Shop</strong>
      </nav>

      <section className="sf-shop-hero">
        <div>
          <p className="sf-commerce-eyebrow">{settings.shop.eyebrow}</p>
          <h1>{settings.shop.title_lead}<br /><em>{settings.shop.title_emphasis}</em>.</h1>
          <dl>
            <div><dt>Pieces</dt><dd>{catalog.totalProducts} active</dd></div>
            <div><dt>Currency</dt><dd>{settings.currency}</dd></div>
            <div><dt>System</dt><dd>Source native</dd></div>
          </dl>
        </div>
        <div className="sf-shop-hero__copy">
          {settings.shop.lede ? <p className="sf-shop-hero__lede">{settings.shop.lede}</p> : null}
          {settings.shop.body ? <p>{settings.shop.body}</p> : null}
          {settings.shop.signoff ? <p className="sf-shop-hero__signoff">{settings.shop.signoff}</p> : null}
        </div>
      </section>

      <section className="sf-shop-toolbar" aria-label="Catalog controls">
        <div className="sf-shop-filters">
          <Link className={!category ? "is-active" : ""} href={queryHref(undefined, sort)}>All</Link>
          {categories.map((item) => (
            <Link
              className={category === item.slug ? "is-active" : ""}
              href={queryHref(item.slug, sort)}
              key={item.id}
            >{item.name}</Link>
          ))}
        </div>
        <div className="sf-shop-sort">
          <span>Arrange by</span>
          <Link className={sort === "editorial" ? "is-active" : ""} href={queryHref(category, "editorial")}>Editor's order</Link>
          <Link className={sort === "price_asc" ? "is-active" : ""} href={queryHref(category, "price_asc")}>Price ↑</Link>
          <Link className={sort === "price_desc" ? "is-active" : ""} href={queryHref(category, "price_desc")}>Price ↓</Link>
          <Link className={sort === "newest" ? "is-active" : ""} href={queryHref(category, "newest")}>Newest</Link>
        </div>
      </section>

      <section className="sf-shop-heading">
        <div>
          <p className="sf-commerce-eyebrow">The full edit</p>
          <h2>{category ? categories.find((item) => item.slug === category)?.name ?? "Selection" : "All pieces"}</h2>
        </div>
        <span>{catalog.totalProducts} source-owned records</span>
      </section>

      {catalog.products.length > 0 ? (
        <section className="sf-product-grid" aria-label="Products">
          {catalog.products.map((product) => <ProductCard product={product} key={product.id} />)}
        </section>
      ) : (
        <section className="sf-commerce-empty">
          <p className="sf-commerce-eyebrow">No pieces</p>
          <h2>Nothing active in this edit.</h2>
          <Link href="/shop">Return to all pieces</Link>
        </section>
      )}

      {catalog.totalPages > 1 ? (
        <nav className="sf-shop-pagination" aria-label="Catalog pages">
          {catalog.hasPrevPage ? <Link href={queryHref(category, sort, catalog.page - 1)}>← Previous</Link> : <span />}
          <span>Page {catalog.page} / {catalog.totalPages}</span>
          {catalog.hasNextPage ? <Link href={queryHref(category, sort, catalog.page + 1)}>Next →</Link> : <span />}
        </nav>
      ) : null}

      <section className="sf-shop-note">
        <h2>Made to live with,<br />not to <em>perform</em>.</h2>
        <p>
          This V0 surface deliberately keeps the catalog presentation provisional. Product identity, price, stock,
          variants and Bag state are now source-owned contracts; the launch visual system can be replaced later.
        </p>
      </section>
    </main>
  );
}
