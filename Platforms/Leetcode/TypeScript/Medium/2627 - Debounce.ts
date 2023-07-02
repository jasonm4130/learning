type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timeout: NodeJS.Timeout | null = null;
  return function (...args) {
    const later = () => {
      timeout = null;
      fn(...args);
    };
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, t);
  };
}
