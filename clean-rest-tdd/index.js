const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { getDatabaseConnection } = require("./data_access/db");
const { router } = require("./routes/router");


(async() =>{
  try{
  
    const db = await getDatabaseConnection();
    router({ app, db });
    app.listen(process.env.PORT || 3333);
    
  } catch (err){
    console.error(err);
  }
})();

process.on("unhandledRejection", (reason, promise)=>{
  console.log("Unhandled Rejection at;", promise, "reason:", reason)
});