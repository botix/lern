const Driver = require("../models/driver");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there"});
  },

  // index(req, res, next){
  //   const { lng, lat } = req.query
    
  //   Driver
  //     .geoNear(
  //       { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
  //       { spherical: true, maxDistance: 200000 }
  //     )
  //     .then(drivers => res.send(drivers))
  //     .catch(next);
  
  // }, //this was deprecated and removed from Mongoose

  create(req, res, next) {
    const driverProps = req.body; 
    Driver
      .create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },

  edit(req, res, next){
    const driverId = req.params.id;
    const driverProps = req.body;
    
    Driver
      .findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next); 
  },

  remove(req, res, next){
    const driverId = req.params.id

    Driver
      .findOneAndRemove({ _id: driverId})
      .then(deletedUser => res.status(204).send(deletedUser))
      .catch(next);
  }
};