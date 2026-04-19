let n = 10;
m = "9";
console.log(n * m);

let x = 10;
x = "heyy";
console.log(x * 3);

let fruits = ["Apple", "Banana", "Grapes"];
fruits.push ("Kiwi");
console.log(fruits,"Kiwi added");

fruits.pop();
console.log(fruits,"Kiwi removed");

function calcArea(l, b) {
  let result = l * b;
  return result;
}
let area = calcArea(10, 5);
console.log("Area =", area);

area = calcArea(10, "15 metres");
console.log("Area =", area);




