import { OneItem } from "@directus/sdk";
import { FC } from "react";

import { useData } from "../../hooks";
import { FleaObject } from "../../types";
import { PAGE_CONTAINER_CLASSES } from "../../constants";
import { Carousel } from "./Carousel";

export * from "./itemLoader";

export const ObjectItem: FC = () => {
  const object = useData<OneItem<FleaObject>>();

  return (
    <article>
      <Carousel />
      <div className={PAGE_CONTAINER_CLASSES}>
        <h2 className="text-5xl">{object.name}</h2>
      </div>
    </article>
  );
};
