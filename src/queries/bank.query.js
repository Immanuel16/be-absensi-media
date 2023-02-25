const {bank_accounts} = require("../models");

const getAll = () => bank_accounts.findAll();

module.exports = { getAll }