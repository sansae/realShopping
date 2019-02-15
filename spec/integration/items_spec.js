const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/items/";

describe("routes : items", () => {
  describe("GET /items", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toContain("Items");
        done();
      });
    });
  });
});
