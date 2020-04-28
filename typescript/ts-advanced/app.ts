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