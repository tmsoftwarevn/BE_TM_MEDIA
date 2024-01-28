"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class video_noi_bat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_noi_bat.init(
    {
      video_bg: DataTypes.STRING,
      link: DataTypes.STRING,
      name: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      
    },
    {
      sequelize,
      modelName: "video_noi_bat",
    }
  );
  return video_noi_bat;
};
