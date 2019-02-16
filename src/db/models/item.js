'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

    Item.belongsTo(models.Cart, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })
  };
  return Item;
};
