// calculator.test.js
// Jest unit tests for calculator functions
create-calc-app
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

  test('mod 10 % 3 to equal 1', () => {
    expect(mod(10, 3)).toBe(1);
  });

  test('exp 2 ** 8 to equal 256', () => {
    expect(exp(2, 8)).toBe(256);
  });

  test('sqrt 9 to equal 3', () => {
    expect(sqrt(9)).toBe(3);
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

  test('modulo by zero throws error', () => {
    expect(() => mod(10, 0)).toThrow('Modulo by zero');
  });

  test('exp with zero exponent returns 1', () => {
    expect(exp(5, 0)).toBe(1);
  });

  test('exp with negative exponent returns fraction', () => {
    expect(exp(2, -1)).toBe(0.5);
  });

  test('sqrt of 0 returns 0', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('sqrt of negative number throws error', () => {
    expect(() => sqrt(-4)).toThrow('Square root of negative number');
  });
});
