const { riwayat_kas } = require("../models");

/* get all history with pagination */
const findAndCountAll = (params) => riwayat_kas.findAndCountAll(params);

/* get all history */
const findAll = (params) => riwayat_kas.findAll(params);

/* get detail */
const findOne = (params) => riwayat_kas.findOne(params);

/* add history */
const create = (data) => riwayat_kas.create(data);

/* edit history */
const updateById = (data, id) => riwayat_kas.update(data, { where: { id } });

/* delete history */
const destroy = (params) => riwayat_kas.destroy(params);

module.exports = {
  findOne,
  findAndCountAll,
  create,
  updateById,
  findAll,
  destroy,
};
