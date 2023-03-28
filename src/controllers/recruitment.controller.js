const { httpStatus } = require("../variables/response.variable");
const recruitmentQueries = require("../queries/recruitment.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const {
  createNewCandidatePayload,
} = require("../payloads/recruitment.payload");

const getListCandidate = async (req, res) => {
  try {
    const response = await recruitmentQueries.findAll({
      order: [["name", "ASC"]],
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

const createNewCandidate = async (req, res) => {
  try {
    const data = {
      ...createNewCandidatePayload(req.body),
    };

    await recruitmentQueries.create(data);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Create Candidate Success",
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

module.exports = { getListCandidate, createNewCandidate };
