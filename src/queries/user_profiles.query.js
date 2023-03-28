// import { user_profiles } from "../models/index";
const { user_profiles } = require("../models");

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

module.exports = {
  authUser,
  create,
  findAll,
  findAllUserAbsence,
  findAndCountAll,
  findCrewBirthdays,
  findOne,
  updateById,
};
