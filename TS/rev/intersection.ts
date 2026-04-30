type Person = {
  name: string;
  age: number;
  city: string;
};

type Employee = {
  name: string;
  salary?: number;
};

type EmployeePerson = Person & Employee;
const emp1: EmployeePerson = {
  name: "John",
  age: 30,
  city: "New York",
  salary: 50000,
};

const emp2: EmployeePerson = {
  name: "Sara",
  age: 25,
  city: "Los Angeles",
};

// Practice

type Coordinates = [latitude: number, longitude: number];
const location1: Coordinates = [40.7128, -74.006];
console.log(`Latiude of the place Newyork is: ${location1[0]}`);

interface Book {
  title: string;
  author: string;
  year: number;
  numberOfPages: number;
  publisher?: string;
}

const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  numberOfPages: 180,
};
const book2: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  numberOfPages: 281,
  publisher: "J.B. Lippincott & Co.",
};
console.log(`Book 2 Title: ${book2.title}`);
console.log(`Book 1 Publisher: ${book1.publisher}`);

type Customer = {
  name: string;
  email: string;
  phoneNumber: string;
};

type BillingInfo = {
  cardNumber: string;
  expirationDate?: string;
};

type CustomerBillingInfo = Customer & BillingInfo;

const customer1: CustomerBillingInfo = {
  name: "Alice",
  email: "alice123@gmail.com",
  phoneNumber: "123-456-7890",
  cardNumber: "1234-5678-9012-3456",
  expirationDate: "12/25",
};
const customer2: CustomerBillingInfo = {
  name: "Bob",
  email: "bob@gmail.com",
  cardNumber: "9876-5432-1098-7654",
  phoneNumber: "987-654-3210",
};
