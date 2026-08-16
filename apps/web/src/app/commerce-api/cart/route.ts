import { NextResponse } from "next/server";

import { addCartItem, cartCookie, getCartSessionFromCookies, getCommerceSettings } from "@/lib/commerce";

const sameOrigin = (request: Request) => {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
};

const badRequest = (code: string, message: string, status = 400) =>
  NextResponse.json({ ok: false, code, message }, { status });

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return badRequest("origin_mismatch", "The bag request could not be authorized.", 403);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("invalid_json", "The bag request is malformed.");
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return badRequest("invalid_request", "The bag request is malformed.");
  }

  const input = body as Record<string, unknown>;
  const productSlug = typeof input.productSlug === "string" ? input.productSlug.trim() : "";
  const variantKey = typeof input.variantKey === "string" ? input.variantKey.trim() : undefined;
  const quantity = typeof input.quantity === "number" ? input.quantity : Number.NaN;

  if (!productSlug || !Number.isInteger(quantity) || quantity < 1) {
    return badRequest("invalid_request", "Choose an available product and a valid quantity.");
  }

  const sessionKey = await getCartSessionFromCookies();
  const mutation = await addCartItem({ sessionKey, productSlug, variantKey, quantity });

  if (!mutation.ok) {
    return badRequest(mutation.code, mutation.message, mutation.code === "product_not_found" ? 404 : 409);
  }

  const response = NextResponse.json({ ok: true, cart: mutation.result.cart });
  if (mutation.result.createdSession) {
    const settings = await getCommerceSettings();
    response.cookies.set(cartCookie.name, mutation.result.sessionKey, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: cartCookie.maxAgeSeconds(settings.cart.session_ttl_days)
    });
  }

  return response;
}
