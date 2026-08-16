import type { ArtworkTone } from "@/lib/commerce";
import type { PublicMediaAsset } from "@/lib/public";

type ProductArtworkProps = {
  image?: PublicMediaAsset;
  tone: ArtworkTone;
  alt: string;
  className?: string;
};

export function ProductArtwork({ image, tone, alt, className = "" }: ProductArtworkProps) {
  if (image?.url) {
    return (
      <div className={`sf-product-artwork has-image ${className}`.trim()}>
        <img src={image.url} alt={image.alt || alt} />
      </div>
    );
  }

  return (
    <div
      className={`sf-product-artwork tone-${tone} ${className}`.trim()}
      role="img"
      aria-label={`${alt} — provisional catalog artwork`}
    >
      <span aria-hidden="true" />
    </div>
  );
}
