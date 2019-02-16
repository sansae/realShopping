const Item = require("../db/models").Item;
const Cart = require("../db/models").Cart;
const itemQueries = require("../db/queries.items.js");

module.exports = {
  index(req, res, next) {

    Item.findAll()
    .then((items) => {
      let allItems = items;

      Cart.findAll()
      .then((cartItems) => {
        let allCartItems = cartItems

        res.render("items/index", {allItems, allCartItems});
      })
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

      console.log(`${JSON.stringify(newItem)}`);
      Cart.create({
        name: newItem.name,
        category: newItem.category,
        price: newItem.price
      })
      .then((newCartItem) => {
        req.flash("notice", `${newCartItem.name} was added!`);
        res.redirect(`/`);
      })
    })
    .catch((err) => {
      req.flash("notice", err);
      res.redirect(`/`);
    })
  }
}
