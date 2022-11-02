import { Link } from "react-router-dom";

const tags = [
  {
    tag: "meubles",
  },
  {
    tag: "tables",
  },
  {
    tag: "tables",
  },
];

export const Categories = () => (
  <div className="mb-4">
    <h2 className="mb-4 text-6xl capitalize">categories</h2>
    <ul className="flex">
      {tags.map(({ tag }) => (
        <li
          key={tag}
          className="mr-3 border capitalize transition-colors hover:bg-sky-100"
        >
          <Link
            className="block h-full w-full px-4 py-3"
            to={`objects/tags/${tag}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
