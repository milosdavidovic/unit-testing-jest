const { divide, multiply } = require("./math");

test("multiply multiplies numbers", () => {
  // A-A-A
  // arrange
  const expected = 15;
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
