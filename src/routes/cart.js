const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/carts/:id/create", cartController.create);

router.post("/carts/:id/update", cartController.update);

router.post("/carts/:id/destroy", cartController.destroy);

module.exports = router;
