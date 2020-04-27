"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
        this.name = "";
        this.email = "";
        this.department = "";
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    ;
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = "";
    }
    ;
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
        console.log("Departement: " + ReferenceItem.departement);
    };
    ;
    ReferenceItem.departement = "Research";
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
;
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    ;
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
;
var Shelf = /** @class */ (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._items.push(item);
    };
    ;
    Shelf.prototype.getFirst = function () {
        return this._items[0];
    };
    ;
    Shelf.prototype.find = function (title) {
        return this._items.filter(function (item) { return item.title === title; })[0];
    };
    ;
    Shelf.prototype.printTitles = function () {
        this._items.map(function (item) { return console.log(item.title); });
    };
    ;
    return Shelf;
}());
exports.Shelf = Shelf;
;
