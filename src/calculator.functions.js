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

function mod(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function exp(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  if (a < 0) throw new Error('Square root of negative number');
  return Math.sqrt(a);
}

module.exports = { add, sub, mul, div, mod, exp, sqrt };