const library = [];
let book1 = { Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Yearofpublish: 1925, Available: true };
let book2 = { Title: "To Kill a Mockingbird", Author: "Harper Lee", Yearofpublish: 1960, Available: true };
let book3 = { Title: "1984", Author: "George Orwell", Yearofpublish: 1949, Available: false };
let book4 = { Title: "Pride and Prejudice", Author: "Jane Austen", Yearofpublish: 1813, Available: true };

// adding books to the library


library.push(book1, book2, book3, book4);
console.log(library);

// Update the Availability of a Book

book3.Available = true;

console.log(library);
 

// remove pride and prejudice

library.splice(3, 1);
console.log(library);

// check if The Great Gatsby is in the list

console.log(library.includes("The Great Gatsby"));

// Borrow the First Book

library.shift();
console.log(library);

console.log(library.includes("The Great Gatsby"));

// Add a New Book to the Start of the Library

library.unshift("The Catcher in the Rye", "J.D. Salinger", 1951, true);
console.log(library);

// Get a List of All Book Titles
console.log(library.join(" "));

// Create a New Library Section

let newArrivals = library.slice(-2);
console.log(newArrivals);
console.log(library);

// Expected Output


