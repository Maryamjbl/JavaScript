// TASK ONE
class BookTS {
  title: string;
  author: string;
  year: number;
  summary: string;

  constructor(title: string, author: string, year: number, summary: string) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.summary = summary;
  }
  printDetails() {
    console.log(`Book: ${this.title} by ${this.author} (${this.year})`);
    console.log(`Summary: ${this.summary}`);
  }
}

const book1TS = new Book(
  "The Alchemist",
  "Paulo Coelho",
  1988,
  "A story about following dreams."
);
const book2TS = new Book(
  "Charlotte's Web",
  "E.B. White",
  1952,
  "A tale of friendship and loyalty."
);

book1.printDetails();
book2.printDetails();

// TASK TWO
class StudentTS {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo(): void {
    console.log(
      `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    );
  }
}

const student1TS =  new Student("Aysha", 16, "A");
const student2TS = new Student("Rahul", 15, "B+");

student1.displayInfo();
student2.displayInfo();
