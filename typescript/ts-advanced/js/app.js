"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./src/classes");
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
