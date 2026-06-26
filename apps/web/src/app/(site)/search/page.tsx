import Link from "next/link";

import { searchPublicArticles } from "@/lib/public";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const hasQuery = query.length > 0;
  const articles = hasQuery ? await searchPublicArticles({ query, limit: 30 }) : [];

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
        <p className="eyebrow">Search</p>
        <h1>Search the journal</h1>
        <p className="lede">Search public published articles by title, subtitle, excerpt, deck, or body.</p>
      </section>

      <form className="search-form" action="/search">
        <label htmlFor="site-search">Search query</label>
        <div className="search-row">
          <input
            id="site-search"
            name="q"
            type="search"
            placeholder="Try Wu Wei, room, attention, objects..."
            defaultValue={query}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {hasQuery ? (
        <section className="search-results" aria-label="Search results">
          <p className="meta-line result-count">
            {articles.length === 1 ? "1 public article found" : `${articles.length} public articles found`}
          </p>

          {articles.length > 0 ? (
            <div className="stack-list">
              {articles.map((article) => (
                <article className="list-card" key={article.id}>
                  <p className="meta-line">{article.published_at ?? "Unscheduled"}</p>
                  <h2>
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </h2>
                  {article.excerpt ? <p>{article.excerpt}</p> : null}
                  <p className="meta-line">
                    {article.author?.name ?? "Ink & East"}
                    {article.reading_time_minutes ? ` · ${article.reading_time_minutes} min read` : ""}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <section className="empty-state">
              <h1>No public results</h1>
              <p className="empty-note">
                No public published articles matched this search. Draft, private, and hidden content is not included.
              </p>
            </section>
          )}
        </section>
      ) : (
        <section className="empty-state">
          <h1>Search public articles</h1>
          <p className="empty-note">Enter a keyword to search only public published Ink & East articles.</p>
        </section>
      )}
    </main>
  );
}
