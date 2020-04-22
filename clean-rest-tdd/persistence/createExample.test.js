const { createExample } = require("./createExample");

describe("createExample", () =>{
  it("should invoke mongodb create method with expected parameters", async () =>{
    const EXAMPLE = {
      description: "Hello there"
    }
    const result = await createExample({
      db: {
        collection: () => ({
          insertOne: () => ({
            ops: [{
              _id: "abx",
              ...EXAMPLE
            }]
          })
        })
      }, 
      example: EXAMPLE
    });
    expect(result).toMatchObject({
      _id: "abx",
      ...EXAMPLE
    });
  });
});