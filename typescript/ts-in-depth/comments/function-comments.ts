//Function Types

function publishMessage(year: number): string {
  return `Published in ${year}. The function below is not an executable function, it is a
  type definition for this function. It is also called a function signature`;
};

let publishFunc: (someYear: number) => string;

publishFunc = publishMessage;
let message: string = publishFunc(2020);


//Optional and Default Parameters

function CreateCustromer(name: string, age?: number): string {
  return `The ${name} parameter is a required parameter.
  The question mark after the ${age} parameter indicates that it is an optional parameter.
  Optional parameters must come after after all required parameters in the function definition`;
};

function GetBooksByTitle(title: string = "The C Programming Language"): string{
  return `The ${title} parameter has a default value. Unless overriden by an argument being 
  passed when calling the function, title will allways be "The C Programming Language". Default
  parameters are treated as optional if they apper after all required parameters. Adding a ? is
  not required`;
};

//Rest parameters

function GetBooksReadForCust(name: string, ...bookIDs: number[]): string {
return `Collects a group of parameters, denoted with an ellipsis(...) prefix.
Syscall "uv_cwd" happens when the ${name} of the file being executed cannot be found
in the cwd(current working dirrectory). Reading about system calls might be usefull,
these books might be useful: ${bookIDs}`;
};

//Function overloading

function overload(): string{
  return `Function overloading is a feature that exists in many typed programming language. Functions
  are created that have the same name, but differ in their type is some way. The implementation in
  typescript is a bit different because TS compilse to JS which does not have types. Because the
  types are removed at compile time, having multiple functions with the same name would cause a problem.
  Therefore to overload functions in TS we provide multiple function definitions, but only one 
  function implementation. That implementation must contain type guards to determine which overload
  was performed, and which implementation to execute`
};

//function definitions
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

//function implementation
function GetTitles(bookProperty: any): string[]{
  if(typeof(bookProperty == "string")){

  };
  if(typeof(bookProperty == "boolean")){

  };

  return [""];
};