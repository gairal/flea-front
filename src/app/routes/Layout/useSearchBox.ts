import { ChangeEvent, useState } from "react";
import { OneItem } from "@directus/sdk";

import { directus } from "~/src/services";
import { FleaObject } from "~/src/app/types";

export const useSearchBox = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<OneItem<FleaObject>[]>([]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
    if (target.value.length >= 3) {
      directus
        .items("objects")
        .readByQuery({ search: target.value })
        .then(({ data }) => data && setResults(data));
    }
  };

  const handleReset = () => {
    setSearch("");
    setResults([]);
  };

  return { handleChange, handleReset, results, search };
};
