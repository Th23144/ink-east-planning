import Link from "next/link";

import { getPublicArticles } from "@/lib/public";

export default async function ArticlesArchivePage() {
  const articles = await getPublicArticles({ limit: 50 });

  return (
    <main className="site-shell narrow-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/search">Search</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/collections">Collections</Link>
      </nav>

      <section className="section-heading page-heading">
        <p className="eyebrow">Articles</p>
        <h1>Article archive</h1>
        <p className="lede">A public archive of published Ink & East reading pieces.</p>
      </section>

      {articles.length > 0 ? (
        <div className="stack-list">
          {articles.map((article) => (
            <article className="list-card" key={article.id}>
              <p className="meta-line">{article.published_at ?? "Unscheduled"}</p>
              <h2>
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>
              {article.subtitle ? <p className="meta-line">{article.subtitle}</p> : null}
              {article.excerpt ? <p>{article.excerpt}</p> : null}
              <div className="link-row archive-link-row">
                {article.issue ? <Link href={`/issues/${article.issue.slug}`}>{article.issue.title}</Link> : null}
                {article.topics.map((topic) => (
                  <Link href={`/topics/${topic.slug}`} key={topic.id}>{topic.name}</Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <section className="empty-state">
          <h1>No public articles</h1>
          <p className="empty-note">There are no public published articles available yet.</p>
        </section>
      )}
    </main>
  );
}
