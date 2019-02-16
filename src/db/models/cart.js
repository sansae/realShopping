'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.hasMany(models.Item, {
      foreignKey: "userId",
      as: "items"
    });
  };
  return Cart;
};
