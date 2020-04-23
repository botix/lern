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
;
;
var developer = {
    name: "Michelle",
    title: "Senior TypeScript Developer",
    editor: "VS Code"
};
var duckTyping = "If something walks, talks and quacks like a duck, then it is a duck. \nIn the above example the developer object implements the Employee interface even though it has\nand aditional property \"editor\". This is called Structural Type System";
var newEmployee = developer;
var Developer = (function () {
    function Developer(department, title) {
        this.department = department;
        this._title = title;
    }
    ;
    Object.defineProperty(Developer.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Developer.prototype.documentRequirements = function (requirements) {
        console.log(requirements);
    };
    ;
    return Developer;
}());
;
var tony = new Developer("The Sharp Dept", "el Commandante");
var WebDeveloper = (function (_super) {
    __extends(WebDeveloper, _super);
    function WebDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDeveloper.logFavouriteProtocol = function () {
        console.log("HTTPS and SSH of course");
    };
    WebDeveloper.prototype.logJobDescription = function () {
        console.log(WebDeveloper.jobDesctiption);
    };
    ;
    WebDeveloper.jobDesctiption = "To build coool stuff";
    return WebDeveloper;
}(Developer));
;
WebDeveloper.logFavouriteProtocol();
var Dog = (function () {
    function Dog(maneColor) {
        this.maneColor = maneColor;
    }
    ;
    Dog.prototype.whatBreed = function () {
        console.log("The color of the dogs mane is " + this.maneColor);
    };
    ;
    return Dog;
}());
;
var GermanShepherd = (function (_super) {
    __extends(GermanShepherd, _super);
    function GermanShepherd(color) {
        var _this = _super.call(this, color) || this;
        _this.maneColor = color;
        return _this;
    }
    ;
    GermanShepherd.prototype.sayWoof = function () {
        console.log("The " + this.maneColor + " dog says WWWOOOOOOFFF!!");
    };
    ;
    return GermanShepherd;
}(Dog));
;
;
var Game = (function () {
    function Game(player) {
        this.player = player;
    }
    ;
    return Game;
}());
;
//# sourceMappingURL=customTypes.js.map