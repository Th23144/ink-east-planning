import Link from "next/link";

import { ArticleList } from "@/components/ArticleList";
import { SiteNav } from "@/components/SiteNav";
import { getPublicArticles } from "@/lib/public";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
};

const firstValue = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const query = firstValue(resolvedSearchParams?.q)?.trim() ?? "";
  const articles = query ? await getPublicArticles({ searchQuery: query, limit: 50 }) : [];

  return (
    <main className="site-shell narrow-shell">
      <SiteNav />

      <section className="section-heading page-heading">
        <p className="eyebrow">Search</p>
        <h1>Search the journal</h1>
        <p className="lede">
          Search public published articles by title, subtitle, deck, excerpt, and body text. Draft and private content remains excluded.
        </p>
      </section>

      <form className="search-form" action="/search">
        <label className="search-label" htmlFor="journal-search">Search term</label>
        <div className="search-row">
          <input
            className="search-input"
            id="journal-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Try Wu Wei, room, attention, old texts..."
          />
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>

      <section className="archive-section" aria-label="Search results">
        {query ? (
          <div className="section-heading">
            <p className="eyebrow">Results</p>
            <h2>{articles.length} public entries for “{query}”</h2>
          </div>
        ) : (
          <section className="empty-state compact-empty">
            <p className="eyebrow">Ready</p>
            <h2>Enter a search term.</h2>
            <p className="empty-note">Search only returns public published articles.</p>
            <Link className="text-link" href="/articles">Browse the public archive</Link>
          </section>
        )}

        {query ? (
          <ArticleList
            articles={articles}
            emptyTitle="No public articles matched this search."
            emptyMessage="Try a broader term, or browse by issue, topic, or collection."
          />
        ) : null}
      </section>
    </main>
  );
}
