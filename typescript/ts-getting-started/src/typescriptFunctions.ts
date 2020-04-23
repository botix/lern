//Adding type annotations to functions
function someFunc(score: number, message?: string): string{
  return `The question mark indicates that the parameter is optional. This implies
  that in typescript all parameters are considered required unless flagged otherwise.
  The (): string is the return parameter of the function`;
};

function sendGreeting(greeting: string = "default variable value"): void{
  let commentary: string;
  commentary = `We can assign a default value for the parameter, and this way we can call the
  function without passing anything. Adding a default value makes a parameter optional.
  Void implies that the function has no return parameters`;
  console.log(commentary);
};

function funWithFlags(flag: string): void {
  let noImplicitAny: string;
  noImplicitAny = `This flag requires all function parameters to be annotated. Function parameters
  that are not anotated are of type "any", which raises a compiler error when using this flag`;
  console.log(noImplicitAny);
};

//Using arrow functions 
const logMessage = (message: string): void => {
  console.log(`The ${message} needs to be in brackets because of the type anotation, 
  otherwise it would raise an error`);
};

const logError = (err: string): void =>{
  console.error(err);
};
