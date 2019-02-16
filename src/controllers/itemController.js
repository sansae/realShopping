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

      var itemExists = false;

      Cart.findAll()
      .then((cartItems) => {
        for (let i = 0; i < cartItems.length; i++) {
          if (item.name === cartItems[i].name) {
            itemExists = true;
            break
          }
        }

        if (itemExists) {
          Cart.find({
            where: { name: item.name }
          })
          .then((cartItem) => {
            cartItem.update({
              quantity: cartItem.quantity + 1
            })
            .then((updatedCartItem) => {
              req.flash("notice", `${cartItem.name} was added again! You now have ${updatedCartItem.quantity} in your cart.`);
              res.redirect(`/`);
            })
          })
        } else {
          Cart.create({
            name: newItem.name,
            category: newItem.category,
            price: newItem.price,
            quantity: 1
          })
          .then((newCartItem) => {
            req.flash("notice", `${newCartItem.name} was added!`);
            res.redirect(`/`);
          })
        }
      })
    })
    .catch((err) => {
      req.flash("notice", err);
      res.redirect(`/`);
    })
  },// end create
}
