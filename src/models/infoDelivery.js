"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class infoDelivery extends Model {
    static associate(models) {
      infoDelivery.belongsTo(User);
      infoDelivery.hasMany(Order);
    }
  }
  infoDelivery.init(
    {
      fullname: DataTypes.STRING,
      phone: DataTypes.INTEGER,
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
