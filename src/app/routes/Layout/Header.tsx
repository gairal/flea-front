import { FC } from "react";
import { Link } from "react-router-dom";

import { SearchBox } from "~/src/app/routes/Layout/SearchBox";

export const Header: FC = () => (
  <header className="sticky top-0 flex items-center bg-sky-50 py-2 shadow-sm">
    <h1 className="px-4 text-lg">
      <Link className="flex flex-col items-center" to="/">
        <span>Les Puces</span>
        <span>à José</span>
      </Link>
    </h1>
    <SearchBox />
    <Link
      className="flex h-12 w-16 items-center justify-center text-xl text-sky-600 hover:text-sky-700"
      to="contact"
    >
      <i className="fa-solid fa-at" />
    </Link>
  </header>
);
