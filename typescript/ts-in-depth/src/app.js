"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var classes_1 = require("./classes");
function GetAllBooks() {
    var books = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: enum_1.Category.Fiction },
        { id: 2, title: "A farewell to arms", author: "Ernest Hemingway", available: false, category: enum_1.Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: enum_1.Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: enum_1.Category.Fiction }
    ];
    return books;
}
;
function LogFirstAvailableBook(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enum_1.Category.Fiction; }
    console.log("Getting books in category " + enum_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
        ;
    }
    ;
    return filteredTitles;
}
;
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
    ;
}
;
function getBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
;
function createCustomerID(name, id) {
    return name + id;
}
;
function createCustomer(name, age, city) {
    console.log("Creating customer: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    ;
    if (city) {
        console.log("City: " + city);
    }
    ;
}
;
function checkOutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = getBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
        ;
    }
    return booksCheckedOut;
}
;
function GetBookTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == "string") {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.title === bookProperty) {
                foundTitles.push(book.title);
            }
            ;
        }
        ;
    }
    else if (typeof bookProperty == "boolean") {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
            ;
        }
        ;
    }
    ;
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + " by " + book.author);
}
/* ***************************************** */
var IdGenerator;
IdGenerator = function (name, id) { return id + name; };
var myID = IdGenerator("Daniel", 10);
console.log(myID);
var poetryBooks = GetBookTitlesByCategory(enum_1.Category.Poetry);
logBookTitles(poetryBooks);
var myCheckedOutBooks = checkOutBooks("Feanor", 1, 3, 4);
console.log(myCheckedOutBooks);
var myBook = {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true,
    category: enum_1.Category.Fiction,
    pages: 250,
    markDamaged: function (reason) { return console.log("Damaged: " + reason); }
};
PrintBook(myBook);
if (myBook.markDamaged) {
    myBook.markDamaged("Missing cover");
}
;
var logDamage;
logDamage = function (damage) { return console.log("Damage reported: " + damage); };
logDamage("Coffe stains");
var favoriteLibrarian = new classes_1.UniversityLibrarian();
favoriteLibrarian.name = "Lynda";
favoriteLibrarian.assistCustomer("Belinda");
