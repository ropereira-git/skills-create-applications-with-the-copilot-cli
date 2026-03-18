#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (×)
 *  - Division (÷)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *   Example: node calculator.js add 2 3
 */

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Operations: add (+), sub (-), mul (×), div (÷), mod (%), power, sqrt');
  console.log('Example: node calculator.js add 2 3');
  console.log('Example: node calculator.js sqrt 9');
}

if (!operation || !num1 || !num2) {
  printUsage();
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);
if (isNaN(a) || isNaN(b)) {
  console.error('Both operands must be valid numbers.');
  process.exit(1);
}

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot take square root of a negative number.');
  }
  return Math.sqrt(n);
}

let result;
switch (operation.toLowerCase()) {
  case 'add':
  case '+':
    result = a + b;
    break;
  case 'sub':
  case '-':
    result = a - b;
    break;
  case 'mul':
  case 'x':
  case '*':
    result = a * b;
    break;
  case 'div':
  case '/':
    if (b === 0) {
      console.error('Error: Division by zero.');
      process.exit(1);
    }
    result = a / b;
    break;
  case 'mod':
  case '%':
    result = modulo(a, b);
    break;
  case 'power':
    result = power(a, b);
    break;
  case 'sqrt':
    try {
      result = squareRoot(a);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    break;
  default:
    printUsage();
    process.exit(1);
}

console.log(`Result: ${result}`);
