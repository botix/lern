/*
  ///////////////////////////////////////////
  Section: Taking Advantage of Built-in types
  ///////////////////////////////////////////
*/

//Built-in Typescript types
const bool = Boolean;
const numb = Number;
const str = String;
const arr = Array;
const nll = null;
const udf = undefined;

//Declarations with let and const
//Common sense applies, use let for variables that will be reasigned later

////////////////////////////////////////
//Type annotations and type interference
let x: string = `Semicolon after a variable assignes a type to it, 
this is called type annotation`;

//x = 42;

let y: string = `Trying to assign a value of diferent type to an annotated
variable will result in compile time error`;

const z = `It is not necessary to use type annotation at variable declaration,
the compiler will infer it automagicaly`;

let someValue : number | string = `Union Types are a combination of several
types, the variable can now have several legal types`;
someValue = 44;


const functions: string | undefined = `Below is an example of function variable
declaration, and the function return type declaration`;
const playerName: string = "Samson";
function logPlayer(name: string): number{
  console.log(`New game starting for player: ${name}`);
  return 43;
};
const sayName: number = logPlayer(playerName);

/////////////////////////////
//Managing null and undefined
const strictNullChecks: string = `Using the --strictNullChecks compiler flag
requires for null and undefined to be explicitly specified as the type 
of a variable, otherwise, attemtps to assign them will result in compile 
time error`

let nullableString: null | string;
nullableString = null; 

/////////////////
//Type assertions
let value: any = 5;
let fixedString: string = (<number>value).toFixed(4);
let fixedString2: string = (value as number).toFixed(4);
value = `By using the angle brackets in front of a variable we can assert the
type of a variable previously declared as any. This is also possible by using 
"as" keyword.  This does not change the type of the variable`;

//////////////////////////////////
//Control flow-based type analysis
function flow(){
  let messageElement: HTMLElement | string;
  messageElement = `Here the possible values for the variable are HTMLElement or
  string. Once inside the if block, the compiler will automagicaly recognize that
  now there is only one possible type for the variable, based on the if statement 
  condition, so the type is no longer a union but one or the other`;
  if(typeof messageElement === "string") {
    return messageElement;
  } else {
    return messageElement;
  }
};