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

export { UniversityLibrarian };