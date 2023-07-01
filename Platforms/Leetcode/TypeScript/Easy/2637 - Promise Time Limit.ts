/* eslint-disable prefer-promise-reject-errors */
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args: number[]): Promise<any> {
    // Return a promise that resolves after the specified number of milliseconds
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t);

      fn(...args).then(resolve, reject);
    });

    // Return the result of calling the function
    return promise;
  };
}
