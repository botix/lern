const mongoose = require("mongoose");

const db = "users_test";
const opts = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect(`mongodb://localhost/${db}`, opts);

before((done) => {
  mongoose.connection
    .once("open", () => done())
    .on("error", err => {
      console.warn("Warning: ", err);
    });
});

beforeEach((done)=> {
  const { users, comments, blogposts } = mongoose.connection.collections;
  
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});