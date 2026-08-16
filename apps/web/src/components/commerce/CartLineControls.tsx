"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CartLineControlsProps = {
  lineKey: string;
  quantity: number;
  maxQuantity: number;
  available: boolean;
};

type ApiMessage = { message?: string };

export function CartLineControls({ lineKey, quantity, maxQuantity, available }: CartLineControlsProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const mutate = async (method: "PATCH" | "DELETE", nextQuantity?: number) => {
    setBusy(true);
    setMessage("");

    const response = await fetch(`/commerce-api/cart/items/${encodeURIComponent(lineKey)}`, {
      method,
      headers: method === "PATCH" ? { "content-type": "application/json" } : undefined,
      body: method === "PATCH" ? JSON.stringify({ quantity: nextQuantity }) : undefined
    });
    const payload = (await response.json().catch(() => ({}))) as ApiMessage;

    if (!response.ok) {
      setBusy(false);
      setMessage(payload.message ?? "The Bag could not be updated.");
      return;
    }

    router.refresh();
    setBusy(false);
  };

  return (
    <div className="sf-cart-line__controls">
      {available ? (
        <div className="sf-cart-quantity" aria-label="Quantity controls">
          <button
            type="button"
            disabled={busy || quantity <= 1}
            aria-label="Decrease quantity"
            onClick={() => mutate("PATCH", quantity - 1)}
          >−</button>
          <span>{quantity}</span>
          <button
            type="button"
            disabled={busy || quantity >= maxQuantity}
            aria-label="Increase quantity"
            onClick={() => mutate("PATCH", quantity + 1)}
          >+</button>
        </div>
      ) : null}
      <button className="sf-cart-remove" type="button" disabled={busy} onClick={() => mutate("DELETE")}>
        Remove
      </button>
      {message ? <p className="sf-cart-line__error" role="alert">{message}</p> : null}
    </div>
  );
}
