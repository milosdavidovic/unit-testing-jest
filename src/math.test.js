function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let expected = 16;
let result = multiply(4, 4);
if (expected !== result) {
  throw new Error(`${expected} is not equal to ${result}`);
}

expected = 2;
result = divide(4, 2);
if (expected !== result) {
  throw new Error(`${expected} is not equal to ${result}`);
}
