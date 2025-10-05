let name = "   Python   ";
console.log(name);
console.log(name.length);

let trimmedName = name.trim();
console.log(trimmedName);
console.log(trimmedName.length);

console.log(trimmedName.toUpperCase());
console.log(trimmedName.toLowerCase());

console.log(trimmedName.indexOf("y"));

let courseTitle = "Frontend Development Using Node";
let newCourseTitle = courseTitle.replace("Node", "React");
console.log(newCourseTitle);

let position = courseTitle.indexOf("Node");
console.log(position);

let coursePart = courseTitle.substring(0, 20);
console.log(coursePart); 

console.log(courseTitle.charAt(0));

let firstName = "Aysha";
let lastName = "Maryam";
let fullName = firstName.concat(" ", lastName); 
console.log(fullName); 

let topics = "Java,Excel,Graphics";
let topicsArray = topics.split(","); 
console.log(topicsArray); 

let course2 = "Frontend Dev using Node";
console.log(course2.includes("Database"));
console.log(course2.includes("Node"));