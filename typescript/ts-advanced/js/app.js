"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./src/classes");
const util = __importStar(require("./lib/utilityFunctions"));
class LibraryBook {
    Checkout() {
        //do checkout stuff
        console.log("Checking out a book");
        return this;
    }
    ;
    Checkin() {
        if (this instanceof ChildrenBook) {
            console.log("Checking in a children book");
        }
        ;
        if (this instanceof ElectronicBook) {
            console.log("Checking in an electronic book");
        }
        ;
        return this;
    }
    ;
}
;
class ChildrenBook extends LibraryBook {
    Clean() {
        //clean the crayon marks
        console.log("Cleaning the book");
        return this;
    }
    ;
}
;
class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice() {
        console.log("Removing book from device");
        return this;
    }
    ;
}
;
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
function logVisitor(param) {
    if (typeof param === "string") {
        console.log(`${param} new visitors arrived.`);
    }
    else {
        console.log(`${param} visited.`);
    }
    ;
}
;
logVisitor(5);
logVisitor("John Doe");
//instanceof
let lib = new classes_1.PublicLibrarian();
if (lib instanceof classes_1.UniversityLibrarian) {
    lib.assistFaculty();
}
;
if (lib instanceof classes_1.PublicLibrarian) {
    lib.teachComunity();
}
;
//custom type guard
function isBook(text) {
    return text.author !== undefined;
}
;
console.log(isBook(util.GetAllBooks()[0]));
let readingMaterial = util.GetAllMagazines()[0];
if (isBook(readingMaterial)) {
    console.log(`The books author is ${readingMaterial.author}`);
}
else {
    console.log(`The magazine's publisher is ${readingMaterial.publisher}`);
}
;
