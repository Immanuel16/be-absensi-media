const { generateCreatedAttribute, generateModifiedAttribute } = require("../utils/userstamp.util");
const {v4} = require("uuid");

exports.loggerGenerator = (req, status, message, txId) => ({
  id: v4(),
  txId,
  url: req.originalUrl,
  status,
  body: req.body,
  message,
  ...generateCreatedAttribute(req),
  ...generateModifiedAttribute(req)
});