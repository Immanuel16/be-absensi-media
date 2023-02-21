const { isUndefined } = require("lodash");
const moment = require("moment");

exports.generateCreatedAttribute = (req) => (
  {
    created_by: !isUndefined(req.user) ? req.user.id : req.headers.host,
    created_from: req.headers['user-agent'],
    createdAt: moment().toISOString()
  }
)

exports.generateModifiedAttribute = (req) => (
  {
    updated_by: !isUndefined(req.user) ? req.user.id : req.headers.host,
    updated_from: req.headers['user-agent'],
    updatedAt: moment().toISOString()
  }
)