import { directus } from "~/src/services";

export const listLoader = () =>
  directus
    .items("objects")
    .readByQuery()
    .then(({ data }) => data ?? []);
