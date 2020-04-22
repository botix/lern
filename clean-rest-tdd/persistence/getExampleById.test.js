const { getExampleById } = require("./getExampleById"); 

describe("getExampleById", () => {
  it("should try to fetch example from mongodb", async ()=>{
    const EXAMPLE = {
      description: "Hello there"
    };
    
    const result = await getExampleById({
      db: {
        collection: () => ({
          findOne: () => ({
            _id: "abx",
            ...EXAMPLE
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