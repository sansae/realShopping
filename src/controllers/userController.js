const User = require("../db/models").User;
const userQueries = require("../db/queries.users.js");

module.exports = {
  signUpForm(req, res, next) {
    res.render("users/signup");
  },

  create(req, res, next) {
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };

    userQueries.createUser(newUser, (err, user) => {
      if (err) {
        res.redirect("/users/signup");
      } else {
        res.redirect("/");
      }
    });
  },
}
