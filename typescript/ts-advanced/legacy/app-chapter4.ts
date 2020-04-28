import { Category } from '../src/enums';
import { Book, Logger, Author, Librarian, Magazine } from '../src/interfaces';
import { UniversityLibrarian, PublicLibrarian, ReferenceItem, Employee, Researcher } from '../src/classes';
import * as util from '../lib/utilityFunctions';

class LibraryBook {
    Checkout(): this {
        //do checkout stuff
        console.log("Checking out a book");
        
        return this;
    };
    
    Checkin(): this {
        if(this instanceof ChildrenBook){
            console.log("Checking in a children book");
        };

        if( this instanceof ElectronicBook ) {
            console.log("Checking in an electronic book");
        };
        
        return this;
    };
};

class ChildrenBook extends LibraryBook {
    Clean(): this {
        //clean the crayon marks
        console.log("Cleaning the book");

        return this;
    };
};

class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice(): this {
        console.log("Removing book from device");
        return this;
    };
};

let kidBook = new ChildrenBook();

kidBook
    .Checkin()
    .Clean()
    .Checkout();

let eBook = new ElectronicBook();

eBook
    .Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();

// Type Guards

// typeof
function logVisitor(param: number | string) {
    if(typeof param === "string"){
        console.log(`${param} new visitors arrived.`);
    } else {
        console.log(`${param} visited.`);
    };
};

logVisitor(5);
logVisitor("John Doe");


//instanceof
let lib: Librarian = new PublicLibrarian();

if(lib instanceof UniversityLibrarian){
    lib.assistFaculty();
};

if(lib instanceof PublicLibrarian){
    lib.teachComunity();
};


//custom type guard

function isBook(text: Book | Magazine): text is Book {
    return (<Book>text).author !== undefined;
};

console.log(isBook(util.GetAllBooks()[0]));

let readingMaterial: Book | Magazine = util.GetAllMagazines()[0];

if(isBook(readingMaterial)){
    console.log(`The books author is ${readingMaterial.author}`);
} else {
    console.log(`The magazine's publisher is ${readingMaterial.publisher}`);
};
