import Link from "next/link";

import { SiteNav } from "@/components/SiteNav";
import {
  getPublicArticles,
  getPublicEditorialCollections,
  getPublicIssues,
  getPublicSystemSettings,
  getPublicTopics
} from "@/lib/public";

export default async function Home() {
  const [settings, articles, issues, topics, collections] = await Promise.all([
    getPublicSystemSettings(),
    getPublicArticles({ limit: 5 }),
    getPublicIssues({ limit: 3 }),
    getPublicTopics(),
    getPublicEditorialCollections({ limit: 3 })
  ]);

  return (
    <main className="site-shell">
      <SiteNav />

      <section className="hero-block">
        <p className="eyebrow">Ink & East / Level 2 Public Browse</p>
        <h1>{settings.brand.site_name ?? "Ink & East"}</h1>
        <p className="lede">
          {settings.brand.site_subtitle ?? "Old texts, quiet stories, and modern questions"}
        </p>
        {settings.brand.brand_statement ? <p className="note">{settings.brand.brand_statement}</p> : null}
        <div className="hero-actions">
          <Link className="text-link" href="/articles">Browse articles</Link>
          <Link className="text-link" href="/search">Search the journal</Link>
        </div>
      </section>

      <section className="content-grid" aria-label="Public reading sections">
        <div className="panel span-two">
          <div className="section-heading">
            <p className="eyebrow">Latest public articles</p>
            <h2>Reading table</h2>
          </div>
          <div className="stack-list">
            {articles.map((article) => (
              <article className="list-card" key={article.id}>
                <p className="meta-line">{article.published_at ?? "Unscheduled"}</p>
                <h3>
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h3>
                {article.excerpt ? <p>{article.excerpt}</p> : null}
                <p className="meta-line">
                  {article.author?.name ?? "Ink & East"}
                  {article.reading_time_minutes ? ` · ${article.reading_time_minutes} min read` : ""}
                </p>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/articles">View all articles</Link>
        </div>

        <div className="panel">
          <div className="section-heading">
            <p className="eyebrow">Issues</p>
            <h2>Current issue</h2>
          </div>
          <div className="stack-list compact">
            {issues.map((issue) => (
              <Link className="simple-link-card" href={`/issues/${issue.slug}`} key={issue.id}>
                <span>{issue.number ? `Issue ${issue.number}` : issue.title}</span>
                <strong>{issue.theme ?? issue.title}</strong>
              </Link>
            ))}
          </div>
          <Link className="text-link" href="/issues">View all issues</Link>
        </div>

        <div className="panel">
          <div className="section-heading">
            <p className="eyebrow">Topics</p>
            <h2>Paths</h2>
          </div>
          <div className="tag-list">
            {topics.map((topic) => (
              <Link href={`/topics/${topic.slug}`} key={topic.id}>
                {topic.symbol ? `${topic.symbol} ` : ""}
                {topic.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="panel span-two">
          <div className="section-heading">
            <p className="eyebrow">Collections</p>
            <h2>Editorial groupings</h2>
          </div>
          <div className="stack-list compact">
            {collections.map((collection) => (
              <Link className="simple-link-card" href={`/collections/${collection.slug}`} key={collection.id}>
                <span>{collection.subtitle ?? "Collection"}</span>
                <strong>{collection.title}</strong>
              </Link>
            ))}
          </div>
          <Link className="text-link" href="/collections">View all collections</Link>
        </div>
      </section>
    </main>
  );
}
