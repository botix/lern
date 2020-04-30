const assert = require("assert");
const User = require("../src/models/userModel");

describe("Creating records", () => {
  it("Saves a user", (done) => {
    
    const userJohn = new User({
      name: "John"
    });

    userJohn.save()
      .then(response => {
        assert.notEqual(response._id, undefined);
        assert.equal(userJohn.isNew, false);
        done();
      });
  });
});