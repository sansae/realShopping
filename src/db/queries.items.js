const Item = require("./models").Item;

module.export = {
  addItem(newItem, callback) {
    Item.findOne({
      where: {
        id: newItem.id
      }
    })
    .then((item) => {
      if (!item) {
        return Item.create({
          name: newItem.name,
          category: newItem.category,
          price: newItem.price
        })
        .then((item) => {
          callback(null, item);
        })
        .catch((err) => {
          callback(err);
        });
      } else {
        return callback("That item has already been added to this wiki.");
      }
    });
  },
}
