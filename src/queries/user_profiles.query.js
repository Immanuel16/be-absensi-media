// import { user_profiles } from "../models/index";
const { QueryTypes } = require("sequelize");
const { user_profiles, sequelize } = require("../models");
const { base64Decrypt } = require("../utils/encryptor.util");

const findOne = (params) => user_profiles.findOne(params);

const findAll = (params) => user_profiles.findAll(params);

const findAllUserAbsence = (params) =>
  user_profiles.scope("forAbsence").findAll(params);

const authUser = (params) =>
  user_profiles.scope("withPassword").findOne(params);

const create = (data) => user_profiles.create(data);

const updateById = (data, id) => user_profiles.update(data, { where: { id } });

const findCrewBirthdays = (params) => {
  return user_profiles.scope("forBirthday").findAll(params);
};

const findAndCountAll = (params) => user_profiles.findAndCountAll(params);

const findCrewBank = () => {
  // const mainQuery =
  //   "SELECT DISTINCT " +
  //   "usr.username, usr.bank_acc_name, usr.id, " +
  //   'bank.bank_name as "bankName", ' +
  //   "FROM user_profiles usr " +
  //   `LEFT JOIN bank_accounts bank ON bank.bank_code = ${base64Decrypt(
  //     usr.bank_id
  //   )}`;
  const mainQuery = `SELECT DISTINCT usr.username, usr.bank_acc_name, bank.bank_name FROM user_profiles as usr LEFT JOIN bank_accounts as bank ON usr.bank_id = bank.bank_code`;
  const completeQuery = `${mainQuery} ORDER BY usr.username;`;

  // const completeQuery = `${mainQuery} ORDER BY usr.username OFFSET :offset LIMIT :limit;`;
  // return sequelize.literal(completeQuery);
  return sequelize.query(completeQuery, {
    type: QueryTypes.SELECT,
  });
};

module.exports = {
  authUser,
  create,
  findAll,
  findAllUserAbsence,
  findAndCountAll,
  findCrewBirthdays,
  findCrewBank,
  findOne,
  updateById,
};
