const {
  createExampleHandlerFactory
} = require("./createExampleHandlerFactory");

const {
  getExampleByIdHandlerFactory
} = require("./getExampleByIdHandlerFactory");

exports.router = ({ app, db }) => {
  app.post(
    "/example",
    createExampleHandlerFactory({ db })    
    );
  
  app.get(
    "/example/:exampleId",
    getExampleByIdHandlerFactory({ db })
  );
};