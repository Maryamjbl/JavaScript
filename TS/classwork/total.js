function sum(numbers) {
    var total = numbers.reduce(function (tot, n) { return tot + n; }, 0);
    return total;
}
var numbers = [-10, 40, -20];
var total = sum(numbers);
console.log(total);
