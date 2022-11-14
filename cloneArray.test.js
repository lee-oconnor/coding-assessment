const cloneArray = require("./cloneArray");

test("properly copied array", () => {
  const array = [2, 3, 4];
  expect(cloneArray(array)).toStrictEqual(array);
});
