////////////////
// Interfaces //
////////////////

/*
  -Interfaces allow us to define our own custom types
  -The compiler can then check our implemntations of those interfaces
  -They can be extendend and composed from other interfaces
  -They do not contain implementation details
  -They do not get compiled to JS
*/

interface Duck{
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

let probablyADuck = {
  walk: () => console.log("walking like a duck"),
  swim: () => console.log("swimming like a duck"),
  quack: () => console.log("quacking like a duck")
}

function FlyOverWater(bird: Duck): string{
  return `With normal typing, suitability is determined by objects type. In duck
  typing, an objects suitability is determined by the presence of methods and properties, 
  rather than the object type.`;
 };

FlyOverWater(probablyADuck); //works!!

///////////////////////////
// Defining an Interface //

interface Car {
  model: string,
  manufacturer: string,
  horsepowere: number,
  yearMade?: number,
  markDamaged: (reason: string) => void
}

function interfaceDefinition(): string{

  return `All of the properties and methods on an interface are required for the object 
  that implements the interface. 
  It is also possible for an interface to have optional properties denoted with ?
  Methods can be specified by giving the method a name and a signature
  If a method is optional on the interface, you must perform a check of it's
  existence before calling the method`;
};


///////////////////////////////////
// Interfaces for Function Types //

function exCreateCustomerID(name: string, id: number): string{
  return name + id;
};

//function type interface
interface StringGenerator {
  (chars: string, nums: number): string;
};

let IdGenerator: StringGenerator;
IdGenerator = exCreateCustomerID;


//////////////////////////
// Extending Interfaces //

interface LibraryResource {
  catalogNumber: number;
};

interface Book {
  title: string;
};

interface Encyclopedia extends LibraryResource, Book {
  volume: number;
};


/////////////////
// Class Types //

interface Librarian {
  doWork: () => void;
};

class ElementarySchoolLibrarian implements Librarian {
  doWork() {
    console.log(`The implements keywords specifies that the class will be the implmentation
    of the interface`)
  };
};

let kidsLibrarian: Librarian = new ElementarySchoolLibrarian;
kidsLibrarian.doWork();



