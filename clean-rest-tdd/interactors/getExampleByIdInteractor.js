exports.getExampleByIdInteractor = async ({
  db,
  getExampleById,
  exampleId
}) => {
  const example = await getExampleById({
    db,
    exampleId
  });

  return example;
};