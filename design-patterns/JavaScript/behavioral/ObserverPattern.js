//////////////////////
// Observer Pattern //
//////////////////////

/*
  - Allows a collection of objects to watch an object and be notified of changes
  - Results in a loosely coupled system
*/

const Task = function(data){
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

Task.prototype.complete = function(){
  console.log(`Completing task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function(){
  console.log(`Saving task: ${this.name}`)
};

const task1 = new Task({
  name: "create a demo for constructors",
  user: "John"
});

task1.save();


//Creating Observers that will observe task

const notificationService = function(){
  const message = "Notifying";

  this.update = function(task){
    console.log(`${message} ${task.user} for task ${task.name}`);
  }
};

const loggingService = function(){
  const message = "Logging";
  
  this.update = function (task){
    console.log(`${message} ${task.user} for task ${task.name}`);
  };
};

const auditingService = function() {
  const message = "Auditing";

  this.update = function(task){
    console.log(`${message} ${task.user} for task ${task.name}`);
  };
};

const ns = new notificationService();
const ls = new loggingService();
const as = new auditingService();



// Observer List holds the observers that will watch the Subject
function ObserverList(){
  this.observerList = [];
};

ObserverList.prototype.add = function(obs) {
  return this.observerList.push( obs );
};

ObserverList.prototype.get = function(index) {
  if(index > -1 && index < this.observerList.length){
    return this.observerList[ index ];
  };
};

ObserverList.prototype.count = function(){
  return this.observerList.length;
}

ObserverList.prototype.removeAt = function(index){
  this.observerList.splice(index, 1);
};

ObserverList.prototype.indexOf = function (obj, startIndex){
  let i = startIndex;

  while (i < this.observerList.length) {
    if(this.observerList[i] === obj){
      return i;
    }
    i++;
  }
  return -1;
}




//Creating the Subject (Object being watched). For this we'll wrap Task using the Decorator Pattern
const ObservableTask = function(data){
  Task.call(this, data);
  this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};

ObservableTask.prototype.notify = function ( context ){
  const observerCount = this.observers.count();
  for(let i = 0; i < observerCount; i++){
    this.observers.get(i)(context); //call the function and pass it the parameter context
  };
};

ObservableTask.prototype.save = function(){
  this.notify(this); //override the method context, with this context

  Task.prototype.save.call(this);
};

ObservableTask.prototype.removeObserver = function (observer){
  this.observers.removeAt(this.observers.indexOf(observer, 0))
};


////test
const task2 = new ObservableTask({
  name: "Observe the tasks",
  user: "Feanor"
});

task2.addObserver(ns.update);
task2.addObserver(ls.update);
task2.addObserver(as.update);

task2.save();
task2.removeObserver(as.update);
task2.save();