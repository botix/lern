////////////////////
// Module Pattern //
////////////////////

/*
  - Used as a simple way to encapsulate a group of like methods used in an app
  - Limit access to methods using closure
*/

//module pattern
const repo = function() {

  const db = {}; //here you would connect to the db

  return {
    getTask: function(id) {
      console.log(`Getting Task ${id}`);

      return {
        name: "New Task from db"
      };
    },

    saveTask: function(task){
      console.log(`Saving ${task} to the database`);
    }
  };
};

//revealing module pattern

const revealingRepo = function(){

  const db = {};

  const getTask = function() {
    console.log(`Getting task ${id}`);
    
    return {
      name: "New Task from db"
    };
  };

  const saveTask = function(){
    console.log(`Saving ${task} to the database`);
  };

  return {
    getTask: getTask,
    saveTask: saveTask
  };
};