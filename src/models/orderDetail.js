"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      OrderDetail.belongsTo(models.Order, {
        foreignKey: "idOrder",
      });
      OrderDetail.belongsTo(models.Book, {
        foreignKey: "idBook",
      });
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
