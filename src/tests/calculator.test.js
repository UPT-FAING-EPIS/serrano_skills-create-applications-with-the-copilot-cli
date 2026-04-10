const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
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

  test("modulo: 10 % 3 = 1", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("modulo example: 5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("modulo by zero throws an error", () => {
    expect(() => modulo(10, 0)).toThrow("modulo by zero is not allowed");
  });

  test("power: 2 ^ 4 = 16", () => {
    expect(power(2, 4)).toBe(16);
  });

  test("power example: 2 ^ 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("power supports negative exponents", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("square root: sqrt(16) = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("square root example: sqrt(0) = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of negative numbers throws an error", () => {
    expect(() => squareRoot(-1)).toThrow(
      "square root of a negative number is not allowed",
    );
  });
});

describe("calculate operation dispatcher", () => {
  test("supports symbolic operators", () => {
    expect(calculate("+", 7, 3)).toBe(10);
    expect(calculate("-", 7, 3)).toBe(4);
    expect(calculate("*", 7, 3)).toBe(21);
    expect(calculate("/", 8, 2)).toBe(4);
    expect(calculate("%", 8, 3)).toBe(2);
    expect(calculate("**", 2, 3)).toBe(8);
  });

  test("supports named operators", () => {
    expect(calculate("add", 1, 2)).toBe(3);
    expect(calculate("sub", 5, 2)).toBe(3);
    expect(calculate("mul", 3, 4)).toBe(12);
    expect(calculate("div", 9, 3)).toBe(3);
    expect(calculate("mod", 9, 4)).toBe(1);
    expect(calculate("pow", 2, 3)).toBe(8);
    expect(calculate("power", 2, 5)).toBe(32);
    expect(calculate("sqrt", 25, 0)).toBe(5);
  });

  test("matches requested examples in dispatcher", () => {
    expect(calculate("%", 5, 2)).toBe(1);
    expect(calculate("pow", 2, 3)).toBe(8);
    expect(calculate("sqrt", 16, 0)).toBe(4);
  });

  test("propagates square root negative input error", () => {
    expect(() => calculate("sqrt", -9, 0)).toThrow(
      "square root of a negative number is not allowed",
    );
  });

  test("propagates modulo by zero error", () => {
    expect(() => calculate("%", 9, 0)).toThrow("modulo by zero is not allowed");
  });

  test("throws for unsupported operations", () => {
    expect(() => calculate("noop", 2, 3)).toThrow("unsupported operation");
  });
});
