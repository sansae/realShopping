const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/users/signup", userController.signUpForm);

router.post("/users", userController.create);

router.get("/users/signin", userController.signInForm);

router.post("/users/signin", userController.signIn);

router.get("/users/signout", userController.signOut);

module.exports = router;
