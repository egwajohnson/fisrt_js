const library = [];
console.log(library);

// adding books to the library

library.push("The Great Gatsby","F. Scott Fitzgerald", 1925, true);
//console.log(library);

library.push("To Kill a Mockingbird", "Harper Lee", 1960, true);
//console.log(library);

library.push(1984,"George Orwell", 1949, false);
console.log(library);

library.push("Pride and Prejudice","Jane Austen", 1813, true);
console.log(library);

// Update the Availability of a Book

library.splice(11, 1 , true);
 console.log(library);

 // remove pride and prejudice

library.splice(12,1);
console.log(library);

// check if The Great Gatsby is in the list

console.log(library.includes("The Great Gatsby"));

// Borrow the First Book

library.shift();
console.log(library);

console.log(library.includes("The Great Gatsby"));

// Add a New Book to the Start of the Library

library.unshift("The Catcher in the Rye","J.D. Salinger", 1951, true);
console.log(library);

// Get a List of All Book Titles
console.log(library.join(" , "));

// Create a New Library Section

let newArrivals = library.slice(-2);
console.log(newArrivals);
console.log(library);

// Expected Output


