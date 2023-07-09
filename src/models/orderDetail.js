"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      OrderDetail.belongsTo(models.Order);
      OrderDetail.hasMany(models.Book);
    }
  }
  OrderDetail.init(
    {
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      idOrder: DataTypes.INTEGER,
      idBook: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );

  return OrderDetail;
};
