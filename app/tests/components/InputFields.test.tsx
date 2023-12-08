import { findHighestPrimeBetween, isPrime } from '@/app/utils/primes';

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
  });

  it('should not identify non-prime numbers', () => {
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(8)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
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
    expect(findHighestPrimeBetween(29, 14)).toBe(29);
  });
});
