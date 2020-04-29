///////////////////////
// Decorator Pattern //
///////////////////////

/* 
  - Used to add new functionality to an existing object, without being obtrusive
  - Wraps an object, allowing for extended functionality
  - Protects existing objects
*/

//first a constructor pattern to make a Task

const Task = function(name){
  this.name = name;
  this.completed = false;
};

Task.prototype.toggleComplete = function() {
  this.completed = !this.complete;
};

Task.prototype.state = function(){
  console.log(`The task ${this.name} has
  ${this.completed ? "been" : "not been"} completed`);
};

const minorTask = new Task("Mow the lawn");

//This code is working, so we don't want to mess with it. Instead we create

const urgentTask = new Task("Walk the dog");

urgentTask.goForWalk = function() {
  console.log("The doggo is happily running around");
};

urgentTask.state = function (){
  this.goForWalk();
  this.toggleComplete();
  Task.prototype.state.call(this)
};

minorTask.state();
urgentTask.state();

// The above is a simple decoration, adding functionality without modifying
// the original




/////////////////////////////
// A more advanced example //

const UrgentTask = function(name, priority){
  Task.call(this, name);
  this.priority = priority
};

`Because this Urgent Task constructor invokes the Task constructor with call,
we do not have acces to Task prototype on the UrgentTask instances (ut)
We could try something like UrgentTask.prototype = Task.prototype but this would tightly
couple them, meaning a change in one would be reflected in the other. To avoid
this we can use Object.create(). This will create a new object that holds the 
Task.prototype, resulting in decoupling of the two prototypes. Mmmmmm prototypes 
`
UrgentTask.prototype = Object.create(Task.prototype);

const ut = new UrgentTask("This is urgent", 1);
ut.toggleComplete();
console.log(ut)
