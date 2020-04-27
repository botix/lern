"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.calculateLateFee = calculateLateFee;
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
//generics - The type of <T> provided at function invocation will also be 
//           expected for the param inventory and as the func return type!
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
;
