const { jumat_agung } = require("../models");

const create = (data) => jumat_agung.create(data);

/* get all list with paging */
const findAndCountAll = (params) => jumat_agung.findAndCountAll(params);

/* get all list for downloads */
const findAll = (params) => jumat_agung.findAll(params);

/* find duplicate partisipan */
const findOne = (params) => jumat_agung.findOne(params);

/* verify check in participants */
const verifyParticipant = (data, id) =>
  jumat_agung.update(data, { where: { id } });

module.exports = {
  create,
  findAll,
  findAndCountAll,
  findOne,
  verifyParticipant,
};
