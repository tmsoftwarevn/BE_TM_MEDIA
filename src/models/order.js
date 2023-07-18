"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "idUser",
      });
      Order.hasMany(models.OrderDetail, {
        foreignKey: "idOrder",
      });
      Order.belongsTo(models.Status, {
        foreignKey: "idStatus",
      });
    }
  }
  Order.init(
    {
      totalProduct: DataTypes.INTEGER,
      payment: DataTypes.STRING,
      total: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      idStatus: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
