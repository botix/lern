"use strict";
////////////////////////////////////////
// Implementing Asynchronous Patterns //
////////////////////////////////////////
;
function testCallback(name, callback) {
    `Building a callback function that throws an error by NodeJS convention`;
    try {
        if (typeof name === "string") {
            callback(null, name);
        }
        else {
            throw new Error(`${name} should be of type string, recieved ${typeof name} instead`);
        }
    }
    catch (err) {
        callback(err, null);
    }
    ;
}
;
function sayName(err, name) {
    if (err) {
        console.error(`There was an error: ${err}`);
    }
    else {
        console.log(`The name is: ${name}`);
    }
}
testCallback("Mitch Buchanan", sayName);
//////////////
// Promises //
/* The promise object is used for asynchronous computations. A Promise represents a value
   which may be available now, or in the future, or never
*/
function doAsyncWork(resolve, reject) {
    const num = Math.random();
    if (num >= .5) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
}
;
//p is a promise which if resolves returns the type string
let promise = new Promise(doAsyncWork);
promise
    .then(stringData => console.log(stringData))
    .catch(err => console.error(err));
///////////////////
// Async / Await //
//All async functions return a Promise, hence 
