const { absens } = require("../models");

/* detail absensi */
const findOne = (params) => absens.findOne(params);

/* get all absensi */
const findAndCountAll = (params) => absens.findAndCountAll(params);

/* add absensi */
const create = (data) => absens.create(data);

/* edit absensi */
const updateById = (data, id) => absens.update(data, { where: { id } });

module.exports = { findOne, findAndCountAll, create, updateById };
