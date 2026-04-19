// Problem 1 : Perimeter Of a Rectangle 
function perimOfRectangle(length: number, breadth: number): number {
    return 2 * (length + breadth);
}

let perimeter:number = perimOfRectangle(10,5);
console.log("The perimeter of the rectangle is:", perimeter);

// Problem 2: Square of a Number
function squareOfNumber(num: number): number {
    return num * num;
}
let square:number = squareOfNumber(7);
console.log("Square of the number 7 is :", square);

// Problem 3: Celsius to Fahrenheit Conversion
function celsiusToFahrenheit(celsius: number): number {
    return celsius * 9/5 + 32;
}
let fahrenheit:number = celsiusToFahrenheit(25);
console.log("Temperature in Fahrenheit =",fahrenheit);

// Problem 4: Check Even Number
function isEven(num:number) : boolean {
    return num % 2 === 0;}

let check:number = 12;
console.log("The number 12 is ", isEven(check) ? "even" : "odd");

// Problem 5 : Factorial of a Number
function factorial(n: number): number {
    let fact = 1;          
    for (let i = 1; i <= n; i++) {
        fact = fact * i; }
    return fact;           
}
console.log("Factorial of 5 is:", factorial(5)); 