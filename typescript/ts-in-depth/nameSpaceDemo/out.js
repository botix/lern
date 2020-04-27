var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
        ;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
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
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    ;
    function privateFunc() {
        console.log("This is private");
    }
    ;
})(Utility || (Utility = {}));
;
/// <reference path="utilityFunctions.ts" />
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log("Fee: " + fee);
