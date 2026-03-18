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
  console.log('Operations: add (+), sub (-), mul (×), div (÷)');
  console.log('Example: node calculator.js add 2 3');
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
  default:
    printUsage();
    process.exit(1);
}

console.log(`Result: ${result}`);
