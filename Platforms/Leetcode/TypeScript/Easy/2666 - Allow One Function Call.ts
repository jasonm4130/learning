type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
  // Define a variable to keep track of whether the function has been called
  let called = false;

  return function (...args: number[]): number | undefined {
    // If the function has been called, return undefined
    if (called) return undefined;

    // Otherwise, set called to true
    called = true;

    // Return the result of calling the function
    return fn(...args) as number;
  };
}
