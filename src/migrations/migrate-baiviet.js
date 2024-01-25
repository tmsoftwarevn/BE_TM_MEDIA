"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("baiviet", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tieude: {
        type: Sequelize.STRING,
      },
      meta_des: {
        type: Sequelize.STRING,
      },
      noidung: {
        type: Sequelize.TEXT,
      },
      type_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("baiviet");
  },
};
