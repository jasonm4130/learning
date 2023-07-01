function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  // Define a variable to keep track of the new array
  const newArr = [];

  // Iterate through the array
  for (let i = 0; i < arr.length; i += 1) {
    // Apply the function to each element in the array
    newArr.push(fn(arr[i], i));
  }

  // Return the new array
  return newArr;
}
