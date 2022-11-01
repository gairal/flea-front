import { FC } from "react";

import { directus } from "~/src/services";
import { useData } from "../../hooks";

export const loader = () =>
  directus
    .items("objects")
    .readByQuery()
    .then(({ data }) => data ?? []);

export const ObjectList: FC = () => {
  const objects = useData<Awaited<ReturnType<typeof loader>>>();

  return (
    <div>
      OBJECT LIST
      {objects?.map((item) => (
        <h1 key={item?.id}>{item?.name}</h1>
      ))}
    </div>
  );
};
