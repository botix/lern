"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./src/enums");
const classes_1 = require("./src/classes");
const util = __importStar(require("./lib/utilityFunctions"));
//class decorators
let lib1 = new classes_1.UniversityLibrarian();
let lib2 = new classes_1.PublicLibrarian();
//trying to redefine the methods that received decorators in classes.ts
try {
    lib1.assistFaculty = () => console.log("assistFaculty has been modified");
    lib2.teachComunity = () => console.log("teachCommunity has been modified");
}
catch (err) {
    console.log(err);
}
;
lib1.assistFaculty();
lib2.teachComunity();
;
function getBookByCategory(cat, callback) {
    setTimeout(() => {
        try {
            let foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                callback(null, foundBooks);
            }
            else {
                throw new Error("No books found");
            }
        }
        catch (err) {
            callback(err, null);
        }
    }, 2000);
}
;
function logCategorySearch(err, titles) {
    if (err) {
        console.error(`Error message: ${err.message}`);
    }
    else {
        console.log(`Found the following titles ${titles}`);
    }
    ;
}
;
console.log("Beggining");
getBookByCategory(enums_1.Category.Fiction, logCategorySearch);
console.log("End");
//promises
function getBookzByCategoryPromis(cat) {
    const p = new Promise((resolve, reject) => {
        let foundBooks = util.GetBookTitlesByCategory(cat);
        setTimeout(() => {
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject(`No books found for category ${cat}`);
            }
            ;
        }, 2000);
    });
    return p;
}
;
getBookzByCategoryPromis(enums_1.Category.Poetry)
    .then(result => console.log(result))
    .catch(err => console.error(err));
//async - await
function logSearchResults(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundBooks;
        try {
            foundBooks = yield getBookzByCategoryPromis(bookCategory);
        }
        catch (err) {
            console.error(err);
        }
        console.log(foundBooks);
    });
}
;
logSearchResults(enums_1.Category.Fiction);
