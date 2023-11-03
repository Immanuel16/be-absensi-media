const logQueries = require("../queries/apilog.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");

const getLogErrors = async (req, res) => {
  try {
    const data = await logQueries.getLogErrors();
    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get Error Logs",
      data
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

module.exports = { getLogErrors };
