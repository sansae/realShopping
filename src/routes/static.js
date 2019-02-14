const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hi there. Just testing a route to see if it works.")
})

module.exports = router;
