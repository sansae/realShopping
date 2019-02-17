const Cart = require("../db/models").Cart;
const Item = require("../db/models").Item;

module.exports = {
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

  update(req, res, next) {
    Cart.findById(req.params.id)
    .then((cartItem) => {
      cartItem.update({
        quantity: req.body.itemQuantity
      })
      .then((updatedCartItem) => {
        req.flash("notice", `Your cart has been updated. The quantity for ${cartItem.name} is now: ${req.body.itemQuantity}.`);
        res.redirect('back');
      })
    })
    .catch((err) => {
      req.flash("notice", err);
      res.redirect(`/`);
    });
  },

  destroy(req, res, next) {
    Cart.findById(req.params.id)
    .then((cartItem) => {
      cartItem.destroy()
      .then(() => {
        req.flash("notice", "The item has been removed from your cart.");
        res.redirect('back');
      })
    })
    .catch((err) => {
      req.flash("notice", err);
      res.redirect('/');
    });
  }
}
