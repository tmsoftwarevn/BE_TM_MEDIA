"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("media", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      key_word: {
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
      noidung: {
        type: Sequelize.TEXT,
      },
      type_id: {
        type: Sequelize.INTEGER,
      },
      slug:{
        type: Sequelize.STRING,
      },
      title_menu:{
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("media");
  },
};
