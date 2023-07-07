"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Category);
      Book.hasOne(models.OrderDetail);
    }
  }
  Book.init(
    {
      author: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      slider: DataTypes.STRING,
      mainText: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
      idCategory: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
