import { LoaderFunction } from "react-router-dom";

import { directus } from "~/src/services";

export const itemLoader: LoaderFunction = ({ params }) =>
  directus.items("objects").readOne(params.id ?? "");
