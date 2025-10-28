// Task One 
type Book = {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string; 
};
const bookWithSummary: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960,
  summary: "A novel about racial injustice in the Deep South seen through the eyes of a child."
};
const bookWithoutSummary: Book = {
  title: "1984",
  author: "George Orwell",
  publishedYear: 1949
};
console.log("***********************************");

// Task 2
function printBookDetails(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);
  
  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}
printBookDetails(bookWithSummary);
printBookDetails(bookWithoutSummary);
console.log("*****************************");

// Task 3
let productId: string | number;

productId = "ABC123";
displayProductId(productId);

productId = 456789;
displayProductId(productId);
function displayProductId(id: string | number): void {
  console.log("Product ID: " + id);

}
