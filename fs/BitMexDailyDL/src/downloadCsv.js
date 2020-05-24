const fs = require("fs");
const https = require("https");
const { spawn } = require('child_process');

const today = new Date();
today.setDate(today.getDate() - 1); 

const year = today.getUTCFullYear();
const month = today.getUTCMonth() + 1 > 10 ? today.getUTCMonth() +1 : `0${today.getUTCMonth() + 1}`; 
let day = today.getUTCDate() >= 10 ? today.getUTCDate() :`0${today.getUTCDate()}`;
let fileName = `${year}${month}${day}`;

function getData(){
  const file = fs.createWriteStream(`../downloads/${fileName}.csv.gz`);
  https.get(`https://s3-eu-west-1.amazonaws.com/public.bitmex.com/data/trade/${fileName}.csv.gz`, function(res){
      console.log("Requesting daily data from public.bitmex", fileName);
      res.pipe(file);

      file.on("finish", ()=>{
        console.log(`${new Date()}: File download for ${fileName} finished`);

        const unzip = spawn("gunzip", [`${fileName}.csv.gz`], {cwd: "../downloads"});

        unzip.on("close", (code) =>{
          console.log(`${new Date()}: The downloaded file has been unzipped`);

          spawn("node", ["parseCsv.js"])
            .on("error", ( err ) => { throw err })
            .on("close", () => console.log(`${new Date()}: The data has been processed sucesfully`))
        })

      });
  });
};

getData();
