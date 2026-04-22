let n = 10;
n = "hello";
console.log(n * 5);

function calcArea(l: number, b: number) {
  let result: number = l * b;
  return result;
}
let area: number = calcArea(10, 5);
console.log("Area of the rectangle is:", area);

area = calcArea(10, 5);
console.log("Area of the rectangle is:", area);

let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("watermelon");
fruits.push("125");
console.log(fruits);
