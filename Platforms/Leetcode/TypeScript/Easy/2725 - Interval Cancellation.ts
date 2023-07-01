/* eslint-disable @typescript-eslint/ban-types */
function cancellable(fn: Function, args: number[], t: number): Function {
  // Call the function immediately
  fn(...args);

  // Define our interval for calling the function
  const interval = setInterval(() => {
    fn(...args);
  }, t);

  // Return a function that clears the interval
  return () => {
    clearInterval(interval);
  };
}
