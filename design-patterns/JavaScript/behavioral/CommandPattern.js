/////////////////////
// Command Pattern //
/////////////////////

/*
  - Encapsulates the calling of a method as an object
  - Fully decouples the execution from the implementation
  - Support undo operations
  - Supports auditing and logging of patterns
*/

const repo = {
  tasks: {},
  commands: [],
  get: function(id){
    console.log(`Getting task ${id}`);
  },
  save: function(task){
    repo.tasks[task.id] = task;
    console.log(`Saving ${task.name} to the db`);
  }, 
  replay: function(){
    for(let i = 0; i < repo.commands.length; i++){
      const command = repo.commands[i];

      repo.executeNoLog(command.name, command.param)
    };
  }
};

repo.execute = function(name){
  const args = Array.prototype.slice.call(arguments, 1);

  repo.commands.push({
    name: name,
    param: args[0]
  });

  if(repo[name]){
    return repo[name].apply(repo, args)
  };

  return false;
};

repo.executeNoLog = function(name){
  const args = Array.prototype.slice.call(arguments, 1);
  
  if(repo[name]){
    return repo[name].apply(repo, args)
  };
};

repo.execute("save", {
  id: 1,
  name: "Task 1",
  completed: false
});

// This command pattern allows us to log all commands that were executed against the object, 
// and then re-run them as necessary

console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);