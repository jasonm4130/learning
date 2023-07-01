/**
 * @return {Function}
 */
function createHelloWorld() {
  return function (...args: any[]) {
    return 'Hello World';
  };
}
