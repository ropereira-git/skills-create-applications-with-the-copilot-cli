#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (×)
 *  - Division (÷)
 *  - Modulo (%)
 *  - Exponentiation (**)
 *  - Square Root (sqrt) — requires only one operand
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *   Example: node calculator.js add 2 3
 *   Example: node calculator.js sqrt 9
 */

const { add, sub, mul, div, mod, exp, sqrt } = require('./calculator.functions');

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> [num2]');
  console.log('Operations: add (+), sub (-), mul (×), div (÷), mod (%), exp (**), sqrt');
  console.log('Example: node calculator.js add 2 3');
  console.log('Example: node calculator.js sqrt 9');
}

const isSqrt = operation && operation.toLowerCase() === 'sqrt';

if (!operation || !num1 || (!isSqrt && !num2)) {
  printUsage();
  process.exit(1);
}

const a = parseFloat(num1);
if (isNaN(a)) {
  console.error('Operand must be a valid number.');
  process.exit(1);
}

let b;
if (!isSqrt) {
  b = parseFloat(num2);
  if (isNaN(b)) {
    console.error('Both operands must be valid numbers.');
    process.exit(1);
  }
}

let result;
try {
  switch (operation.toLowerCase()) {
    case 'add':
    case '+':
      result = add(a, b);
      break;
    case 'sub':
    case '-':
      result = sub(a, b);
      break;
    case 'mul':
    case 'x':
    case '*':
      result = mul(a, b);
      break;
    case 'div':
    case '/':
      result = div(a, b);
      break;
    case 'mod':
    case '%':
      result = mod(a, b);
      break;
    case 'exp':
    case '**':
      result = exp(a, b);
      break;
    case 'sqrt':
      result = sqrt(a);
      break;
    default:
      printUsage();
      process.exit(1);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}

console.log(`Result: ${result}`);
