//////////////////////////////////
//Creating and Consuming Modules//
//////////////////////////////////

//export declarations
export interface Person{}
export function hireDeveloper(): void{};
export default class Employee{};

//export statements
interface Worker{};
function writeExportStatements(): void{};
class Manager{}

export{ Worker, writeExportStatements, Manager as Bossman };


//imports

// import { Worker , writeExportStatements } from "./destination";
// let John: Worker;

// import Developer from  "./destination" //default export

// import { Bossman as BigKahuna } from "./destination";

// import * as ALL from "./destination";
// ALL.writeExportStatements();


//Relative vs Non-relative Imports

//Relative - start with / ./ ../
// import { somethingIMade } from "/myFolder"

//Non-relative - used when reffering to non user modules
const fs = import("fs");


