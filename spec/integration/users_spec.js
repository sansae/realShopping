const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/users/";
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("routes: users", () => {
  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

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

  describe("POST /users", () => {
    it("should create a new user with valid values and redirect", (done) => {
      const options = {
        url: base,
        form: {
          username: "applecider",
          email: "applecider@example.com",
          password: "123456"
        }
      };

      request.post(options, (err, res, body) => {
        User.findOne({
          where: {email: "applecider@example.com"}
        })
        .then((user) => {
          expect(user).not.toBeNull();
          expect(user.email).toBe("applecider@example.com");
          expect(user.id).toBe(1);
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });

  describe("GET /users/signin", () => {
    it("should render a view with a signin form", (done) => {
      request.get(`${base}signin`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Sign In")
        done();
      });
    });
  });
});
