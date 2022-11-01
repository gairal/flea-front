import { useEffect, useRef } from "react";

export const useDebounce = <
  F extends (...args: Parameters<F>) => ReturnType<F>
>(
  callback: F,
  waitFor = 500
) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (...args: Parameters<F>) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => callback(...args), waitFor);
  };
};
