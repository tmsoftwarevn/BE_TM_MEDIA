'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lienhe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lienhe.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone:DataTypes.STRING,
    noidung:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'lienhe',
  });
  return lienhe;
};