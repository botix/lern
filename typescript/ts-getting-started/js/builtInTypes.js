"use strict";
var bool = Boolean;
var numb = Number;
var str = String;
var arr = Array;
var nll = null;
var udf = undefined;
var x = "Semicolon after a variable assignes a type to it, \nthis is called type annotation";
var y = "Trying to assign a value of diferent type to an annotated\nvariable will result in compile time error";
var z = "It is not necessary to use type annotation at variable declaration,\nthe compiler will infer it automagicaly";
var someValue = "Union Types are a combination of several\ntypes, the variable can now have several legal types";
someValue = 44;
var functions = "Below is an example of function variable\ndeclaration, and the function return type declaration";
var playerName = "Samson";
function logPlayer(name) {
    console.log("New game starting for player: " + name);
    return 43;
}
;
var sayName = logPlayer(playerName);
var strictNullChecks = "Using the --strictNullChecks compiler flag\nrequires for null and undefined to be explicitly specified as the type \nof a variable, otherwise, attemtps to assign them will result in compile \ntime error";
var nullableString;
nullableString = null;
var value = 5;
var fixedString = value.toFixed(4);
var fixedString2 = value.toFixed(4);
value = "By using the angle brackets in front of a variable we can assert the\ntype of a variable previously declared as any. This is also possible by using \n\"as\" keyword.  This does not change the type of the variable";
function flow() {
    var messageElement;
    messageElement = "Here the possible values for the variable are HTMLElement or\n  string. Once inside the if block, the compiler will automagicaly recognize that\n  now there is only one possible type for the variable, based on the if statement \n  condition, so the type is no longer a union but one or the other";
    if (typeof messageElement === "string") {
        return messageElement;
    }
    else {
        return messageElement;
    }
}
;
//# sourceMappingURL=builtInTypes.js.map