import { getPayload } from "payload";

import config from "../../payload.config";

export type PayloadClient = Awaited<ReturnType<typeof getPayload>>;

let cachedPayloadClient: Promise<PayloadClient> | null = null;

/**
 * Server-only Payload Local API helper for internal read/query layers.
 *
 * This helper is intentionally not a route handler and should only be imported
 * by server-side modules. It uses the project Payload config directly and caches
 * initialization so repeated public reads do not repeatedly bootstrap Payload.
 */
export const getPayloadClient = async (): Promise<PayloadClient> => {
  if (!cachedPayloadClient) {
    cachedPayloadClient = getPayload({ config });
  }

  return cachedPayloadClient;
};
