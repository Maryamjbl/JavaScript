var myName = "Ali";
myName = 21;
var myAge = 22;
var isStudent = true;
console.log(myName, myAge, isStudent);
function greetUser(name) {
    return "Hello ,".concat(name, " ");
}
var greet = greetUser("Aysha");
console.log(greet);
var colors = ["Red", "Blue", "Green"];
for (var j = 0; j < colors.length; j++) {
    console.log(colors[j]);
}
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));
function isEven(n) {
    if (n < 0) {
        console.log(" Enter a positive number.");
        return false;
    }
    return n % 2 == 0;
}
console.log(isEven(7));
console.log(isEven(8));
function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
