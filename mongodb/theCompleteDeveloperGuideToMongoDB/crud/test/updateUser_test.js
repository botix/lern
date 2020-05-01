const assert = require("assert");
const User = require("../src/models/userModel");

describe("Updating records", () =>{
  let Louis;

  beforeEach((done) => {
    Louis = new User({ 
      name: "Louis",
      likes: 0
    });
    
    Louis
      .save()
      .then(() => done());
  });

  function assertName(operation, done){
    operation
      .then(() => User.find({}))
      .then(res=> {
        assert(res.length === 1);
        assert(res[0].name === "Alice")
        done();
      });
  };

  it("instance type using set and save", (done) => {
    Louis.set("name", "Alice");
    assertName(Louis.save(), done);
  
  });
  
  it("A model instance can update", (done) => {
    assertName(Louis.updateOne({ name: "Alice" }), done);
  });

  it("A model class can update", (done) => {
    assertName(
      User
        .updateMany({ name: "Louis"}, { name: "Alice"}),
      done
    )
  });

  //deprecated without replacement?
  it("A model class can update one record", (done) => {
    assertName(
      User.findOneAndUpdate({ name: "Louis"}, { name: "Alice" }),
      done
    );
  });

  it("A model class find a record using Id and then update", (done) => {
    assertName(
      User.findByIdAndUpdate(Louis._id, { name: "Alice" }), 
      done
    );
  });
  
  it("Increments a user like count by 1", (done) =>{
    User
      .update({ name: "Louis" }, { $inc: { likes: 10} })
      .then(() => User.findOne({ name: "Louis" }))  
      .then((res) =>{
          
        assert(res.likes === 10);
        done();
      });
  });

});