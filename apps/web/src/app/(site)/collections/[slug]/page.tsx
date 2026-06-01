import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublicEditorialCollectionBySlug } from "@/lib/public";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = await getPublicEditorialCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="site-shell narrow-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/collections">Collections</Link>
      </nav>

      <section className="section-heading page-heading">
        <p className="eyebrow">Collection</p>
        <h1>{collection.title}</h1>
        {collection.subtitle ? <p className="lede">{collection.subtitle}</p> : null}
        {collection.description ? <p className="note">{collection.description}</p> : null}
      </section>

      <section className="panel">
        <p className="eyebrow">Public articles</p>
        <div className="stack-list compact">
          {collection.articles.map((entry) => (
            <Link className="simple-link-card" href={`/articles/${entry.article.slug}`} key={entry.article.id}>
              <span>{entry.article.author?.name ?? "Ink & East"}</span>
              <strong>{entry.article.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
