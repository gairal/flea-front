import { Directus } from "@directus/sdk";

import { Collections } from "~/src/app/types";

export const directus = new Directus<Collections>(
  import.meta.env.VITE_BACKEND_URL
);
