// PROBLEM 1
function sumArray(arr: number[]): number {
  let total: number = 0;

  for (let x = 0; x < arr.length; x++) {
    total = total + arr[x]; 
  }
  return total;
}
let sum1: number[] = [1, 2, 3, 4, 5];
let sum2: number[] = [10, 20, 30];
let sum3: number[] = [];
let sum4: number[] = [-1,-2,3];


let sol1 = sumArray(sum1);
console.log(`Sum of numbers in sum1 = ${sol1}`);

let sol2 = sumArray(sum2);
console.log(`Sum of numbers in sum2 = ${sol2}`);

let sol3 = sumArray(sum3);
console.log(`Sum of numbers in [] = ${sol3}`);

let sol4 = sumArray(sum4);
console.log(`Sum of numbers in sum4 = ${sol4}`);


