"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // {
      //   foreignKey: "idCategory",
      // }
      Book.belongsTo(models.Category);
      Book.hasOne(models.OrderDetail);
    }
  }
  Book.init(
    {
      author: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      slider: DataTypes.JSON,
      mainText: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
      idCategory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
