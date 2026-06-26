import Link from "next/link";

import { ArticleList } from "@/components/ArticleList";
import { SiteNav } from "@/components/SiteNav";
import { getPublicArticles, getPublicEditorialCollections, getPublicIssues, getPublicTopics } from "@/lib/public";

export default async function ArticlesArchivePage() {
  const [articles, issues, topics, collections] = await Promise.all([
    getPublicArticles({ limit: 50 }),
    getPublicIssues({ limit: 12 }),
    getPublicTopics(),
    getPublicEditorialCollections({ limit: 12 })
  ]);

  return (
    <main className="site-shell">
      <SiteNav />

      <section className="section-heading page-heading">
        <p className="eyebrow">Articles</p>
        <h1>Public archive</h1>
        <p className="lede">
          A stable archive of public published Ink & East articles. Draft, private, and hidden records are excluded.
        </p>
        <Link className="text-link" href="/search">Search articles</Link>
      </section>

      <section className="browse-grid" aria-label="Browse public content">
        <div className="panel">
          <p className="eyebrow">Browse by issue</p>
          <div className="stack-list compact">
            {issues.map((issue) => (
              <Link className="simple-link-card" href={`/issues/${issue.slug}`} key={issue.id}>
                <span>{issue.number ? `Issue ${issue.number}` : "Issue"}</span>
                <strong>{issue.theme ?? issue.title}</strong>
              </Link>
            ))}
          </div>
        </div>

        <div className="panel">
          <p className="eyebrow">Browse by topic</p>
          <div className="tag-list">
            {topics.map((topic) => (
              <Link href={`/topics/${topic.slug}`} key={topic.id}>
                {topic.symbol ? `${topic.symbol} ` : ""}
                {topic.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="panel">
          <p className="eyebrow">Browse by collection</p>
          <div className="stack-list compact">
            {collections.map((collection) => (
              <Link className="simple-link-card" href={`/collections/${collection.slug}`} key={collection.id}>
                <span>{collection.subtitle ?? "Collection"}</span>
                <strong>{collection.title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-section" aria-label="All public articles">
        <div className="section-heading">
          <p className="eyebrow">All public articles</p>
          <h2>{articles.length} entries</h2>
        </div>
        <ArticleList articles={articles} />
      </section>
    </main>
  );
}
