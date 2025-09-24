let courses = ["Python", "Web-Design", "Java"];

courses[1] = "Golang";
courses.push("MERN Stack");
courses.push("C++");

console.log(courses);

let lastcourse = courses.pop();
console.log(lastcourse);

let coursecount = courses.length;
console.log(coursecount);

let j;
console.log("List Of Courses");
for (let i = 0; i < courses.length; i++) {
  j = i + 1;
  console.log("Course #" + j + ":" + courses[i]);
}
