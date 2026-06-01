import Link from "next/link";

import { getPublicEditorialCollections } from "@/lib/public";

export default async function CollectionsPage() {
  const collections = await getPublicEditorialCollections();

  return (
    <main className="site-shell narrow-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/collections">Collections</Link>
      </nav>
      <section className="section-heading page-heading">
        <p className="eyebrow">Collections</p>
        <h1>Editorial collections</h1>
        <p className="lede">Published public editorial groupings.</p>
      </section>
      <div className="stack-list compact">
        {collections.map((item) => (
          <Link className="simple-link-card" href={`/collections/${item.slug}`} key={item.id}>
            <span>{item.subtitle ?? "Collection"}</span>
            <strong>{item.title}</strong>
          </Link>
        ))}
      </div>
    </main>
  );
}
