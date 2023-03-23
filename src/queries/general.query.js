const { ibadah_raya } = require("../models");

const getAll = (params) => ibadah_raya.findAll(params);

module.exports = { getAll };
