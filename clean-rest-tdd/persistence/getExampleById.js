const { ObjectId } = require("mongodb");

const getExampleById = async ({ db, exampleId }) => {
  const example = await db
    .collection("examples")
    .findOne({ _id: ObjectId(exampleId) });
  
  return example;
};

module.exports = {
  getExampleById
};
