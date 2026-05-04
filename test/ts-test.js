"use strict";
// // PART-A
// 1.
function addTotal(marks) {
    let total = 0;
    for (let mark of marks) {
        total = total + mark;
    }
    return total;
}
let mark = [10, 20, 30];
let total = addTotal(mark);
console.log(`Sum of all the numbers is;${total}`);
