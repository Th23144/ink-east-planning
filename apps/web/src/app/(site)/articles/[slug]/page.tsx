import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/ArticleBody";
import { ArticleImage, InlineImageGallery } from "@/components/ArticleMedia";
import { SiteNav } from "@/components/SiteNav";
import { getPublicArticleBySlug } from "@/lib/public";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getPublicArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="site-shell narrow-shell">
      <SiteNav />

      <article className="article-page">
        <p className="breadcrumbs">
          <Link href="/">Home</Link> / <Link href="/articles">Articles</Link> / Article
        </p>
        <p className="eyebrow">Article</p>
        <h1>{article.title}</h1>
        {article.subtitle ? <p className="lede">{article.subtitle}</p> : null}
        {article.deck ? <p className="note">{article.deck}</p> : null}
        {article.excerpt ? <p className="excerpt-block">{article.excerpt}</p> : null}

        <div className="meta-line detail-meta">
          <span>{article.author?.name ?? "Ink & East"}</span>
          {article.published_at ? <span>{article.published_at}</span> : null}
          {article.reading_time_minutes ? <span>{article.reading_time_minutes} min read</span> : null}
        </div>

        <div className="link-row">
          {article.issue ? <Link href={`/issues/${article.issue.slug}`}>{article.issue.title}</Link> : null}
          {article.collections.map((collection) => (
            <Link href={`/collections/${collection.slug}`} key={collection.id}>{collection.title}</Link>
          ))}
          {article.topics.map((topic) => (
            <Link href={`/topics/${topic.slug}`} key={topic.id}>{topic.name}</Link>
          ))}
        </div>

        <ArticleImage image={article.hero_image} caption={article.hero_image_caption} />
        <ArticleBody body={article.body} format={article.body_format} />
        <InlineImageGallery images={article.inline_images} />
      </article>
    </main>
  );
}
