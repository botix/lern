"use strict";
////////////////
// Interfaces //
////////////////
var probablyADuck = {
    walk: function () { return console.log("walking like a duck"); },
    swim: function () { return console.log("swimming like a duck"); },
    quack: function () { return console.log("quacking like a duck"); }
};
function FlyOverWater(bird) {
    return "With normal typing, suitability is determined by objects type. In duck\n  typing, an objects suitability is determined by the presence of methods and properties, \n  rather than the object type.";
}
;
FlyOverWater(probablyADuck); //works!!
function interfaceDefinition() {
    return "All of the properties and methods on an interface are required for the object \n  that implements the interface. \n  It is also possible for an interface to have optional properties denoted with ?\n  Methods can be specified by giving the method a name and a signature";
}
;
