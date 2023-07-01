class TimeLimitedCache {
  cache: Map<number, number>;

  timeouts: Map<number, NodeJS.Timeout>;

  constructor() {
    // Define our cache
    this.cache = new Map() as Map<number, number>;
    this.timeouts = new Map() as Map<number, NodeJS.Timeout>;
  }

  set(key: number, value: number, duration: number): boolean {
    // Get if the value is already in the cache
    const inCache = this.cache.has(key);

    // Set the value in the cache
    this.cache.set(key, value);

    // Define a function to remove the value from the cache
    const remove = () => {
      this.cache.delete(key);
      this.timeouts.delete(key);
    };

    // If the value already has a timeout, clear it
    if (this.timeouts.has(key)) {
      // Clear the timeout
      clearTimeout(this.timeouts.get(key) as NodeJS.Timeout);
    }

    // Add the new timeout
    this.timeouts.set(key, setTimeout(remove, duration));

    // Return whether the value was set in the cache
    return inCache;
  }

  get(key: number): number {
    return (this.cache.get(key) as number) || -1;
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
