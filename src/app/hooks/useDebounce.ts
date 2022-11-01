import { useEffect, useMemo } from "react";

const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  waitFor = 500
) => {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), waitFor);
  };
  debounced.cancel = () => clearTimeout(timeout);

  return debounced;
};

export const useDebounce = <
  F extends (...args: Parameters<F>) => ReturnType<F>
>(
  callback: F,
  waitFor?: number
) => {
  const debounced = useMemo(() => debounce(callback, waitFor), []);

  useEffect(() => () => debounced.cancel(), [debounced]);

  return debounced;
};
