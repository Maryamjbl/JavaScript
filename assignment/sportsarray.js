let sports = ["Football", "Badminton", "Tennis", "Cricket"];
console.log("First sport:", sports[0]);
let lastSport = sports.slice(sports.length - 1)[0];
console.log("Last sport:", lastSport);

sports.push("VolleyBall");
console.log("After adding a sport:", sports);

sports.shift();
console.log("After removing first sport:", sports);
