////////////////////
// Facade Pattern //
////////////////////

/*
  - Used to provide a simplified interface to a complicated system
  - Facade hides the complexity away
  - Does not add functionality
*/

const Task = function (data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

//messy code
const TaskService =( function(){
  return {
    complete: function(task){
      task.completed = true;
      console.log("Completing task: " + task.name);
    },
    setCompletedDate: function(task){
      task.completedDate = new Date();
      console.log(`${task.name} completed on ${task.completedDate}`);
    },
    notifyCompletion: function(task, user){
      console.log(`Notifying ${user} of the completion of ${task.name}`);
    },
    save: function(task){
      console.log(`Saving task: ${task.name}`)
    }
  }
})();

const myTask = new Task({
  name: "MuhTask",
  priority: 1,
  project: "Courses",
  user: "Jon",
  completed: false
});

//messy code calling each of the tasks separately
// TaskService.complete(myTask);
// if(myTask.completed === true){
//   TaskService.setCompletedDate(myTask);
//   TaskService.notifyCompletion(myTask, myTask.user);
//   TaskService.save(myTask);
// };

 

// Facade Pattern to the rescue. Create a module pattern that wraps
// the library functionality and expose it in the return object.

const TaskServiceWrapper = function(){
  
  const completeAndNotify = function(task){
    TaskService.complete(myTask);
    if(myTask.completed === true){
      TaskService.setCompletedDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    };  
  };

  return {
    completeAndNotify
  };
}(); 

TaskServiceWrapper.completeAndNotify(myTask)