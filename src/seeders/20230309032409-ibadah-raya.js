"use strict";
const moment = require("moment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ibadah_rayas",
      [
        {
          ir_name: "Ibadah Raya 1",
          ir_code: "IR 1",
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        },
        {
          ir_name: "Ibadah Raya 2",
          ir_code: "IR 2",
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        },
        {
          ir_name: "Ibadah Raya 3",
          ir_code: "IR 3",
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        },
        {
          ir_name: "Ibadah Raya 4",
          ir_code: "IR 4",
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        },
        {
          ir_name: "BTC 1",
          ir_code: "BTC 1",
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        },
        {
          ir_name: "BTC 2",
          ir_code: "BTC 2",
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ibadah_rayas", null, {});
  },
};
