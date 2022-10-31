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
    <ul className="flex justify-around bg-teal-200">
      {navItems.map(({ tag }) => (
        <li
          key={tag}
          className="transition-colors hover:bg-teal-300 hover:text-teal-50"
        >
          <NavLink
            className={({ isActive }) =>
              `block px-4 py-3 ${isActive ? "bg-amber-800" : ""}`
            }
            to={`objects/?tags=${tag}`}
          >
            {tag}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
