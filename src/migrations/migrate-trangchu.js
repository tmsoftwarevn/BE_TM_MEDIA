"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("trangchu", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      key_word:{
        type: Sequelize.STRING,
      },
      meta_des: {
        type: Sequelize.STRING,
      },
      banner_bg: {
        type: Sequelize.STRING,
      },
      video_bg: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
      /// thêm
     logo:{
        type: Sequelize.STRING,
     },
     icon_web:{
      type: Sequelize.STRING,
   },
     mota_cty:{
        type: Sequelize.TEXT,
     },
     thuonghieu: {
        type: Sequelize.STRING,
     },
     bg_thongke:{
        type: Sequelize.STRING,
     },
     s1:{
        type: Sequelize.STRING,
     },
     s2:{
        type: Sequelize.STRING,
     },
     s3:{
        type: Sequelize.STRING,
     },
     t1:{
        type: Sequelize.STRING,
     },
     t2:{
        type: Sequelize.STRING,
     },
     t3:{
        type: Sequelize.STRING,
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("trangchu");
  },
};
