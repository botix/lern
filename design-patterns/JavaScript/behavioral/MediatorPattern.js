//////////////////////
// Mediator Pattern //
//////////////////////

/* 
  - Controls communication between objects so neither object has to be coupled to the other(s)
  - Allows for a loosely coupled system
  - One object manages all communication
  - Many to Many Relationship
*/


var mediator = (function(){
  const channels = {};

  const subscribe = function (channel, context, func){
    if(!mediator.channels[channel]){
      mediator.channels[channel] = [];
    };

    mediator.channels[channel].push({
      context: context,
      func: func
    });
  };

  const publish = function(channel){
    if(!this.channels[channel]){
      return false;
    };

    const args = Array.prototype.slice.call(arguments, 1);

    for(let i = 0; i < mediator.channels[channel].length; i++){
      const sub = mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    };
  }

  return {
    subscribe,
    publish
  }
})();