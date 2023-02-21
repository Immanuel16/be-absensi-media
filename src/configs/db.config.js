const config = require('./env.config');

module.exports = {
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  port: 3306,
  host: config.db.host,
  dialect: 'mysql',
  logging: false,
  return: Boolean(config.db.return),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 20000,
  },
  query: {
    raw: true,
  },
};