const Joi = require("joi");
const {isEmpty} = require("lodash");
const {responseError} = require("../utils/response.util");
const {httpStatus} = require("../variables/response.variable");


exports.authUser = async (req, res, next) => {
  try {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = schema.validate({
      ...req.body,
      ...req.params,
      ...req.query,
    });
    if (!isEmpty(result.error))
      return responseError(
        req,
        res,
        httpStatus.ERROR_MIDDLEWARE,
        result.error.message,
        null
      );
    return next();
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
