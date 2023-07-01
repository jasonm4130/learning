type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  // Define a variable to keep track of the results of calling the function
  const results = new Map();

  return function (...args: number[]): number | undefined {
    // Define a variable to keep track of the arguments passed to the function
    const key = JSON.stringify(args);

    // If the result of calling the function has already been calculated, return it
    if (results.has(key)) return results.get(key) as number;

    // Otherwise, calculate the result of calling the function
    const result = fn(...args) as number;

    // Store the result of calling the function
    results.set(key, result);

    // Return the result of calling the function
    return result;
  };
}
