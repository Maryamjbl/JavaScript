"use strict";
function greetUser(name, age) {
    if (age === undefined) {
        console.log(`Hello ${name}!`);
    }
    else {
        console.log(`Hello ${name}, your age is ${age}`);
    }
}
// difference between param and argument
greetUser("Maryam", 16);
