const assert = require("assert");
const User = require("../src/models/userModel");

describe("Virtual types", () =>{
  it("postCount returns the number of posts", (done) => {
    const Terry = new User({
      name: "Terry",
      posts: [{
        title: "Terry's World"
      }]
    });

    Terry
      .save()
      .then(() => User.findOne({name: "Terry"}))
      .then(user => {
        assert(user.postCount === 1)
        done();
      });
  })
});