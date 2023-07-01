async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  // Wait for both promises to resolve
  const [result1, result2] = await Promise.all([promise1, promise2]);

  // Return the sum of the results
  return result1 + result2;
}
