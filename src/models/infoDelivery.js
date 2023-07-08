"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class infoDelivery extends Model {
    static associate(models) {
      infoDelivery.belongsTo(models.User, {
        foreignKey: "idUser",
      });
      infoDelivery.hasMany(models.Order);
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
