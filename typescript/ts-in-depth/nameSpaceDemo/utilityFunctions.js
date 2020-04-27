"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fees;
(function (Fees) {
    function calculateLateFee(daysLate) {
        return daysLate * .25;
    }
    Fees.calculateLateFee = calculateLateFee;
    ;
})(Fees = exports.Fees || (exports.Fees = {}));
;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
    ;
}
exports.MaxBooksAllowed = MaxBooksAllowed;
;
function privateFunc() {
    console.log("This is private");
}
;
//generics - whatever type <T> we specify when invoking this function,
//           will also be expected for the inventory param, and return value of the func.
function Purge(inventory) {
    //implement fancy logic
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
;
