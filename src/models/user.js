"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.infoDelivery);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: {
        type: DataTypes.STRING,
        defaultValue: "NORMAL",
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "USER",
      },
      refreshToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
