"use strict";
function someFunc(score, message) {
    return "The question mark indicates that the parameter is optional. This implies\n  that in typescript all parameters are considered required unless flagged otherwise.\n  The (): string is the return parameter of the function";
}
;
function sendGreeting(greeting) {
    if (greeting === void 0) { greeting = "default variable value"; }
    var commentary;
    commentary = "We can assign a default value for the parameter, and this way we can call the\n  function without passing anything. Adding a default value makes a parameter optional.\n  Void implies that the function has no return parameters";
    console.log(commentary);
}
;
function funWithFlags(flag) {
    var noImplicitAny;
    noImplicitAny = "This flag requires all function parameters to be annotated. Function parameters\n  that are not anotated are of type \"any\", which raises a compiler error when using this flag";
    console.log(noImplicitAny);
}
;
var logMessage = function (message) {
    console.log("The " + message + " needs to be in brackets because of the type anotation, \n  otherwise it would raise an error");
};
var logError = function (err) {
    console.error(err);
};
//# sourceMappingURL=typescriptFunctions.js.map