const axios = require("axios");
const { BASE_URL } = require("./config");

describe("POST@/ideas", () =>{
  it("creates and returns a new example with the status of 200", async () =>{
    const payload = " Create a test to test the tested";
    const response = await axios.post(`${BASE_URL}/example`, {
      example: payload
    });
    
    expect(response.status).toEqual(200);
    expect(response.data).toMatchObject({
      example: payload
    });
    expect(response.data._id).toBeDefined();
  });
});