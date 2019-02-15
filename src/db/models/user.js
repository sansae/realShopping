'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Item, {
      foreignKey: "userId",
      as: "items"
    });
  };

  return User;
};
