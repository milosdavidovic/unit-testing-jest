const { divide, multiply } = require("./math");

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${expected} is not equal to ${actual}`);
      }
    },
    toEqual(value) {
      throw new Error("Not implemented exception");
    },
    toBeGreaterThen(value) {
      throw new Error("Not implemented exception");
    },
  };
}

let expected;
let result;

expected = 15;
result = multiply(4, 4);
expect(result).toEqual(expected);

expected = 2;
result = divide(4, 2);
expect(result).toEqual(expected);