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

module.exports = {
  expect,
  test,
};
