"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.infoDelivery);
      Order.belongsTo(models.User);
      Order.hasMany(models.OrderDetail);
    }
  }
  Order.init(
    {
      totalProduct: DataTypes.INTEGER,
      payment: DataTypes.STRING,
      total: DataTypes.INTEGER,
      idInfoDelivery: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      idStatus: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
