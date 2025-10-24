let myName: string = "Ali";
let myAge: number = 22;
let isStudent: boolean = true;
console.log(myName, myAge, isStudent);

function greetUser(name: string): string {
  return `Hello ,${name} `;
}
let greet = greetUser("Aysha");
console.log(greet);

let colors: string[] = ["Red", "Blue", "Green"];
for (let j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}

function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));

function isEven(n: number): boolean {
  if (n < 0) {
    console.log(" Enter a positive number.");
    return false;
  }

  return n % 2 == 0;
}
console.log(isEven(7));
console.log(isEven(8));

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
