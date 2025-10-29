// Task One 
type Book = {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string; 
};
const bookWithSummaryTS: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960,
  summary: "A novel about racial injustice in the Deep South seen through the eyes of a child."
};
const bookWithoutSummaryTS: Book = {
  title: "1984",
  author: "George Orwell",
  publishedYear: 1949
};
console.log("***********************************");

// Task 2
function printBookDetailsTS(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);
  
  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}
printBookDetailsTS(bookWithSummaryTS);
printBookDetailsTS(bookWithoutSummaryTS);
console.log("*****************************");

// Task 3
let productIdTS: string | number;

productIdTS = "ABC123";
displayProductIdTS(productIdTS);

productIdTS = 456789;
displayProductIdTS(productIdTS);
function displayProductIdTS(id: string | number): void {
  console.log("Product ID: " + id);

}
