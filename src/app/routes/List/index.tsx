import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { OneItem } from "@directus/sdk";

import { directus } from "~/src/services";
import { FleaObject } from "~/src/app/types";

export const loader = () =>
  directus
    .items("objects")
    .readByQuery()
    .then(({ data }) => data);

export const ObjectList: FC = () => {
  const objects = useLoaderData() as OneItem<FleaObject>[];

  return (
    <div>
      {objects?.map(({ name }) => (
        <h1 key={name}>{name}</h1>
      ))}
    </div>
  );
};
