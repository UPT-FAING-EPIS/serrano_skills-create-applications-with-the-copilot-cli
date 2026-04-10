#!/usr/bin/env node

/**
 * Node.js CLI calculator.
 * Supported operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (x, *, mul)
 * - division (/, ÷, div)
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("division by zero is not allowed");
  }
  return a / b;
}

function calculate(operationInput, a, b) {
  const operation = String(operationInput).toLowerCase();

  switch (operation) {
    case "add":
    case "+":
      return add(a, b);
    case "sub":
    case "-":
      return subtract(a, b);
    case "mul":
    case "x":
    case "*":
      return multiply(a, b);
    case "div":
    case "/":
    case "÷":
      return divide(a, b);
    default:
      throw new Error(`unsupported operation "${operationInput}"`);
  }
}

function printUsageAndExit() {
  console.log("Usage: node src/calculator.js <operation> <a> <b>");
  console.log("Operations: add|+  sub|-  mul|x|*  div|/|÷");
  process.exit(1);
}

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    printUsageAndExit();
  }

  const [operationInput, aRaw, bRaw] = args;
  const a = Number(aRaw);
  const b = Number(bRaw);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Error: both operands must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(operationInput, a, b);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}.`);
    printUsageAndExit();
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
