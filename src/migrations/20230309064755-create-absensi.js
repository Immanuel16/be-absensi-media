'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('absens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      tanggal: {
        type: Sequelize.STRING
      },
      ir: {
        type: Sequelize.STRING
      },
      kom1: {
        type: Sequelize.STRING
      },
      kom2: {
        type: Sequelize.STRING
      },
      lighting: {
        type: Sequelize.STRING
      },
      cam1: {
        type: Sequelize.STRING
      },
      cam2: {
        type: Sequelize.STRING
      },
      cam3: {
        type: Sequelize.STRING
      },
      switcher: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      sound1: {
        type: Sequelize.STRING
      },
      sound2: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      classMethods: {},
      freezeTableName: true,
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('absens');
  }
};