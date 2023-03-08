require('dotenv').config();

const config = {
  app: {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    whiteList: process.env.APP_WHITE_LIST,
    author: process.env.APP_AUTHOR,
    secretKey: process.env.APP_SECRET_KEY,
  },
  db: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    return: process.env.DB_RETURN,
    dialect: 'mysql'
  },
  email: {
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    port: 465,
    secure: true
  }
};

module.exports = config;