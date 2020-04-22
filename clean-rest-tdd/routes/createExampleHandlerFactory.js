const {
  createExampleInteractor
} = require("../interactors/createExampleInteractor");

const {
  createExample
} = require("../persistence/createExample");

exports.createExampleHandlerFactory = ({ db }) => {
  return async( req, res ) => {
    try{
        const createdExample = await createExampleInteractor({
          db,
          createExample,
          example: req.body
        });
      
      res.send(createdExample);
    
    } catch (err) {
      console.error(err);
    };
  };
};