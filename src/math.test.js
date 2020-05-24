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

function test(title, callback) {
  try {
    callback();
    console.log(`OK ${title}`);
  } catch (err) {
    console.error(`X ${title}`);
    console.error(err.message);
  }
}

test("multiply multiplies numbers", () => {
  const expected = 15;
  const result = multiply(4, 4);
  expect(result).toBe(expected);
});

test("divide divides numbers", () => {
  const expected = 2;
  const result = divide(4, 2);
  expect(result).toBe(expected);
});
