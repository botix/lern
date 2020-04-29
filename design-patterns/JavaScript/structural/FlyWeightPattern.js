///////////////////////
// FlyWeight Pattern //
///////////////////////

/*
  - The flyweight pattern allows sharing data across objects
  - Results in a smaller memory footprint
  - But only if you have a large number of objects
*/


const Task = function(data){
  this.name = data.name;
  this.flyweight = FlyWeightFactory().get(
    data.project,
    data.priority,
    data.user,
    data.completed
  );
  
  // this.priority = data.priority;
  // this.project = data.project;
  // this.user = data.user;
  // this.completed = data.completed;
};

function TaskCollection() {
  const tasks = {};
  const count = 0;
  
  const add = function(data){
    tasks[data.name] = new Task(data);
  };
  
  const get = function (name){
    return tasks[name];
  };
  
  const getCount = function(){
    return count;
  };

  return {
    add,
    get,
    getCount
  };
};

const tasks = new TaskCollection();

const projects = ["none", "courses", "training", "project"];
const priorities = [1, 2, 3, 4, 5];
const users = ["John", "Erica", "Amanda", "Nathan Never"];
const completed = [true, false];

const initialMemory = process.memoryUsage().heapUsed;

for(let i=0; i < 10000; i++){
  tasks.add({
    name: "task" + i,
    priority: priorities[Math.floor(( Math.random() * 5 ))],
    project: projects[Math.floor(( Math.random() * 4 ))],
    user: users[Math.floor(( Math.random() * 4 ))],
    completed: completed[Math.floor(( Math.random() * 2 ))]
  });
};

const afterMemory = process.memoryUsage().heapUsed;
console.log(`Used memory ${(afterMemory - initialMemory)/1e6} MB`)

//10000 Objects used 2.83 MB of memory

/* Flyweight creates a signature for each of the saved objects
    by combining their properties into a string. If that string
    repeats, the flyweight recognizes the duplicate object, and
    does not store it, but insted returns a reference to the one
    alllready saved. For some reason this particular example 
    uses more memory ?!
*/

function FlyWeight(project, priority, user, completed){
  this.priority = priority;
  this.project = project;
  this.user = user;
  this.completed = completed;
};

function FlyWeightFactory() {
  const flyweights = {};

  const get = function(project, priority, user, completed){
    if(!flyweights[project + priority + user + completed]){
        flyweights[project + priority + user + completed] = 
        new FlyWeight(project, priority, user, completed);
    };
    return flyweights[project + priority + user + completed]   
  };

  const getCount = function(){
    let count = 0;
    for(let f in flyweights) count++
    return count;
  };

  return {
    get,
    getCount
  }
};





























