import { notFound } from "next/navigation";

import { ArticleList } from "@/components/ArticleList";
import { SiteNav } from "@/components/SiteNav";
import { getPublicArticles, getPublicTopicBySlug } from "@/lib/public";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const [topic, articles] = await Promise.all([
    getPublicTopicBySlug(slug),
    getPublicArticles({ topicSlug: slug })
  ]);

  if (!topic) {
    notFound();
  }

  return (
    <main className="site-shell narrow-shell">
      <SiteNav />

      <section className="section-heading page-heading">
        <p className="eyebrow">Topic</p>
        <h1>{topic.name}</h1>
        {topic.description ? <p className="lede">{topic.description}</p> : null}
      </section>

      <section className="panel">
        <p className="eyebrow">Public articles</p>
        <ArticleList
          articles={articles}
          emptyTitle="No public articles are available for this topic."
          emptyMessage="This topic may be waiting for future published articles."
        />
      </section>
    </main>
  );
}
