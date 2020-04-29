///////////////////////
// Singleton Pattern //
///////////////////////

/*
  - Used to restrict an object to a single instance across the entire application
  - Considered an antipatern by refactoringGuru.com???
*/

const TaskRepo = (function (){
  let taskRepo;

  function createRepo(){
    const _taskRepo = new Object("Task");
    return _taskRepo;
  };
  
  return {
    getInstance: function(){
      if(!taskRepo){
        taskRepo = createRepo();
      }

      return taskRepo;
    }
  };

})(); //why IIFE??

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

console.log(repo1 === repo2);