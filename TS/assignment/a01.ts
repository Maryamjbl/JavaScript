let myNameTS: string = "Ali";
let myAgeTS: number = 22;
let isStudentTS: boolean = true;
console.log(myNameTS, myAgeTS, isStudentTS);

function greetUserTS(name: string): string {
  return `Hello ,${name} `;
}
let greetTS = greetUser("Aysha");
console.log(greet);

let colorsTS: string[] = ["Red", "Blue", "Green"];
for (let j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}

function factorialTS(n: number): number {
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

function isEvenTS(n: number): boolean {
  if (n < 0) {
    console.log(" Enter a positive number.");
    return false;
  }

  return n % 2 == 0;
}
console.log(isEven(7));
console.log(isEven(8));

function sumArrayTS(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

