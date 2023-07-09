"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.infoDelivery);
      Order.belongsTo(models.User);
      Order.hasOne(models.OrderDetail);
    }
  }
  Order.init(
    {
      status: DataTypes.STRING,
      payment: DataTypes.STRING,
      totalFinal: DataTypes.INTEGER,
      idInfoDelivery: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
