import { OneItem } from "@directus/sdk";
import { NavLink } from "react-router-dom";

import { FleaObject } from "~/src/app/types";

export const SearchResults = ({ items }: { items: OneItem<FleaObject>[] }) => (
  <ul className="absolute top-0 w-full bg-sky-50 py-3 shadow-sm hover:underline">
    {items.map(({ id, name }) => (
      <li key={name}>
        <NavLink className="block h-full w-full px-4" to={`objects/${id}`}>
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);
