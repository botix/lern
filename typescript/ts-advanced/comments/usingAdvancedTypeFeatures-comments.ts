//////////////////////////////////
// Using Advanced Type Features //
//////////////////////////////////

/*
  - Polymorphic this types
  - Declaration merging
  - Type guards
  - Symbols
*/

////////////////////////////
// Polymorphic this types //

console.log(`Definition: A polymorphic this type represents a type that is the
subtype of the containing class or interface`);

class Vehicle{
  drive(){
    console.log(`this is polymorphic, meaning it can represent more than one type`)
    return this //return type = Vehicle
  };
};

class Truck extends Vehicle{
  loadStuff(){
    return this; //return type = Truck
  };
};

class Car extends Vehicle{
  carryPeople(){
    return this; //return type = Vehicle
  };
};


//////////////////////////
// Declaration Merging //

/*
  Allowed merges
    - Interfaces
    - Enums
    - Namespaces
    - Namespaces with classes
    - Namespaces with functions
    - Namespaces with enums
  
  Disallowed merges
    - Classes with classes (use mixins instead);
*/

console.log(`Definition: The compiler merges two separate declarations declared with the same name
into a single definition`);

interface Person {
  name: string;
  doWOrk: () => void;
};

interface Person {
  title: string;
  phone: string;
};

//The compiler will merge these two declarations into a single one.




//////////////////
// Type Guards //

console.log(`A way to check the type of a variable, assisting the compiler to narrow the variable to a
specific type.`);


//typeof Type Guards
// -can only test against string, number, boolean or symbol using typeof

let x: string | number = 123;

if(typeof x === "string"){
  console.log(`X is a string`);
} else {
  console.log(`The only other possible type for x is a number`);
};



// instanceof Type Guards
// -allow you to compare the type of a variable against a type that has a constructor function

class Phone {
  callSomeone(){ console.log("make call")}
};

class Tablet {
  watchMovie() {console.log("watch movie")}
};

let device: Phone | Tablet = new Phone();

if(device instanceof Phone){
  //Check if device is in the prototype chain of the constructor function of Phone
  //call method knowing it exists
  device.callSomeone();
};



// User-Defined Type Guards
interface Vehicle { 
  numberOfWheels: number;
};

function isVehicle(v: any):v is Vehicle{
  console.log(`
    - the function has one parameter, which will be the object whose type needs to be checked
    - custom type guards have a type predicate specified after the (): as the return type
    - new keyword used -> "is"
    - function body should contain a check to see if the parameter is in fact the type 
      being checked for, and should return a boolean. 
  `);

  return (<Vehicle>v).numberOfWheels !== undefined;
};

let c = new Car();

if(isVehicle(c)){
  // It's a vehicle
};



/////////////
// Symbols //

/*
  - new primitive tipe in ES6
  - unique
  - once created, cannot be changed (imutable)
*/

const mySymbol = Symbol("first_symbol");
let anotherSymbol = Symbol("first_symbol");

console.log(mySymbol === anotherSymbol); // false
console.log(typeof mySymbol); //symbol - it's a primitivey`