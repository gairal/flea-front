import { useEffect, useRef } from "react";

export const useOnClickOutside = <E extends HTMLElement>(
  callback: VoidFunction
) => {
  const ref = useRef<E>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [callback]);

  return ref;
};
