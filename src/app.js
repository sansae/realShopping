const express = require("express");
const app = express();

const routeConfig = require("./config/route-config");
routeConfig.init(app);

module.exports = app;
