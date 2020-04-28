import { Category } from './src/enums';
import { Book, Logger, Author, Librarian, Magazine } from './src/interfaces';
import { UniversityLibrarian, PublicLibrarian, ReferenceItem, Employee, Researcher } from './src/classes';
import * as util from './lib/utilityFunctions';

//class decorators
let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();

//trying to redefine the methods that received decorators in classes.ts
try{
    lib1.assistFaculty = () => console.log("assistFaculty has been modified");
    lib2.teachComunity = () => console.log("teachCommunity has been modified");
} catch (err) {
    console.log(err)
};

lib1.assistFaculty();
lib2.teachComunity();

//callbacks

interface LibMgrCallback {
    (err: Error, titles: string[]): void
};

function getBookByCategory(cat: Category, callback: LibMgrCallback): void{
    setTimeout(() => {
        try{
            let foundBooks: string[] = util.GetBookTitlesByCategory(cat)
            
            if(foundBooks.length > 0){
                callback(null, foundBooks);
            } else {
                
                throw new Error("No books found");
            }
        } catch(err) {
            callback(err, null);
        }
    }, 2000);
};

function logCategorySearch(err: Error, titles: string[]): void {
    if(err){
        console.error(`Error message: ${err.message}`);
    }
    else{
        console.log(`Found the following titles ${titles}`);
    };
};


console.log("Beggining")
getBookByCategory(Category.Fiction, logCategorySearch)
console.log("End")

//promises

function getBookzByCategoryPromis(cat: Category): Promise<string[]>{
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        
        let foundBooks = util.GetBookTitlesByCategory(cat);

        setTimeout(() => {
            if(foundBooks.length > 0){
                resolve(foundBooks);
            } else {
                reject(`No books found for category ${cat}`);
            };
        }, 2000);
    });

    return p;
};

getBookzByCategoryPromis(Category.Poetry)
    .then(result => console.log(result))
    .catch(err => console.error(err));


//async - await

async function logSearchResults(bookCategory: Category){
    let foundBooks;
    try {
        foundBooks = await getBookzByCategoryPromis(bookCategory);
    } catch(err) {
        console.error(err)
    }
    console.log(foundBooks);
};

logSearchResults(Category.Fiction);