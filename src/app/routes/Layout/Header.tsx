import { FC } from "react";
import { NavLink } from "react-router-dom";

import { Nav } from "~/src/app/routes/Layout/Nav";
import { SearchBox } from "~/src/app/routes/Layout/SearchBox";

export const Header: FC = () => (
  <header>
    <div className="flex items-center border-b px-4 py-2">
      <h1 className="mr-4 text-lg">
        <NavLink className="flex flex-col items-center" to="/">
          <span>Les Puces</span>
          <span>à José</span>
        </NavLink>
      </h1>
      <SearchBox />
    </div>
    <Nav />
  </header>
);
