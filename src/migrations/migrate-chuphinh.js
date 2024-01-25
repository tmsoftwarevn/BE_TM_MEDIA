"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("chuphinh", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
      },
      thumbnail: {
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
    await queryInterface.dropTable("chuphinh");
  },
};
