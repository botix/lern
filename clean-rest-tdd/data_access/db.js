const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "tdd-examples";

exports.getDatabaseConnection = async () => {
  const conn = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  return conn.db(dbName);
};