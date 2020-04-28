"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(name) {
    return function (target) {
        const comment = `class decorator that takes a single parameter that is a function object
      - returns void, meaning that no new constructor will be created, instead,
      the constructor recieved as parameter will be returned`;
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
;
function logger(target) {
    const comment = ` In the first decorator created above the class constructor was automagicaly
  passed to the decorator and it's type was Function. The type parameter on the logger function
  (TFunction) is an extension of that same type, and will be used inside this decorator function
  to represent the type of the replacement constructor`;
    //actual code for the decorator, :Function is mandatory
    const newConstructor = function () {
        console.log("Creating new Instance");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
;
//method decorator
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log(`Setting ${propertyKey} to be ${isWritable ? "read-write" : "read-only"}`);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
