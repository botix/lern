
/*
  - Generics are code that works with multiple types
  - Accept "type parameters" which specify the parameters to use for particular variable,
    instance or function invocation.
  - Apply to functions, interfaces and classes
  - Type parameters specify the type a generic will operate over
    -Listed spearate from function parameters inside angle brackets
  -Conventionally represented by the letter "T" (Aray<T>)
  -Actual type provided at instance creation or function invocation 

*/

let poetryBooks: Book[];

let fictionBooks: Array<Book>;

let historyBooks = new Array<Book>(5);


///////////////////////
// Generic Functions //

// Generic functions accept a type parameter that is either specified or inferred by the compiler
// each time they are invoked

function LogAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
};

let someString: string = LogAndReturn<string>("Log this");


////////////////////////
// Generic Interfaces //

interface Inventory<T> {
  getNewestItem: () => T;
  addItem: (newItem: T) => void;
  getAllItems: () => Array<T>;
};

let bookInventory: Inventory<Book>

/////////////////////
// Generic Classes //

class Catalog<T> implements Inventory<T> {
  private catalogItems = new Array<T>();

  addItem(newItem: T){
    this.catalogItems.push(newItem);
  };
  getNewestItem(): T{
    return this.catalogItems[0]
  };
  getAllItems(): Array<T>{
    return this.catalogItems
  };
};

let bookCatalog = new Catalog<Book>();


/////////////////////////
// Generic Constraints //

// generic constrains describe types that may be passed as generic parameter
// extends keyword applies constraint
// ONLY types that satisfy the constraint may be used

interface CatalogItem {
  catalogNumber: number;
};

class GenericCatalog<T extends CatalogItem> implements Inventory <T>{
 
  constructor(private catalogItems: Array<T>){};

  addItem(newItem: T){
    this.catalogItems.push(newItem);
  };
  getNewestItem(): T{
    return this.catalogItems[0]
  };
  getAllItems(): Array<T>{
    return this.catalogItems
  };
}
