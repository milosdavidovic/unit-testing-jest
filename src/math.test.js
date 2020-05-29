const { divide, multiply } = require("./math");
const { test, expect } = require("./test-utils");

// A-A-A
test("multiply multiplies numbers", () => {
  // arrange
  const expected = 16;
  // act
  const result = multiply(4, 4);
  // assert
  expect(result).toBe(expected);
});

test("divide divides numbers", () => {
  const expected = 2;
  const result = divide(4, 2);
  expect(result).toBe(expected);
});
