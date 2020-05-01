const testSetup = `Every test is structured in the following way. At the very top level there is 
a "describe" function, inside which we have a variety of "it" functions. Inside "it" we write
the actual test code.`;

const usingCollections = `When we make a model, the collection name provided is in singular form,
later, when we want to reference that collection, we need to use the plural of the collection name.`;

const mongoOperators = ` Common operators that are built in mongodb, which when issued to the database
can be used to do useful tasks in a highly efficient way:
https://docs.mongodb.com/manual/reference/operator/`;

const mongoCustomValidators = ` It is possible to write custom validation functions using Mongoose
that will test against the schema at the creation of the object.
https://mongoosejs.com/docs/api.html#schematype_SchemaType-validate`;

const droppingSeveralCollections = `Mongo cannot drop collections in paralel, meaning it 
must drop them one by one.`;

const mongoNormalizesCollectionNames = `collNameExample becomes collnameExample`;

const xitOnly = `it() can be modified so that it only runs the specified test using it.only(),
or to exclude a test by using xit()`