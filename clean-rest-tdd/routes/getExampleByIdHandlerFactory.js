const {
  getExampleByIdInteractor
} = require("../interactors/getExampleByIdInteractor");

const {
  getExampleById
} = require("../persistence/getExampleById");

exports.getExampleByIdHandlerFactory = ({ db }) => {
  return async( req, res) => {
    try{
      const example = await getExampleByIdInteractor({
        db,
        getExampleById,
        exampleId: req.params.exampleId
      });
    
      res.send(example);
    
    } catch (err) {
      console.error(err);
    };
  };
};