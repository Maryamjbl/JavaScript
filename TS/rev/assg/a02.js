"use strict";
function sumArray(marks) {
    let total = 0;
    for (let mark of marks) {
        total = total + mark;
    }
    return total;
}
let marks3 = [1, 2, 3, 4, 5];
let sol = sumArray(marks3);
console.log(`Sum of marks = ${sol}`);
