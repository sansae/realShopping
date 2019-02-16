const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/items", itemController.index);

router.post("/items/:id/create", itemController.create);

module.exports = router;
