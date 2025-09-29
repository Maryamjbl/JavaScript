let nums = [1, 2, 3, 4];
nums.push(4); // [1, 2, 3, 4]
console.log("afer adding" + nums);

nums.pop(); // [1, 2, 3]
console.log("remove " + nums);

console.log(nums.includes("9"));
console.log(nums.indexOf("4"));

let num = [10, 20, 30, 40, 50];
let part = num.slice(1, 3); // [20, 30]
console.log(part);

let games = ["Chess", "Ludo", "Cricket", "Rugby"];
games.unshift("Volley");
console.log(games);
games.shift();
console.log("removed : ", games);
