async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  const promises = functions.map((fn) => fn());
  return Promise.all(promises);
}
