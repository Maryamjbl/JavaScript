class Course {
  title;
  duration;
  fee;
  description;

  constructor(t, dura, f, desc) {
    this.title = t;
    this.duration = dura;
    this.fee = f;
    this.description = desc;
  }
  printDetails() {
    console.log("******* Course Details ********");
    console.log(`Title - ${this.title}`);
    console.log(`Duration - ${this.duration}`);
    console.log(`Fee - ${this.fee}`);
    console.log(`Description - ${this.description}`);
    console.log("*******************************");
  }
}
const course1 = new Course("MERN Stack", "120 Days", 18000, "Mongo DB, Express JS, React JS, Node JS");
const course2 = new Course("Python Full Stack", "100 Days", 15000, "Python, Django, MySQL, React");
const course3 = new Course("AWS Cloud Practitioner", "45 Days", 12000, "AWS Basics, EC2, S3, IAM, Cloud Concepts");

course1.printDetails();
course2.printDetails();
course3.printDetails();
