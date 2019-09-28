import { expect, graphqlTestCall } from "./utils";

// integration testing
describe("Hello Query", () => {
  it("should return a string with detail Hello world!", async () => {
    const meQuery = `
      query helloQuery {
        hello 
      }
    `;
    const helloResponse = await graphqlTestCall(meQuery);
    expect(helloResponse).to.eql({ data: { hello: 'Hello world!'}});
  });
});
