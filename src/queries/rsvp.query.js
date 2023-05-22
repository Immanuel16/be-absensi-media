const { rsvp } = require("../models");

/* add request shooting */
const create = (data) => rsvp.create(data);

/* get all schedule */
const findAll = (params) => rsvp.findAll(params);

module.exports = { create, findAll };
