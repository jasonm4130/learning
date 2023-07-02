declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  // Check for the case where the array is empty
  if (this.length < 1) {
    return -1;
  }

  // Return the last element
  return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
