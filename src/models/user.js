"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.infoDelivery, {
        foreignKey: "idUser",
      });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      type: {
        type: DataTypes.STRING,
        defaultValue: "NORMAL",
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "USER",
      },
      OTP: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
