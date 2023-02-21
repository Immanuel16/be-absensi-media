const {api_log} = require("../models");

exports.insertLog = (data) => {
  return api_log.create(data);
}