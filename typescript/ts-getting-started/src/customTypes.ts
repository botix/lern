///////////////////////////////////
//Creating and Using Custom Types//
///////////////////////////////////

//Creating an Interface

interface Employee {
  name: string;
  title: string;
};

interface Manager extends Employee {
  departement: string;
  numOfEmployees: number;

  scheduleMeeting: (topic: string) => void;
};

let developer = {
  name: "Michelle",
  title: "Senior TypeScript Developer",
  editor: "VS Code"
};

let duckTyping: string = `If something walks, talks and quacks like a duck, then it is a duck. 
In the above example the developer object implements the Employee interface even though it has
and aditional property "editor". This is called Structural Type System`;

let newEmployee: Employee = developer;


/* Class members
Implement methods and properties
Constructors are special functions that execute when new instances of the class are created
  -they are used to initialize and do prepwork before the instance is created
Contain accessors (getters and setters)
Access modifiers
  -public -> by default all typscript class members are public, meaning they can be accesed by anyone
  -private -> only accesible from the class
  -protected -> only accesible from the class and any other class that inherits from the class
*/

class Developer {

  department: string;
  private _title: string;
  
  constructor(department: string, title: string){
    this.department = department;
    this._title = title
  };

  get title(): string{
    return this._title;
  };

  set title(newTitle: string){
    this._title = newTitle.toUpperCase();
  };

  documentRequirements(requirements: string): void {
    console.log(requirements);
  };

};

let tony = new Developer("The Sharp Dept", "el Commandante");


//Static Members - they are accesed on class directly, not on instances of the class

class WebDeveloper extends Developer{
  static jobDesctiption: string = "To build coool stuff";
  static logFavouriteProtocol(){
    console.log("HTTPS and SSH of course");
  }

  logJobDescription(): void{
    //To access a static method we use the class name since the member exists only on the class
    //Using "this" would not work since that refers to the object that is an instance of the class
    console.log(WebDeveloper.jobDesctiption);
  };
};

//Note how the static method can be accesed without instantiating the class first
WebDeveloper.logFavouriteProtocol();


////////////////
//Constructors//
////////////////
// If a class extends another one, calling super() is mandatory. Super executs the parents constructor
// readonly may only be used on variable declaration, and inside constructors. It cannot be changed afterwards



class Dog {
  maneColor:string;

  constructor(maneColor: string){
    this.maneColor = maneColor;
  };

  whatBreed(): void{
    console.log(`The color of the dogs mane is ${this.maneColor}`);
  };
};


class GermanShepherd extends Dog{
  readonly maneColor: string;

  constructor(color: string){
    super(color);
    this.maneColor = color;
  };

  sayWoof(): void{
    console.log(`The ${this.maneColor} dog says WWWOOOOOOFFF!!`);
  };

};


//Declaring fields can be avoided if they are defined in the constructor as shown below
interface Player{
  name: string;
  score: number | undefined;
};

class Game {
  //player: Player

  constructor(public player: Player){
  //this.player = player
  };
};