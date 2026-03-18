// calculator.test.js
// Jest unit tests for calculator functions

const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator.functions');

describe('Calculator Basic Operations', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplies 45 * 2 to equal 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('divides 20 / 5 to equal 4', () => {
    expect(div(20, 5)).toBe(4);
  });
});

describe('Calculator Edge Cases', () => {
  test('division by zero throws error', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
  });

  test('addition with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('subtraction resulting in negative', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  test('multiplication by zero', () => {
    expect(mul(0, 100)).toBe(0);
  });
});
