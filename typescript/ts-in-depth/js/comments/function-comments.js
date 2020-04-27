"use strict";
//Function Types
function publishMessage(year) {
    return "Published in " + year + ". The function below is not an executable function, it is a\n  type definition for this function. It is also called a function signature";
}
;
var publishFunc;
publishFunc = publishMessage;
var message = publishFunc(2020);
//Optional and Default Parameters
function CreateCustromer(name, age) {
    return "The " + name + " parameter is a required parameter.\n  The question mark after the " + age + " parameter indicates that it is an optional parameter.\n  Optional parameters must come after after all required parameters in the function definition";
}
;
function GetBooksByTitle(title) {
    if (title === void 0) { title = "The C Programming Language"; }
    return "The " + title + " parameter has a default value. Unless overriden by an argument being \n  passed when calling the function, title will allways be \"The C Programming Language\". Default\n  parameters are treated as optional if they apper after all required parameters. Adding a ? is\n  not required";
}
;
//Rest parameters
function GetBooksReadForCust(name) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    return "Collects a group of parameters, denoted with an ellipsis(...) prefix.\nSyscall \"uv_cwd\" happens when the " + name + " of the file being executed cannot be found\nin the cwd(current working dirrectory). Reading about system calls might be usefull,\nthese books might be useful: " + bookIDs;
}
;
//Function overloading
function overload() {
    return "Function overloading is a feature that exists in many typed programming language. Functions\n  are created that have the same name, but differ in their type is some way. The implementation in\n  typescript is a bit different because TS compilse to JS which does not have types. Because the\n  types are removed at compile time, having multiple functions with the same name would cause a problem.\n  Therefore to overload functions in TS we provide multiple function definitions, but only one \n  function implementation. That implementation must contain type guards to determine which overload\n  was performed, and which implementation to execute";
}
;
//function implementation
function GetTitles(bookProperty) {
    if (typeof (bookProperty == "string")) {
    }
    ;
    if (typeof (bookProperty == "boolean")) {
    }
    ;
    return [""];
}
;
