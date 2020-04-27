"use strict";
/*
  - Generics are code that works with multiple types
  - Accept "type parameters" which specify the parameters to use for particular variable,
    instance or function invocation.
  - Apply to functions, interfaces and classes
  - Type parameters specify the type a generic will operate over
    -Listed spearate from function parameters inside angle brackets
  -Conventionally represented by the letter "T" (Aray<T>)
  -Actual type provided at instance creation or function invocation

*/
var poetryBooks;
var fictionBooks;
var historyBooks = new Array(5);
///////////////////////
// Generic Functions //
// Generic functions accept a type parameter that is either specified or inferred by the compiler
// each time they are invoked
function LogAndReturn(thing) {
    console.log(thing);
    return thing;
}
;
var someString = LogAndReturn("Log this");
;
var bookInventory;
/////////////////////
// Generic Classes //
var Catalog = /** @class */ (function () {
    function Catalog() {
        this.catalogItems = new Array();
    }
    Catalog.prototype.addItem = function (newItem) {
        this.catalogItems.push(newItem);
    };
    ;
    Catalog.prototype.getNewestItem = function () {
        return this.catalogItems[0];
    };
    ;
    Catalog.prototype.getAllItems = function () {
        return this.catalogItems;
    };
    ;
    return Catalog;
}());
;
var bookCatalog = new Catalog();
;
var GenericCatalog = /** @class */ (function () {
    function GenericCatalog(catalogItems) {
        this.catalogItems = catalogItems;
    }
    ;
    GenericCatalog.prototype.addItem = function (newItem) {
        this.catalogItems.push(newItem);
    };
    ;
    GenericCatalog.prototype.getNewestItem = function () {
        return this.catalogItems[0];
    };
    ;
    GenericCatalog.prototype.getAllItems = function () {
        return this.catalogItems;
    };
    ;
    return GenericCatalog;
}());
