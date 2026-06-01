import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublicIssueBySlug } from "@/lib/public";

type IssuePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function IssuePage({ params }: IssuePageProps) {
  const { slug } = await params;
  const issue = await getPublicIssueBySlug(slug);

  if (!issue) {
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
        <p className="eyebrow">{issue.number ? `Issue ${issue.number}` : "Issue"}</p>
        <h1>{issue.title}</h1>
        {issue.subtitle ? <p className="lede">{issue.subtitle}</p> : null}
        {issue.theme ? <p className="note">Theme: {issue.theme}</p> : null}
        {issue.editor_note ? <p className="excerpt-block">{issue.editor_note}</p> : null}
      </section>

      <section className="panel">
        <p className="eyebrow">Articles</p>
        <div className="stack-list compact">
          {issue.ordered_articles.map((entry) => (
            <Link className="simple-link-card" href={`/articles/${entry.article.slug}`} key={entry.article.id}>
              <span>{entry.label ?? "Article"}</span>
              <strong>{entry.article.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
