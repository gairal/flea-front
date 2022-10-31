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
    <ul className="flex">
      {navItems.map(({ tag }) => (
        <li key={tag}>
          <NavLink
            className={({ isActive }) =>
              `block p-2 ${isActive ? "bg-amber-800" : ""}`
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
