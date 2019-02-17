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
}
