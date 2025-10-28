var bookWithSummary = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    summary: "A novel about racial injustice in the Deep South seen through the eyes of a child."
};
var bookWithoutSummary = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
};
console.log("***********************************");
// Task 2
function printBookDetails(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Published Year: ".concat(book.publishedYear));
    if (book.summary) {
        console.log("Summary: ".concat(book.summary));
    }
}
printBookDetails(bookWithSummary);
printBookDetails(bookWithoutSummary);
console.log("*****************************");
// Task 3
var productId;
productId = "ABC123";
displayProductId(productId);
productId = 456789;
displayProductId(productId);
function displayProductId(id) {
    //   console.log(`Product ID: ${id}`);
    console.log("Product ID: " + id);
}
