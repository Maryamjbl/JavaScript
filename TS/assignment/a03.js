// TASK ONE
var Book = /** @class */ (function () {
    function Book(title, author, year, summary) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.summary = summary;
    }
    Book.prototype.printDetails = function () {
        console.log("Book: ".concat(this.title, " by ").concat(this.author, " (").concat(this.year, ")"));
        console.log("Summary: ".concat(this.summary));
    };
    return Book;
}());
var book1 = new Book("The Alchemist", "Paulo Coelho", 1988, "A story about following dreams.");
var book2 = new Book("Charlotte's Web", "E.B. White", 1952, "A tale of friendship and loyalty.");
book1.printDetails();
book2.printDetails();
// TASK TWO
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.displayInfo = function () {
        console.log("Student: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
var student1 = new Student("Aysha", 16, "A");
var student2 = new Student("Rahul", 15, "B+");
student1.displayInfo();
student2.displayInfo();
