let students = [
  { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];
for (let student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}
let toppers = students.filter(student => student.marks > 80);
console.log("Toppers:", toppers);

let names = students.map(student => student.name);
console.log(names);

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0 );
console.log("Total Marks:", totalMarks);

let avgMarks = totalMarks / students.length;
console.log("Average Marks =", avgMarks);
