const { httpStatus } = require("../variables/response.variable");
const generalQueries = require("../queries/general.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const { response } = require("express");

const getListScheduleMinistries = async (req, res) => {
  try {
    const response = await generalQueries.getAll({
      order: [["ir_name", "ASC"]],
    });
    return responseSuccess(req, res, httpStatus.SUCCESS, "", response);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

/* sapaan gembala */
const getPastorGreetings = async (req, res) => {
  try {
    const response = await generalQueries.getPastorGreetings();
    return responseSuccess(req, res, httpStatus.SUCCESS, "", response);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

// const updateGreetings

const getListDivision = async (req, res) => {
  try {
    const response = await generalQueries.getAllDivision({
      order: [["division_name", "ASC"]],
    });
    return responseSuccess(req, res, httpStatus.SUCCESS, "", response);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

module.exports = {
  getListDivision,
  getListScheduleMinistries,
  getPastorGreetings,
};
