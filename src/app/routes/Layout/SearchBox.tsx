export const SearchBox = () => {
  return (
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
        placeholder="Rechercher"
        type="search"
      />
      <button
        className="px-4 text-gray-600"
        onClick={() => undefined}
        type="button"
      >
        <i className="fa-solid fa-x" />
      </button>
    </div>
  );
};
