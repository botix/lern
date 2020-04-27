export function calculateLateFee(daysLate: number): number{
  return daysLate * .25;
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


//generics - The type of <T> provided at function invocation will also be 
//           expected for the param inventory and as the func return type!
export function Purge<T>(inventory: Array<T>): Array<T> {
  
  return inventory.splice(2, inventory.length);
};