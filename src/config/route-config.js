module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const itemRoutes = require("../routes/item");
    const userRoutes = require("../routes/user");
    const cartRoutes = require("../routes/cart");

    app.use(staticRoutes);
    app.use(itemRoutes);
    app.use(userRoutes);
    app.use(cartRoutes);
  }
}
