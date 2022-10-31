import { FC, useEffect, useState } from "react";
import { OneItem } from "@directus/sdk";

import { useDirectusContext } from "~/src/app/contexts";
import { FleaObject } from "~/src/app/types";

export const ObjectList: FC = () => {
  const { client } = useDirectusContext();
  const [objects, setObjects] = useState<OneItem<FleaObject>[]>();

  useEffect(() => {
    client
      .items("objects")
      .readByQuery()
      .then(({ data }) => data && setObjects(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {objects?.map(({ name }) => (
        <h1 key={name}>{name}</h1>
      ))}
    </div>
  );
};
