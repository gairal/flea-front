import { NavLink } from "react-router-dom";

const navItems = [
  {
    tag: "meubles",
  },
  {
    tag: "tables",
  },
];

export const Nav = () => (
  <nav>
    <ul className="flex justify-around bg-sky-100">
      {navItems.map(({ tag }) => (
        <li key={tag} className="transition-colors hover:bg-sky-200">
          <NavLink
            className={({ isActive }) =>
              `block px-4 py-3 ${isActive ? "bg-sky-800 text-sky-50" : ""}`
            }
            to={`objects/tags/${tag}`}
          >
            {tag}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
