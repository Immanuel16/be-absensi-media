const { httpStatus } = require("../variables/response.variable");
const rsvpQueries = require("../queries/rsvp.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const { createRsvpPayload } = require("../payloads/rsvp.payload");

const getListRetreat = async (req, res) => {
  try {
    const response = await rsvpQueries.findAll({
      order: [["name", "DESC"]],
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

const createAvailRetreat = async (req, res) => {
  try {
    const data = {
      ...createScheduleShootingPayload(req.body),
    };

    await rsvpQueries.create(data);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Create shooting schedule success",
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

module.exports = { getListRetreat, createAvailRetreat };
