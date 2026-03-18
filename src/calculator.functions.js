// calculator.functions.js
// Pure functions for calculator operations

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
