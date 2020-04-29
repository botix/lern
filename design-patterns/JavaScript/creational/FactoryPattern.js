//////////////////////
// Factory Pattern ///
//////////////////////

/*
  - Simplifies object creation
  - Creating different types of objects based on need

*/

//Example 1

const repoFactory = function(){
  this.getRepo = function(repoType){
    if(repoType === "task"){
      const taskRepo = require("./mock/taskRepository");
      return taskRepo;
    };

    if(repoType === "user"){
      const userRepo = require("./mock/userRepository");
      return userRepo;
    };

    if(repoType === "project"){
      const projectRepo = require("./mock/projectRepository");
      return projectRepo;
    };
  };
};

//Example 2 - with caching

const repoFactory2 = function(){
  this.getRepo = function(repoType){
   
    if(repoType === "task"){
      if(this.taskRepo){
        return this.taskRepo;
      } else {
        this.taskRepo = require("./mock/taskRepository");
        return this.taskRepo;
      };
    };

    if(repoType === "user"){
      if(this.userRepo){
        return this.userRepo;
      } else {
        this.userRepo = require("./mock/userRepository");
        return this.userRepo;
      };
    };
    
    if(repoType === "project"){
      if(this.projectRepo){
        return this.projectRepo;
      } else {
        this.taskRepo = require("./mock/projectRepository");
        return this.projectRepo;
      };
    };

  };
};

//Example 3 - with elegance

const repoFactory3 = function(){
  const repos = this;
  const repoList = [
    {name: "task", source: "./mock/taskRepository.js"},
    {name: "user", source: "./mock/userRepository.js"},
    {name: "project", source: "./mock/projectRepository.js"}
  ];

  repoList.forEach(repo =>{
    repos[repo.name] = require(repo.source);
  });
};

//no return statement in the function so new must be used. 
const repo3 = new repoFactory3;
console.log(repo3)