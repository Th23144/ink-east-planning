"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { formatMoney, type PurchaseOption } from "@/lib/commerce";

type AddToBagFormProps = {
  productSlug: string;
  productType: "simple" | "variant";
  options: PurchaseOption[];
  maxQuantityPerLine: number;
};

type ApiMessage = {
  ok?: boolean;
  message?: string;
};

export function AddToBagForm({ productSlug, productType, options, maxQuantityPerLine }: AddToBagFormProps) {
  const router = useRouter();
  const firstAvailable = useMemo(() => options.find((option) => option.available), [options]);
  const [variantKey, setVariantKey] = useState(firstAvailable?.key ?? "");
  const [quantity, setQuantity] = useState(1);
  const [state, setState] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const selected = options.find((option) => option.key === variantKey) ?? firstAvailable;
  const maximum = Math.max(1, Math.min(maxQuantityPerLine, selected?.stock_quantity ?? maxQuantityPerLine));

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected?.available) return;

    setState("saving");
    setMessage("");

    const response = await fetch("/commerce-api/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        productSlug,
        variantKey: productType === "variant" ? selected.key : undefined,
        quantity
      })
    });
    const payload = (await response.json().catch(() => ({}))) as ApiMessage;

    if (!response.ok) {
      setState("error");
      setMessage(payload.message ?? "This piece could not be added to the Bag.");
      return;
    }

    setState("success");
    setMessage("Added to Bag.");
    router.refresh();
  };

  if (!firstAvailable) {
    return <p className="sf-purchase-unavailable">This piece is currently unavailable.</p>;
  }

  return (
    <form className="sf-purchase" onSubmit={submit}>
      {productType === "variant" ? (
        <fieldset className="sf-purchase__options">
          <legend>Choose an option</legend>
          {options.map((option) => (
            <label className={!option.available ? "is-disabled" : ""} key={option.key}>
              <input
                type="radio"
                name="variant"
                value={option.key}
                checked={variantKey === option.key}
                disabled={!option.available}
                onChange={() => {
                  setVariantKey(option.key);
                  setQuantity(1);
                  setState("idle");
                }}
              />
              <span>{option.label}</span>
              <strong>{formatMoney(option.price_minor)}</strong>
              {!option.available ? <small>Unavailable</small> : null}
            </label>
          ))}
        </fieldset>
      ) : null}

      <div className="sf-purchase__commit">
        <label className="sf-purchase__quantity">
          <span>Quantity</span>
          <input
            type="number"
            min={1}
            max={maximum}
            value={quantity}
            onChange={(event) => {
              const next = Number(event.target.value);
              setQuantity(Number.isFinite(next) ? Math.max(1, Math.min(maximum, Math.trunc(next))) : 1);
              setState("idle");
            }}
          />
        </label>
        <button disabled={state === "saving" || !selected?.available} type="submit">
          {state === "saving" ? "Adding…" : "Add to Bag"}
        </button>
      </div>

      {selected?.stock_quantity != null ? (
        <p className="sf-purchase__stock">{selected.stock_quantity} available in this option</p>
      ) : null}
      {message ? <p className={`sf-purchase__message is-${state}`} role="status">{message}</p> : null}
    </form>
  );
}
