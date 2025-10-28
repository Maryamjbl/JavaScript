var location;
location = [13.9485, 74.5555];
console.log("Latitude:", location[0], ", Longitude:", location[1]);
var bookWithSummary = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: 1988,
    summary: "A philosophical novel about a shepherd's journey to discover his personal legend.",
};
var bookWithoutSummary = {
    title: "Animal Farm",
    author: "George Orwell",
    publishedYear: 1945,
};
function printBookDetails(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Published Year: ".concat(book.publishedYear));
    if (book.summary) {
        console.log("Summary: ".concat(book.summary));
    }
}
var customer = {
    name: "Aysha",
    email: "aysha@example.com",
    cardNumber: "1111-2222-3333-4444",
    expiryDate: "12/26",
};
console.log(customer);
