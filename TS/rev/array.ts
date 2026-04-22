let fruits: string[] = ["apple", "banana", "orange"];

let marks : number[] = [85, 90, 78];
marks.push(95);

let students = ["Maryam", "Mustafa", "Yusuf", "Qasim"];
students.push("879");

function calcTotal(marks: number[]): number {
  let total: number = 0;
for (let mark of marks) {
    total = total + mark;
  }

  return total;
}
let marks2: number[] = [45, 55,14,54,];
let sum = calcTotal(marks2);
console.log(`Sum of marks = ${sum}`);
