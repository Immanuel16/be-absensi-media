'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bank_accounts', [
        {
            bank_name: "Bank Rakyat Indonesia (BRI)",
            bank_code: "002",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Mandiri",
            bank_code: "008",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Negara Indonesia (BNI)",
            bank_code: "009",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Tabungan Negara (BTN)",
            bank_code: "200",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Danamon",
            bank_code: "011",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Permata",
            bank_code: "013",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Central Asia (BCA)",
            bank_code: "002",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Maybank Indonesia",
            bank_code: "016",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank CIMB Niaga",
            bank_code: "022",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Bank Mega",
            bank_code: "426",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
            bank_name: "Allo Bank",
            bank_code: "567",
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bank_accounts', null, {});
  }
};
