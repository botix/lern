import { Book, DamageLogger, Author, Librarian } from "./interfaces";

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;
  
  constructor(){
    this.name = "";
    this.email = "";
    this.department = "";
  }


  assistCustomer(custName: string){
    console.log(`${this.name} is assisting ${custName}`);
  };
};

abstract class ReferenceItem{

  private _publisher: string;
  static departement: string = "Research";

  constructor(public title: string, protected year: number){
    this._publisher = ""
  };

  get publisher(): string{

    return this._publisher;
  };

  set publisher(newPublisher: string){
    this._publisher = newPublisher;
  }

  printItem(): void{
    console.log(`${this.title} was published in ${this.year}`)
    console.log(`Departement: ${ReferenceItem.departement}`);
  };
  
  abstract printCitation(): void;
};

class Encyclopedia extends ReferenceItem{
  constructor(newTitle: string, newYear: number, public edition: number){
    super(newTitle, newYear);
  };
  
  printCitation(): void{
    console.log(`${this.title} - ${this.year}`)
  }
};

export { UniversityLibrarian, ReferenceItem, Encyclopedia };