const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

if(process.env.NODE_ENV !== "test"){
  mongoose.connect("mongodb://localhost/muber", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const app = express();

app.use(express.json());

routes(app);

app.use((err, req, res, next) => {
  res
    .status(422) 
    .send({ error: err.message });
});

module.exports = app;