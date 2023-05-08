const { ibadah_raya } = require("../models");
const { divisi_pelayanan } = require("../models");

const getAll = (params) => ibadah_raya.findAll(params);

const getAllDivision = (params) => divisi_pelayanan.findAll(params);

module.exports = { getAll, getAllDivision };
