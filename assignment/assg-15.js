let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});
fruits.forEach(fruit => {
    console.log(`I Like ${fruit}`);
    
})
let number = [10, 20, 30, 40, 50];
number.forEach(n => {
    console.log(`Square of ${n} = ${n * n}`);
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
console.log();

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];
let Combinedarray = [...fullStack, "React"];

console.log("Frontend-", frontend);
console.log("Backend-", backend);
console.log("Full Stack-", fullStack);
console.log(" Updated Array With React-", Combinedarray);
console.log();

let student = { name: "Aysha", age: 21 };
let studentDetails = {
  ...student,
  course: "Full Stack Development",
  city: "Manglore"
};

console.log("Student:", student);
console.log("Student Details:", studentDetails);
console.log();

let colors = ["Red", "Green", "Blue"];
let newColors = [...colors];
newColors.push("Yellow");

console.log("Original Colors:", colors);
console.log("Copied Colors:", newColors);


