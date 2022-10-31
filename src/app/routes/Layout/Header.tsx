import { FC } from "react";
import { NavLink } from "react-router-dom";

import { Nav } from "~/src/app/routes/Layout/Nav";

export const Header: FC = () => (
  <header>
    <div className="flex border-b">
      <h1 className="p-2 text-xl">
        <NavLink to="/">Les Puces A Boussuge</NavLink>
      </h1>
      <input className="m-2 bg-gray-200 px-2 py-2" type="search" />
    </div>
    <Nav />
  </header>
);
