const doesDatabaseExist = `If you try to acces a database that doesn't exits, mongo will
automagicaly create it for you`;

const mongooseEventHandlers = `Once and on are event handlers on connection, and probably
other methods available on mongoose. They are event listeners, listening for events`;

const mongooseConnectionString = `Accepts the path to the database in the format 
"mongodb://ip:port/databasename", aditional parameter is the options object.`;

const globalString = String || `String is a reference to the base string object in JS. It's a
global variable.`;

const subDocument = "a Schema insede another schema";

const virtualType = `A property that we have on the model, that doesn't actually get persisted
(saved) to the database. Virtual properties are defined on the Schema by calling the virtual 
method, and passing a name Schema.virtual("name")`;

const refSystem = `Refer collections to each other (similar to foreign key)`;

const modifiers = `Modifiers that enhance the queries like the populate modifier 
use the property name on the models as keys`;

const associationLoading = `Be careful when loading associations, because if the number of
associations is large enough, it might freeze the db while the query executes`;
