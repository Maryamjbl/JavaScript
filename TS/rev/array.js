"use strict";
let fruits = ["apple", "banana", "orange"];
let marks = [85, 90, 78];
marks.push(95);
let students = ["Maryam", "Mustafa", "Yusuf", "Qasim"];
students.push("879");
function calcTotal(marks) {
    let total = 0;
    for (let mark of marks) {
        total = total + mark;
    }
    return total;
}
let marks2 = [45, 55, 14, 54,];
let sum = calcTotal(marks2);
console.log(`Sum of marks = ${sum}`);
