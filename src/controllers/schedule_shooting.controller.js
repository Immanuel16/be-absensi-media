const { httpStatus } = require("../variables/response.variable");
const scheduleShootingQueries = require("../queries/schedule_shooting.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const {
  createScheduleShootingPayload,
} = require("../payloads/schedule_shooting.payload");
const { sendMailRequestShooting } = require("../services/email.service");

const getListSchedule = async (req, res) => {
  try {
    const response = await scheduleShootingQueries.findAll({
      order: [["request_date", "ASC"]],
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

const createScheduleShooting = async (req, res) => {
  try {
    let { name, description, request_date, division } = req.body;
    name = name.toLowerCase();
    const data = {
      ...createScheduleShootingPayload(req.body),
    };

    await scheduleShootingQueries.create(data);

    await sendMailRequestShooting({
      name,
      description,
      division,
      request_date,
    });

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

module.exports = { getListSchedule, createScheduleShooting };
