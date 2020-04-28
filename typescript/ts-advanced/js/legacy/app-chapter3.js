"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../src/enums");
const classes_1 = require("../src/classes");
const util = __importStar(require("../lib/utilityFunctions"));
function PrintBookInfo({ title: booktitle, author: bookauthor }) {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}
let [book1, book2] = util.GetAllBooks();
function LogFavoriteBooks([book1, book2, ...others]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
// LogFavoriteBooks(util.GetAllBooks());
// let { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);
// PrintBookInfo(book1);
let schoolBooks = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: enums_1.Category.Fiction },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: enums_1.Category.Fiction },
    { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: enums_1.Category.Fiction }
];
let booksRead = util.GetAllBooks();
booksRead.push(...schoolBooks);
// console.log(booksRead);
let poets = ['Shelley', 'Collins', 'Hughes'];
let authors = ['Tolstoy', 'Fitzgerald', ...poets];
let catalogLocation = ['A 123.456', book1];
catalogLocation[2] = 'some string';
let allBooks = util.GetAllBooks();
let allMagazines = util.GetAllMagazines();
let readingMaterial = allBooks[0];
function PrintTitle(item) {
    console.log(item.title);
}
// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);
let serialNovel = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: enums_1.Category.Fiction,
    publisher: 'Serial Press'
};
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
let newLibrarian = new classes_1.UniversityLibrarian();
function GetMagazineByFrequency(preferredFrequency) {
    // do something here
}
