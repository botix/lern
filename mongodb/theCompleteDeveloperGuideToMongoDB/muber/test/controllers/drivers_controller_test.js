const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../app");
const Driver = mongoose.model("driver");

describe("Drivers Controller", () => {
  
  it("Post to /api/drivers creates a new driver", (done) => {
    Driver
      .countDocuments()
      .then(count => {
        
        request(app)
          .post("/api/drivers")
          .send({ email: "test@test.com"})
          .end(() => {
            Driver
              .countDocuments()
              .then(newCount => {
                
                assert(newCount === count + 1)
                done();
              });
          });

      });
  });

  it("Put to /api/drivers/:id edits an existing driver", (done) => {
    const driver = new Driver({ email: "carmagedonFan@d.com", driving: false});

    driver
      .save()
      .then(() => {

        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver
              .findOne({ email: "carmagedonFan@d.com"})
              .then(driver => {
                  
                assert(driver.driving === true)
                done();
              });
          });
      });
  });

  it("Delete to /api/drivers/:id deletes a driver", () => {
    const driver = new Driver({ email: "scapegoat@ohno.es", driving: false});

    driver
      .save()
      .then(() => {
        request(app)
          .delete(`/api/drivers/${driver._id}`)
          .end(() => {
            Driver
              .findOne({ email: "scapegoat@ohno.es"})
              .then((user) => {
                assert(user === null)
              });
          })
      });
  });

  // it("GET to /api/dreivers finds drivers in a location", done => {
  //   const kastelaDriver = new Driver({
  //     email: "kastela@test.com",
  //     geometry: { type: "Point", coordinates: [16.3833, 43.5500]}
  //   });

  //   const zadarDriver = new Driver ({
  //     email: "zadar@test.com",
  //     geometry: { type: "Point", coordinates: [15.2314, 44.1194]}
  //   });

  //   Promise.all([ kastelaDriver.save(), zadarDriver.save() ])
  //     .then(() =>{
  //       request(app)
  //         .get("/api/drivers?lng=16.38&lat=43.5")
  //         .end((err, response) => {
  //           console.log(response)
  //           done();
  //         })
  //     })
  // });
});