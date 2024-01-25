"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  media.init(
    {
      banner_bg: DataTypes.STRING,
      video_bg: DataTypes.STRING,
      link: DataTypes.STRING,
      noidung: DataTypes.TEXT,
      type_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "media",
    }
  );
  return media;
};
