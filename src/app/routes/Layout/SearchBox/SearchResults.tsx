import { OneItem } from "@directus/sdk";

import { FleaObject } from "~/src/app/types";

export const SearchResults = ({ items }: { items: OneItem<FleaObject>[] }) => (
  <div>
    {items.map(({ name }) => (
      <div key={name}>{name}</div>
    ))}
  </div>
);
