const { recruitment } = require("../models");

/* regis new candidate */
const create = (data) => recruitment.create(data);

/* get all candidate */
const findAll = (params) => recruitment.findAll(params);

module.exports = { create, findAll };
