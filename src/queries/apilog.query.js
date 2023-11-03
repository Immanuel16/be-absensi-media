const { QueryTypes } = require("sequelize");
const { api_log, sequelize } = require("../models");

const insertLog = (data) => {
  return api_log.create(data);
};

const getLogErrors = () => {
  const mainQuery = `SELECT DISTINCT * FROM api_logs as log LEFT JOIN ( SELECT id, username FROM user_profiles) as usr ON log.created_by = usr.id`;
  const completeQuery = `${mainQuery} ORDER BY log.createdAt DESC;`;
  return sequelize.query(completeQuery, {
    type: QueryTypes.SELECT,
  });
};

module.exports = { getLogErrors, insertLog };
