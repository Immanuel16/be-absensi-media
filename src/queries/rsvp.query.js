const { rsvp } = require("../models");

/* add gathering */
const create = (data) => rsvp.create(data);

/* get all crew gathering */
const findAll = (params) => rsvp.findAll(params);

/* get all crew gathering */
const findOne = (params) => rsvp.findOne(params);

module.exports = { create, findAll, findOne };
