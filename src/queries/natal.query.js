const { natal } = require("../models");

const create = (data) => natal.create(data);

/* get all list with paging */
const findAndCountAll = (params) => natal.findAndCountAll(params);

/* get all list for downloads */
const findAll = (params) => natal.findAll(params);

/* find duplicate partisipan */
const findOne = (params) => natal.findOne(params);

module.exports = {
  create,
  findAll,
  findAndCountAll,
  findOne,
};
