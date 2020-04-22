exports.createExample = async({ db, example}) => {
  
  const results = await db
    .collection("examples")
    .insertOne( example );  

  const createdExample = results.ops[0];
  return createdExample;
}