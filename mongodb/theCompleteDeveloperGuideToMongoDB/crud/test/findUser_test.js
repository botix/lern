const assert = require("assert");
const User = require("../src/models/userModel");

describe("Reading from database", () => {
  let userGreg;

  beforeEach((done) =>{
     userGreg = new User({
      name: "Greg" 
    });

    userGreg
      .save()
      .then(() => done());
  });
  
  
  it("Retrieve a user from the database", (done) => {

    User
      .findOne({name: "Greg"})
      .then(res => {
        assert.equal(res.name, "Greg");
        assert(res._id.toString() === userGreg._id.toString());
        done();
      });
  });

  it("Find a user with a particular id", (done) => {
    User
      .findOne({ _id: userGreg._id})
      .then((res) => {

        assert(res.name === "Greg");
        done();
      });
  });
});