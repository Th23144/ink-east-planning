import Link from "next/link";

import { SiteNav } from "@/components/SiteNav";
import { getPublicTopics } from "@/lib/public";

export default async function TopicsPage() {
  const topics = await getPublicTopics();

  return (
    <main className="site-shell narrow-shell">
      <SiteNav />

      <section className="section-heading page-heading">
        <p className="eyebrow">Topics</p>
        <h1>Reading paths</h1>
        <p className="lede">Active public topics from the Ink & East source-native seed.</p>
      </section>

      <div className="stack-list compact">
        {topics.map((topic) => (
          <Link className="simple-link-card" href={`/topics/${topic.slug}`} key={topic.id}>
            <span>{topic.symbol ?? "Topic"}</span>
            <strong>{topic.name}</strong>
            {topic.description ? <span>{topic.description}</span> : null}
          </Link>
        ))}
      </div>
    </main>
  );
}
