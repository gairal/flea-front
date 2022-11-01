import { SearchResults } from "./SearchResults";
import { useSearchBox } from "./useSearchBox";

export const SearchBox = () => {
  const {
    handleChange,
    handleFocus,
    handleReset,
    ref,
    query,
    results,
    showResults,
  } = useSearchBox();

  return (
    <div ref={ref} className="flex flex-1 flex-col">
      <div className="relative">
        <button
          className="absolute inset-y-0 left-0 px-4 text-gray-600	"
          onClick={() => undefined}
          type="button"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <input
          className="w-full rounded-sm border border-transparent bg-teal-100 py-3 px-12 text-gray-600 transition-shadow focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="table, vase, ..."
          type="search"
          value={query}
        />
        <button
          className="absolute inset-y-0 right-0 px-4 text-gray-600"
          onClick={handleReset}
          type="button"
        >
          <i className="fa-solid fa-x" />
        </button>
      </div>
      <div className="relative">
        {showResults && <SearchResults items={results} />}
      </div>
    </div>
  );
};
