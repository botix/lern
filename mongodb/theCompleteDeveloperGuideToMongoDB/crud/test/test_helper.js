const mongoose = require("mongoose");

const db = "users_test";
const opts = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect(`mongodb://localhost/${db}`, opts);

mongoose.connection
  .once("open", () => console.log("Connected to test database"))
  .on("error", err => {
    console.warn("Warning: ", err);
  });