import { NextResponse } from "next/server";

import { getCartSessionFromCookies, removeCartLine, updateCartLine } from "@/lib/commerce";

type LineRouteProps = {
  params: Promise<{ lineId: string }>;
};

const sameOrigin = (request: Request) => {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
};

const failure = (code: string, message: string, status = 400) =>
  NextResponse.json({ ok: false, code, message }, { status });

const sessionOrFailure = async () => {
  const sessionKey = await getCartSessionFromCookies();
  return sessionKey || null;
};

export async function PATCH(request: Request, { params }: LineRouteProps) {
  if (!sameOrigin(request)) {
    return failure("origin_mismatch", "The bag request could not be authorized.", 403);
  }

  const sessionKey = await sessionOrFailure();
  if (!sessionKey) {
    return failure("cart_not_found", "This bag session is no longer available.", 404);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return failure("invalid_json", "The bag request is malformed.");
  }

  const quantity = body && typeof body === "object" && !Array.isArray(body)
    ? (body as Record<string, unknown>).quantity
    : undefined;
  if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1) {
    return failure("invalid_quantity", "Choose a valid quantity.");
  }

  const { lineId } = await params;
  const mutation = await updateCartLine({ sessionKey, lineKey: lineId, quantity });
  if (!mutation.ok) {
    return failure(mutation.code, mutation.message, mutation.code.includes("not_found") ? 404 : 409);
  }

  return NextResponse.json({ ok: true, cart: mutation.result.cart });
}

export async function DELETE(request: Request, { params }: LineRouteProps) {
  if (!sameOrigin(request)) {
    return failure("origin_mismatch", "The bag request could not be authorized.", 403);
  }

  const sessionKey = await sessionOrFailure();
  if (!sessionKey) {
    return failure("cart_not_found", "This bag session is no longer available.", 404);
  }

  const { lineId } = await params;
  const mutation = await removeCartLine({ sessionKey, lineKey: lineId });
  if (!mutation.ok) {
    return failure(mutation.code, mutation.message, mutation.code.includes("not_found") ? 404 : 409);
  }

  return NextResponse.json({ ok: true, cart: mutation.result.cart });
}
