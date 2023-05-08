const { schedule_shooting } = require("../models");

/* add request shooting */
const create = (data) => schedule_shooting.create(data);

/* get all schedule */
const findAll = (params) => schedule_shooting.findAll(params);

module.exports = { create, findAll };
