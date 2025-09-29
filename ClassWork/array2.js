let fruits = ["Apple", "Banana", "Grapes"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

fruits.unshift("Cherry");
console.log(fruits);

let index = fruits.indexOf("Cherry");
console.log("Position Of Cherry" + index);

let searchFruit = "Apple";
let found = fruits.includes(searchFruit);
console.log(searchFruit + " present in array " + found);

let numbers = [10, 20, 30, 40, 50, 60, 70];
let part = numbers.slice(3, 6);
console.log(part);

let a = [1, 2];
let b = [3, 4, 5];
let c = a.concat(b);
console.log(c);

a.splice(1, 0, 100);
console.log(a);
b.splice(2, 0, 1000);
console.log(b);

let numbers2 = [10, 30, 60];
let total = 0;

for (let i = 0; i < numbers2.length; i++) {
  total = total + numbers2[i];
}
console.log("Total = " + total);

total = 0;
for (let n of numbers2) {
  total = total + n;
}
console.log("Total = " + total);
