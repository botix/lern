/////////////
// Classes //
/////////////

/*
  -Templates for creating objects
  -Provides state storage and behaviour
  -Encapsulates reusable functionality
*/ 

//////////////////
// Constructors //

class ReferenceItem{
  constructor(title: string, publisher?: string){
    // Constructors are functions that perform the initialization for a new instance of a class.

  }
};

let encyclopedia = new  ReferenceItem("World", "WorldPub");

////////////////////////////
// Properties and Methods //

class Motorbike {
  numberOfWheels: number;
  
  constructor(){
    this.maker = "";
    this.numberOfWheels = 2;
  };

  get maker(): string {
    return this.maker;
  };
  
  set maker(newMaker: string){
    this.maker = `${newMaker}. Setters are not allowed to have a return value!`;
  };

  provideEngineData(model: string): number{
    return 1400;
  };
};

// The following code deals with initialization through constructor. The second class is a shorthand
// and has the same effect as the first class
class Animal {
  name: string;
  
  constructor(animalName: string){
    this.name = animalName;
  };
};

class AnotherAnimal{
  constructor(public name: string){
    //This will automagicaly create a property name with the value passed to the constructor
  };
};

//Static Properties

class Library{
  constructor(public name: string){ }
  static description: string = `Static methods are only available on the class, not on the instance
  of the class. We access them by referencing the class name itself.`
}

Library.description;


//////////////////////
// Access modifiers //

// By default all members of the class are public.
// Private - makes a member accessible only within that class.
// Protected - members are accessible only within that class, and classes that inherit from it


/////////////////
// Inheritance //

// Inheritance is a means with which a class can share its member definitions with one or more subclasses
// Super calls the parent class constructor, this is required, even if the parent has no defined constructor

class StorageItem{
  static location: string;

  static changeLocation(): void{
    //some code
  };
};

class LongTermStorageItem extends StorageItem{
  constructor(){
    super();
  };

  static deepStorage: boolean;
};

///////////////////////
// Absctract classes //

// - Created with the "abstract" keyword
// - May not be instantiated, only used as parent classes for sub classes
// - Similar to interfaces, but unlike them, can contain implementations
// - Abstract methods are not implemented


///////////////////////
// Class Expressions //

// - Define a class 
// - Naming such a class is optional

let expressedClass = class extends StorageItem{
 //some code 
};