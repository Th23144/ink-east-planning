import { permanentRedirect } from "next/navigation";

type LegacyProductRouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyProductRoute({ params }: LegacyProductRouteProps) {
  const { slug } = await params;
  permanentRedirect(`/shop/${encodeURIComponent(slug)}`);
}
