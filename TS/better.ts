let x: number = 100;

let title: string = "TypeScript is better than JavaScript";

let isAdult: boolean = true;
let y = 20; 
y = true;

let isNew = true;

function calcArea(length: number, breadth: number): number {
  let area: number = length * breadth;
  return area;
}

let area: number = calcArea(4, 5);
console.log(area);

area = calcArea(10, "20m");

area = calcArea(10);