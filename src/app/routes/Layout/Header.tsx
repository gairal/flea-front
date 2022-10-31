import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from '~/src/app/routes/Layout/Nav';

export const Header: FC = () => (
  <header>
    <div className="flex border-b">
      <h1 className="text-xl p-2">
        <NavLink to="/">Les Puces A Boussuge</NavLink>
      </h1>
      <input className="bg-blue-100" type="search" />
    </div>
    <Nav />
  </header>
);
