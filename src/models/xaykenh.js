'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class xaykenh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  xaykenh.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    link: DataTypes.STRING,
    noidung:DataTypes.TEXT,
    type_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'xaykenh',
  });
  return User;
};