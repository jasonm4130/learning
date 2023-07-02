function chunk(arr: any[], size: number): any[][] {
  // If the size is less than 1, return an empty array
  if (arr.length < 1) {
    return [];
  }

  // Return the chunked array
  return arr.reduce(
    (acc, val) => {
      if (acc[acc.length - 1].length === size) {
        acc.push([]);
      }
      acc[acc.length - 1].push(val);
      return acc;
    },
    [[]]
  );
}
