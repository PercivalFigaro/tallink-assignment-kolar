import {
  findHighestPrimeBetween,
  handleCalculate,
  isPrime,
} from '../../utils/calculation';

describe('isPrime', () => {
  it('should return false for numbers less than 2', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
  });

  it('should identify prime numbers', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(2423)).toBeTruthy();
  });

  it('should not identify non-prime numbers', () => {
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(8)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(2421)).toBeFalsy();
  });
});

describe('findHighestPrimeBetween', () => {
  it('should return the highest prime number between two numbers', () => {
    expect(findHighestPrimeBetween(10, 20)).toBe(19);
    expect(findHighestPrimeBetween(14, 29)).toBe(29);
  });

  it('should handle cases where there are no prime numbers', () => {
    expect(findHighestPrimeBetween(0, 1)).toBe('Not available');
    expect(findHighestPrimeBetween(-10, -1)).toBe('Not available');
  });

  it('should work regardless of the order of arguments', () => {
    expect(findHighestPrimeBetween(20, 10)).toBe(19);
    expect(findHighestPrimeBetween(232, 42.242)).toBe(229);
    expect(findHighestPrimeBetween(29, 14)).toBe(29);
  });
});

describe('handleCalculate', () => {
  it('adds two numbers correctly', () => {
    const result = handleCalculate(3, 5, '+');
    expect(result).toBe(8);
  });

  it('divides two numbers correctly', () => {
    const result = handleCalculate(10, 2, '/');
    expect(result).toBe(5);
  });

  it('divides floats correctly', () => {
    const result = handleCalculate(242, 324, '/');
    expect(result).toBe(0.747);
  });

  it('returns infinity when dividing by zero', () => {
    const result = handleCalculate(5, 0, '/');
    expect(result).toBe('∞');
  });

  it('calculates the remainder of division correctly', () => {
    const result = handleCalculate(10, 4, '%');
    expect(result).toBe(2);
  });
});
