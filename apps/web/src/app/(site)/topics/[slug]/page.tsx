import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublicArticles, getPublicTopicBySlug } from "@/lib/public";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const [topic, articles] = await Promise.all([
    getPublicTopicBySlug(slug),
    getPublicArticles({ topicSlug: slug })
  ]);

  if (!topic) {
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
        <p className="eyebrow">Topic</p>
        <h1>{topic.name}</h1>
        {topic.description ? <p className="lede">{topic.description}</p> : null}
      </section>

      <section className="panel">
        <p className="eyebrow">Public articles</p>
        <div className="stack-list compact">
          {articles.map((article) => (
            <Link className="simple-link-card" href={`/articles/${article.slug}`} key={article.id}>
              <span>{article.author?.name ?? "Ink & East"}</span>
              <strong>{article.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
