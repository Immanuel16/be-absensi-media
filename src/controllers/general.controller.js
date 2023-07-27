const { httpStatus } = require("../variables/response.variable");
const generalQueries = require("../queries/general.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const { response } = require("express");
const {
  updatePastorGreetingsPayload,
} = require("../payloads/pastor_greetings.payload");

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

const updatePastorGreetings = async (req, res) => {
  try {
    const data = {
      ...updatePastorGreetingsPayload(req.body, req.user.username),
    };

    await generalQueries.updatePastorGreetings(data, 1);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Update Data Success",
      null
    );
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
  updatePastorGreetings,
};
