const baseUrl = process.env.COMMERCE_TEST_BASE_URL || "http://127.0.0.1:3000";

const assert = (condition: unknown, message: string) => {
  if (!condition) {
    throw new Error(`Commerce HTTP check failed: ${message}`);
  }
};

const text = async (path: string, init?: RequestInit) => {
  const response = await fetch(`${baseUrl}${path}`, init);
  return { response, body: await response.text() };
};

const waitForServer = async () => {
  let lastError: unknown;

  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/shop`, { redirect: "manual" });
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw lastError instanceof Error ? lastError : new Error("Production server did not become ready.");
};

const main = async () => {
  await waitForServer();

  const shop = await text("/shop");
  assert(shop.response.status === 200, "/shop must return 200");
  assert(shop.body.includes("All pieces"), "/shop must render the source-native catalog heading");
  assert(shop.body.includes("Linen Throw"), "/shop must render seeded Payload products");

  const product = await text("/shop/linen-throw");
  assert(product.response.status === 200, "/shop/[slug] must return 200 for an active product");
  assert(product.body.includes("Add to Bag"), "product detail must expose the real Bag action");
  assert(product.body.includes("Natural") && product.body.includes("Clay"), "product detail must expose real variant options");

  const legacy = await fetch(`${baseUrl}/product/linen-throw`, { redirect: "manual" });
  assert([301, 308].includes(legacy.status), "legacy /product/[slug] must permanently redirect");
  const location = legacy.headers.get("location") ?? "";
  assert(location.endsWith("/shop/linen-throw"), "legacy product redirect must point to canonical /shop/[slug]");

  const emptyCart = await text("/cart");
  assert(emptyCart.response.status === 200, "/cart must return 200 without a session");
  assert(emptyCart.body.includes("Your Bag is empty"), "anonymous first visit must render the empty Bag state");

  const addResponse = await fetch(`${baseUrl}/commerce-api/cart`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: baseUrl
    },
    body: JSON.stringify({ productSlug: "linen-throw", variantKey: "clay", quantity: 1 })
  });
  const addBody = await addResponse.text();
  assert(
    addResponse.status === 200,
    `same-origin Add to Bag must succeed; received HTTP ${addResponse.status}: ${addBody.slice(0, 500)}`
  );
  const added = JSON.parse(addBody) as {
    ok?: boolean;
    cart?: {
      item_count?: number;
      subtotal_minor?: number;
      lines?: Array<{ line_key?: string; variant_label?: string }>;
    };
  };
  assert(added.ok === true, "Add to Bag API must return ok=true");
  assert(added.cart?.item_count === 1, "Add to Bag must create one item");
  assert(added.cart?.subtotal_minor === 20500, "client request must resolve the Clay price from the server");
  assert(added.cart?.lines?.[0]?.variant_label === "Clay", "server must persist the selected variant snapshot");

  const setCookie = addResponse.headers.get("set-cookie") ?? "";
  assert(setCookie.includes("sf_cart_session="), "first Add to Bag must set an anonymous session cookie");
  assert(/HttpOnly/i.test(setCookie), "cart cookie must be HttpOnly");
  assert(/SameSite=Lax/i.test(setCookie), "cart cookie must use SameSite=Lax");
  const cookie = setCookie.split(";")[0];
  const lineKey = added.cart?.lines?.[0]?.line_key;
  assert(cookie && lineKey, "Bag response must expose a usable cookie and opaque line key");
  if (!cookie || !lineKey) return;

  const cartAfterAdd = await text("/cart", { headers: { cookie } });
  assert(cartAfterAdd.response.status === 200, "Bag route must accept the server-issued session cookie");
  assert(cartAfterAdd.body.includes("Linen Throw"), "Bag route must render the persisted product snapshot");
  assert(cartAfterAdd.body.includes("Clay"), "Bag route must render the persisted variant");
  assert(cartAfterAdd.body.includes("$205.00"), "Bag route must render the server subtotal");

  const crossOrigin = await fetch(`${baseUrl}/commerce-api/cart`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://attacker.invalid"
    },
    body: JSON.stringify({ productSlug: "quiet-vessel", quantity: 1 })
  });
  assert(crossOrigin.status === 403, "cross-origin cart mutations must be rejected");

  const patch = await fetch(`${baseUrl}/commerce-api/cart/items/${encodeURIComponent(lineKey)}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      origin: baseUrl,
      cookie
    },
    body: JSON.stringify({ quantity: 2 })
  });
  assert(patch.status === 200, "same-origin Bag quantity update must succeed");
  const patched = await patch.json() as { cart?: { item_count?: number; subtotal_minor?: number } };
  assert(patched.cart?.item_count === 2, "PATCH must update Bag quantity");
  assert(patched.cart?.subtotal_minor === 41000, "PATCH must recompute subtotal from server price");

  const cartAfterPatch = await text("/cart", { headers: { cookie } });
  assert(cartAfterPatch.body.includes("$410.00"), "SSR Bag must reflect the persisted PATCH subtotal");

  const removed = await fetch(`${baseUrl}/commerce-api/cart/items/${encodeURIComponent(lineKey)}`, {
    method: "DELETE",
    headers: {
      origin: baseUrl,
      cookie
    }
  });
  assert(removed.status === 200, "same-origin Bag remove must succeed");
  const removedBody = await removed.json() as { cart?: { item_count?: number; subtotal_minor?: number } };
  assert(removedBody.cart?.item_count === 0 && removedBody.cart?.subtotal_minor === 0, "DELETE must clear the Bag totals");

  const cartAfterDelete = await text("/cart", { headers: { cookie } });
  assert(cartAfterDelete.body.includes("Your Bag is empty"), "SSR Bag must return to the empty state after DELETE");

  console.log("PASS: Commerce Batch A production HTTP routes, redirect, cookie and Bag mutation contract.");
};

main()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    const message = error instanceof Error ? error.message : String(error);
    const safe = message.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
    console.error(`::error title=Commerce Batch A HTTP::${safe}`);
    console.error(error);
    process.exit(1);
  });
