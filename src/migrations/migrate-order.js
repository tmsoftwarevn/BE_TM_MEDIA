"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Order", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      totalProduct: {
        type: Sequelize.INTEGER,
      },
      payment: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      idInfoDelivery: {
        type: Sequelize.INTEGER,
      },
      idUser: {
        type: Sequelize.INTEGER,
      },
      idStatus: {
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
    await queryInterface.dropTable("Order");
  },
};
