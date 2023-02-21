// import { user_profiles } from "../models/index";
const {user_profiles} = require("../models");

const findOne = (params) => user_profiles.findOne(params);
const findAll = (params) => user_profiles.findAll(params);
const authUser = (params) =>
  user_profiles.scope("withPassword").findOne(params);
const create = (data) => user_profiles.create(data);
const updateById = (data, id) => user_profiles.update(data, { where: { id } });

module.exports =  { authUser, create, findAll, findOne, updateById };
