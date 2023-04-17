const { QueryTypes } = require("sequelize");
const { absens, sequelize, user_profiles } = require("../models");

/* count total each crew in absensi */
const count = (params) => absens.count(params);

const findBankCrew = (bank_code) => {
  const query = `SELECT bank_name FROM bank_accounts WHERE bank_code=${bank_code}`;

  return sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
};

const updateBankCrew = (data, id) =>
  user_profiles.update(data, { where: { id } });

module.exports = { count, findBankCrew, updateBankCrew };
