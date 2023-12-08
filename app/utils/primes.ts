export function isPrime(num: number) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

export function findHighestPrimeBetween(a: number, b: number) {
  let start = Math.ceil(Math.min(a, b));
  let end = Math.floor(Math.max(a, b));
  let maxPrime = -1;

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      maxPrime = i;
    }
  }

  return maxPrime > 1 ? maxPrime : 'Not available';
}
