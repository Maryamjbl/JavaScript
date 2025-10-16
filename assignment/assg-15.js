let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});
fruits.forEach(fruit => {
    console.log(`I Like ${fruit}`);
    
})
let number = [10, 20, 30, 40, 50];
number.forEach(n => {
    console.log(n* n);
});
console.log("*********************");

let students = [
  { name: "Aisha", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Meena", marks: 78 },
];

let Totalmarks = 0;
students.forEach(student => {
  console.log(`${student.name} scored ${student.marks} marks`);
  
});
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;

console.log(`Average marks: ${averageMarks}`);
