import Link from "next/link";

import { getPublicTopics } from "@/lib/public";

export default async function TopicsPage() {
  const topics = await getPublicTopics();

  return (
    <main className="site-shell narrow-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/collections">Collections</Link>
      </nav>

      <section className="section-heading page-heading">
        <p className="eyebrow">Topics</p>
        <h1>Reading paths</h1>
        <p className="lede">Active public topics from the Level 1 seed.</p>
      </section>

      <div className="stack-list compact">
        {topics.map((topic) => (
          <Link className="simple-link-card" href={`/topics/${topic.slug}`} key={topic.id}>
            <span>{topic.symbol ?? "Topic"}</span>
            <strong>{topic.name}</strong>
          </Link>
        ))}
      </div>
    </main>
  );
}
