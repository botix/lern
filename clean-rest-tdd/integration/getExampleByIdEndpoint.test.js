const axios = require("axios");
const { BASE_URL } = require("./config");

const { getDatabaseConnection } = require("../data_access/db");
const { createExample } = require("../persistence/createExample");

let createdExample;

describe("@GET/example/:exampleId", () => {
  
  beforeEach(async ()=> {
    const db = await getDatabaseConnection();
    createdExample = await createExample({
      db,
      example:{
        randomStuff: "Omllette du frommage"
      }
    });
  });
  
  it("Returns a saved example using the specified id", async ()=>{
    const response = await axios.get(
      `${BASE_URL}/example/${createdExample._id}`
    );
    
    expect(response.status).toEqual(200);
    expect(response.data).toEqual({
      _id: createdExample._id.toString(),
      randomStuff: "Omllette du frommage" 
    });
  });
});