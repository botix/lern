export namespace Fees {
  export function calculateLateFee(daysLate: number): number{
    return daysLate * .25;
  };
};

export function MaxBooksAllowed(age: number): number {
  if(age < 12){
    return 3;
  } else {
    return 10;
  };
};

function privateFunc(): void {
  console.log("This is private")
};


//generics - whatever type <T> we specify when invoking this function,
//           will also be expected for the inventory param, and return value of the func.
export function Purge<T>(inventory: Array<T>): Array<T> {
  //implement fancy logic

  return inventory.splice(2, inventory.length);
};