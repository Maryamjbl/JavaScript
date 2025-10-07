let courses = [
  { title: "Full Stack Development", duration: "6 Months", price: 18000 },
  { title: "Data Science", duration: "5 Months", price: 20000 },
  { title: "AWS Cloud", duration: "3 Months", price: 15000 },
  { title: "UI/UX Design", duration: "4 Months", price: 16000 },
];

let coursesUpdated = courses.map(course => ({
  coursename: course.title,
  duration: course.duration,
  price: course.price - 2000
}));
 console.log("Updated Course Price : ", coursesUpdated);
 