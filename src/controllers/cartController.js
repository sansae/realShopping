const Cart = require("../db/models").Cart;

module.exports = {
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
