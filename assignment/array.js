let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

fruits.push("Pineapple", "Grapes");
let lastFruit = fruits.pop();
console.log("Last fruit removed:", lastFruit);

console.log("Total number of fruits:", fruits.length);

let x;
console.log("Fruits");

for (let i = 0; i < fruits.length; i++) {
  x = i + 1;
  console.log("Fruits #" + x + ":" + fruits[i]);
}
