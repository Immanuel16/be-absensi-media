'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('api_logs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      tx_id: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.JSON
      },
      message: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      created_from: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      updated_from: {
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
    await queryInterface.dropTable('api_logs');
  }
};