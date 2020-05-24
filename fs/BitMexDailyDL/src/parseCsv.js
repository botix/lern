const csv = require("csv-parser");
const fs = require("fs");
const Volumetrics = require("./Volumetrics/basicDataProcessing");
let counter=0;

function processData(fileName){
  let dailyReport = null;

  fs.createReadStream(`../downloads/${fileName[counter]}.csv`)
    .pipe(csv())
    .on("data", (row)=>{
      if(row.symbol === "XBTUSD"){
        dailyReport = Volumetrics.calculate(row);
      };
    })
    .on("end", ()=>{
      fs.writeFile(`../processedData/${fileName[counter]}.json`, JSON.stringify(dailyReport), (err)=>{
        if(err) throw err;

        Volumetrics.reset();
        counter++;
        if(counter < fileName.length){
          processData(fileName);
          Volumetrics.resetCounter();
        };
        console.log("The file has been processed: \n", dailyReport)
      });
    });
};

fs.readdir("../downloads", async(err, files)=>{
  if(err) throw err;
  let splitJsonFile;
  let csvFiles =[];
  let finishedFiles = [];
  let processedFiles;

  processedFiles = fs.readdirSync("../processedData");

  processedFiles.forEach(processedFile =>{
    splitJsonFile = processedFile.split(".json");
    if(splitJsonFile[1] === ""){
      finishedFiles.push(splitJsonFile[0]);
    }
  })

  files.forEach(file =>{
    splitFile = file.split(".csv");
    
    if(splitFile[1] === "" && !finishedFiles.some(finishedFile => finishedFile === splitFile[0])){
      csvFiles.push(splitFile[0]);
    };
  });
  console.log("Processing file: ", csvFiles);
  if(csvFiles.length){
    processData(csvFiles);
  };
});