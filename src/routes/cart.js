const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/carts/:id/update", cartController.update);

module.exports = router;
