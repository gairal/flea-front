export const debounce = <F extends (...args: unknown[]) => unknown>(
  fn: F,
  wait = 300
) => {
  let timeout: number;

  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), wait);
  };
};
