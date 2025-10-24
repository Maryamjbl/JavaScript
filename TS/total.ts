function sum(numbers: number[]): number {
  let total = numbers.reduce((tot, n) => tot + n, 0);
  return total;
}

let numbers: number[] = [-10, 40, -20];
let total: number = sum(numbers);
console.log(total);
