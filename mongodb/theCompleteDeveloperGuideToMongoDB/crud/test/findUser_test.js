const assert = require("assert");
const User = require("../src/models/userModel");

describe("Reading from database", () => {
  let userGreg, maria, alex, john;

  beforeEach((done) =>{
    userGreg = new User({
      name: "Greg" 
    });
    maria = new User({
      name: "Maria"
    });
    alex = new User({
      name: "Alex"
    });
    john = new User({
      name: "John"
    });

    Promise.all([
      userGreg.save(),
      maria.save(),
      alex.save(),
      john.save()
    ])
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

  it("can skip and limit the result set", (done) => {
    User
      .find({})
      .sort({ name: 1 })
      .skip(1)
      .limit(2)
      .then(users =>{
        
        assert(users.length === 2);
        assert(users[0].name === "Greg");
        assert(users[1].name === "John");
        done();
      })
  });
});