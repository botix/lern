"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
class Employee {
    addToSchedule() {
        console.log('Employee added to schedule.');
    }
    logTitle() {
        ;
        console.log(`Employee has the title ${this.title}.`);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log(`Doing research on ${topic}.`);
    }
}
exports.Researcher = Researcher;
let UniversityLibrarian = class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
    ;
    assistFaculty() {
        console.log("Assisting faculty");
    }
};
__decorate([
    decorators_1.writable(true)
], UniversityLibrarian.prototype, "assistFaculty", null);
UniversityLibrarian = __decorate([
    decorators_1.logger,
    decorators_1.sealed("UniversityLibrarian")
], UniversityLibrarian);
exports.UniversityLibrarian = UniversityLibrarian;
let PublicLibrarian = class PublicLibrarian {
    assistCustomer(custName) {
        console.log("Assisting customer");
    }
    ;
    teachComunity() {
        console.log("Teaching community");
    }
};
__decorate([
    decorators_1.writable(false)
], PublicLibrarian.prototype, "teachComunity", null);
PublicLibrarian = __decorate([
    decorators_1.logger
], PublicLibrarian);
exports.PublicLibrarian = PublicLibrarian;
;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = 'Research';
