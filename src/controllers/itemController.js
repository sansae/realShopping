const Item = require("../db/models").Item;

module.exports = {
  index(req, res, next) {
    // Item.findAll()
    // .then((items) => {
    //   res.render("items/index", {items});
    // })
    res.render("items/index");
  }
}
