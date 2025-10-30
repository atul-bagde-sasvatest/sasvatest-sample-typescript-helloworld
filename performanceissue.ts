
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr.reduce((a, b) => a + b, 0); // Inefficient: recalculates sum every time
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 75
