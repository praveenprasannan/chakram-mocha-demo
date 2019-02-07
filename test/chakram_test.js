var chakram = require('chakram')
    expect = chakram.expect;

describe("GET request using Chakram", () => {
    it("should return the response in JSON", () => {
      var response = chakram.get("https://reqres.in/api/users/1");
      expect(response).to.have.status(200);
      expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
      return chakram.wait();
    });
});