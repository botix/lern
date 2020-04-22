# Example of CLEAN design.

###### To run localy
  - clone repo
  - run npm install to install dependencies
  - npm run test to test endpoints

Mongo daemon is required to communicate to the database.

The Clean architecture divides the application into layers. 
The most inner layer has no dependencies, and contains the business logic of the application. 
Dependencies that are used by that business logic are injected, and if necessary easily swapped in the future by (re)writing the interactors and handlers, providing a clean separation of business and infrastucture logic. 

