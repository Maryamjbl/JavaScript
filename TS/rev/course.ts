type newCourse = {
    title : string,
    fee : number,
    duration : string,
    description : string
    modules : string[]
}

let course1 : newCourse = {
    title : "MERN Stack Development",
    fee : 18000,
    duration : "6 months",
    description : "Learn to build full-stack applications using MongoDB, Express, React, and Node.js",
    modules : ["Introduction to MERN", "React Fundamentals", "Node.js Backend", "MongoDB Integration"]
};

let course2 : newCourse = {
    title : "Power BI",
    fee : 12000,
    duration : "4 months",
    description : "Learn to create interactive data visualizations and reports with Power BI",
    modules : ["Introduction to Power BI", "Data Modeling", "Dashboard Creation", "Advanced Analytics"]
};

console.log(course1);
console.log(course2);
