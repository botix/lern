/////////////////////////
// Constructor Pattern //
/////////////////////////

/* 
  - Used to create new objects with their own object scope
  - Created using the "new" keyword which:
    - creates a brand new object
    - links to an object prototype
    - binds "this" to the new object scope
    - implicitly returns this
  - Basicly a class implementation in JS
*/


const Task = function(name){
  this.name = name;
  this.isCompleted = false;

  this.complete = function(){
    console.log(`Completing task: ${this.name} `);
    this.isCompleted = true;
  };

  this.save = function(){
    console.log(`Saving Task: ${this.name}`);
  };
};

const task1 = new Task("Do the dishes");
const task2 = new Task("Take out trash");

task1.complete();
task1.save();
task2.complete();

const moreEfficient = ` We made two new objects task1, and task2, both which have their own 
implementation of the complete and save functions. To avoid this we can put the functions 
on the prototype of the Task function, which will make them available to all instances, while
also encapuslating them.`

const BetterTask = function(name){
  this.name = name;
  this.isCompleted = false;
};

BetterTask.prototype.complete = function(){
  console.log(`Completing task: ${this.name}`);
  this.isCompleted = true;
};

BetterTask.prototype.save = function(){
  console.log(`Saving Task: ${this.name}`);
};

const betterTask1 = new BetterTask("Do the dishes, but more efficiently");
const betterTask2 = new BetterTask("Take out trash, use less resources");

betterTask1.complete();
betterTask1.save();
betterTask2.save();