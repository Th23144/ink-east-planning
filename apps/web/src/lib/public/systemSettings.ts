import { getPayloadClient } from "../payload/getPayloadClient";
import { mapSystemSettings } from "./mappers";
import type { PublicSystemSettings } from "./types";

export const getPublicSystemSettings = async (): Promise<PublicSystemSettings> => {
  const payload = await getPayloadClient();
  const settings = await payload.findGlobal({
    slug: "system-settings",
    depth: 0,
    overrideAccess: false
  });

  return mapSystemSettings(settings);
};
