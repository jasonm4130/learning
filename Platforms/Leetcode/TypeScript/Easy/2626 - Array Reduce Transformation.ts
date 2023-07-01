type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  // Define a variable to keep track of the accumulator
  let accum = init;

  // Iterate through the array
  for (let i = 0; i < nums.length; i += 1) {
    // Apply the function to each element in the array
    accum = fn(accum, nums[i]);
  }

  // Return the accumulator
  return accum;
}
