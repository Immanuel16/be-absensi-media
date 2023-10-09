const config = require("./env.config");

module.exports = {
  service: "gmail",
  host: config.email.host,
  auth: config.email.auth,
  port: config.email.port,
  secure: config.email.secure,
};
