const assert = require("assert");
const User = require("../src/models/userModel");

describe("Deleting a user", () => {
  let Paul;

  beforeEach((done) =>{
    Paul = new User({
      name: "Paul"
    });

    Paul
      .save()
      .then(() => done());
  });

  it("Delete using model instance delete", (done) =>{
    Paul
    .delete()
    .then( () => User.findOne({name: "Paul"}))
    .then((res) =>{
      
      assert(res === null);
      done();
    });
  });

  it("Delete using class method deleteOne", (done) => {
    User
      .deleteOne({name: "Paul"})
      .then( res => {
        assert(res.ok === 1);
        done();
    });
  });

  it("Delete using class method findAndDelete", (done) =>{
    User
      .findOneAndDelete({name: "Paul"})
      .then(() => User.findOne({ _id: Paul._id } ))
      .then(res => {
        assert(res === null);
        done();
      });
  });

  it("Delete using class method findByIdAndDelete", (done) =>{
    User
      .findByIdAndDelete({ _id: Paul._id})
      .then( () => User.findOne({ _id: Paul._id } ))
      .then(res => {
        assert(res === null);
        done();
      });
  });

});