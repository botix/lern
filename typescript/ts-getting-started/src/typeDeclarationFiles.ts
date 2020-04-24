//////////////////////////
//Type Declaration Files//
//////////////////////////

/*
  -Typescript wrappers for JavaScript Libraries
  -Define valid property names
  -Define function parameters
  -Ensures that a library is being used as intended
  -extension .d.ts
  -often maintained separately than the library they wrap
*/

import * as _ from "lodash";


let allCapsName: string = _.upperCase(`By installing the type declaration file for lodash (@types/lodash)
we get all the type information for all the methods displayed when calling the method`);
console.log(allCapsName);
