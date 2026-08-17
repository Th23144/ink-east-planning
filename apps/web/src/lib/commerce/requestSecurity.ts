const firstForwardedValue = (value: string | null): string | undefined =>
  value?.split(",")[0]?.trim() || undefined;

const normalizeHost = (value: string | undefined): string | undefined =>
  value?.trim().toLowerCase() || undefined;

const normalizeProtocol = (value: string | undefined): string | undefined =>
  value?.trim().replace(/:$/, "").toLowerCase() || undefined;

/**
 * Protect cookie-backed commerce mutations from cross-site requests without
 * relying on Request.url host reconstruction. In production Next.js may run
 * behind a proxy, and Request.url can use an internal host even when the
 * browser Origin and HTTP Host represent the same public site.
 */
export const isSameOriginMutation = (request: Request): boolean => {
  const fetchSite = request.headers.get("sec-fetch-site")?.trim().toLowerCase();
  if (fetchSite === "cross-site") {
    return false;
  }

  const originHeader = request.headers.get("origin");
  if (!originHeader) {
    // SameSite=Lax is still applied to the cart cookie. Sec-Fetch-Site gives
    // modern browsers an additional explicit cross-site rejection signal,
    // while API clients without browser metadata remain usable.
    return true;
  }

  let origin: URL;
  let requestUrl: URL;
  try {
    origin = new URL(originHeader);
    requestUrl = new URL(request.url);
  } catch {
    return false;
  }

  const hostCandidates = new Set(
    [
      normalizeHost(request.headers.get("host") ?? undefined),
      normalizeHost(firstForwardedValue(request.headers.get("x-forwarded-host"))),
      normalizeHost(requestUrl.host)
    ].filter((value): value is string => Boolean(value))
  );

  const protocolCandidates = new Set(
    [
      normalizeProtocol(firstForwardedValue(request.headers.get("x-forwarded-proto"))),
      normalizeProtocol(requestUrl.protocol)
    ].filter((value): value is string => Boolean(value))
  );

  return (
    hostCandidates.has(origin.host.toLowerCase()) &&
    protocolCandidates.has(origin.protocol.replace(/:$/, "").toLowerCase())
  );
};
