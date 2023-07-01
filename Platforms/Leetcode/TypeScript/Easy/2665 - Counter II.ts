type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  // Define our initial value
  const initial = init;
  let count = initial;
  return {
    increment: () => {
      count += 1;
      return count;
    },
    decrement: () => {
      count -= 1;
      return count;
    },
    reset: () => {
      count = initial;
      return count;
    },
  };
}
