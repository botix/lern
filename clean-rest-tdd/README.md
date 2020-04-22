# Example of CLEAN design.

###### To run localy
  -clone repo
  -run npm install to install dependencies
  -npm run test to test endpoints

Mongo daemon is required to communicate to the database.

The Clean architecture divides the application into layers. 
The most inner layer has no dependencies, and contains the bussiness logic of the application. 
Dependencies that are used to execute that bussiness logic are injected, and if necessary easily swapped in the future by (re)writing the interactors and handlers, providing a clean separation of bussiness and infrastucture logic. 

