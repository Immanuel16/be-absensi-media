const { httpStatus } = require("../variables/response.variable");
const bankQueries = require("../queries/bank.query");
const { responseSuccess, responseError } = require("../utils/response.util");

const getListBank = async (req, res) => {
  try {
    const response = await bankQueries.getAll();

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

module.exports = { getListBank };
