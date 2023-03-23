"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "user_profiles",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        full_name: {
          type: Sequelize.STRING,
        },
        birth_date: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
        },
        bank_id: {
          type: Sequelize.STRING,
        },
        bank_acc_num: {
          type: Sequelize.STRING,
        },
        bank_acc_name: {
          type: Sequelize.STRING,
        },
        province: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        district: {
          type: Sequelize.STRING,
        },
        subdistrict: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        username: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        kom: {
          type: Sequelize.INTEGER,
        },
        hmc: {
          type: Sequelize.INTEGER,
        },
        baptis: {
          type: Sequelize.INTEGER,
        },
        orientasi: {
          type: Sequelize.INTEGER,
        },
        photo: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.INTEGER,
        },
        role: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        classMethods: {},
        freezeTableName: true,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_profiles");
  },
};
