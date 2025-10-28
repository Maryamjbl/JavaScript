let location: [number, number];
location = [13.9485, 74.5555];
console.log("Latitude:", location[0], ", Longitude:", location[1]);

// task 2
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
}
const bookWithSummary: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publishedYear: 1988,
  summary:
    "A philosophical novel about a shepherd's journey to discover his personal legend.",
};
const bookWithoutSummary: Book = {
  title: "Animal Farm",
  author: "George Orwell",
  publishedYear: 1945,
};

// task 3
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
}
function printBookDetails(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);

  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}
// task 4
type Customer = {
  name: string;
  email: string;
};

type BillingDetails = {
  cardNumber: string;
  expiryDate: string;
};

type BillingCustomer = Customer & BillingDetails;

const customer: BillingCustomer = {
  name: "Aysha",
  email: "aysha@example.com",
  cardNumber: "1111-2222-3333-4444",
  expiryDate: "12/26",
};

console.log(customer);
