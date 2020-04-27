import { Category } from "./enum";
import { Book, DamageLogger, Author, Librarian } from "./interfaces";
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from "./classes";

function GetAllBooks(): Book[]{
  let books = [
    { id: 1, title: "Ulysses", author:"James Joyce", available: true, category: Category.Fiction },
    { id: 2, title: "A farewell to arms", author:"Ernest Hemingway", available: false, category: Category.Fiction },
    { id: 3, title: "I Know Why the Caged Bird Sings", author:"Maya Angelou", available: true, category: Category.Poetry },
    { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction }
  ];

  return books
};

function LogFirstAvailableBook(books= GetAllBooks()): void{
  let numberOfBooks: number = books.length
  let firstAvailable: string = "";

  for(let currentBook of books){
    if(currentBook.available){
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available: ${firstAvailable}`);
}


function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>{
  console.log(`Getting books in category ${Category[categoryFilter]}`);
  
  const allBooks = GetAllBooks();
  const filteredTitles: string[]  = [];

  for(let currentBook of allBooks){
    if(currentBook.category === categoryFilter){
      filteredTitles.push(currentBook.title);
    };
  };

  return filteredTitles;
};

function logBookTitles(titles: string[]): void{
  for(let title of titles){
    console.log(title);
  };
};

function getBookByID(id: number): Book{
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
};

function createCustomerID(name: string, id: number): string{
  return name + id;
};

function createCustomer(name: string, age?: number, city?: string): void{
  console.log(`Creating customer: ${name}`);

  if(age){
    console.log(`Age: ${age}`);
  };

  if(city){
    console.log(`City: ${city}`);
  };
};

function checkOutBooks(customer: string, ...bookIDs: number[]): string[]{
  console.log(`Checking out books for ${customer}`);

  let booksCheckedOut: string[] = [];

  for(let id of bookIDs){
    let book = getBookByID(id)
    if(book.available){
      booksCheckedOut.push(book.title);
    };
  }
  return booksCheckedOut;
};

//Overloading

function GetBookTitles(author: string): string[];
function GetBookTitles(available: boolean): string[];

function GetBookTitles(bookProperty: any): string[]{
  const allBooks = GetAllBooks();
  const foundTitles: string[] = [];

  if(typeof bookProperty == "string"){
    for(let book of allBooks){
      if(book.title === bookProperty){
        foundTitles.push(book.title);
      };
    };
  }
  else if(typeof bookProperty == "boolean"){
    for(let book of allBooks){
      if(book.available === bookProperty){
        foundTitles.push(book.title);
      };
    };
  };

  return foundTitles;
}

function PrintBook(book: Book): void{
  console.log(`${book.title} by ${book.author}`);
}



/* ***************************************** */
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => { return id + name}
 

let myID: string = IdGenerator("Daniel", 10);
console.log(myID)

const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);

let myCheckedOutBooks = checkOutBooks("Feanor", 1,3,4);
console.log(myCheckedOutBooks)

let myBook: Book = {
  id: 5,
  title:"Pride and Prejudice",
  author: "Jane Austen",
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
}

PrintBook(myBook);
if(myBook.markDamaged){ 
  myBook.markDamaged("Missing cover");
};

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
logDamage("Coffe stains");

let favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Lynda";
favoriteLibrarian.assistCustomer("Belinda");

// **  not usable anymore since the ReferenceItem class is now an abstract one **
// let ref = new ReferenceItem("Strawberies, cheeries and an angel kissing spring", 2008);
// ref.printItem();
// ref.publisher = "Random Data Publisher";
// console.log(ref.publisher);

let refBook: ReferenceItem = new Encyclopedia("Animals of the World", 2004, 4);
refBook.printItem();
refBook.printCitation();

//class expression
let Newspaper = class extends ReferenceItem {
  printCitation(): void{
    console.log(`Newspaper: ${this.title}`);
  };
};

let myPaper = new Newspaper("The Gazette", 2020);
myPaper.printCitation();

