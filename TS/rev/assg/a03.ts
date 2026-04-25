//  Problem : 1
console.log("PROBLEM : 1");

type newStudent = {
  name: string;
  age: number;
  email: string;
  subjects: string[];
};

let student1: newStudent = {
  name: "Aysha Maryam",
  age: 16,
  email: "maryamjbl@gmail.com",
  subjects: ["Econonmics", "Accountancy", "Business.Studies"],
};

console.log(student1);

//  Problem : 2
console.log("PROBLEM : 2");

let student2: newStudent = {
  name: "Bob",
  age: 17,
  email: "bob@example.com",
  subjects: ["History", "Geography"],
};

let student3: newStudent = {
  name: "Aysha",
  age: 21,
  email: "aysha@gmail.com",
  subjects: ["History", "Geography"],
};

let student4: newStudent = {
  name: "Mohammed",
  age: 20,
  email: "mohammed@gmail.com",
  subjects: ["Physics", "Chemistry", "Math"],
};

let students: newStudent[] = [student1, student2, student3, student4];

console.log(students);

// Problem : 3
console.log("PROBLEM : 3");

function filterAge(students: newStudent[]): newStudent[] {
    return students["filter"](student => student["age"] > 18);
}
let olderStudents = filterAge(students);
console.log("Students older than 18 :", olderStudents);

// Problem : 4
console.log("PROBLEM : 4");

function countSubjects(student: newStudent): number {
    return student["subjects"]["length"];
}
let subjectCount = countSubjects(student1);
console.log(`Number of subjects: ${subjectCount}`);


