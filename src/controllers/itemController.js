const Item = require("../db/models").Item;
const itemQueries = require("../db/queries.items.js");

module.exports = {
  index(req, res, next) {
    Item.findAll()
    .then((items) => {
      res.render("items/index", {items});
    })
  },

  create(req, res, next) {
    Item.findById(req.body.btn)
    .then((item) => {
      let newItem = {
        name: item.name,
        category: item.category,
        price: item.price
      };

      itemQueries.addItem(newItem, (err, item) => {
        if (err) {
          req.flash("notice", err);
          res.redirect(`/items/index`);
        } else {
          req.flash("notice", "Item added!");
          res.redirect(`/items/index`);
        }
      });
    });
  }
}
