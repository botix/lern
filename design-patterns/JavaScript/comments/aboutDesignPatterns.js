const aPatternLanguage = `Each pattern represents our 
current best guess as to what arrangement of code will work to solve the problem presented`;

const theGangOf4 = `Design Patterns: Elements of Reusable Object-Oriented Code by 
Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides`;

const whatMakesAPattern = `It solves a problem, using a proven concept, to which a solution is
not obvious, describing a relationship`;


const typesOfPatterns = `
  Creational - deal with the creation of a new instance of an object
    - Constructor
    - Module
    - Factory
    - Singleton
  
  Structural - deal with the makeup of the object themselves, either extending
  or simplifying functionality.
    - Decorator
    - Facade
    - Flyweight
  
  Behavioural - deal with how object relate to each other, and how they operate
    - Command
    - Mediator
    - Observer
`;

//Recap of Object.defineProperty()
const obj = new Object();

Object.defineProperty(obj, "name", {
  value: "my name",
  writable: false,   // can it be modifed
  enumerable: false, //will it show when the parent object is looped over?
  configurable: false //can the configuration of the property be changed
});


/////////////
let task = {
  title: "Some title",
  description: "Some description"
};

Object.defineProperty(task, "toString", {
  value: function(){
    return `${this.title} ${this.description}`;
  },
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(task.toString());