function createCounter(n: number): () => number {
  // Define a variable to keep track of the number of times the function is called
  let i = 0;

  // Return our counter function
  return () => {
    // Get the current count
    const count = n + i;

    // Increment the number of times the function is called
    i += 1;

    // Return the current count
    return count;
  };
}
