import Link from "next/link";

import type { PublicArticleListItem } from "@/lib/public";

type ArticleListProps = {
  articles: PublicArticleListItem[];
  emptyTitle?: string;
  emptyMessage?: string;
};

export function ArticleList({
  articles,
  emptyTitle = "No public articles found.",
  emptyMessage = "Try another path, topic, collection, issue, or search term."
}: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <section className="empty-state compact-empty">
        <p className="eyebrow">No results</p>
        <h2>{emptyTitle}</h2>
        <p className="empty-note">{emptyMessage}</p>
      </section>
    );
  }

  return (
    <div className="stack-list">
      {articles.map((article) => (
        <article className="list-card" key={article.id}>
          <p className="meta-line">{article.published_at ?? "Unscheduled"}</p>
          <h2>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </h2>
          {article.subtitle ? <p className="meta-line">{article.subtitle}</p> : null}
          {article.excerpt ? <p>{article.excerpt}</p> : null}
          <p className="meta-line">
            {article.author?.name ?? "Ink & East"}
            {article.reading_time_minutes ? ` · ${article.reading_time_minutes} min read` : ""}
          </p>
          {article.topics.length > 0 ? (
            <div className="link-row small-link-row" aria-label={`Topics for ${article.title}`}>
              {article.topics.map((topic) => (
                <Link href={`/topics/${topic.slug}`} key={topic.id}>{topic.name}</Link>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
