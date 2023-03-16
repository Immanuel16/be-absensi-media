const {absens} = require("../models");

/* count total each crew in absensi */
const count = params => absens.count(params);

module.exports = {count}