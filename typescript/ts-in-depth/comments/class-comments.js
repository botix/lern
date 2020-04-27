"use strict";
/////////////
// Classes //
/////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
  -Templates for creating objects
  -Provides state storage and behaviour
  -Encapsulates reusable functionality
*/
//////////////////
// Constructors //
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, publisher) {
        // Constructors are functions that perform the initialization for a new instance of a class.
    }
    return ReferenceItem;
}());
;
var encyclopedia = new ReferenceItem("World", "WorldPub");
////////////////////////////
// Properties and Methods //
var Motorbike = /** @class */ (function () {
    function Motorbike() {
        this.maker = "";
        this.numberOfWheels = 2;
    }
    ;
    Object.defineProperty(Motorbike.prototype, "maker", {
        get: function () {
            return this.maker;
        },
        set: function (newMaker) {
            this.maker = newMaker + ". Setters are not allowed to have a return value!";
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Motorbike.prototype.provideEngineData = function (model) {
        return 1400;
    };
    ;
    return Motorbike;
}());
;
// The following code deals with initialization through constructor. The second class is a shorthand
// and has the same effect as the first class
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    ;
    return Animal;
}());
;
var AnotherAnimal = /** @class */ (function () {
    function AnotherAnimal(name) {
        this.name = name;
        //This will automagicaly create a property name with the value passed to the constructor
    }
    ;
    return AnotherAnimal;
}());
;
//Static Properties
var Library = /** @class */ (function () {
    function Library(name) {
        this.name = name;
    }
    Library.description = "Static methods are only available on the class, not on the instance\n  of the class. We access them by referencing the class name itself.";
    return Library;
}());
Library.description;
//////////////////////
// Access modifiers //
// By default all members of the class are public.
// Private - makes a member accessible only within that class.
// Protected - members are accessible only within that class, and classes that inherit from it
/////////////////
// Inheritance //
// Inheritance is a means with which a class can share its member definitions with one or more subclasses
// Super calls the parent class constructor, this is required, even if the parent has no defined constructor
var StorageItem = /** @class */ (function () {
    function StorageItem() {
    }
    StorageItem.changeLocation = function () {
        //some code
    };
    ;
    return StorageItem;
}());
;
var LongTermStorageItem = /** @class */ (function (_super) {
    __extends(LongTermStorageItem, _super);
    function LongTermStorageItem() {
        return _super.call(this) || this;
    }
    ;
    return LongTermStorageItem;
}(StorageItem));
;
///////////////////////
// Absctract classes //
// - Created with the "abstract" keyword
// - May not be instantiated, only used as parent classes for sub classes
// - Similar to interfaces, but unlike them, can contain implementations
// - Abstract methods are not implemented
///////////////////////
// Class Expressions //
// - Define a class 
// - Naming such a class is optional
var expressedClass = /** @class */ (function (_super) {
    __extends(expressedClass, _super);
    function expressedClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return expressedClass;
}(StorageItem));
