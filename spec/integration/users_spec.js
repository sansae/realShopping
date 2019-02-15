const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/users/";

describe("routes: users", () => {
  describe("GET /users/signup", () => {
    it("should render a view with a signup form", (done) => {
      request.get(`${base}signup`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Sign Up");
        done();
      });
    });
  });
});
