exports.createExampleInteractor = async({
  db, 
  createExample,
  example
}) => {
  const createdExample = await createExample({
    db,
    example
  });
  
  return createdExample;
};