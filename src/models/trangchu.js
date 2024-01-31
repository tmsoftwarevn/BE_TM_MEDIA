"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class trangchu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trangchu.init(
    {
      key_word: DataTypes.STRING,
      meta_des: DataTypes.STRING,
      banner_bg: DataTypes.STRING,
      video_bg: DataTypes.STRING,
      link: DataTypes.STRING,
      //them
      logo: DataTypes.STRING,
      mota_cty: DataTypes.TEXT,
      thuonghieu: DataTypes.STRING,
      bg_thongke: DataTypes.STRING,
      s1: DataTypes.STRING,
      s2: DataTypes.STRING,
      s3: DataTypes.STRING,
      t1: DataTypes.STRING,
      t2: DataTypes.STRING,
      t3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "trangchu",
    }
  );
  return trangchu;
};
