import Link from "next/link";

import { getPublicIssues } from "@/lib/public";

export default async function IssuesPage() {
  const issues = await getPublicIssues();

  return (
    <main className="site-shell narrow-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/collections">Collections</Link>
      </nav>

      <section className="section-heading page-heading">
        <p className="eyebrow">Issues</p>
        <h1>Published issues</h1>
        <p className="lede">A minimal route that only shows public published issues.</p>
      </section>

      <div className="stack-list">
        {issues.map((issue) => (
          <article className="list-card" key={issue.id}>
            <p className="meta-line">{issue.number ? `Issue ${issue.number}` : "Issue"}</p>
            <h2><Link href={`/issues/${issue.slug}`}>{issue.title}</Link></h2>
            {issue.subtitle ? <p>{issue.subtitle}</p> : null}
            {issue.theme ? <p className="meta-line">Theme: {issue.theme}</p> : null}
          </article>
        ))}
      </div>
    </main>
  );
}
