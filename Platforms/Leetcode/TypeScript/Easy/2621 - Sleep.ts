async function sleep(millis: number): Promise<void> {
  // Return a promise that resolves after the specified number of milliseconds
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
