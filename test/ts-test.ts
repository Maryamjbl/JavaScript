// // PART-A
// 1.
console.log("Part-A");

function addTotal(marks: number[]): number {
  let total: number = 0;
  for (let mark of marks) {
    total = total + mark;
  }
  return total;
}

let mark: number[] = [10, 20, 30];
let total = addTotal(mark);
console.log(`Sum of all the numbers is:${total}`);

// PART-2
// 2.
console.log("PART-B");

type Student = {
  name: string;
  marks: number;
  passed: boolean;
};

function StudentsPassed(students: Student[]): Student[] {
  return students.filter((student: Student) => student.marks >= 40);
}

const students: Student[] = [
  { name: "Ali", marks: 35, passed: false },
  { name: "Sara", marks: 78, passed: true },
  { name: "John", marks: 90, passed: true },
];
const passedStudents: Student[] = StudentsPassed(students);
console.log(passedStudents);