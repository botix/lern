///////////////////////////////////
// Creating and Using Decorators //
///////////////////////////////////

/*
  - What are decorators
  - How to implement decorators
  - Decorator syntax
  - Types of decorators
*/


//What are decorators
console.log(`
  Proposed future feature for Javascript. They are a form of declarative programing, which means
  once you declare a decorator you can apply it to classes, methods... They are simply implemented
  as functions, having signitures that depend on what construct they are to decorate. They can be 
  attached to classes, methods, accessors, properties and parameters. Still experimental, requires
  raising a flag in tsconfig ("experimentalDecorators": true). 
`);

//class decorator
function uielement(target: Function) { 
  //do ui stuff
}
//method decorator
function deprecated(t: any, p: string, d: PropertyDescriptor){
  console.log(`
    - "This method will go away soon"
    - ${t} - constructor function for a static method, or the prototype for the class if
             it decorates an instance member
    - ${p} - name of the decorated member
    - ${d} - property descriptor for the member   
  `);
  };

// to apply a decorator use @ followed by the function name, just before the declaration
// of the item you wish to decorate

@uielement
class ContactForm {
  underHood: string;
  
  constructor(){
   this.underHood= `The classes constructor parameter will automaticly be passed as a 
   parameter to the uielement function`;
  };

  @deprecated
  someOldMethod(){
    console.log(`Applied the decorator to the Method as described above`);
  };
};



/////////////////////////
// Decorator Factories //

// Give the option of specifying additional parameters when the decorator is applied

function uielementFactory(element: string) {
  
  return function(target: Function) {
    console.log(`Creating new element: ${element}`);
  };
};

@uielementFactory("Additional parameters here")
class ResignationForm {
  //implement something
};



/////////////////////
// Class Decorator //

//syntax
function func<TFunction extends Function>(target: TFunction): TFunction | void{
  console.log(`
    TFunction is an extension of the Function parameter (which is a constructor), and 
    will represent the type of replacement constructor should the return value of the 
    function be else than void. If void, returns the constructor that was passed, if not
    returns a new constructor. 
  `);
};



/////////////////////////
// Property Decorators //

`The only difference between class and property decorators is the function signature`
function MyPropertyDecorator(target: Object, propertyKey: string){

  `Parameter ${target} is either a constructor function for a static member, otherwise
    it is the prototype for the class containing the member. Depends on what is being passed
    as target parameter

  The ${propertyKey} parameter is just a string that specifies the name of the decorated property
  
  They are applied the same way as you would to a class @decoratorname`;
};



//////////////////////////
// Parameter Decorators //

function MyParameterDecorator(target: Object, propertyKey: string, parameterIndex: number){
  `
  ${target} - constructor or prototype
  ${propertyKey} - name of the decorated member
  ${parameterIndex} - the index of the decorated parameters in the list of all parameters
  for that function 
  `
};


/////////////////////////
// Property Descriptor //

`Object that describes a property and how it can be manipulated. This is a JS building block`

interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any; //contains the function definition for class methods
  writable?: boolean; //specifies if "value" is read-only
  get? (): any;
  set? (v: any): void;
};

////////////////////////////////////
// Method and Accessor Decorators //

function MyMethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
  `
  ${target} - either constructor for static members or prototype of the class containing the member
  ${propertyKey} - the name of the decorated member
  ${descriptor} - property descriptor for the decorated member
  `
}