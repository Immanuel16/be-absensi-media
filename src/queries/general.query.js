const { ibadah_raya } = require("../models");
const { divisi_pelayanan } = require("../models");
const { pastor_greetings } = require("../models");

const getAll = (params) => ibadah_raya.findAll(params);

const getAllDivision = (params) => divisi_pelayanan.findAll(params);

/* sapaan gembala */
const getPastorGreetings = (params) => pastor_greetings.findOne(params);

const updatePastorGreetings = (data, id) =>
  pastor_greetings.update(data, { where: { id } });

module.exports = {
  getAll,
  getAllDivision,
  getPastorGreetings,
  updatePastorGreetings,
};
