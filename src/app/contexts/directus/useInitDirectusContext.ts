import { Directus } from "@directus/sdk";

import type { DirectusContextState } from "./types";
import { Collections } from "~/src/app/types";

export const useInitDirectusContext = (): DirectusContextState => {
  const client = new Directus<Collections>(import.meta.env.VITE_BACKEND_URL);

  return { client };
};
