export function handleCalculate(
  operandA: number,
  operandB: number,
  operation: string
) {
  let result: string | number = '';
  switch (operation) {
    case '+':
      result = parseFloat((operandA + operandB).toFixed(3));
      break;
    case '/':
      if (operandB === 0) {
        result = '∞';
      } else {
        result = parseFloat((operandA / operandB).toFixed(3));
      }
      break;
    case '%':
      // Modulo calculation might be inaccurate with floats due to how JS works
      result = parseFloat((operandA % operandB).toFixed(3));
      break;
    case 'prime':
      // Compares both numbers for whichever is highest and returns prime closest to that
      result = findHighestPrimeBetween(operandA, operandB);
      break;
    default:
      break;
  }

  return result;
}

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
