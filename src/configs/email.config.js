const config = require("./env.config");

module.exports = {
  host: config.email.host,
  auth: config.email.auth,
  port: config.email.port,
  secure: config.email.secure
};