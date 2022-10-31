import { useSearchBox } from "~/src/app/routes/Layout/useSearchBox";

export const SearchBox = () => {
  const { handleChange, handleReset, results, search } = useSearchBox();

  return (
    <>
      <div className="flex flex-1 items-center bg-teal-100">
        <button
          className="px-4 text-gray-600"
          onClick={() => undefined}
          type="button"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <input
          className="w-full bg-transparent py-3 focus:outline-none"
          onChange={handleChange}
          placeholder="Rechercher"
          type="search"
          value={search}
        />
        <button
          className="px-4 text-gray-600"
          onClick={handleReset}
          type="button"
        >
          <i className="fa-solid fa-x" />
        </button>
      </div>
      {results.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </>
  );
};
