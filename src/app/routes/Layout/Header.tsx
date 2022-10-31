import { FC } from "react";
import { NavLink } from "react-router-dom";

import { Nav } from "~/src/app/routes/Layout/Nav";
import { SearchBox } from "~/src/app/routes/Layout/SearchBox";

export const Header: FC = () => (
  <header>
    <div className="flex border-b">
      <h1 className="p-2 text-xl">
        <NavLink to="/">Les Puces A Boussuge</NavLink>
      </h1>
      <SearchBox />
    </div>
    <Nav />
  </header>
);
