let x = 10;
x = "Aysha";
console.log(x * "Aysha");

function calculateArea(length, width) {
  return length * width;
}

let area = calculateArea(5, 10);
console.log(area); 

area = calculateArea(5, "10m");
console.log(area);

area = calculateArea(5);
console.log(area);

let fruits = ["apple", "banana", "kiwi"];
fruits.push("mango");
fruits.push(125);
console.log(fruits);