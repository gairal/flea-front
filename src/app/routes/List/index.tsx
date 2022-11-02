import { OneItem } from "@directus/sdk";
import { FC } from "react";

import { PAGE_CONTAINER_CLASSES } from "../../constants";
import { useData } from "../../hooks";
import { FleaObject } from "../../types";

export * from "./listLoader";

export const ObjectList: FC = () => {
  const objects = useData<OneItem<FleaObject>[]>();

  return (
    <div className={PAGE_CONTAINER_CLASSES}>
      OBJECT LIST
      {objects?.map(({ id, name }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
};
