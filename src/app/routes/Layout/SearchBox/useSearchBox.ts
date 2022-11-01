import { ChangeEvent, useEffect, useState } from "react";
import { OneItem } from "@directus/sdk";

import { directus } from "~/src/services";
import { FleaObject } from "~/src/app/types";
import { useDebounce, useOnClickOutside } from "~/src/app/hooks";

const MINIMUM_CHAR_LENGTH = 3;

export const useSearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<OneItem<FleaObject>[]>([]);
  const [show, setShow] = useState(false);

  const callSearch = useDebounce((search: string) => {
    if (search.length >= MINIMUM_CHAR_LENGTH) {
      directus
        .items("objects")
        .readByQuery({ search })
        .then(({ data }) => {
          if (data) {
            setResults(data);
            setShow(true);
          }
        });
    }
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
    callSearch(target.value);
  };

  useEffect(() => {
    if (query.length < MINIMUM_CHAR_LENGTH) {
      setResults([]);
    }
  }, [query, setResults]);

  return {
    handleChange,
    handleFocus: () => setShow(true),
    handleReset: () => setQuery(""),
    query,
    ref: useOnClickOutside<HTMLDivElement>(() => setShow(false)),
    results,
    showResults: show && results.length > 0,
  };
};
