"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class infoDelivery extends Model {
    static associate(models) {
      infoDelivery.belongsTo(models.User, {
        foreignKey: "idUser",
      });
      infoDelivery.hasMany(models.Order, {
        foreignKey: "idInfoDelivery",
      });
    }
  }
  infoDelivery.init(
    {
      fullname: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "infoDelivery",
    }
  );
  return infoDelivery;
};
