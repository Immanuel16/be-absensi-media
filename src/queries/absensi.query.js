const { absens, sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

/* count total each crew in late person */
const count = (params) => absens.count(params);

/* detail absensi */
const findOne = (params) => absens.findOne(params);

/* get all absensi with pagination */
const findAndCountAll = (params) => absens.findAndCountAll(params);

/* get all absensi */
const findAll = (params) => absens.findAll(params);

/* get all late member */
const findAllLateMember = (params) =>
  absens.scope("lateMember").findAll(params);

/* add absensi */
const create = (data) => absens.create(data);

/* edit absensi */
const updateById = (data, id) => absens.update(data, { where: { id } });

/* delete absensi */
const destroy = (params) => absens.destroy(params);

module.exports = {
  count,
  findOne,
  findAndCountAll,
  findAll,
  findAllLateMember,
  create,
  destroy,
  updateById,
};
