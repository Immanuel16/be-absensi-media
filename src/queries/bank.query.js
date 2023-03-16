const { bank_accounts } = require("../models");

const getAll = (params) => bank_accounts.findAll(params);

module.exports = { getAll };
