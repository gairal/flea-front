import { ChangeEvent, useState } from "react";
import { OneItem } from "@directus/sdk";

import { directus } from "~/src/services";
import { FleaObject } from "~/src/app/types";
import { useDebounce } from "~/src/app/hooks";

export const useSearchBox = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<OneItem<FleaObject>[]>([]);

  const query = useDebounce((searchQuery: string) => {
    if (searchQuery.length >= 3) {
      directus
        .items("objects")
        .readByQuery({ search: searchQuery })
        .then(({ data }) => data && setResults(data));
    }
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
    query(target.value);
  };

  return {
    handleChange,
    handleReset: () => {
      setSearch("");
      setResults([]);
    },
    results,
    search,
  };
};
