const { absens } = require("../models");

/* detail absensi */
const findOne = (params) => absens.findOne(params);

/* get all absensi with pagination */
const findAndCountAll = (params) => absens.findAndCountAll(params);

/* get all absensi */
const findAll = (params) => absens.findAll(params);

/* add absensi */
const create = (data) => absens.create(data);

/* edit absensi */
const updateById = (data, id) => absens.update(data, { where: { id } });

/* delete absensi */
const destroy = (params) => absens.destroy(params);

module.exports = {
  findOne,
  findAndCountAll,
  findAll,
  create,
  destroy,
  updateById,
};
