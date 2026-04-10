const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require("../calculator");

describe("calculator arithmetic functions", () => {
  test("addition: 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtraction: 10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplication: 45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("division: 20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("division by zero throws an error", () => {
    expect(() => divide(10, 0)).toThrow("division by zero is not allowed");
  });
});

describe("calculate operation dispatcher", () => {
  test("supports symbolic operators", () => {
    expect(calculate("+", 7, 3)).toBe(10);
    expect(calculate("-", 7, 3)).toBe(4);
    expect(calculate("*", 7, 3)).toBe(21);
    expect(calculate("/", 8, 2)).toBe(4);
  });

  test("supports named operators", () => {
    expect(calculate("add", 1, 2)).toBe(3);
    expect(calculate("sub", 5, 2)).toBe(3);
    expect(calculate("mul", 3, 4)).toBe(12);
    expect(calculate("div", 9, 3)).toBe(3);
  });

  test("throws for unsupported operations", () => {
    expect(() => calculate("pow", 2, 3)).toThrow("unsupported operation");
  });
});
