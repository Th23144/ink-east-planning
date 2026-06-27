import type { PublicArticleInlineImage, PublicMediaAsset } from "@/lib/public";

type ArticleImageProps = {
  image?: PublicMediaAsset;
  caption?: string;
  className?: string;
};

type InlineImageGalleryProps = {
  images: PublicArticleInlineImage[];
};

const imageSrc = (image: PublicMediaAsset) => image.url ?? (image.filename ? `/media/${image.filename}` : undefined);

export function ArticleImage({ image, caption, className = "article-media" }: ArticleImageProps) {
  if (!image) {
    return null;
  }

  const src = imageSrc(image);
  if (!src) {
    return null;
  }

  return (
    <figure className={className}>
      <img
        src={src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
      {caption || image.credit ? (
        <figcaption>
          {caption ? <span>{caption}</span> : null}
          {image.credit ? <span>{caption ? " · " : ""}Credit: {image.credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function InlineImageGallery({ images }: InlineImageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="article-inline-media" aria-label="Article images">
      <p className="eyebrow">Images</p>
      <div className="stack-list">
        {images.map((entry, index) => (
          <ArticleImage
            className="article-media inline-article-media"
            image={entry.image}
            caption={entry.caption ?? entry.image.caption}
            key={`${entry.image.id}-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
