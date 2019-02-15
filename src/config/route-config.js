module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    app.use(staticRoutes);
    const itemRoutes = require("../routes/item");
    app.use(itemRoutes);
  }
}
