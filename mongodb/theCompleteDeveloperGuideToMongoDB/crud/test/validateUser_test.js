const assert = require("assert");
const User = require("../src/models/userModel");

describe("Validating records", () => {

  it("requires a username", (done) => {
    const user = new User();
    user.validate((validationResult) => {

      const { message } = validationResult.errors.name;
      assert( message === "Name is required." );
      done();
    });
  });

  it("requires a username longer than 2 characters", () => {
    const user = new User({ name: "Al" });
    const validationResult = user.validateSync();
    
    const { message } = validationResult.errors.name;
    assert( message === "Name must be longer than 2 characters");
  });

  it("dissalows invalid records from being saved", (done) => {
    const user = new User({ name: "Al"});
    
    user
      .save()
      .catch(err =>{
          
        assert(err.name === "ValidationError");
        assert(err.errors.name.message === "Name must be longer than 2 characters");
        done();
      });
  });

});