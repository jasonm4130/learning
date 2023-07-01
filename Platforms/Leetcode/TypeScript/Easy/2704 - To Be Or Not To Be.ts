type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expected: any) => {
      if (val !== expected) {
        throw new Error(`Not Equal`);
      }
      return true;
    },
    notToBe: (expected: any) => {
      if (val === expected) {
        throw new Error(`Equal`);
      }
      return true;
    },
  };
}
